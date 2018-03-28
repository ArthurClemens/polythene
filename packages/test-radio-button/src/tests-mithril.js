import { renderer, RadioButton, RadioGroup, keys } from "polythene-mithril";
import genericTests from "./tests-generic";
import onChange from "./components/radio-group-onchange";

const mithrilTests = ({ RadioGroup, renderer: h }) => {
  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "Radio Group onChange",
      interactive: true,
      component: onChange({ h, RadioGroup })
    },
  ];
};

export default []
  .concat(genericTests({ RadioButton, RadioGroup, renderer, keys }))
  .concat(mithrilTests({ RadioButton, RadioGroup, renderer, keys }));
