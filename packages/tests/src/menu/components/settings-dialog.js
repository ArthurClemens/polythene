
export default ({ h, a, Dialog, List, ListTile }) => {

  const tile = (title, selected, disabled) =>
    h(ListTile, {
      title,
      key: title, // for React
      selected,
      disabled,
      ink: true,
      hoverable: true,
      events: {
        [a.onclick]: () => {
          if (!disabled) {
            Dialog.hide();
          }
        }
      }
    });

  return {
    menu: h(List, {
      tiles: [
        tile("Any bar, any cross, any impediment will be medicinable to me: I am sick in displeasure to him", true, false),
        tile("and whatsoever comes athwart his affection ranges", false, false),
        tile("evenly with mine. How canst thou cross this marriage?", false, true)
      ]
    }),
    hideDelay: .240
  };
};
