import { RadioButton, RadioGroup, Button } from "polythene-mithril";
import { h, a } from "cyano-mithril";
import genericTests from "./tests-generic";
import onChange from "./components/radio-group-onchange";
import outside from "./components/radio-group-outside";

const mithrilTests = ({ RadioGroup, h }) => {
  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "Radio Group onChange",
      interactive: true,
      component: onChange({ h, RadioGroup })
    },
    {
      name: "Radio Group set value from outside",
      interactive: true,
      component: outside({ h, RadioGroup, Button })
    },
  ];
};

export default []
  .concat(genericTests({ RadioButton, RadioGroup, Button, h, a }))
  .concat(mithrilTests({ RadioButton, RadioGroup, Button, h, a }));
