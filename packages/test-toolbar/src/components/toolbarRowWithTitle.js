
import { trustedIconMenu, trustedIconRefresh, trustedIconAddSVG } from "./icons";
import { longTitle } from "./titles";

export default ({ ToolbarTitle, IconButton, h }) => () => [
  h(IconButton, {
    key: "menu", // for React
    icon: { svg: { content: trustedIconMenu(h) } }
  }),
  h(ToolbarTitle, {
    key: "title", // for React
    text: longTitle,
  }),
  h(IconButton, {
    key: "refresh", // for React
    icon: { svg: { content: trustedIconRefresh(h) } }
  }),
  h(IconButton, {
    key: "add", // for React
    icon: { svg: { content: trustedIconAddSVG(h) } }
  }),
];
