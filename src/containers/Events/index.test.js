import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { api, DataProvider } from "../../contexts/DataContext";
import Events from "./index";

const eventlistComponent = (
  <DataProvider>
    <Events />
  </DataProvider>
);

const data = {
  events: [
    {
      id: 1,
      type: "conférence",
      date: "2022-04-29T20:28:45.744Z",
      title: "User&product MixUsers",
      cover: "/images/alexandre-pellaes-6vAjp0pscX0-unsplash.png",
      description: "Présentation des nouveaux usages UX.",
      nb_guesses: 900,
      periode: "14-15-16 Avril",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "1 espace de restaurations",
      ],
    },
    {
      id: 2,
      type: "expérience digitale",
      date: "2022-01-29T20:28:45.744Z",
      title: "#DigitonPARIS",
      cover: "/images/charlesdeluvio-wn7dOzUh3Rs-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "1 site web dédié",
      ],
    },
    {
      id: 3,
      type: "conférence",
      date: "2022-03-29T20:28:45.744Z",
      title: "Conférence &co-responsable",
      cover: "/images/chuttersnap-Q_KdjKxntH8-unsplash.png",
      description:
        "Débats et échanges autour des collaborations eco-responsable.",
      nb_guesses: 600,
      periode: "24-25-26 Février",
      prestations: [
        "1 scéne principale",
        "1 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 4,
      type: "conférence",
      date: "2022-08-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/headway-F2KRf_QfCqw-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 5,
      type: "expérience digitale",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/pablo-heimplatz-ZODcBkEohk8-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 6,
      type: "conférence",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/priscilla-du-preez-Q7wGvnbuwj0-unsplash1.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 7,
      type: "expérience digitale",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/product-school-dJICd7b_LlE-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 8,
      type: "conférence",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/product-school-nOvIa_x_tfo-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 9,
      type: "expérience digitale",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/stem-list-EVgsAbL51Rk-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 10,
      type: "soirée entreprise",
      date: "2022-04-29T20:28:45.744Z",
      title: "User&product MixUsers",
      cover: "/images/alexandre-pellaes-6vAjp0pscX0-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 11,
      type: "conférence",
      date: "2022-01-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/charlesdeluvio-wn7dOzUh3Rs-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 12,
      type: "soirée entreprise",
      date: "2022-03-29T20:28:45.744Z",
      title: "Mega Event",
      cover: "/images/chuttersnap-Q_KdjKxntH8-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 13,
      type: "conférence",
      date: "2022-08-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/headway-F2KRf_QfCqw-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 14,
      type: "conférence",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/pablo-heimplatz-ZODcBkEohk8-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 15,
      type: "soirée entreprise",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/priscilla-du-preez-Q7wGvnbuwj0-unsplash1.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 16,
      type: "conférence",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/product-school-dJICd7b_LlE-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 17,
      type: "conférence",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/product-school-nOvIa_x_tfo-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
    {
      id: 18,
      type: "soirée entreprise",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/stem-list-EVgsAbL51Rk-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur ",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },
  ],
};

describe("When Events is created", () => {
  it("a list of event card is displayed", async () => {
    api.loadData = jest.fn().mockReturnValue(data);
    render(eventlistComponent);
    await screen.findAllByText("avril");
  });
  describe("and an error occured", () => {
    it("an error message is displayed", async () => {
      await act(async () => {
        api.loadData = jest.fn().mockRejectedValue(data);
        render(eventlistComponent);
      });
      expect(await screen.findByText("An error occured")).toBeInTheDocument();
    });
  });

  describe("and we select a category", () => {
    it("an filtered list is displayed", async () => {
      api.loadData = jest.fn().mockReturnValue(data);
      render(eventlistComponent);
      await screen.findByText("Toutes");
      fireEvent(
        await screen.findByTestId("collapse-button-testid"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      fireEvent(
        (await screen.findAllByText("soirée entreprise"))[0],
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );

      await screen.findAllByText("Conférence #productCON");
      expect(screen.queryByText("Forum #productCON")).not.toBeInTheDocument();
    });
  });

  describe("and we click on an event", () => {
    it("the event detail is displayed", async () => {
      api.loadData = jest.fn().mockReturnValue(data);
      render(eventlistComponent);
      const conferencesElements = await screen.findAllByText(
        "Conférence #productCON"
      );

      fireEvent.click(conferencesElements[0]);

      await screen.findByText("24-25-26 Février");
      await screen.findByText("1 site web dédié");
    });
  });

  describe("and we click on the next page button", () => {
    it("the next page is displayed", async () => {
      api.loadData = jest.fn().mockReturnValue(data);
      render(eventlistComponent);

      const page2 = await screen.findByTestId("page-2");
      expect(page2).toBeInTheDocument();
      fireEvent.click(page2);

      await screen.findByText("Mega Event");
    });
  });
});
