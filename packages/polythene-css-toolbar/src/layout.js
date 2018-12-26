import { mixin, flex, sel, selectorRTL, createLayout } from "polythene-core-css";
import { vars as themeVars } from "polythene-theme";

const breakpoint = breakpointSel => (selector, o) => ({
  [breakpointSel]: {
    [selector]: o
  }
});

const indent_padding_side = ({ selector, vars, isRTL, isLarge }) => {
  const indent = isLarge ? vars.indent_large : vars.indent;
  const fn = isLarge ? breakpointTabletPortraitUp : sel;
  return fn(selector, {
    " .pe-toolbar__title--indent, .pe-toolbar__title.pe-toolbar__title--indent": {
      [isRTL ? "marginLeft" : "marginRight"]: 0,
      [isRTL ? "marginRight" : "marginLeft"]: indent + "px"
    },
  });
};

const title_padding = ({ selector, vars, isRTL, isLarge }) => {
  const title_padding = isLarge ? vars.title_padding_large : vars.title_padding;
  const fn = isLarge ? breakpointTabletPortraitUp : sel;
  return fn(selector, {
    " > span, .pe-toolbar__title": {
      [isRTL ? "marginLeft" : "marginRight"]: 0,
      [isRTL ? "marginRight" : "marginLeft"]: title_padding + "px" 
    },
    " .pe-toolbar__title--center": {
      marginLeft: title_padding + "px",
      marginRight: title_padding + "px"
    },
  });
};

const title_padding_title_after_icon_padding = ({ selector, vars, isRTL, isLarge }) => {
  const padding = isLarge ? vars.title_after_icon_padding_large : vars.title_after_icon_padding;
  const fn = isLarge ? breakpointTabletPortraitUp : sel;
  return fn(selector, {
    " > :not(.pe-toolbar__title):first-child:not(.pe-toolbar__title--indent):first-child": {
      [isRTL ? "marginRight" : "marginLeft"]: 0,
      [isRTL ? "marginLeft" : "marginRight"]: padding + "px"
    },
  });
};

const breakpointPhoneOnly = breakpoint(`@media (min-width: ${themeVars.breakpoint_for_phone_only}px) and (orientation: landscape)`);

const breakpointTabletPortraitUp = breakpoint(`@media (min-width: ${themeVars.breakpoint_for_tablet_portrait_up}px)`);

const varFns = {
  general_styles: selector => [
    sel(selector, [
      flex.layout,
      flex.layoutHorizontal,
      flex.layoutCenter,
      {
        position: "relative", 
        zIndex: themeVars.z_toolbar,

        " > a": {
          textDecoration: "none",
        },

        ".pe-toolbar--fullbleed": {
          padding: 0
        },

        ".pe-toolbar--border": {
          borderWidth: "1px",
          borderStyle: "none none solid none",
        },

        " > *": {
          flexShrink: 0
        },

        " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
          width: "100%",
          display: "block",
          wordBreak: "break-all",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          flexShrink: 1
        },

        " .pe-toolbar__title--center": {
          textAlign: "center",
          justifyContent: "center",
        },

        " > .pe-action": {
          paddingLeft: "12px",
          paddingRight: "12px",
        },

        " .pe-fit": [
          mixin.fit(),
          {
            margin: 0
          }
        ]
      }
    ])
  ],
  height: (selector, vars) => [
    sel(selector, {
      height: vars.height + "px",
    }),
  ],
  height_compact: (selector, vars) => [
    sel(selector, {
      ".pe-toolbar--compact": {
        height: vars.height_compact + "px"
      }
    }),
    breakpointPhoneOnly(selector, {
      height: vars.height + "px",
    })
  ],
  line_height: (selector, vars) => [
    sel(selector, {
      lineHeight: vars.line_height + "em",

      " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
        lineHeight: vars.line_height,
      },
    }),
  ],
  font_size: (selector, vars) => [
    sel(selector, {
      " > span, .pe-toolbar__title, .pe-toolbar__title--indent, .pe-action": {
        fontSize: vars.font_size + "px",
      }
    }),
  ],
  font_weight: (selector, vars) => [
    sel(selector, {
      " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
        fontWeight: vars.font_weight,
      }
    }),
  ],
  padding_side: (selector, vars) => [
    sel(selector, {
      padding: "0 " + vars.padding_side + "px",
    }),
    indent_padding_side({ selector, vars }),
    indent_padding_side({ selector: selectorRTL(selector), vars, isRTL: true }),
  ],
  indent: (selector, vars) => [
    indent_padding_side({ selector, vars }),
    indent_padding_side({ selector: selectorRTL(selector), vars, isRTL: true }),
  ],
  indent_large: (selector, vars) => [
    indent_padding_side({ selector, vars, isLarge: true }),
    indent_padding_side({ selector: selectorRTL(selector), vars, isRTL: true, isLarge: true }),
  ],
  title_padding: (selector, vars) => [
    title_padding({ selector, vars }),
    title_padding({ selector: selectorRTL(selector), vars, isRTL: true }),
  ],
  title_padding_large: (selector, vars) => [
    title_padding({ selector, vars, isLarge: true }),
    title_padding({ selector: selectorRTL(selector), vars, isRTL: true, isLarge: true }),
  ],
  title_after_icon_padding: (selector, vars) => [
    title_padding_title_after_icon_padding({ selector, vars }),
    title_padding_title_after_icon_padding({ selector: selectorRTL(selector), vars, isRTL: true }),
  ],
  title_after_icon_padding_large: (selector, vars) => [
    title_padding_title_after_icon_padding({ selector, vars, isLarge: true }),
    title_padding_title_after_icon_padding({ selector: selectorRTL(selector), vars, isRTL: true, isLarge: true }),
  ],
  height_large: (selector, vars) => [
    breakpointTabletPortraitUp(selector, {
      height: vars.height_large + "px",
    }),
  ],
  padding_side_large: (selector, vars) => [
    breakpointTabletPortraitUp(selector, {
      padding: "0 " + vars.padding_side_large + "px",
    }),
  ],
};

export default createLayout({ varFns });
