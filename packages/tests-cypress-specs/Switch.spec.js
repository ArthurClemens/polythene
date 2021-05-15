/* global cy, expect, describe, beforeEach, it */

describe("Switch", () => {
  before(() => {
    cy.visit("/Switch");
  });

  it("default", () => {
    cy.get("[data-test-id=switch-default]")
      .should("have.class", "pe-control")
      .should("have.class", "pe-switch-control")
      .should("have.class", "pe-control--regular")
      .should("have.class", "pe-control--off");
    cy.get("[data-test-id=switch-default] .pe-button.pe-switch-control__thumb")
      .should("have.attr", "role", "switch")
      .should("have.attr", "aria-checked", "false");
  });

  it("name", () => {
    cy.get("[data-test-id=switch-name] label input")
      .should("have.attr", "type", "checkbox")
      .should("have.attr", "name", "some-name");
  });

  it("value", () => {
    cy.get("[data-test-id=switch-value] label input")
      .should("have.attr", "type", "checkbox")
      .should("have.attr", "value", "some-value");
  });

  it("label", () => {
    let labelId;

    cy.get("[data-test-id=switch-label] label").should("contain", "label");
    cy.get("[data-test-id=switch-label] .pe-control__label").then((label) => {
      labelId = label[0].getAttribute("id");
      cy.get("[data-test-id=switch-label] button").should(
        "have.attr",
        "aria-labelledby",
        labelId
      );
    });

    // Label id should not change after click
    cy.get(
      "[data-test-id=switch-label] .pe-button.pe-switch-control__thumb"
    ).click();
    cy.wait(300);

    cy.get("[data-test-id=switch-label] .pe-control__label").then((label) => {
      cy.get("[data-test-id=switch-label] button").should(
        "have.attr",
        "aria-labelledby",
        labelId
      );
    });
  });

  it("defaultChecked", () => {
    cy.get("[data-test-id=switch-defaultChecked]")
      .should("not.have.class", "pe-control--off")
      .should("have.class", "pe-control--on");
    cy.get(
      "[data-test-id=switch-defaultChecked] .pe-button.pe-switch-control__thumb"
    )
      .should("have.attr", "role", "switch")
      .should("have.attr", "aria-checked", "true");
  });

  describe("ARIA", () => {
    beforeEach(() => {
      cy.visit("/Switch");
    });

    // Some ARIA attributes are automatically set - see tests "default", "label", "defaultChecked", "disabled"
    it("aria: role", () => {
      cy.get(
        "[data-test-id=switch-aria] .pe-button.pe-switch-control__thumb"
      ).should("have.attr", "role", "button");
    });
  });

  describe("Interactivity", () => {
    beforeEach(() => {
      cy.visit("/Switch");
    });

    it("disabled", () => {
      cy.get("[data-test-id=switch-disabled]")
        .should("have.class", "pe-control--off")
        .should("have.class", "pe-control--inactive")
        .should("have.class", "pe-control--disabled");
      cy.get(
        "[data-test-id=switch-disabled] .pe-button.pe-switch-control__thumb.pe-button--disabled.pe-button--inactive"
      )
        .should("not.have.attr", "disabled", "disabled") // note: to keep this button accessible: do not set `disabled`
        .should("have.attr", "role", "switch")
        .should("have.attr", "aria-disabled", "true")
        .should("have.css", "pointer-events", "none");
    });

    it("onclick", () => {
      cy.get("[data-test-id=switch-onclick]").should(
        "have.class",
        "pe-control--off"
      );
      cy.get(
        "[data-test-id=switch-onclick] .pe-button.pe-switch-control__thumb"
      )
        .should("have.attr", "role", "switch")
        .should("have.attr", "aria-checked", "false")
        .click();
      cy.wait(300);
      cy.get("[data-test-id=switch-onclick]").should(
        "have.class",
        "pe-control--on"
      );
      cy.get(
        "[data-test-id=switch-onclick] .pe-button.pe-switch-control__thumb"
      )
        .should("have.attr", "role", "switch")
        .should("have.attr", "aria-checked", "true");
    });
  });

  describe("Common", () => {
    beforeEach(() => {
      cy.visit("/Switch");
    });

    it("dataSet", () => {
      cy.get("[data-test-id=switch-dataSet]").should(
        "have.attr",
        "data-user",
        "123"
      );
    });
  });
});
