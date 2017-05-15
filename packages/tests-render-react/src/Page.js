import { rules as css } from "./styles";
import { renderer as h } from "polythene-react";

// const GeneratedHtml = () =>
//   "generated html";
//   {
//   oninit: vnode => (
//     vnode.state.open = false,
//     vnode.state.toggle = () => vnode.state.open = !vnode.state.open
//   ),
//   view: vnode => {
//     return h(css.resultDataRawHtml, {
//       className: vnode.state.open ? "open" : "closed",
//       onclick: vnode.state.toggle,
//     }, [
//       h(".html", {id: vnode.attrs.id}, ""),
//       h(".ellipsis", "...")
//     ]);
//   }
// };

const Page = ({name, tests, /*previous*/}) =>
  h(
    [css.results].join(" "),
    {
      className: `tests-${name.replace(/[:\-+()\[\]]/ug, "").replace(/ /g, "-").toLowerCase()}`
    },
    tests.map((test, index) => {
      if (test.section) {
        return h(css.sectionTitle, test.section);
      }
      const testName = `test-${(test.name).replace(/[:\-+\[\]()]/ug, "").replace(/ /g, "-").toLowerCase()}`;
      // const uid = "id-" + index;
      return h([css.resultRow, test.interactive ? css.interactive : null].join(""), {
        key: testName,
        className: [testName, test.className || null].join(" "),
      },
        [
          h(css.resultTitle,
            {
              className: "result-title"
            },
            test.name
          ),
          h(css.resultData, null,
            [
              h(css.resultDataRendered, null,
                h(css.content, null,
                // {
                  // oncreate: vnode => {
                  //   if (!test.exclude) {
                  //     document.querySelector(`#${uid}`).textContent = tidy(vnode.dom.innerHTML);
                  //   }
                  // }
                // },
                  h(test.component, test.attrs, test.children)
                )
              )
              // !test.exclude && h(css.resultDataRaw, 
              //   h(GeneratedHtml, {id: uid})
              // )
            ]
          )
        ]
      );
    })
  );

export default Page;

// ReactDOM.render(
//   // Page({name: "Button", tests: reactTests.button, previous: null}),
//   Page({name: "Icon", tests: reactTests.icon, previous: null}),
//   // Page({name: "Ripple", tests: reactTests.ripple, previous: null}),
//   // Page({name: "Shadow", tests: reactTests.shadow, previous: null}),
//   // Page({name: "SVG", tests: reactTests.svg, previous: null}),
//   // Page({name: "Theme", tests: reactTests.theme, previous: null}),
//   document.getElementById("root")
// );
