import { renderer as h, Menu, RaisedButton, List, ListTile } from "polythene-mithril";

export const simpleMenuContent = h(List, [
  h(ListTile, {
    title: "Yes",
    ink: true
  }),
  h(ListTile, {
    title: "No",
    ink: true
  })
]);

export default {
  oninit: vnode => {
    vnode.state.isOpen = false;
    vnode.state.id = vnode.attrs.instance;
  },
  view: vnode => 
    h("div", {
      style: { position: "relative" }
    }, [
      h(RaisedButton,
        {
          label: "Open menu",
          id: vnode.state.id,
          events: {
            onclick: () => vnode.state.isOpen = true
          }
        }
      ),
      h(Menu, {
        offset: -4,
        target: `#${vnode.state.id}`,
        show: vnode.state.isOpen,
        didHide: () => vnode.state.isOpen = false,
        content: simpleMenuContent
      })
    ])
};