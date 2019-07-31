
import { shortTitle } from "./titles";

export default ({ ToolbarTitle, h }) => () =>
  h(ToolbarTitle, {
    text: shortTitle,
    center: true,
  });
