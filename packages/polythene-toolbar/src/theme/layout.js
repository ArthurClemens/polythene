import { mixin, flex } from "polythene-css";
import { vars } from "polythene-theme";

export default (selector, componentVars) => [{
  [selector]: [
    flex.layout,
    flex.layoutHorizontal,
    flex.layoutCenter,
    flex.layoutJustified,
    {
      height: componentVars.height + "px",
      fontSize: componentVars.font_size + "px",
      lineHeight: componentVars.line_height + "em",

      "&.pe-toolbar--compact": {
        height: componentVars.height_compact + "px"
      },

      "> *:not(.disabled)": {
        // make elements (e.g. buttons) respond to mouse/touch events
        pointerEvents: "auto"
      },
      "> :first-child": {
        marginLeft: componentVars.padding_side + "px"
      },
      "> :last-child": {
        marginRight: componentVars.padding_side + "px"
      },
      " .pe-button--icon + span, .pe-button--icon + .pe-toolbar__title": {
        marginLeft: componentVars.indent - componentVars.padding_side - vars.grid_unit_icon_button + "px"
      },
      " .pe-toolbar__title": [
        flex.flex(1),
        mixin.ellipsis(1, vars.line_height, "em"),
        mixin.vendorize({
          "transform-origin": "left 50%"
        }, vars.prefixes_transform),
        {
          lineHeight: vars.line_height + "em",
          wordBreak: "break-all",
          " &:first-child": {
            paddingLeft: componentVars.title_padding + "px"
          }
        }
      ],
      "> span:first-child, .pe-toolbar__title--indent": [
        mixin.ellipsis(1, vars.line_height, "em"),
        {
          marginLeft: componentVars.indent + "px"
        }
      ],
      " .pe-fit": [
        mixin.fit(), {
          margin: 0
        }
      ]
    }
  ]
}];
