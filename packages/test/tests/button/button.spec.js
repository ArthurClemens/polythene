/* global describe, it, expect */
import m from "mithril";
import { tidy } from "mithril-jest";
import { tests } from "./tests.js";
import { runSnapshots } from "../../scripts/snapshots";
import button from "polythene-button";

runSnapshots(tests);

describe("Button component", () => {
  it("no options", () => {
    const cmp = m(button);
    const html = tidy(cmp);
    expect(html).toContain("<a tabindex=\"0\" class=\"pe-button pe-text-button\"></a>");
  });
  it("child", () => {
    const cmp = m(button, {}, m("span", "Child"));
    const html = tidy(cmp);
    expect(html).toContain("<span>Child</span>");
  });
  it("option content", () => {
    const cmp = m(button, {content: m("span", "Content")});
    const html = tidy(cmp);
    expect(html).toContain("<span>Content</span>");
  });
  it("option id", () => {
    const cmp = m(button, {id: "id-x"});
    const html = tidy(cmp);
    expect(html).toContain("id=\"id-x\"");
  });
  it("option class", () => {
    const cmp = m(button, {class: "class-x"});
    const html = tidy(cmp);
    expect(html).toContain("class-x\">");
  });
  it("option element", () => {
    const cmp = m(button, {element: "button"});
    const html = tidy(cmp);
    expect(html).toContain("<button ");
    expect(html).toContain("</button>");
  });
  it("option tabindex", () => {
    const cmp = m(button, {tabindex: 3});
    const html = tidy(cmp);
    expect(html).toContain("tabindex=\"3\"");
  });
  it("option before", () => {
    const cmp = m(button, {before: m("span", "Before")});
    const html = tidy(cmp);
    expect(html).toContain("<span>Before</span>");
  });
  it("option after", () => {
    const cmp = m(button, {after: m("span", "After")});
    const html = tidy(cmp);
    expect(html).toContain("<span>After</span>");
  });
});
