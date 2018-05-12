// Returns a style function to be used by Checkbox and Radio Button

import { mixin, flex } from "polythene-core-css";
import { vars as defaultVars } from "polythene-theme";

const alignSide = isRTL => vars => ({}); // eslint-disable-line no-unused-vars
const alignLeft = alignSide(false);
const alignRight = alignSide(true);

const makeSize = (vars, height, iconSize = defaultVars.unit_icon_size) => {
  const labelSize = iconSize + vars.label_height;
  const iconOffset = (labelSize - iconSize) / 2;
  return {
    " .pe-control__form-label": {
      height: height + "px"
    },
    " .pe-control__box": {
      width: iconSize + "px",
      height: iconSize + "px"
    },
    " .pe-button__content": {
      width: labelSize + "px",
      height: labelSize + "px",

      " .pe-icon": [
        mixin.fit(iconOffset)
      ]
    }
  };
};

const activeButton = () => ({
  opacity: 1,
  zIndex: 1
});

const inactiveButton = () => ({
  opacity: 0,
  zIndex: 0
});

const sel = (selector, o) => ({
  [selector]: o
});

const button_size_icon_size = (selector, vars, isRTL) =>
  sel(selector, {
    " .pe-button.pe-control__button": {
      top: -((vars.button_size - vars.icon_size) / 2) + "px",
      [isRTL ? "right" : "left"]: -((vars.button_size - vars.icon_size) / 2) + "px",
      [isRTL ? "left" : "right"]: "auto",
    },
  });

const label_padding_before = (selector, vars, isRTL) =>
  sel(selector, {
    " .pe-control__label": {
      [isRTL ? "paddingRight" : "paddingLeft"]: vars.label_padding_before + "px",
    }
  });

const label_padding_after = (selector, vars, isRTL) =>
  sel(selector, {
    " .pe-control__label": {
      [isRTL ? "paddingLeft" : "paddingRight"]: vars.label_padding_after + "px",
    }
  });

const selectorRTL = selector => 
  `*[dir=rtl] ${selector}, .pe-rtl ${selector}`;

const varFns = {
  general_styles: (selector, vars, type) => [
    sel(selector, [
      alignLeft(vars),
      {
        display: "inline-block",
        boxSizing: "border-box",
        margin: 0,
        padding: 0,

        [` input[type=${type}]`]: {
          display: "none"
        },

        " .pe-control__form-label": [
          flex.layoutHorizontal,
          flex.layoutCenter,
          {
            position: "relative",
            cursor: "pointer",
            margin: 0,
            color: "inherit",

            ":focus": {
              outline: 0
            },
          }
        ],

        ".pe-control--inactive": {
          " .pe-control__form-label": {
            cursor: "default"
          }
        },

        " .pe-control__box": {
          position: "relative",
          display: "inline-block",
          boxSizing: "border-box",
          color: "inherit",
          flexShrink: 0,

          ":focus": {
            outline: 0,
          }
        },

        " .pe-button.pe-control__button": {
          position: "absolute",
          zIndex: 1
        },

        ".pe-control--off": {
          " .pe-control__button--on": inactiveButton(),
          " .pe-control__button--off": activeButton()
        },

        ".pe-control--on": {
          " .pe-control__button--on": activeButton(),
          " .pe-control__button--off": inactiveButton()
        },

        " .pe-control__label": {
          // padding: RTL
          alignSelf: "center"
        },

        ".pe-control--disabled": {
          " .pe-control__form-label": {
            cursor: "auto"
          },
          " .pe-control__button": {
            pointerEvents: "none"
          }
        },

        " .pe-button__content": {
          " .pe-icon": {
            position: "absolute"
          }
        },
      },
      {
        // RTL
        [`*[dir=rtl] ${selector}, .pe-rtl ${selector}`]: [
          alignRight(vars)
        ],
      }
    ])
  ],
  label_font_size: (selector, vars) => [
    sel(selector, {
      " .pe-control__form-label": {
        fontSize: vars.label_font_size + "px",
      }
    })
  ],
  label_height: (selector, vars) => [
    sel(selector, {
      " .pe-control__box": {
        width: vars.label_height + "px",
        height: vars.label_height + "px",
      },
      ".pe-control--small": makeSize(vars, defaultVars.unit_icon_size_small, defaultVars.unit_icon_size_small),
      ".pe-control--regular": makeSize(vars, vars.label_height, defaultVars.unit_icon_size),
      ".pe-control--medium": makeSize(vars, defaultVars.unit_icon_size_medium, defaultVars.unit_icon_size_medium),
      ".pe-control--large": makeSize(vars, defaultVars.unit_icon_size_large, defaultVars.unit_icon_size_large),
    })
  ],
  animation_duration: (selector, vars) => [
    sel(selector, {
      " .pe-button.pe-control__button": [
        mixin.defaultTransition("opacity", vars.animation_duration)
      ],
      " .pe-control__label": [
        mixin.defaultTransition("all", vars.animation_duration),
      ],
    })
  ],
  button_size: (selector, vars) => [
    sel(selector, {
    }),
    button_size_icon_size(selector, vars, false),
    button_size_icon_size(selectorRTL(selector), vars, true),
  ],
  icon_size: (selector, vars) => [
    sel(selector, {
    }),
    button_size_icon_size(selector, vars, false),
    button_size_icon_size(selectorRTL(selector), vars, true),
  ],
  label_padding_after: (selector, vars) => [
    sel(selector, {
    }),
    label_padding_after(selector, vars, false),
    label_padding_after(selectorRTL(selector), vars, true),
  ],
  label_padding_before: (selector, vars) => [
    sel(selector, {
    }),
    label_padding_before(selector, vars, false),
    label_padding_before(selectorRTL(selector), vars, false),
  ],
};

export default (selector, componentVars, customVars, type) => {
  const allVars = {...componentVars, ...customVars};
  const currentVars = customVars
    ? customVars
    : allVars;
  return Object.keys(currentVars).map(v => (
    varFns[v] !== undefined 
      ? varFns[v](selector, allVars, type)
      : null
  )).filter(s => s);
};
