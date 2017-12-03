import { StateComponent } from "polythene-mithril-base";
import { coreKeyboardList as core } from "polythene-core-keyboard-list";
import { List } from "polythene-mithril-list";
import { ListTile } from "polythene-mithril-list-tile";

export const KeyboardList = StateComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { List, ListTile })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { List, ListTile }))
  }
));

KeyboardList.displayName = "KeyboardList";
