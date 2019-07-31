import stream from "mithril/stream";

const menuOptions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(n => ({
  title: `Menu item ${n}`
}));
  
export default ({ h, a, Menu, Button, List, ListTile }) => ({
  oninit: vnode => {
    const show = stream(false);
    const selectedIndex = stream(0);
    Object.assign(vnode.state, {
      show,
      selectedIndex,
      redrawOnUpdate: stream.merge([show]), // for React
      id: "id-" + vnode.attrs.id || new Date().getTime() + Math.floor(Math.random() * 1000)
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
          className: attrs.className,
          hideDelay: .180,
          width: 3,
          height: attrs.height,
          scrollTarget: `#item-${selectedIndex}`,
          origin: "top",
          backdrop: attrs.backdrop,
          topMenu: attrs.topMenu,
          content: h(List, {
            compact: true,
            tiles: menuOptions.map((item, index) =>
              h(ListTile, {
                title: item.title,
                id: `item-${index}`,
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
        h(Button, {
          id,
          label: menuOptions[selectedIndex].title,
          dropdown: {
            open: show
          },
          events: {
            [a.onclick]: () => state.show(!show)
          }
        })
      ]
    );
  }
});
