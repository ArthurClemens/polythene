import { rules as css } from "./styles";
import { Dialog, Notification, Snackbar, IconButton, Toolbar } from "polythene-react";
import { withRouter } from "react-router-dom";
import Footer from "./Footer";
import { h } from "polythene-tests/utils/enhanced-renderer";

const iconBack = h.trust("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>");

const NavBar = (name, previous, doc) =>
  h(css.headerRow, null,
    h(Toolbar,
      { style: { backgroundColor: "rgba(255,255,255,.93)" } },
      [
        previous && h(withRouter(({ history }) =>
          h(IconButton, {
            icon: { svg: { content: iconBack } },
            url: {
              href: "/",
              onClick: e => (e.preventDefault(), history.push(previous))
            },
            style: {
              color: "#0091EA"
            }
          })
        )),
        h("span", name),
        doc && h("a",
          {
            href: doc,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "pe-action"
          }, "doc")
      ]
    )
  );

const Results = (name, tests) => 
  h([css.results].join(" "),
    { className: `tests-${name.replace(/[^\w\d]/g, "-").toLowerCase()}` },
    tests.map(test => {
      if (test.section) {
        return h(css.sectionTitle, test.section);
      }
      const testName = `test-${(test.name)}`.toLowerCase().replace(/ /g, "-");
      return h([css.resultRow, test.interactive ? css.interactive : null].join(""), {
        key: testName,
        className: [testName.replace(/[^\w\d]/g, "-").toLowerCase(), test.className || null].join(" "),
      },
      [
        h(css.resultTitle,
          { className: "result-title" },
          test.name
        ),
        h(css.resultData, null,
          h(css.resultDataRendered, null,
            h(css.content, null,
              h(test.component, test.attrs, test.children)
            )
          )
        )
      ]
      );
    })
  );

const Page = ({ name, tests, previous, doc }) => (
  h("div", [
    NavBar(name, previous, doc),
    Results(name, tests),
    h(Footer),
    h(Dialog),
    h(Snackbar),
    h(Notification)
  ])
);

export default Page;
