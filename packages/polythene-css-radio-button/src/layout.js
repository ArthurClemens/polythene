import { createLayout } from "polythene-core-css";
import { layout as superLayout } from "polythene-css-selection-control";

const varFns = {
  general_styles: () => ({
    " .pe-radio-group": {
      display: "flex"
    }
  })
};

export default createLayout({ varFns, superLayout });
