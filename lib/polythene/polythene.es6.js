const RESIZE_TIMER = 200; // Debounce window resize

let iconSet = '';

let listeners = {};

let resizeTimer = 0;
window.onresize = () => {
    if (!listeners.resize) {
        return;
    }
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        listeners.resize.forEach(listener => listener.call());
    }, RESIZE_TIMER);
};

const polythene = {
    iconSet: () => iconSet,
    setIconSet: newIconSet => {
        iconSet = newIconSet;
    },

    insertContent: (content, opts = {}) => {
        return [].concat(opts.before, content, opts.after);
    },

    addListener: (event, listener) => {
        listeners[event] = listeners[event] || [];
        listeners[event].push(listener);
    },

    removeListener: (event, listener) => {
        if (!listeners[event]) {
            return;
        }
        const index = listeners[event].indexOf(listener);
        if (index > -1) {
            listeners[event].splice(index, 1);
        }
    }
};

export default polythene;
