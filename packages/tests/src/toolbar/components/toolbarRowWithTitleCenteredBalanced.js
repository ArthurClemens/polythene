
import { trustedIconMenu } from "./icons";
import { shortTitle } from "./titles";

export default ({ ToolbarTitle, IconButton, h }) => () => [
  h(IconButton, {
    key: "menu", // for React
    icon: { svg: { content: trustedIconMenu(h) } }
  }),
  h(ToolbarTitle, {
    key: "title", // for React
    text: shortTitle,
    center: true,
  }),
  h(IconButton, {
    inactive: true,
    key: "placeholder", // for React
    icon: { content: "" }
  })
];
