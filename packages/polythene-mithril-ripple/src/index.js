import { StateComponent } from "polythene-mithril-base";
import { coreRipple as core } from "polythene-core-ripple";

export const Ripple = StateComponent(core);

Ripple.theme = core.theme;
Ripple.displayName = "Ripple";
