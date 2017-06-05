import styler from '../../../common/styler';
import { componentConfig } from 'polythene-theme';
import vars from './config';
import layout from './layout';
import color from './color';

var configFn = componentConfig && componentConfig.snackbar;
var config = configFn ? configFn(vars) : vars;
var id = 'pe-notification-snackbar';

styler.add(id, layout(config), color(config));