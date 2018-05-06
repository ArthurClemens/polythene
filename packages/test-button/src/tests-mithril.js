import { renderer, Button } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = ({ Button, renderer: h }) => {
  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "Option: router url (with hash)",
      interactive: true,
      component: Button,
      attrs: {
        label: "Go to #/shadow",
        url: {
          href: "#/shadow"
        }
      }
    },
    {
      name: "Option: url (with oncreate)",
      interactive: true,
      component: Button,
      attrs: {
        label: "Go to /shadow",
        url: {
          href: "/shadow",
          oncreate: h.route.link
        }
      }
    },
    {
      name: "onbeforeupdate",
      interactive: true,
      exclude: true,
      component: {
        oninit: vnode =>
          vnode.state.updated = 0,
        view: vnode => [
          h("div", `Updated: ${vnode.state.updated}`),
          h(Button, {
            label: "Button",
            onbeforeupdate: () => vnode.state.updated++
          })
        ]
      }
    },
    {
      name: "Option: events (onclick)",
      interactive: true,
      exclude: true,
      component: {
        oninit: vnode =>
          vnode.state.clicked = 0,
        view: vnode => [
          h("div", `onclick called: ${vnode.state.clicked}`),
          h(Button, {
            label: "Button",
            events: {
              onclick: e => {
                if (!e.detail || e.detail == 1) { // activate on first click only to avoid hiding again on multiple clicks
                  vnode.state.clicked++;
                }
              }
            }
          })
        ]
      }
    },
    {
      name: "Key down (after having focus) results in click",
      interactive: true,
      exclude: true,
      component: {
        oninit: vnode =>
          vnode.state.clickCount = 0,
        view: vnode => [
          h("div", `onclick called: ${vnode.state.clickCount}`),
          h(Button, {
            label: "Button",
            events: {
              onclick: () => vnode.state.clickCount++
            }
          })
        ]
      }
    },
    {
      name: "Dark tone class + light tone class",
      className: "pe-dark-tone",
      component: {
        view: () => h(".pe-button-row.pe-light-tone", {
          style: { background: "#fff" }
        }, [
          h(Button, {
            label: "Normal",
          }),
          h(Button, {
            label: "Disabled",
            disabled: true
          }),
          h(Button, {
            label: "Theme",
            className: "tests-button-themed-button"
          })
        ])
      }
    },
    {
      name: "Dark tone class + light tone",
      className: "test-dark-tone",
      component: {
        view: () => h(".pe-button-row", {
          style: { background: "#fff" }
        }, [
          h(Button, {
            label: "Normal",
            tone: "light"
          }),
          h(Button, {
            label: "Disabled",
            disabled: true,
            tone: "light"
          }),
          h(Button, {
            label: "Theme",
            className: "tests-button-themed-button",
            tone: "light"
          })
        ])
      }
    },
  ];
};

export default []
  .concat(genericTests({ Button, renderer }))
  .concat(mithrilTests({ Button, renderer }));
