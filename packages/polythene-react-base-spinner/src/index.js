import { StateComponent } from "polythene-react-base";
import { coreBaseSpinner as core, classes } from "polythene-core-base-spinner";
import { Shadow } from "polythene-react-shadow";

export const BaseSpinner = StateComponent(Object.assign(
  {},
  core,
  {
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Shadow })),
  }
));

BaseSpinner.classes = classes;
BaseSpinner.displayName = "BaseSpinner";
