import m from "mithril";
import { dialog } from "polythene-dialog";
import { icon } from "polythene-icon";
import { list } from "polythene-list";
import { listTile } from "polythene-list-tile";
import { commonDialogProps } from "./shared";

import iconAccount from "mmsvg/google/msvg/action/account-circle";

export default Object.assign({},
  commonDialogProps, {
    class: "demo-dialog dialog-simple",
    title: "Set backup account",
    menu: m(list, {
      hoverable: true,
      tiles: [1, 2, 3].map(() => {
        return m(listTile, {
          class: "demo-item",
          front: m(icon, {
            type: "large",
            msvg: iconAccount
          }),
          title: "Account",
          events: {
            onclick: () => dialog.hide()
          }
        });
      })
    }),
    footer: null
  }
);