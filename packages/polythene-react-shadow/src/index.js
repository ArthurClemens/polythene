import { statelessComponent } from "polythene-react-base";
import { CoreShadow as component } from "polythene-core-shadow";

export const Shadow = statelessComponent(Object.assign(
  {},
  component
));

Shadow.theme = component.theme;
Shadow.displayName = "Shadow";
