
import { _ViewControl } from "polythene-core-selection-control";
import { cast, h } from "cyano-react";
import { Icon } from "polythene-react-icon";
import { IconButton } from "polythene-react-icon-button";
import { ComponentCreator } from "polythene-react-base";
import { coreSelectionControl as core } from "polythene-core-selection-control";

const ViewControl = cast(_ViewControl, { h, Icon, IconButton });

export const SelectionControl = ComponentCreator({
  ...core,
  createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { ViewControl })),
});

SelectionControl["displayName"] = "SelectionControl";
