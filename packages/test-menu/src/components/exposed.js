import stream from "mithril/stream";

const menuOptions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(n => ({
  title: `Menu item ${n}`,
  key: n,
}));
  
export default ({ renderer: h, keys: k, Menu, Button, List, ListTile }) => ({
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
  view: ({ state, attrs }) => {
    const id = state.id;
    const show = state.show();
    const selectedIndex = state.selectedIndex();
    return h("div",
      {
        style: {
          position: "relative",
          height: "inherit"
        }
      },
      [
        h(Menu, {
          target: `#${id}`,
          show,
          didHide: () => state.show(false),
          hideDelay: .180,
          size: 3,
          height: attrs.height,
          scrollTarget: `#item-${selectedIndex}`,
          origin: "top",
          backdrop: attrs.backdrop,
          content: h(List, {
            hoverable: true,
            compact: true,
            tiles: menuOptions.map((item, index) =>
              h(ListTile, {
                title: item.title,
                key: item.key, // for React
                id: `item-${index}`,
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
        h(Button, {
          id,
          label: menuOptions[selectedIndex].title,
          dropdown: {
            open: show
          },
          events: {
            [k.onclick]: () => state.show(!show)
          }
        })
      ]
    );
  }
});