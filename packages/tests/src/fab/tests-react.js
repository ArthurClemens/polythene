import React from "react"; // eslint-disable-line no-unused-vars
import { withRouter } from "react-router-dom";
import { renderer, FAB, Icon, SVG } from "polythene-react";
import genericTests from "./tests-generic";

const iconAlarm = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"/></svg>";
const iconAlarmSVG = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>;

const reactTests = ({ FAB, Icon, SVG, renderer: h }) => { // eslint-disable-line no-unused-vars
  const trustedIconAlarm = h.trust(iconAlarm);

  return [
    {
      section: "React specific tests",
    },
    {
      name: "With router",
      interactive: true,
      component: withRouter(({ history }) => 
        h(FAB, {
          icon: {
            svg: trustedIconAlarm
          },
          url: {
            href: "/shadow",
            onClick: e => (e.preventDefault(), history.push("/shadow"))
          }
        })
      )
    },
    {
      name: "Dark tone class + light tone class",
      className: "pe-dark-tone",
      component: () =>
        h(".pe-light-tone", {
          style: { background: "#fff", padding: "10px" }
        }, [
          h(FAB, {
            icon: {
              svg: trustedIconAlarm
            }
          }),
          h(FAB, {
            icon: {
              svg: trustedIconAlarm
            },
            className: "tests-fab-themed-fab"
          })
        ])
    },
    {
      name: "Dark tone class + light tone",
      className: "test-dark-tone",
      component: () =>
        h("div", {
          style: { background: "#fff", padding: "10px" }
        }, [
          h(FAB, {
            icon: {
              svg: trustedIconAlarm
            },
            tint: "light"
          }),
          h(FAB, {
            icon: {
              svg: trustedIconAlarm
            },
            className: "tests-fab-themed-fab",
            tint: "light"
          })
        ])
    },

    {
      section: "React  JSX tests",
    },
    {
      name: "Option: icon as attribute (JSX)",
      component: () => <FAB icon={{svg: iconAlarmSVG}} mini />
    },
    {
      name: "Option: icon as component (JSX)",
      component: () => <FAB mini><Icon><SVG>{iconAlarmSVG}</SVG></Icon></FAB>
    },
    {
      name: "Option: z (5) (JSX)",
      component: () => <FAB mini icon={{svg: iconAlarmSVG}} z={5} />
    },
    {
      name: "Option: style (JSX)",
      component: () => <FAB icon={{svg: iconAlarmSVG}} style={{ color: "#ef6c00", backgroundColor: "#fff" }} />
    },
    {
      name: "With router (JSX)",
      interactive: true,
      component: withRouter(({ history }) => 
        <FAB
          icon={{svg: iconAlarmSVG}}
          url={{
            href: "/shadow",
            onClick: e => (e.preventDefault(), history.push("/shadow"))
          }}
        />
      )
    },

  ];
};

export default []
  .concat(genericTests({ FAB, Icon, renderer }))
  .concat(reactTests({ FAB, Icon, SVG, renderer }));
