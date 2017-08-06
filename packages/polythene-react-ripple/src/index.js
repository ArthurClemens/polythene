import { StateComponent } from "polythene-react-base";
import { coreRipple as core } from "polythene-core-ripple";

export const Ripple = StateComponent(core);

Ripple.theme = core.theme;
Ripple.displayName = "Ripple";
