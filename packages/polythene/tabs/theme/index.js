import m from 'mithril';
import styler from '../../common/styler';
import { config as themeConfig } from 'polythene-theme';
import componentConfig from './config';
import layout from './layout';
import color from './color';

var themeConfigFn = themeConfig && themeConfig.tabs;
var config = themeConfigFn ? themeConfigFn(componentConfig) : componentConfig;
var id = 'pe-tabs';

styler.add(id, layout(config), color(config));

// default icons
var arrowBackward = m.trust('<svg width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>');
var arrowForward = m.trust('<svg width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>');

export default {
    arrowBackward: arrowBackward,
    arrowForward: arrowForward
};