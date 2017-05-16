import { statelessComponent } from "polythene-react-base";
import { Shadow as component } from "polythene-core-shadow";

export const Shadow = statelessComponent(Object.assign(
  {},
  component
));

Shadow.theme = component.theme;
Shadow.displayName = "Shadow";
