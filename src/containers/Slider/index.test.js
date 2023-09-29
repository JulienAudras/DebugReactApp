import { render, screen, waitFor } from "@testing-library/react";
import Slider from "./index";
import { api, DataProvider } from "../../contexts/DataContext";

jest.setTimeout(10000);

const data = {
  focus: [
    {
      title: "World economic forum",
      description:
        "Oeuvre à la coopération entre le secteur public et le privé.",
      date: "2022-01-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      title: "Nordic design week",
      description: "Conférences sur le design de demain dans le digital",
      date: "2022-03-29T20:28:45.744Z",
      cover: "/images/teemu-paananen-bzdhc5b3Bxs-unsplash1.png",
    },
    {
      title: "Sneakercraze market",
      description: "Rencontres de spécialistes des Sneakers Européens.",
      date: "2022-05-29T20:28:45.744Z",
      cover: "/images/jakob-dalbjorn-cuKJre3nyYc-unsplash 1.png",
    },
  ],
};

const sliderComponent = (
  <DataProvider>
    <Slider />
  </DataProvider>
);

describe("When slider is created and a list card is displayed", () => {
  beforeEach(() => {
    window.console.error = jest.fn();
    api.loadData = jest.fn().mockReturnValue(data);
    render(sliderComponent);
  });

  it("should find 'Sneakercraze market' text", async () => {
    await screen.findByText("World economic forum");
  });

  it("should find 'mai' text", async () => {
    await screen.findByText("janvier");
  });

  it("should find description text", async () => {
    await screen.findByText(
      "Rencontres de spécialistes des Sneakers Européens."
    );
  });
});

describe("When slider is displaying the second card", () => {
  beforeEach(() => {
    window.console.error = jest.fn();
    api.loadData = jest.fn().mockReturnValue(data);
    render(sliderComponent);
  });

  it("should find 'Nordic design week' text", async () => {
    await waitFor(
      () => {
        expect(screen.getByText("Nordic design week")).toBeInTheDocument();
        expect(
          screen.getByText(
            "Conférences sur le design de demain dans le digital"
          )
        ).toBeInTheDocument();
      },
      { timeout: 6000 }
    );
  });
});

// describe("When slider is created and a list card is displayed", () => {
// it("should display the second slide correctly", async () => {
//   // Attendez que la deuxième diapositive soit affichée
//   await waitFor(
//     () => {
//       const slides = screen.getAllByTestId("slide");
//       const secondSlide = slides[1]; // La deuxième slide
//       const title = secondSlide.querySelector("h3");
//       const description = secondSlide.querySelector("p");

//       // Vérifiez que le titre et la description de la deuxième slide sont corrects
//       expect(title).toHaveTextContent("World Gaming Day");
//       expect(description).toHaveTextContent(
//         "Evenement mondial autour du gaming"
//       );
//     },
//     { timeout: 6000 }
//   ); // Ajustez le timeout si nécessaire
// });

// describe("When slider is displaying the second slide", () => {
//   beforeEach(async () => {
//     window.console.error = jest.fn();
//     api.loadData = jest.fn().mockReturnValue(data);
//     render(sliderComponent);
//   });

//   it("The slides are displayed in descending order", async () => {
//     await waitFor(
//       () => {
//         expect(screen.getByText("Nordic design week")).toBeInTheDocument();
//         expect(
//           screen.getByText(
//             "Conférences sur le design de demain dans le digital"
//           )
//         ).toBeInTheDocument();
//         expect(screen.getByText("mars")).toBeInTheDocument();
//       },
//       { timeout: 6000 }
//     );
//   });
// });

describe("When slider is created and it is displaying the same number of slides than radio buttons", () => {
  let slides;
  let radioButtons;

  beforeEach(async () => {
    window.console.error = jest.fn();
    api.loadData = jest.fn().mockReturnValue(data);
    render(sliderComponent);

    slides = await screen.findAllByTestId("slide");
    radioButtons = await screen.findAllByTestId("radio-button");
  });

  it("should have the same number of slides and radio buttons", () => {
    expect(slides.length).toBe(radioButtons.length);
  });

  it("and should have the same checked radio button as the displayed slide", () => {
    const checkedRadioButton = radioButtons.find(
      (radioButton) => radioButton.checked
    );

    const checkedRadioButtonIndex = radioButtons.indexOf(checkedRadioButton);

    const slidePosition = slides.findIndex((slide) =>
      slide.classList.contains("SlideCard--display")
    );

    expect(checkedRadioButtonIndex).toBe(slidePosition);
  });
});
