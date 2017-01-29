/* global describe, it, expect */
import m from "mithril";
import { tidy, defaultHtmlTidyOptions } from "mithril-jest";
import { tests } from "./tests.js";
import { runSnapshots } from "../../scripts/snapshots";
import { tabs as component } from "polythene-tabs";

runSnapshots(tests);

describe("Tabs component", () => {
  it("no options", () => {
    const cmp = m(component);
    const html = tidy(cmp, {
      ...defaultHtmlTidyOptions,
      wrap: false,
      indent: false
    });
    expect(html).toContain("<div class=\"pe-tabs  pe-tabs--start      \"><div class=\"pe-tabs__row  \"><div class=\"pe-tabs__indicator\"></div></div></div>");
  });
  it("child", () => {
    const cmp = m(component, {}, [
      { label: "New" },
      { label: "My Favorites" },
      { label: "Saved" }
    ]);
    const html = tidy(cmp);
    expect(html).toContain("My Favorites");
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
