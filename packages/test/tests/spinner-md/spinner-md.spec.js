/* global describe, it, expect */
import m from "mithril";
import { tidy, defaultHtmlTidyOptions } from "mithril-jest";
import { tests } from "./tests.js";
import { runSnapshots } from "../../scripts/snapshots";
import spinner from "polythene-md-spinner";

runSnapshots(tests);

describe("MD spinner component", () => {
  it("no options", () => {
    const cmp = m(spinner, { permanent: true });
    const html = tidy(cmp, {
      ...defaultHtmlTidyOptions,
      wrap: false,
      indent: false
    });
    expect(html).toContain("<div class=\"pe-spinner pe-spinner--regular    pe-spinner--permanent pe-md-spinner \">");
  });
  it("option id", () => {
    const cmp = m(spinner, {id: "id-x", permanent: true});
    const html = tidy(cmp);
    expect(html).toContain("id=\"id-x\"");
  });
  it("option class", () => {
    const cmp = m(spinner, {class: "class-x", permanent: true});
    const html = tidy(cmp);
    expect(html).toContain("class-x\">");
  });
  it("option element", () => {
    const cmp = m(spinner, {element: "a", permanent: true});
    const html = tidy(cmp);
    expect(html).toContain("<a ");
    expect(html).toContain("</a>");
  });
});
