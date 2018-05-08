import { mixin } from "polythene-core-css";

export default (selector, componentVars) => [{
  [selector]: [
    {
      display: "inline-block",
      minWidth: componentVars.min_width + "px",
      padding: componentVars.outer_padding_v + "px 0",
      background: "transparent",
      border: "none",

      " .pe-button__content, .pe-button__wash, .pe-button__focus": [
        mixin.defaultTransition("all", componentVars.animation_duration)
      ],

      " .pe-button__content": {
        position: "relative",
        borderWidth: 0,
        padding: "0 " + componentVars.padding_h + "px",
        borderRadius: componentVars.border_radius + "px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },

      " .pe-button__label, .pe-button__dropdown": {
        minHeight: `calc(1em + 2 * ${componentVars.padding_v}px)`,
        fontSize: componentVars.font_size + "px",
        lineHeight: componentVars.font_size + "px",
        whiteSpace: "pre",
        userSelect: "none",
      },

      " .pe-button__label": {
        fontWeight: componentVars.font_weight,
        textTransform: componentVars.text_transform,
        padding: componentVars.padding_v + "px 0",
      },

      ".pe-button--border": {
        " .pe-button__wash, .pe-button__focus, .pe-ripple": mixin.fit(-1),

        " .pe-button__content": {
          borderStyle: "solid",
          borderWidth: "1px"
        },
        " .pe-button__label": {
          padding: (componentVars.padding_v - 1) + "px 0"
        }
      },

      ".pe-button--dropdown": {
        minWidth: "0", // IE 11 does not recognize "initial" here

        " .pe-button__dropdown": {
          width: componentVars.dropdown_icon_size + "px",
          minWidth: `calc(36px - 2 * ${componentVars.padding_h}px)`,
          position: "relative",
        },

        " .pe-svg": {
          position: "absolute",
          width: componentVars.dropdown_icon_size + "px",
          height: componentVars.dropdown_icon_size + "px",
          left: 0,
          top: "50%",
          marginTop: -componentVars.dropdown_icon_size / 2 + "px",
        },

        " .pe-button__label + .pe-button__dropdown": {
          marginLeft: "7px",
          marginRight: `calc(7px - ${componentVars.padding_h}px)`,
          minWidth: 0,
        },
      }
    }
  ],
  ".pe-split-button": {
    display: "flex",

    [` ${selector}`]: {
      ":not(:first-child)": {
        "&, .pe-button__wash, .pe-button__focus": {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }
      },
      ":not(:last-child)": {
        "&, .pe-button__wash, .pe-button__focus": {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }
      },
      ":last-child": {
        " .pe-button__content": {
          borderStyle: "none none none solid",
          borderWidth: "1px"
        }
      }
    }
  }
}];
