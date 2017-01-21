// Returns a style function to be used by checkbox and radio-button

import { mixin, flex } from "polythene-css";
import { vars } from "polythene-theme";

const getSize = (componentVars, height, iconSize = vars.unit_icon_size) => {
  const labelSize = iconSize + 2 * componentVars.label_padding;
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

export default (selector, componentVars, type) => [{
  [selector]: {
    display: "inline-block",
    boxSizing: "border-box",
    margin: 0,
    padding: 0,

    " .pe-control__form-label": [
      flex.layoutHorizontal,
      flex.layoutCenter, {
        position: "relative",
        cursor: "pointer",
        fontSize: componentVars.label_font_size + "px",
        lineHeight: componentVars.label_height + "px",
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

    [" input[type=" + type + "].pe-control__input"]: [
      mixin.vendorize({
        appearance: "none"
      }, vars.prefixes_appearance), {
        lineHeight: componentVars.label_height + "px",
        // Hide input element
        position: "absolute",
        zIndex: "-1",
        width: 0,
        height: 0,
        margin: 0,
        padding: 0,
        opacity: 0,
        border: "none",
        pointerEvents: "none"
      }
    ],

    " .pe-control__box": {
      position: "relative",
      display: "inline-block",
      boxSizing: "border-box",
      width: componentVars.label_height + "px",
      height: componentVars.label_height + "px",
      color: "inherit",

      ":focus": {
        outline: 0,
      }
    },

    " .pe-button.pe-control__button": [
      mixin.defaultTransition("opacity", componentVars.animation_duration), {
        position: "absolute",
        left: -((componentVars.button_size - componentVars.icon_size) / 2) + "px",
        top: -((componentVars.button_size - componentVars.icon_size) / 2) + "px",
        zIndex: 1
          // opacity: 0,
          // "pointer-events": "auto"
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

    " .pe-control__label": {
      marginBottom: "-1px", // make text vertically center to box
      paddingLeft: componentVars.padding + "px",
      paddingRight: componentVars.padding + "px"
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

    ".pe-control--small": getSize(componentVars, vars.unit_icon_size_small, vars.unit_icon_size_small),
    ".pe-control--regular": getSize(componentVars, componentVars.label_height, vars.unit_icon_size),
    ".pe-control--medium": getSize(componentVars, vars.unit_icon_size_medium, vars.unit_icon_size_medium),
    ".pe-control--large": getSize(componentVars, vars.unit_icon_size_large, vars.unit_icon_size_large)
  }
}];
