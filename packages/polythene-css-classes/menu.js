import listTileClasses from "./list-tile";

export default {
  component:   "pe-menu",

  // elements
  content:     "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  target:      "pe-menu__target",

  // states
  permanent:   "pe-menu--permanent",
  floating:    "pe-menu--floating",
  visible:     "pe-menu--visible",
  width_auto:  "pe-menu--width-auto",
  width_n:     "pe-menu--width-",
  origin:      "pe-menu--origin",

  // lookup
  listTile:         listTileClasses.component,
  selectedListTile: listTileClasses.selected,
};