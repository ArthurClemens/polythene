import { renderer, Button, FAB, Icon, IconButton, List, ListTile } from "polythene-mithril";
import genericTests from "./tests-generic"; // [1]

const h = renderer;

 // [2]
const secondaryButton = {
  theme: Button.theme,
  view: vnode => h(Button, {
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
    section: "Mithril specific tests",
  },
  {
    name: "Theme with deriving component: button (should be bordered with white background)",
    component: secondaryButton,
    attrs: {
      label: "Bordered button"
    }
  },
];

export default []
  .concat(genericTests({ Button, FAB, Icon, IconButton, List, ListTile, renderer /*, list, listTile*/ }))
  .concat(mithrilTests());
