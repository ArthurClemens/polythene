import { renderer, keys, Slider, Icon, TextField } from "polythene-mithril";
import genericTests from "./tests-generic";
import rgbSlider from "./components/rgb-slider-mithril";

const mithrilTests = ({ Slider, Icon, TextField, keys: k, renderer: h }) => {

  const RGBSlider = rgbSlider({ Slider, Icon, TextField, h, k });

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
  .concat(genericTests({ Slider, Icon, TextField, renderer, keys }))
  .concat(mithrilTests({ Slider, Icon, TextField, renderer, keys }));
