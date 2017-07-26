import { renderer, Checkbox, RaisedButton, keys } from "polythene-mithril";
import genericTests from "./tests-generic";
import toggleButton from "./components/toggle-button-mithril";

const mithrilTests = ({ Checkbox, RaisedButton, renderer: h, keys: k }) => {
  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "Setting the checked state",
      interactive: true,
      exclude: true,
      component: toggleButton({ h, k, RaisedButton, Checkbox })
    },
  ];
};

export default []
  .concat(genericTests({ Checkbox, RaisedButton, renderer, keys }))
  .concat(mithrilTests({ Checkbox, RaisedButton, renderer, keys }));
