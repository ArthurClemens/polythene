/* global describe, it, expect */
import m from "mithril";
import { tidy, defaultHtmlTidyOptions } from "mithril-jest";
import { tests } from "./tests.js";
import { runSnapshots } from "../../scripts/snapshots";
import card from "polythene-card";

runSnapshots(tests);

describe("Card component", () => {
  it("no options", () => {
    const cmp = m(card);
    const html = tidy(cmp, {
      ...defaultHtmlTidyOptions,
      wrap: false,
      indent: false
    });
    expect(html).toContain("<div class=\"pe-card \"><div class=\"pe-shadow pe-shadow--animated \"><div class=\"pe-shadow__bottom pe-shadow--z-1\"></div><div class=\"pe-shadow__top pe-shadow--z-1\"></div></div><div class=\"pe-card__content\"></div></div>");
  });
  it("option id", () => {
    const cmp = m(card, {id: "id-x"});
    const html = tidy(cmp);
    expect(html).toContain("id=\"id-x\"");
  });
  it("option class", () => {
    const cmp = m(card, {class: "class-x"});
    const html = tidy(cmp);
    expect(html).toContain("class-x\">");
  });
  it("option element", () => {
    const cmp = m(card, {element: "a"});
    const html = tidy(cmp);
    expect(html).toContain("<a ");
    expect(html).toContain("</a>");
  });
  it("option tabindex", () => {
    const cmp = m(card, {tabindex: 3});
    const html = tidy(cmp);
    expect(html).toContain("tabindex=\"3\"");
  });
  it("option before", () => {
    const cmp = m(card, {before: m("span", "Before")});
    const html = tidy(cmp);
    expect(html).toContain("<span>Before</span>");
  });
  it("option after", () => {
    const cmp = m(card, {after: m("span", "After")});
    const html = tidy(cmp);
    expect(html).toContain("<span>After</span>");
  });
});
