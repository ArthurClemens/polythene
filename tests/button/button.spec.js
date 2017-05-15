/* global describe, it, expect */
import m from "mithril";
import { tidy } from "mithril-jest";
import { tests } from "./tests.js";
import { runSnapshots } from "../snapshots";
import { button as component } from "polythene-button";

runSnapshots(tests);

describe("Button component", () => {
  it("no options", () => {
    const cmp = m(component);
    const html = tidy(cmp);
    expect(html).toContain("<a tabindex=\"0\" class=\"pe-button pe-text-button\"></a>");
  });
  it("child", () => {
    const cmp = m(component, {}, m("span", "Child"));
    const html = tidy(cmp);
    expect(html).toContain("<span>Child</span>");
  });
});
