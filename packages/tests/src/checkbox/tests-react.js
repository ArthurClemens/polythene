import React from "react"; // eslint-disable-line no-unused-vars
import { renderer, Checkbox, keys } from "polythene-react";
import genericTests from "./tests-generic";

const reactTests = ({ Checkbox, renderer: h }) => { // eslint-disable-line no-unused-vars

  return [
    {
      section: "React JSX tests",
    },
    {
      name: "Option: defaultChecked (JSX)",
      component: () =>
        <Checkbox
          label="Label"
          defaultChecked
        />
    },
  ];
};

export default []
  .concat(genericTests({ Checkbox, renderer, keys }))
  .concat(reactTests({ Checkbox, renderer, keys }));
