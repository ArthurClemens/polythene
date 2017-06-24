import { StateComponent } from 'polythene-mithril-base';
import { coreSlider } from 'polythene-core-slider';

var Slider = StateComponent(coreSlider);

Slider.theme = coreSlider.theme;
Slider.displayName = "Slider";

export { Slider };
