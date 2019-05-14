
import { flex } from "polythene-core-css";
const blockSize = 40;

export const styles = [{
  " .block": {
    "min-width": blockSize + "px",
    "min-height": blockSize + "px",
    color: "#fff",
    "text-align": "center",
    "line-height": blockSize + "px",

    "&:nth-child(1)": {
      background: "#311B92"
    },
    "&:nth-child(2)": {
      background: "#4527A0"
    },
    "&:nth-child(3)": {
      background: "#512DA8"
    },
    "&:nth-child(4)": {
      background: "#5E35B1"
    },
    "&.fixed-height": {
      height: "90px",
      position: "relative"
    }
  },
  " .vertical-blocks": [
    flex.layoutVertical
  ]
}];

export const createBlocks = h => [1, 2, 3, 4].map(num =>
  h(".block", num));
