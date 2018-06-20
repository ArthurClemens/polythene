import listTileClasses from "./list-tile";

export default {
  component:   "pe-menu",

  // elements
  panel:       "pe-menu__panel",
  content:     "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  backdrop:    "pe-menu__backdrop",

  // states
  floating:     "pe-menu--floating",
  origin:       "pe-menu--origin",
  permanent:    "pe-menu--permanent",
  showBackdrop: "pe-menu--backdrop",
  visible:      "pe-menu--visible",
  width_auto:   "pe-menu--width-auto",
  width_n:      "pe-menu--width-",

  // lookup
  listTile:         listTileClasses.component,
  selectedListTile: listTileClasses.selected,
};