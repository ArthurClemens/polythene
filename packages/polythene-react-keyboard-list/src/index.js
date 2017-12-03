import { StateComponent } from "polythene-react-base";
import { coreKeyboardList as core } from "polythene-core-keyboard-list";
import { List } from "polythene-react-list";
import { ListTile } from "polythene-react-list-tile";

export const KeyboardList = StateComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { List, ListTile })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { List, ListTile }))
  }
));

KeyboardList.displayName = "KeyboardList";
