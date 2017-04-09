/* global describe, it, expect */
// import m from "mithril";
// import { tidy, defaultHtmlTidyOptions } from "mithril-jest";
import { tests } from "./tests.js";
import { runSnapshots } from "../../scripts/snapshots";
// import notification from "polythene-notification";

runSnapshots(tests);

describe("List component", () => {
  // TODO: test notification instance
  it("dummy", () => {
    expect("1").toContain("1");
  });
});
