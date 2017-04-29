import { renderer } from "polythene-mithril-core";
import button from "polythene-mithril-button";
import tests from "./tests-generic";

const mithrilTests = ({ button, renderer: v }) => {
  return [
    {
      name: "Option: url (with oncreate)",
      interactive: true,
      component: button,
      attrs: {
        label: "Go to /#/shadow",
        url: {
          href: "/shadow",
          oncreate: v.route.link
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
          v("div", `Updated: ${vnode.state.updated}`),
          v(button, {
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
          v("div", `onclick called: ${vnode.state.clicked}`),
          v(button, {
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
          v("div", `onclick called: ${vnode.state.clickCount}`),
          v(button, {
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
  .concat(tests({ button, renderer }))
  .concat(mithrilTests({ button, renderer }));
