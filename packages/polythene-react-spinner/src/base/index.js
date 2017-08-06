import { StateComponent } from "polythene-react-base";
import { coreBaseSpinner as core } from "polythene-core-spinner";
import { Shadow } from "polythene-react-shadow";

export const BaseSpinner = StateComponent(Object.assign(
  {},
  core,
  {
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Shadow })),
  }
));

BaseSpinner.displayName = "BaseSpinner";
BaseSpinner.classes = core.classes;

