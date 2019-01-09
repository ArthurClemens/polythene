// @ts-check

import { ComponentCreator } from "polythene-mithril-base";
import { coreScrollButton as core } from "polythene-core-tabs";
import { IconButton } from "polythene-mithril-icon-button";

export const ScrollButton = ComponentCreator({
  ...core,
  component: IconButton
});

ScrollButton["displayName"] = "ScrollButton";
