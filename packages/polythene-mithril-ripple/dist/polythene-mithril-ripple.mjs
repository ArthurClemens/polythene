import { StateComponent } from 'polythene-mithril-base';
import { coreRipple } from 'polythene-core-ripple';

var Ripple = StateComponent(coreRipple);

Ripple.theme = coreRipple.theme;
Ripple.displayName = "Ripple";

export { Ripple };
