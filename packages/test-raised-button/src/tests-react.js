import React from "react"; // eslint-disable-line no-unused-vars
import { withRouter } from "react-router-dom";
import { renderer, RaisedButton } from "polythene-react";
import genericTests from "./tests-generic";
import { compose, withState, withHandlers } from "recompose";

const reactTests = ({ RaisedButton, renderer: h }) => {

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
    {
      name: "With router",
      interactive: true,
      component: withRouter(({ history }) => 
        h(RaisedButton, {
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
          h(RaisedButton, {
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
          ]
        )
    },
    {
      section: "React JSX tests",
    },
    {
      name: "Option: raised (with option z: 2) (JSX)",
      component: () => <RaisedButton label="Button" z={2} />
    },
    {
      name: "Option: inactivate (2s) (JSX)",
      component: () => <RaisedButton label="Inactivated for 2s" inactivate={2} />
    },

  ];
};

export default []
  .concat(genericTests({ RaisedButton, renderer }))
  .concat(reactTests({ RaisedButton, renderer }));
