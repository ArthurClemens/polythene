import defaultConfig from './config';
const customConfigFn = undefined;
import layout from './layout';
import color from './color';
import styler from '../../../common/styler';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

styler.add('pe-spinner-indeterminate', layout(config), color(config));
