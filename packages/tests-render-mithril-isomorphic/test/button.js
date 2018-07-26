/* global describe, it */
"use strict";

const assert = require("assert");
require("mithril/test-utils/browserMock")(global);
const m = require("mithril");
const render = require("mithril-node-render");
const { Button } = require("polythene-mithril-button");
const debug = require("./debug");

describe("Button", function() {
  it("should render", function() {
    const expected = '<a class="pe-button pe-text-button               " tabindex="0"><div class="pe-button__content"><div key="shadow" class="pe-shadow pe-shadow--animated "><div key="bottom" class="pe-shadow__bottom pe-shadow--depth-0"></div><div key="top" class="pe-shadow__top pe-shadow--depth-0"></div></div><div key="ripple" class="pe-ripple    "></div><div key="wash" class="pe-button__wash"></div><div class="pe-button__label"><div class="pe-button__text-label">Show</div></div></div></a>'; // eslint-disable-line quotes

    return render([
      m(Button, {
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
