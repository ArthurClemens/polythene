import { createColor, sel, createLayout, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

var listTileClasses = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var classes = {
  component: "pe-list",
  // states
  border: "pe-list--border",
  compact: "pe-list--compact",
  hasHeader: "pe-list--header",
  indentedBorder: "pe-list--indented-border",
  padding: "pe-list--padding",
  paddingTop: "pe-list--padding-top",
  paddingBottom: "pe-list--padding-bottom",
  // lookup
  header: listTileClasses.header
};

const generalFns = {
  general_styles: () => []
};

const tintFns = tint => ({
  ["color_" + tint + "_background"]: (selector, vars$$1) => [sel(selector, {
    backgroundColor: vars$$1["color_" + tint + "_background"]
  })],
  ["color_" + tint + "_border"]: (selector, vars$$1) => [sel(selector, {
    ["& + .pe-list"]: {
      borderTopColor: vars$$1["color_" + tint + "_border"]
    },
    ".pe-list--border": {
      " .pe-list-tile": {
        ":not(:last-child)": {
          borderColor: vars$$1["color_" + tint + "_border"]
        }
      }
    },
    ".pe-list--indented-border": {
      " .pe-list-tile": {
        " .pe-list-tile__content:not(.pe-list-tile__content-front)": {
          borderColor: vars$$1["color_" + tint + "_border"]
        }
      }
    }
  })]
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));
var color = createColor({
  varFns: {
    lightTintFns,
    darkTintFns
  }
});

const borderStyle = vars$$1 => ({
  borderStyle: "none none solid none",
  borderWidth: vars$$1.border_width_bordered + "px"
});

const varFns = {
  general_styles: selector => [sel(selector, {
    flexGrow: 1,
    ".pe-list--header": {
      paddingTop: 0
    },
    ".pe-list--indented-border": {
      borderTop: "none"
    }
  })],
  padding: (selector, vars$$1) => [sel(selector, {
    ".pe-list--padding": {
      padding: vars$$1.padding + "px 0"
    },
    ".pe-list--padding-top": {
      paddingTop: vars$$1.padding + "px"
    },
    ".pe-list--padding-bottom": {
      paddingBottom: vars$$1.padding + "px"
    }
  })],
  padding_compact: (selector, vars$$1) => [sel(selector, {
    ".pe-list--compact": {
      padding: vars$$1.padding_compact + "px 0"
    }
  })],
  border_width_stacked: (selector, vars$$1) => [sel(selector, {
    "& + &": {
      borderStyle: "solid none none none",
      borderWidth: vars$$1.border_width_stacked + "px"
    }
  })],
  border_width_bordered: (selector, vars$$1) => [sel(selector, {
    ".pe-list--border": {
      " .pe-list-tile": {
        ":not(.pe-list-tile--header):not(:last-child)": {
          "&": borderStyle(vars$$1)
        }
      }
    },
    ".pe-list--indented-border": {
      " .pe-list-tile": {
        ":not(.pe-list-tile--header):not(:last-child)": {
          " .pe-list-tile__content:not(.pe-list-tile__content-front)": borderStyle(vars$$1)
        }
      }
    }
  })]
};
var layout = createLayout({
  varFns
});

var vars$1 = {
  general_styles: true,
  border_width_bordered: 1,
  border_width_stacked: 1,
  padding: vars.grid_unit_component,
  // vertical padding
  padding_compact: vars.grid_unit_component * 3 / 4,
  color_light_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_dark_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light) // background color may be set in theme; disabled by default
  // color_light_background: "inherit",
  // color_dark_background:  "inherit"

};

const fns = [layout, color];
const selector = `.${classes.component}`;
const addStyle = styler.createAddStyle(selector, fns, vars$1);
const getStyle = styler.createGetStyle(selector, fns, vars$1);
styler.addStyle({
  selectors: [selector],
  fns,
  vars: vars$1
});

export { addStyle, color, getStyle, layout, vars$1 as vars };
