import { StateComponent } from 'polythene-react-base';
import { coreDialogPane } from 'polythene-core-dialog-pane';

var DialogPane = StateComponent(coreDialogPane);

DialogPane.theme = coreDialogPane.theme;
DialogPane.displayName = "DialogPane";

export { DialogPane };
