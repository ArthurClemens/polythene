/* global describe, it */
"use strict";

const assert = require("assert");
require("mithril/test-utils/browserMock")(global);
const m = require("mithril");
const render = require("mithril-node-render");
const { Slider } = require("polythene-mithril-slider");
const debug = require("./debug");

describe("Slider", function() {
  it("should render", function() {
    const expected = '<div class="pe-slider   pe-slider--track       "><div class="pe-slider__track"><div class="pe-slider__track-part pe-slider__track-value" key="trackPartValue" style="flex:0.2 1 0%;ms-flex:0.2 1 0%;webkit-flex:0.2 1 0%"><div class="pe-slider__track-bar"><div class="pe-slider__track-bar-value"></div></div></div><div class="pe-slider__control" key="control" tabindex="0"></div><div class="pe-slider__track-part pe-slider__track-rest" key="trackPartRest" style="flex:0.8 1 0%;ms-flex:0.8 1 0%;webkit-flex:0.8 1 0%;max-width:80%"><div class="pe-slider__track-bar"><div class="pe-slider__track-bar-value"></div></div></div></div></div>'; // eslint-disable-line quotes

    return render([
      m(Slider, {
        min: 0,
        max: 50,
        value: 10,
        step: 10
      })
    ]).then(function (actual) {
      if (actual !== expected) {
        debug(actual, expected);
      }
      return assert(actual === expected);
    });
  });
});
