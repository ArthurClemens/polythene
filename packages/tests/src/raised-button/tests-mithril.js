import { renderer, raisedButton } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = ({ raisedButton, renderer: h }) => {

  return [
    {
      name: "Option: url (with oncreate)",
      interactive: true,
      component: raisedButton,
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
          h(raisedButton, {
            label: "Button",
            events: {
              onclick: () => vnode.state.clicked++
            }
          })
        ]
      }
    },
    {
      name: "Dark tone class + light theme class",
      className: "pe-dark-tone",
      component: {
        view: () => h(".pe-light-tone", {
          style: { background: "#fff" }
        }, [
          h(raisedButton, {
            label: "Normal"
          }),
          h(raisedButton, {
            label: "Disabled",
            disabled: true
          }),
          h(raisedButton, {
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
          h(raisedButton, {
            label: "Normal",
            tone: "light"
          }),
          h(raisedButton, {
            label: "Disabled",
            disabled: true,
            tone: "light"
          }),
          h(raisedButton, {
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
  .concat(genericTests({ raisedButton, renderer }))
  .concat(mithrilTests({ raisedButton, renderer }));
