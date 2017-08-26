/* global describe, it */
"use strict";

const assert = require("assert");
require("mithril/test-utils/browserMock")(global);
const m = require("mithril");
const render = require("mithril-node-render");
const { RaisedButton } = require("polythene-mithril-raised-button");
const debug = require("./debug");

describe("Raised Button", function() {
  it("should render", function() {
    const expected = '<a class="pe-button pe-text-button pe-raised-button        " tabindex="0"><div class="pe-button__content"><div class="pe-shadow pe-shadow--animated "><div key="bottom" class="pe-shadow__bottom pe-shadow--z-1"></div><div key="top" class="pe-shadow__top pe-shadow--z-1"></div></div><div key="ripple" class="pe-ripple    "></div><div key="wash" class="pe-button__wash"></div><div key="focus" class="pe-button__focus"></div><div class="pe-button__label">Show</div></div></a>'; // eslint-disable-line quotes

    return render([
      m(RaisedButton, {
        label: "Show",
        events: { onclick: function() {} }
      })
    ]).then(function (actual) {
      if (actual !== expected) {
        debug(actual, expected);
      }
      return assert(actual === expected);
    });
  });
});
