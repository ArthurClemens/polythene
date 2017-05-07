import genericTests from "./tests-generic";
import { renderer } from "polythene-react";
import { createBlocks } from "./block-styles";

const layoutComponent = content => () => content;

const reactTests = () => {
  return [];
};

export default []
  .concat(genericTests({ renderer, layoutComponent, createBlocks }))
  .concat(reactTests({ renderer, layoutComponent, createBlocks }));
