/* global cy, describe, before, it */

import { baseUrl } from "../../../support";
import { rootPath } from "../common";

describe("Text Field defaultValue", () => {
  before(() => {
    cy.visit(`${baseUrl()}${rootPath}/defaultValue`);
  });
  it("should change replace the default with the typed value", () => {
    cy.get("[data-test-id=defaultValue] input").should("have.value", "Text");
    cy.get("[data-test-id=defaultValue] input").type(" QWERTY{esc}");
    cy.get("[data-test-id=defaultValue] input").should("have.value", "Text QWERTY");
  });
});
