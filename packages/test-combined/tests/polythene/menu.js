import m from "mithril";
import * as polythene from "polythene";

const tile = (left, right, disabled) =>
  m(polythene.listTile, {
    title: left,
    secondary: { content: right },
    disabled
  });

export default {
  view: () => 
    m(polythene.menu, {
      size: 5,
      permanent: true,
      content: [
        m(polythene.list, {
          compact: true,
          hoverable: true,
          tiles: [
            tile("Bold", "\u2318B"),
            tile("Italic", "\u2318I"),
            tile("Underline", "\u2318U"),
            tile("Strikethrough", "Alt+Shift+5"),
            tile("Superscript", "\u2318."),
            tile("Subscript", "\u2318,"),
          ]
        }),
        m(polythene.list, {
          compact: true,
          hoverable: true,
          tiles: [
            tile("Clear formatting", "\u2318/", true),
            tile("Custom spacing", "")
          ]
        })
      ]
    })
};
