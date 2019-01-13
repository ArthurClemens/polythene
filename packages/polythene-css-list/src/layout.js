// @ts-check

import { sel, createLayout } from "polythene-core-css";

const borderStyle = vars => ({
  borderStyle: "none none solid none",
  borderWidth: vars.border_width_bordered + "px"
});

const varFns = {
  general_styles: selector => [
    sel(selector, {
      flexGrow: 1,

      ".pe-list--header": {
        paddingTop: 0
      },
      ".pe-list--indented-border": {
        borderTop: "none",
      }
    })
  ],
  padding: (selector, vars) => [
    sel(selector, {
      ".pe-list--padding": {
        padding: vars.padding + "px 0",
      },
      ".pe-list--padding-top": {
        paddingTop: vars.padding + "px",
      },
      ".pe-list--padding-bottom": {
        paddingBottom: vars.padding + "px",
      },
    })
  ],
  padding_compact: (selector, vars) => [
    sel(selector, {
      ".pe-list--compact": {
        padding: vars.padding_compact + "px 0",
      },
    })
  ],
  border_width_stacked: (selector, vars) => [
    sel(selector, {
      "& + &": {
        borderStyle: "solid none none none",
        borderWidth: vars.border_width_stacked + "px"
      },
    })
  ],
  border_width_bordered: (selector, vars) => [
    sel(selector, {
      ".pe-list--border": {
        " .pe-list-tile": {
          ":not(.pe-list-tile--header):not(:last-child)": {
            "&": borderStyle(vars)
          }
        }
      },
      ".pe-list--indented-border": {
        " .pe-list-tile": {
          ":not(.pe-list-tile--header):not(:last-child)": {
            " .pe-list-tile__content:not(.pe-list-tile__content-front)": borderStyle(vars)
          }
        }
      }
    })
  ],
};

export default createLayout({ varFns });
