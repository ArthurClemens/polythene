import m from "mithril";
import { rules as css } from "./styles";
import { renderer as h, Dialog, IconButton, Toolbar, Notification } from "polythene-mithril";

const iconBack = m.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>");

const navBar = (name, previous) =>
  h(css.headerRow, h(Toolbar, {
    style: { backgroundColor: "rgba(255,255,255,.93)" }
  }, [
    previous && h(IconButton, {
      icon: { svg: iconBack },
      url: {
        href: "/",
        oncreate: m.route.link
      },
      style: { color: "#0091EA" }
    }),
    m("span", name)
  ]));

const results = (name, tests) => (
  m([css.results].join(" "), {
    className: `tests-${name.replace(/[^\w\d]+/g, "-").toLowerCase()}`
  }, tests.map((test, index) => {
    if (test.section) {
      return h(css.sectionTitle, test.section);
    }
    const testName = `test-${(test.name)}`;
    const uid = "id-" + index;
    return m([css.resultRow, test.interactive ? css.interactive : null].join(""), {
      key: testName,
      className: [testName, test.className || null].join(" "),
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
  
export default (name, tests, previous) => ({
  oncreate: () => ( 
    document.title = name,
    scrollTo(0, 0)
  ),
  view: () => [
    navBar(name, previous),
    results(name, tests),
    h(Dialog),
    // h(snackbar),
    h(Notification)
  ]
});