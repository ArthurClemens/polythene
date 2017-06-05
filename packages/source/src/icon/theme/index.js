import styler from '../../common/styler';
import { componentConfig } from 'polythene-theme';
import vars from './config';
import layout from './layout';
// Does not contain color styles

const configFn = componentConfig && componentConfig.icon;
const config = configFn ? configFn(vars) : vars;
const id = 'pe-icon';

styler.add(id, layout(config));
