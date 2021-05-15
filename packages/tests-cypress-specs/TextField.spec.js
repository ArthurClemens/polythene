/* global cy, expect, describe, beforeEach, it */
import { ipsum } from "./constants";

describe("TextField", () => {
  before(() => {
    cy.visit("/TextField");
  });

  it("default", () => {
    cy.get("[data-test-id=textfield-default]").should(
      "have.class",
      "pe-textfield"
    );
    cy.get(
      "[data-test-id=textfield-default] .pe-textfield__input-area input.pe-textfield__input"
    )
      .should("have.attr", "type", "text")
      .should("have.value", "");
  });

  it("autofocus", () => {
    cy.focused().should("have.value", "autofocus");
  });

  it("defaultValue", () => {
    cy.get("[data-test-id=textfield-defaultValue]")
      .should("have.class", "pe-textfield")
      .should("have.class", "pe-textfield--dirty");
    cy.get(
      "[data-test-id=textfield-defaultValue] .pe-textfield__input-area input.pe-textfield__input"
    ).should("have.value", "Abc");
  });

  it("value", () => {
    cy.get("[data-test-id=textfield-value]")
      .should("have.class", "pe-textfield")
      .should("have.class", "pe-textfield--dirty");
    cy.get(
      "[data-test-id=textfield-value] .pe-textfield__input-area input.pe-textfield__input"
    ).should("have.value", "Def");
  });

  it("type", () => {
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

  it("label", () => {
    cy.get("[data-test-id=textfield-label] .pe-textfield__label")
      .should("contain", "Your Name")
      .should("be.visible");
    cy.get(
      "[data-test-id=textfield-label] .pe-textfield__input-area input.pe-textfield__input"
    ).type("Jen");
    let labelId;
    cy.get("[data-test-id=textfield-label] .pe-textfield__label").then(
      (label) => {
        labelId = label[0].getAttribute("for");
        cy.get("[data-test-id=textfield-label] input").should(
          "have.attr",
          "id",
          labelId
        );
      }
    );
    // Hide label with input value
    // Label id should not change after text input
    cy.get("[data-test-id=textfield-label] .pe-textfield__label").then(
      (label) => {
        cy.get(label).should("contain", "Your Name").should("not.be.visible");
        cy.get("[data-test-id=textfield-label] input").should(
          "have.attr",
          "id",
          labelId
        );
      }
    );
  });

  it("floatingLabel", () => {
    cy.get("[data-test-id=textfield-floatingLabel]")
      .should("have.class", "pe-textfield")
      .should("have.class", "pe-textfield--floating-label");

    cy.get("[data-test-id=textfield-floatingLabel] .pe-textfield__label")
      .should("contain", "Your Name")
      .should("have.attr", "for");

    cy.get("[data-test-id=textfield-floatingLabel-dense]").should(
      "have.class",
      "pe-textfield--dense"
    );
  });

  it("multiLine", () => {
    cy.get("[data-test-id=textfield-multiLine]")
      .should("have.class", "pe-textfield")
      .should("have.class", "pe-textfield--dirty");
    cy.get("[data-test-id=textfield-multiLine] .pe-textfield__label")
      .should("contain", "Label in multi-line input")
      .should("not.be.visible")
      .should("have.attr", "for");
    cy.get(
      "[data-test-id=textfield-multiLine] .pe-textfield__input-area textarea.pe-textfield__input"
    )
      .should("have.attr", "rows", "3")
      .should("have.value", ipsum);

    // With floating label
    cy.get("[data-test-id=textfield-multiLine-floatingLabel]")
      .should("have.class", "pe-textfield")
      .should("have.class", "pe-textfield--dirty")
      .should("have.class", "pe-textfield--floating-label");
    cy.get(
      "[data-test-id=textfield-multiLine-floatingLabel] .pe-textfield__label"
    )
      .should("contain", "Floating label in multi-line input")
      .should("be.visible")
      .should("have.attr", "for");
    cy.get(
      "[data-test-id=textfield-multiLine-floatingLabel] .pe-textfield__input-area textarea.pe-textfield__input"
    )
      .should("have.attr", "rows", "3")
      .should("have.value", ipsum);
  });

  it("help", () => {
    cy.get("[data-test-id=textfield-help] .pe-textfield__help ").should(
      "contain",
      "Enter the name as written on the credit card"
    );
  });

  it("focusHelp", () => {
    cy.get("[data-test-id=textfield-focusHelp] .pe-textfield__help").should(
      "not.be.visible"
    );
    cy.get("[data-test-id=textfield-focusHelp] input").focus();
    cy.get("[data-test-id=textfield-focusHelp] .pe-textfield__help")
      .should("contain", "Enter the name as written on the credit card")
      .should("be.visible");
  });

  describe("ARIA", () => {
    beforeEach(() => {
      cy.visit("/TextField");
    });

    it("aria: role", () => {
      cy.get(
        "[data-test-id=textfield-aria] .pe-textfield__input-area .pe-textfield__input"
      ).should("have.attr", "role", "textbox");
    });
    it("aria: aria-label", () => {
      cy.get(
        "[data-test-id=textfield-aria-label] .pe-textfield__input-area .pe-textfield__input"
      ).should("have.attr", "aria-label", "Search");
    });
    it("aria: aria-labelledby", () => {
      cy.get("[data-test-id=textfield-aria-labelledby] input").should(
        "have.attr",
        "aria-labelledby",
        "button-ref-123"
      );
      cy.get(
        "[data-test-id=textfield-aria-labelledby-container] button"
      ).should("have.attr", "id", "button-ref-123");
    });
  });

  describe("Common", () => {
    beforeEach(() => {
      cy.visit("/TextField");
    });

    it("dataSet", () => {
      cy.get("[data-test-id=textfield-dataSet]").should(
        "have.attr",
        "data-user",
        "123"
      );
    });
  });
});
