import listTileClasses from "./list-tile";

export default {
  component:   "pe-menu",

  // elements
  panel:       "pe-menu__panel",
  content:     "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  backdrop:    "pe-menu__backdrop",

  // states
  permanent:   "pe-menu--permanent",
  floating:    "pe-menu--floating",
  width_auto:  "pe-menu--width-auto",
  width_n:     "pe-menu--width-",
  origin:      "pe-menu--origin",
  visible:     "pe-menu--visible",

  // lookup
  listTile:         listTileClasses.component,
  selectedListTile: listTileClasses.selected,
};