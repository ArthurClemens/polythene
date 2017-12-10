
import { flex } from "polythene-core-css";

export default (selector, componentVars) => [{
  [selector]: [
    flex.layoutCenter,
    {
      width: componentVars.width + "px",
      minHeight: componentVars.min_height + "px",
      position: "relative",
      padding: "0 " + componentVars.side_padding + "px",
      margin: "0 auto",
      borderRadius: componentVars.border_radius + "px",
      pointerEvents: "all",
      alignContent: "center",

      " .pe-notification__content": {
        width: "100%",
      },

      " .pe-notification__title": {
        padding: componentVars.title_single_padding_v + "px " + componentVars.title_padding_h + "px",
        fontSize: componentVars.font_size + "px",
        lineHeight: componentVars.line_height + "px",
      },

      " .pe-notification__action": {
        " .pe-button": {
          margin: 0
        }
      },

      "&.pe-notification--horizontal": {
        " .pe-notification__content": flex.layoutHorizontal,
        " .pe-notification__title": [
          flex.flex(),
          {
            alignSelf: "center",
          }
        ],
        " .pe-notification__title--multi-line": {
          paddingTop: componentVars.title_multi_padding_v + "px",
          paddingBottom: componentVars.title_multi_padding_v + "px"
        },
        " .pe-notification__action": flex.layoutCenter
      },
      "&.pe-notification--vertical": {
        " .pe-notification__content": flex.layoutVertical,
        " .pe-notification__title": {
          paddingBottom: "4px"
        },
        " .pe-notification__title--multi-line": {
          paddingTop: componentVars.title_multi_padding_v + "px"
        },
        " .pe-notification__action": flex.layoutEndJustified
      }
    }
  ]
}];

