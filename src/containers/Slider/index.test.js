import { render, screen } from "@testing-library/react";
import Slider from "./index";
import { api, DataProvider } from "../../contexts/DataContext";

const data = {
  focus: [
    {
      title: "World economic forum",
      description:
        "Oeuvre à la coopération entre le secteur public et le privé.",
      date: "2022-02-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      title: "World Gaming Day",
      description: "Evenement mondial autour du gaming",
      date: "2022-03-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      title: "World Farming Day",
      description: "Evenement mondial autour de la ferme",
      date: "2022-01-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
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

  it("should find 'World economic forum' text", async () => {
    await screen.findByText("World economic forum");
  });

  it("should find 'janvier' text", async () => {
    await screen.findByText("janvier");
  });

  it("should find description text", async () => {
    await screen.findByText(
      "Oeuvre à la coopération entre le secteur public et le privé."
    );
  });
});

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
