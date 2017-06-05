import styler from '../../common/styler';
import { componentConfig } from 'polythene-theme';
import vars from './config';
import layout from './layout';
// Does not contain color styles

var configFn = componentConfig && componentConfig['header-panel'];
var config = configFn ? configFn(vars) : vars;
var id = 'pe-header-panel';

styler.add(id, layout(config));