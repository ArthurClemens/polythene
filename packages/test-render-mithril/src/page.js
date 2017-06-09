import m from "mithril";
import { rules as css } from "./styles";
import { tidy } from "../scripts/render";
import notification from "polythene-notification";
import snackbar from "polythene-snackbar";
import { renderer as h, Dialog, IconButton, Toolbar } from "polythene-mithril";

const iconBack = m.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>");

const generatedHtml = {
  oninit: vnode => (
    vnode.state.open = false,
    vnode.state.toggle = () => vnode.state.open = !vnode.state.open
  ),
  view: vnode => {
    return h(css.resultDataRawHtml, {
      className: vnode.state.open ? "open" : "closed",
      onclick: vnode.state.toggle,
    }, [
      m(".html", {id: vnode.attrs.id}, ""),
      m(".ellipsis", "...")
    ]);
  }
};

const navBar = (name, previous) =>
  h(css.headerRow, h(Toolbar, {
    style: {
      backgroundColor: "rgba(255,255,255,.93)"
    }
  }, [
    previous && h(IconButton, {
      icon: { svg: iconBack },
      url: {
        href: "/",
        oncreate: m.route.link
      },
      style: {
        color: "#0091EA"
      }
    }),
    m("span", name)
  ]));

const results = tests => 
  m([css.results].join(" "), {
    className: `tests-${name.replace(/[:\-+()\[\]]/ug, "").replace(/ /g, "-").toLowerCase()}`
  }, tests.map((test, index) => {
    if (test.section) {
      return h(css.sectionTitle, test.section);
    }
    const testName = `test-${(test.name).replace(/[:\-+\[\]()]/ug, "").replace(/ /g, "-").toLowerCase()}`;
    const uid = "id-" + index;
    return m([css.resultRow, test.interactive ? css.interactive : null].join(""), {
      key: testName,
      className: [testName, test.className || null].join(" "),
    }, [
      h(css.resultTitle, {
        className: "result-title"
      }, test.name),
      h(css.resultData, [
        h(css.resultDataRendered,
          h(css.content, {
            oncreate: vnode => {
              if (!test.exclude) {
                document.querySelector(`#${uid}`).textContent = tidy(vnode.dom.innerHTML);
              }
            }
          }, h(test.component, test.attrs, test.children))
        ),
        !test.exclude && h(css.resultDataRaw, 
          h(generatedHtml, {id: uid})
        )
      ])
    ]);
  }));
  
export default (name, tests, previous) => ({
  oncreate: () => ( 
    document.title = name,
    scrollTo(0, 0)
  ),
  view: () => [
    navBar(name, previous),
    results(tests),
    h(Dialog),
    h(snackbar),
    h(notification)
  ]
});