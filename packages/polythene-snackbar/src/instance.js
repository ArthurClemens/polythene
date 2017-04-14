import { instance } from "polythene-notification";
import { customTheme } from "./theme";

export default Object.assign(
  {},
  instance,
  {
    theme: customTheme // accepts (selector, vars)
  }
);
  
