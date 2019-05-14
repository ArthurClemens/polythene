import React from "react"; // eslint-disable-line no-unused-vars
import { withRouter } from "react-router-dom";
import { Button, Icon } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
// import { RaisedButton } from "polythene-react-raised-button";
import genericTests from "./tests-generic";
import { compose, withState, withHandlers } from "recompose";

const reactTests = ({ Button, h }) => {

  const withCounter = compose(
    withState("counter", "setCounter", 0),
    withHandlers({
      increment: ({ setCounter }) => () => setCounter(n => n + 1)
    })
  );

  return [
    {
      section: "React specific tests",
    },
    // {
    //   name: "Deprecated polythene-react-raised-button",
    //   interactive: true,
    //   component: RaisedButton,
    //   attrs: {
    //     label: "Deprecated",
    //   }
    // },
    {
      name: "With router",
      interactive: true,
      component: withRouter(({ history }) => 
        h(Button, {
          raised: true,
          label: "Go to /shadow",
          url: {
            href: "/shadow",
            onClick: e => (e.preventDefault(), history.push("/shadow"))
          },
        })
      )
    },
    {
      name: "Option: events (onclick)",
      interactive: true,
      exclude: true,
      component: withCounter(({ counter, increment }) =>
        h("div", [
          h("div", `onclick called: ${counter}`),
          h(Button, {
            raised: true,
            label: "Button",
            events: {
              onClick: increment
            }
          })
        ])
      )
    },
    {
      name: "Dark tone class + light tone class",
      className: "pe-dark-tone",
      component: () =>
        h(".pe-button-row.pe-light-tone",
          {
            style: { background: "#fff" }
          },
          [
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
          ]
        )
    },
    {
      name: "Dark tone class + light tone",
      className: "pe-dark-tone",
      component: () =>
        h(".pe-button-row",
          {
            style: { background: "#fff" }
          },
          [
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
          ]
        )
    },
    {
      section: "React JSX tests",
    },
    {
      name: "Option: raised (with option shadowDepth: 2) (JSX)",
      component: () => <Button raised label="Button" shadowDepth={2} />
    },
    {
      name: "Option: inactivate (2s) (JSX)",
      component: () => <Button raised label="Inactivated for 2s" inactivate={2} />
    },

  ];
};

export default []
  .concat(genericTests({ Button, Icon, h }))
  .concat(reactTests({ Button, Icon, h }));
