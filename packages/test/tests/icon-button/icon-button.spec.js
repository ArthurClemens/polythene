/* global describe, it, expect */
import m from "mithril";
import { tidy, defaultHtmlTidyOptions } from "mithril-jest";
import { tests } from "./tests.js";
import { runSnapshots } from "../../scripts/snapshots";
import iconButton from "polythene-icon-button";

runSnapshots(tests);

describe("Icon button component", () => {
  it("no options", () => {
    const cmp = m(iconButton);
    const html = tidy(cmp, {
      ...defaultHtmlTidyOptions,
      wrap: false,
      indent: false
    });
    expect(html).toContain("<a tabindex=\"0\" class=\"pe-button pe-icon-button ");
  });
  it("option id", () => {
    const cmp = m(iconButton, {id: "id-x"});
    const html = tidy(cmp);
    expect(html).toContain("id=\"id-x\"");
  });
  it("option class", () => {
    const cmp = m(iconButton, {class: "class-x"});
    const html = tidy(cmp);
    expect(html).toContain("class-x\">");
  });
  it("option element", () => {
    const cmp = m(iconButton, {element: "span"});
    const html = tidy(cmp);
    expect(html).toContain("<span ");
    expect(html).toContain("</span>");
  });
  it("option tabindex", () => {
    const cmp = m(iconButton, {tabindex: 3});
    const html = tidy(cmp);
    expect(html).toContain("tabindex=\"3\"");
  });
  it("option before", () => {
    const cmp = m(iconButton, {before: m("span", "Before")});
    const html = tidy(cmp);
    expect(html).toContain("<span>Before</span>");
  });
  it("option after", () => {
    const cmp = m(iconButton, {after: m("span", "After")});
    const html = tidy(cmp);
    expect(html).toContain("<span>After</span>");
  });
});

