import { mixin, flex } from "polythene-core-css";
import { vars as themeVars } from "polythene-theme";

const sel = (selector, o) => ({
  [selector]: o
});

const breakpoint = breakpointSel => (selector, o) => ({
  [breakpointSel]: {
    [selector]: o
  }
});

const indent_padding_side = (selector, vars, isRTL) =>
  sel(selector, {
    " .pe-toolbar__title--indent, .pe-toolbar__title.pe-toolbar__title--indent": {
      [isRTL ? "marginLeft" : "marginRight"]: 0,
      [isRTL ? "marginRight" : "marginLeft"]: (vars.indent - vars.padding_side) + "px"
    },
  });

const title_padding_title_after_icon_padding = (selector, vars, isRTL) =>
  sel(selector, {
    " > span, .pe-toolbar__title": {
      [isRTL ? "marginLeft" : "marginRight"]: 0,
      [isRTL ? "marginRight" : "marginLeft"]: vars.title_padding + "px" 
    },
    " > * + span, * + .pe-toolbar__title, * + .pe-toolbar__title--indent, * + .pe-toolbar__title.pe-toolbar__title--indent": {
      [isRTL ? "marginLeft" : "marginRight"]: 0,
      [isRTL ? "marginRight" : "marginLeft"]: vars.title_after_icon_padding + "px"
    },
    " .pe-toolbar__title--center": {
      marginLeft: vars.title_padding + "px",
      marginRight: vars.title_padding + "px"
    },
  });

const selectorRTL = selector => 
  `*[dir=rtl] ${selector}, .pe-rtl ${selector}`;

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

        ".pe-toolbar--fullbleed": {
          padding: 0
        },

        ".pe-toolbar--border": {
          borderWidth: "1px",
          borderStyle: "none none solid none",
        },

        " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
          width: "100%",
          display: "block",
          wordBreak: "break-all",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
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
      " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
        fontSize: vars.font_size + "px",
      }
    }),
  ],
  padding_side: (selector, vars) => [
    sel(selector, {
      padding: "0 " + vars.padding_side + "px",
    }),
    indent_padding_side(selector, vars, false),
    indent_padding_side(selectorRTL(selector), vars, true),
  ],
  indent: (selector, vars) => [
    indent_padding_side(selector, vars, false),
    indent_padding_side(selectorRTL(selector), vars, true),
  ],
  title_padding: (selector, vars) => [
    title_padding_title_after_icon_padding(selector, vars, false),
    title_padding_title_after_icon_padding(selectorRTL(selector), vars, true),
  ],
  title_after_icon_padding: (selector, vars) => [
    title_padding_title_after_icon_padding(selector, vars, false),
    title_padding_title_after_icon_padding(selectorRTL(selector), vars, true),
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

export default (selector, componentVars, customVars) => {
  const allVars = {...componentVars, ...customVars};
  const currentVars = customVars
    ? customVars
    : allVars;
  return Object.keys(currentVars).map(v => (
    varFns[v] !== undefined 
      ? varFns[v](selector, allVars)
      : null
  )).filter(s => s);
};
