import styler from '../../../common/styler';
import { componentConfig } from 'polythene-theme';
import vars from './config';
import layout from './layout';
import color from './color';

const configFn = componentConfig && componentConfig['spinner-ios'];
const config = configFn ? configFn(vars) : vars;
const id = 'pe-spinner-ios';

styler.add(id, layout(config), color(config));
