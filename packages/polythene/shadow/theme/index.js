import styler from '../../common/styler';
import { componentConfig } from 'polythene-theme';
import vars from './config';
import layout from './layout';
// Does not contain color styles

var configFn = componentConfig && componentConfig.shadow;
var config = configFn ? configFn(vars) : vars;
var id = 'pe-shadow';

styler.add(id, layout(config));