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
      },

      " .pe-button__label": {
        padding: componentVars.padding_v + "px 0",
        fontSize: componentVars.font_size + "px",
        lineHeight: componentVars.font_size + "px",
        fontWeight: componentVars.font_weight,
        textTransform: componentVars.text_transform,
        whiteSpace: "pre",
        userSelect: "none",
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
      }
    }
  ]
}];
