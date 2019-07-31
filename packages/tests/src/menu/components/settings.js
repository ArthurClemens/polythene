import stream from "mithril/stream";

const menuOptions = [
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content"
];

export default ({ h, a, Menu, List, ListTile }) => ({
  oninit: vnode => {
    const show = stream(false);
    const selectedIndex = stream(0);
    Object.assign(vnode.state, {
      show,
      selectedIndex,
      redrawOnUpdate: stream.merge([show]), // for React
      id: "id-" + Math.floor(Math.random() * 1000)
    });
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
          didHide: () => state.show(false),
          hideDelay: .240,
          width: 5,
          offsetH: 16,
          offsetV: 0,
          reposition: true,
          content: h(List, {
            tiles: menuOptions.map((setting, index) =>
              h(ListTile, {
                title: setting,
                selected: index === selectedIndex,
                ink: true,
                hoverable: true,
                events: {
                  [a.onclick]: () => (
                    state.selectedIndex(index),
                    state.show(false)
                  )
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
                [a.onclick]: () => state.show(true)
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
