import React from "react"; // eslint-disable-line no-unused-vars
import { withRouter } from "react-router-dom";
import { Button, Icon } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
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
    {
      name: "With router",
      interactive: true,
      component: withRouter(({ history }) => 
        <Button
          raised
          label="Go to /shadow"
          url={{
            href: "/shadow",
            onClick: e => (e.preventDefault(), history.push("/shadow"))
          }}
        />
      )
    },
    {
      name: "Option: events (onClick) (JSX)",
      interactive: true,
      exclude: true,
      component: withCounter(({ counter, increment }) =>
        <div>
          <div>{`onClick called: ${counter}`}</div>
          <Button
            raised
            label="Button"
            events={{
              onClick: increment
            }}
          />
        </div>
      )
    },
  
  ];
};

export default []
  .concat(genericTests({ Button, Icon, h }))
  .concat(reactTests({ Button, Icon, h }));
