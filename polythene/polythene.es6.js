
let listeners = {};

const isTouch = () => {
    return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
};

const addListener = (eventName, listener) => {
    listeners[eventName] = listeners[eventName] || [];
    listeners[eventName].push(listener);
};

const removeListener = (eventName, listener) => {
    if (!listeners[eventName]) {
        return;
    }
    const index = listeners[eventName].indexOf(listener);
    if (index > -1) {
        listeners[eventName].splice(index, 1);
    }
};

const emitEvent = (eventName, event) => {
    if (!listeners[eventName]) {
        return;
    }
    listeners[eventName].forEach(listener => listener(event));
};

window.addEventListener('resize', e => (emitEvent('resize', e)));
window.addEventListener('scroll', e => (emitEvent('scroll', e)));
window.addEventListener('keydown', e => (emitEvent('keydown', e)));

const polythene = {
    insertContent: (content, opts = {}) => {
        return [].concat(opts.before, content, opts.after);
    },
    isTouch: isTouch,
    addListener: addListener,
    removeListener: removeListener,
    emitEvent: emitEvent
};

export default polythene;
