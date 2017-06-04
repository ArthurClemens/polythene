import styler from '../../common/styler';
import { config as themeConfig } from 'polythene-theme';
import componentConfig from './config';
import layout from './layout';
// Does not contain color styles

var themeConfigFn = themeConfig && themeConfig.icon;
var config = themeConfigFn ? themeConfigFn(componentConfig) : componentConfig;
var id = 'pe-icon';

styler.add(id, layout(config));