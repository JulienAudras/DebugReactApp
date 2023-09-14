import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "./index";

describe("When Menu is created", () => {
  it("a list of mandatories links and the logo are displayed", async () => {
    render(<Menu />);
    await screen.findByText("Nos services");
    await screen.findByText("Nos réalisations");
    await screen.findByText("Notre équipe");
    await screen.findByText("Contact");
  });

  describe("and a click is triggered on contact button", () => {
    it("document location  href change", async () => {
      render(<Menu />);
      fireEvent(
        await screen.findByText("Contact"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      expect(window.document.location.hash).toEqual("#contact");
    });
  });

  // describe("and a click is triggered on Notre équipe button", () => {
  //   it("document location  href change", async () => {
  //     render(<Menu />);
  //     fireEvent(
  //       await screen.findByText("Notre équipe"),
  //       new MouseEvent("click", {
  //         cancelable: true,
  //         bubbles: true,
  //       })
  //     );
  //     expect(window.document.location.hash).toEqual("#notre-equipe");
  //   });
  // });

  //   describe("and a click is triggered on Nos services button", () => {
  //     it("document location  href change", async () => {
  //       render(<Menu />);
  //       fireEvent(
  //         await screen.findByText("Nos services"),
  //         new MouseEvent("click", {
  //           cancelable: true,
  //           bubbles: true,
  //         })
  //       );
  //       expect(window.document.location.hash).toEqual("#nos-services");
  //     });
  //   });
  // });

  // test("Anchors links in menu are working", () => {
  //     const { getByText } = render(<Menu />);

  //     const servicesLink = getByText("Nos services");
  //     const realisationsLink = getByText("Nos réalisations");
  //     const equipeLink = getByText("Notre équipe");

  //     fireEvent.click(servicesLink);
  //     expect(window.location.hash).toBe("#nos-services");

  //     fireEvent.click(realisationsLink);
  //     expect(window.location.hash).not.toBe("#nos-realisations");

  //     fireEvent.click(equipeLink);
  //     expect(window.location.hash).not.toBe("#notre-equipe");
});
