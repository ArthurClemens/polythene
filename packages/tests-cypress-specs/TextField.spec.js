/* global cy, expect, describe, beforeEach, it */

describe("TextField", () => {
  beforeEach(() => {
    cy.visit("/TextField");
  });
  it("attrs", () => {
    // default
    cy.get("[data-test-id=textfield-default]").should(
      "have.class",
      "pe-textfield"
    );
    cy.get(
      "[data-test-id=textfield-default] .pe-textfield__input-area input.pe-textfield__input"
    )
      .should("have.attr", "type", "text")
      .should("have.value", "");

    // defaultValue
    cy.get(
      "[data-test-id=textfield-defaultValue] .pe-textfield__input-area input.pe-textfield__input"
    ).should("have.value", "Abc");

    // type email
    cy.get(
      "[data-test-id=textfield-type-email] .pe-textfield__input-area input.pe-textfield__input"
    )
      .should("have.attr", "type", "email")
      .should("have.value", "a@bc");

    // type number
    cy.get(
      "[data-test-id=textfield-type-number] .pe-textfield__input-area input.pe-textfield__input"
    )
      .should("have.attr", "type", "number")
      .should("have.value", "123");

    // type password
    cy.get(
      "[data-test-id=textfield-type-password] .pe-textfield__input-area input.pe-textfield__input"
    )
      .should("have.attr", "type", "password")
      .should("have.value", "777");
  });
});
