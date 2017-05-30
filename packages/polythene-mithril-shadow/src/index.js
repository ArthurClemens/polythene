import { viewComponent } from "polythene-mithril-base";
import { coreShadow as core } from "polythene-core-shadow";

export const Shadow = viewComponent(Object.assign(
  {},
  core
));

Shadow.theme = core.theme;
Shadow.displayName = "Shadow";
