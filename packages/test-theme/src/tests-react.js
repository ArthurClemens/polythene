import React from "react"; // eslint-disable-line no-unused-vars
import { renderer, Button, FAB, Icon, IconButton, List, ListTile } from "polythene-react";
import genericTests from "./tests-generic";

const reactTests = () => {

  const SecondaryButton = props => renderer(Button, Object.assign({}, props, {
    className: "tests-custom-theme-secondary-button",
    borders: true,
  }));

  // Button.theme(".tests-custom-theme-secondary-button", {
  //   color_light_border: "#ddd",
  //   color_light_background: "#fff"
  // });

  return [
    {
      section: "React specific tests",
    },
    {
      name: "Theme with deriving component: button (should be bordered with white background)",
      component: SecondaryButton,
      attrs: {
        label: "Bordered button"
      }
    },

    {
      section: "React JSX tests",
    },
    {
      name: "Option: svg as content attribute (JSX)",
      component: () => <SecondaryButton label="Bordered button" />
    },
  ];
};

export default []
  .concat(genericTests({ Button, FAB, Icon, IconButton, List, ListTile, renderer }))
  .concat(reactTests());
