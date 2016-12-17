/* global describe, it */
import m from "mithril";
import button from "../src/button";

describe("Button", () => {
  it("should render", (done) => {
    const cmp = m(button);
    console.log("cmp", cmp);
    done();
  });
});