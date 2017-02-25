import m from "mithril";
import { menu } from "polythene-menu";
import { raisedButton } from "polythene-raised-button";
import { list } from "polythene-list";
import { listTile } from "polythene-list-tile";

export const simpleMenuContent = m(list, [
  m(listTile, {
    title: "Yes",
    ink: true
  }),
  m(listTile, {
    title: "No",
    ink: true
  })
]);

export default {
  isOpen: false,
  id: "id-" + Math.floor(Math.random() * 1000),
  view: vnode => 
    m("div", {
      style: { position: "relative" }
    }, [
      m(raisedButton,
        {
          label: "Open menu",
          id: vnode.state.id,
          events: {
            onclick: () => vnode.state.isOpen = true
          }
        }
      ),
      m(menu, {
        offset: -4,
        target: vnode.state.id,
        show: vnode.state.isOpen,
        didHide: () => vnode.state.isOpen = false,
        content: simpleMenuContent
      })
    ])
};