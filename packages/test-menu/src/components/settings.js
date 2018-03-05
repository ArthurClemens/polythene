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
          size: 5,
          offset: 16,
          reposition: true,
          content: h(List, {
            hoverable: true,
            tiles: menuOptions.map((setting, index) =>
              h(ListTile, {
                title: setting,
                key: setting, // for React
                selected: index === selectedIndex,
                ink: true,
                hoverable: true,
                events: {
                  [k.onclick]: () => (
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
              key: "one", // for React
              subtitle: menuOptions[selectedIndex],
              events: {
                [k.onclick]: () => state.show(true)
              },
              hoverable: true,
              selected: show,
            }),
            h(ListTile, {
              title: "Item 2",
              key: "two", // for React
              disabled: true,
              hoverable: true,
            }),
            h(ListTile, {
              title: "Item 3",
              key: "three", // for React
              disabled: true,
              hoverable: true,
            })
          ]
        })
      ]
    );
  }
});
