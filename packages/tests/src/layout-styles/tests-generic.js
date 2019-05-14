import { styles } from "./block-styles";
import { styler } from "polythene-core-css";
styler.add("css-classes", styles);

export default ({ h, layoutComponent, createBlocks }) => {
  const blocks = createBlocks(h);

  return [
    {
      name: "Should be aligned horizontally",
      component: layoutComponent(
        h(".layout",
          null, blocks
        )
      )
    },
    {
      name: "Should be aligned vertically",
      component: layoutComponent(
        h(".vertical-blocks",
          null, blocks
        )
      )
    },
    {
      name: "Should be stacked vertically and inline",
      component: layoutComponent(
        h(".layout.vertical.inline",
          null, blocks
        )
      )
    },
    {
      name: "Should be reversed",
      component: layoutComponent(
        h(".layout.horizontal.reverse",
          null, blocks
        )
      )
    },
    {
      name: "Should be justified horizontally",
      component: layoutComponent(
        h(".layout.justified",
          null, blocks
        )
      )
    },
    {
      name: "Should fill the space",
      component: layoutComponent(
        h(".fixed-height",
          null, h(".block.pe-fit")
        )
      )
    }
  ];
};
