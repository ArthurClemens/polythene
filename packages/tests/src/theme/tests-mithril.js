/*
Testing 2 theming methods:
1. Style variables
2. Deriving components
*/

import { renderer, button, fab } from "polythene-mithril";

// import icon from "polythene-icon";
// import iconButton from "polythene-icon-button";
// import list from "polythene-list";
// import listTile from "polythene-list-tile";

import genericTests from "./tests-generic"; // [1]

const h = renderer;

 // [2]
const secondaryButton = {
  theme: button.theme,
  view: vnode => h(button, {
    className: "tests-custom-theme-secondary-button",
    borders: true,
    ...vnode.attrs
  })
};
secondaryButton.theme(".tests-custom-theme-secondary-button", {
  color_light_border: "#ddd",
  color_light_background: "#fff"
});

const mithrilTests = () => [
  {
    name: "Theme with deriving component: button (should be bordered with white background)",
    component: secondaryButton,
    attrs: {
      label: "Bordered button"
    }
  },
];

export default []
  .concat(genericTests({ button, fab/*, icon, iconButton, list, listTile, renderer*/ }))
  .concat(mithrilTests());
