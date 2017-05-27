import stream from "mithril/stream";

const menuOptions = [
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content"
];

export default ({ renderer: h, keys: k, Menu, List, ListTile }) => ({
  oninit: vnode => {
    const show = stream(false);
    const selectedIndex = stream(0);
    vnode.state = {
      show,
      selectedIndex,
      redrawOnUpdate: stream.merge([show, selectedIndex]),
      id: "id-" + Math.floor(Math.random() * 1000)
    };
  },
  view: vnode => {
    const state = vnode.state;
    const id = state.id;
    const show = state.show();
    const selectedIndex = state.selectedIndex();
    return h("div",
      {
        style: { position: "relative" }
      },
      [
        h(Menu, {
          target: `#${id}`,
          show,
          hideDelay: .240,
          getState: newState => state.show(newState.visible),
          size: 5,
          content: h(List, {
            hoverable: true,
            tiles: menuOptions.map((setting, index) =>
              h(ListTile, {
                title: setting,
                selected: index === selectedIndex,
                ink: true,
                hoverable: true,
                events: {
                  [k.onclick]: () => state.selectedIndex(index)
                }
              })
            )
          })
        }),
        h(List, {
          style: {
            backgroundColor: "#fff",
            maxWidth: "320px"
          },
          tiles: [
            h(ListTile, {
              id,
              title: "When device is locked",
              subtitle: menuOptions[selectedIndex],
              events: {
                [k.onclick]: () => state.show(true)
              },
              hoverable: true,
              selected: show,
            }),
            h(ListTile, {
              title: "Item 2",
              disabled: true,
              hoverable: true,
            }),
            h(ListTile, {
              title: "Item 3",
              disabled: true,
              hoverable: true,
            })
          ]
        })
      ]
    );
  }
});
