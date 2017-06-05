import { styler } from 'polythene-core-css';
import { componentConfig } from 'polythene-theme';
import vars from './config';
import layout from './layout';
import color from './color';

const configFn = componentConfig && componentConfig['spinner-determinate'];
const config = configFn ? configFn(vars) : vars;
const id = 'pe-spinner-determinate';

styler.add(id, layout(config), color(config));
