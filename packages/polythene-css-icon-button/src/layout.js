import { mixin } from "polythene-core-css";

const alignSide = isRTL => componentVars => ({
  " .pe-icon-button__label": {
    [isRTL ? "paddingLeft" : "paddingRight"]: componentVars.label_padding_after + "px",
    [isRTL ? "paddingRight" : "paddingLeft"]: componentVars.label_padding_before + "px",
  }
});

const alignLeft = alignSide(false);

const alignRight = alignSide(true);

export default (selector, componentVars) => [
  {
    [selector]: [
      alignLeft(componentVars),
      {
        // don't set button size to facilitate different icon sizes
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        border: "none",

        " .pe-button__content": {
          display: "flex",
          alignItems: "center",
          fontSize: "1rem",
          borderRadius: "50%",
          position: "relative",
        },

        " .pe-icon-button__content": {
          lineHeight: 1,
          padding: componentVars.padding + "px",
          borderRadius: "50%",
          pointerEvents: "none"
        },

        " .pe-button__content, .pe-button__wash": [
          mixin.defaultTransition("all", componentVars.animation_duration)
        ],

        ".pe-icon-button--compact": {
          " .pe-icon-button__content": {
            padding: componentVars.padding_compact + "px"
          }
        },

        " .pe-icon-button__label": {
          fontSize: componentVars.label_font_size + "px",
          lineHeight: componentVars.label_font_size + "px",
          fontWeight: componentVars.label_font_weight,
          textTransform: componentVars.label_text_transform,
        }
      }
    ]
  },
  {
    // RTL
    [`*[dir=rtl] ${selector}, .pe-rtl ${selector}`]: [
      alignRight(componentVars)
    ],
  }
];
