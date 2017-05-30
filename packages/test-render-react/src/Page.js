import { rules as css } from "./styles";
import { renderer as h, IconButton, Toolbar } from "polythene-react";
import { withRouter } from "react-router-dom";

const iconBack = h.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>");

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

const NavBar = (name, previous) =>
  h(css.headerRow, null,
    h(Toolbar,
      { style: { backgroundColor: "rgba(255,255,255,.93)" } },
      [
        previous && h(withRouter(({ history }) =>
          h(IconButton, {
            icon: { svg: iconBack },
            url: {
              href: "/",
              onClick: e => (e.preventDefault(), history.push(previous))
            },
            style: {
              color: "#0091EA"
            }
          })
        )),
        h("span", name)
      ]
    )
  );

const Page = ({ name, tests, previous }) => (
  h("div", [
    NavBar(name, previous),
    h([css.results].join(" "),
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
    )
  ])
);

export default Page;

