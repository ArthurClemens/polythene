
export default ({ renderer: h, Menu, List, ListTile }) => {
  const tile = (left, right, disabled) =>
    h(ListTile, {
      key: left, // for React
      title: left,
      secondary: { content: right },
      hoverable: true,
      disabled
    });
  return {
    view: () =>
      h(Menu, {
        size: 5,
        permanent: true,
        content: [
          h(List, {
            key: "one", // for React
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
          h(List, {
            key: "two", // for React
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
};
