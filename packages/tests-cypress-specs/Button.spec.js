/* global cy, expect, describe, beforeEach, it */

describe("Button", () => {
  beforeEach(() => {
    cy.visit("/Button");
  });
  it("attrs", () => {
    // default
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

    // content
    cy.get(
      "[data-test-id=button-content] .pe-button__content .pe-button__label"
    ).should("not.exist");
    cy.get("[data-test-id=button-content] .pe-button__content").should(
      "contain",
      "content"
    );

    // element.button
    cy.get("button[data-test-id=button-element]")
      .should("have.class", "pe-button")
      .should("have.class", "pe-text-button")
      .should("have.class", "pe-button--has-hover")
      .should("have.attr", "tabindex", "0")
      .should("have.attr", "role", "button");

    // aria
    cy.get("[data-test-id=button-aria]").should("have.attr", "role", "link");

    // border
    cy.get("[data-test-id=button-border]").should(
      "have.class",
      "pe-button--border"
    );

    // contained
    cy.get("[data-test-id=button-contained]").should(
      "have.class",
      "pe-button--contained"
    );

    // raised
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

    // disabled
    cy.get("[data-test-id=button-disabled]")
      .should("have.class", "pe-button--disabled")
      .should("have.attr", "disabled", "disabled")
      .should("have.attr", "aria-disabled", "true")
      .should("not.have.class", "pe-button--has-hover");

    // dropdown
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

    // extraWide
    cy.get("[data-test-id=button-extraWide]").should(
      "have.class",
      "pe-button--extra-wide"
    );

    // type.submit
    cy.get("[data-test-id=button-type]").should("have.attr", "type", "submit");

    // highLabel
    cy.get("[data-test-id=button-highLabel]").should(
      "have.class",
      "pe-button--high-label"
    );

    // ink.false
    cy.get("[data-test-id=button-no-ink] .pe-ripple").should("not.exist");

    // wash.false
    cy.get("[data-test-id=button-no-wash]").should(
      "not.have.class",
      "pe-button--has-hover"
    );

    // selected
    cy.get("[data-test-id=button-selected]").should(
      "have.class",
      "pe-button--selected"
    );

    // textStyle
    cy.get("[data-test-id=button-textStyle] .pe-button__text-label").should(
      "have.attr",
      "style",
      "color: red;"
    );

    // url
    cy.get("[data-test-id=button-url]").should("have.attr", "href", "/");

    // TODO: move to ButtonGroup
    // separatorAtStart
    // cy.get("[data-test-id=button-separatorAtStart]").should(
    //   "have.class",
    //   "pe-button--xxx"
    // );
  });

  it("formAction", () => {
    cy.get("[data-test-id=button-formAction]").should("exist").click();
    cy.url().should("include", "/?#");
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
});
