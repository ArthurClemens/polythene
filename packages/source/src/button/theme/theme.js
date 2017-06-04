import vars from "./config";
import layout from './layout';
import color from './color';
import { styler } from 'polythene-core-css';

const fns = [layout, color];
const selector = '.pe-button.pe-button--text';

export const customTheme = (customSelector, customVars) => 
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, fns);

styler.generateStyles([selector], {...vars}, fns);
