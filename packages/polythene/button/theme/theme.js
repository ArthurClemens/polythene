import styler from '../../common/styler';
import { customVariables } from 'polythene-theme';

console.log("customVariables", customVariables);

import defaultConfig from './config';
var customConfigFn = customVariables.button;
import layout from './layout';
import color from './color';

var config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

styler.add('pe-button-text', layout(config), color(config));