import { renderer } from "polythene-mithril";
import { button } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = ({ button, renderer: h }) => {
  return [
    {
      name: "Dark tone class + light theme class",
      class: "pe-dark-tone",
      component: {
        view: () => h(".pe-light-tone", {
          style: { background: "#fff" }
        }, [
          h(button, {
            label: "Normal",
          }),
          h(button, {
            label: "Disabled",
            disabled: true
          }),
          h(button, {
            label: "Theme",
            class: "tests-button-themed-button"
          })
        ])
      }
    },
    {
      name: "Dark tone class + light tone",
      class: "test-dark-theme",
      component: {
        view: () => h("div", {
          style: { background: "#fff" }
        }, [
          h(button, {
            label: "Normal",
            tone: "light"
          }),
          h(button, {
            label: "Disabled",
            disabled: true,
            tone: "light"
          }),
          h(button, {
            label: "Theme",
            class: "tests-button-themed-button",
            tone: "light"
          })
        ])
      }
    },
    {
      name: "Option: url (with oncreate)",
      interactive: true,
      component: button,
      attrs: {
        label: "Go to /#/shadow",
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
          h(button, {
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
          h(button, {
            label: "Button",
            events: {
              onclick: () => vnode.state.clicked++
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
          h(button, {
            label: "Button",
            events: {
              onclick: () => vnode.state.clickCount++
            }
          })
        ]
      }
    },
  ];
};

export default []
  .concat(genericTests({ button, renderer }))
  .concat(mithrilTests({ button, renderer }));
