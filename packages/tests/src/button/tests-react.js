import React from "react"; // eslint-disable-line no-unused-vars
import { withRouter, Link } from "react-router-dom";
import { Button, Icon } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
import genericTests from "./tests-generic";
import { compose, withState, withHandlers } from "recompose";
import { ButtonCSS } from "polythene-css";

const reactTests = ({ Button, h }) => {

  const SecondaryButton = props =>
    <Button className="react-secondary-button" border {...props} />;

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
      name: "Option: router url (with hash) (JSX)",
      interactive: true,
      component: () => 
        <Button
          label="Go to #/shadow"
          url={{
            href: "#/shadow"
          }}
        />
    },
    {
      name: "With router (JSX)",
      interactive: true,
      component: withRouter(({ history }) => 
        <Button
          label="Go to /shadow"
          url={{
            href: "/shadow",
            onClick: e => (e.preventDefault(), history.push("/shadow"))
          }}
        />
      )
    },

    {
      name: "With React Router Link (JSX)",
      interactive: true,
      component: () => 
        <Button
          label="Go to /shadow"
          element={Link}
          url={{
            to: "/shadow"
          }}
        />
    },
    {
      name: "Option: events (onClick) (JSX)",
      interactive: true,
      exclude: true,
      component: withCounter(({ counter, increment }) =>
        <div>
          <div>{`onClick called: ${counter}`}</div>
          <Button
            label="Button"
            events={{
              onClick: increment
            }}
          />
        </div>
      )
    },
    {
      name: "Key down (after having focus) results in click (JSX)",
      interactive: true,
      exclude: true,
      component: withCounter(({ counter, increment }) =>
        <div>
          <div>{`onClick called: ${counter}`}</div>
          <Button
            label="Button"
            events={{
              onClick: increment
            }}
          />
        </div>
      )
    },
    {
      name: "Themed Button: (option: border) (JSX)",
      component: () => <Button label="Button" className="react-secondary-button" border />
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
  .concat(genericTests({ Button, Icon, h }))
  .concat(reactTests({ Button, Icon, h }));
