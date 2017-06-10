import { stateComponent } from 'polythene-react-base';
import { coreDialogPane } from 'polythene-core-dialog-pane';

var DialogPane = stateComponent(coreDialogPane);

DialogPane.theme = coreDialogPane.theme;
DialogPane.displayName = "DialogPane";

export { DialogPane };
