import { mixin, flex } from "polythene-core-css";
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

      ".pe-toolbar--compact": {
        height: componentVars.height_compact + "px"
      },

      " > span, .pe-toolbar__title, .pe-toolbar__title--indent": [
        flex.layout,
        flex.flex(1),
        mixin.ellipsis(1, vars.line_height, "em"),
        {
          transformOrigin: "left 50%",
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
      " .pe-toolbar__title--center": {
        textAlign: "center",
        justifyContent: "center",
        marginLeft: componentVars.title_padding + "px",
        marginRight: componentVars.title_padding + "px"
      },
      " .pe-fit": [
        mixin.fit(), {
          margin: 0
        }
      ]
    }
  ]
}];
