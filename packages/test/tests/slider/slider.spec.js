/* global describe, it, expect */
import m from "mithril";
import { tidy, defaultHtmlTidyOptions } from "mithril-jest";
import { tests } from "./tests.js";
import { runSnapshots } from "../../scripts/snapshots";
import slider from "polythene-slider";

runSnapshots(tests);

describe("Slider component", () => {
  it("no options", () => {
    const cmp = m(slider);
    const html = tidy(cmp, {
      ...defaultHtmlTidyOptions,
      wrap: false,
      indent: false
    });
    expect(html).toContain("<div class=\"pe-slider   pe-slider--track   pe-slider--min  \"><div class=\"pe-slider__track\"><div class=\"pe-slider__track-part pe-slider__track-value\"><div class=\"pe-slider__track-bar\"><div class=\"pe-slider__track-bar-value\"></div></div></div><div tabindex=\"0\" class=\"pe-slider__control\"></div><div style=\"max-width: 100%;\" class=\"pe-slider__track-part pe-slider__track-rest\"><div class=\"pe-slider__track-bar\"><div class=\"pe-slider__track-bar-value\"></div></div></div></div></div>");
  });
  it("option id", () => {
    const cmp = m(slider, {id: "id-x"});
    const html = tidy(cmp);
    expect(html).toContain("id=\"id-x\"");
  });
  it("option class", () => {
    const cmp = m(slider, {class: "class-x"});
    const html = tidy(cmp);
    expect(html).toContain("class-x\">");
  });
  it("option element", () => {
    const cmp = m(slider, {element: "a"});
    const html = tidy(cmp);
    expect(html).toContain("<a ");
    expect(html).toContain("</a>");
  });
});
