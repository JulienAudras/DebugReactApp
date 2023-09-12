import { useState } from "react";
import EventCard from "../../components/EventCard";
import Select from "../../components/Select";
import { useData } from "../../contexts/DataContext";
import Modal from "../Modal";
import ModalEvent from "../ModalEvent";

import "./style.css";

const PER_PAGE = 9;

const EventList = () => {
  const { data, error } = useData();
  const [type, setType] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  // const filteredEvents = ((!type ? data?.events : data?.events) || []).filter(
  //   (event, index) => {
  //     console.log("Type:", type);
  //     if (
  //       (currentPage - 1) * PER_PAGE <= index &&
  //       PER_PAGE * currentPage > index
  //     ) {
  //       return true;
  //     }
  //     return false;
  //   }
  // );

  // const eventsTodisplay = data?.events || [];

  const startIndex = (currentPage - 1) * PER_PAGE;
  const endIndex = startIndex + PER_PAGE;

  const allFilteredEvents = (data?.events || []).filter(
    (event) => !type || event.type === type
  );

  const filteredEvents = allFilteredEvents.slice(startIndex, endIndex);

  // Pour faire fonctioner le filtre il a fallut changer la condition qui renvoyait toujours le tableau complet
  // La formule initiale empechait l'affichage des élements au dessus de l'incide 10 dans l'index

  // const filteredEvents = (data?.events || []).filter((event, index) => {

  //   console.log("Type:", type);
  //   if (
  //     (currentPage - 1) * PER_PAGE <= index &&
  //     PER_PAGE * currentPage > index
  //   ) {
  //     if (!type || event.type === type) {
  //       return true;
  //     }
  //   }
  //   return false;
  // });
  // console.log("Filtered events:", filteredEvents);
  // console.log("type = ", type);

  const changeType = (evtType) => {
    setCurrentPage(1);
    setType(evtType);
    // console.log("Updated type:", type);
  };

  // Ajout de sorted event qui permet de trier les events par date dans un array
  // const sortedEvents = (data?.events || []).sort((a, b) => {
  //   const dateA = new Date(a.date);
  //   const dateB = new Date(b.date);
  //   return dateA - dateB;
  // });

  const pageNumber = Math.floor((filteredEvents?.length || 0) / PER_PAGE) + 1;
  const typeList = new Set(data?.events.map((event) => event.type));
  return (
    <>
      {error && <div>An error occured</div>}
      {data === null ? (
        "loading"
      ) : (
        <>
          <h3 className="SelectTitle">Catégories</h3>
          <Select
            selection={Array.from(typeList)}
            onChange={(value) => (value ? changeType(value) : changeType(null))}
          />
          <div id="events" className="ListContainer">
            {filteredEvents.map((event) => (
              <Modal key={event.id} Content={<ModalEvent event={event} />}>
                {({ setIsOpened }) => (
                  <EventCard
                    key={event.id}
                    onClick={() => setIsOpened(true)}
                    imageSrc={event.cover}
                    title={event.title}
                    date={new Date(event.date)}
                    label={event.type}
                  />
                )}
              </Modal>
            ))}
          </div>
          <div className="Pagination">
            {[...Array(pageNumber || 0)].map((_, n) => (
              // eslint-disable-next-line react/no-array-index-key
              <a key={n} href="#events" onClick={() => setCurrentPage(n + 1)}>
                {n + 1}
              </a>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default EventList;
