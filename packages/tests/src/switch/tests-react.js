import React from "react"; // eslint-disable-line no-unused-vars
import { Switch, Icon, Button } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
import { a } from "cyano-react";
import genericTests from "./tests-generic";

const reactTests = ({ Switch }) => { // eslint-disable-line no-unused-vars

  return [
    {
      section: "React specific tests",
    },
    {
      name: "Option: defaultChecked (JSX)",
      component: () =>
        <Switch
          label="Label"
          defaultChecked
        />
    },
  ];
};

export default []
  .concat(genericTests({ Switch, Icon, Button, h, a }))
  .concat(reactTests({ Switch, Icon, Button, h, a }));
