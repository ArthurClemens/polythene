
import { shortTitle } from "./titles";

export default ({ ToolbarTitle, h }) => () =>
  h(ToolbarTitle, {
    key: "title", // for React
    text: shortTitle,
    center: true,
  });
