
import { longTitle } from "./titles";

export default ({ ToolbarTitle, h }) => () => [
  h(ToolbarTitle, {
    key: "title", // for React
    text: longTitle,
  }),
  h("a", {
    key: "action",  // for React
    className: "pe-action",
    href: "#"
  }, "Action")
];
