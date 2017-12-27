
import { flex } from "polythene-core-css";

export default (selector, componentVars) => [{
  [selector]: [
    flex.layoutCenter,
    {      
      pointerEvents: "all",
      justifyContent: "center",
      margin: "0 auto",

      " .pe-notification__content": {
        width: componentVars.width + "px",
        padding: "0 " + componentVars.side_padding + "px",
        borderRadius: componentVars.border_radius + "px",
      },

      " .pe-notification__title": {
        flex: "1 0 auto",
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
        " .pe-notification__content": [
          flex.layoutVertical
        ],

        " .pe-notification__title": {
          paddingBottom: "6px"
        },
        " .pe-notification__title--multi-line": {
          paddingTop: componentVars.title_multi_padding_v + "px",
        },
        " .pe-notification__action": [
          flex.layoutEndJustified,
          {
            width: "100%"
          }
        ]
      }
    },
  ]
}];

