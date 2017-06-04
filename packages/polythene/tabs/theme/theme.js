import m from 'mithril';
import defaultConfig from './config';
import customConfig from '../../config/custom';
var customConfigFn = customConfig.tabs;
import layout from './layout';
import color from './color';
import styler from '../../common/styler';

// default icons
var arrowBackward = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>');
var arrowForward = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>');

var config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

styler.add('pe-tabs', layout(config), color(config));

export default {
    arrowBackward: {
        msvg: arrowBackward
    },
    arrowForward: {
        msvg: arrowForward
    }
};