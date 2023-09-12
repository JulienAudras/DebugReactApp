import { useEffect, useState } from "react";
// import { nanoid } from "nanoid";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

function generateUniqueKey(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  );

  const nextCard = () => {
    setTimeout(
      () => setIndex(index < byDateDesc.length - 1 ? index + 1 : 0),
      5000
    );
  };

  // const handleRadioClick = (radioIdx) => {
  //   setIndex(radioIdx );
  // };

  useEffect(() => {
    nextCard();
  });

  if (!data) {
    return "loading";
  }

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <>
          <div
            key={`"slide" + ${event.title}`}
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img
              src={event.cover}
              key={`"image" + ${event.cover}`}
              alt="forum"
            />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3 key={`"titre" + ${event.title}`}>{event.title}</h3>
                <p key={`"descritpion" + ${event.description}`}>
                  {event.description}
                </p>
                <div key={`"date" + ${event.date}`}>
                  {getMonth(new Date(event.date))}
                </div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  key={generateUniqueKey("radio")}
                  type="radio"
                  name="radio-button"
                  checked={index === radioIdx}
                  onChange={() => {}}
                  // onClick={() => moveIndex(index + 1)}
                  // onClick={() => onclick(radioIdx)}
                />
              ))}
            </div>
          </div>
          {/* {console.log("radioIdx:", radioIdx)} */}
        </>
      ))}
    </div>
  );
};

export default Slider;
