import { statelessComponent } from "polythene-react-base";
import { shadow as component } from "polythene-core-shadow";

export const shadow = statelessComponent(Object.assign(
  {},
  component
));

shadow.theme = component.theme;
shadow.displayName = "Shadow";
