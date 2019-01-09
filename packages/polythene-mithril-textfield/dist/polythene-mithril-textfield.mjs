import { ComponentCreator } from 'polythene-mithril-base';
import { coreTextField } from 'polythene-core-textfield';

// @ts-check
var TextField = ComponentCreator(coreTextField);
TextField["displayName"] = "TextField";

export { TextField };
