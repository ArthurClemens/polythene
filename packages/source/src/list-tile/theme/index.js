import { styler } from 'polythene-core-css';
import { componentConfig } from 'polythene-theme';
import vars from './config';
import layout from './layout';
import color from './color';

const configFn = componentConfig && componentConfig['list-tile'];
const config = configFn ? configFn(vars) : vars;
const id = 'pe-list-tile';

styler.add(id, layout(config), color(config));
