import React from "react"; // eslint-disable-line no-unused-vars
import { renderer, Button, RaisedButton, ButtonGroup } from "polythene-react";
import genericTests from "./tests-generic";

const reactTests = ({ Button, ButtonGroup }) => {

  return [
    {
      section: "React JSX tests",
    },
    {
      name: "Group (buttons extraWide and highLabel) (JSX)",
      component: () => (
        <ButtonGroup>
          <Button label="One" extraWide highLabel />
          <Button label="Two" extraWide highLabel separatorAtStart />
          <Button label="Three" extraWide highLabel separatorAtStart />
        </ButtonGroup>
      )
    },
  ];
};

export default []
  .concat(genericTests({ Button, RaisedButton, ButtonGroup, renderer }))
  .concat(reactTests({ Button, RaisedButton, ButtonGroup, renderer }));
