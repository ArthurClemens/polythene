import { createColor, sel, createLayout, flex, mixin, selectorRTL, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

var classes = {
  // Toolbar
  component: "pe-toolbar",
  // states
  compact: "pe-toolbar--compact",
  appBar: "pe-toolbar--app-bar",
  // Toolbar title
  // elements
  title: "pe-toolbar__title",
  // states
  centeredTitle: "pe-toolbar__title--center",
  indentedTitle: "pe-toolbar__title--indent",
  fullbleed: "pe-toolbar--fullbleed",
  border: "pe-toolbar--border"
};

const generalFns = {
  general_styles: selector => [] // eslint-disable-line no-unused-vars

};

const tintFns = tint => ({
  ["color_" + tint + "_text"]: (selector, vars$$1) => [sel(selector, {
    color: vars$$1["color_" + tint + "_text"]
  })],
  ["color_" + tint + "_background"]: (selector, vars$$1) => [sel(selector, {
    backgroundColor: vars$$1["color_" + tint + "_background"]
  })],
  ["color_" + tint + "_border"]: (selector, vars$$1) => [sel(selector, {
    ".pe-toolbar--border": {
      borderColor: vars$$1["color_" + tint + "_border"]
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

const breakpoint = breakpointSel => (selector, o) => ({
  [breakpointSel]: {
    [selector]: o
  }
});

const indent_padding_side = (selector, vars$$1, isRTL) => sel(selector, {
  " .pe-toolbar__title--indent, .pe-toolbar__title.pe-toolbar__title--indent": {
    [isRTL ? "marginLeft" : "marginRight"]: 0,
    [isRTL ? "marginRight" : "marginLeft"]: vars$$1.indent - vars$$1.padding_side + "px"
  }
});

const title_padding_title_after_icon_padding = (selector, vars$$1, isRTL) => sel(selector, {
  " > span, .pe-toolbar__title": {
    [isRTL ? "marginLeft" : "marginRight"]: 0,
    [isRTL ? "marginRight" : "marginLeft"]: vars$$1.title_padding + "px"
  },
  " > * + span, * + .pe-toolbar__title, * + .pe-toolbar__title--indent, * + .pe-toolbar__title.pe-toolbar__title--indent": {
    [isRTL ? "marginLeft" : "marginRight"]: 0,
    [isRTL ? "marginRight" : "marginLeft"]: vars$$1.title_after_icon_padding + "px"
  },
  " .pe-toolbar__title--center": {
    marginLeft: vars$$1.title_padding + "px",
    marginRight: vars$$1.title_padding + "px"
  }
});

const breakpointPhoneOnly = breakpoint(`@media (min-width: ${vars.breakpoint_for_phone_only}px) and (orientation: landscape)`);
const breakpointTabletPortraitUp = breakpoint(`@media (min-width: ${vars.breakpoint_for_tablet_portrait_up}px)`);
const varFns = {
  general_styles: selector => [sel(selector, [flex.layout, flex.layoutHorizontal, flex.layoutCenter, {
    position: "relative",
    zIndex: vars.z_toolbar,
    ".pe-toolbar--fullbleed": {
      padding: 0
    },
    ".pe-toolbar--border": {
      borderWidth: "1px",
      borderStyle: "none none solid none"
    },
    " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
      width: "100%",
      display: "block",
      wordBreak: "break-all",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    " .pe-toolbar__title--center": {
      textAlign: "center",
      justifyContent: "center"
    },
    " > .pe-action": {
      paddingLeft: "12px",
      paddingRight: "12px"
    },
    " .pe-fit": [mixin.fit(), {
      margin: 0
    }]
  }])],
  height: (selector, vars$$1) => [sel(selector, {
    height: vars$$1.height + "px"
  })],
  height_compact: (selector, vars$$1) => [sel(selector, {
    ".pe-toolbar--compact": {
      height: vars$$1.height_compact + "px"
    }
  }), breakpointPhoneOnly(selector, {
    height: vars$$1.height + "px"
  })],
  line_height: (selector, vars$$1) => [sel(selector, {
    lineHeight: vars$$1.line_height + "em",
    " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
      lineHeight: vars$$1.line_height
    }
  })],
  font_size: (selector, vars$$1) => [sel(selector, {
    " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
      fontSize: vars$$1.font_size + "px"
    }
  })],
  padding_side: (selector, vars$$1) => [sel(selector, {
    padding: "0 " + vars$$1.padding_side + "px"
  }), indent_padding_side(selector, vars$$1, false), indent_padding_side(selectorRTL(selector), vars$$1, true)],
  indent: (selector, vars$$1) => [indent_padding_side(selector, vars$$1, false), indent_padding_side(selectorRTL(selector), vars$$1, true)],
  title_padding: (selector, vars$$1) => [title_padding_title_after_icon_padding(selector, vars$$1, false), title_padding_title_after_icon_padding(selectorRTL(selector), vars$$1, true)],
  title_after_icon_padding: (selector, vars$$1) => [title_padding_title_after_icon_padding(selector, vars$$1, false), title_padding_title_after_icon_padding(selectorRTL(selector), vars$$1, true)],
  height_large: (selector, vars$$1) => [breakpointTabletPortraitUp(selector, {
    height: vars$$1.height_large + "px"
  })],
  padding_side_large: (selector, vars$$1) => [breakpointTabletPortraitUp(selector, {
    padding: "0 " + vars$$1.padding_side_large + "px"
  })]
};
var layout = createLayout({
  varFns
});

const padding_side = vars.grid_unit_component * 2 - 12; // 16 - 12 = 4

var vars$1 = {
  general_styles: true,
  font_size: 18,
  height: vars.grid_unit_component * 7,
  // 56
  height_compact: vars.grid_unit_component * 6,
  // 48
  height_large: vars.grid_unit_component * 8,
  // 64
  indent: vars.unit_indent,
  line_height: vars.line_height,
  padding_side,
  padding_side_large: vars.grid_unit_component * 3 - 12,
  // 24 - 12 = 12
  title_after_icon_padding: vars.grid_unit_component * 9 - vars.grid_unit_component * 6 - padding_side,
  // 72 - 48 - 4 = 20
  title_padding: 12,
  // icon padding
  color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_light_background: rgba(vars.color_light_background),
  color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light),
  color_dark_background: rgba(vars.color_dark_background)
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
