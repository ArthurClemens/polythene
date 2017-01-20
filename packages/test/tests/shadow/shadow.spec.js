/* global describe, it, expect */
import m from "mithril";
import { tidy, defaultHtmlTidyOptions } from "mithril-jest";
import { tests } from "./tests.js";
import { runSnapshots } from "../../scripts/snapshots";
import { shadow as component } from "polythene-shadow";

runSnapshots(tests);

describe("Shadow component", () => {
  it("no options", () => {
    const cmp = m(component);
    const html = tidy(cmp, {
      ...defaultHtmlTidyOptions,
      wrap: false,
      indent: false
    });
    expect(html).toContain("<div class=\"pe-shadow  \"><div class=\"pe-shadow__bottom pe-shadow--z-1\"></div><div class=\"pe-shadow__top pe-shadow--z-1\"></div></div>");
  });
  it("child", () => {
    const cmp = m(component, {}, m("span", "Child"));
    const html = tidy(cmp);
    expect(html).toContain("<span>Child</span>");
  });
  it("option id", () => {
    const cmp = m(component, {id: "id-x"});
    const html = tidy(cmp);
    expect(html).toContain("id=\"id-x\"");
  });
  it("option class", () => {
    const cmp = m(component, {class: "class-x"});
    const html = tidy(cmp);
    expect(html).toContain("class-x\">");
  });
  it("option element", () => {
    const cmp = m(component, {element: "a"});
    const html = tidy(cmp);
    expect(html).toContain("<a ");
    expect(html).toContain("</a>");
  });
});
