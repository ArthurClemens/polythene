/* global describe, it, expect */
import m from "mithril";
import { tidy, defaultHtmlTidyOptions } from "mithril-jest";
import { tests } from "./tests.js";
import { runSnapshots } from "../../scripts/snapshots";
import menu from "polythene-menu";

runSnapshots(tests);

describe("Menu component", () => {
  it("no options", () => {
    const cmp = m(menu);
    const html = tidy(cmp, {
      ...defaultHtmlTidyOptions,
      wrap: false,
      indent: false
    });
    expect(html).toContain("<span class=\"pe-menu__placeholder\"></span>");
  });
  it("option permanent", () => {
    const cmp = m(menu, {permanent: true});
    const html = tidy(cmp, {
      ...defaultHtmlTidyOptions,
      wrap: false,
      indent: false
    });
    expect(html).toContain("<div class=\"pe-menu pe-menu--permanent   \"><div class=\"pe-menu__content\"><div class=\"pe-shadow pe-shadow--animated \"><div class=\"pe-shadow__bottom pe-shadow--z-1\"></div><div class=\"pe-shadow__top pe-shadow--z-1\"></div></div></div></div>");
  });
  it("child", () => {
    const cmp = m(menu, {permanent: true}, m("span", "Child"));
    const html = tidy(cmp);
    expect(html).toContain("<span>Child</span>");
  });
  it("option z:0", () => {
    const cmp = m(menu, {permanent: true, z: 0});
    const html = tidy(cmp, {
      ...defaultHtmlTidyOptions,
      wrap: false,
      indent: false
    });
    expect(html).toContain("<div class=\"pe-menu pe-menu--permanent   \"><div class=\"pe-menu__content\"></div></div>");
  });
  it("option id", () => {
    const cmp = m(menu, {permanent: true, id: "id-x"});
    const html = tidy(cmp);
    expect(html).toContain("id=\"id-x\"");
  });
  it("option class", () => {
    const cmp = m(menu, {permanent: true, class: "class-x"});
    const html = tidy(cmp);
    expect(html).toContain("class-x\">");
  });
  it("option element", () => {
    const cmp = m(menu, {permanent: true, element: "span"});
    const html = tidy(cmp);
    expect(html).toContain("<span ");
    expect(html).toContain("</span>");
  });
  it("option before", () => {
    const cmp = m(menu, {permanent: true, before: m("span", "Before")});
    const html = tidy(cmp);
    expect(html).toContain("<span>Before</span>");
  });
  it("option after", () => {
    const cmp = m(menu, {permanent: true, after: m("span", "After")});
    const html = tidy(cmp);
    expect(html).toContain("<span>After</span>");
  });
});
