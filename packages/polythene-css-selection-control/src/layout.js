// Returns a style function to be used by checkbox and radio-button

import { mixin, flex } from "polythene-core-css";
import { vars } from "polythene-theme";

const alignSide = isRTL => componentVars => ({
  " .pe-button.pe-control__button": {
    [isRTL ? "right" : "left"]: -((componentVars.button_size - componentVars.icon_size) / 2) + "px",
    [isRTL ? "left" : "right"]: "auto",
  },
  " .pe-control__label": {
    [isRTL ? "paddingLeft" : "paddingRight"]: componentVars.label_padding_after + "px",
    [isRTL ? "paddingRight" : "paddingLeft"]: componentVars.label_padding_before + "px",
  }
});

const alignLeft = alignSide(false);

const alignRight = alignSide(true);

const makeSize = (componentVars, height, iconSize = vars.unit_icon_size) => {
  const labelSize = iconSize + componentVars.label_height;
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

export default (selector, componentVars, type) => [
  {
    [selector]: [
      alignLeft(componentVars),
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
            fontSize: componentVars.label_font_size + "px",
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
          width: componentVars.label_height + "px",
          height: componentVars.label_height + "px",
          color: "inherit",
          flexShrink: 0,

          ":focus": {
            outline: 0,
          }
        },

        " .pe-button.pe-control__button": [
          mixin.defaultTransition("opacity", componentVars.animation_duration),
          {
            position: "absolute",
            top: -((componentVars.button_size - componentVars.icon_size) / 2) + "px",
            zIndex: 1
          }
        ],

        ".pe-control--off": {
          " .pe-control__button--on": inactiveButton(),
          " .pe-control__button--off": activeButton()
        },

        ".pe-control--on": {
          " .pe-control__button--on": activeButton(),
          " .pe-control__button--off": inactiveButton()
        },

        " .pe-control__label": [
          mixin.defaultTransition("all", componentVars.animation_duration),
          {
            // padding: RTL
            alignSelf: "center"
          }
        ],

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

        ".pe-control--small":   makeSize(componentVars, vars.unit_icon_size_small, vars.unit_icon_size_small),
        ".pe-control--regular": makeSize(componentVars, componentVars.label_height, vars.unit_icon_size),
        ".pe-control--medium":  makeSize(componentVars, vars.unit_icon_size_medium, vars.unit_icon_size_medium),
        ".pe-control--large":   makeSize(componentVars, vars.unit_icon_size_large, vars.unit_icon_size_large),
      },
    ]
  },
  {
    // RTL
    [`*[dir=rtl] ${selector}, .pe-rtl ${selector}`]: [
      alignRight(componentVars)
    ],
  }
];
