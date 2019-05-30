import React from "react";
import { Shadow } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
import { a } from "cyano-react";
import genericTests from "./tests-generic";

const reactTests = ({ Shadow }) => {

  return [
    {
      section: "React tests",
    },
    {
      name: "Add to a React element",
      component: () =>
        <div>
          <div>Some element</div>
          <Shadow />
        </div>
    },
  ];
};

export default []
  .concat(genericTests({ Shadow, h, a }))
  .concat(reactTests({ Shadow, h, a }));
