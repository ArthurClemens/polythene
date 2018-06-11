import { sel, createLayout } from "polythene-core-css";

const varFns = {
  general_styles: selector => [
    sel(selector, {
      display: "flex",
    })
  ],
};

export default createLayout({ varFns });
