import { classes as listTile } from "polythene-list-tile";

export default {
  component:   "pe-menu",
  content:     "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  target:      "pe-menu__target",
  visible:     "pe-menu--visible",
  permanent:   "pe-menu--permanent",
  width_n:     "pe-menu--width-",
  width_auto:  "pe-menu--width-auto",

  listTile:         listTile.component,
  selectedListTile: listTile.selected
};
