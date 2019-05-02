import { _ViewControl } from "polythene-core-switch";
import { cast, h } from "cyano-mithril";
import { Shadow } from "polythene-mithril-shadow";
import { IconButton } from "polythene-mithril-icon-button";
import { ComponentCreator } from "polythene-mithril-base";
import { coreSelectionControl as core } from "polythene-core-selection-control";

const ViewControl = cast(_ViewControl, { h, Shadow, IconButton });

export const SelectionControl = ComponentCreator({
  ...core,
  createContent: (vnode, args) => core.createContent(vnode, { ...args, ViewControl }),
});

SelectionControl["displayName"] = "SelectionControl";
