const RESIZE_TIMER = 200; // Debounce window resize

let iconSet = '';

const transitionEvent = (() => {
    const el = document.createElement('fakeelement');
    const animations = {
        'animation': 'animationend',
        'OAnimation': 'oAnimationEnd',
        'MozAnimation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd'
    };
    for (let a in animations) {
        if (el.style[a] !== undefined) {
            return animations[a];
        }
    }
}).call();


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

/*
Polyfill source:
https://github.com/Financial-Times/polyfill-service/blob/master/polyfills/Object.assign/polyfill.js
*/
if (!Object.assign) {
    Object.assign = function assign(target, source) {
        for (let index = 1, key; index in arguments; ++index) {
            source = arguments[index];
            for (key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
}

const polythene = {
    iconSet: () => iconSet,
    setIconSet: newIconSet => {
        iconSet = newIconSet;
    },

    whichTransitionEvent: () => {
        return transitionEvent;
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
