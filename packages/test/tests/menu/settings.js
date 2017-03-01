import m from "mithril";
import menu from "polythene-menu";
import list from "polythene-list";
import listTile from "polythene-list-tile";

const menuOptions = [
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content"
];

export default {
  isOpen: false,
  selectedIndex: 0,
  id: "id-" + Math.floor(Math.random() * 1000),
  view: vnode => 
    m("div", {
      style: { position: "relative" }
    }, [
      m(menu, {
        target: vnode.state.id,
        show: vnode.state.isOpen,
        hideDelay: .240,
        didHide: () => vnode.state.isOpen = false,
        size: 5,
        content: m(list, {
          hoverable: true,
          tiles: menuOptions.map((setting, index) =>
            m(listTile, {
              title: setting,
              selected: index === vnode.state.selectedIndex,
              ink: true,
              events: {
                onclick: () => vnode.state.selectedIndex = index
              }
            })
          )
        })
      }),
      m(list, {
        selectable: true,
        style: {
          backgroundColor: "#fff",
          maxWidth: "320px"
        },
        tiles: [
          m(listTile, {
            id: vnode.state.id,
            title: "When device is locked",
            subtitle: menuOptions[vnode.state.selectedIndex],
            events: {
              onclick: () => vnode.state.isOpen = true
            }
          }),
          m(listTile, {
            title: "Item 2",
            disabled: true
          }),
          m(listTile, {
            title: "Item 3",
            disabled: true
          })
        ]
      })
    ])
};

