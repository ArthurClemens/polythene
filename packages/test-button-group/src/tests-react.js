import React from "react"; // eslint-disable-line no-unused-vars
import { renderer, Button, ButtonGroup } from "polythene-react";
import genericTests from "./tests-generic";

const reactTests = ({ Button, ButtonGroup }) => {

  return [
    {
      section: "React JSX tests",
    },
    {
      name: "Group (JSX)",
      component: () => (
        <ButtonGroup separator>
          <Button label="One" />
          <Button label="Two" />
          <Button label="Three" />
        </ButtonGroup>
      )
    },
  ];
};

export default []
  .concat(genericTests({ Button, ButtonGroup, renderer }))
  .concat(reactTests({ Button, ButtonGroup, renderer }));
