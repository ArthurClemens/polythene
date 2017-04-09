/* global describe, it, expect */
// import m from "mithril";
// import { tidy, defaultHtmlTidyOptions } from "mithril-jest";
import { tests } from "./tests.js";
import { runSnapshots } from "../../scripts/snapshots";
// import { dialog as component } from "polythene-dialog";

runSnapshots(tests);

describe("Dialog component", () => {
  // TODO: test dialog instance
  it("dummy", () => {
    expect("1").toContain("1");
  });
});
