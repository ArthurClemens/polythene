import { renderer, RaisedButton } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = ({ RaisedButton, renderer: h }) => {

  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "Option: url (with oncreate)",
      interactive: true,
      component: RaisedButton,
      attrs: {
        label: "Go to /#/shadow",
        url: {
          href: "/shadow",
          oncreate: h.route.link
        }
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
          h(RaisedButton, {
            label: "Button",
            events: {
              onclick: () => vnode.state.clicked++
            }
          })
        ]
      }
    },
    {
      name: "Dark tone class + light tone class",
      className: "pe-dark-tone",
      component: {
        view: () => h(".pe-light-tone", {
          style: { background: "#fff" }
        }, [
          h(RaisedButton, {
            label: "Normal"
          }),
          h(RaisedButton, {
            label: "Disabled",
            disabled: true
          }),
          h(RaisedButton, {
            label: "Theme",
            className: "tests-raised-button-themed-button"
          })
        ])
      }
    },
    {
      name: "Dark tone class + light tone",
      className: "pe-dark-tone",
      component: {
        view: () => h("div", {
          style: { background: "#fff" }
        }, [
          h(RaisedButton, {
            label: "Normal",
            tone: "light"
          }),
          h(RaisedButton, {
            label: "Disabled",
            disabled: true,
            tone: "light"
          }),
          h(RaisedButton, {
            label: "Theme",
            className: "tests-raised-button-themed-button",
            tone: "light"
          })
        ])
      }
    }
  ];
};

export default []
  .concat(genericTests({ RaisedButton, renderer }))
  .concat(mithrilTests({ RaisedButton, renderer }));
