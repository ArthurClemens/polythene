/* global cy, describe, before, it */

import { baseUrl } from "../../../support";
import { rootPath } from "../common";

describe("Text Field render", () => {
  before(() => {
    cy.visit(`${baseUrl()}${rootPath}/render`);
  });

  it("should show the render count", () => {
    cy.get("[data-test-id=count]").should("contain", "1");
    cy.get("[data-test-id=0-0] input").click();
    // expect 3 more events: onclick, onfocus, onblur
    cy.get("[data-test-id=count]").should("contain", "4");
    // expect 3 more events: oninput, and Mithril's event => redraw
    cy.get("[data-test-id=0-0] input").type("X");
    cy.get("[data-test-id=count]").should("contain", "6");
  });
   
});
