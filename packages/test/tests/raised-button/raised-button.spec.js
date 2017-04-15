/* global describe, it, expect */
import m from "mithril";
import { tidy, defaultHtmlTidyOptions } from "mithril-jest";
import { tests } from "./tests.js";
import { runSnapshots } from "../../scripts/snapshots";
import raisedButton from "polythene-raised-button";

runSnapshots(tests);

describe("Raised button component", () => {
  it("no options", () => {
    const cmp = m(raisedButton);
    const html = tidy(cmp, {
      ...defaultHtmlTidyOptions,
      wrap: false,
      indent: false
    });
    expect(html).toContain("<a tabindex=\"0\" class=\"pe-button pe-text-button pe-raised-button        \"></a>");
  });
  it("child", () => {
    const cmp = m(raisedButton, {}, m("span", "Child"));
    const html = tidy(cmp);
    expect(html).toContain("<span>Child</span>");
  });
  it("option content", () => {
    const cmp = m(raisedButton, {content: m("span", "Content")});
    const html = tidy(cmp);
    expect(html).toContain("<span>Content</span>");
  });
  it("option id", () => {
    const cmp = m(raisedButton, {id: "id-x"});
    const html = tidy(cmp);
    expect(html).toContain("id=\"id-x\"");
  });
  it("option class", () => {
    const cmp = m(raisedButton, {class: "class-x"});
    const html = tidy(cmp);
    expect(html).toContain("class-x\">");
  });
  it("option element", () => {
    const cmp = m(raisedButton, {element: "button"});
    const html = tidy(cmp);
    expect(html).toContain("<button ");
    expect(html).toContain("</button>");
  });
  it("option tabindex", () => {
    const cmp = m(raisedButton, {tabindex: 3});
    const html = tidy(cmp);
    expect(html).toContain("tabindex=\"3\"");
  });
  it("option before", () => {
    const cmp = m(raisedButton, {before: m("span", "Before")});
    const html = tidy(cmp);
    expect(html).toContain("<span>Before</span>");
  });
  it("option after", () => {
    const cmp = m(raisedButton, {after: m("span", "After")});
    const html = tidy(cmp);
    expect(html).toContain("<span>After</span>");
  });
});
