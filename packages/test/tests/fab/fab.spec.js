/* global describe, it, expect */
import m from "mithril";
import { tidy, defaultHtmlTidyOptions } from "mithril-jest";
import { tests } from "./tests.js";
import { runSnapshots } from "../../scripts/snapshots";
import fab from "polythene-fab";

runSnapshots(tests);

describe("FAB component", () => {
  it("no options", () => {
    const cmp = m(fab);
    const html = tidy(cmp, {
      ...defaultHtmlTidyOptions,
      wrap: false,
      indent: false
    });
    expect(html).toContain("<a tabindex=\"0\" class=\"pe-fab ");
    expect(html).toContain("<div class=\"pe-fab__content\"></div>");
  });
  it("option id", () => {
    const cmp = m(fab, {id: "id-x"});
    const html = tidy(cmp);
    expect(html).toContain("id=\"id-x\"");
  });
  it("option class", () => {
    const cmp = m(fab, {class: "class-x"});
    const html = tidy(cmp);
    expect(html).toContain("class-x\">");
  });
  it("option element", () => {
    const cmp = m(fab, {element: "span"});
    const html = tidy(cmp);
    expect(html).toContain("<span ");
    expect(html).toContain("</span>");
  });
  it("option tabindex", () => {
    const cmp = m(fab, {tabindex: 3});
    const html = tidy(cmp);
    expect(html).toContain("tabindex=\"3\"");
  });
  it("option before", () => {
    const cmp = m(fab, {before: m("span", "Before")});
    const html = tidy(cmp);
    expect(html).toContain("<span>Before</span>");
  });
  it("option after", () => {
    const cmp = m(fab, {after: m("span", "After")});
    const html = tidy(cmp);
    expect(html).toContain("<span>After</span>");
  });
});
