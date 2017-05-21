import { viewComponent } from "polythene-react-base";
import { CoreShadow as component } from "polythene-core-shadow";

export const Shadow = viewComponent(Object.assign(
  {},
  component
));

Shadow.theme = component.theme;
Shadow.displayName = "Shadow";
