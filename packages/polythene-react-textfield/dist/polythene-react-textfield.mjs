import { StateComponent } from 'polythene-react-base';
import { coreTextField } from 'polythene-core-textfield';

var TextField = StateComponent(coreTextField);

TextField.theme = coreTextField.theme;
TextField.displayName = "TextField";

export { TextField };
