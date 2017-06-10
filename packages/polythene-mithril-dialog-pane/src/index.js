import { stateComponent } from "polythene-mithril-base";
import { coreDialogPane as core } from "polythene-core-dialog-pane";

export const DialogPane = stateComponent(core);

DialogPane.theme = core.theme;
DialogPane.displayName = "DialogPane";
