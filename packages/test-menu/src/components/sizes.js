

const createSizedMenu = ({ size, h, Menu, List, ListTile }) => {
  const sizeTexts = {
    "1": ["en", "nl", "de"],
    "1.5": ["Yes", "No", "Maybe"],
    "2": ["Copy", "Paste", "Undo"],
    "3": ["Home", "Back", "Recently viewed"],
    "4": ["Paragraph styles", "Line spacing", "Numbered list"],
    "5": ["Add space before paragraph", "Add space after paragraph", "Custom spacing"],
    "6": ["The Mind Is Its Own Beautiful Prisoner", "If I Should Sleep With A Lady Called Death", "It May Not Always Be So; And I Say"],
    "7": ["Any bar, any cross, any impediment will be", "medicinable to me: I am sick in displeasure to him", "and whatsoever comes athwart his affection ranges", "evenly with mine. How canst thou cross this marriage?"],
    "auto": ["Paragraph styles", "Line spacing", "Numbered list"]
  };
  const sizeStr = size.toString();
  return h(Menu, {
    size: size,
    permanent: true,
    content: h(List, {
      compact: true,
      header: { title: size },
      tiles: sizeTexts[sizeStr].map((label) =>
        h(ListTile, {
          title: label,
          key: label
        })
      )
    }),
    style: { margin: "0 0 1rem 0" }
  });
};

export default ({ renderer: h, Menu, List, ListTile }) => ({
  view: () =>
    h("div", { style: { overflow: "hidden", padding: "10px" }}, [1.5, 2, 3, 4, 5, 6, 7, "auto"].map(size => createSizedMenu({ size, Menu, List, ListTile, h})))
});

