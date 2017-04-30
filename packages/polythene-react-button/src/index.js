import { createProps, createContent, theme } from "polythene-button";
import { StateComponent } from "polythene-react-core";

const Button = StateComponent(
  createProps,
  createContent,
  "a",
  {
    focus:     false,
    mouseover: false,
    inactive:  false
  }
);

export default Object.assign(Button, { theme });
