import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { renderer, keys, Shadow } from "polythene-react";
import genericTests from "./tests-generic";

const reactTests = ({ Shadow, renderer: h, keys: k }) => { // eslint-disable-line no-unused-vars

  return [
    {
      section: "React JSX tests",
    },
    {
      name: "Add to a React element (JSX)",
      component: () =>
        <div>
          <div>Some element</div>
          <Shadow />
        </div>
    },
  ];
};

export default []
  .concat(genericTests({ Shadow, renderer, keys }))
  .concat(reactTests({ Shadow, renderer, keys }));
