// @ts-check

import { sel, createLayout } from "polythene-core-css";

const varFns = {
  /**
   * @param {string} selector
   */
  general_styles: selector => [
    sel(selector, {
      display: "flex",
    })
  ],
};

export default createLayout({ varFns });
