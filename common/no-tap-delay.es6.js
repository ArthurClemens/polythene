import FastClick from 'fastclick';
import p from 'polythene/polythene/polythene';

const layer = document.body;
const throttle = 150;
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
    timeoutId = window.setTimeout(add, throttle);
};

const init = () => {
    if (p.isTouch) {
        p.addListener('scroll', handleScroll);
        add();
    }
};

init();

export default {
    add: add,
    remove: remove
};
