import { StateComponent } from "polythene-mithril-base";
import { coreTextField as core } from "polythene-core-textfield";

export const TextField = StateComponent(core);

TextField.theme = core.theme;
TextField.displayName = "TextField";
