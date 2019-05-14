
import { trustedIconRefresh } from "./icons";
import { longTitle } from "./titles";

export default ({ ToolbarTitle, IconButton, Checkbox, h }) => () => [
  h(ToolbarTitle, {
    key: "title", // for React
    text: longTitle,
  }),
  h(IconButton, {
    key: "refresh", // for React
    icon: { svg: { content: trustedIconRefresh(h) } }
  }),
  h(Checkbox, {
    key: "check", // for React
    className: "pe-action",
    defaultChecked: true
  })
];
