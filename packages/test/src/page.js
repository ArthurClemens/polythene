import m from "mithril";
import { rules as css } from "./styles";
import { tidy } from "../scripts/render";
import { toolbar } from "polythene-toolbar";
import { iconButton } from "polythene-icon-button";
import { dialog } from "polythene-dialog";
import iconBack from "mmsvg/google/msvg/navigation/arrow-back";

const generatedHtml = {
  oninit: vnode => (
    vnode.state.open = false,
    vnode.state.toggle = () => vnode.state.open = !vnode.state.open
  ),
  view: vnode => {
    return m(css.resultDataRawHtml, {
      class: vnode.state.open ? "open" : "closed",
      onclick: vnode.state.toggle,
    }, [
      m(".html", {id: vnode.attrs.id}, ""),
      m(".ellipsis", "...")
    ]);
  }
};

export default (name, tests, previous) => ({
  oncreate: () => ( 
    document.title = name,
    scrollTo(0, 0)
  ),
  view: () => [
    m(css.headerRow, m(toolbar, {
      style: {
        backgroundColor: "rgba(255,255,255,.93)"
      }
    }, [
      previous && m(iconButton, {
        icon: { msvg: iconBack },
        url: {
          href: "/",
          oncreate: m.route.link
        },
        style: {
          color: "#0091EA"
        }
      }),
      m("span", name)
    ])),
    m([css.results].join(" "), {
      class: `tests-${name.replace(/[\:\-\[\]]/g, "").replace(/ /g, "-").toLowerCase()}`
    }, tests.map((test, index) => {
      const testName = `test-${(test.name).replace(/[\:\-\[\]\(\)]/g, "").replace(/ /g, "-").toLowerCase()}`;
      const uid = "id-" + index;
      return m([css.resultRow, test.interactive ? css.interactive : null].join(""), {
        key: testName,
        class: [testName, test.class || null].join(" "),
      }, [
        m(css.resultTitle, {
          class: "result-title"
        }, test.name),
        m(css.resultData, [
          m(css.resultDataRendered,
            m(css.content, {
              oncreate: vnode => {
                if (!test.exclude) {
                  document.querySelector(`#${uid}`).textContent = tidy(vnode.dom.innerHTML);
                }
              }
            }, m(test.component, test.attrs, test.children))
          ),
          !test.exclude && m(css.resultDataRaw, 
            m(generatedHtml, {id: uid})
          )
        ])
      ]);
    })),
    m(dialog)
  ]
});