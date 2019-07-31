export default ({ h, a, List, ListTile, Dialog })  => {

  const createListTile = title => {
    return h(ListTile, {
      title,
      events: {
        [a.onclick]: () => Dialog.hide()
      },
      hoverable: true,
      ink: true
    });
  };

  return {
    id: "menu",
    menu: h(List, {
      tiles: [
        createListTile("Show all notification content including sensitive notification content"),
        createListTile("Hide sensitive notification content"),
        createListTile("Hide all notification content")
      ]
    }),
    hideDelay: .15
  };
};
