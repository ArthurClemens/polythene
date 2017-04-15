/* global describe, it, expect */
import m from "mithril";
import { tidy, defaultHtmlTidyOptions } from "mithril-jest";
import { tests } from "./tests.js";
import { runSnapshots } from "../../scripts/snapshots";
import listTile from "polythene-list-tile";

runSnapshots(tests);

describe("List tile component", () => {
  it("no options", () => {
    const cmp = m(listTile);
    const html = tidy(cmp, {
      ...defaultHtmlTidyOptions,
      wrap: false,
      indent: false
    });
    expect(html).toContain("<div class=\"pe-list-tile          \">");
  });
  it("child", () => {
    const cmp = m(listTile, {}, m("span", "Child"));
    const html = tidy(cmp);
    expect(html).toContain("<span>Child</span>");
  });
  it("option id", () => {
    const cmp = m(listTile, {id: "id-x"});
    const html = tidy(cmp);
    expect(html).toContain("id=\"id-x\"");
  });
  it("option class", () => {
    const cmp = m(listTile, {class: "class-x"});
    const html = tidy(cmp);
    expect(html).toContain("class-x\">");
  });
  it("option element", () => {
    const cmp = m(listTile, {element: "span"});
    const html = tidy(cmp);
    expect(html).toContain("<span ");
    expect(html).toContain("</span>");
  });
  it("option secondary element", () => {
    const cmp = m(listTile, {secondary: { element: "dl"}});
    const html = tidy(cmp);
    expect(html).toContain("<dl class=\"pe-list-tile__secondary\">");
  });
  it("option tabindex", () => {
    const cmp = m(listTile, {tabindex: 3});
    const html = tidy(cmp);
    expect(html).toContain("tabindex=\"3\"");
  });
  it("option before", () => {
    const cmp = m(listTile, {before: m("span", "Before")});
    const html = tidy(cmp);
    expect(html).toContain("<span>Before</span>");
  });
  it("option after", () => {
    const cmp = m(listTile, {after: m("span", "After")});
    const html = tidy(cmp);
    expect(html).toContain("<span>After</span>");
  });
});
