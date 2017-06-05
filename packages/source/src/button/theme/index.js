import styler from '../../common/styler';
import { componentConfig } from 'polythene-theme';
import vars from './config';
import layout from './layout';
import color from './color';

const configFn = componentConfig && componentConfig.button;
const config = configFn ? configFn(vars) : vars;
const id = 'pe-button-text';

styler.add(id, layout(config), color(config));
