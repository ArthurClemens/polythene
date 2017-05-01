import { renderer, button } from "polythene-react";
import genericTests from "./tests-generic";

const reactTests = () => {

  const secondaryButton = props => renderer(button, Object.assign({}, props, {
    className: "tests-custom-theme-secondary-button",
    borders: true,
  }));

  button.theme(".tests-custom-theme-secondary-button", {
    color_light_border: "#ddd",
    color_light_background: "#fff"
  });

  return [
    {
      name: "Theme with deriving component: button (should be bordered with white background)",
      component: secondaryButton,
      attrs: {
        label: "Bordered button"
      }
    },
  ];
};

export default []
  .concat(genericTests({ button, renderer }))
  .concat(reactTests());
