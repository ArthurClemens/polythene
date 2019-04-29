
import { trustedIconAddSVG } from "./icons";
import { longTitle } from "./titles";

export default ({ ToolbarTitle, IconButton, h }) => () => [
  h(ToolbarTitle, {
    key: "title", // for React
    text: longTitle,
  }),
  h(IconButton, {
    key: "add", // for React
    icon: { svg: { content: trustedIconAddSVG(h) } }
  }),
];
