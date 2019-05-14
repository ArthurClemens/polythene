
import { trustedIconMenu, trustedIconRefresh, trustedIconAddSVG } from "./icons";
import { longTitle } from "./titles";

const titleClass = "pe-toolbar__title";

export default ({ IconButton, h }) => () => [
  h(IconButton, {
    key: "menu", // for React
    icon: { svg: { content: trustedIconMenu(h) } }
  }),
  h("div", {
    key: "title", // for React
    className: titleClass
  }, longTitle),
  h(IconButton, {
    key: "refresh", // for React
    icon: { svg: { content: trustedIconRefresh(h) } }
  }),
  h(IconButton, {
    key: "add", // for React
    icon: { svg: { content: trustedIconAddSVG(h) } }
  }),
];
