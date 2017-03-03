/* global describe, it, expect */
import m from "mithril";
import { tidy, defaultHtmlTidyOptions } from "mithril-jest";
import { tests } from "./tests.js";
import { runSnapshots } from "../../scripts/snapshots";
import textfield from "polythene-textfield";

runSnapshots(tests);

describe("Textfield component", () => {
  it("no options", () => {
    const cmp = m(textfield);
    const html = tidy(cmp, {
      ...defaultHtmlTidyOptions,
      wrap: false,
      indent: false
    });
    expect(html).toContain("<div class=\"pe-textfield           pe-textfield--hide-spinner pe-textfield--hide-clear  \"><div class=\"pe-textfield__input-area\"><input type=\"text\" name=\"\" class=\"pe-textfield__input\"></div></div>");
  });
  it("option id", () => {
    const cmp = m(textfield, {id: "id-x"});
    const html = tidy(cmp);
    expect(html).toContain("id=\"id-x\"");
  });
  it("option class", () => {
    const cmp = m(textfield, {class: "class-x"});
    const html = tidy(cmp);
    expect(html).toContain("class-x\">");
  });
  it("option element", () => {
    const cmp = m(textfield, {element: "span"});
    const html = tidy(cmp);
    expect(html).toContain("<span ");
    expect(html).toContain("</span>");
  });
});
