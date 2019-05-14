import { Slider, Icon, TextField } from "polythene-mithril";
import { h, a } from "cyano-mithril";
import genericTests from "./tests-generic";
import rgbSlider from "./components/rgb-slider-mithril";

const mithrilTests = ({ Slider, Icon, TextField, h, a }) => {

  const RGBSlider = rgbSlider({ Slider, Icon, TextField, h, a });

  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "With an editable numeric value",
      interactive: true,
      component: RGBSlider
    },
  ];
};

export default []
  .concat(genericTests({ Slider, Icon, TextField, h, a }))
  .concat(mithrilTests({ Slider, Icon, TextField, h, a }));
