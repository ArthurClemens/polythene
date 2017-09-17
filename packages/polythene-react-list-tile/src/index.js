import { StateComponent } from "polythene-react-base";
import { coreListTile as core } from "polythene-core-list-tile";
import { Icon } from "polythene-react-icon";
import { Ripple } from "polythene-react-ripple";

export const ListTile = StateComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Icon, Ripple })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Icon, Ripple }))
  }
));

ListTile.displayName = "ListTile";
