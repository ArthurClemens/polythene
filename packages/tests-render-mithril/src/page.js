import { rules as css } from "./styles";
import { Dialog, IconButton, Toolbar, Notification, Snackbar } from "polythene-mithril";
import { h } from "cyano-mithril";
import Footer from "./Footer";

const iconBack = h.trust("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>");

const navBar = (name, previous, doc) =>
  h(css.headerRow, h(Toolbar, {
    style: { backgroundColor: "rgba(255,255,255,.93)" }
  }, [
    previous && h(IconButton, {
      icon: { svg: { content: iconBack } },
      element: h.route.Link,
      url: {
        href: "/",
      },
      style: { color: "#0091EA" }
    }),
    h("span", name),
    doc && h(`a[href=${doc}][target=_blank][rel="noopener noreferrer"].pe-action`, "doc")
  ]));

const results = ({ name, tests }) => (
  h([css.results].join(" "), {
    className: `tests-${name.replace(/[^\w\d]+/g, "-").toLowerCase()}`
  }, tests.map(test => {
    if (test.section) {
      return h(css.sectionTitle, test.section);
    }
    const testName = `test-${(test.name)}`;
    return h([css.resultRow, test.interactive ? css.interactive : null].join(""), {
      className: [testName.replace(/[^\w\d]/g, "-").toLowerCase(), test.className || null].join(" "),
    }, [
      h(css.resultTitle,
        { className: "result-title" },
        test.name
      ),
      h(css.resultData,
        h(css.resultDataRendered,
          h(css.content, h(test.component, test.attrs, test.children))
        )
      )
    ]);
  }))
);
  
export default (route, previous) => ({
  oncreate: () => ( 
    scrollTo(0, 0)
  ),
  view: () => [
    navBar(route.name, previous, route.doc),
    results(route),
    h(Footer),
    h(Dialog),
    h(Snackbar),
    h(Notification)
  ]
});
