import styler from '../../common/styler';
import { componentConfig } from 'polythene-theme';
import vars from './config';
import layout from './layout';
import color from './color';

var configFn = componentConfig && componentConfig.slider;
var config = configFn ? configFn(vars) : vars;
var id = 'pe-slider';

styler.add(id, layout(config), color(config));