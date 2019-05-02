
import { _ViewControl } from "polythene-core-switch";
import { cast, h } from "cyano-react";
import { Shadow } from "polythene-react-shadow";
import { IconButton } from "polythene-react-icon-button";
import { ComponentCreator } from "polythene-react-base";
import { coreSelectionControl as core } from "polythene-core-selection-control";

const ViewControl = cast(_ViewControl, { h, Shadow, IconButton });

export const SelectionControl = ComponentCreator({
  ...core,
  createContent: (vnode, args) => core.createContent(vnode, { ...args, ViewControl }),
});

SelectionControl["displayName"] = "SelectionControl";
