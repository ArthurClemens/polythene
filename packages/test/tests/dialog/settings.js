
import m from "mithril";
import { list } from "polythene-list";
import { dialog } from "polythene-dialog";
import { listTile } from "polythene-list-tile";
import { commonDialogProps } from "./shared";

const createListTile = (title) => {
  return m(listTile, {
    title,
    events: {
      onclick: () => dialog.hide()
    },
    ink: true
  });
};

export default Object.assign({},
  commonDialogProps, {
    menu: m(list, {
      hoverable: true,
      tiles: [
        createListTile("Show all notification content including sensitive notification content"),
        createListTile("Hide sensitive notification content"),
        createListTile("Hide all notification content")
      ]
    }),
    hideDelay: .15,
    header: null,
    footer: null
  }
);