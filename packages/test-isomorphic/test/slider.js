const assert = require('assert');
const m = require('mithril');
const render = require('mithril-node-render');
const { Slider } = require('polythene');

const actual = render([
    m(Slider, {
        min: 0,
        max: 50,
        value: 10,
        step: 10
    })
]);

const expected = '<div class="pe-slider   pe-slider--track     " id=""><div class="pe-slider__track"><div class="pe-slider__track-part pe-slider__track-value" style="flex:0.2 1 0%;-ms-flex:0.2 1 0%;webkit-flex:0.2 1 0%"><div class="pe-slider__track-bar"><div class="pe-slider__track-bar-value"></div></div></div><div class="pe-slider__control" tabindex="0"></div><div class="pe-slider__track-part pe-slider__track-rest" style="flex:0.8 1 0%;-ms-flex:0.8 1 0%;webkit-flex:0.8 1 0%;max-width:80%"><div class="pe-slider__track-bar"><div class="pe-slider__track-bar-value"></div></div></div></div></div>';

// console.log(actual);
// console.log(expected);

assert(actual === expected, 'Slider');
