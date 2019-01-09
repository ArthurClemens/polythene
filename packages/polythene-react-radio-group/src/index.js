// @ts-check

import { ComponentCreator } from "polythene-react-base";
import { coreRadioGroup as core } from "polythene-core-radio-group";
import { RadioButton } from "polythene-react-radio-button";

export const RadioGroup = ComponentCreator({
  ...core,
  createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { RadioButton }))
});

RadioGroup["displayName"] = "RadioGroup";
