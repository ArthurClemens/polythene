import { renderer, Button, Icon } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = ({ Button, renderer: h }) => {

  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "Option: url (with oncreate)",
      interactive: true,
      component: Button,
      attrs: {
        raised: true,
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
          h(Button, {
            raised: true,
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
        view: () => h(".pe-button-row.pe-light-tone", {
          style: { background: "#fff" }
        }, [
          h(Button, {
            raised: true,
            label: "Normal"
          }),
          h(Button, {
            raised: true,
            label: "Disabled",
            disabled: true
          }),
          h(Button, {
            raised: true,
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
        view: () => h(".pe-button-row", {
          style: { background: "#fff" }
        }, [
          h(Button, {
            raised: true,
            label: "Normal",
            tone: "light"
          }),
          h(Button, {
            raised: true,
            label: "Disabled",
            disabled: true,
            tone: "light"
          }),
          h(Button, {
            raised: true,
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
  .concat(genericTests({ Button, Icon, renderer }))
  .concat(mithrilTests({ Button, Icon, renderer }));
