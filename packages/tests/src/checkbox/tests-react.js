import React from "react"; // eslint-disable-line no-unused-vars
import { renderer, Checkbox, keys } from "polythene-react";
import genericTests from "./tests-generic";

const reactTests = ({ Checkbox, renderer: h }) => { // eslint-disable-line no-unused-vars

  return [

  ];
};

export default []
  .concat(genericTests({ Checkbox, renderer, keys }))
  .concat(reactTests({ Checkbox, renderer, keys }));
