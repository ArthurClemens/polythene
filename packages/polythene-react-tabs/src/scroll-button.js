// @ts-check 

import { ComponentCreator } from "polythene-react-base";
import { coreScrollButton as core } from "polythene-core-tabs";
import { IconButton } from "polythene-react-icon-button";

export const ScrollButton = ComponentCreator({
  ...core,
  component: IconButton
});

ScrollButton["displayName"] = "ScrollButton";
