import { StateComponent } from 'polythene-mithril-base';
import { coreTextField } from 'polythene-core-textfield';

var TextField = StateComponent(coreTextField);

TextField.theme = coreTextField.theme;
TextField.displayName = "TextField";

export { TextField };
