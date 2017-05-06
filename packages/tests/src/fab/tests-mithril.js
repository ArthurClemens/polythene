import { renderer, fab, icon } from "polythene-mithril";
import genericTests from "./tests-generic";
import iconAlarm from "mmsvg/google/msvg/action/alarm-add";

const mithrilTests = ({ fab, renderer: h }) => {
  return [
    {
      name: "Option: url",
      interactive: true,
      component: fab,
      attrs: {
        icon: {
          msvg: iconAlarm
        },
        url: {
          href: "/shadow",
          oncreate: h.route.link
        }
      }
    },
    {
      name: "Dark tone class + light theme class",
      className: "pe-dark-tone",
      component: {
        view: () => h(".pe-light-tone", {
          style: { background: "#fff", padding: "10px" }
        }, [
          h(fab, {
            icon: {
              msvg: iconAlarm
            }
          }),
          h(fab, {
            icon: {
              msvg: iconAlarm
            },
            className: "tests-fab-themed-fab"
          })
        ])
      }
    },
    {
      name: "Dark tone class + light tone",
      className: "test-dark-theme",
      component: {
        view: () => h("div", {
          style: { background: "#fff", padding: "10px" }
        }, [
          h(fab, {
            icon: {
              msvg: iconAlarm
            },
            tint: "light"
          }),
          h(fab, {
            icon: {
              msvg: iconAlarm
            },
            className: "tests-fab-themed-fab",
            tint: "light"
          })
        ])
      }
    }
  ];
};

export default []
  .concat(genericTests({ fab, icon, renderer }))
  .concat(mithrilTests({ fab, icon, renderer }));
