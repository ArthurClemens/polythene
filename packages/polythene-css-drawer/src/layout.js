
import { flex } from "polythene-core-css";

export default (selector, componentVars) => [{
  [selector]: [
    {
      position: "relative" /* to attach a shadow */
    }
  ]
}];

