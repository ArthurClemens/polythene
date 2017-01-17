import { mixin, flex } from "polythene-css";
import { vars } from "polythene-theme";

export default (selector, componentVars) => [{
  [selector]: [
    flex.layout,
    flex.layoutHorizontal,
    flex.layoutCenter,
    {
      height: componentVars.height + "px",
      fontSize: componentVars.font_size + "px",
      lineHeight: componentVars.line_height + "em",
      padding: "0 " + componentVars.padding_side + "px",

      "&.pe-toolbar--compact": {
        height: componentVars.height_compact + "px"
      },

      "> *:not(.disabled)": {
        // make elements (e.g. buttons) respond to mouse/touch events
        pointerEvents: "auto"
      },
      " > span, .pe-toolbar__title, .pe-toolbar__title--indent": [
        flex.layout,
        flex.flex(1),
        mixin.ellipsis(1, vars.line_height, "em"),
        mixin.vendorize({
          "transform-origin": "left 50%"
        }, vars.prefixes_transform),
        {
          lineHeight: vars.line_height + "em",
          wordBreak: "break-all"
        }
      ],
      " > span, .pe-toolbar__title": {
        marginLeft: componentVars.title_padding + "px"
      },
      " .pe-toolbar__title--indent": {
        marginLeft: (componentVars.indent - componentVars.padding_side) + "px"
      },
      " .pe-fit": [
        mixin.fit(), {
          margin: 0
        }
      ]
    }
  ]
}];
