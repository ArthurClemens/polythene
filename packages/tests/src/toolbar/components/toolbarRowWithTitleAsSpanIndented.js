
import { trustedIconMenu, trustedIconAddSVG } from "./icons";
import { longTitle } from "./titles";

export default ({ IconButton, h }) => () => [
  h(IconButton, {
    key: "menu", // for React
    icon: { svg: { content: trustedIconMenu(h) } }
  }),
  h("span", {
    key: "title" // for React
  }, longTitle),
  h(IconButton, {
    key: "add", // for React
    icon: { svg: { content: trustedIconAddSVG(h) } }
  }),
];
