import { CoreListTile } from "polythene-core-list-tile";

export default {
  component:   "pe-menu",

  // elements
  content:     "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  target:      "pe-menu__target",

  // states
  permanent:   "pe-menu--permanent",
  visible:     "pe-menu--visible",
  width_auto:  "pe-menu--width-auto",
  width_n:     "pe-menu--width-",

  // lookup
  listTile:         CoreListTile.classes.component,
  selectedListTile: CoreListTile.classes.selected,
};
