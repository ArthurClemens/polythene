import { styler } from 'polythene-core-css';
import { componentConfig } from 'polythene-theme';
import vars from './config';
import layout from './layout';
import color from './color';

var configFn = componentConfig && componentConfig.menu;
var config = configFn ? configFn(vars) : vars;
var id = 'pe-menu';

styler.add(id, layout(config), color(config));