import styler from '../../common/styler';
import { config as themeConfig } from 'polythene-theme';
import componentConfig from './config';
import layout from './layout';
// Does not contain color styles

const themeConfigFn = themeConfig && themeConfig.shadow;
const config = themeConfigFn ? themeConfigFn(componentConfig) : componentConfig;
const id = 'pe-shadow';

styler.add(id, layout(config));
