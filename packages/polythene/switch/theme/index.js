import { styler } from 'polythene-core-css';
import { componentConfig } from 'polythene-theme';
import vars from './config';
import layout from './layout';
import color from './color';

var configFn = componentConfig && componentConfig.switch;
var config = configFn ? configFn(vars) : vars;
var id = 'pe-switch';

styler.add(id, layout(config), color(config));