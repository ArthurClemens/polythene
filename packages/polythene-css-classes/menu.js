import listTileClasses from "./list-tile";

export default {
  component:   "pe-menu",

  // elements
  content:     "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  target:      "pe-menu__target",
  backdrop:    "pe-menu__backdrop",

  // states
  permanent:   "pe-menu--permanent",
  width_auto:  "pe-menu--width-auto",
  width_n:     "pe-menu--width-",
  floating:    "pe-menu--floating",

  // lookup
  listTile:         listTileClasses.component,
  selectedListTile: listTileClasses.selected,
};
