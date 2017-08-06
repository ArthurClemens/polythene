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
    const expected = '<a class="pe-button pe-text-button        " tabindex="0"><div class="pe-button__content"><div key="ripple" class="pe-ripple pe-ripple--constrained   "></div><div key="wash" class="pe-button__wash"></div><div key="focus" class="pe-button__focus"></div><div class="pe-button__label">Show</div></div></a>'; // eslint-disable-line quotes

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
