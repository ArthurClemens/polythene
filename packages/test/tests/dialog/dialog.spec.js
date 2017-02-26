// import m from "mithril";
// import { tidy, defaultHtmlTidyOptions } from "mithril-jest";
import { tests } from "./tests.js";
import { runSnapshots } from "../../scripts/snapshots";
// import { dialog as component } from "polythene-dialog";

runSnapshots(tests);

describe("Dialog component", () => {
  it("dummy", () => {
    expect("1").toContain("1");
  });

//   it("no options", () => {
//     const cmp = m(component);
//     const html = tidy(cmp, {
//       ...defaultHtmlTidyOptions,
//       wrap: false,
//       indent: false
//     });
//     expect(html).toContain("<a tabindex=\"0\" class=\"pe-fab ");
//     expect(html).toContain("<div class=\"pe-fab__content\"></div>");
//   });
//   it("option id", () => {
//     const cmp = m(component, {id: "id-x"});
//     const html = tidy(cmp);
//     expect(html).toContain("id=\"id-x\"");
//   });
//   it("option class", () => {
//     const cmp = m(component, {class: "class-x"});
//     const html = tidy(cmp);
//     expect(html).toContain("class-x\">");
//   });
//   it("option element", () => {
//     const cmp = m(component, {element: "span"});
//     const html = tidy(cmp);
//     expect(html).toContain("<span ");
//     expect(html).toContain("</span>");
//   });
//   it("option before", () => {
//     const cmp = m(component, {before: m("span", "Before")});
//     const html = tidy(cmp);
//     expect(html).toContain("<span>Before</span>");
//   });
//   it("option after", () => {
//     const cmp = m(component, {after: m("span", "After")});
//     const html = tidy(cmp);
//     expect(html).toContain("<span>After</span>");
//   });
});
