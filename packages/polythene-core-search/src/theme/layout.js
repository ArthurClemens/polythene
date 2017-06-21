import { flex } from "polythene-core-css";
import { vars } from "polythene-theme";

export default (selector, componentVars) => {
  const inset_input_padding_v = ((componentVars.inset_height - componentVars.line_height_input) / 2);
  const full_width_input_padding_v = ((componentVars.full_width_height - componentVars.line_height_input) / 2);
  const full_width_input_indent = (vars.unit_indent - componentVars.full_width_side_padding) - vars.grid_unit_icon_button;

  return [{
    [selector]: [
      flex.flex(), {
        position: "relative", // necessary when a shadow is added

        " .pe-textfield": [
          flex.flex(),
          {
            padding: 0,
            // prevent that neighboring icon button with ripple hides the cursor
            position: "relative",
            zIndex: 1,
 
            " .pe-textfield__input-area": {
              padding: 0,

              ":after": {
                display: "none"
              }
            },

            " .pe-textfield__input, .pe-textfield__label": {
              fontSize: componentVars.font_size_input + "px",
              lineHeight: componentVars.line_height_input + "px"
            },

            " .pe-textfield__input": {
              // reset
              border: "none"
            },

            " .pe-textfield__label": {
              // reset
              top: 0,
              bottom: 0
            }
          }
        ],

        " .pe-search__content": {
          "&, .pe-textfield": flex.layoutHorizontal,
          "&, .pe-textfield__input-area": {
            flexGrow: 1
          }
        },

        " .pe-search__content > *": [
          flex.layoutVertical,
          flex.selfCenter
        ],

        ".pe-search--inset": {
          "border-radius": componentVars.inset_border_radius + "px",
          padding: "0 " + componentVars.inset_side_padding + "px",

          "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
            padding: 0,
            height: componentVars.inset_height + "px"
          },
          " .pe-textfield__input, .pe-textfield__label": {
            paddingTop: inset_input_padding_v + "px",
            paddingBottom: inset_input_padding_v + "px",
            paddingLeft: componentVars.inset_input_indent + "px",
            paddingRight: componentVars.inset_input_right_padding + "px"
          }
        },

        ".pe-search--full-width": {
          borderRadius: componentVars.full_width_border_radius + "px",
          padding: "0 " + componentVars.full_width_side_padding + "px",

          "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
            height: componentVars.full_width_height + "px"
          },
          " .pe-textfield__input, .pe-textfield__label": {
            paddingTop: full_width_input_padding_v + "px",
            paddingBottom: full_width_input_padding_v + "px",
            paddingLeft: full_width_input_indent + "px",
            paddingRight: componentVars.full_width_input_right_padding + "px"
          }
        }
      }
    ]
  }];
};
