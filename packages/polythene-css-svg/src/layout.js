// @ts-check

import { sel, createLayout } from "polythene-core-css";

const varFns = {
  general_styles: selector => [
    sel(selector, {
      lineHeight: 1,

      " > div, svg": {
        width: "inherit",
        height: "inherit"
      }
    })
  ],
};

export default createLayout({ varFns });
