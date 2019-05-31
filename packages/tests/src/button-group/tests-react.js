import React from "react"; // eslint-disable-line no-unused-vars
import { Button, ButtonGroup } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
import { a } from "cyano-react";
import genericTests from "./tests-generic";

const reactTests = ({ Button, ButtonGroup }) => {

  return [
    {
      section: "React specific tests",
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
  .concat(genericTests({ Button, ButtonGroup, h, a }))
  .concat(reactTests({ Button, ButtonGroup, h, a }));
