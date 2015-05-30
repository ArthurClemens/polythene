'use strict';

const DEFAULT_ICON_SET = 'material-design-iconic-font';

let polythene,
    iconSet,
    transitionEvent;

iconSet = DEFAULT_ICON_SET;

transitionEvent = (() => {
    let a, el, animations;
    el = document.createElement('fakeelement');
    animations = {
        'animation': 'animationend',
        'OAnimation': 'oAnimationEnd',
        'MozAnimation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd'
    };
    for (a in animations) {
        if (el.style[a] !== undefined) {
            return animations[a];
        }
    }
}).call();

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


polythene = {
    iconSet: () => iconSet,
    setIconSet: newIconSet => {
        iconSet = newIconSet;
    },

    whichTransitionEvent: () => {
        return transitionEvent;
    },

    insertContent: (content, opts = {}) => {
        return [].concat(opts.before, content, opts.after);
    }
};

export default polythene;
