/* global cy, describe, it */

import { baseUrl, getRenderer } from "../../../support";
import { rootPath } from "../common";

const renderer = getRenderer();

describe("Text Field render", () => {
  it("should show the render count", () => {
    if (renderer === "mithril") {
      cy.visit(`${baseUrl()}${rootPath}/render`);
      cy.get("[data-test-id=count]").should("contain", "1");
      cy.get("[data-test-id=0-0] input").click();
      // expect 3 more events: onclick, onfocus, onblur
      cy.get("[data-test-id=count]").should("contain", "3");
      // expect 3 more events: oninput, and Mithril's event => redraw
      cy.get("[data-test-id=0-0] input").type("X");
      cy.get("[data-test-id=count]").should("contain", "5");
    } else if (renderer === "react") {
      cy.visit(`${baseUrl()}${rootPath}/render`);
      cy.get("[data-test-id=count]").should("contain", "1");
      cy.get("[data-test-id=0-0] input").click();
      cy.get("[data-test-id=count]").should("contain", "1");
      cy.get("[data-test-id=0-0] input").type("X");
      cy.get("[data-test-id=count]").should("contain", "1");
    }
  });
});
