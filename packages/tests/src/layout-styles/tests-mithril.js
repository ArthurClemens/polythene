import genericTests from "./tests-generic";
import { h } from "cyano-mithril";
import { createBlocks } from "./block-styles";

const layoutComponent = content => ({
  view: () => content
});

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ h, layoutComponent, createBlocks }))
  .concat(mithrilTests({ h, layoutComponent, createBlocks }));
