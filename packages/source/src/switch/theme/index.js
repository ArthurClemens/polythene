import styler from '../../common/styler';
import { config as themeConfig } from 'polythene-theme';
import componentConfig from './config';
import layout from './layout';
import color from './color';

const themeConfigFn = themeConfig && themeConfig.switch;
const config = themeConfigFn ? themeConfigFn(componentConfig) : componentConfig;
const id = 'pe-switch';

styler.add(id, layout(config), color(config));
