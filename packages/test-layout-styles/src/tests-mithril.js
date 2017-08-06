import genericTests from "./tests-generic";
import { renderer } from "polythene-mithril";
import { createBlocks } from "./block-styles";

const layoutComponent = content => ({
  view: () => content
});

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ renderer, layoutComponent, createBlocks }))
  .concat(mithrilTests({ renderer, layoutComponent, createBlocks }));
