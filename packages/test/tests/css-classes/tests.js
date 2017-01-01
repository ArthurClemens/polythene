import m from "mithril";
import "polythene-css-classes";
import { styler } from "polythene-css";
import { styles, blocks } from "./block-styles";

styler.add("css-classes", styles);

export const tests = [
  {
    name: "Should be aligned horizontally",
    component: {
      view: () => m(".layout",
        blocks
      )
    }
  },
  {
    name: "Should be aligned vertically",
    component: {
      view: () => m(".vertical-blocks",
        blocks
      )
    }
  },
  {
    name: "Should be stacked vertically and inline",
    component: {
      view: () => m(".layout.vertical.inline",
        blocks
      )
    }
  },
  {
    name: "Should be reversed",
    component: {
      view: () => m(".layout.horizontal.reverse",
        blocks
      )
    }
  },
  {
    name: "Should be justified horizontally",
    component: {
      view: () => m(".layout.justified",
        blocks
      )
    }
  },
  {
    name: "Should fill the space",
    component: {
      view: () => m(".fixed-height",
        m(".block.pe-fit")
      )
    }
  }
];