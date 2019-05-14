import genericTests from "./tests-generic";
import { h } from "../../utils/enhanced-renderer";
import { createBlocks } from "./block-styles";

const layoutComponent = content => () => content;

const reactTests = () => {
  return [];
};

export default []
  .concat(genericTests({ h, layoutComponent, createBlocks }))
  .concat(reactTests({ h, layoutComponent, createBlocks }));
