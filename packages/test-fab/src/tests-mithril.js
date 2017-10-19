import { renderer, FAB, Icon } from "polythene-mithril";
import genericTests from "./tests-generic";
const iconAlarm = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z\"/></svg>";

const mithrilTests = ({ FAB, renderer: h }) => {
  const trustedIconAlarm = h.trust(iconAlarm);

  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "Option: url",
      interactive: true,
      component: FAB,
      attrs: {
        icon: {
          svg: { content: trustedIconAlarm }
        },
        url: {
          href: "/shadow",
          oncreate: h.route.link
        }
      }
    },
    {
      name: "Dark tone class + light tone class",
      className: "pe-dark-tone",
      component: {
        view: () => h(".pe-light-tone", {
          style: { background: "#fff", padding: "10px" }
        }, [
          h(FAB, {
            icon: {
              svg: { content: trustedIconAlarm }
            }
          }),
          h(FAB, {
            icon: {
              svg: { content: trustedIconAlarm }
            },
            className: "tests-fab-themed-fab"
          })
        ])
      }
    },
    {
      name: "Dark tone class + light tone",
      className: "test-dark-tone",
      component: {
        view: () => h("div", {
          style: { background: "#fff", padding: "10px" }
        }, [
          h(FAB, {
            icon: {
              svg: { content: trustedIconAlarm }
            },
            tint: "light"
          }),
          h(FAB, {
            icon: {
              svg: { content: trustedIconAlarm }
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
  .concat(genericTests({ FAB, Icon, renderer }))
  .concat(mithrilTests({ FAB, Icon, renderer }));
