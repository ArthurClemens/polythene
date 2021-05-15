/* global cy, expect, describe, beforeEach, it */

describe("Button", () => {
  before(() => {
    cy.visit("/Button");
  });

  it("default", () => {
    cy.get("a[data-test-id=button-default]")
      .should("have.class", "pe-button")
      .should("have.class", "pe-text-button")
      .should("have.class", "pe-button--has-hover")
      .should("not.have.attr", "role", "button");
    cy.get("a[data-test-id=button-default] .pe-ripple").should("exist");
    cy.get("a[data-test-id=button-default] .pe-button__wash").should("exist");
    cy.get(
      "a[data-test-id=button-default] .pe-button__content .pe-button__label"
    ).should("contain", "default");
  });

  it("content", () => {
    cy.get(
      "[data-test-id=button-content] .pe-button__content .pe-button__label"
    ).should("not.exist");
    cy.get("[data-test-id=button-content] .pe-button__content").should(
      "contain",
      "content"
    );
  });

  it("element: button", () => {
    cy.get("button[data-test-id=button-element]")
      .should("have.class", "pe-button")
      .should("have.class", "pe-text-button")
      .should("have.class", "pe-button--has-hover")
      .should("have.attr", "tabindex", "0")
      .should("have.attr", "role", "button");
  });

  it("border", () => {
    cy.get("[data-test-id=button-border]").should(
      "have.class",
      "pe-button--border"
    );
  });

  it("contained", () => {
    cy.get("[data-test-id=button-contained]").should(
      "have.class",
      "pe-button--contained"
    );
  });

  it("raised", () => {
    cy.get("[data-test-id=button-raised]")
      .should("have.class", "pe-button--contained")
      .should("have.class", "pe-button--raised")
      .should("have.class", "pe-with-active-shadow");
    cy.get(
      "[data-test-id=button-raised] .pe-shadow.pe-shadow--depth-1.pe-shadow--animated"
    ).should("exist");

    // raised shadowDepth
    cy.get("[data-test-id=button-raised-shadowDepth]")
      .should("have.class", "pe-button--contained")
      .should("have.class", "pe-button--raised")
      .should("have.class", "pe-with-active-shadow");
    cy.get(
      "[data-test-id=button-raised-shadowDepth] .pe-shadow.pe-shadow--depth-2.pe-shadow--animated"
    ).should("exist");
  });

  it("dropdown", () => {
    cy.get("[data-test-id=button-dropdown]")
      .should("have.class", "pe-button--dropdown")
      .should("have.class", "pe-button--dropdown-closed");
    cy.get(
      "[data-test-id=button-dropdown] .pe-icon.pe-button__dropdown"
    ).should("exist");
    cy.get(
      "[data-test-id=button-dropdown] .pe-icon.pe-button__dropdown"
    ).should("have.attr", "aria-hidden", "true");

    // dropdown open
    cy.get("[data-test-id=button-dropdown-open]")
      .should("have.class", "pe-button--dropdown")
      .should("have.class", "pe-button--dropdown-open");
    cy.get(
      "[data-test-id=button-dropdown-open] .pe-icon.pe-button__dropdown"
    ).should("have.attr", "aria-hidden", "true");
  });

  it("extraWide", () => {
    cy.get("[data-test-id=button-extraWide]").should(
      "have.class",
      "pe-button--extra-wide"
    );
  });

  it("type: submit", () => {
    cy.get("[data-test-id=button-type]").should("have.attr", "type", "submit");
  });

  it("highLabel", () => {
    cy.get("[data-test-id=button-highLabel]").should(
      "have.class",
      "pe-button--high-label"
    );
  });

  it("ink: false", () => {
    cy.get("[data-test-id=button-no-ink] .pe-ripple").should("not.exist");
  });

  it("wash: false", () => {
    cy.get("[data-test-id=button-no-wash]").should(
      "not.have.class",
      "pe-button--has-hover"
    );
  });

  it("selected", () => {
    cy.get("[data-test-id=button-selected]").should(
      "have.class",
      "pe-button--selected"
    );
  });

  it("textStyle", () => {
    cy.get("[data-test-id=button-textStyle] .pe-button__text-label").should(
      "have.attr",
      "style",
      "color: red;"
    );
  });

  it("url", () => {
    cy.get("[data-test-id=button-url]").should("have.attr", "href", "/");
  });

  it("inactivate", () => {
    cy.get("[data-test-id=button-inactivate]").should("exist").click();
    cy.get("[data-test-id=button-inactivate]")
      .should("have.class", "pe-button--inactive")
      .should("have.attr", "aria-disabled", "true");
    cy.wait(2000);
    cy.get("[data-test-id=button-inactivate]")
      .should("not.have.class", "pe-button--inactive")
      .should("not.have.attr", "aria-disabled", "true");
  });

  it("ripple", () => {
    cy.get("[data-test-id=button-ripple] .pe-ripple .pe-ripple__mask").should(
      "not.exist"
    );
    cy.get("[data-test-id=button-ripple]").should("exist").click();
    cy.wait(1000);
    cy.get("[data-test-id=button-ripple] .pe-ripple .pe-ripple__mask").should(
      "exist"
    );
  });

  // TODO
  // theme
  // Mithril: onbeforeupdate
  // Mithril: onclick
  // Mithril: keydown

  // TODO: move to ButtonGroup
  // separatorAtStart
  // cy.get("[data-test-id=button-separatorAtStart]").should(
  //   "have.class",
  //   "pe-button--xxx"
  // );

  describe("ARIA", () => {
    beforeEach(() => {
      cy.visit("/Button");
    });

    it("aria", () => {
      cy.get("[data-test-id=button-aria]").should("have.attr", "role", "link");
    });
  });

  describe("Common", () => {
    beforeEach(() => {
      cy.visit("/Button");
    });

    it("before", () => {
      cy.get("[data-test-id=button-before]")
        .children()
        .should("have.length", 2);
      cy.get("[data-test-id=button-before] .pe-button__content")
        .prev(".pe-icon")
        .should("exist");
    });

    it("after", () => {
      cy.get("[data-test-id=button-after]").children().should("have.length", 2);
      cy.get("[data-test-id=button-after] .pe-button__content")
        .next(".pe-icon")
        .should("exist");
    });

    it("dataSet", () => {
      cy.get("[data-test-id=button-dataSet]").should(
        "have.attr",
        "data-user",
        "123"
      );
    });
  });

  describe("Interactivity", () => {
    beforeEach(() => {
      cy.visit("/Button");
    });

    it("disabled", () => {
      cy.get("[data-test-id=button-disabled]")
        .should("have.class", "pe-button--disabled")
        .should("not.have.attr", "disabled", "disabled") // note: to keep this button accessible: do not set `disabled`
        .should("have.attr", "aria-disabled", "true")
        .should("have.attr", "data-clickcount", "0")
        .should("not.have.class", "pe-button--has-hover")
        .should("have.css", "pointer-events", "none");
    });

    it("events: onclick", () => {
      cy.get("[data-test-id=button-events-onclick]").should(
        "have.attr",
        "data-clickcount",
        "0"
      );
      cy.get("[data-test-id=button-events-onclick]").click();
      cy.get("[data-test-id=button-events-onclick]").should(
        "have.attr",
        "data-clickcount",
        "1"
      );
    });

    it("formAction", () => {
      cy.get("[data-test-id=button-formAction]").should("exist").click();
      cy.url().should("include", "/?#");
    });
  });
});
