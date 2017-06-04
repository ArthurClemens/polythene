import FastClick from 'fastclick';
import p from '../polythene/polythene';
import events from './events';

var layer = document.body;
var throttleDelay = 150;
var reInitDelay = throttleDelay + 50;
var fastClick = void 0;
var timeoutId = void 0;
var enabled = void 0;

var remove = function remove() {
    if (enabled) {
        fastClick.destroy();
        enabled = false;
    }
};

var add = function add() {
    if (!enabled) {
        fastClick = new FastClick(layer);
        enabled = true;
    }
};

var handleScroll = function handleScroll() {
    remove();
    if (timeoutId) {
        window.clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(add, reInitDelay);
};

var init = function init() {
    if (p.isTouch) {
        events.subscribe('scroll', handleScroll, throttleDelay);
        add();
    }
};

init();

export default {
    add: add,
    remove: remove
};