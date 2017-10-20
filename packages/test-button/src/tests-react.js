import React from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router-dom";
import { renderer, Button } from "polythene-react";
import genericTests from "./tests-generic";
import { compose, withState, withHandlers } from "recompose";
import { ButtonCSS } from "polythene-css";

const reactTests = ({ Button, renderer: h }) => {

  const SecondaryButton = props =>
    <Button className="react-secondary-button" borders {...props} />;

  ButtonCSS.addStyle(".react-secondary-button", {
    color_light_text: "#673ab7",
    color_light_border: "#673ab7",
    color_dark_text: "yellow",
    color_dark_border: "yellow"
  });

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
      name: "Option: router url (with hash)",
      interactive: true,
      component: () => 
        h(Button, {
          label: "Go to #/shadow",
          url: {
            href: "#/shadow"          },
        })
    },
    {
      name: "With React Router Link",
      interactive: true,
      component: () => 
        h(Button, {
          label: "Go to /shadow",
          element: Link,
          url: {
            to: "/shadow",
          },
        })
    },
    {
      name: "Option: events (onclick)",
      interactive: true,
      exclude: true,
      component: withCounter(({ counter, increment }) =>
        h("div", [
          h("div", `onclick called: ${counter}`),
          h(Button, {
            label: "Button",
            events: {
              onClick: increment
            }
          })
        ])
      )
    },
    {
      name: "Key down (after having focus) results in click",
      interactive: true,
      exclude: true,
      component: withCounter(({ counter, increment }) =>
        h("div", [
          h("div", `onclick called: ${counter}`),
          h(Button, {
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
        h(".pe-light-tone",
          {
            style: { background: "#fff" }
          },
          [
            h(Button, {
              label: "Normal"
            }),
            h(Button, {
              label: "Disabled",
              disabled: true
            }),
            h(Button, {
              label: "Theme",
              className: "tests-button-themed-button"
            })
          ]
        )
    },
    {
      name: "Dark tone class + light tone",
      className: "pe-dark-tone",
      component: () =>
        h("div",
          {
            style: { background: "#fff" }
          },
          [
            h(Button, {
              label: "Normal",
              tone: "light"
            }),
            h(Button, {
              label: "Disabled",
              disabled: true,
              tone: "light"
            }),
            h(Button, {
              label: "Theme",
              className: "tests-button-themed-button",
              tone: "light"
            })
          ]
        )
    },
    {
      section: "React JSX tests",
    },
    {
      name: "Themed Button: (option: borders) (JSX)",
      component: () => <Button label="Button" className="react-secondary-button" borders />
    },
    {
      name: "Option: inactivate (2s) (JSX)",
      component: () => <Button label="Inactivated for 2s" inactivate={2} />
    },
    {
      name: "HOC (JSX)",
      component: () => <SecondaryButton label="Secondary Button" />
    },
  ];
};

export default []
  .concat(genericTests({ Button, renderer }))
  .concat(reactTests({ Button, renderer }));
