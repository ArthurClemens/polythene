import FastClick from 'fastclick';
import p from '../polythene/polythene';
import events from './events';

const layer = document.body;
const throttleDelay = 150;
const reInitDelay = throttleDelay + 50;
let fastClick;
let timeoutId;
let enabled;

const remove = () => {
    if (enabled) {
        fastClick.destroy();
        enabled = false;
    }
};

const add = () => {
    if (!enabled) {
        fastClick = new FastClick(layer);
        enabled = true;
    }
};

const handleScroll = () => {
    remove();
    if (timeoutId) {
        window.clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(add, reInitDelay);
};

const init = () => {
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
