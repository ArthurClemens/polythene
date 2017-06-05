import j2c from 'j2c';
import m from 'mithril';
import { appConfig, componentConfig } from 'polythene-theme';

/*
https://gist.github.com/gre/1650294
Easing Functions - inspired from http://gizma.com/easing/
Only considering the t value for the range [0, 1] => [0, 1]
*/

var easing = {
    // no easing, no acceleration
    linear: function linear(t) {
        return t;
    },
    // accelerating from zero velocity
    easeInQuad: function easeInQuad(t) {
        return t * t;
    },
    // decelerating to zero velocity
    easeOutQuad: function easeOutQuad(t) {
        return t * (2 - t);
    },
    // acceleration until halfway, then deceleration
    easeInOutQuad: function easeInOutQuad(t) {
        return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    // accelerating from zero velocity
    easeInCubic: function easeInCubic(t) {
        return t * t * t;
    },
    // decelerating to zero velocity
    easeOutCubic: function easeOutCubic(t) {
        return --t * t * t + 1;
    },
    // acceleration until halfway, then deceleration
    easeInOutCubic: function easeInOutCubic(t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    // accelerating from zero velocity
    easeInQuart: function easeInQuart(t) {
        return t * t * t * t;
    },
    // decelerating to zero velocity
    easeOutQuart: function easeOutQuart(t) {
        return 1 - --t * t * t * t;
    },
    // acceleration until halfway, then deceleration
    easeInOutQuart: function easeInOutQuart(t) {
        return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    // accelerating from zero velocity
    easeInQuint: function easeInQuint(t) {
        return t * t * t * t * t;
    },
    // decelerating to zero velocity
    easeOutQuint: function easeOutQuint(t) {
        return 1 + --t * t * t * t * t;
    },
    // acceleration until halfway, then deceleration
    easeInOutQuint: function easeInOutQuint(t) {
        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
};

var listeners = {};

// https://gist.github.com/Eartz/fe651f2fadcc11444549
var throttle = function throttle(func) {
    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.05;
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;

    var wait = false;
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var later = function later() {
            func.apply(context, args);
        };
        if (!wait) {
            later();
            wait = true;
            setTimeout(function () {
                wait = false;
            }, s);
        }
    };
};

var subscribe = function subscribe(eventName, listener, delay) {
    listeners[eventName] = listeners[eventName] || [];
    listeners[eventName].push(delay ? throttle(listener, delay) : listener);
};

var unsubscribe = function unsubscribe(eventName, listener) {
    if (!listeners[eventName]) {
        return;
    }
    var index = listeners[eventName].indexOf(listener);
    if (index > -1) {
        listeners[eventName].splice(index, 1);
    }
};

var emit = function emit(eventName, event) {
    if (!listeners[eventName]) {
        return;
    }
    listeners[eventName].forEach(function (listener) {
        listener(event);
    });
};

window.addEventListener('resize', function (e) {
    return emit('resize', e);
});
window.addEventListener('scroll', function (e) {
    return emit('scroll', e);
});
window.addEventListener('keydown', function (e) {
    return emit('keydown', e);
});

var events = {
    throttle: throttle,
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    emit: emit
};

var remove = function remove(id) {
    if (id) {
        var old = document.getElementById(id);
        if (old) {
            old.parentNode.removeChild(old);
        }
    }
};

/*
* id: identifier, used as HTMLElement id for the attached <style></style> element
* styles: list of lists style Objects
*/
var add = function add(id) {
    for (var _len = arguments.length, styles = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        styles[_key - 1] = arguments[_key];
    }

    addToDocument.apply(undefined, [{ id: id }].concat(styles));
};

/*
* opts: options object
  * id: identifier, used as HTMLElement id for the attached <style></style> element
  * document: document reference; default window.document
* styles: list of lists style Objects
*/
var addToDocument = function addToDocument(opts) {
    for (var _len2 = arguments.length, styles = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        styles[_key2 - 1] = arguments[_key2];
    }

    var id = opts.id;
    var documentRef = opts.document || window.document;
    remove(id);
    var styleEl = documentRef.createElement('style');
    if (id) {
        styleEl.setAttribute('id', id);
    }
    styles.forEach(function (styleList) {
        // each style returns a list
        if (Object.keys(styleList).length) {
            styleList.forEach(function (style) {
                var scoped = { '@global': style };
                var sheet = j2c.sheet(scoped);
                styleEl.appendChild(documentRef.createTextNode(sheet));
            });
        }
    });
    documentRef.head.appendChild(styleEl);
};

var styler = {
    add: add,
    addToDocument: addToDocument,
    remove: remove
};

var validationHelper = (function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var elProp = opts.element || 'el';
    var invalidProp = opts.invalid || 'invalid';

    var fieldStates = [];

    var submit = function submit(e, onValidated) {
        e.preventDefault();
        var firstInvalidIndex = getInvalidIndex();
        if (firstInvalidIndex !== undefined) {
            if (fieldStates[firstInvalidIndex][elProp]) {
                fieldStates[firstInvalidIndex][elProp].focus();
            }
        } else {
            onValidated(e);
        }
    };

    var getIndex = function getIndex(el) {
        for (var i = 0; i < fieldStates.length; i++) {
            if (fieldStates[i][elProp] === el) {
                return i;
            }
        }
    };

    var getInvalidIndex = function getInvalidIndex() {
        for (var i = 0; i < fieldStates.length; i++) {
            if (fieldStates[i][invalidProp]) {
                return i;
            }
        }
    };

    var update = function update(state) {
        var index = getIndex(state[elProp]);
        if (index === undefined) {
            fieldStates.push(state);
        } else {
            fieldStates[index] = state;
        }
    };

    return {
        submit: submit,
        update: update
    };
});

/*
Polyfill
*/
if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function value(target) {
            if (target === undefined || target === null) {
                throw new TypeError('Cannot convert first argument to object');
            }

            var to = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var nextSource = arguments[i];
                if (nextSource === undefined || nextSource === null) {
                    continue;
                }
                nextSource = Object(nextSource);

                var keysArray = Object.keys(nextSource);
                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
    });
}

var isTouch = 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

document.querySelector('html').classList.add(isTouch ? 'pe-touch' : 'pe-no-touch');

var p = {
    isTouch: isTouch
};

var whichTransitionEvent = (function () {
    var el = document.createElement('fakeelement');
    var animations = {
        'animation': 'animationend',
        'OAnimation': 'oAnimationEnd',
        'MozAnimation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd'
    };
    for (var a in animations) {
        if (el.style[a] !== undefined) {
            return animations[a];
        }
    }
});

var vars = {
    start_scale: 0.1,
    end_scale: 2,
    start_opacity: 0.2,
    end_opacity: 0
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Mixins for j2c

// Creates j2c vendor key string from vendor list
// mixin.vendorize({'user-select': 'none'}, cfg.prefixes_user_select)
var vendorize = function vendorize(what, prefixes) {
    var vendorsSel = prefixes.map(function (v) {
        return '_' + v + '$';
    }).join('');
    return _defineProperty({}, vendorsSel, what);
};

// Centers an item absolutely within relative parent
// mixin.fit()
var fit = function fit() {
    var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var offsetPx = offset + 'px';
    return {
        position: 'absolute',
        top: offsetPx,
        right: offsetPx,
        bottom: offsetPx,
        left: offsetPx
    };
};

// Optional font smoothing
// mixin.fontSmoothing()
var fontSmoothing = function fontSmoothing() {
    var smoothing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (smoothing) {
        return {
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale'
        };
    } else {
        return {
            '-webkit-font-smoothing': 'subpixel-antialiased',
            '-moz-osx-font-smoothing': 'auto'
        };
    }
};

// Breaks off a line with ...
// unless lines is 'none'
// mixin.ellipsis(1, 16) // max 1 line, 16px high
// mixin.ellipsis(2, 1.3, 'em') // max 2 lines, 2.6em high
var ellipsis = function ellipsis(lines, lineHeight) {
    var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'px';

    if (lines === 'none') {
        return {
            'text-overflow': 'initial',
            overflow: 'initial',
            display: 'block',
            height: 'auto'
        };
    }
    return _extends$1({}, {
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        'text-rendering': 'auto' // Samsung Android
    }, lines !== undefined ? {
        '-webkit-line-clamp': lines,
        '-webkit-box-orient': 'vertical',
        display: '-webkit-box'
    } : null, lineHeight !== undefined ? {
        'max-height': lines * lineHeight + unit
    } : null);
};

// Clears float
// mixin.clearfix()
var clearfix = function clearfix() {
    return {
        '&:after': {
            content: '""',
            display: 'table',
            clear: 'both'
        }
    };
};

// Creates a very thin line
// disabled, does not work in Chrome
// mixin.hairline()
var hairline = function hairline() {
    return {};
};

// const hairline = (which) => ({
//     [`${which}-width`]: '1px',
//
//     ' html.pe-hairlines &': {
//         [`${which}-width`]: '0.5px'
//     }
// });

// Test if browser handles 0.5px borders
// and add class pe-hairlines if so
// if (window.devicePixelRatio && devicePixelRatio >= 2) {
//     const el = document.createElement('div');
//     el.style.border = '.5px solid transparent';
//     document.body.appendChild(el);
//     if (el.offsetHeight === 1) {
//         document.querySelector('html').classList.add('pe-hairlines');
//     }
//     document.body.removeChild(el);
// }

// Creates sticky headers in a scrollable list
// Does not work in Chrome: http://caniuse.com/#feat=css-sticky
// mixin.sticky()
var sticky = function sticky() {
    var zIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return [{ position: '-webkit-sticky' }, { position: '-moz-sticky' }, { position: '-o-sticky' }, { position: '-ms-sticky' }, { position: 'sticky' }, {
        top: 0,
        'z-index': zIndex
    }];
};

// Polythene utility function to generate style objects with scopes
// Used in theme files
var createStyles$1 = function createStyles(common, fn) {
    if (Array.isArray(common)) {
        return common.map(function (o) {
            for (var scope in o) {
                return _defineProperty({}, scope, fn(o[scope]));
            }
        });
    } else {
        return fn(common);
    }
};

// Creats a transition with presets
// mixin.defaultTransition('opacity', config.animation_duration)
var defaultTransition = function defaultTransition() {
    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : appConfig.animation_duration;
    var curve = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : appConfig.animation_curve_default;

    return [vendorize({
        'transition-delay': 0
    }, appConfig.prefixes_transition), vendorize({
        'transition-duration': duration
    }, appConfig.prefixes_transition), vendorize({
        'transition-timing-function': curve
    }, appConfig.prefixes_transition), vendorize({
        'transition-property': properties
    }, appConfig.prefixes_transition)];
};

// Scales an item dynamically between 2 screen sizes
// mixin.fluidScale('font-size', 'px', 50, 100);
// => 50px at 320 and below; scaling between sizes 50px and 100px in between the breakpoints; 100px at 1920 and above
var fluidScale = function fluidScale(property, unit, minValue, maxValue) {
    var minBreakpoint = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 320;
    var maxBreakpoint = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1920;
    var orientation = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'horizontal';
    return fluidScales([property], unit, [[minBreakpoint, minValue], [maxBreakpoint, maxValue]], orientation);
};

// Scales an item dynamically between multiple screen sizes
// mixin.fluidScales(['padding-left', 'padding-right'], 'px', [[375, 40], [320, 35], [480, 55]])
// => 35px padding-left and padding-right at 320 and below; scaling between sizes 35px and 40px in between the breakpoints 320 and 375; scaling between sizes 40px and 55px in between the breakpoints 375 and 480; 55px at 480 and above
var fluidScales = function fluidScales(property, unit, sizes, orientation) {
    var sorted = sizes.sort();
    var minBreakpoints = sorted.map(function (data) {
        return data[0];
    });
    var maxBreakpoints = sorted.map(function (data) {
        return data[0];
    });
    maxBreakpoints.shift();
    maxBreakpoints.push(minBreakpoints[minBreakpoints.length - 1]);
    var minValues = sorted.map(function (data) {
        return data[1];
    });
    var maxValues = sorted.map(function (data) {
        return data[1];
    });
    maxValues.shift();
    maxValues.push(minValues[minValues.length - 1]);
    return sorted.map(function (data, index) {
        return fluidRule(property, unit, orientation, minBreakpoints[index], maxBreakpoints[index], minValues[index], maxValues[index], index === 0, index === sorted.length - 1);
    });
};

var fluidRule = function fluidRule(property, unit) {
    var orientation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'horizontal';
    var minBreakpoint = arguments[3];
    var maxBreakpoint = arguments[4];
    var minValue = arguments[5];
    var maxValue = arguments[6];
    var isFirst = arguments[7];
    var isLast = arguments[8];

    var orientationUnit = orientation === 'vertical' ? 'vh' : 'vw';
    var orientationRule = orientation === 'vertical' ? 'height' : 'width';
    var rule = isLast ? ['@media (min-' + orientationRule + ': ' + minBreakpoint + 'px)'] : ['@media (min-' + orientationRule + ': ' + minBreakpoint + 'px) and (max-' + orientationRule + ': ' + maxBreakpoint + 'px)'];
    var multiplier = '((' + maxValue + ' - ' + minValue + ') / (' + maxBreakpoint + ' - ' + minBreakpoint + ') * 100' + orientationUnit + ')';
    var adder = '(((' + minValue + ' * ' + maxBreakpoint + ') - (' + maxValue + ' * ' + minBreakpoint + ')) / (' + maxBreakpoint + ' - ' + minBreakpoint + ')) * 1' + unit;
    var formula = 'calc(' + multiplier + ' + ' + adder + ')';
    var properties = Array.isArray(property) ? property : [property];
    return [isFirst ? properties.map(function (p) {
        return _defineProperty({}, p, '' + minValue + unit);
    }) : null, _defineProperty({}, rule, properties.map(function (p) {
        return _defineProperty({}, p, isLast ? '' + maxValue + unit : formula);
    }))];
};

var mixin = {
    clearfix: clearfix,
    createStyles: createStyles$1,
    defaultTransition: defaultTransition,
    ellipsis: ellipsis,
    fit: fit,
    fontSmoothing: fontSmoothing,
    fluidScale: fluidScale,
    fluidScales: fluidScales,
    hairline: hairline,
    sticky: sticky,
    vendorize: vendorize
};

var kfRipple = function kfRipple(config) {
    return {
        ' 100%': {
            transform: 'scale(' + config.end_scale + ')',
            'opacity': config.end_opacity
        }
    };
};

var createStyles = function createStyles(config) {
    return [{
        '.pe-ripple': [mixin.fit(), {
            color: 'inherit',
            'border-radius': 'inherit',

            '&.pe-ripple--constrained': {
                'border-radius': 'inherit',

                ' .pe-ripple__mask': {
                    overflow: 'hidden',
                    'border-radius': 'inherit'
                }
            },
            ' .pe-ripple__mask': [mixin.fit(), mixin.vendorize({
                'transform': 'translate3d(0,0,0)'
            }, appConfig.prefixes_transform)],

            ' .pe-ripple__waves': [mixin.vendorize({
                'transform': 'scale(' + config.start_scale + ')'
            }, appConfig.prefixes_transform), mixin.vendorize({
                'animation': 'ripple ' + appConfig.animation_curve_default
            }, appConfig.prefixes_animation),
            // default durations; finally set in js
            mixin.vendorize({
                'animation-duration': appConfig.animation_duration
            }, appConfig.prefixes_animation), {
                outline: '1px solid transparent', // for IE10
                position: 'absolute',
                'border-radius': '50%',
                opacity: config.start_opacity,
                'pointer-events': 'none',
                display: 'none'
            }],
            ' .pe-ripple__waves--animated': {
                display: 'block'
            }
        }],

        '@keyframes ripple': kfRipple(config)
    }];
};

var layout = (function (config) {
    return mixin.createStyles(config, createStyles);
});

// Does not contain color styles

var configFn = componentConfig && componentConfig.ripple;
var config = configFn ? configFn(vars) : vars;
var id = 'pe-ripple';

styler.add(id, layout(config));

var transitionEvent = whichTransitionEvent();
var DEFAULT_START_OPACITY = 0.2;
var OPACITY_DECAY_VELOCITY = 0.35;

var CSS_CLASSES$1 = {
    ripple: 'pe-ripple',
    waves: 'pe-ripple__waves',
    mask: 'pe-ripple__mask',
    constrained: 'pe-ripple--constrained',
    animated: 'pe-ripple__waves--animated'
};

var makeRipple = function makeRipple(e, ctrl) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var el = ctrl.ripple();
    var wavesEl = ctrl.waves();
    var w = el.offsetWidth;
    var h = el.offsetHeight;
    var waveRadius = Math.sqrt(w * w + h * h);
    var rect = el.getBoundingClientRect();
    var x = p.isTouch && e.touches ? e.touches[0].pageX : e.clientX;
    var y = p.isTouch && e.touches ? e.touches[0].pageY : e.clientY;
    var mx = opts.center ? rect.left + rect.width / 2 : x;
    var my = opts.center ? rect.top + rect.height / 2 : y;
    var rx = mx - rect.left - waveRadius / 2;
    var ry = my - rect.top - waveRadius / 2;
    var initialOpacity = opts.initialOpacity !== undefined ? opts.initialOpacity : DEFAULT_START_OPACITY;
    var opacityDecayVelocity = opts.opacityDecayVelocity !== undefined ? opts.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
    var duration = 1 / opacityDecayVelocity * initialOpacity;
    var color = window.getComputedStyle(el).color;
    var onEnd = function onEnd(evt) {
        wavesEl.classList.remove(CSS_CLASSES$1.animated);
        wavesEl.removeEventListener(transitionEvent, onEnd, false);
        if (opts.end) {
            opts.end(evt);
        }
    };

    wavesEl.classList.remove(CSS_CLASSES$1.animated);
    var style = wavesEl.style;
    style.width = style.height = waveRadius + 'px';
    style.top = ry + 'px';
    style.left = rx + 'px';
    style['animation-duration'] = style['-webkit-animation-duration'] = style['-moz-animation-duration'] = style['-o-animation-duration'] = duration + 's';
    style.backgroundColor = color;
    style.opacity = initialOpacity;
    wavesEl.addEventListener(transitionEvent, onEnd, false);

    if (opts.start) {
        opts.start(e);
    }
    wavesEl.classList.add(CSS_CLASSES$1.animated);
};

var createView$1 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (opts.disabled) {
        return m('');
    }
    var initRipple = function initRipple(el, inited, context) {
        if (inited) {
            return;
        }
        ctrl.ripple(el);
        var parent = el.parentElement;
        if (!opts.inactive) {
            var onClick = function onClick(e) {
                makeRipple(e, ctrl, opts);
            };
            var endType = p.isTouch ? 'click' : 'mouseup';
            parent.addEventListener(endType, onClick, false);
            context.onunload = function () {
                parent.removeEventListener(endType, onClick, false);
            };
        }
    };
    var initWaves = function initWaves(waves, inited) {
        if (inited) {
            return;
        }
        ctrl.waves(waves);
    };
    var tag = opts.tag || 'div';
    var props = {
        class: [CSS_CLASSES$1.ripple, opts.constrained !== false ? CSS_CLASSES$1.constrained : null, opts.class].join(' '),
        id: opts.id || '',
        config: initRipple
    };
    var content = m('div', {
        class: CSS_CLASSES$1.mask
    }, m('div', {
        class: CSS_CLASSES$1.waves,
        config: initWaves
    }));
    return m(tag, props, content);
};

var component$1 = {
    controller: function controller() {
        return {
            ripple: m.prop(),
            waves: m.prop(),
            delegate: m.prop()
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$1(ctrl, opts);
    }
};

var vars$1 = {
    transition: 'box-shadow 0.18s ease-out',

    'shadow-top-z-1': 'none',
    'shadow-bottom-z-1': '0 1px 4px 0 rgba(0, 0, 0, 0.37)',

    'shadow-top-z-2': '0 2px 2px 0 rgba(0, 0, 0, 0.2)',
    'shadow-bottom-z-2': '0 6px 10px 0 rgba(0, 0, 0, 0.3)',

    'shadow-top-z-3': '0 11px 7px 0 rgba(0, 0, 0, 0.19)',
    'shadow-bottom-z-3': '0 13px 25px 0 rgba(0, 0, 0, 0.3)',

    'shadow-top-z-4': '0 14px 12px 0 rgba(0, 0, 0, 0.17)',
    'shadow-bottom-z-4': '0 20px 40px 0 rgba(0, 0, 0, 0.3)',

    'shadow-top-z-5': '0 17px 17px 0 rgba(0, 0, 0, 0.15)',
    'shadow-bottom-z-5': '0 27px 55px 0 rgba(0, 0, 0, 0.3)',

    'shadow-down-z-1': 'inset 0px 1px 2px -1px rgba(0, 0, 0, 0.15)',
    'shadow-down-z-2': 'inset 0px 4px 6px -3px rgba(0, 0, 0, 0.25)'
};

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var shadowDirective = function shadowDirective(dir) {
    return mixin.vendorize({
        'box-shadow': dir
    }, appConfig.prefixes_box_shadow);
};

var createStyles$2 = function createStyles(config) {
    return [{
        '.pe-shadow': [mixin.fit(), {
            'border-radius': 'inherit',
            'pointer-events': 'none',

            ' .pe-shadow__bottom, .pe-shadow__top': [mixin.fit(), {
                'border-radius': 'inherit'
            }],

            '&.pe-shadow--animated': {
                ' .pe-shadow__bottom, .pe-shadow__top': mixin.vendorize({
                    'transition': config.transition
                }, appConfig.prefixes_transition)
            }
        }, [1, 2, 3, 4, 5].map(function (index) {
            var _ref;

            return _ref = {}, _defineProperty$1(_ref, ' .pe-shadow__top.pe-shadow--z-' + index, shadowDirective(config['shadow-top-z-' + index])), _defineProperty$1(_ref, ' .pe-shadow__bottom.pe-shadow--z-' + index, shadowDirective(config['shadow-bottom-z-' + index])), _ref;
        })]
    }];
};

var layout$1 = (function (config) {
    return mixin.createStyles(config, createStyles$2);
});

// Does not contain color styles

var configFn$1 = componentConfig && componentConfig.shadow;
var config$1 = configFn$1 ? configFn$1(vars$1) : vars$1;
var id$1 = 'pe-shadow';

styler.add(id$1, layout$1(config$1));

var CSS_CLASSES$2 = {
    block: 'pe-shadow',
    topShadow: 'pe-shadow__top',
    bottomShadow: 'pe-shadow__bottom',
    animated: 'pe-shadow--animated',
    depth_n: 'pe-shadow--z-'
};

var classForDepth = function classForDepth() {
    var z = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return CSS_CLASSES$2.depth_n + Math.min(5, z);
};

var createView$2 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var depthClass = classForDepth(opts.z);
    var tag = opts.tag || 'div';
    var props = {
        class: [CSS_CLASSES$2.block, opts.animated ? CSS_CLASSES$2.animated : '', opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    var content = [opts.content ? opts.content : null, m('div', {
        class: [CSS_CLASSES$2.bottomShadow, depthClass].join(' ')
    }), m('div', {
        class: [CSS_CLASSES$2.topShadow, depthClass].join(' ')
    })];
    return m(tag, props, content);
};

var component$2 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$2(ctrl, opts);
    }
};

var style = [{
    '.pe-button': [mixin.vendorize({
        'user-select': 'none'
    }, appConfig.prefixes_user_select), {
        outline: 'none',
        padding: 0,
        'text-decoration': 'none',
        'text-align': 'center',
        cursor: 'pointer',

        '&.pe-button--selected, &.pe-button--disabled, &.pe-button--inactive': {
            cursor: 'default',
            'pointer-events': 'none'
        },

        ' .pe-button__content': {
            position: 'relative',
            'border-radius': 'inherit'
        },

        ' .pe-button__label': [mixin.fontSmoothing(), {
            position: 'relative',
            'z-index': 1, // stick above wash that has position absolute
            display: 'block',
            'border-radius': 'inherit',
            'pointer-events': 'none'
        }],

        ' .pe-button__wash, .pe-button__focus': [mixin.defaultTransition('background-color'), mixin.fit(), {
            'border-radius': 'inherit',
            'pointer-events': 'none'
        }],

        ' .pe-button__focus': {
            opacity: 0
        },

        '&.pe-button--focus': {
            ' .pe-button__focus': {
                opacity: 1
            }
        },

        ' .pe-button__wash': {
            'z-index': 1
        }
    }]
}];

var id$2 = 'pe-base-button';

styler.add(id$2, style);

var rgba = appConfig.rgba;

var touch_height = appConfig.unit_touch_height;
var height = 36;

var buttonConfig = {
    margin_h: appConfig.grid_unit,
    border_radius: appConfig.unit_item_border_radius,
    font_size: 14,
    font_weight: 500,
    outer_padding_v: (touch_height - height) / 2,
    padding_h: 2 * appConfig.grid_unit,
    padding_v: 11,
    min_width: 8 * appConfig.grid_unit_component,
    text_transform: 'uppercase',
    border_width: 0, // no border in MD, but used to correctly set the height when a theme does set a border

    color_light_flat_normal_background: 'transparent',
    color_light_flat_normal_text: rgba(appConfig.color_light_foreground, appConfig.blend_light_text_primary),
    color_light_flat_hover_background: rgba(appConfig.color_light_foreground, appConfig.blend_light_background_hover),
    color_light_flat_focus_background: rgba(appConfig.color_light_foreground, appConfig.blend_light_background_hover),
    color_light_flat_active_background: rgba(appConfig.color_light_foreground, appConfig.blend_light_background_active),
    color_light_flat_disabled_background: 'transparent',
    color_light_flat_disabled_text: rgba(appConfig.color_light_foreground, appConfig.blend_light_text_disabled),

    // border colors  may be set in theme; disabled by default
    // color_light_flat_normal_border: 'transparent',
    // color_light_flat_hover_border: 'transparent',
    // color_light_flat_active_border: 'transparent',
    // color_light_flat_disabled_border: 'transparent',

    color_light_raised_normal_background: '#E0E0E0',
    color_light_raised_normal_text: rgba(appConfig.color_light_foreground, appConfig.blend_light_text_primary),
    color_light_raised_hover_background: 'transparent',
    color_light_raised_focus_background: rgba(appConfig.color_light_foreground, appConfig.blend_light_background_hover),
    color_light_raised_active_background: rgba(appConfig.color_light_foreground, appConfig.blend_light_background_hover), // same as hover
    color_light_raised_disabled_background: rgba(appConfig.color_light_foreground, appConfig.blend_light_background_disabled),
    color_light_raised_disabled_text: rgba(appConfig.color_light_foreground, appConfig.blend_light_text_disabled),

    color_dark_flat_normal_background: 'transparent',
    color_dark_flat_normal_text: rgba(appConfig.color_dark_foreground, appConfig.blend_dark_text_primary),
    color_dark_flat_hover_background: rgba(appConfig.color_dark_foreground, appConfig.blend_dark_background_hover),
    color_dark_flat_focus_background: rgba(appConfig.color_dark_foreground, appConfig.blend_dark_background_hover),
    color_dark_flat_active_background: rgba(appConfig.color_dark_foreground, appConfig.blend_dark_background_active),
    color_dark_flat_disabled_background: 'transparent',
    color_dark_flat_disabled_text: rgba(appConfig.color_dark_foreground, appConfig.blend_dark_text_disabled),

    // border colors  may be set in theme; disabled by default
    // color_dark_flat_normal_border: 'transparent',
    // color_dark_flat_hover_border: 'transparent',
    // color_dark_flat_active_border: 'transparent',
    // color_dark_flat_disabled_border: 'transparent',

    color_dark_raised_normal_background: rgba(appConfig.color_primary),
    color_dark_raised_normal_text: rgba(appConfig.color_dark_foreground, appConfig.blend_dark_text_primary),
    color_dark_raised_hover_background: appConfig.color_primary_active,
    color_dark_raised_focus_background: appConfig.color_primary_active,
    color_dark_raised_active_background: appConfig.color_primary_dark,
    color_dark_raised_disabled_background: rgba(appConfig.color_dark_foreground, appConfig.blend_dark_background_disabled),
    color_dark_raised_disabled_text: rgba(appConfig.color_dark_foreground, appConfig.blend_dark_text_disabled)
};

var createStyles$3 = function createStyles(config) {
    return [{
        '.pe-button--text': {
            display: 'inline-block',
            'min-width': config.min_width + 'px',
            margin: '0 ' + config.margin_h + 'px',
            padding: config.outer_padding_v + 'px 0',
            background: 'transparent',
            border: 'none',

            ' .pe-button__content': {
                'border-width': 0,
                padding: '0 ' + config.padding_h + 'px',
                'border-radius': config.border_radius + 'px'
            },

            ' .pe-button__label': {
                padding: config.padding_v + 'px 0',
                'font-size': config.font_size + 'px',
                'line-height': config.font_size + 'px',
                'font-weight': config.font_weight,
                'text-transform': config.text_transform,
                'white-space': 'pre'
            },

            '&.pe-button--borders': {
                ' .pe-button__wash, pe-button__focus, .pe-ripple': mixin.fit(-1),

                ' .pe-button__content': {
                    'border-style': 'solid',
                    'border-width': '1px'
                },
                ' .pe-button__label': {
                    padding: config.padding_v - 1 + 'px 0'
                }
            }
        }
    }];
};

var layout$3 = (function (config) {
    return mixin.createStyles(config, createStyles$3);
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$1 = function style(config, tint, type) {
    var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    var normalBorder = config['color_' + tint + '_' + type + '_normal_border'] || 'transparent';
    var activeBorder = config['color_' + tint + '_' + type + '_active_border'] || normalBorder;
    var disabledBorder = config['color_' + tint + '_' + type + '_disabled_border'] || normalBorder;
    return [_defineProperty$2({}, scope + '.pe-button', {
        '&, &:link, &:visited': {
            color: config['color_' + tint + '_' + type + '_normal_text']
        },

        ' .pe-button__content': {
            'background-color': config['color_' + tint + '_' + type + '_normal_background'],
            'border-color': normalBorder
        },

        '&.pe-button--disabled': {
            color: config['color_' + tint + '_' + type + '_disabled_text'],

            ' .pe-button__content': {
                'background-color': config['color_' + tint + '_' + type + '_disabled_background'],
                'border-color': disabledBorder
            }
        },

        '&.pe-button--selected': {
            ' .pe-button__content': {
                'background-color': config['color_' + tint + '_' + type + '_active_background'],
                'border-color': activeBorder
            },
            ' .pe-button__focus': {
                opacity: 1,
                'background-color': config['color_' + tint + '_' + type + '_focus_background']
            }
        },

        '&.pe-button--focus': {
            ' .pe-button__focus': {
                opacity: 1,
                'background-color': config['color_' + tint + '_' + type + '_focus_background']
            }
        }
    })];
};

var noTouch = function noTouch(config, tint, type) {
    var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    var normalBorder = config['color_' + tint + '_' + type + '_normal_border'];
    var hoverBorder = config['color_' + tint + '_' + type + '_normal_border'] || normalBorder;
    return [_defineProperty$2({}, scope + '.pe-button:hover', {
        '&:not(.pe-button--selected) .pe-button__wash': {
            'background-color': config['color_' + tint + '_' + type + '_hover_background'],
            'border-color': hoverBorder
        }
    })];
};

var createStyles$4 = function createStyles(config) {
    return [style$1(config, 'light', 'flat'), style$1(config, 'light', 'raised', '.pe-button--raised'), {
        'html.pe-no-touch': [noTouch(config, 'light', 'flat', ' '), noTouch(config, 'light', 'raised', ' .pe-button--raised')]
    }, {
        '.pe-dark-theme': [
        // inside dark theme
        style$1(config, 'dark', 'flat', ' '),
        // has dark theme
        style$1(config, 'dark', 'flat', '&'),
        //
        style$1(config, 'dark', 'raised', ' .pe-button--raised')]
    }, {
        'html.pe-no-touch .pe-dark-theme': [noTouch(config, 'dark', 'flat', ' '), noTouch(config, 'dark', 'flat', '&'), noTouch(config, 'dark', 'raised', ' .pe-button--raised')]
    }];
};

var color = (function (config) {
    return mixin.createStyles(config, createStyles$4);
});

var configFn$2 = componentConfig && componentConfig.button;
var config$2 = configFn$2 ? configFn$2(buttonConfig) : buttonConfig;
var id$3 = 'pe-button-text';

styler.add(id$3, layout$3(config$2), color(config$2));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES = {
    block: 'pe-button pe-button--text',
    content: 'pe-button__content',
    label: 'pe-button__label',
    raised: 'pe-button--raised',
    wash: 'pe-button__wash',
    focus: 'pe-button__focus',
    selected: 'pe-button--selected',
    disabled: 'pe-button--disabled',
    borders: 'pe-button--borders',
    inactive: 'pe-button--inactive',
    focusState: 'pe-button--focus'
};

var MAX_Z = 5;

var startType = window.PointerEvent ? 'pointerdown' : 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch ? 'touchstart' : 'mousedown';
var endType = window.PointerEvent ? 'pointerup' : 'ontouchend' in window || window.DocumentTouch && document instanceof window.DocumentTouch ? 'touchend' : 'mouseup';

var tapStart = void 0;
var tapEnd = void 0;
var tapEndAll = void 0;
var downButtons = [];

var animateZ = function animateZ(ctrl, opts, name) {
    var baseZ = ctrl.baseZ();
    var increase = opts.increase || 1;
    var z = ctrl.z();
    if (name === 'down' && baseZ !== 5) {
        z = z + increase;
        z = Math.min(z, MAX_Z);
    } else if (name === 'up') {
        z = z - increase;
        z = Math.max(z, baseZ);
    }
    if (z !== ctrl.z()) {
        ctrl.z(z);
        m.redraw(); // make animation visible
    }
};

var inactivate = function inactivate(ctrl, opts) {
    ctrl.inactive = true;
    m.redraw();
    setTimeout(function () {
        ctrl.inactive = false;
        m.redraw();
    }, opts.inactivate * 1000);
};

var initTapEvents = function initTapEvents(el, ctrl, opts) {
    var tapHandler = function tapHandler(ctrl, opts, name) {
        if (name === 'down') {
            downButtons.push({ ctrl: ctrl, opts: opts });
        } else if (name === 'up') {
            if (opts.inactivate && !ctrl.inactive) {
                inactivate(ctrl, opts);
            }
        }
        // no z animation on touch
        if (opts.animateOnTap && !p.isTouch) {
            animateZ(ctrl, opts, name);
        }
    };
    tapStart = function tapStart() {
        return tapHandler(ctrl, opts, 'down');
    };
    tapEnd = function tapEnd() {
        return tapHandler(ctrl, opts, 'up');
    };
    tapEndAll = function tapEndAll() {
        downButtons.map(function (btn) {
            tapHandler(btn.ctrl, btn.opts, 'up');
        });
        downButtons = [];
    };
    el.addEventListener(startType, tapStart);
    el.addEventListener(endType, tapEnd);
    window.addEventListener(endType, tapEndAll);
};

var clearTapEvents = function clearTapEvents(el) {
    el.removeEventListener(startType, tapStart);
    el.removeEventListener(endType, tapEnd);
    window.removeEventListener(endType, tapEndAll);
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var noink = opts.ink !== undefined && opts.ink === false;
    var disabled = opts.disabled;
    var tag = opts.tag || 'a';
    ctrl.inactive = opts.inactive !== undefined ? opts.inactive === false ? false : true : ctrl.inactive;
    var tabIndex = disabled || ctrl.inactive ? -1 : opts.tabindex || 0;

    // handle multiple configs:
    // - passed as param in the url Object
    // - passed as opts.config
    // - the default button config
    var buttonConfig = function buttonConfig(el, isInited, context) {
        if (isInited) {
            return;
        }
        ctrl.el = el;
        if (!disabled && !ctrl.inactive) {
            initTapEvents(el, ctrl, _extends({}, opts, { animateOnTap: opts.animateOnTap !== false ? true : false }));
            context.onunload = function () {
                clearTapEvents(el);
            };
        }
    };
    var optsConfig = opts.config || function () {};
    var urlConfig = opts.url && opts.url.config ? opts.url.config : function () {};

    var props = _extends({}, {
        class: [opts.parentClass || CSS_CLASSES.block, opts.selected ? CSS_CLASSES.selected : null, disabled ? CSS_CLASSES.disabled : null, ctrl.inactive ? CSS_CLASSES.inactive : null, opts.borders ? CSS_CLASSES.borders : null, opts.raised ? CSS_CLASSES.raised : null, ctrl.focus ? CSS_CLASSES.focusState : null, opts.class].join(' '),
        id: opts.id || '',
        tabindex: tabIndex,
        // handle focus events
        onfocus: function onfocus() {
            return ctrl.focus = !ctrl.mouseover;
        },
        onblur: function onblur() {
            return ctrl.focus = false;
        },
        // don't show focus on click (detected by not being in mouse over state)
        onmouseover: function onmouseover() {
            return ctrl.mouseover = true;
        },
        onmouseout: function onmouseout() {
            return ctrl.mouseover = false;
        },
        // if focus, dispatch click event on ENTER
        onkeydown: function onkeydown(e) {
            if (e.which === 13 && ctrl.focus && ctrl.el) {
                // ENTER
                var event = new MouseEvent('click', {
                    view: window,
                    bubbles: true,
                    cancelable: true
                });
                ctrl.el.dispatchEvent(event);
            }
        }
    }, opts.url ? opts.url : null, opts.formaction ? { formaction: opts.formaction } : null, opts.type ? { type: opts.type } : null, opts.events ? opts.events : null, {
        config: function config() {
            return [buttonConfig.apply(undefined, arguments), optsConfig.apply(undefined, arguments), urlConfig.apply(undefined, arguments)];
        }
    }, disabled ? {
        disabled: true
    } : null);

    var label = opts.content ? opts.content : opts.label ? _typeof(opts.label) === 'object' ? opts.label : m('div', { class: CSS_CLASSES.label }, opts.label) : null;

    var noWash = disabled || opts.wash !== undefined && !opts.wash;
    var wash = !noWash;
    var rippleOpts = _extends({}, opts.ripple, { inactive: noink });
    var content = m('div', {
        'class': CSS_CLASSES.content
    }, [opts.raised && !disabled ? m.component(component$2, {
        z: ctrl.z(),
        animated: true
    }) : null,
    // ripple
    disabled ? null : m.component(component$1, rippleOpts),
    // hover
    wash ? m('div', { class: CSS_CLASSES.wash }) : null,
    // focus
    disabled ? null : m('div', { class: CSS_CLASSES.focus }), label]);
    return m(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var z = opts.z !== undefined ? opts.z : 1;

        return {
            el: undefined,
            baseZ: m.prop(z),
            z: m.prop(z),
            inactive: undefined,
            focus: false,
            mouseover: false
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

// No styles for this component

var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$5 = {
    block: 'pe-svg'
};

var createView$5 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = _extends$4({}, {
        class: [CSS_CLASSES$5.block, opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    }, opts.events ? opts.events : null);
    var content = opts.content;
    return m(tag, props, [opts.before, content, opts.after]);
};

var component$6 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$5(ctrl, opts);
    }
};

var vars$2 = {
    size_small: appConfig.unit_icon_size_small,
    size_regular: appConfig.unit_icon_size,
    size_medium: appConfig.unit_icon_size_medium,
    size_large: appConfig.unit_icon_size_large
};

var iconSizesPx = function iconSizesPx() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : appConfig.unit_icon_size;
    return {
        width: size + 'px',
        height: size + 'px'
    };
};

var createStyles$5 = function createStyles(config) {
    return [{
        '.pe-icon': {
            display: 'inline-block',
            'vertical-align': 'middle',
            'background-repeat': 'no-repeat',
            fill: 'currentcolor',
            position: 'relative',
            'font-size': 0,
            'line-height': 0,

            '&.pe-icon--avatar img': {
                border: 'none',
                'border-radius': '50%',
                width: '100%',
                height: '100%'
            },

            ' i': [mixin.fit(), {
                display: 'block',
                'font-size': 'inherit',
                color: 'inherit',
                'line-height': 'inherit',
                height: '100%',

                ' img': {
                    height: '100%'
                },

                ' svg': {
                    width: '100%',
                    height: '100%',
                    fill: 'currentcolor',
                    color: 'inherit',

                    ' path, rect, polygon': {
                        '&:not([fill=none])': {
                            fill: 'currentcolor'
                        }
                    }
                }
            }],

            '&.pe-icon--small': iconSizesPx(config.size_small),
            '&.pe-icon--regular': iconSizesPx(config.size_regular),
            '&.pe-icon--medium': iconSizesPx(config.size_medium),
            '&.pe-icon--large': iconSizesPx(config.size_large)
        }
    }];
};

var layout$4 = (function (config) {
    return mixin.createStyles(config, createStyles$5);
});

// Does not contain color styles

var configFn$3 = componentConfig && componentConfig.icon;
var config$3 = configFn$3 ? configFn$3(vars$2) : vars$2;
var id$4 = 'pe-icon';

styler.add(id$4, layout$4(config$3));

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$4 = {
    icon: 'pe-icon',
    avatar: 'pe-icon--avatar',
    small: 'pe-icon--small',
    regular: 'pe-icon--regular',
    medium: 'pe-icon--medium',
    large: 'pe-icon--large'
};

var typeClasses = {
    small: CSS_CLASSES$4.small,
    regular: CSS_CLASSES$4.regular,
    medium: CSS_CLASSES$4.medium,
    large: CSS_CLASSES$4.large
};

var classForType = function classForType() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'regular';

    return typeClasses[mode];
};

var layoutContent = function layoutContent(opts) {
    if (opts.content) {
        return opts.content;
    } else if (opts.svg) {
        var svgOpts = _extends$3({}, opts.svg);
        svgOpts.tag = svgOpts.tag || 'i';
        return m(component$6, svgOpts);
    } else if (opts.msvg) {
        return m('i.pe-svg', m.trust(opts.msvg));
    } else {
        return m('i', m('img', {
            src: opts.src
        }));
    }
};

var createView$4 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = _extends$3({}, {
        class: [CSS_CLASSES$4.icon, classForType(opts.type), opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    }, opts.events ? opts.events : null);
    var content = layoutContent(opts);
    return m(tag, props, [opts.before, content, opts.after]);
};

var component$5 = {
    controller: function controller() {
        m.redraw.strategy('none');
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$4(ctrl, opts);
    }
};

var rgba$1 = appConfig.rgba;

// SPECS
// heights:
// single line: 48
// single line, dense: 40
// single line, with icon: 48
// single line, with icon, dense: 40
// single line, with avatar: 56
// single line, with avatar, dense: 48
// two-line: 72
// two-line, dense: 60
// three-line: 88
// three-line, dense: 76


var single_height = 48;
var padding = 8;
var single_with_icon_height = 56;

var vars$3 = {
    single_height: single_height,
    single_line_height: single_height - 2 * padding - (2 * 5 + 1),
    single_with_icon_height: single_with_icon_height,
    single_with_icon_line_height: single_with_icon_height - 2 * padding - (2 * 5 + 1),
    padding: 13,
    compact_padding: 9,
    subtitle_line_count: 1,
    has_subtitle_padding: 15,
    high_subtitle_line_count: 2,
    has_high_subtitle_padding: 13,
    front_item_width: 72,
    side_padding: 2 * appConfig.grid_unit_component,
    font_size_title: 16,
    font_size_subtitle: 14,
    line_height_subtitle: 20,
    font_size_list_header: 14,
    font_size_small: 12,

    color_light_title: rgba$1(appConfig.color_light_foreground, appConfig.blend_light_text_primary),
    color_light_subtitle: rgba$1(appConfig.color_light_foreground, appConfig.blend_light_text_secondary),
    color_light_info: rgba$1(appConfig.color_light_foreground, appConfig.blend_light_text_tertiary),
    color_light_text_disabled: rgba$1(appConfig.color_light_foreground, appConfig.blend_light_text_disabled),
    color_light_list_header: rgba$1(appConfig.color_light_foreground, appConfig.blend_light_text_tertiary),
    color_light_background_hover: rgba$1(appConfig.color_light_foreground, appConfig.blend_light_background_hover),
    color_light_background_selected: rgba$1(appConfig.color_light_foreground, appConfig.blend_light_background_hover),

    color_dark_title: rgba$1(appConfig.color_dark_foreground, appConfig.blend_dark_text_primary),
    color_dark_subtitle: rgba$1(appConfig.color_dark_foreground, appConfig.blend_dark_text_secondary),
    color_dark_info: rgba$1(appConfig.color_dark_foreground, appConfig.blend_dark_text_tertiary),
    color_dark_text_disabled: rgba$1(appConfig.color_dark_foreground, appConfig.blend_dark_text_disabled),
    color_dark_list_header: rgba$1(appConfig.color_dark_foreground, appConfig.blend_dark_text_tertiary),
    color_dark_background_hover: rgba$1(appConfig.color_dark_foreground, appConfig.blend_dark_background_hover),
    color_dark_background_selected: rgba$1(appConfig.color_dark_foreground, appConfig.blend_dark_background_hover)
};

var layout$6 = [{
    'display': '-webkit-box'
}, {
    'display': '-moz-box'
}, {
    'display': '-ms-flexbox',
    '-ms-flex-preferred-size': 'initial' // IE10
}, {
    'display': '-webkit-flex'
}, {
    'display': 'flex'
}];

var layoutInline = [layout$6, {
    'display': '-ms-inline-flexbox'
}, {
    'display': '-webkit-inline-flex'
}, {
    'display': 'inline-flex'
}];

var layoutHorizontal = [layout$6, {
    '-ms-flex-direction': 'row',
    '-webkit-flex-direction': 'row',
    'flex-direction': 'row'
}];

var layoutHorizontalReverse = [layout$6, {
    '-ms-flex-direction': 'row-reverse',
    '-webkit-flex-direction': 'row-reverse',
    'flex-direction': 'row-reverse'
}];

var layoutVertical = [layout$6, {
    '-ms-flex-direction': 'column',
    '-webkit-flex-direction': 'column',
    'flex-direction': 'column'
}];

var layoutVerticalReverse = [layout$6, {
    '-ms-flex-direction': 'column-reverse',
    '-webkit-flex-direction': 'column-reverse',
    'flex-direction': 'column-reverse'
}];

var layoutWrap = [layout$6, {
    '-ms-flex-wrap': 'wrap',
    '-webkit-flex-wrap': 'wrap',
    'flex-wrap': 'wrap'
}];

var layoutWrapReverse = [layout$6, {
    '-ms-flex-wrap': 'wrap-reverse',
    '-webkit-flex-wrap': 'wrap-reverse',
    'flex-wrap': 'wrap-reverse'
}];

var layoutStart = [layout$6, {
    '-ms-flex-align': 'start',
    '-webkit-align-items': 'flex-start',
    'align-items': 'flex-start'
}];

var layoutCenter = [layout$6, {
    '-ms-flex-align': 'center',
    '-webkit-align-items': 'center',
    'align-items': 'center'
}];

var layoutEnd = [layout$6, {
    '-ms-flex-align': 'end',
    '-webkit-align-items': 'flex-end',
    'align-items': 'flex-end'
}];

var layoutJustified = [layout$6, {
    '-ms-flex-line-pack': 'stretch', // IE10
    '-ms-flex-pack': 'justify',
    '-webkit-justify-content': 'space-between',
    'justify-content': 'space-between'
}];

var layoutStartJustified = [layout$6, {
    '-ms-flex-align': 'start', // IE10
    '-ms-flex-pack': 'start',
    '-webkit-justify-content': 'flex-start',
    'justify-content': 'flex-start'
}];

var layoutCenterJustified = [layout$6, {
    '-ms-flex-pack': 'center',
    '-webkit-justify-content': 'center',
    'justify-content': 'center'
}];

var layoutEndJustified = [layout$6, {
    '-ms-flex-pack': 'end',
    '-webkit-justify-content': 'flex-end',
    'justify-content': 'flex-end'
}];

var layoutCenterCenter = [layoutCenterJustified, layoutCenter];

var layoutAroundJustified = [layout$6, {
    '-ms-flex-pack': 'distribute',
    '-webkit-justify-content': 'space-around',
    'justify-content': 'space-around'
}];

var flex = function flex() {
    var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return [{
        '-webkit-box-flex': num
    }, {
        '-moz-box-flex': num
    }, {
        '-webkit-flex': num
    }, {
        '-ms-flex': num
    }, {
        'flex': num
    }, num === 1 ? {
        '-webkit-flex-basis': '0.000000001px'
    } : {}, num === 1 ? {
        'flex-basis': '0.000000001px'
    } : {}];
};

var flexAuto = {
    '-ms-flex': '1 1 auto',
    '-webkit-flex-basis': 'auto',
    'flex-basis': 'auto'
};

var flexAutoVertical = {
    '-ms-flex': '1 1 auto',
    '-webkit-flex-basis': 'auto',
    'flex-basis': 'auto'
};

var flexIndex = function flexIndex(index) {
    return {
        '-ms-flex': index,
        '-webkit-flex': index,
        'flex': index
    };
};

var flexGrow = function flexGrow(value) {
    return {
        '-webkit-flex-grow': value,
        'flex-grow': value
    };
};

var selfStart = {
    '-ms-flex-item-align': 'start', // IE10
    '-ms-align-self': 'flex-start',
    '-webkit-align-self': 'flex-start',
    'align-self': 'flex-start'
};

var selfCenter = {
    '-ms-flex-item-align': 'center', // IE10
    '-ms-align-self': 'center',
    '-webkit-align-self': 'center',
    'align-self': 'center'
};

var selfEnd = {
    '-ms-flex-item-align': 'end', // IE10
    '-ms-align-self': 'flex-end',
    '-webkit-align-self': 'flex-end',
    'align-self': 'flex-end'
};

var selfStretch = {
    '-ms-flex-item-align': 'stretch', // IE10
    '-ms-align-self': 'stretch',
    '-webkit-align-self': 'stretch',
    'align-self': 'stretch'
};

var flex$1 = {
    flex: flex,
    flexAuto: flexAuto,
    flexAutoVertical: flexAutoVertical,
    flexIndex: flexIndex,
    flexGrow: flexGrow,
    layout: layout$6,
    layoutAroundJustified: layoutAroundJustified,
    layoutCenter: layoutCenter,
    layoutCenterCenter: layoutCenterCenter,
    layoutCenterJustified: layoutCenterJustified,
    layoutEnd: layoutEnd,
    layoutEndJustified: layoutEndJustified,
    layoutHorizontal: layoutHorizontal,
    layoutHorizontalReverse: layoutHorizontalReverse,
    layoutInline: layoutInline,
    layoutJustified: layoutJustified,
    layoutStart: layoutStart,
    layoutStartJustified: layoutStartJustified,
    layoutVertical: layoutVertical,
    layoutVerticalReverse: layoutVerticalReverse,
    layoutWrap: layoutWrap,
    layoutWrapReverse: layoutWrapReverse,
    selfCenter: selfCenter,
    selfEnd: selfEnd,
    selfStart: selfStart,
    selfStretch: selfStretch
};

var paddingH = function paddingH(h) {
    return {
        'padding-left': h + 'px',
        'padding-right': h + 'px'
    };
};

var paddingV = function paddingV(top, bottom) {
    return {
        'padding-top': top + 'px',
        'padding-bottom': (bottom || top) + 'px'
    };
};

var createStyles$6 = function createStyles(config) {
    return [{
        '.pe-list-tile': [flex$1.layout, {
            position: 'relative',
            overflow: 'hidden',

            '&.pe-list-tile--sticky': [mixin.sticky(2)],

            ' .pe-list-tile__primary, .pe-list-tile__secondary': [flex$1.layoutHorizontal, {
                ' a&': {
                    'text-decoration': 'none',
                    color: 'inherit',
                    border: 'none'
                }
            }],

            ' .pe-list-tile__primary': [flex$1.flex(), {
                position: 'relative',
                'z-index': 1, // in case a ripple is used (positioned absolute)

                ' .pe-list-tile__content:not(.pe-list-tile__content--front)': [flex$1.flex(), paddingV(config.padding, config.padding + 1)]
            }],

            ' .pe-list-tile__secondary': {
                'text-align': 'right',
                'font-size': config.font_size_title + 'px',
                position: 'relative',
                'z-index': 1 // in case a ripple is used (positioned absolute)
            },

            ' .pe-list-tile__content': [flex$1.layoutVertical, flex$1.selfCenter, paddingH(config.side_padding), {
                '&.pe-list-tile__content--front': [paddingV(config.padding - 5), {
                    width: config.front_item_width + 'px'
                }],

                ' small': {
                    'font-size': config.font_size_small + 'px'
                }
            }],

            ' .pe-list-tile__content--front + .pe-list-tile__content': {
                'padding-left': 0
            },

            ' .pe-list-tile__title': [mixin.ellipsis(1), {
                'font-size': config.font_size_title + 'px',
                'font-weight': appConfig.font_weight_normal,
                'line-height': config.single_line_height + 'px'
            }],

            ' .pe-list-tile__subtitle': [mixin.ellipsis(config.subtitle_line_count, config.line_height_subtitle), {
                'font-size': config.font_size_subtitle + 'px',
                'line-height': config.line_height_subtitle + 'px',

                '&.pe-list-tile__subtitle--high': [mixin.ellipsis(config.high_subtitle_line_count, config.line_height_subtitle), {
                    'white-space': 'normal'
                }]
            }],

            '&.pe-list-tile--selected, &.pe-list-tile--disabled': {
                cursor: 'default'
            },

            '&.pe-list-tile--subtitle': {
                ' .pe-list-tile__content': [paddingV(config.has_subtitle_padding, config.has_subtitle_padding + 1), {
                    ' .pe-list-tile__title': {
                        padding: 0
                    }
                }]
            },

            '&.pe-list-tile--high-subtitle': {
                ' .pe-list-tile--high-subtitle .pe-list-tile__secondary': [flex$1.layoutHorizontal, flex$1.layoutStart],
                ' .pe-list-tile__content': [flex$1.selfStart, paddingV(config.has_high_subtitle_padding, config.has_high_subtitle_padding + 1), {
                    ' .pe-list-tile__title': {
                        padding: 0
                    }
                }]
            },

            // List header
            '&.pe-list__header': {
                height: config.single_height + 'px',

                ' .pe-list-tile__content': {
                    'padding-top': 0,
                    'padding-bottom': 0
                },
                ' .pe-list-tile__title': [mixin.ellipsis(1, config.single_height), {
                    'font-size': config.font_size_list_header + 'px',
                    'font-weight': appConfig.font_weight_medium,
                    'line-height': config.single_height + 'px',
                    padding: 0
                }]
            },

            // Compact list

            ' .pe-list--compact &, &.pe-list-tile--compact': {
                '&:not(.pe-list__header)': {
                    ' .pe-list-tile__content': paddingV(config.compact_padding, config.compact_padding + 1)
                }
            },

            // Firefox only
            '@supports (-moz-appearance:none) and (display:contents)': {
                ' .pe-list-tile__primary, .pe-list-tile__content': {
                    overflow: 'hidden'
                }
            },

            // Menu

            '.pe-dialog .pe-menu__content &': {
                ' .pe-list-tile__title': mixin.ellipsis('none')
            },

            '.pe-menu__content &': {
                '&:not(.pe-list-tile--disabled)': {
                    cursor: 'default',

                    '&, .pe-list-tile__primary, .pe-list-tile__secondary': {
                        ' .pe-list-tile__title, .pe-list-tile__subtitle': [mixin.vendorize({
                            'user-select': 'none'
                        }, appConfig.prefixes_user_select)]
                    }
                }
            },

            // Non-touch

            'html.pe-no-touch .pe-list--hoverable &, \
                html.pe-no-touch .pe-list--selectable &, \
                html.pe-no-touch &.pe-list-tile--hoverable, \
                html.pe-no-touch &.pe-list-tile--selectable': {
                '&:not(.pe-list__header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover': {
                    cursor: 'pointer'
                }
            }
        }]
    }];
};

var layout$5 = (function (config) {
    return mixin.createStyles(config, createStyles$6);
});

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$2 = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$3({}, scope + '.pe-list-tile', {
        ' .pe-list-tile__title': {
            color: config['color_' + tint + '_title']
        },

        '&.pe-list__header': {
            'background-color': 'inherit',

            ' .pe-list-tile__title': {
                color: config['color_' + tint + '_list_header']
            }
        },

        ' .pe-list-tile__content, .pe-list-tile__subtitle': {
            color: config['color_' + tint + '_subtitle']
        },

        '&.pe-list-tile--disabled': {
            '&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle': {
                color: config['color_' + tint + '_text_disabled']
            }
        },
        '&.pe-list-tile--selected': {
            'background-color': config['color_' + tint + '_background_selected']
        }
    })];
};

var noTouch$1 = function noTouch(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$3({}, scope + '.pe-list-tile', {
        '&:not(.pe-list__header):not(.pe-list-tile--disabled):hover': {
            'background-color': config['color_' + tint + '_background_hover']
        }
    })];
};

var createStyles$7 = function createStyles(config) {
    return [style$2(config, 'light'), {
        'html.pe-no-touch': [noTouch$1(config, 'light', ' .pe-list--hoverable'), noTouch$1(config, 'light', ' .pe-list--hoverable ')]
    }, {
        '.pe-dark-theme': [
        // inside dark theme
        style$2(config, 'dark', ' '),
        // has dark theme
        style$2(config, 'dark', '&')]
    }, {
        'html.pe-no-touch .pe-dark-theme': [noTouch$1(config, 'dark', ' .pe-list-tile--hoverable'), noTouch$1(config, 'dark', '.pe-list--hoverable '), noTouch$1(config, 'dark', ' .pe-list--hoverable ')],
        'html.pe-no-touch .pe-list--hoverable .pe-dark-theme': noTouch$1(config, 'dark')
    }];
};

var color$1 = (function (config) {
    return mixin.createStyles(config, createStyles$7);
});

var configFn$4 = componentConfig && componentConfig['list-tile'];
var config$4 = configFn$4 ? configFn$4(vars$3) : vars$3;
var id$5 = 'pe-list-tile';

styler.add(id$5, layout$5(config$4), color$1(config$4));

var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$6 = {
    block: 'pe-list-tile',
    primary: 'pe-list-tile__primary',
    secondary: 'pe-list-tile__secondary',
    content: 'pe-list-tile__content',
    contentFront: 'pe-list-tile__content--front',
    title: 'pe-list-tile__title',
    subtitle: 'pe-list-tile__subtitle',
    highSubtitle: 'pe-list-tile__subtitle--high',
    selected: 'pe-list-tile--selected',
    disabled: 'pe-list-tile--disabled',
    sticky: 'pe-list-tile--sticky',
    hasSubtitle: 'pe-list-tile--subtitle',
    hasHighSubtitle: 'pe-list-tile--high-subtitle',
    hasFront: 'pe-list-tile--front',
    isCompact: 'pe-list-tile--compact',
    isHoverable: 'pe-list-tile--hoverable',
    isSelectable: 'pe-list-tile--selectable'
};

var parsePrimaryContent = function parsePrimaryContent(opts) {
    var tag = opts.tag ? opts.tag : opts.url ? 'a' : 'div';

    var frontComp = opts.front ? m('div', {
        class: CSS_CLASSES$6.content + ' ' + CSS_CLASSES$6.contentFront
    }, opts.front) : opts.indent ? m('div', {
        class: CSS_CLASSES$6.content + ' ' + CSS_CLASSES$6.contentFront
    }) : null;

    return m(tag, _extends$5({}, {
        class: CSS_CLASSES$6.primary
    }, opts.url, opts.events), [frontComp, m('div', {
        class: CSS_CLASSES$6.content
    }, [opts.content ? opts.content : null, opts.title ? m('div', { class: CSS_CLASSES$6.title }, opts.title) : null, opts.subtitle ? m('div', { class: CSS_CLASSES$6.subtitle }, opts.subtitle) : null, opts.highSubtitle ? m('div', { class: CSS_CLASSES$6.subtitle + ' ' + CSS_CLASSES$6.highSubtitle }, opts.highSubtitle) : null])]);
};

var parseSecondaryContent = function parseSecondaryContent(opts) {
    var secondaryOpts = opts.secondary || {};
    var tag = void 0;
    if (secondaryOpts.tag) {
        tag = secondaryOpts.tag;
    } else {
        if (secondaryOpts.url) {
            tag = 'a';
        } else {
            tag = 'div';
        }
    }
    return m(tag, _extends$5({}, {
        class: CSS_CLASSES$6.secondary
    }, secondaryOpts.url, secondaryOpts.events), m('div', {
        class: CSS_CLASSES$6.content
    }, [secondaryOpts.icon ? m(component$5, secondaryOpts.icon) : null, secondaryOpts.content ? secondaryOpts.content : null]));
};

var createView$6 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';

    var heightClass = opts.subtitle ? CSS_CLASSES$6.hasSubtitle : opts.highSubtitle ? CSS_CLASSES$6.hasHighSubtitle : opts.front || opts.indent ? CSS_CLASSES$6.hasFront : null;

    var props = {
        class: [CSS_CLASSES$6.block, opts.selected ? CSS_CLASSES$6.selected : null, opts.disabled ? CSS_CLASSES$6.disabled : null, opts.sticky ? CSS_CLASSES$6.sticky : null, opts.compact ? CSS_CLASSES$6.isCompact : null, opts.hoverable ? CSS_CLASSES$6.isHoverable : null, opts.selectable ? CSS_CLASSES$6.isSelectable : null, heightClass, opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
        // events and url are attached to primary content to not interfere with controls
    };
    var content = [opts.ink && !opts.disabled ? m(component$1, opts.ripple) : null, parsePrimaryContent(opts), opts.secondary ? parseSecondaryContent(opts) : null];
    return m(tag, props, [opts.before, content, opts.after]);
};

var component$7 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$6(ctrl, opts);
    }
};

var rgba$2 = appConfig.rgba;

var padding_v = 24;
var padding_actions_v = 8;
var actions_button_margin_v = 2;

var vars$4 = {
    image_size_small: 1 * 80,
    image_size_regular: 1.4 * 80,
    image_size_medium: 2 * 80,
    image_size_large: 3 * 80,
    border_radius: appConfig.unit_block_border_radius,
    padding_h: 16,
    offset_small_padding_v: padding_v - 16,
    padding_actions_h: 8,
    title_padding_h: 16,
    title_padding_v: 24,
    tight_title_padding_bottom: 16,
    text_padding_h: 16,
    text_padding_v: 16,
    text_padding_bottom: 24,
    tight_text_padding_bottom: 16,
    subtitle_line_height_padding_bottom: 7,
    text_line_height_padding_top: 6,
    text_line_height_padding_bottom: 7,
    one_line_height_with_icon: 72,
    icon_element_width: 72 - 4,
    one_line_padding_v: 8,
    actions_padding_v: padding_actions_v - 6,
    actions_button_margin_v: actions_button_margin_v,
    actions_vertical_padding_v: padding_actions_v - actions_button_margin_v,

    color_light_main_background: rgba$2(appConfig.color_light_background),
    color_light_title_text: rgba$2(appConfig.color_light_foreground, appConfig.blend_light_text_primary),
    color_light_subtitle_text: rgba$2(appConfig.color_light_foreground, appConfig.blend_light_text_secondary),
    color_light_text: rgba$2(appConfig.color_light_foreground, appConfig.blend_light_text_regular),
    color_light_actions_border: rgba$2(appConfig.color_light_foreground, appConfig.blend_light_border_light),
    color_light_overlay_background: rgba$2(appConfig.color_light_foreground, appConfig.blend_light_overlay_background),

    color_dark_main_background: rgba$2(appConfig.color_dark_background),
    color_dark_title_text: rgba$2(appConfig.color_dark_foreground, appConfig.blend_dark_text_primary),
    color_dark_subtitle_text: rgba$2(appConfig.color_dark_foreground, appConfig.blend_dark_text_secondary),
    color_dark_text: rgba$2(appConfig.color_dark_foreground, appConfig.blend_dark_text_regular),
    color_dark_actions_border: rgba$2(appConfig.color_dark_foreground, appConfig.blend_dark_border_light),
    color_dark_overlay_background: rgba$2(appConfig.color_dark_foreground, appConfig.blend_dark_overlay_background)
};

var createStyles$8 = function createStyles(config) {
    return [{
        '.pe-card': {
            display: 'block',
            position: 'relative',
            'border-radius': config.border_radius + 'px',

            ' .pe-card__media': {
                position: 'relative',
                overflow: 'hidden',
                'border-top-left-radius': 'inherit',
                'border-top-right-radius': 'inherit',
                'z-index': 1, // makes rounded corners on absolute imgages work

                '&.pe-card__media--landscape': {
                    'padding-bottom': 100 / 16 * 9 + '%'
                },
                '&.pe-card__media--square': {
                    'padding-bottom': '100%'
                },
                '&:last-child': {
                    '&, img': {
                        'border-bottom-left-radius': config.border_radius + 'px',
                        'border-bottom-right-radius': config.border_radius + 'px'
                    }
                },
                ' img': [mixin.fit(), {
                    display: 'none',
                    width: '100%',

                    '&.pe-card__media--crop-x': {
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                    },
                    '&.pe-card__media--crop-y': {
                        height: '100%',
                        width: 'auto',
                        display: 'block'
                    }
                }]
            },

            ' .pe-card__header + .pe-card__media': {
                'border-top-left-radius': 0,
                'border-top-right-radius': 0
            },

            ' .pe-card__primary__media': {
                margin: '16px 16px 0 16px',

                ' .pe-card__media--small': {
                    width: config.image_size_small + 'px'
                },
                ' .pe-card__media--regular': {
                    width: config.image_size_regular + 'px'
                },
                ' .pe-card__media--medium': {
                    width: config.image_size_medium + 'px'
                },
                ' .pe-card__media--large': {
                    width: config.image_size_large + 'px',
                    'margin-bottom': '16px'
                },
                ' .pe-card__media': {
                    '&, img': {
                        'border-radius': 0
                    }
                },

                ' .shadow + &': {
                    // first child
                    '&, img': {
                        'border-top-left-radius': config.border_radius + 'px',
                        'border-top-right-radius': config.border_radius + 'px'
                    }
                }
            },

            ' .pe-card__overlay': mixin.fit(),

            ' .pe-card__media__dimmer': [mixin.fit(), {
                'z-index': 1
            }],

            ' .pe-card__overlay__content': {
                position: 'absolute',
                bottom: 0,
                top: 'auto',
                right: 0,
                left: 0,
                'z-index': 2
            },

            ' .pe-card__header': {
                height: config.one_line_height_with_icon + 'px',

                ' .pe-list-tile__title': {
                    'font-size': '14px',
                    'font-weight': appConfig.font_weight_normal,
                    'line-height': '20px',
                    'margin-top': '2px'
                },
                ' .pe-list-tile__subtitle': {
                    'margin-top': '-1px'
                }
            },

            ' .pe-card__primary': [flex$1.layoutHorizontal, {
                position: 'relative',

                '&.pe-card__primary--media:not(:last-child)': {
                    'padding-bottom': '16px'
                },
                '&.pe-card__primary--media + .pe-card__actions': {
                    'margin-top': '-16px'
                },
                '& + .pe-card__text': {
                    'margin-top': '-16px'
                },
                '&.pe-card__primary--tight': {
                    ' .pe-card__title': {
                        'padding-bottom': config.tight_title_padding_bottom - config.subtitle_line_height_padding_bottom + 'px'
                    }
                }
            }],
            ' .pe-card__title': [flex$1.flex(), {
                padding: [config.title_padding_v, config.title_padding_h, config.title_padding_v - config.subtitle_line_height_padding_bottom, config.title_padding_h].map(function (v) {
                    return v + 'px';
                }).join(' '),
                'font-size': '24px',
                'line-height': '29px'
            }],
            ' .pe-card__subtitle': {
                'font-size': '14px',
                'line-height': '24px'
            },

            ' .pe-card__actions': [{
                'min-height': 36 + 2 * 8 + 'px',
                padding: config.actions_padding_v + 'px' + ' ' + config.padding_actions_h + 'px',

                '&.pe-card__actions--tight': {
                    'min-height': 0
                },
                '&.pe-card__actions--horizontal:not(.pe-card__actions--justified)': [flex$1.layoutHorizontal, flex$1.layoutCenter, {
                    ' :first-child': {
                        'margin-left': 0
                    },
                    ' .pe-button': {
                        'min-width': 0
                    },
                    ' .pe-button--icon': {
                        'margin-right': '8px'
                    }
                }],

                '&.pe-card__actions--justified': [flex$1.layoutJustified],

                '&.pe-card__actions--vertical': [flex$1.layoutVertical, {
                    // vertical flex layout
                    'padding-top': config.actions_vertical_padding_v + 'px',
                    'padding-bottom': config.actions_vertical_padding_v + 'px',

                    // nested
                    ' .pe-card__actions': [{
                        'margin-left': -config.padding_actions_h + 'px',
                        'margin-right': -config.padding_actions_h + 'px',
                        'min-height': 0,

                        '&:first-child': {
                            'margin-top': -config.actions_vertical_padding_v + 'px'
                        },
                        '&:last-child': {
                            'margin-bottom': -config.actions_vertical_padding_v + 'px'
                        }
                    }],

                    ' .pe-button': {
                        height: '36px',
                        padding: 0,
                        'margin-top': config.actions_button_margin_v + 'px',
                        'margin-bottom': config.actions_button_margin_v + 'px'
                    }
                }]
            }],

            ' .pe-card__text': {
                'padding-top': config.text_padding_v - config.text_line_height_padding_top + 'px',
                'padding-right': config.text_padding_h + 'px',
                'padding-left': config.text_padding_h + 'px',
                'padding-bottom': config.tight_text_padding_bottom - config.text_line_height_padding_bottom + 'px',
                'font-size': '14px',
                'line-height': '24px',

                '&:last-child': {
                    'padding-bottom': config.text_padding_bottom - config.text_line_height_padding_bottom + 'px'
                },
                '&.pe-card__text--tight, &.pe-card__text--tight:last-child': {
                    'padding-bottom': config.tight_text_padding_bottom - config.text_line_height_padding_bottom + 'px'
                },
                ' .pe-card__actions + &': {
                    'margin-top': '8px'
                }
            },

            ' .pe-card__text, .pe-card__primary': {
                '& + .pe-card__actions:not(:last-child)': {
                    'margin-top': -(config.offset_small_padding_v + 1) + 'px',
                    'margin-bottom': -(config.offset_small_padding_v - 1) + 'px'
                }
            }
        }
    }];
};

var layout$7 = (function (config) {
    return mixin.createStyles(config, createStyles$8);
});

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$3 = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$4({}, scope + '.pe-card', {
        'background-color': config['color_' + tint + '_main_background']
    })];
};

var content = function content(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$4({}, scope, {
        ' .pe-card__title, .pe-list-tile__title': {
            'color': config['color_' + tint + '_title_text']
        },
        ' .pe-card__subtitle, .pe-list-tile__subtitle': {
            'color': config['color_' + tint + '_subtitle_text']
        },
        ' .pe-card__text': {
            'color': config['color_' + tint + '_text']
        },
        ' .pe-card__actions--borders': [mixin.hairline('border-top'), {
            'border-top': '1px solid ' + config['color_' + tint + '_actions_border']
        }]
    })];
};

var overlay = function overlay(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$4({}, scope + '.pe-card__overlay--sheet', {
        ' .pe-card__overlay__content': {
            'background-color': config['color_' + tint + '_overlay_background']
        }
    })];
};

var createStyles$9 = function createStyles(config) {
    return [style$3(config, 'light'), content(config, 'light', '.pe-card'), overlay(config, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$3(config, 'dark', ' '), content(config, 'dark', ' '), overlay(config, 'dark', ' ')]
    },
    // is dark theme
    style$3(config, 'dark', '.pe-dark-theme'), overlay(config, 'dark', '.pe-dark-theme '), content(config, 'dark', '.pe-card.pe-dark-theme')];
};

var color$2 = (function (config) {
    return mixin.createStyles(config, createStyles$9);
});

var configFn$5 = componentConfig && componentConfig.card;
var config$5 = configFn$5 ? configFn$5(vars$4) : vars$4;
var id$6 = 'pe-card';

styler.add(id$6, layout$7(config$5), color$2(config$5));

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$3 = {
    block: 'pe-card',
    overlay: 'pe-card__overlay',
    overlaySheet: 'pe-card__overlay--sheet',
    overlayContent: 'pe-card__overlay__content',
    mediaDimmer: 'pe-card__media__dimmer',
    mediaCropX: 'pe-card__media--crop-x',
    mediaCropY: 'pe-card__media--crop-y',
    media: 'pe-card__media',
    header: 'pe-card__header',
    headerTitle: 'pe-card__header-title',
    title: 'pe-card__title',
    subtitle: 'pe-card__subtitle',
    text: 'pe-card__text',
    primary: 'pe-card__primary',
    primaryMedia: 'pe-card__primary__media',
    actions: 'pe-card__actions',
    actionsHorizontal: 'pe-card__actions--horizontal',
    actionsVertical: 'pe-card__actions--vertical',
    actionsJustified: 'pe-card__actions--justified',
    actionsBordered: 'pe-card__actions--borders',
    mediaRatioSquare: 'pe-card__media--square',
    mediaRatioLandscape: 'pe-card__media--landscape',
    primaryHasMedia: 'pe-card__primary--media',
    mediaSmall: 'pe-card__media--small',
    mediaRegular: 'pe-card__media--regular',
    mediaMedium: 'pe-card__media--medium',
    mediaLarge: 'pe-card__media--large'
};

var imageRatios = {
    landscape: 16 / 9,
    square: 1
};

var createOverlay = function createOverlay() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var tag = opts.tag || 'div';
    var content = opts.content.map(function (o) {
        var key = Object.keys(o)[0];
        return contentMap[key](o);
    });
    return m('div', {
        class: [CSS_CLASSES$3.overlay, opts.sheet ? CSS_CLASSES$3.overlaySheet : null].join(' ')
    }, [m(tag, {
        class: [CSS_CLASSES$3.overlayContent, opts.class].join(' ')
    }, content), m('div', {
        class: CSS_CLASSES$3.mediaDimmer
    })]);
};

var createText = function createText(o) {
    var opts = o.text || {};
    var tag = opts.tag || 'div';
    return m(tag, {
        class: [CSS_CLASSES$3.text, opts.class].join(' ')
    }, opts.content);
};

// media type to class

var mediaTypeClasses = {
    small: CSS_CLASSES$3.mediaSmall,
    regular: CSS_CLASSES$3.mediaRegular,
    medium: CSS_CLASSES$3.mediaMedium,
    large: CSS_CLASSES$3.mediaLarge
};

var mediaClassForType = function mediaClassForType() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'regular';

    return mediaTypeClasses[mode];
};

var createMedia = function createMedia(o) {
    var opts = o.media || {};
    var ratio = opts.ratio || 'landscape';
    var origin = opts.origin || 'center';
    var tag = opts.tag || 'div';

    var initImage = function initImage(el, inited) {
        if (inited) {
            return;
        }
        var img = el.querySelector('img');
        if (img) {
            img.onload = function () {
                var w = this.naturalWidth;
                var h = this.naturalHeight;
                var naturalRatio = w / h;
                // crop-x: crop over x axis
                // crop-y: crop over y axis
                var cropClass = naturalRatio < imageRatios[ratio] ? CSS_CLASSES$3.mediaCropX : CSS_CLASSES$3.mediaCropY;
                img.className = cropClass;

                if (origin !== 'start') {
                    var clientWidth = el.clientWidth;
                    var clientHeight = el.clientHeight;
                    if (naturalRatio < imageRatios[ratio]) {
                        // orient on y axis
                        var imageHeight = clientWidth / naturalRatio;
                        var diff = clientHeight - imageHeight;
                        var offset = Math.ceil(origin === 'center' ? diff / 2 : diff);
                        this.style.marginTop = offset + 'px';
                    } else {
                        // orient on x axis
                        var imageWidth = clientHeight * naturalRatio;
                        var _diff = clientWidth - imageWidth;
                        var _offset = Math.ceil(origin === 'center' ? _diff / 2 : _diff);
                        this.style.marginLeft = _offset + 'px';
                    }
                }
            };
        }
    };

    return m(tag, {
        class: [CSS_CLASSES$3.media, mediaClassForType(opts.type), ratio === 'landscape' ? CSS_CLASSES$3.mediaRatioLandscape : CSS_CLASSES$3.mediaRatioSquare, opts.class].join(' '),
        config: initImage
    }, [opts.content, opts.overlay ? createOverlay(opts.overlay) : m('div', { class: CSS_CLASSES$3.mediaDimmer })]);
};

var createHeader = function createHeader(o) {
    var opts = o.header || {};
    return m(component$7, _extends$2({}, opts, {
        class: [CSS_CLASSES$3.header, opts.class].join(' ')
    }, opts.icon ? {
        front: m(component$5, opts.icon)
    } : null));
};

var actionLayoutClasses = {
    horizontal: CSS_CLASSES$3.actionsHorizontal,
    vertical: CSS_CLASSES$3.actionsVertical,
    justified: CSS_CLASSES$3.actionsJustified
};
var actionClassForLayout = function actionClassForLayout() {
    var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'horizontal';
    return actionLayoutClasses[layout];
};

var createActions = function createActions(o) {
    var opts = o.actions || {};
    var tag = opts.tag || 'div';
    return m(tag, {
        class: [CSS_CLASSES$3.actions, actionClassForLayout(opts.layout), opts.class].join(' ')
    }, opts.content);
};

var createPrimary = function createPrimary(o) {
    var content = void 0,
        key = void 0,
        partOpts = void 0;
    var opts = o.primary || {};
    var tag = opts.tag || 'div';
    var primaryHasMedia = false;

    var lookup = {
        title: function title(pops) {
            return pops.attrs ? pops : m('div', { class: CSS_CLASSES$3.title }, [pops.title ? pops.title : null, pops.subtitle ? m('div', { class: CSS_CLASSES$3.subtitle }, pops.subtitle) : null]);
        },
        media: function media(pops) {
            primaryHasMedia = true;
            return m('div', {
                class: CSS_CLASSES$3.primaryMedia
            }, createMedia({
                media: pops
            }));
        },
        actions: function actions(pops) {
            return createActions({
                actions: pops
            });
        }
    };

    if (Array.isArray(opts.content)) {
        content = opts.content.map(function (part) {
            key = Object.keys(part)[0];
            partOpts = part[key];
            if (lookup[key]) {
                return lookup[key](partOpts);
            } else {
                return part;
            }
        });
    } else {
        // shorthand for simple primary titles
        content = [opts.title ? lookup.title({
            title: opts.title,
            subtitle: opts.subtitle
        }) : null, opts.media ? lookup.media(opts.media) : null, opts.actions ? lookup.actions(opts.actions) : null, opts.content ? opts.content : null];
    }
    return m(tag, {
        class: [CSS_CLASSES$3.primary, primaryHasMedia ? CSS_CLASSES$3.primaryHasMedia : null].join(' ')
    }, content);
};

var contentMap = {
    text: createText,
    media: createMedia,
    header: createHeader,
    primary: createPrimary,
    actions: createActions
};

var createView$3 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || opts.url ? 'a' : 'div';
    var props = _extends$2({}, {
        class: [CSS_CLASSES$3.block, opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    }, opts.url ? opts.url : null, opts.events ? opts.events : null);

    var content = void 0;
    if (Array.isArray(opts.content)) {
        content = opts.content.map(function (o) {
            var key = Object.keys(o)[0];
            return contentMap[key](o);
        });
        content.unshift(m(component$2, {
            z: ctrl.z(),
            animated: true
        }));
    } else {
        content = [m(component$2, {
            z: ctrl.z(),
            animated: true
        }), opts.content];
    }
    return m(tag, props, [opts.before, content, opts.after]);
};

var component$3 = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var z = opts.z !== undefined ? opts.z : 1;
        return {
            z: m.prop(z)
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$3(ctrl, opts);
    }
};

// No styles for this component

var _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$7 = {
    block: 'pe-control',
    label: 'pe-control__label',
    input: 'pe-control__input',
    box: 'pe-control__box',
    on: 'pe-control--on',
    off: 'pe-control--off',
    disabled: 'pe-control--disabled',
    inactive: 'pe-control--inactive',
    small: 'pe-control--small',
    regular: 'pe-control--regular',
    medium: 'pe-control--medium',
    large: 'pe-control--large'
};

var typeClasses$1 = {
    small: CSS_CLASSES$7.small,
    regular: CSS_CLASSES$7.regular,
    medium: CSS_CLASSES$7.medium,
    large: CSS_CLASSES$7.large
};

var classForType$1 = function classForType() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'regular';

    return typeClasses$1[mode];
};

var createView$8 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof opts.checked === 'function') {
        ctrl.setChecked(opts.checked());
    }
    var checked = ctrl.checked();
    var selectable = opts.selectable(checked);
    var inactive = opts.disabled || !selectable;
    var tag = opts.tag || 'div';
    var name = opts.name || '';
    var props = _extends$6({}, {
        class: [CSS_CLASSES$7.block, opts.defaultClass, checked ? CSS_CLASSES$7.on : CSS_CLASSES$7.off, opts.disabled ? CSS_CLASSES$7.disabled : null, inactive ? CSS_CLASSES$7.inactive : null, classForType$1(opts.size), opts.class].join(' '),
        id: opts.id || '',
        config: function config(el, inited, context, vdom) {
            if (inited) {
                return;
            }
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
        }
    }, opts.events ? opts.events : null);
    var content = [m('input', {
        class: CSS_CLASSES$7.input,
        name: name,
        value: ctrl.value(),
        type: opts.type, // set by checkbox / radio-button
        tabindex: -1, // set in selectionView / icon-button
        checked: checked,
        config: function config(el, inited) {
            if (inited) return;
            ctrl.setInputEl(el);
        }
    }), m('label', _extends$6({}, {
        class: CSS_CLASSES$7.label,
        tabindex: -1 // set in selectionView
    }, inactive ? null : {
        onclick: function onclick() {
            return ctrl.toggle();
        }
    }), [opts.selectionView ? opts.selectionView(checked, opts) : null, opts.label ? m('span', opts.label) : null])];
    return m(tag, props, [opts.before, content, opts.after]);
};

var component$10 = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        // Because this module also supports radio buttons (paired control elements)
        // we won't keep a separate 'checked' value but instead keep the checked value
        // as a HTMLElement checked state.
        var defaultChecked = false;
        var _value = opts.value || '1';
        var inputEl = void 0;

        var setInputElChecked = function setInputElChecked(isChecked) {
            if (inputEl) {
                inputEl.checked = isChecked;
            }
        };

        var getOptsChecked = function getOptsChecked() {
            if (typeof opts.checked === 'function') {
                var v = opts.checked();
                return v !== undefined ? v : defaultChecked;
            } else {
                return opts.checked !== undefined ? opts.checked : defaultChecked;
            }
        };

        var setInputEl = function setInputEl(el) {
            inputEl = el;
            setInputElChecked(getOptsChecked());
        };

        var setChecked = function setChecked(isChecked) {
            setInputElChecked(isChecked);
            if (opts.getState) {
                opts.getState({
                    checked: inputEl ? inputEl.checked : getOptsChecked(),
                    value: _value,
                    el: inputEl
                });
            }
        };

        var toggle = function toggle() {
            return setChecked(!inputEl.checked);
        };

        return {
            setInputEl: setInputEl,
            setChecked: setChecked,
            checked: function checked() {
                return inputEl ? inputEl.checked : getOptsChecked();
            },
            toggle: toggle,
            value: function value() {
                return _value;
            }
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$8(ctrl, opts);
    }
};

var padding$1 = (appConfig.grid_unit_icon_button - appConfig.unit_icon_size) / 2; // 12
var padding_compact = (appConfig.grid_unit_icon_button - appConfig.unit_icon_size) / 3; // 8

var iconButtonConfig = {
  padding: padding$1,
  padding_compact: padding_compact,

  color_light_wash_opacity: appConfig.blend_light_background_hover_medium,
  color_light_focus_opacity: appConfig.blend_light_background_hover_medium,
  color_light_flat_normal_text: appConfig.rgba(appConfig.color_light_foreground, appConfig.blend_light_text_secondary),

  color_dark_wash_opacity: appConfig.blend_dark_background_hover_medium,
  color_dark_focus_opacity: appConfig.blend_dark_background_hover_medium,
  color_dark_flat_normal_text: appConfig.rgba(appConfig.color_dark_foreground, appConfig.blend_dark_text_secondary)
};

var createStyles$10 = function createStyles(config) {
    return [{
        '.pe-button--icon': {
            // don't set button size to facilitate different icon sizes
            display: 'inline-block',
            'vertical-align': 'middle',
            cursor: 'pointer',
            position: 'relative',
            'font-size': '1rem',
            'border-radius': '50%',
            border: 'none',

            ' .pe-button__content': {
                padding: 0
            },

            ' .pe-button__label': {
                'line-height': 1,
                padding: config.padding + 'px'
            },

            '&.pe-button--compact': {
                ' .pe-button__label': {
                    padding: config.padding_compact + 'px'
                }
            }
        }
    }];
};

var layout$8 = (function (config) {
    return mixin.createStyles(config, createStyles$10);
});

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$4 = function style(config, tint, type) {
    var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    return [_defineProperty$5({}, scope + '.pe-button.pe-button--icon', {
        color: config['color_' + tint + '_' + type + '_normal_text'],
        background: 'none',

        ' .pe-button__wash': {
            opacity: config['color_' + tint + '_wash_opacity']
        },

        '&.pe-button--focus, &.pe-button--selected': {
            ' .pe-button__focus': {
                opacity: config['color_' + tint + '_focus_opacity'],
                'background-color': 'currentcolor'
            }
        },

        '&.pe-button--disabled': {
            color: config['color_' + tint + '_' + type + '_disabled_text']
        },

        '&.pe-button--raised': {
            'background-color': config['color_' + tint + '_background'],

            ' .pe-button__content': {
                background: 'transparent'
            }
        }
    })];
};

var noTouch$2 = function noTouch(config, tint, type) {
    var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    return [_defineProperty$5({}, scope + '.pe-button.pe-button--icon:hover', tint === 'light' ? {
        ' .pe-button__wash': {
            'background-color': 'currentcolor'
        }
    } : {
        ' .pe-button__wash': {
            'background-color': config['color_' + tint + '_' + type + '_normal_text']
        }
    })];
};

var createStyles$11 = function createStyles(config) {
    return [style$4(config, 'light', 'flat'), {
        'html.pe-no-touch': [noTouch$2(config, 'light', 'flat', ' ')]
    }, {
        '.pe-dark-theme': [
        // inside dark theme
        style$4(config, 'dark', 'flat', ' '),
        // has dark theme
        style$4(config, 'dark', 'flat', '&')]
    }, {
        'html.pe-no-touch .pe-dark-theme': [noTouch$2(config, 'dark', 'flat', ' ')]
    }];
};

var color$3 = (function (config) {
    return mixin.createStyles(config, createStyles$11);
});

var configFn$6 = componentConfig && componentConfig['icon-button'];
var config$6 = configFn$6 ? configFn$6(iconButtonConfig) : iconButtonConfig;
var id$7 = 'pe-icon-button';

styler.add(id$7, layout$8(config$6), color$3(config$6));

var _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$9 = {
    block: 'pe-button pe-button--icon',
    label: 'pe-button__label',
    compact: 'pe-button--compact'
};

var createView$9 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var content = opts.icon ? m(component$5, opts.icon) : opts.content ? opts.content : null;
    return m(component, _extends$8({}, opts, {
        content: m('div', {
            class: CSS_CLASSES$9.label
        }, content),
        parentClass: [opts.parentClass || CSS_CLASSES$9.block, opts.compact ? CSS_CLASSES$9.compact : null].join(' '),
        // default do not show hover effect
        wash: opts.wash !== undefined ? opts.wash : false,
        ripple: opts.ripple || null,
        animateOnTap: opts.animateOnTap !== undefined ? opts.animateOnTap : false
    }));
};

var component$11 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$9(ctrl, opts);
    }
};

var _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Helper function for checkbox and radio button
var CSS_CLASSES$8 = {
    box: 'pe-control__box',
    button: 'pe-control__button',
    buttonOn: 'pe-control__button--on',
    buttonOff: 'pe-control__button--off'
};

var createIcon = function createIcon(onOffType, opts) {
    // if opts.iconOn/Off is passed, use that icon options object and ignore size
    // otherwise create a new object
    return _extends$7({}, opts[onOffType] ? opts[onOffType] : {
        msvg: opts.theme[onOffType]
    }, {
        class: opts.class
    }, opts.icon, opts.size ? {
        type: opts.size
    } : null);
};

var createSelection = function createSelection(checked, opts) {
    var selectable = opts.selectable(checked);
    return m('div', {
        class: CSS_CLASSES$8.box
    }, m(component$11, _extends$7({}, {
        tag: 'div',
        class: CSS_CLASSES$8.button,
        content: [m(component$5, createIcon('iconOn', _extends$7({}, {
            class: CSS_CLASSES$8.buttonOn
        }, opts))), m(component$5, createIcon('iconOff', _extends$7({}, {
            class: CSS_CLASSES$8.buttonOff
        }, opts)))],
        ripple: {
            center: true
        },
        disabled: opts.disabled,
        inactive: !selectable
    }, opts.iconButton)));
};

var activeColor = appConfig.color_primary; // or override in CSS by setting 'color' property on '.pe-checkbox' / '.pe-radio-button'
var rgba$3 = appConfig.rgba;
var label_padding = (appConfig.grid_unit_icon_button - appConfig.unit_icon_size) / 2; // 12

var selectionControlConfig = {
    label_font_size: 2 * appConfig.grid_unit_component, // 16
    label_height: 3 * appConfig.grid_unit_component, // 24
    padding: Math.floor(1.7 * appConfig.grid_unit_component),
    label_padding: label_padding,
    button_size: 6 * appConfig.grid_unit_component,
    icon_size: 3 * appConfig.grid_unit_component,
    animation_duration: appConfig.animation_duration,

    color_light_on_text: appConfig.rgba(activeColor),
    color_light_off_text: rgba$3(appConfig.color_light_foreground, appConfig.blend_light_text_secondary),
    color_light_off_icon: rgba$3(appConfig.color_light_foreground, appConfig.blend_light_text_secondary),
    color_light_label_text: rgba$3(appConfig.color_light_foreground, appConfig.blend_light_text_secondary),
    color_light_disabled_text: rgba$3(appConfig.color_light_foreground, appConfig.blend_light_text_disabled),
    color_light_thumb_off_focus_opacity: .08,
    color_light_thumb_on_focus_opacity: .11,

    color_light_focus_on: rgba$3(appConfig.color_primary),
    color_light_focus_on_opacity: .11,
    color_light_focus_off: rgba$3(appConfig.color_light_foreground),
    color_light_focus_off_opacity: .07,

    color_dark_on_text: appConfig.rgba(activeColor),
    color_dark_off_text: rgba$3(appConfig.color_dark_foreground, appConfig.blend_dark_text_secondary),
    color_dark_off_icon: '#fff',
    color_dark_label_text: rgba$3(appConfig.color_dark_foreground, appConfig.blend_dark_text_secondary),
    color_dark_disabled_text: rgba$3(appConfig.color_dark_foreground, appConfig.blend_dark_text_disabled),
    color_dark_thumb_off_focus_opacity: .08,
    color_dark_thumb_on_focus_opacity: .11,

    color_dark_focus_on: rgba$3(appConfig.color_primary), // or '#80cbc4'
    color_dark_focus_on_opacity: .14,
    color_dark_focus_off: rgba$3(appConfig.color_dark_foreground),
    color_dark_focus_off_opacity: .09
};

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Returns a style function to be used by checkbox and radio-button

var getSize = function getSize(config, height) {
    var iconSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : appConfig.unit_icon_size;

    var labelSize = iconSize + 2 * config.label_padding;
    var iconOffset = (labelSize - iconSize) / 2;
    return {
        ' .pe-control__label': {
            height: height + 'px'
        },
        ' .pe-control__box': {
            width: iconSize + 'px',
            height: iconSize + 'px'
        },
        ' .pe-button__label': {
            width: labelSize + 'px',
            height: labelSize + 'px',

            ' .pe-icon': [mixin.fit(iconOffset)]
        }
    };
};

var activeButton = function activeButton() {
    return {
        opacity: 1,
        'z-index': 1
    };
};

var inactiveButton = function inactiveButton() {
    return {
        opacity: 0,
        'z-index': 0
    };
};

var createStyles$12 = function createStyles(config, className, type) {
    var _peControl;

    return [{
        '.pe-control': (_peControl = {
            display: 'inline-block',
            'box-sizing': 'border-box',
            margin: 0,
            padding: 0,

            ' .pe-control__label': [flex$1.layoutHorizontal, flex$1.layoutCenter, {
                position: 'relative',
                cursor: 'pointer',
                'font-size': config.label_font_size + 'px',
                'line-height': config.label_height + 'px',
                margin: 0,
                color: 'inherit',

                ':focus': {
                    outline: 0
                }
            }],

            '&.pe-control--inactive': {
                ' .pe-control__label': {
                    cursor: 'default'
                }
            }

        }, _defineProperty$6(_peControl, ' input[type=' + type + '].pe-control__input', [mixin.vendorize({
            'appearance': 'none'
        }, appConfig.prefixes_appearance), {
            'line-height': config.label_height + 'px',
            // Hide input element
            position: 'absolute',
            'z-index': '-1',
            width: 0,
            height: 0,
            margin: 0,
            padding: 0,
            opacity: 0,
            border: 'none',
            'pointer-events': 'none'
        }]), _defineProperty$6(_peControl, ' .pe-control__box', {
            position: 'relative',
            display: 'inline-block',
            'box-sizing': 'border-box',
            width: config.label_height + 'px',
            height: config.label_height + 'px',
            color: 'inherit',

            ':focus': {
                outline: 0
            }
        }), _defineProperty$6(_peControl, ' .pe-control__button', [mixin.defaultTransition('opacity', config.animation_duration), {
            position: 'absolute',
            left: -((config.button_size - config.icon_size) / 2) + 'px',
            top: -((config.button_size - config.icon_size) / 2) + 'px',
            'z-index': 1
            // opacity: 0,
            // 'pointer-events': 'auto'
        }]), _defineProperty$6(_peControl, '&.pe-control--off', {
            ' .pe-control__button--on': inactiveButton(),
            ' .pe-control__button--off': activeButton()
        }), _defineProperty$6(_peControl, '&.pe-control--on', {
            ' .pe-control__button--on': activeButton(),
            ' .pe-control__button--off': inactiveButton()
        }), _defineProperty$6(_peControl, ' .pe-control__label span', {
            'padding-left': config.padding + 'px',
            'padding-right': config.padding + 'px'
        }), _defineProperty$6(_peControl, '&.pe-control--disabled', {
            ' .pe-control__label': {
                cursor: 'auto'
            },
            ' .pe-control__button': {
                'pointer-events': 'none'
            }
        }), _defineProperty$6(_peControl, ' .pe-button__label', {
            ' .pe-icon': {
                position: 'absolute'
            }
        }), _defineProperty$6(_peControl, '&.pe-control--small', getSize(config, appConfig.unit_icon_size_small, appConfig.unit_icon_size_small)), _defineProperty$6(_peControl, '&.pe-control--regular', getSize(config, config.label_height, appConfig.unit_icon_size)), _defineProperty$6(_peControl, '&.pe-control--medium', getSize(config, appConfig.unit_icon_size_medium, appConfig.unit_icon_size_medium)), _defineProperty$6(_peControl, '&.pe-control--large', getSize(config, appConfig.unit_icon_size_large, appConfig.unit_icon_size_large)), _peControl)
    }];
};

var layout$9 = (function (config) {
    return mixin.createStyles(config, function (config) {
        return createStyles$12(config, '.pe-control--checkbox', 'checkbox');
    });
});

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Returns a style function to be used by checkbox and radio-button

var style$5 = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$7({}, scope + '.pe-control', {
        color: config['color_' + tint + '_on_text'], // override by specifying 'color'

        ' .pe-control__label': {
            ' span': {
                color: config['color_' + tint + '_label_text']
            }
        },
        ' .pe-control__box': {
            ' .pe-control__button': {
                color: 'currentcolor',

                ' .pe-control__button--on': {
                    color: 'currentcolor'
                },

                ' .pe-control__button--off': {
                    color: config['color_' + tint + '_off_icon']
                }
            }
        },
        '&.pe-control--off': {
            ' .pe-button--focus .pe-button__focus': {
                opacity: config['color_' + tint + '_focus_off_opacity'],
                'background-color': config['color_' + tint + '_focus_off']
            },
            // reverse the ripple color so that it corresponds to the resulting state
            ' .pe-ripple': {
                color: config['color_' + tint + '_focus_on']
            }
        },
        '&.pe-control--on': {
            ' .pe-button--focus .pe-button__focus': {
                opacity: config['color_' + tint + '_focus_on_opacity'],
                'background-color': config['color_' + tint + '_focus_on']
            },
            // reverse the ripple color so that it corresponds to the resulting state
            ' .pe-ripple': {
                color: config['color_' + tint + '_focus_off']
            }
        },

        '&.pe-control--disabled': {
            ' .pe-control__label span': {
                color: config['color_' + tint + '_disabled_text']
            },
            ' .pe-control__box': {
                ' .pe-control__button--on, .pe-control__button--off': {
                    color: config['color_' + tint + '_disabled_text']
                }
            }
        }
    })];
};

var createStyles$13 = function createStyles(config) {
    return [style$5(config, 'light', '.pe-control--checkbox'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$5(config, 'dark', ' '),
        // has dark theme
        style$5(config, 'dark', '&')]
    }];
};

var color$4 = (function (config) {
    return mixin.createStyles(config, createStyles$13);
});

var configFn$7 = componentConfig && componentConfig.checkbox;
var config$7 = configFn$7 ? configFn$7(selectionControlConfig) : selectionControlConfig;
var id$8 = 'pe-checkbox';

styler.add(id$8, layout$9(config$7), color$4(config$7));

// default icons
var iconOff = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>');
var iconOn = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');

var theme = {
    iconOff: iconOff,
    iconOn: iconOn
};

var selectable = function selectable() {
    return true;
};

var createView$7 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    opts.theme = theme;
    opts.defaultClass = 'pe-control--checkbox';
    opts.type = 'checkbox';
    opts.selectionView = createSelection;
    opts.selectable = selectable;
    return m(component$10, opts);
};

var component$8 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$7(ctrl, opts);
    }
};

var _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
Helper module to manage multiple items of the same component type.
*/
/*
mOpts:
- instance
- defaultId
- tag
- noneTag
- bodyShowClass
*/
var multiple = function multiple(mOpts) {
    var items = [];

    var itemIndex = function itemIndex(id) {
        var item = findItem(id);
        return items.indexOf(item);
    };

    var removeItem = function removeItem(id) {
        var index = itemIndex(id);
        if (index !== -1) {
            items.splice(index, 1);
        }
    };

    var replaceItem = function replaceItem(id, newItem) {
        var index = itemIndex(id);
        if (index !== -1) {
            items[index] = newItem;
        }
    };

    var findItem = function findItem(id) {
        // traditional for loop for IE10
        for (var i = 0; i < items.length; i++) {
            if (items[i].instanceId === id) {
                return items[i];
            }
        }
    };

    var next = function next() {
        if (items.length) {
            items[0].show = true;
            m.redraw();
        }
    };

    var _remove = function _remove(instanceId) {
        if (mOpts.queue) {
            items.shift();
            // add time to remove the previous instance before drawing the next one
            setTimeout(next, 0);
        } else {
            removeItem(instanceId);
        }
    };

    var setPauseState = function setPauseState(pause, instanceId) {
        var item = findItem(instanceId);
        if (item) {
            item.pause = pause;
            item.unpause = !pause;
        }
    };

    var makeItem = function makeItem(itemOpts, instanceId) {
        var resolveShow = void 0;
        var didShow = function didShow() {
            var opts = typeof itemOpts === 'function' ? itemOpts() : itemOpts;
            if (opts.didShow) {
                opts.didShow(instanceId);
            }
            return resolveShow(instanceId);
        };
        var showPromise = new Promise(function (resolve) {
            resolveShow = resolve;
        });

        var resolveHide = void 0;
        var didHide = function didHide() {
            var opts = typeof itemOpts === 'function' ? itemOpts() : itemOpts;
            if (opts.didHide) {
                opts.didHide(instanceId);
            }
            if (mOpts.queue) {
                _remove(instanceId);
            }
            return resolveHide(instanceId);
        };
        var hidePromise = new Promise(function (resolve) {
            resolveHide = resolve;
        });

        return _extends$9({}, mOpts, {
            instanceId: instanceId,
            opts: itemOpts,
            show: mOpts.queue ? false : true,
            showPromise: showPromise,
            hidePromise: hidePromise,
            didShow: didShow,
            didHide: didHide
        });
    };

    return {

        count: function count() {
            return items.length;
        },

        clear: function clear() {
            return items.length = 0;
        },

        show: function show(opts) {
            var instanceId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : mOpts.defaultId;

            var item = void 0;
            if (mOpts.queue) {
                item = makeItem(opts, instanceId);
                items.push(item);
                if (items.length === 1) {
                    next();
                }
            } else {
                var storedItem = findItem(instanceId);
                item = makeItem(opts, instanceId);
                if (!storedItem) {
                    items.push(item);
                } else {
                    replaceItem(instanceId, item);
                }
            }
            return item.showPromise;
        },

        hide: function hide() {
            var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;

            var item = void 0;
            if (mOpts.queue) {
                if (items.length) {
                    item = items[0];
                }
            } else {
                item = findItem(instanceId);
            }
            if (item) {
                item.hide = true;
                return item.hidePromise;
            }
            return Promise.resolve(instanceId);
        },

        remove: function remove() {
            var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;

            _remove(instanceId);
        },

        pause: function pause() {
            var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;

            setPauseState(true, instanceId);
        },

        unpause: function unpause() {
            var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;

            setPauseState(false, instanceId);
        },

        view: function view() {
            var toShowItems = items.filter(function (item) {
                return item.show;
            });
            if (!toShowItems.length) {
                document.body.classList.remove(mOpts.bodyShowClass);
                // placeholder because we cannot return null
                return m(mOpts.noneTag);
            } else {
                document.body.classList.add(mOpts.bodyShowClass);
            }
            return m(mOpts.tag, toShowItems.map(function (itemData) {
                return m(mOpts.instance, _extends$9({}, itemData, {
                    transitions: mOpts.transitions,
                    key: itemData.key || itemData.instanceId
                }));
            }));
        }
    };
};

/*
Generic show/hide transition module
*/

// defaults
var SHOW_DURATION = .220; // default dialog timing
var HIDE_DURATION = .200; // default dialog timing
var SHOW_DELAY = 0;
var HIDE_DELAY = 0;
var TRANSITION = 'both';

// See: transition
var show$1 = function show(opts) {
    return transition(opts, 'show');
};

var hide$1 = function hide(opts) {
    return transition(opts, 'hide');
};

/*
opts:
- transition
- showDuration
- hideDuration

- state (show, hide)
*/
var getDuration = function getDuration(opts, state) {
    var transition = opts.transition || TRANSITION;
    if (transition === 'none') {
        return 0;
    } else if (transition === 'show' && state === 'hide') {
        return 0;
    } else if (transition === 'hide' && state === 'show') {
        return 0;
    } else {
        // both
        return state === 'show' ? opts.showDuration !== undefined ? opts.showDuration : SHOW_DURATION : opts.hideDuration !== undefined ? opts.hideDuration : HIDE_DURATION;
    }
};

/*
opts:
- transition (show, hide, both)
- showDelay
- hideDelay

- state (show, hide)
*/
var getDelay = function getDelay(opts, state) {
    var transition = opts.transition || TRANSITION;
    if (transition === 'none') {
        return 0;
    } else if (transition === 'show' && state === 'hide') {
        return 0;
    } else if (transition === 'hide' && state === 'show') {
        return 0;
    } else {
        // both
        return state === 'show' ? opts.showDelay !== undefined ? opts.showDelay : SHOW_DELAY : opts.hideDelay !== undefined ? opts.hideDelay : HIDE_DELAY;
    }
};

/*
opts:
- el
- duration
- delay
- showClass
- beforeShow
- show
- hide
- afterHide
- showDelay
- hideDelay

- state (show, hide)
*/
var transition = function transition(opts, state) {
    var deferred = m.deferred();
    var el = opts.el;
    if (!el) {
        deferred.resolve();
        return deferred.promise;
    }
    var transitionDuration = getDuration(opts, state) * 1000;
    var delay = getDelay(opts, state) * 1000;
    var style = el.style;
    var beforeTransition = opts.beforeShow && state === 'show' ? function () {
        style.transitionDuration = '0ms';
        style.transitionDelay = '0ms';
        opts.beforeShow();
    } : null;
    var applyTransition = function applyTransition() {
        style.transitionDuration = transitionDuration + 'ms';
        style.transitionDelay = delay + 'ms';
        if (opts.showClass) {
            el.classList[state === 'show' ? 'add' : 'remove'](opts.showClass);
        }
        if (opts.show && typeof opts.show === 'function' && state === 'show') {
            opts.show();
        }
        if (opts.hide && typeof opts.hide === 'function' && state === 'hide') {
            opts.hide();
        }
    };
    var applyAfterTransition = function applyAfterTransition() {
        if (opts.afterHide && state === 'hide') {
            style.transitionDuration = '0ms';
            style.transitionDelay = '0ms';
            opts.afterHide();
        }
    };

    var doTransition = function doTransition() {
        applyTransition();
        setTimeout(function () {
            applyAfterTransition();
            deferred.resolve();
        }, transitionDuration + delay);
    };

    var maybeDelayTransition = function maybeDelayTransition() {
        if (transitionDuration === 0) {
            doTransition();
        } else {
            setTimeout(function () {
                doTransition();
            }, 0);
        }
    };

    if (beforeTransition) {
        beforeTransition();
        setTimeout(function () {
            maybeDelayTransition();
        }, 0);
    } else {
        maybeDelayTransition();
    }

    return deferred.promise;
};

var transition$1 = {
    show: show$1,
    hide: hide$1
};

var rgba$4 = appConfig.rgba;

var vars$6 = {
    border_radius: appConfig.unit_block_border_radius,
    padding: 3 * appConfig.grid_unit_component,
    header_bottom: 20,
    header_height: 60,
    footer_height: 52,

    color_light_content_background: rgba$4(appConfig.color_light_background),
    color_light_title_text: rgba$4(appConfig.color_light_foreground, appConfig.blend_light_text_primary),
    color_light_body_text: rgba$4(appConfig.color_light_foreground, appConfig.blend_light_text_regular),
    color_light_body_border: rgba$4(appConfig.color_light_foreground, appConfig.blend_light_border_light),
    color_light_backdrop_background: 'rgba(0, 0, 0, .4)',

    color_dark_content_background: rgba$4(appConfig.color_dark_background),
    color_dark_title_text: rgba$4(appConfig.color_dark_foreground, appConfig.blend_dark_text_primary),
    color_dark_body_text: rgba$4(appConfig.color_dark_foreground, appConfig.blend_dark_text_regular),
    color_dark_body_border: rgba$4(appConfig.color_dark_foreground, appConfig.blend_dark_border_light),
    color_dark_backdrop_background: 'rgba(0, 0, 0, .5)'
};

var createStyles$14 = function createStyles(config) {
    var padding = config.padding;
    var lineHeightTitle = 24;

    return [{
        '.pe-dialog': [flex$1.layoutCenterCenter,
        // transition-duration set in js
        mixin.vendorize({
            'transition-timing-function': 'ease-out'
        }, appConfig.prefixes_transition), mixin.vendorize({
            'transition-property': 'opacity'
        }, appConfig.prefixes_transition), {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            'z-index': appConfig.z_dialog,
            height: '100%', // 100vh would make the dialog go beneath Mobile Safari toolbar
            padding: padding + 'px 40px',
            opacity: 0,

            '&.pe-dialog--visible': {
                opacity: 1
            },

            '&.pe-dialog--fullscreen': {
                padding: 0,

                ' .pe-dialog__content': {
                    'border-radius': 0,
                    'max-width': 'none',
                    height: '100%',
                    width: '100%',

                    ' .pe-dialog__header, .pe-dialog__footer': {
                        display: 'none'
                    },

                    ' .pe-dialog__body': {
                        padding: 0,
                        height: '100%',
                        'max-height': 'calc(100%)',
                        border: 'none'
                    }
                }
            },

            ' .pe-dialog__header, pe-dialog__body, pe-dialog__header': {
                'z-index': 1
            },

            ' .pe-dialog__content': [flex$1.layoutVertical, {
                position: 'relative',
                'max-height': '100%',
                'min-width': 56 * 5 + 'px',
                'max-width': 7 * appConfig.grid_unit_menu + 'px',
                'border-radius': config.border_radius + 'px',

                ' > .pe-shadow': {
                    'z-index': -1 // For IE10 to get click events on content
                },

                '&.pe-menu__content': {
                    ' .pe-dialog__body': {
                        padding: 0,
                        border: 'none'
                    }
                }
            }],

            ' .pe-dialog__title': {
                'font-size': appConfig.font_size_title + 'px',
                'line-height': lineHeightTitle + 'px',
                'font-weight': appConfig.font_weight_medium,

                '& + div': {
                    'margin-top': '16px'
                }
            },

            ' .pe-dialog__header': {
                padding: [padding - 4, padding, config.header_bottom - 4, padding].map(function (v) {
                    return v + 'px';
                }).join(' '),
                'min-height': config.header_height + 'px',

                ' .pe-dialog__title': [mixin.ellipsis(1), {
                    width: '100%'
                }]
            },

            ' .pe-dialog__body': [flex$1.selfStretch, mixin.hairline('border-top'), {
                'border-top-style': 'solid'
            }, mixin.hairline('border-top'), {
                'border-bottom-style': 'solid'
            }, {
                padding: [padding, padding, padding - 5, padding].map(function (v) {
                    return v + 'px';
                }).join(' '),
                'overflow-y': 'auto',
                '-webkit-overflow-scrolling': 'touch',
                'border-width': '1px',
                'border-style': 'solid none',
                'border-color': 'transparent',
                // initially set max-height; will be overridden by dialog core with actual heights
                'max-height': 'calc(100vh - ' + 2 * padding + 'px - ' + (config.header_height + config.footer_height) + 'px)'
            }],
            ' .pe-dialog__header + .pe-dialog__body': {
                'padding-top': 0
            },

            ' .pe-dialog__footer': {
                padding: '2px 8px',
                'min-height': config.footer_height + 'px',
                'font-size': 0, // remove inline block spacing

                '&.pe-dialog__footer--high': {
                    // when buttons are stacked vertically
                    'padding-bottom': '8px'
                }
            },

            ' .pe-dialog__actions': [flex$1.layoutHorizontal, flex$1.layoutEndJustified, flex$1.layoutWrap, {
                margin: '0 -4px',

                ' .pe-button': {
                    height: '36px',
                    'margin-top': '6px',
                    'margin-bottom': '6px',
                    padding: 0
                }
            }]
        }],

        ' body.pe-dialog--open': {
            overflow: 'hidden',
            left: 0,
            '-webkit-overflow-scrolling': 'touch',
            top: 0,
            width: '100%'
        }
    }];
};

var layout$10 = (function (config) {
    return mixin.createStyles(config, createStyles$14);
});

function _defineProperty$8(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$6 = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$8({}, scope + '.pe-dialog', {
        '&.pe-dialog--backdrop': {
            'background-color': config['color_' + tint + '_backdrop_background']
        },
        ' .pe-dialog__content': {
            'background-color': config['color_' + tint + '_content_background']
        },
        ' .pe-dialog__header .pe-dialog__title': {
            'color': config['color_' + tint + '_title_text']
        },
        ' .pe-dialog__body': {
            'color': config['color_' + tint + '_body_text']
        },
        '&.pe-dialog--overflow-top .pe-dialog__body': {
            'border-top-color': config['color_' + tint + '_body_border']
        },
        '&.pe-dialog--overflow-bottom .pe-dialog__body': {
            'border-bottom-color': config['color_' + tint + '_body_border']
        }
    })];
};

var createStyles$15 = function createStyles(config) {
    return [style$6(config, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$6(config, 'dark', ' '),
        // has dark theme
        style$6(config, 'dark', '&')]
    }];
};

var color$5 = (function (config) {
    return mixin.createStyles(config, createStyles$15);
});

var configFn$8 = componentConfig && componentConfig.dialog;
var config$8 = configFn$8 ? configFn$8(vars$6) : vars$6;
var id$9 = 'pe-dialog';

styler.add(id$9, layout$10(config$8), color$5(config$8));

var _extends$10 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$10 = {
    block: 'pe-dialog',
    visible: 'pe-dialog--visible',
    body: 'pe-dialog__body',
    fullscreen: 'pe-dialog--fullscreen',
    content: 'pe-dialog__content',
    header: 'pe-dialog__header',
    footer: 'pe-dialog__footer',
    footerHigh: 'pe-dialog__footer--high',
    title: 'pe-dialog__title',
    actions: 'pe-dialog__actions',
    hasBackdrop: 'pe-dialog--backdrop',
    hasTopOverflow: 'pe-dialog--overflow-top',
    hasBottomOverflow: 'pe-dialog--overflow-bottom',
    menuContent: 'pe-menu__content'
};

var SCROLL_WATCH_TIMER = 150;

var updateScrollState = function updateScrollState(ctrl) {
    var scroller = ctrl.scrollEl;
    if (!scroller) {
        return;
    }
    ctrl.topOverflow = scroller.scrollTop > 0;
    ctrl.bottomOverflow = scroller.scrollHeight - (scroller.scrollTop + scroller.getBoundingClientRect().height) > 0;
};

var updateFooterState = function updateFooterState(ctrl) {
    var footerEl = ctrl.footerEl;
    if (footerEl) {
        var style = window.getComputedStyle(footerEl);
        var height = footerEl.getBoundingClientRect().height;
        var minHeight = parseInt(style.minHeight, 10);
        if (height > minHeight) {
            footerEl.classList.add(CSS_CLASSES$10.footerHigh);
        } else {
            footerEl.classList.remove(CSS_CLASSES$10.footerHigh);
        }
    }
};

var show = function show(ctrl, opts) {
    var id = ctrl.instanceId;
    ctrl.isTransitioning = true;
    return transition$1.show(_extends$10({}, opts, {
        el: ctrl.el,
        showClass: CSS_CLASSES$10.visible
    })).then(function () {
        ctrl.isTransitioning = false;
        ctrl.visible = true;
        if (ctrl.didShow) {
            // notify multiple
            ctrl.didShow(id);
            // this will call opts.didShow
        }
    });
};

var hide = function hide(ctrl, opts) {
    var id = ctrl.instanceId;
    ctrl.isTransitioning = true;
    return transition$1.hide(_extends$10({}, opts, {
        el: ctrl.el,
        showClass: CSS_CLASSES$10.visible
    })).then(function () {
        dialog.remove(id);
        ctrl.isTransitioning = false;
        ctrl.visible = false;
        if (ctrl.didHide) {
            // notify multiple
            ctrl.didHide(id);
            // this will call opts.didHide
        }
        setTimeout(m.redraw, 0); // removes remainder of drawn component
    });
};

var createViewContent = function createViewContent(ctrl, opts) {
    // if flex "self-stretch" is not supported, calculate the maximum height
    var style = {};
    var bodyOpts = opts.body || opts.menu;

    return m('div', {
        class: CSS_CLASSES$10.body,
        style: style,
        config: function config(el, inited) {
            if (inited) {
                return;
            }
            ctrl.scrollEl = el;
        },
        onscroll: function onscroll() {
            ctrl.isScrolling = true;
            updateScrollState(ctrl);

            clearTimeout(ctrl.scrollWatchId);
            ctrl.scrollWatchId = setTimeout(function () {
                ctrl.isScrolling = false;
            }, SCROLL_WATCH_TIMER);
        }
    }, bodyOpts);
};

var createView$10 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var bodyOpts = opts.body || opts.menu;
    var updateContentOnScroll = opts.updateContentOnScroll || false;
    var ignoreContent = !updateContentOnScroll && ctrl.isScrolling;
    var tag = opts.tag || 'form';

    var update = function update() {
        updateScrollState(ctrl);
        updateFooterState(ctrl);
        m.redraw();
    };

    var props = _extends$10({}, {
        class: [CSS_CLASSES$10.block, opts.fullscreen ? CSS_CLASSES$10.fullscreen : null, opts.backdrop ? CSS_CLASSES$10.hasBackdrop : null, ctrl.topOverflow || opts.borders ? CSS_CLASSES$10.hasTopOverflow : null, ctrl.bottomOverflow || opts.borders ? CSS_CLASSES$10.hasBottomOverflow : null, ctrl.visible ? CSS_CLASSES$10.visible : null, opts.class].join(' '),
        id: opts.id || '',
        config: function config(el, inited, context, vdom) {
            if (inited) {
                return;
            }
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            ctrl.el = el;

            var cleanup = function cleanup() {
                events.unsubscribe('resize', update);
                events.unsubscribe('keydown', handleEscape);
            };

            var handleEscape = function handleEscape(e) {
                if (opts.fullscreen || opts.modal) return;
                if (e.which === 27) {
                    cleanup();
                    hide(ctrl, _extends$10({}, opts, { hideDelay: 0 }));
                }
            };

            // resize: update scroll state ('overflow' borders)
            events.subscribe('resize', update);
            events.subscribe('keydown', handleEscape);

            context.onunload = function () {
                cleanup();
            };

            updateScrollState(ctrl);
            updateFooterState(ctrl);

            show(ctrl, opts).then(function () {
                updateScrollState(ctrl);
                updateFooterState(ctrl);
                if (ctrl.topOverflow || ctrl.bottomOverflow) {
                    setTimeout(m.redraw, 0);
                }
            });
        },
        // click backdrop: close dialog
        onclick: function onclick(e) {
            if (e.target !== ctrl.el) {
                return;
            }
            if (opts.modal) {
                // not allowed
                return;
            }
            if (!ctrl.isTransitioning) {
                hide(ctrl, _extends$10({}, opts, { hideDelay: 0 }));
            }
        }
    }, opts.formOptions ? opts.formOptions : null);

    var body = bodyOpts ? ignoreContent ? {
        subtree: 'retain'
    } : createViewContent(ctrl, opts) : null;

    var content = m('div', {
        class: [CSS_CLASSES$10.content, opts.menu ? CSS_CLASSES$10.menuContent : null].join(' ')
    }, [opts.fullscreen ? null : m(component$2, {
        z: ctrl.z,
        animated: true
    }), opts.fullscreen ? null : opts.title ? m('div', {
        class: CSS_CLASSES$10.header,
        config: function config(el) {
            ctrl.headerHeight = el.scrollHeight;
        }
    }, [m('div', { class: CSS_CLASSES$10.title }, opts.title)]) : null, body, opts.fullscreen ? null : opts.footer ? m('div', {
        class: CSS_CLASSES$10.footer,
        config: function config(el, inited) {
            ctrl.footerHeight = el.scrollHeight;
            if (inited) {
                return;
            }
            ctrl.footerEl = el;
        }
    }, [m('div', { class: CSS_CLASSES$10.actions }, opts.footer)]) : null]);
    return m(tag, props, [opts.before, content, opts.after]);
};

var component$12 = {
    controller: function controller() {
        var instanceData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        // instanceData contains {id, opts}
        var opts = instanceData.opts || {};
        var z = opts.z !== undefined ? opts.z : 3; // shadow depth
        return _extends$10({}, instanceData, {
            instanceId: instanceData.instanceId,
            z: z,
            scrollEl: null,
            footerEl: null,
            topOverflow: false,
            bottomOverflow: false,
            scrollWatchId: 0,
            isScrolling: false,
            headerHeight: 0,
            footerHeight: 0,
            el: null,
            visible: false,
            isTransitioning: false
        });
    },
    view: function view(ctrl, instanceData) {
        // instanceData contains {id, opts}
        var opts = typeof instanceData.opts === 'function' ? instanceData.opts() : instanceData.opts;
        if (instanceData.hide && !ctrl.isTransitioning) {
            hide(ctrl, opts);
        }
        return createView$10(ctrl, opts);
    }
};

var dialog = multiple({
    instance: component$12,
    defaultId: 'default_dialog',
    tag: '.pe-dialog__holder',
    noneTag: 'span.pe-dialog__placeholder',
    bodyShowClass: 'pe-dialog--open'
});

var rgba$5 = appConfig.rgba;

var vars$7 = {
    size_regular: 7 * appConfig.grid_unit_component,
    size_mini: 5 * appConfig.grid_unit_component,
    padding_regular: 2 * appConfig.grid_unit_component,

    color_light_background: rgba$5(appConfig.color_primary),
    color_light_text: rgba$5(appConfig.color_primary_foreground),

    color_dark_background: rgba$5(appConfig.color_primary),
    color_dark_text: rgba$5(appConfig.color_primary_foreground)
};

var createStyles$16 = function createStyles(config) {
    return [{
        '.pe-button--fab': [mixin.vendorize({
            'user-select': 'none'
        }, appConfig.prefixes_user_select), {
            display: 'inline-block',
            position: 'relative',
            outline: 'none',
            cursor: 'pointer',
            width: config.size_regular + 'px',
            height: config.size_regular + 'px',
            padding: config.padding_regular + 'px',
            'border-radius': '50%',
            border: 'none',

            '&.pe-button--fab-mini': {
                width: config.size_mini + 'px',
                height: config.size_mini + 'px',
                padding: (config.size_mini - appConfig.unit_icon_size) / 2 + 'px'
            },

            ' .pe-button__content': {
                padding: 0,
                'border-radius': 'inherit'
            },

            ' .pe-ripple': {
                'border-radius': 'inherit'
            },

            ' .pe-button__wash': [mixin.vendorize({
                transition: 'background-color ' + appConfig.animation_duration + ' ease-in-out'
            }, appConfig.prefixes_transition), {
                'border-radius': 'inherit',
                'pointer-events': 'none',
                'background-color': 'transparent'
            }]
        }]
    }];
};

var layout$11 = (function (config) {
    return mixin.createStyles(config, createStyles$16);
});

function _defineProperty$9(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$7 = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$9({}, scope + '.pe-button.pe-button--fab', {
        'background-color': config['color_' + tint + '_background'],
        color: config['color_' + tint + '_text'],

        ' .pe-button__content': {
            background: 'transparent'
        }
    })];
};

var createStyles$17 = function createStyles(config) {
    return [style$7(config, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$7(config, 'dark', ' '),
        // has dark theme
        style$7(config, 'dark', '&')]
    }];
};

var color$6 = (function (config) {
    return mixin.createStyles(config, createStyles$17);
});

var configFn$9 = componentConfig && componentConfig.fab;
var config$9 = configFn$9 ? configFn$9(vars$7) : vars$7;
var id$10 = 'pe-fab';

styler.add(id$10, layout$11(config$9), color$6(config$9));

var _extends$11 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$11 = {
    block: 'pe-button--fab',
    mini: 'pe-button--fab-mini'
};

var createView$11 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return m(component$11, _extends$11({}, opts, {
        parentClass: [CSS_CLASSES$11.block, opts.mini ? CSS_CLASSES$11.mini : null].join(' '),
        raised: true,
        ripple: {
            center: true,
            opacityDecayVelocity: 0.24
        },
        shadow: {
            increase: 5
        },
        ink: true,
        wash: true,
        animateOnTap: true
    }));
};

var component$13 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$11(ctrl, opts);
    }
};

var margin_side = 2 * appConfig.grid_unit_component - 12; // (buttonSize - iconSize) / 2 = (48 - 24) / 2
var height_desktop = appConfig.grid_unit_component * 8; // 64
var height_mobile_portrait = appConfig.grid_unit_component * 7; // 56
var height_mobile_landscape = appConfig.grid_unit_component * 6; // 48

var vars$8 = {
    margin_side: margin_side,
    indent: appConfig.unit_indent,
    transition_duration: appConfig.animation_duration,
    font_size: appConfig.font_size_title,
    line_height: appConfig.line_height,

    height_desktop: height_desktop,
    height_mobile_portrait: height_mobile_portrait,
    height_mobile_landscape: height_mobile_landscape,

    height_normal: height_desktop,
    height_medium_tall: 2 * height_desktop,
    height_tall: 3 * height_desktop,
    height_narrow: height_mobile_portrait,
    height_narrow_medium_tall: 112,
    height_narrow_tall: 168,

    color_light_text: appConfig.rgba(appConfig.color_light_foreground, appConfig.blend_light_text_primary),
    color_dark_text: appConfig.rgba(appConfig.color_dark_foreground, appConfig.blend_dark_text_primary)
};

var createStyles$18 = function createStyles(config) {
    return [{
        '.pe-toolbar': [
        // use hardware-acceleration
        mixin.vendorize({
            transform: 'translate3d(0,0,0)'
        }, appConfig.prefixes_transform), {
            display: 'block',
            position: 'relative',
            height: config.height_normal + 'px',
            'font-size': config.font_size + 'px',
            'line-height': config.line_height + 'em',
            'background-color': '#CFD8DC', // just a default color, will normally be overridden

            '&.pe-header--animated': mixin.defaultTransition('height', config.transition_duration, 'ease-in'),

            '&.pe-header--medium-tall': {
                height: config.height_medium_tall + 'px'
            },

            '&.pe-header--tall': {
                height: config.height_tall + 'px'
            },

            '&.pe-toolbar--narrow': {
                height: config.height_narrow + 'px',

                ' .pe-toolbar__bar': {
                    height: config.height_narrow + 'px',
                    padding: 0
                }
            },

            '&.pe-toolbar--narrow.pe-header--medium-tall': {
                height: config.height_narrow_medium_tall + 'px'
            },

            '&.pe-toolbar--narrow.pe-header--tall': {
                height: config.height_narrow_tall + 'px'
            },

            '&.pe-header--tall .pe-toolbar__bar--middle': mixin.vendorize({
                transform: 'translateY(100%)'
            }, appConfig.prefixes_transform),

            ' .pe-toolbar__bar': [flex$1.layoutCenter, flex$1.layoutHorizontal, {
                '> *:not(.disabled)': {
                    // make elements (e.g. buttons) respond to mouse/touch events
                    'pointer-events': 'auto'
                }
            }, {
                '> :first-child': {
                    'margin-left': config.margin_side + 'px'
                }
            }, {
                '> :last-child': {
                    'margin-right': config.margin_side + 'px'
                }
            }, {
                ' .pe-button--icon + span, .pe-button--icon + .pe-title': {
                    'margin-left': config.indent - config.margin_side - appConfig.grid_unit_icon_button + 'px'
                }
            }, {
                '> span, > .pe-title': [mixin.ellipsis(1, appConfig.line_height, 'em'), mixin.vendorize({
                    'transform-origin': 'left 50%'
                }, appConfig.prefixes_transform), {
                    'line-height': appConfig.line_height + 'em',
                    'word-break': 'break-all'
                }]
            }, {
                '> span:first-child, .pe-toolbar__title--indent': [mixin.ellipsis(1, appConfig.line_height, 'em'), {
                    'margin-left': config.indent + 'px'
                }]
            }, {
                width: '100%',
                position: 'absolute',
                height: config.height_normal + 'px',
                'pointer-events': 'none',

                ' .pe-fit': [mixin.fit(), {
                    width: 'auto',
                    margin: 0,

                    '.bottom': {
                        top: 'auto'
                    }
                }],
                ' .pe-header': mixin.ellipsis(1, appConfig.line_height, 'em'),

                '&.pe-toolbar__bar--top': {
                    'z-index': 3
                },
                '&.pe-toolbar__bar--middle': {
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    left: 0,
                    'z-index': 2
                },
                '&.pe-toolbar__bar--bottom': {
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    left: 0,
                    'z-index': 1
                }
            }]
        }]
    }];
};

var layout$12 = (function (config) {
    return mixin.createStyles(config, createStyles$18);
});

function _defineProperty$10(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$8 = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$10({}, scope + '.pe-toolbar', {
        color: config['color_' + tint + '_text']
    })];
};

var createStyles$19 = function createStyles(config) {
    return [style$8(config, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$8(config, 'dark', ' '),
        // has dark theme
        style$8(config, 'dark', '&')]
    }];
};

var color$7 = (function (config) {
    return mixin.createStyles(config, createStyles$19);
});

var configFn$10 = componentConfig && componentConfig.toolbar;
var config$10 = configFn$10 ? configFn$10(vars$8) : vars$8;
var id$11 = 'pe-toolbar';

styler.add(id$11, layout$12(config$10), color$7(config$10));

var CSS_CLASSES$13 = {
    block: 'pe-toolbar',
    bar: 'pe-toolbar__bar',
    topBar: 'pe-toolbar__bar--top',
    middleBar: 'pe-toolbar__bar--middle',
    bottomBar: 'pe-toolbar__bar--bottom',
    animated: 'pe-header--animated',
    mediumTall: 'pe-header--medium-tall',
    tall: 'pe-header--tall'
};

var barWrapper = function barWrapper(className, content) {
    return m('div', {
        class: [CSS_CLASSES$13.bar, className].join(' ')
    }, content);
};

var bar = function bar() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var bars = [];
    if (opts.content) {
        bars.push(barWrapper(CSS_CLASSES$13.topBar, opts.content));
    } else {
        if (opts.topBar) {
            bars.push(barWrapper(CSS_CLASSES$13.topBar, opts.topBar));
        }
        if (opts.middleBar) {
            bars.push(barWrapper(CSS_CLASSES$13.middleBar, opts.middleBar));
        }
        if (opts.bottomBar) {
            bars.push(barWrapper(CSS_CLASSES$13.bottomBar, opts.bottomBar));
        }
    }
    return bars;
};

var modeClasses$1 = {
    'medium-tall': CSS_CLASSES$13.mediumTall,
    tall: CSS_CLASSES$13.tall
};

var classForMode$1 = function classForMode() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'standard';

    return mode === 'standard' ? '' : modeClasses$1[mode];
};

var createView$13 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = {
        class: [CSS_CLASSES$13.block, CSS_CLASSES$13.animated, classForMode$1(opts.mode), opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    var content = bar(opts);
    return m(tag, props, [opts.before, content, opts.after]);
};

var component$17 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$13(ctrl, opts);
    }
};

var vars$9 = {
    box_shadow: 'inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4)',
    box_shadow_height: 6
};

var createStyles$20 = function createStyles(config) {
    return [{
        '.pe-header-panel': {
            position: 'relative',
            overflow: 'hidden',
            height: '100%',

            '&.pe-header-panel--fit': mixin.fit(),

            ' .pe-header-panel__outer-container': [mixin.fit(), flex$1.layoutVertical],
            ' .pe-header-panel__main-container': [flex$1.flex(), {
                position: 'relative',
                'overflow-y': 'auto',
                'overflow-x': 'hidden',
                '-webkit-overflow-scrolling': 'touch'
            }],
            ' .pe-header-panel__header-container': {
                position: 'relative',

                ' .pe-toolbar': {
                    'z-index': 2
                },
                ' .pe-header-panel__drop-shadow': [mixin.vendorize({
                    transition: 'opacity 0.25s'
                }, appConfig.prefixes_transition), mixin.vendorize({
                    transform: 'translate3d(0,0,0)'
                }, appConfig.prefixes_transform), mixin.vendorize({
                    'box-shadow': config.box_shadow
                }, appConfig.prefixes_box_shadow), {
                    opacity: 0,
                    position: 'absolute',
                    top: 'auto',
                    left: 0,
                    right: 0,
                    height: config.box_shadow_height + 'px',
                    'z-index': 1
                }]
            },
            ' .pe-header-panel__outer-container.pe-header-panel--cascaded > .pe-header-panel__header-container > .pe-header-panel__drop-shadow': {
                'opacity': 1
            },
            '&:not(.pe-header-panel--fixed) > .pe-header-panel__outer-container > .pe-header-panel__header-container': {
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,

                ' .pe-header-panel__background-container': {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden'
                },
                ' .pe-toolbar__top-bar': {
                    'z-index': 1
                },
                ' .pe-toolbar__bottom-bar': {}
            },
            ':not(.pe-header-panel--fit):not(.pe-header-panel--fixed):not(.pe-header-panel--scroll) > .pe-header-panel__outer-container > .pe-header-panel__header-container': {
                'z-index': appConfig.z_header_container
            },
            '.pe-header-panel--fit > .pe-header-panel__outer-container > .pe-header-panel__header-container': {
                'z-index': appConfig.z_fixed_header_container
            },
            ' .pe-header-panel__condensed-background': {
                opacity: 0
            },
            ' .pe-header-panel__header-background, .pe-header-panel__condensed-background': [mixin.vendorize({
                'background-size': 'cover'
            }, appConfig.prefixes_background_size), {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                'background-repeat': 'no-repeat',
                'background-position': 'center center'
            }],
            ' .pe-header-panel__media-dimmer': mixin.fit(),

            '&.pe-header-panel--standard': {
                ' .pe-header-panel__drop-shadow': {
                    opacity: 1
                }
            },
            '&.pe-header-panel--seamed': {
                ' .pe-header-panel__drop-shadow': {
                    display: 'none'
                }
            },
            '&.pe-header-panel--scroll': {
                ' .pe-header-panel__main-container': {
                    overflow: 'visible'
                },
                ' .pe-header-panel__outer-container': {
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden',
                    '-webkit-overflow-scrolling': 'touch'
                }
            },
            '&.pe-header-panel--cover': {
                ' .main-panel': {
                    position: 'static'
                },
                ' .pe-header-panel__main-container': mixin.fit(),
                ' .pe-header-panel__drop-shadow': {
                    position: 'static',
                    width: '100%'
                }
            }
        }
    }];
};

var layout$13 = (function (config) {
    return mixin.createStyles(config, createStyles$20);
});

// Does not contain color styles

var configFn$11 = componentConfig && componentConfig['header-panel'];
var config$11 = configFn$11 ? configFn$11(vars$9) : vars$9;
var id$12 = 'pe-header-panel';

styler.add(id$12, layout$13(config$11));

var _extends$12 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$12 = {
    panel: 'pe-header-panel',
    header: 'pe-header',
    dropShadow: 'pe-header-panel__drop-shadow',
    outerContainer: 'pe-header-panel__outer-container',
    headerContainer: 'pe-header-panel__header-container',
    backgroundContainer: 'pe-header-panel__background-container',
    condensedBackground: 'pe-header-panel__condensed-background',
    headerBackground: 'pe-header-panel__header-background',
    mediaDimmer: 'pe-header-panel__media-dimmer',
    mainContainer: 'pe-header-panel__main-container',

    headerAnimated: 'pe-header--animated',
    fixed: 'pe-header-panel--fixed',
    cascaded: 'pe-header-panel--cascaded',
    modeCover: 'pe-header-panel--cover',
    modeScroll: 'pe-header-panel--scroll',
    modeSeamed: 'pe-header-panel--seamed',
    modeStandard: 'pe-header-panel--standard',
    modeTall: 'pe-header-panel--tall',
    modeWaterfallTall: 'pe-header-panel--waterfall-tall',
    modeWaterfall: 'pe-header-panel--waterfall',

    // lookups:
    toolbar: 'pe-toolbar',
    toolbarTopbar: 'pe-toolbar__bar--top',
    headerTall: 'pe-header--tall'
};

var DEFAULT_SHADOW_HEIGTH = 6;
var DEFAULT_HEADER_HEIGHT = 192;
var DEFAULT_CONDENSED_HEADER_HEIGHT = DEFAULT_HEADER_HEIGHT / 3;
var SCROLL_WATCH_TIMER$1 = 150;

var scroller = void 0; // keep track of scrolling elements on the page
var scrollPositions = {};

var modeConfigs = {
    shadowAfterScroll: {
        'waterfall': 1,
        'waterfall-tall': 1
    },
    alwaysShadow: {
        'standard': 1,
        'tall': 1
    },
    noShadow: {
        'seamed': 1,
        'cover': 1,
        'scroll': 1
    },
    tallMode: {
        'tall': true,
        'waterfall-tall': true
    },
    outerScroll: {
        'scroll': 1
    }
};

var modeClasses = {
    'cover': CSS_CLASSES$12.modeCover,
    'scroll': CSS_CLASSES$12.modeScroll,
    'seamed': CSS_CLASSES$12.modeSeamed,
    'standard': CSS_CLASSES$12.modeStandard,
    'tall': CSS_CLASSES$12.modeTall,
    'waterfall-tall': CSS_CLASSES$12.modeWaterfallTall,
    'waterfall': CSS_CLASSES$12.modeWaterfall
};

var classForMode = function classForMode() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'standard';

    return modeClasses[mode];
};

var setTransform = document.documentElement.style.transform !== undefined ? function (style, string) {
    style.transform = string;
} : function (style, string) {
    style.webkitTransform = string;
};

var translateY = function translateY(style, y) {
    var t = y === null ? '' : 'translate3d(0, ' + y + 'px, 0)';
    setTransform(style, t);
};

var createHeaderComponent = function createHeaderComponent() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var tall = opts.tall || false;
    var tallClass = opts.tallClass || '';
    var toolbarOpts = opts.toolbar;
    if (toolbarOpts) {
        toolbarOpts.class = [toolbarOpts.class || null, tall ? tallClass : null].join(' ');
        if (!toolbarOpts.topBar) {
            toolbarOpts.topBar = m('div');
        }
        return m(component$17, toolbarOpts);
    } else if (opts.content) {
        return m('div', {
            class: [CSS_CLASSES$12.header, opts.class || null, tall ? tallClass : null, opts.animated ? CSS_CLASSES$12.headerAnimated : ''].join(' ')
        }, opts.content);
    } else {
        return m('div', opts);
    }
};

var createViewHeader = function createViewHeader(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var initHeaderContainer = function initHeaderContainer(headerContainer, inited) {
        if (inited) {
            return;
        }
        ctrl.headerContainerElem = headerContainer;
    };
    var header = opts.header ? createHeaderComponent(_extends$12({}, opts.header, ctrl.headerConfig)) : null;
    return m('div', {
        class: CSS_CLASSES$12.headerContainer,
        config: initHeaderContainer
    }, [m('div', {
        class: CSS_CLASSES$12.backgroundContainer
    }, [m('div', { class: CSS_CLASSES$12.condensedBackground }), m('div', { class: CSS_CLASSES$12.headerBackground }), m('div', { class: CSS_CLASSES$12.mediaDimmer })]), header, ctrl.mode === 'seamed' || ctrl.shadow === false ? null : m('div', { class: CSS_CLASSES$12.dropShadow })]);
};

var createViewContent$1 = function createViewContent(ctrl, scrollConfig) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var initMainContainer = function initMainContainer(mainContainer, inited) {
        if (inited) {
            return;
        }
        if (scrollConfig.main) {
            ctrl.scrollerElem = mainContainer;
        }
    };
    return [m('div', {
        class: CSS_CLASSES$12.mainContainer,
        config: initMainContainer,
        onscroll: function onscroll(e) {
            scrollConfig.main(e);
            events.emit('scroll', e);
            ctrl.storeScrollPosition(e.target.scrollTop);
        }
    }, opts.content ? opts.content : null)];
};

var createView$12 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    opts.header = opts.header || {};
    opts.configs = opts.configs || [];
    ctrl.init(ctrl);

    var updateContentOnScroll = opts.updateContentOnScroll || false;
    var ignoreContent = !updateContentOnScroll && ctrl.isScrolling;
    var scrollerType = modeConfigs.outerScroll[ctrl.mode] ? 'outer' : 'main';
    var handleScroll = ctrl.handleScroll.bind(ctrl);
    var header = createViewHeader(ctrl, opts);
    var tag = opts.tag || 'div';

    var scrollConfig = {};
    scrollConfig[scrollerType] = handleScroll;

    var initOuterContainer = function initOuterContainer(outerContainer, inited) {
        var headerElem = outerContainer.querySelector('.' + CSS_CLASSES$12.header) || outerContainer.querySelector('.' + CSS_CLASSES$12.toolbar);
        if (!headerElem) {
            return;
        }
        if (inited && ctrl.headerElem) {
            return;
        }
        var headerContainer = outerContainer.querySelector('.' + CSS_CLASSES$12.headerContainer);
        var topBarElem = headerContainer.querySelector('.' + CSS_CLASSES$12.toolbarTopbar);
        var headerBg = headerContainer.querySelector('.' + CSS_CLASSES$12.headerBackground);
        var condensedHeaderBg = headerContainer.querySelector('.' + CSS_CLASSES$12.condensedBackground);

        ctrl.outerContainerElem = outerContainer;
        ctrl.headerElem = headerElem;
        ctrl.headerTopBarElem = topBarElem;
        ctrl.headerBg = headerBg;
        ctrl.condensedHeaderBg = condensedHeaderBg;

        if (!opts.animated) {
            ctrl.setHeight(headerContainer.clientHeight);
        }
        if (scrollConfig.outer) {
            ctrl.scrollerElem = outerContainer;
        }

        ctrl.restoreScrollPosition();
    };

    var props = _extends$12({}, {
        class: [CSS_CLASSES$12.panel, ctrl.fixed ? CSS_CLASSES$12.fixed : null, classForMode(ctrl.mode), opts.class].join(' '),
        id: opts.id || '',
        config: function config(el, inited) {
            if (inited) {
                return;
            }
            ctrl.headerPanelElem = el;
        }
    });

    var content = m('div', {
        class: CSS_CLASSES$12.outerContainer,
        config: initOuterContainer,
        onscroll: function onscroll(e) {
            scrollConfig.outer(e);
            events.emit('scroll', e);
        }
    }, [header, ignoreContent ? {
        subtree: 'retain'
    } : createViewContent$1(ctrl, scrollConfig, opts)]);
    return m(tag, props, [opts.before, content, opts.after]);
};

var component$15 = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var ctrl = void 0,
            mode = void 0,
            y = void 0,
            scrolled = void 0,
            prevScrollTop = void 0,
            headerMargin = void 0,
            headerHeight = void 0;

        if (opts.mode) {
            mode = opts.mode;
        } else if (opts.header && opts.header.toolbar) {
            mode = opts.header.toolbar.mode;
        } else if (opts.header && opts.header.content) {
            mode = opts.header.mode;
        }
        mode = mode || 'standard';
        var tall = modeConfigs.tallMode[mode] || false;
        var tallClass = opts.tallClass || CSS_CLASSES$12.headerTall;
        var animated = opts.animated || false;
        var fixed = opts.fixed || false;
        var condenses = opts.condenses || false;
        var scrollAwayTopbar = opts.scrollAwayTopbar || false;
        var noReveal = opts.noReveal || false;
        var keepCondensedHeader = opts.keepCondensedHeader || false;
        var noDissolve = opts.noDissolve || false;
        var backgroundScrollSpeed = opts.backgroundScrollSpeed !== undefined ? opts.backgroundScrollSpeed : 0.5;
        y = 0;
        scrolled = false;
        prevScrollTop = 0;
        // defaults, finally set with setHeight
        var shadowHeight = DEFAULT_SHADOW_HEIGTH;
        headerHeight = (opts.headerHeight || DEFAULT_HEADER_HEIGHT) + shadowHeight;
        var condensedHeaderHeight = (opts.condensedHeaderHeight || DEFAULT_CONDENSED_HEADER_HEIGHT) + shadowHeight;
        headerMargin = headerHeight - condensedHeaderHeight;

        var handleScrollFns = {
            standard: function standard() {
                //
            },
            fixed: function fixed() {
                var isScrolled = ctrl.scrollerElem.scrollTop > 0;
                ctrl.showShadow(isScrolled);
                scrolled = isScrolled;
            },
            animated: function animated() {
                var isScrolled = ctrl.scrollerElem.scrollTop > 0;
                if (isScrolled !== scrolled) {
                    var headerElem = ctrl.headerElem;
                    if (headerElem && tall) {
                        headerElem.classList[isScrolled ? 'remove' : 'add'](tallClass);
                    }
                    ctrl.showShadow(isScrolled);
                    scrolled = isScrolled;
                }
            },
            dynamicHeader: function dynamicHeader() {
                var sy = void 0,
                    cascaded = false,
                    sTop = void 0;

                if (!ctrl.scrollInited && opts.initialScrollPosition) {
                    sTop = opts.initialScrollPosition;
                } else {
                    sTop = ctrl.scrollerElem.scrollTop;
                }

                if (!ctrl.scrollInited && opts.initialPositionFixed) {
                    prevScrollTop = sTop;
                    y = 0;
                    return;
                }

                if (sTop < headerMargin) {
                    sy = sTop;
                } else {
                    sy = Math.min(keepCondensedHeader ? headerMargin : headerHeight, Math.max(0, noReveal || keepCondensedHeader ? sTop : y + sTop - prevScrollTop));
                    if (condenses && prevScrollTop >= sTop && sTop > headerMargin) {
                        sy = Math.max(sy, headerMargin);
                    }
                }
                if (sTop > 0) {
                    ctrl.transformHeader(sy);
                } else if (p.isTouch) {
                    ctrl.enlargeImage(sy);
                }
                if (!modeConfigs.noShadow[opts.mode]) {
                    if (sTop > sy) {
                        cascaded = true;
                    }
                    ctrl.showShadow(cascaded);
                }
                y = sy;
                prevScrollTop = Math.max(sTop, 0);
            }
        };

        var handleScrollFn = void 0;
        if (animated) {
            handleScrollFn = handleScrollFns.animated;
        } else if (mode === 'standard') {
            handleScrollFn = handleScrollFns.standard;
        } else if (fixed) {
            handleScrollFn = handleScrollFns.fixed;
        } else {
            handleScrollFn = handleScrollFns.dynamicHeader;
        }

        return {
            headerPanelElem: undefined,
            scrollerElem: undefined,
            outerContainerElem: undefined,
            headerContainerElem: undefined,
            headerTopBarElem: undefined,
            headerElem: undefined,
            headerBg: undefined,
            condensedHeaderBg: undefined,
            mode: mode,
            fixed: fixed,
            shadow: opts.shadow !== undefined && !opts.shadow ? false : true,
            scrollWatchId: 0,
            isScrolling: false,
            scrollInited: false,
            headerConfig: {
                tall: tall,
                tallClass: tallClass,
                animated: animated,
                fixed: fixed
            },

            init: function init(controller) {
                ctrl = controller;
            },

            setHeight: function setHeight(h) {
                if (opts.headerHeight === undefined) {
                    headerHeight = h + shadowHeight;
                    headerMargin = headerHeight - condensedHeaderHeight;
                }
                if (!fixed) {
                    var mainContainer = ctrl.outerContainerElem.querySelector('.' + CSS_CLASSES$12.mainContainer);
                    mainContainer.style.paddingTop = h + 'px';
                }
                if (noReveal) {
                    ctrl.showShadow(false);
                }
            },

            handleScroll: function handleScroll(e) {
                if (e) {
                    // this is a real scroll event
                    // instead of a programmatic call
                    ctrl.isScrolling = true;
                    scroller = ctrl;
                    clearTimeout(ctrl.scrollWatchId);
                    ctrl.scrollWatchId = setTimeout(function () {
                        ctrl.isScrolling = false;
                        scroller = undefined;
                    }, SCROLL_WATCH_TIMER$1);
                }

                if (mode === 'scroll') {
                    return;
                }
                if (modeConfigs.alwaysShadow[mode]) {
                    ctrl.showShadow(true);
                }

                handleScrollFn();
                ctrl.scrollInited = true;

                if (e && opts.scroll) {
                    opts.scroll(e);
                }
            },

            condenseHeader: function condenseHeader(hy) {
                var reset = hy === null;

                // adjust top bar in core-header so the top bar stays at the top
                if (!scrollAwayTopbar) {
                    if (ctrl.headerTopBarElem) {
                        translateY(ctrl.headerTopBarElem.style, Math.min(hy, headerMargin));
                    }
                }

                // transition header bg
                var hbg = ctrl.headerBg.style;
                if (hbg) {
                    if (!noDissolve) {
                        hbg.opacity = reset ? '' : (headerMargin - hy) / headerMargin;
                    }

                    // adjust header bg so it stays at the center
                    translateY(hbg, reset ? null : hy * backgroundScrollSpeed);

                    // transition condensed header bg
                    if (!noDissolve) {
                        var chbg = ctrl.condensedHeaderBg.style;
                        chbg.opacity = reset ? '' : hy / headerMargin;
                        // adjust condensed header bg so it stays at the center
                        translateY(chbg, reset ? null : hy * backgroundScrollSpeed);
                    }
                }
            },

            transformHeader: function transformHeader(hy) {
                if (hy < 0) {
                    return;
                }
                translateY(ctrl.headerContainerElem.style, -hy);
                if (condenses) {
                    ctrl.condenseHeader(hy);
                }
                if (opts.transform) {
                    opts.transform({
                        y: hy,
                        height: headerHeight,
                        condensedHeight: condensedHeaderHeight
                    });
                }
            },

            enlargeImage: function enlargeImage(hy) {
                ctrl.headerBg.style.height = 100 / headerHeight * (headerHeight + Math.abs(hy / 2)) + '%';
            },

            showShadow: function showShadow(cascaded) {
                if (modeConfigs.alwaysShadow[mode]) {
                    cascaded = true;
                }
                ctrl.outerContainerElem.classList[cascaded ? 'add' : 'remove'](CSS_CLASSES$12.cascaded);
            },

            storeScrollPosition: function storeScrollPosition(scrollTop) {
                if (opts.restoreScrollPositionId) {
                    scrollPositions[opts.restoreScrollPositionId] = scrollTop;
                }
            },

            restoreScrollPosition: function restoreScrollPosition() {
                if (opts.restoreScrollPositionId) {
                    var scrollTop = scrollPositions[opts.restoreScrollPositionId];
                    if (scrollTop !== undefined) {
                        var restore = function restore() {
                            return ctrl.scrollerElem.scrollTop = scrollTop;
                        };
                        restore();
                        setTimeout(restore, 0);
                    }
                }
            }
        };
    },

    view: function view(ctrl, opts) {
        if (scroller && scroller !== ctrl) {
            // if we are scrolling,
            // don't render other header-panels
            return {
                subtree: 'retain'
            };
        } else {
            return createView$12(ctrl, opts);
        }
    }
};

var rgba$6 = appConfig.rgba;

var vars$10 = {
    padding: appConfig.grid_unit_component,
    padding_compact: appConfig.grid_unit_component / 2,
    border_width_stacked: 1,
    border_width_bordered: 1,

    color_light_border: rgba$6(appConfig.color_light_foreground, appConfig.blend_light_border_light),
    color_dark_border: rgba$6(appConfig.color_dark_foreground, appConfig.blend_dark_border_light)
};

var borderStyle = function borderStyle(config) {
    return mixin.hairline('border-bottom'), {
        'border-style': 'none none solid none',
        'border-width': config.border_width_bordered + 'px'
    };
};

var createStyles$21 = function createStyles(config) {
    return [{
        '.pe-list': {
            padding: config.padding + 'px 0',

            '&.pe-list--header': {
                'padding-top': 0
            },

            '&.pe-list--compact': {
                padding: config.padding_compact + 'px 0'
            },

            '& + &': [mixin.hairline('border-top'), {
                'border-style': 'solid none none none',
                'border-width': config.border_width_stacked + 'px'
            }],

            '&.pe-list--borders': {
                ' .pe-list-tile:not(.pe-list__header)': {
                    '&:not(:last-child)': {
                        '&': borderStyle(config)
                    }
                }
            },

            '&.pe-list--borders-indented': {
                'border-top': 'none',

                ' .pe-list-tile:not(.pe-list__header)': {
                    '&:not(:last-child)': {
                        ' .pe-list-tile__content:not(.pe-list-tile__content--front)': borderStyle(config)
                    }
                }
            }
        }
    }];
};

var layout$14 = (function (config) {
    return mixin.createStyles(config, createStyles$21);
});

function _defineProperty$11(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$9 = function style(config, tint) {
    var _ref;

    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [(_ref = {}, _defineProperty$11(_ref, scope + '.pe-list', {
        '&.pe-list--borders': {
            ' .pe-list-tile:not(.pe-list__header)': {
                '&:not(:last-child)': {
                    'border-color': config['color_' + tint + '_border']
                }
            }
        },

        '&.pe-list--borders-indented': {
            ' .pe-list-tile:not(.pe-list__header)': {
                ' .pe-list-tile__content:not(.pe-list-tile__content--front)': {
                    'border-color': config['color_' + tint + '_border']
                }
            }
        }
    }), _defineProperty$11(_ref, ' .pe-list + .pe-list', {
        'border-color': config['color_' + tint + '_border']
    }), _ref)];
};

var createStyles$22 = function createStyles(config) {
    return [style$9(config, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$9(config, 'dark', ' '),
        // has dark theme
        style$9(config, 'dark', '&')]
    }];
};

var color$8 = (function (config) {
    return mixin.createStyles(config, createStyles$22);
});

var configFn$12 = componentConfig && componentConfig.list;
var config$12 = configFn$12 ? configFn$12(vars$10) : vars$10;
var id$13 = 'pe-list';

styler.add(id$13, layout$14(config$12), color$8(config$12));

var _extends$13 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$14 = {
    block: 'pe-list',
    header: 'pe-list__header',
    borders: 'pe-list--borders',
    indentedBorders: 'pe-list--borders-indented',
    hasHeader: 'pe-list--header',
    isCompact: 'pe-list--compact',
    isHoverable: 'pe-list--hoverable',
    isSelectable: 'pe-list--selectable'
};

var createView$14 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = {
        class: [CSS_CLASSES$14.block, opts.borders ? CSS_CLASSES$14.borders : null, opts.indentedBorders ? CSS_CLASSES$14.indentedBorders : null, opts.hoverable ? CSS_CLASSES$14.isHoverable : null, opts.selectable ? CSS_CLASSES$14.isSelectable : null, opts.header ? CSS_CLASSES$14.hasHeader : null, opts.compact ? CSS_CLASSES$14.isCompact : null, opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    var headerOpts = void 0;
    if (opts.header) {
        headerOpts = _extends$13({}, opts.header);
        headerOpts.class = [CSS_CLASSES$14.header, headerOpts.class || null].join(' ');
    }
    var content = [headerOpts ? m(component$7, headerOpts) : null, opts.tiles ? opts.tiles : null];
    return m(tag, props, [opts.before, content, opts.after]);
};

var component$18 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$14(ctrl, opts);
    }
};

var vars$11 = {
    sizes: [1, 1.5, 2, 3, 4, 5, 6, 7],
    min_size: 1.5,
    max_size_small_screen: 5,
    size_factor: appConfig.grid_unit_menu,
    border_radius: appConfig.unit_block_border_radius,

    color_light_background: appConfig.rgba(appConfig.color_light_background),
    color_dark_background: appConfig.rgba(appConfig.color_dark_background)
};

function _defineProperty$12(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var unifySize$1 = function unifySize(config, size) {
    return size < config.min_size ? config.min_size : size;
};

var widthClass$1 = function widthClass(config, size) {
    var sizeStr = size.toString().replace('.', '-');
    return 'pe-menu--width-' + sizeStr;
};

var widthStyle = function widthStyle(config, size) {
    var s = unifySize$1(config, size);
    return _defineProperty$12({}, '&.' + widthClass$1(config, s), {
        width: config.size_factor * s + 'px',
        'max-width': '100%'
    });
};

var createStyles$23 = function createStyles(config) {
    return [{
        '.pe-menu': [
        // transition-duration set in js
        mixin.vendorize({
            'transition-timing-function': 'ease-out'
        }, appConfig.prefixes_transition), mixin.vendorize({
            'transition-property': 'opacity'
        }, appConfig.prefixes_transition), config.sizes.map(function (size) {
            return widthStyle(config, size);
        }), _defineProperty$12({
            'z-index': appConfig.z_menu,
            opacity: 0,
            position: 'absolute',
            width: '100%',
            'min-width': appConfig.grid_unit_menu * config.min_size + 'px',

            '&.pe-menu--width-auto': {
                width: 'auto'
            },

            '&.pe-menu--visible': {
                opacity: 1
            },

            '&.pe-menu--permanent': {
                position: 'relative',
                opacity: 1
            },

            ' .pe-menu__content': {
                width: '100%',
                'border-radius': config.border_radius + 'px'
            }

        }, '@media (max-width: ' + appConfig.unit_screen_size_large + 'px)', {
            'max-width': config.max_size_small_screen * appConfig.grid_unit_menu + 'px'
        })]

    }];
};

var layout$15 = (function (config) {
    return mixin.createStyles(config, createStyles$23);
});

function _defineProperty$13(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$10 = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$13({}, scope + '.pe-menu', {
        ' .pe-menu__content': {
            'background-color': config['color_' + tint + '_background']
        }
    })];
};

var createStyles$24 = function createStyles(config) {
    return [style$10(config, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$10(config, 'dark', ' '),
        // has dark theme
        style$10(config, 'dark', '&')]
    }];
};

var color$9 = (function (config) {
    return mixin.createStyles(config, createStyles$24);
});

var configFn$13 = componentConfig && componentConfig.menu;
var config$13 = configFn$13 ? configFn$13(vars$11) : vars$11;
var id$14 = 'pe-menu';

styler.add(id$14, layout$15(config$13), color$9(config$13));

var _extends$14 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$15 = {
    block: 'pe-menu',
    content: 'pe-menu__content',
    placeholder: 'pe-menu--placeholder',
    visible: 'pe-menu--visible',
    permanent: 'pe-menu--permanent',
    target: 'pe-menu--target',
    width_n: 'pe-menu--width-',
    width_auto: 'pe-menu--width-auto',

    // lookup
    listTile: 'pe-list-tile',
    selectedListTile: 'pe-list-tile--selected'
};

var OFFSET_V = -8;
var DEFAULT_OFFSET_H = 16;
var MIN_SIZE = 1.5;

var positionMenu = function positionMenu(ctrl, opts) {
    if (!opts.target) {
        return;
    }
    var targetEl = document.querySelector('#' + opts.target);
    if (!targetEl) {
        return;
    }
    var offsetH = opts.offset !== undefined ? opts.offset : DEFAULT_OFFSET_H;
    var menuEl = ctrl.el;
    if (!menuEl) {
        return;
    }
    var contentEl = ctrl.contentEl;
    var origin = opts.origin || 'top-left';
    var reposition = opts.reposition === false ? false : true;
    var positionOffset = 0;
    if (reposition) {
        var firstItem = contentEl.querySelectorAll('.' + CSS_CLASSES$15.listTile)[0];
        var selectedItem = contentEl.querySelector('.' + CSS_CLASSES$15.selectedListTile);
        if (firstItem && selectedItem) {
            // calculate v position: menu should shift upward relative to the first item
            var firstItemRect = firstItem.getBoundingClientRect();
            var selectedItemRect = selectedItem.getBoundingClientRect();
            positionOffset = selectedItemRect.top - firstItemRect.top;
        }
        // align to middle of target
        var alignEl = selectedItem || firstItem;
        var alignRect = alignEl.getBoundingClientRect();
        var _targetRect = targetEl.getBoundingClientRect();
        var heightDiff = alignRect.height - _targetRect.height;
        positionOffset += heightDiff / 2;
    }
    var targetRect = targetEl.getBoundingClientRect();
    var parentRect = menuEl.parentNode.getBoundingClientRect();
    var alignLeft = function alignLeft() {
        return menuEl.style.left = targetRect.left - parentRect.left + offsetH + 'px';
    };
    var alignRight = function alignRight() {
        return menuEl.style.right = targetRect.right - parentRect.right + offsetH + 'px';
    };
    var alignTop = function alignTop() {
        return menuEl.style.top = targetRect.top - parentRect.top - positionOffset + OFFSET_V + 'px';
    };
    var alignBottom = function alignBottom() {
        return menuEl.style.bottom = targetRect.bottom - parentRect.bottom - positionOffset + 'px';
    };
    var alignFn = {
        'top-left': function topLeft() {
            return alignTop() && alignLeft();
        },
        'top-right': function topRight() {
            return alignTop() && alignRight();
        },
        'bottom-left': function bottomLeft() {
            return alignBottom() && alignLeft();
        },
        'bottom-right': function bottomRight() {
            return alignBottom() && alignRight();
        }
    };
    alignFn[origin].call();
};

var show$2 = function show(ctrl, opts) {
    ctrl.isTransitioning = true;
    return transition$1.show(_extends$14({}, opts, {
        el: ctrl.el,
        showClass: CSS_CLASSES$15.visible
    })).then(function () {
        ctrl.isTransitioning = false;
        ctrl.visible = true;
        if (opts.didShow) {
            opts.didShow(opts.id);
        }
    });
};

var hide$2 = function hide(ctrl, opts) {
    ctrl.isTransitioning = true;
    return transition$1.hide(_extends$14({}, opts, {
        el: ctrl.el,
        showClass: CSS_CLASSES$15.visible
    })).then(function () {
        ctrl.isTransitioning = false;
        ctrl.visible = false;
        if (opts.didHide) {
            opts.didHide(opts.id);
        }
        m.redraw(); // removes remainder of drawn component
    });
};

var unifySize = function unifySize(size) {
    return size < MIN_SIZE ? MIN_SIZE : size;
};

var widthClass = function widthClass(size) {
    var sizeStr = size.toString().replace('.', '-');
    return CSS_CLASSES$15.width_n + sizeStr;
};

var createView$15 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var listenEl = document.body;
    var activateDismissTap = function activateDismissTap() {
        listenEl.addEventListener('click', handleDismissTap);
    };
    var deActivateDismissTap = function deActivateDismissTap() {
        listenEl.removeEventListener('click', handleDismissTap);
    };
    var handleDismissTap = function handleDismissTap(e) {
        if (e.target === ctrl.el) {
            return;
        }
        deActivateDismissTap();
        if (e.defaultPrevented) {
            // clicked on .pe-menu__content
            hide$2(ctrl, opts);
        } else {
            hide$2(ctrl, _extends$14({}, opts, { hideDelay: 0 }));
        }
    };
    var tag = opts.tag || 'div';
    var props = {
        class: [CSS_CLASSES$15.block, opts.permanent ? CSS_CLASSES$15.permanent : null, opts.target ? CSS_CLASSES$15.target : 'layout center-center', opts.size ? widthClass(unifySize(opts.size)) : null, opts.class].join(' '),

        id: opts.id || '',
        config: function config(el, inited, context, vdom) {
            if (inited) {
                return;
            }
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            ctrl.el = el;

            var update = function update() {
                positionMenu(ctrl, opts);
                m.redraw();
            };

            var handleEscape = function handleEscape(e) {
                if (e.which === 27) {
                    hide$2(ctrl, _extends$14({}, opts, { hideDelay: 0 }));
                }
            };

            if (!opts.permanent) {
                events.subscribe('resize', update);
                events.subscribe('keydown', handleEscape);
                setTimeout(function () {
                    activateDismissTap();
                    show$2(ctrl, opts);
                }, 0);
            }
            context.onunload = function () {
                events.unsubscribe('resize', update);
                events.unsubscribe('keydown', handleEscape);
                if (!opts.permanent) {
                    deActivateDismissTap();
                }
            };

            positionMenu(ctrl, opts);
        }
    };
    var content = m('div', {
        class: CSS_CLASSES$15.content,
        config: function config(el, inited) {
            if (!inited) {
                ctrl.contentEl = el;
            }
        },
        onclick: function onclick(e) {
            e.preventDefault();
        }
    }, [m(component$2, {
        z: ctrl.z,
        animated: true
    }), opts.content ? opts.content : null]);
    return m(tag, props, [opts.before, content, opts.after]);
};

var component$20 = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var z = opts.z !== undefined ? opts.z : 1;
        return {
            z: z,
            el: null,
            contentEl: null,
            isTransitioning: false,
            visible: opts.permanent || false
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (opts.show && !ctrl.visible) {
            ctrl.visible = true;
        }
        if (ctrl.visible) {
            return createView$15(ctrl, opts);
        } else {
            return m('span', { class: CSS_CLASSES$15.placeholder });
        }
    }
};

// Simple start/stop/pause/resume timer

var Timer = function Timer(callback, delay) {
    var timerId = void 0,
        start = void 0,
        remaining = delay;

    this.stop = function () {
        window.clearTimeout(timerId);
    };

    this.pause = function () {
        window.clearTimeout(timerId);
        remaining -= new Date() - start;
    };

    this.resume = function () {
        start = new Date();
        window.clearTimeout(timerId);
        timerId = window.setTimeout(callback, remaining);
    };

    this.resume();
};

var _extends$15 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$16 = {
    content: 'pe-notification__content',
    title: 'pe-notification__title',
    multilineTitle: 'pe-notification__title--multiline',
    action: 'pe-notification__action',
    horizontal: 'pe-notification--horizontal',
    vertical: 'pe-notification--vertical'
};

var DEFAULT_TIME_OUT = 3;

var pause = function pause(ctrl) {
    ctrl.isPaused = true;
    if (ctrl.timer) {
        ctrl.timer.pause();
    }
};

var unpause = function unpause(ctrl) {
    ctrl.isPaused = false;
    if (ctrl.timer) {
        ctrl.timer.resume();
    }
};

var stopTimer = function stopTimer(ctrl) {
    if (ctrl.timer) {
        ctrl.timer.stop();
    }
};

var show$3 = function show(ctrl, opts) {
    stopTimer(ctrl);
    var id = ctrl.instanceId;
    ctrl.isTransitioning = true;
    return transition$1.show(_extends$15({}, opts, ctrl.transitions.show(ctrl, opts))).then(function () {
        ctrl.isTransitioning = false;
        if (ctrl.didShow) {
            // notify multiple
            ctrl.didShow(id);
            // this will call opts.didShow
        }

        // set timer to hide in a few seconds
        var timeout = opts.timeout;
        if (timeout === 0) {
            // do not time out
        } else {
            var timeoutSeconds = timeout !== undefined ? timeout : DEFAULT_TIME_OUT;
            ctrl.timer = new Timer(function () {
                hide$3(ctrl, opts);
            }, timeoutSeconds * 1000);
        }
    });
};

var hide$3 = function hide(ctrl, opts) {
    stopTimer(ctrl);
    var id = ctrl.instanceId;
    ctrl.isTransitioning = true;
    return transition$1.hide(_extends$15({}, opts, ctrl.transitions.hide(ctrl, opts))).then(function () {
        stopTimer(ctrl);
        ctrl.isTransitioning = false;
        if (ctrl.didHide) {
            // notify multiple
            ctrl.didHide(id);
            // this will call opts.didHide
        }
        m.redraw(); // removes remainder of drawn component
    });
};

var createView$16 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = {
        class: [ctrl.class, opts.layout === 'vertical' ? CSS_CLASSES$16.vertical : CSS_CLASSES$16.horizontal, opts.class].join(' '),
        id: opts.id || '',
        config: function config(el, inited, context, vdom) {
            if (inited) return;
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            ctrl.el = el;

            // container element is used for transitioning the notification
            ctrl.containerEl = document.querySelector(opts.containerSelector || '.pe-notification__holder');
            show$3(ctrl, opts);
        },
        onclick: function onclick(e) {
            e.preventDefault();
        }
    };
    var titleConfig = function titleConfig(el, inited) {
        if (inited) return;
        var height = el.getBoundingClientRect().height;
        var lineHeight = parseInt(window.getComputedStyle(el).lineHeight, 10);
        var paddingTop = parseInt(window.getComputedStyle(el).paddingTop, 10);
        var paddingBottom = parseInt(window.getComputedStyle(el).paddingBottom, 10);
        if (height > lineHeight + paddingTop + paddingBottom) {
            el.classList.add(CSS_CLASSES$16.multilineTitle);
        }
    };
    var title = opts.title;
    var content = m('div', {
        class: CSS_CLASSES$16.content
    }, [title ? m('div', {
        class: CSS_CLASSES$16.title,
        config: titleConfig
    }, title) : null, opts.action ? m('div', {
        class: CSS_CLASSES$16.action
    }, [opts.action]) : null]);
    return m(tag, props, content);
};

var component$22 = {
    controller: function controller() {
        var instanceData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        // instanceData contains {id, opts}
        return _extends$15({}, instanceData, {
            el: null,
            containerEl: null,
            dismissEl: null,
            isTransitioning: false,
            timer: null,
            isPaused: false
        });
    },
    view: function view(ctrl, instanceData) {
        // instanceData contains {id, opts}
        var opts = typeof instanceData.opts === 'function' ? instanceData.opts() : instanceData.opts;
        if (instanceData.hide && !ctrl.isTransitioning) {
            hide$3(ctrl, opts);
        }
        if (instanceData.pause && !ctrl.isPaused) {
            pause(ctrl, opts);
        } else if (instanceData.unpause && ctrl.isPaused) {
            unpause(ctrl, opts);
        }
        return createView$16(ctrl, opts);
    }
};

var show$4 = function show(ctrl, opts) {
    return {
        el: ctrl.containerEl,
        showDuration: opts.showDuration || .5,
        showDelay: opts.showDelay || 0,
        beforeShow: function beforeShow() {
            return ctrl.containerEl.style.opacity = 0;
        },
        show: function show() {
            return ctrl.containerEl.style.opacity = 1;
        }
    };
};

var hide$4 = function hide(ctrl, opts) {
    return {
        el: ctrl.containerEl,
        hideDuration: opts.hideDuration || .5,
        hideDelay: opts.hideDelay || 0,
        hide: function hide() {
            return ctrl.containerEl.style.opacity = 0;
        }
    };
};

var transitions = {
    show: show$4,
    hide: hide$4
};

var buttonPaddingH = 8; // padding, inner text space

var vars$12 = {
    width: 274,
    minHeight: 80,
    border_radius: appConfig.unit_block_border_radius,
    title_padding_h: buttonPaddingH,
    title_single_padding_v: 14,
    title_multi_padding_v: 20,
    side_padding: 24 - buttonPaddingH,
    font_size: 14,
    line_height: 20,

    // switch light and dark: dark on light and light on dark

    color_light_background: appConfig.rgba(appConfig.color_dark_background, .85),
    color_light_text: appConfig.rgba(appConfig.color_dark_foreground, appConfig.blend_light_dark_primary),

    color_dark_background: appConfig.rgba(appConfig.color_light_background),
    color_dark_text: appConfig.rgba(appConfig.color_light_foreground, appConfig.blend_light_text_primary)
};

var createStyles$25 = function createStyles(config) {
    return [{
        '.pe-notification__holder': [mixin.fit(), flex$1.layoutCenterCenter, {
            'z-index': appConfig.z_notification
        }],
        '.pe-notification': [flex$1.layoutCenter, {
            position: 'relative',

            padding: '0 ' + config.side_padding + 'px',
            margin: '0 auto',
            'border-radius': config.border_radius + 'px',

            ' .pe-notification__content': {
                width: '100%'
            },

            ' .pe-notification__title': {
                'padding': config.title_single_padding_v + 'px ' + config.title_padding_h + 'px',
                'font-size': config.font_size + 'px',
                'line-height': config.line_height + 'px'
            },

            ' .pe-notification__action': {
                ' .pe-button': {
                    margin: 0
                }
            },

            '&.pe-notification--horizontal': {
                ' .pe-notification__content': flex$1.layoutHorizontal,
                ' .pe-notification__title': flex$1.flex(),
                ' .pe-notification__title--multi-line': {
                    'padding-top': config.title_multi_padding_v + 'px',
                    'padding-bottom': config.title_multi_padding_v + 'px'
                },
                ' .pe-notification__action': flex$1.layoutCenter
            },
            '&.pe-notification--vertical': {
                ' .pe-notification__content': flex$1.layoutVertical,
                ' .pe-notification__title': {
                    'padding-bottom': '4px'
                },
                ' .pe-notification__title--multi-line': {
                    'padding-top': config.title_multi_padding_v + 'px'
                },
                ' .pe-notification__action': flex$1.layoutEndJustified
            }
        }],
        '.pe-notification--notification': {
            width: config.width + 'px',
            'min-height': config.minHeight + 'px'
        }
    }];
};

var layout$16 = (function (config) {
    return mixin.createStyles(config, createStyles$25);
});

function _defineProperty$14(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$11 = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$14({}, scope + '.pe-notification', {
        color: config['color_' + tint + '_text'],
        background: config['color_' + tint + '_background']
    })];
};

var createStyles$26 = function createStyles(config) {
    return [style$11(config, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$11(config, 'dark', ' '),
        // has dark theme
        style$11(config, 'dark', '&')]
    }];
};

var color$10 = (function (config) {
    return mixin.createStyles(config, createStyles$26);
});

var configFn$14 = componentConfig && componentConfig.notification;
var config$14 = configFn$14 ? configFn$14(vars$12) : vars$12;
var id$15 = 'pe-notification-notification';

styler.add(id$15, layout$16(config$14), color$10(config$14));

var notification = multiple({
    instance: component$22,
    class: 'pe-notification pe-notification--notification',
    defaultId: 'default_notification',
    tag: 'div.pe-notification__holder',
    noneTag: 'span.pe-notification__placeholder',
    bodyShowClass: 'pe-notification--open',
    queue: true,
    transitions: transitions
});

var layout$17 = (function (config) {
    return mixin.createStyles(config, function (config) {
        return createStyles$12(config, '.pe-control--radio', 'radio');
    });
});

var createStyles$27 = function createStyles(config) {
    return [style$5(config, 'light', '.pe-control--radio'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$5(config, 'dark', ' '),
        // has dark theme
        style$5(config, 'dark', '&')]
    }];
};

var color$11 = (function (config) {
    return mixin.createStyles(config, createStyles$27);
});

var configFn$15 = componentConfig && componentConfig['radio-button'];
var config$15 = configFn$15 ? configFn$15(selectionControlConfig) : selectionControlConfig;
var id$16 = 'pe-radio-button';

styler.add(id$16, layout$17(config$15), color$11(config$15));

// default icons
var iconOff$1 = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>');
var iconOn$1 = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>');

var theme$1 = {
    iconOff: iconOff$1,
    iconOn: iconOn$1
};

var selectable$1 = function selectable(selected) {
    return !selected;
};

var createView$17 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    opts.theme = theme$1;
    opts.defaultClass = 'pe-control--radio';
    opts.type = 'radio';
    opts.selectionView = createSelection;
    opts.selectable = selectable$1;
    return m(component$10, opts);
};

var component$23 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$17(ctrl, opts);
    }
};

var rgba$7 = appConfig.rgba;

var line_height_input = 20;
var input_padding_v = 7;

var vars$14 = {
    vertical_spacing_top: 6, // 8 minus natural label height padding (1)
    vertical_spacing_bottom: 7, // 8 minus natural label height padding (1)
    input_focus_border_width: 2,
    input_focus_border_animation_duration: appConfig.animation_duration,

    floating_label_vertical_spacing_top: 30, // 16 + 8 + 8 minus natural label height padding (2)
    floating_label_vertical_spacing_bottom: 7, // 8 minus natural label height padding (1)
    floating_label_top: 14,
    floating_label_animation_duration: '.12s',

    input_padding_h: 0,
    input_padding_v: input_padding_v,
    input_border_width: 1,
    margin_top_error_message: 6,
    font_size_input: 16,
    font_size_error: 12,
    font_size_floating_label: 12,

    line_height_input: line_height_input,

    dense_floating_label_vertical_spacing_top: 23, // 12 + 8 + 4 minus natural label height padding (1)
    dense_floating_label_vertical_spacing_bottom: 4, // 8 minus natural label height padding (1)
    dense_floating_label_top: 10,
    dense_font_size_input: 13,
    dense_font_size_floating_label: 13,

    full_width_input_padding_h: 20,
    full_width_input_padding_v: 18, // 20 minus natural label height padding (2)

    dense_full_width_input_padding_h: 16,
    dense_full_width_input_padding_v: 15, // 16 minus natural label height padding (1)
    dense_full_width_font_size_input: 13,

    color_light_input_text: rgba$7(appConfig.color_light_foreground, appConfig.blend_light_text_primary),
    color_light_input_background: rgba$7(appConfig.color_light_background), // only used to 'remove' autofill color
    color_light_highlight_text: rgba$7(appConfig.color_primary, appConfig.blend_light_text_primary),
    color_light_input_bottom_border: rgba$7(appConfig.color_light_foreground, appConfig.blend_light_border_light),
    color_light_input_error_text: rgba$7('221, 44, 0'),
    color_light_input_error_border: rgba$7('221, 44, 0'),
    color_light_input_placeholder: rgba$7(appConfig.color_light_foreground, appConfig.blend_light_text_tertiary),
    color_light_label_text: rgba$7(appConfig.color_light_foreground, appConfig.blend_light_text_tertiary),
    color_light_disabled_label_text: rgba$7(appConfig.color_light_foreground, appConfig.blend_light_text_disabled),
    color_light_readonly_label_text: rgba$7(appConfig.color_light_foreground, appConfig.blend_light_text_tertiary),
    color_light_help_text: rgba$7(appConfig.color_light_foreground, appConfig.blend_light_text_tertiary),
    color_light_required_symbol: rgba$7('221, 44, 0'),
    color_light_focus_border: rgba$7(appConfig.color_primary),
    color_light_counter_ok_border: rgba$7(appConfig.color_primary),

    color_dark_input_text: rgba$7(appConfig.color_dark_foreground, appConfig.blend_dark_text_primary),
    color_dark_input_background: rgba$7(appConfig.color_dark_background), // only used to 'remove' autofill color
    color_dark_highlight_text: rgba$7(appConfig.color_primary, appConfig.blend_dark_text_primary),
    color_dark_input_bottom_border: rgba$7(appConfig.color_dark_foreground, appConfig.blend_dark_border_light),
    color_dark_input_error_text: rgba$7('222, 50, 38'),
    color_dark_input_error_border: rgba$7('222, 50, 38'),
    color_dark_input_placeholder: rgba$7(appConfig.color_dark_foreground, appConfig.blend_dark_text_tertiary),
    color_dark_label_text: rgba$7(appConfig.color_dark_foreground, appConfig.blend_dark_text_tertiary),
    color_dark_disabled_label_text: rgba$7(appConfig.color_dark_foreground, appConfig.blend_dark_text_disabled),
    color_dark_readonly_label_text: rgba$7(appConfig.color_dark_foreground, appConfig.blend_dark_text_tertiary),
    color_dark_help_text: rgba$7(appConfig.color_dark_foreground, appConfig.blend_dark_text_tertiary),
    color_dark_required_symbol: rgba$7('221, 44, 0'),
    color_dark_focus_border: rgba$7(appConfig.color_primary),
    color_dark_counter_ok_border: rgba$7(appConfig.color_primary)
};

var createStyles$28 = function createStyles(config) {
    return [{
        '.pe-textfield': [mixin.clearfix(), {
            position: 'relative',
            'line-height': appConfig.line_height,
            display: 'inline-block',
            'box-sizing': 'border-box',
            margin: 0,
            overflow: 'visible', // Firefox needs this
            'padding-bottom': config.vertical_spacing_bottom + 'px',
            width: '100%',
            'max-width': '100%',

            ' .pe-textfield__input-area': {
                position: 'relative',
                'padding-top': config.vertical_spacing_top + 'px',

                '&:after': [mixin.defaultTransition('opacity', config.input_focus_border_animation_duration), {
                    position: 'absolute',
                    content: '""',
                    bottom: 0,
                    left: 0,
                    height: config.input_focus_border_width + 'px',
                    width: '100%',
                    opacity: 0
                }]
            },
            '&.pe-textfield--focused .pe-textfield__input-area:after': {
                opacity: 1
            },

            ' .pe-textfield__input': {
                display: 'block',
                'font-size': config.font_size_input + 'px',
                'line-height': config.line_height_input + 'px',
                width: '100%',
                background: 'none',
                'text-align': 'left',
                color: 'inherit',
                'border-width': config.input_border_width + 'px',
                'border-style': 'none none solid none',
                'border-radius': 0,
                margin: 0,
                padding: config.input_padding_v + 'px ' + config.input_padding_h + 'px',

                // disable glow on textfield--invalid fields
                '&:textfield--invalid': {
                    'box-shadow': 'none'
                },
                ':invalid': {
                    'box-shadow': 'none'
                }
            },
            ' textarea.pe-textfield__input': {
                margin: config.input_padding_v + 'px ' + config.input_padding_h + 'px',
                padding: 0,
                display: 'block'
            },

            // focus border
            ' textfield__input:focus, &.pe-textfield--focused .pe-textfield__input': {
                'border-width': config.input_border_width + 'px',
                outline: 'none'
            },

            ' .pe-textfield__label': {
                position: 'absolute',
                display: 'block',
                top: config.vertical_spacing_top + config.input_padding_v + 'px',
                bottom: 0,
                left: config.input_padding_h + 'px',
                right: config.input_padding_h + 'px',
                'font-size': config.font_size_input + 'px',
                'line-height': config.line_height_input + 'px',
                'pointer-events': 'none',
                'white-space': 'nowrap',
                'text-align': 'left',
                cursor: 'text'
            },
            '&.pe-textfield--dirty .pe-textfield__label': {
                visibility: 'hidden'
            },
            '&:not(.pe-textfield--no-char).pe-textfield--required .pe-textfield__label': {
                '&:after': {
                    content: '"*"',
                    padding: '0 0 0 .25em'
                }
            },

            '&.pe-textfield--floating-label': {
                'padding-bottom': config.floating_label_vertical_spacing_bottom + 'px',

                ' .pe-textfield__input-area': {
                    'padding-top': config.floating_label_vertical_spacing_top + 'px'
                },

                ' .pe-textfield__label': [mixin.defaultTransition('all', config.floating_label_animation_duration), {
                    top: config.floating_label_vertical_spacing_top + config.input_padding_v + 'px'
                }],

                '&.pe-textfield--focused, &.pe-textfield--dirty': {
                    ' .pe-textfield__label': {
                        'font-size': config.font_size_floating_label + 'px',
                        top: config.floating_label_top + 'px',
                        visibility: 'visible'
                    }
                },

                '&.pe-textfield--dense': {
                    'font-size': config.dense_font_size_input + 'px',
                    'padding-bottom': config.dense_floating_label_vertical_spacing_bottom + 'px',

                    ' .pe-textfield__input-area': {
                        'padding-top': config.dense_floating_label_vertical_spacing_top + 'px'
                    },

                    ' .pe-textfield__input': {
                        'font-size': config.dense_font_size_input + 'px'
                    },
                    ' .pe-textfield__label': {
                        'font-size': config.dense_font_size_input + 'px',
                        top: config.dense_floating_label_vertical_spacing_top + config.input_padding_v + 'px'
                    },

                    '&.pe-textfield--focused, &.pe-textfield--dirty': {
                        ' .pe-textfield__label': {
                            'font-size': config.dense_font_size_floating_label + 'px',
                            top: config.dense_floating_label_top + 'px'
                        }
                    }
                }
            },

            '&.pe-textfield--disabled, &.pe-textfield--readonly': {
                ' .pe-textfield__label': {
                    cursor: 'auto'
                },
                ' .pe-textfield__input': {
                    'border-bottom': 'none'
                },
                ' .pe-textfield__input-area:after': {
                    opacity: 1,
                    height: '1px',
                    bottom: '-1px',
                    'background-position': 'top',
                    'background-size': '4px 1px',
                    'background-repeat': 'repeat-x'
                }
            },

            ' .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter': {
                'margin-top': config.margin_top_error_message + 'px',
                'font-size': config.font_size_error + 'px',
                'line-height': appConfig.line_height,
                'min-height': config.font_size_error * appConfig.line_height + 'px'
            },

            ' .pe-textfield__counter': {
                'text-align': 'right',
                float: 'right',
                padding: '0 0 0 16px'
            },

            ' .pe-textfield__help-focus': [mixin.defaultTransition('opacity'), {
                opacity: 0
            }],
            '&.pe-textfield--focused .pe-textfield__help-focus, &.pe-textfield--dirty .pe-textfield__help-focus': {
                opacity: 1
            },

            '&.pe-textfield--hide-clear': {
                ' .pe-textfield__input::-ms-clear': {
                    display: 'none'
                }
            },
            '&.pe-textfield--hide-spinner': {
                ' input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button': {
                    '-webkit-appearance': 'none',
                    margin: 0
                },
                ' input[type=number]': {
                    '-moz-appearance': 'textfield'
                }
            }
        }, {
            '&.pe-textfield--full-width': {
                width: '100%',
                padding: 0,

                ' .pe-textfield__input-area': {
                    padding: 0
                },

                ' .pe-textfield__input': {
                    padding: config.full_width_input_padding_v + 'px ' + config.full_width_input_padding_h + 'px'
                },

                ' .pe-textfield__error, .pe-textfield__help, .pe-textfield__counter': {
                    'padding-left': config.full_width_input_padding_h + 'px',
                    'padding-right': config.full_width_input_padding_h + 'px'
                },

                ' .pe-textfield__label': {
                    top: config.full_width_input_padding_v + 'px',
                    left: config.full_width_input_padding_h + 'px',
                    right: config.full_width_input_padding_h + 'px'
                },

                '&.pe-textfield--dense': {
                    ' .pe-textfield__input': {
                        'font-size': config.dense_full_width_font_size_input + 'px',
                        padding: config.dense_full_width_input_padding_v + 'px ' + config.dense_full_width_input_padding_h + 'px'
                    },
                    ' .pe-textfield__label': {
                        'font-size': config.dense_full_width_font_size_input + 'px',
                        top: config.dense_full_width_input_padding_v + 'px',
                        left: config.dense_full_width_input_padding_h + 'px',
                        right: config.dense_full_width_input_padding_h + 'px'
                    }
                }
            }
        }]
    }];
};

var layout$18 = (function (config) {
    return mixin.createStyles(config, createStyles$28);
});

function _defineProperty$16(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$12 = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$16({}, scope + '.pe-textfield', {
        // border color
        color: config['color_' + tint + '_focus_border'], // override by specifying 'color'

        ' .pe-textfield__input-area': {
            color: 'inherit',

            '&:after': {
                'background-color': 'currentcolor'
            }
        },
        '&.pe-textfield--counter ': {
            ' .pe-textfield__input-area:after': {
                'background-color': config['color_' + tint + '_counter_ok_border']
            }
        },

        ' .pe-textfield__input': {
            color: config['color_' + tint + '_input_text'],
            'border-color': config['color_' + tint + '_input_bottom_border']
        },

        ' .pe-textfield__label': {
            color: config['color_' + tint + '_label_text']
        },

        '&.pe-textfield--disabled, &.pe-textfield--readonly': {
            ' .pe-textfield__input-area:after': {
                'background-color': 'transparent',
                'background-image': 'linear-gradient(to right, ' + config['color_' + tint + '_disabled_label_text'] + ' 20%, rgba(255, 255, 255, 0) 0%)'
            }
        },

        '&.pe-textfield--disabled': {
            ' .pe-textfield__input, .pe-textfield__label': {
                color: config['color_' + tint + '_disabled_label_text']
            }
        },

        '&.pe-textfield--readonly': {
            ' .pe-textfield__input, .pe-textfield__label': {
                color: config['color_' + tint + '_readonly_label_text']
            }
        },

        '&.pe-textfield--focused': {
            // note: not when textfield--dirty and not textfield--focused
            '&.pe-textfield--floating-label .pe-textfield__label': {
                color: config['color_' + tint + '_highlight_text']
            },

            '&.pe-textfield--required.pe-textfield--floating-label': {
                ' .pe-textfield__label:after': {
                    color: config['color_' + tint + '_required_symbol']
                }
            }
        },

        ' .pe-textfield__help, .pe-textfield__counter': {
            color: config['color_' + tint + '_help_text']
        },

        '&.pe-textfield--invalid:not(.pe-textfield--hide-validation)': {
            ' .pe-textfield__input': {
                'border-color': config['color_' + tint + '_input_error_border'],
                'box-shadow': 'none'
            },
            ' .pe-textfield__label': {
                color: config['color_' + tint + '_input_error_text']
            },
            ' .pe-textfield__error, .pe-textfield__counter, .pe-textfield__help': {
                color: config['color_' + tint + '_input_error_text']
            },
            '&.pe-textfield--required .pe-textfield__label': {
                color: config['color_' + tint + '_input_error_text']
            },
            '&, &.pe-textfield--counter': {
                ' .pe-textfield__input-area:after': {
                    'background-color': config['color_' + tint + '_input_error_border']
                }
            }
        },

        ' .pe-textfield__input:-webkit-autofill': {
            '-webkit-box-shadow': '0 0 0px 1000px ' + config['color_' + tint + '_input_background'] + ' inset',
            color: config['color_' + tint + '_input_text'] + ' !important'
        }
    })];
};

var createStyles$29 = function createStyles(config) {
    return [style$12(config, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$12(config, 'dark', ' '),
        // has dark theme
        style$12(config, 'dark', '&')]
    }];
};

var color$12 = (function (config) {
    return mixin.createStyles(config, createStyles$29);
});

var configFn$16 = componentConfig && componentConfig.textfield;
var config$16 = configFn$16 ? configFn$16(vars$14) : vars$14;
var id$17 = 'pe-textfield';

styler.add(id$17, layout$18(config$16), color$12(config$16));

var _extends$17 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$15(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var startEventType = window.PointerEvent ? 'pointerdown' : 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch ? 'touchstart' : 'mousedown';

var CSS_CLASSES$18 = {
    block: 'pe-textfield',
    inputArea: 'pe-textfield__input-area',
    input: 'pe-textfield__input',
    label: 'pe-textfield__label',
    counter: 'pe-textfield__counter',
    help: 'pe-textfield__help',
    focusHelp: 'pe-textfield__help-focus',
    error: 'pe-textfield__error',
    errorPlaceholder: 'pe-textfield__error-placeholder',
    stateFocused: 'pe-textfield--focused',
    stateDisabled: 'pe-textfield--disabled',
    stateReadonly: 'pe-textfield--readonly',
    stateInvalid: 'pe-textfield--invalid',
    stateDirty: 'pe-textfield--dirty',
    hasFloatingLabel: 'pe-textfield--floating-label',
    isDense: 'pe-textfield--dense',
    isRequired: 'pe-textfield--required',
    hideRequiredChar: 'pe-textfield--no-char',
    hasFullWidth: 'pe-textfield--full-width',
    hasCounter: 'pe-textfield--counter',
    hideSpinner: 'pe-textfield--hide-spinner',
    hideClear: 'pe-textfield--hide-clear',
    hideValidation: 'pe-textfield--hide-validation'
};

var validateCustom = function validateCustom(ctrl, opts) {
    var state = opts.validate(ctrl.value);
    return {
        invalid: state && !state.valid,
        message: state && state.error
    };
};

var validateCounter = function validateCounter(ctrl, opts) {
    return {
        invalid: ctrl.value.length > opts.counter,
        message: opts.error
    };
};

var validateHTML = function validateHTML(ctrl, opts) {
    return {
        invalid: !ctrl.inputEl().checkValidity(),
        message: opts.error
    };
};

var getValidStatus = function getValidStatus(ctrl, opts) {
    var status = {
        invalid: false,
        message: undefined
    };

    // validateResetOnClear: reset validation when field is cleared
    if (ctrl.touched && ctrl.isInvalid && ctrl.value.length === 0 && opts.validateResetOnClear) {
        ctrl.touched = false;
        ctrl.isInvalid = false;
        ctrl.error = undefined;
    }

    if (!status.invalid && opts.counter) {
        status = validateCounter(ctrl, opts);
    }
    if (!status.invalid && ctrl.inputEl() && ctrl.inputEl().checkValidity) {
        status = validateHTML(ctrl, opts);
    }
    if (!status.invalid && opts.validate) {
        status = validateCustom(ctrl, opts);
    }
    return status;
};

var checkValidity = function checkValidity(ctrl, opts) {
    // default
    var status = !ctrl.touched && !opts.validateAtStart ? {
        invalid: false,
        message: undefined
    } : getValidStatus(ctrl, opts);
    var previousInvalid = ctrl.isInvalid;
    ctrl.error = status.message;
    ctrl.isInvalid = status.invalid;
    if (status.invalid !== previousInvalid) {
        setTimeout(m.redraw, 0);
    }

    if (!status.invalid) {
        ctrl.error = undefined;
    }
};

// dirty = contains text
var checkDirty = function checkDirty(ctrl) {
    ctrl.isDirty = ctrl.value.toString().length > 0;
};

var updateState = function updateState(ctrl, opts) {
    checkValidity(ctrl, opts);
    checkDirty(ctrl);
};

var notifyState = function notifyState(ctrl, opts) {
    if (opts.getState) {
        // get status directly without updating controller
        var status = getValidStatus(ctrl, opts);
        opts.getState({
            focus: ctrl.focus(),
            dirty: ctrl.isDirty,
            value: ctrl.value,
            el: ctrl.inputEl(),
            invalid: status.invalid,
            error: status.error
        });
    }
};

var ignoreEvent = function ignoreEvent(opts, name) {
    return opts.ignoreEvents && opts.ignoreEvents.indexOf(name) !== -1;
};

var createView$19 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // Early state update to prevent a flash (which would happen if the update is done in config)
    updateState(ctrl, opts);

    var isInvalid = ctrl.isInvalid;
    var tag = opts.tag || 'div';
    var type = !opts.type || opts.type === 'submit' || opts.type === 'search' ? 'text' : opts.type;
    var inputTag = opts.multiline ? 'textarea' : 'input';
    var showError = isInvalid && ctrl.error;
    var validates = opts.validate || opts.min || opts.max || opts.minlength || opts.required || opts.pattern;
    var inactive = opts.disabled || opts.readonly;

    if (opts.focus && !ctrl.focus() && !inactive) {
        ctrl.focus(true);
        if (ctrl.inputEl()) {
            ctrl.inputEl().focus();
        }
    }

    // Only update from outside if the field is not being edited
    if (typeof opts.value === 'function' && ctrl.inputEl() && !ctrl.focus() && !inactive) {
        var value = opts.value();
        ctrl.value = value;
        ctrl.touched = true;
        updateState(ctrl, opts);
        notifyState(ctrl, opts);
        ctrl.inputEl().value = value;
    }

    var props = {
        class: [CSS_CLASSES$18.block, isInvalid ? CSS_CLASSES$18.stateInvalid : '', ctrl.focus() ? CSS_CLASSES$18.stateFocused : '', opts.floatingLabel ? CSS_CLASSES$18.hasFloatingLabel : '', opts.disabled ? CSS_CLASSES$18.stateDisabled : '', opts.readonly ? CSS_CLASSES$18.stateReadonly : '', ctrl.isDirty ? CSS_CLASSES$18.stateDirty : '', opts.dense ? CSS_CLASSES$18.isDense : '', opts.required ? CSS_CLASSES$18.isRequired : '', opts.fullWidth ? CSS_CLASSES$18.hasFullWidth : '', opts.counter ? CSS_CLASSES$18.hasCounter : '', opts.hideSpinner !== false ? CSS_CLASSES$18.hideSpinner : '', opts.hideClear !== false ? CSS_CLASSES$18.hideClear : '', opts.hideValidation ? CSS_CLASSES$18.hideValidation : '', opts.hideRequiredMark ? CSS_CLASSES$18.hideRequiredChar : '', opts.class].join(' '),
        id: opts.id || '',
        config: function config(el, inited, context, vdom) {
            if (inited) {
                return;
            }
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            ctrl.el = el;
            if (!inactive) {
                updateState(ctrl, opts);
            }
        }
    };

    var content = [m('div', {
        class: CSS_CLASSES$18.inputArea
    }, [opts.label ? m('label', _defineProperty$15({
        class: CSS_CLASSES$18.label
    }, 'on' + startEventType, function () {
        if (!inactive) {
            setTimeout(function () {
                ctrl.inputEl().focus();
            }, 0);
        }
    }), opts.label) : null, m(inputTag, _extends$17({}, {
        class: CSS_CLASSES$18.input,
        type: type,
        name: opts.name || '',
        disabled: opts.disabled
    }, !ignoreEvent(opts, 'onclick') ? {
        onclick: function onclick() {
            if (inactive) {
                return;
            }
            // in case the browser does not give the field focus,
            // for instance when the user tapped to the current field off screen
            ctrl.focus(true);
            notifyState(ctrl, opts);
        }
    } : null, !ignoreEvent(opts, 'onfocus') ? {
        onfocus: function onfocus() {
            if (inactive) {
                return;
            }
            ctrl.focus(true);
            // set CSS class manually in case field gets focus but is off screen
            // and no redraw is triggered
            // at the next redraw ctrl.focus() will be read and the focus class be set
            // in the props.class statement
            if (ctrl.el) {
                ctrl.el.classList.add(CSS_CLASSES$18.stateFocused);
            }
            notifyState(ctrl, opts);
        }
    } : null, !ignoreEvent(opts, 'oninput') ? {
        oninput: function oninput(e) {
            // default input event
            // may be overwritten by opts.events
            ctrl.value = e.target.value;
            // Don't set ctrl.touched to true to prevent error messages popping up while typing
            if (opts.validateOnInput) {
                ctrl.touched = true;
            }
            updateState(ctrl, opts);
            notifyState(ctrl, opts);
            if (opts.oninput) {
                opts.oninput(ctrl.value, e);
            }
        }
    } : null, !ignoreEvent(opts, "onblur") ? {
        onblur: function onblur(e) {
            ctrl.focus(false);
            ctrl.touched = true;
            ctrl.value = e.target.value;
            updateState(ctrl, opts);
            notifyState(ctrl, opts);
            // same principle as onfocus
            if (ctrl.el) {
                ctrl.el.classList.remove(CSS_CLASSES$18.stateFocused);
            }
        }
    } : null, !ignoreEvent(opts, 'onkeydown') ? {
        onkeydown: function onkeydown(e) {
            if (e.which === 13) {
                // ENTER
                ctrl.touched = true;
                updateState(ctrl, opts);
                notifyState(ctrl, opts);
            } else if (e.which === 27) {
                // ESCAPE
                ctrl.inputEl().blur(e);
            } else if (e.which === 9) {
                // TAB
                // Update after the blur event when TAB is used to leave the field and no other field will get focus.
                // Safari only needs 1 tick, but Chrome needs more than 150ms to create a distinctive new redraw event.
                // But we also may have buttons that change place (search field), a large timeout works better in general.
                setTimeout(function () {
                    m.redraw();
                    setTimeout(m.redraw, 250);
                }, 1);
            }
        }
    } : null, {
        config: function config(el, inited) {
            if (inited) {
                return;
            }
            ctrl.inputEl(el);
            el.value = ctrl.value;
            notifyState(ctrl, opts);
        }
    }, opts.events ? opts.events : null, // NOTE: may overwrite oninput
    opts.readonly !== undefined ? { readonly: true } : null, opts.pattern !== undefined ? { pattern: opts.pattern } : null, opts.maxlength !== undefined ? { maxlength: opts.maxlength } : null, opts.minlength !== undefined ? { minlength: opts.minlength } : null, opts.max !== undefined ? { max: opts.max } : null, opts.min !== undefined ? { min: opts.min } : null, opts.autofocus !== undefined ? { autofocus: opts.autofocus } : null, opts.required !== undefined ? { required: opts.required } : null, opts.tabindex !== undefined ? { tabindex: opts.tabindex } : null, opts.rows !== undefined ? { rows: opts.rows } : null))]), opts.counter ? m('div', { class: CSS_CLASSES$18.counter }, ctrl.value.length + ' / ' + opts.counter) : null, opts.help && !showError ? m('div', {
        class: [CSS_CLASSES$18.help, opts.focusHelp ? CSS_CLASSES$18.focusHelp : ''].join(' ')
    }, opts.help) : null, showError ? m('div', { class: CSS_CLASSES$18.error }, ctrl.error) : validates && !opts.help ? m('div', { class: CSS_CLASSES$18.errorPlaceholder }) : null];
    return m(tag, props, [opts.before, content, opts.after]);
};

var component$27 = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var value = void 0,
            isInvalid = false,
            touched = false,
            // true when any change is made
        error = opts.error || '',
            el = void 0,
            inputEl = m.prop(),
            hasFocus = opts.focus || false;

        if (typeof opts.value === 'function') {
            var v = opts.value();
            value = v !== undefined ? v : '';
        } else {
            value = opts.value !== undefined ? opts.value : '';
        }
        if (value !== '') {
            touched = true;
        }

        var focus = function focus(state) {
            // read
            if (state === undefined) {
                return hasFocus;
            }
            // write
            hasFocus = state;
        };

        return {
            value: value,
            error: error,
            el: el,
            inputEl: inputEl,
            focus: focus,
            isInvalid: isInvalid,
            touched: touched
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$19(ctrl, opts);
    }
};

var rgba$8 = appConfig.rgba;

var insetSideMargin = 8;

var line_height_input$1 = 20;
var font_size_input = 20;

var inset_height = 48;
var inset_input_indent = 16;
var inset_input_right_padding = 0;
var inset_border_radius = appConfig.unit_block_border_radius;

var fullwidth_side_margin = 0;
var fullwidth_height = 56;
var fullwidth_side_padding = insetSideMargin;
var fullwidth_input_right_padding = 0;
var fullwidth_border_radius = 0;

var vars$15 = {
    font_size_input: font_size_input,
    line_height_input: line_height_input$1,

    inset_height: inset_height,
    inset_input_indent: inset_input_indent,
    inset_input_right_padding: inset_input_right_padding,
    inset_border_radius: inset_border_radius,

    fullwidth_height: fullwidth_height,
    fullwidth_side_margin: fullwidth_side_margin,
    fullwidth_side_padding: fullwidth_side_padding,
    fullwidth_input_right_padding: fullwidth_input_right_padding,
    fullwidth_border_radius: fullwidth_border_radius,

    color_light_label_text: rgba$8(appConfig.color_light_foreground, appConfig.blend_light_text_disabled),
    color_light_background: rgba$8(appConfig.color_light_background),

    color_dark_label_text: rgba$8(appConfig.color_dark_foreground, appConfig.blend_dark_text_disabled),
    color_dark_background: rgba$8(appConfig.color_dark_background)
};

var createStyles$30 = function createStyles(config) {
    var inset_input_padding_v = (config.inset_height - config.line_height_input) / 2;
    var fullwidth_input_padding_v = (config.fullwidth_height - config.line_height_input) / 2;
    var fullwidth_input_indent = appConfig.unit_indent - config.fullwidth_side_padding - appConfig.grid_unit_icon_button;

    return [{
        '.pe-search': [flex$1.flex(), {
            position: 'relative', // necessary when a shadow is added

            ' .pe-textfield': [flex$1.flex(), {
                padding: 0,
                // prevent that neighboring icon button with ripple hides the cursor
                position: 'relative',
                'z-index': 1
            }],

            ' .pe-textfield__input-area': {
                padding: 0,
                flexGrow: 1,

                '&:after': {
                    display: 'none'
                }
            },

            ' .pe-textfield__input, .pe-textfield__label': {
                'font-size': config.font_size_input + 'px',
                'line-height': config.line_height_input + 'px'
            },

            ' .pe-textfield__input': {
                // reset
                border: 'none'
            },

            ' .pe-textfield__label': {
                // reset
                top: 0,
                bottom: 0
            },

            ' .pe-search__content': {
                '&, .pe-textfield': flex$1.layoutHorizontal
            },

            ' .pe-search__content > *': flex$1.layoutVertical,

            ' .pe-button--icon': flex$1.selfCenter,

            '&.pe-search--inset': {
                'border-radius': config.inset_border_radius + 'px',
                padding: '0 ' + config.inset_side_padding + 'px',

                '&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label': {
                    height: config.inset_height + 'px'
                },
                ' .pe-textfield__input, .pe-textfield__label': {
                    'padding-top': inset_input_padding_v + 'px',
                    'padding-bottom': inset_input_padding_v + 'px',
                    'padding-left': config.inset_input_indent + 'px',
                    'padding-right': config.inset_input_right_padding + 'px'
                }
            },

            '&.pe-search--fullwidth': {
                'border-radius': config.fullwidth_border_radius + 'px',
                padding: '0 ' + config.fullwidth_side_padding + 'px',

                '&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label': {
                    height: config.fullwidth_height + 'px'
                },
                ' .pe-textfield__input, .pe-textfield__label': {
                    'padding-top': fullwidth_input_padding_v + 'px',
                    'padding-bottom': fullwidth_input_padding_v + 'px',
                    'padding-left': fullwidth_input_indent + 'px',
                    'padding-right': config.fullwidth_input_right_padding + 'px'
                }
            }
        }]
    }];
};

var layout$19 = (function (config) {
    return mixin.createStyles(config, createStyles$30);
});

function _defineProperty$17(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$13 = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$17({}, scope + '.pe-search', {
        'background-color': config['color_' + tint + '_background'],

        ' .pe-textfield__label': {
            color: config['color_' + tint + '_label_text']
        }
    })];
};

var createStyles$31 = function createStyles(config) {
    return [style$13(config, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$13(config, 'dark', ' '),
        // has dark theme
        style$13(config, 'dark', '&')]
    }];
};

var color$13 = (function (config) {
    return mixin.createStyles(config, createStyles$31);
});

var configFn$17 = componentConfig && componentConfig.search;
var config$17 = configFn$17 ? configFn$17(vars$15) : vars$15;
var id$18 = 'pe-search';

styler.add(id$18, layout$19(config$17), color$13(config$17));

var _extends$16 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$17 = {
    block: 'pe-search',
    content: 'pe-search__content',
    searchInset: 'pe-search--inset',
    searchFullwidth: 'pe-search--fullwidth'
};

var mapButtonState = function mapButtonState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (state.focus && state.dirty) {
        return 'focus_dirty';
    } else if (state.focus) {
        return 'focus';
    } else if (state.dirty) {
        return 'dirty';
    }
    return 'none';
};

var typeClasses$2 = {
    inset: CSS_CLASSES$17.searchInset,
    fullwidth: CSS_CLASSES$17.searchFullwidth
};

var classForType$2 = function classForType() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'inset';

    return typeClasses$2[mode];
};

var createView$18 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = _extends$16({}, {
        class: [CSS_CLASSES$17.block, classForType$2(opts.type), opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    }, opts.events ? opts.events : null);
    var state = mapButtonState(ctrl.state());
    var buttons = (opts.buttons || {})[state] || {};
    var textfieldOpts = opts.textfield || {};
    var content = m('div', {
        class: CSS_CLASSES$17.content
    }, [m(component$27, _extends$16({}, textfieldOpts, {
        config: function config() {
            m.redraw.strategy('none');
        },
        getState: function getState(state) {
            ctrl.state(state);
            if (textfieldOpts.getState) {
                textfieldOpts.getState(state);
            }
        },
        before: buttons.before,
        after: buttons.after
    }))]);
    return m(tag, props, [opts.before, content, opts.after]);
};

var component$25 = {
    controller: function controller() {
        var state = m.prop();
        return {
            state: state
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$18(ctrl, opts);
    }
};

var rgba$9 = appConfig.rgba;
var lightForeground = appConfig.color_light_foreground;
var darkForeground = appConfig.color_dark_foreground;
var activeColor$1 = appConfig.color_primary; // or override in CSS by setting 'color' property on '.pe-slider'

var thumb_size = 12;
var thumb_touch_size = Math.max(40, thumb_size);
var thumb_border_width = 2;
var active_thumb_scale = 3 / 2;
var disabled_thumb_scale = 2 / 3;
var active_pin_thumb_scale = 2 / 6;
var largestThumbSize = active_thumb_scale * thumb_size;
var largestElement = Math.max(thumb_touch_size, largestThumbSize);
var height$1 = Math.max(52, largestThumbSize);
var side_spacing = Math.max(10, largestElement / 2 - thumb_size / 2);
var horizontal_layout_side_spacing = side_spacing + 4; // optimization for horizontal layout

var vars$16 = {
    height: height$1,
    side_spacing: side_spacing,
    horizontal_layout_side_spacing: horizontal_layout_side_spacing,
    thumb_size: thumb_size,
    thumb_touch_size: thumb_touch_size,
    track_height: height$1,
    bar_height: 2,
    thumb_border_width: thumb_border_width,
    active_thumb_scale: active_thumb_scale,
    animation_duration: appConfig.animation_duration,
    disabled_thumb_scale: disabled_thumb_scale,
    active_pin_thumb_scale: active_pin_thumb_scale,

    step_width: 2,
    pin_height: 32,
    pin_width: 26,
    pin_font_size: 10,

    color_light_track_active: rgba$9(lightForeground, .38),
    color_light_track_inactive: rgba$9(lightForeground, .26),
    color_light_track_value: rgba$9(activeColor$1),
    color_light_thumb_off: rgba$9(lightForeground, .26),
    color_light_thumb_off_focus: rgba$9(lightForeground),
    color_light_thumb_off_focus_opacity: .08,
    color_light_thumb_on: rgba$9(activeColor$1),
    color_light_thumb_on_focus_opacity: .11,
    color_light_tick: rgba$9(lightForeground, 1),
    color_light_icon: appConfig.rgba(appConfig.color_light_foreground, appConfig.blend_light_text_secondary),
    color_light_disabled_icon: appConfig.rgba(appConfig.color_light_foreground, appConfig.blend_light_text_disabled),
    color_light_label: appConfig.rgba(appConfig.color_light_foreground, appConfig.blend_light_text_secondary),
    color_light_disabled_label: appConfig.rgba(appConfig.color_light_foreground, appConfig.blend_light_text_disabled),

    color_dark_track_active: rgba$9(darkForeground, 0.3),
    color_dark_track_inactive: rgba$9(darkForeground, 0.2),
    color_dark_track_value: rgba$9(activeColor$1),
    color_dark_thumb_off: rgba$9(darkForeground, 0.2),
    color_dark_thumb_off_focus: rgba$9(darkForeground),
    color_dark_thumb_off_focus_opacity: .08,
    color_dark_thumb_on: rgba$9(activeColor$1),
    color_dark_thumb_on_focus_opacity: .11,
    color_dark_tick: rgba$9(darkForeground, 1),
    color_dark_icon: appConfig.rgba(appConfig.color_dark_foreground, appConfig.blend_dark_text_secondary),
    color_dark_disabled_icon: appConfig.rgba(appConfig.color_dark_foreground, appConfig.blend_dark_text_disabled),
    color_dark_label: appConfig.rgba(appConfig.color_dark_foreground, appConfig.blend_dark_text_secondary),
    color_dark_disabled_label: appConfig.rgba(appConfig.color_dark_foreground, appConfig.blend_dark_text_disabled)
};

var positionBorder = function positionBorder(thumbSize, borderWidth) {
    return {
        'border-width': borderWidth + 'px',
        width: thumbSize - 2 * borderWidth + 'px',
        height: thumbSize - 2 * borderWidth + 'px',
        left: '2px',
        top: '2px'
    };
};

var createStyles$32 = function createStyles(config) {
    var thumbSize = Math.max(config.thumb_size, 2 * config.thumb_border_width);
    var scaledThumbDiff = (config.active_thumb_scale - 1) * thumbSize / 2;
    var barOffset = thumbSize / 2;
    var scaledBorderWidth = Math.max(1, config.thumb_border_width / config.active_thumb_scale);
    var thumbTouchSize = config.thumb_touch_size;
    var stepsOffset = barOffset - 1;

    return [{
        '.pe-slider': [mixin.vendorize({
            'user-select': 'none'
        }, appConfig.prefixes_user_select), {
            height: config.height + 'px',
            'margin-top': (config.height - config.track_height) / 2 + 'px ',

            ' > .pe-icon': {
                height: config.height + 'px'
            },

            ' .pe-slider__track': [flex$1.layoutHorizontal, flex$1.flexGrow(1), mixin.defaultTransition('transform', config.animation_duration), mixin.vendorize({
                'user-select': 'none'
            }, appConfig.prefixes_user_select), {
                position: 'relative',
                height: config.track_height + 'px',
                margin: '0 ' + config.side_spacing + 'px',
                outline: 0
            }],
            ' div + .pe-slider__track': {
                margin: '0 ' + config.horizontal_layout_side_spacing + 'px'
            },

            ' .pe-slider__control': [flex$1.selfCenter, mixin.defaultTransition('transform, background', config.animation_duration), mixin.vendorize({
                'user-select': 'none'
            }, appConfig.prefixes_user_select), {
                width: thumbSize + 'px',
                height: thumbSize + 'px',
                'line-height': 0,
                'border-radius': '50%',
                outline: 0,
                'z-index': 1,
                position: 'relative',

                // touch area
                '&:before': [mixin.defaultTransition('background-color', config.animation_duration), {
                    content: '""',
                    position: 'absolute',
                    'border-radius': '50%',
                    left: -thumbTouchSize / 2 + thumbSize / 2 + 'px',
                    top: -thumbTouchSize / 2 + thumbSize / 2 + 'px',
                    width: thumbTouchSize + 'px',
                    height: thumbTouchSize + 'px'
                }],

                // border
                '&:after': [mixin.defaultTransition('border', config.animation_duration), positionBorder(thumbSize, config.thumb_border_width), {
                    content: '""',
                    position: 'absolute',
                    'border-radius': '50%',
                    'border-style': 'solid'
                }]
            }],

            ' .pe-slider__thumb': [mixin.defaultTransition('opacity', config.animation_duration), mixin.fit(), {
                '&, .pe-icon': {
                    width: 'inherit',
                    height: 'inherit'
                }
            }],

            ' .pe-slider__label': {
                height: config.height + 'px',
                'line-height': config.height + 'px',
                'min-width': appConfig.unit_icon_size + 'px',
                'text-align': 'center',
                'font-size': '16px',
                'font-weight': appConfig.font_weight_medium
            },

            ' .pe-slider__track-part': [flex$1.flex(), mixin.vendorize({
                'user-select': 'none'
            }, appConfig.prefixes_user_select), {
                height: config.bar_height + 'px',
                margin: (config.track_height - config.bar_height) / 2 + 'px 0px',
                overflow: 'hidden' // Firefox otherwise uses 6x at 0%
            }],

            ' .pe-slider__track-value, .pe-slider__track-rest': flex$1.layoutHorizontal,

            ' .pe-slider__track-bar': [flex$1.flex(), {
                position: 'relative',
                overflow: 'hidden'
            }],
            ' .pe-slider__track-bar-value': [flex$1.flex(), mixin.defaultTransition('transform, background-color', config.animation_duration), {
                height: config.bar_height + 'px'
            }],
            ' .pe-slider__track-value .pe-slider__track-bar': {
                'margin-left': barOffset + 'px'
            },
            ' .pe-slider__track-rest .pe-slider__track-bar': {
                'margin-right': barOffset + 'px'
            },

            ' .pe-slider__ticks': [flex$1.layoutJustified, mixin.vendorize({
                'user-select': 'none'
            }, appConfig.prefixes_user_select), {
                position: 'absolute',
                width: 'calc(100% - ' + 2 * stepsOffset + 'px)',
                height: config.bar_height + 'px',
                left: 0,
                top: config.height / 2 - 1 + 'px',
                margin: '0 ' + stepsOffset + 'px',
                'pointer-events': 'none'
            }],

            ' .pe-slider__ticks-tick': {
                width: config.step_width + 'px',
                height: config.bar_height + 'px'
            },

            ' .pe-slider__pin': [mixin.vendorize({
                'transform': 'translateZ(0) scale(0) translate(0, 0)'
            }, appConfig.prefixes_transform), mixin.vendorize({
                'transform-origin': 'bottom'
            }, appConfig.prefixes_transform), mixin.defaultTransition('transform', '.11s'), {
                position: 'absolute',
                'z-index': 1,
                width: config.pin_width + 'px',
                height: 0,
                left: 0, // set in js
                top: 0,
                'margin': '0 ' + stepsOffset + 'px 0 ' + (stepsOffset - config.pin_width / 2 + 1) + 'px',
                'pointer-events': 'none',

                '&::before': [mixin.vendorize({
                    'transform': 'rotate(-45deg)'
                }, appConfig.prefixes_transform), {
                    content: '" "',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: config.pin_width + 'px',
                    height: config.pin_width + 'px',
                    'border-radius': '50% 50% 50% 0',
                    'background-color': 'inherit'
                }],
                '&::after': {
                    content: 'attr(value)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: config.pin_width + 'px',
                    height: config.pin_height + 'px',
                    'text-align': 'center',
                    color: '#fff',
                    'font-size': config.pin_font_size + 'px',
                    'line-height': config.pin_width + 'px'
                }
            }],

            '&.pe-slider--active:not(.pe-slider--ticks)': {
                ' .pe-slider__control': [mixin.vendorize({
                    'transform': 'scale(' + config.active_thumb_scale + ')'
                }, appConfig.prefixes_transform), {
                    'border-width': scaledBorderWidth + 'px'
                }],
                // left side
                ' .pe-slider__track-value .pe-slider__track-bar-value': [mixin.vendorize({
                    'transform': 'translateX(' + -scaledThumbDiff + 'px)'
                }, appConfig.prefixes_transform)],
                // right side
                ' .pe-slider__track-rest .pe-slider__track-bar-value': [mixin.vendorize({
                    'transform': 'translateX(' + scaledThumbDiff + 'px)'
                }, appConfig.prefixes_transform)]
            },

            '&.pe-slider--pin.pe-slider--active, &.pe-slider--pin.pe-slider--focus': {
                ' .pe-slider__pin': [mixin.vendorize({
                    'transform': 'translateZ(0) scale(1) translate(0, -24px)'
                }, appConfig.prefixes_transform)],
                ' .pe-slider__control': [mixin.vendorize({
                    'transform': 'scale(' + config.active_pin_thumb_scale + ')'
                }, appConfig.prefixes_transform)]
            },

            '&:not(.pe-slider--disabled)': {
                ' .pe-slider__control': {
                    cursor: 'pointer'
                },
                '&.pe-slider--track': {
                    ' .pe-slider__track': {
                        cursor: 'pointer'
                    }
                }
            },

            '&.pe-slider--disabled': {
                ' .pe-slider__control': [mixin.vendorize({
                    'transform': 'scale(' + config.disabled_thumb_scale + ')'
                }, appConfig.prefixes_transform), {
                    'border-width': 0
                }],
                '&.pe-slider--min': {
                    ' .pe-slider__control:after': [positionBorder(thumbSize, 1 / config.disabled_thumb_scale * config.thumb_border_width)]
                }
            }
        }]
    }];
};

var layout$20 = (function (config) {
    return mixin.createStyles(config, createStyles$32);
});

function _defineProperty$18(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$14 = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$18({}, scope + '.pe-slider', {

        color: config['color_' + tint + '_thumb_on'], // override by specifying 'color'

        ' .pe-slider__control': {
            background: config['color_' + tint + '_thumb_off'],

            '&:after': {
                'border-color': 'transparent'
            }
        },
        ' .pe-slider__track-bar-value': {
            background: config['color_' + tint + '_track_inactive']
        },

        ' .pe-slider__ticks-tick': {
            background: config['color_' + tint + '_tick']
        },

        ' .pe-slider__pin': {
            'background-color': 'currentcolor'
        },

        ' > .pe-icon': {
            color: config['color_' + tint + '_disabled_icon']
        },

        ' .pe-slider__label': {
            color: config['color_' + tint + '_disabled_label']
        },

        // states

        '&.pe-slider--active': {
            ' .pe-slider__track-bar-value': {
                background: config['color_' + tint + '_track_active']
            }
        },

        '&:not(.pe-slider--disabled)': {
            ' .pe-slider__control': {
                background: 'currentcolor',

                '&:before': {
                    opacity: config['color_' + tint + '_thumb_off_focus_opacity']
                }
            },
            ' .pe-slider__track-value .pe-slider__track-bar-value': {
                background: 'currentcolor'
            },
            '&.pe-slider--focus.pe-slider--min:not(.pe-slider--pin) .pe-slider__control:before,\
                &.pe-slider--min:not(.pe-slider--pin) .pe-slider__control:focus:before': {
                'background-color': config['color_' + tint + '_thumb_off_focus']
            },
            '&.pe-slider--focus:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:before,\
                &:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:focus:before': {
                'background-color': 'currentcolor',
                opacity: config['color_' + tint + '_thumb_on_focus_opacity']
            },
            ' > .pe-icon': {
                color: config['color_' + tint + '_icon']
            },
            ' .pe-slider__label': {
                color: config['color_' + tint + '_label']
            }
        },
        '&.pe-slider--min:not(.pe-slider--disabled)': {
            ' .pe-slider__control': {
                'background-color': 'transparent'
            },
            ' .pe-slider__thumb': {
                'opacity': 0
            },
            ' .pe-slider__control:after': {
                'border-color': config['color_' + tint + '_track_inactive']
            },
            '&.pe-slider--active .pe-slider__control:after': {
                'border-color': config['color_' + tint + '_track_active']
            },
            '&.pe-slider--ticks': {
                ' .pe-slider__control': {
                    'background-color': config['color_' + tint + '_tick']
                },
                ' .pe-slider__control:after': {
                    'border-color': 'transparent'
                }
            },
            ' .pe-slider__pin': {
                'background-color': config['color_' + tint + '_track_inactive']
            }
        }
    })];
};

var createStyles$33 = function createStyles(config) {
    return [style$14(config, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$14(config, 'dark', ' '),
        // has dark theme
        style$14(config, 'dark', '&')]
    }];
};

var color$14 = (function (config) {
    return mixin.createStyles(config, createStyles$33);
});

var configFn$18 = componentConfig && componentConfig.slider;
var config$18 = configFn$18 ? configFn$18(vars$16) : vars$16;
var id$19 = 'pe-slider';

styler.add(id$19, layout$20(config$18), color$14(config$18));

var _extends$18 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$19 = {
    block: 'pe-slider',
    thumb: 'pe-slider__thumb',
    label: 'pe-slider__label',
    track: 'pe-slider__track',
    trackPart: 'pe-slider__track-part',
    trackPartValue: 'pe-slider__track-value',
    trackPartRest: 'pe-slider__track-rest',
    trackBar: 'pe-slider__track-bar',
    trackBarValue: 'pe-slider__track-bar-value',

    control: 'pe-slider__control',
    ticks: 'pe-slider__ticks',
    tick: 'pe-slider__ticks-tick',
    pin: 'pe-slider__pin',

    isDisabled: 'pe-slider--disabled',
    isActive: 'pe-slider--active',
    hasTrack: 'pe-slider--track',
    hasPin: 'pe-slider--pin',
    hasFocus: 'pe-slider--focus',
    isAtMin: 'pe-slider--min',
    hasTicks: 'pe-slider--ticks'
};

var focusElement = void 0;

// const eventStartType = window.PointerEvent ? 'pointerdown' : (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) ? 'touchstart' : 'mousedown';
var eventMoveType = window.PointerEvent ? 'pointermove' : 'ontouchmove' in window || window.DocumentTouch && document instanceof window.DocumentTouch ? 'touchmove' : 'mousemove';
var eventEndType = window.PointerEvent ? 'pointerup' : 'ontouchend' in window || window.DocumentTouch && document instanceof window.DocumentTouch ? 'touchend' : 'mouseup';

var deFocus = function deFocus(ctrl) {
    if (focusElement) {
        focusElement.blur();
    }
    focusElement = undefined;
    ctrl.hasFocus = false;
};

var focus = function focus(ctrl, el) {
    deFocus(ctrl);
    focusElement = el;
    ctrl.hasFocus = true;
};

var positionFromEvent = function positionFromEvent(e, isVertical) {
    if (p.isTouch) {
        return isVertical ? e.touches[0].pageY : e.touches[0].pageX;
    } else {
        return isVertical ? e.pageY : e.pageX;
    }
};

var updatePinPosition = function updatePinPosition(ctrl) {
    if (ctrl.controlEl && ctrl.pinEl) {
        var left = ctrl.fraction() * ctrl.rangeWidth;
        ctrl.pinEl.style.left = left + 'px';
    }
};

var updateValue = function updateValue(ctrl, value) {
    ctrl.setValue(value);
    updatePinPosition(ctrl);
};

var generateTickMarks = function generateTickMarks(min, max, stepSize) {
    var steps = Math.round((max - min) / stepSize);
    var items = [];
    var s = steps + 1;
    while (s > 0) {
        items.push(m('div', { class: CSS_CLASSES$19.tick }));
        s--;
    }
    return items;
};

var readRangeData = function readRangeData(ctrl) {
    if (ctrl.controlEl) {
        // range is from the far left to the far right minus the thumb width (max x is at the left side of the thumb)
        ctrl.controlWidth = vars$16.thumb_size;
        ctrl.rangeWidth = ctrl.trackEl.getBoundingClientRect().width - ctrl.controlWidth;
        var styles = window.getComputedStyle(ctrl.trackEl);
        ctrl.rangeOffset = parseFloat(styles.marginLeft);
    }
};

var calculateClickOffset = function calculateClickOffset(ctrl) {
    var controlOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    ctrl.clickOffset = ctrl.trackEl.getBoundingClientRect().left - (ctrl.rangeOffset - ctrl.controlWidth / 2) + controlOffset;
};

var initControlEvent = function initControlEvent(ctrl, e) {
    var controlPos = ctrl.controlEl.getBoundingClientRect().left;
    var eventPos = positionFromEvent(e);
    var controlOffset = eventPos - controlPos - ctrl.controlWidth / 2;
    calculateClickOffset(ctrl, controlOffset);
};

var initTrackEvent = function initTrackEvent(ctrl) {
    calculateClickOffset(ctrl, 0);
};

var handlePosEvent = function handlePosEvent(ctrl, e) {
    var pos = positionFromEvent(e) - ctrl.clickOffset;
    var value = ctrl.min + (pos - ctrl.rangeOffset) / ctrl.rangeWidth * (ctrl.max - ctrl.min);
    updateValue(ctrl, value);
    m.redraw();
};

var startDrag = function startDrag(ctrl, opts, e) {
    if (ctrl.isDragging) return;
    e.preventDefault();
    ctrl.isDragging = true;
    ctrl.isActive = true;
    deFocus(ctrl);

    var drag = function drag(e) {
        if (!ctrl.isDragging) return;
        handlePosEvent(ctrl, e);
    };

    var endDrag = function endDrag() {
        if (!ctrl.isDragging) return;
        ctrl.isDragging = false;
        ctrl.isActive = false;
        deFocus(ctrl);
        window.removeEventListener(eventMoveType, drag);
        window.removeEventListener(eventEndType, endDrag);
        m.redraw();
    };

    window.addEventListener(eventMoveType, drag);
    window.addEventListener(eventEndType, endDrag);

    readRangeData(ctrl);

    if (opts.pin) {
        updatePinPosition(ctrl);
    }
};

var startTrack = function startTrack(ctrl, opts, e) {
    e.preventDefault();
    if (ctrl.isDragging) return;
    readRangeData(ctrl);
    initTrackEvent(ctrl);
    handlePosEvent(ctrl, e);
    startDrag(ctrl, opts, e);
};

var createSlider = function createSlider(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var hasTicks = arguments[2];
    var interactiveTrack = arguments[3];

    var fraction = ctrl.fraction();
    var stepCount = Math.max(10, parseInt(opts.step, 10) || 1); // not more than 100 steps on the screen

    var onStartTrack = function onStartTrack(e) {
        startTrack(ctrl, opts, e);
    };

    var onInitDrag = function onInitDrag(e) {
        readRangeData(ctrl);
        initControlEvent(ctrl, e);
        startDrag(ctrl, opts, e);
    };

    var flexValueCss = fraction + ' 1 0%';
    var flexRestValue = 1 - fraction;
    var flexRestCss = flexRestValue + ' 1 0%';

    return [m('div', _extends$18({}, {
        class: CSS_CLASSES$19.track,
        config: function config(el, inited) {
            if (inited) return;
            ctrl.trackEl = el;
            if (opts.pin) {
                setTimeout(function () {
                    updatePinPosition(ctrl);
                }, 0);
            }
        }
    }, interactiveTrack && !opts.disabled && !p.isTouch ? {
        onmousedown: onStartTrack
    } : null, interactiveTrack && !opts.disabled && p.isTouch ? {
        ontouchstart: onStartTrack
    } : null), [m('div', {
        class: CSS_CLASSES$19.trackPart + ' ' + CSS_CLASSES$19.trackPartValue,
        style: {
            flex: flexValueCss,
            '-ms-flex': flexValueCss,
            webkitFlex: flexValueCss
        }
    }, m('div', { class: CSS_CLASSES$19.trackBar }, m('div', { class: CSS_CLASSES$19.trackBarValue }))), m('div', _extends$18({}, {
        class: CSS_CLASSES$19.control,
        config: function config(el, inited) {
            if (inited) return;
            ctrl.controlEl = el;
        }
    }, opts.disabled ? {
        disabled: true
    } : {
        tabindex: opts.tabindex || 0,
        onfocus: function onfocus() {
            focus(ctrl, ctrl.controlEl);
        },
        onblur: function onblur() {
            deFocus(ctrl);
        },
        onkeydown: function onkeydown(e) {
            if (e.which === 27) {
                // ESCAPE
                ctrl.controlEl.blur(e);
            } else if (e.which === 37) {
                // LEFT
                ctrl.decrease(e.shiftKey);
            } else if (e.which === 38) {
                // UP
                ctrl.increase(e.shiftKey);
            } else if (e.which === 39) {
                // RIGHT
                ctrl.increase(e.shiftKey);
            } else if (e.which === 40) {
                // DOWN
                ctrl.decrease(e.shiftKey);
            }
            readRangeData(ctrl);
            updatePinPosition(ctrl);
        }
    }, !opts.disabled && !p.isTouch ? {
        onmousedown: onInitDrag
    } : null, !opts.disabled && p.isTouch ? {
        ontouchstart: onInitDrag
    } : null, opts.events ? opts.events : null, hasTicks ? {
        step: stepCount
    } : null), opts.icon ? m('div', { class: CSS_CLASSES$19.thumb }, opts.icon) : null), m('div', {
        class: CSS_CLASSES$19.trackPart + ' ' + CSS_CLASSES$19.trackPartRest,
        style: {
            flex: flexRestCss,
            '-ms-flex': flexRestCss,
            webkitFlex: flexRestCss,
            'max-width': flexRestValue * 100 + '%' // for IE Edge
        }
    }, m('div', { class: CSS_CLASSES$19.trackBar }, m('div', { class: CSS_CLASSES$19.trackBarValue }))), hasTicks && !opts.disabled ? m('div', { class: CSS_CLASSES$19.ticks }, generateTickMarks(ctrl.min, ctrl.max, stepCount)) : null, hasTicks && opts.pin && !opts.disabled ? m('div', {
        class: CSS_CLASSES$19.pin,
        value: Math.round(ctrl.value()),
        config: function config(el, inited) {
            if (inited) return;
            ctrl.pinEl = el;
        }
    }) : null])];
};

var createView$20 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof opts.value === 'function') {
        ctrl.setValue(opts.value());
    }
    var tag = opts.tag || 'div';
    var hasTicks = opts.ticks !== undefined && opts.ticks !== false;
    var interactiveTrack = opts.interactiveTrack !== undefined ? opts.interactiveTrack : true;
    var props = {
        class: [CSS_CLASSES$19.block, opts.disabled ? CSS_CLASSES$19.isDisabled : null, opts.pin ? CSS_CLASSES$19.hasPin : null, interactiveTrack ? CSS_CLASSES$19.hasTrack : null, ctrl.isActive ? CSS_CLASSES$19.isActive : null, ctrl.hasFocus ? CSS_CLASSES$19.hasFocus : null, ctrl.fraction() === 0 ? CSS_CLASSES$19.isAtMin : null, hasTicks ? CSS_CLASSES$19.hasTicks : null, opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    var content = createSlider(ctrl, opts, hasTicks, interactiveTrack);
    return m(tag, props, [opts.before, content, opts.after]);
};

var component$28 = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var min = opts.min !== undefined ? opts.min : 0;
        var max = opts.max !== undefined ? opts.max : 100;
        var step = opts.step !== undefined ? opts.step : 1;
        var defaultValue = 0;
        var _fraction = min;
        var _value = defaultValue;

        if (typeof opts.value === 'function') {
            var v = opts.value();
            _value = v !== undefined ? v : defaultValue;
        } else {
            _value = opts.value !== undefined ? opts.value : defaultValue;
        }

        var setValue = function setValue(v) {
            if (v < min) v = min;
            if (v > max) v = max;
            _value = step ? Math.round(v / step) * step : v;
            _fraction = (_value - min) / (max - min);
            if (opts.getValue) {
                opts.getValue(_value);
            }
        };

        setValue(_value);

        return {
            min: min,
            max: max,
            trackEl: null,
            controlEl: null,
            pinEl: null,
            setValue: setValue,
            value: function value() {
                return _value;
            },
            fraction: function fraction() {
                return _fraction;
            },
            increase: function increase(multiply) {
                return setValue(_value + (multiply ? 10 : 1) * (step || 1));
            },
            decrease: function decrease(multiply) {
                return setValue(_value - (multiply ? 10 : 1) * (step || 1));
            },
            isActive: false,
            hasFocus: false,
            isDragging: false,
            // coordinates
            controlWidth: 0,
            rangeWidth: 0,
            rangeOffset: 0,
            clickOffset: 0
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$20(ctrl, opts);
    }
};

var show$5 = function show(ctrl, opts) {
    var height = ctrl.el.getBoundingClientRect().height;
    return {
        el: ctrl.containerEl,
        showDuration: opts.showDuration || .4,
        showDelay: opts.showDelay || 0,
        beforeShow: function beforeShow() {
            return ctrl.containerEl.style.transform = 'translate3d(0, ' + height + 'px, 0)';
        },
        show: function show() {
            return ctrl.containerEl.style.transform = 'translate3d(0, ' + 0 + 'px, 0)';
        }
    };
};

var hide$5 = function hide(ctrl, opts) {
    var height = ctrl.el.getBoundingClientRect().height;
    return {
        el: ctrl.containerEl,
        hideDuration: opts.hideDuration || .4,
        hideDelay: opts.hideDelay || 0,
        hide: function hide() {
            return ctrl.containerEl.style.transform = 'translate3d(0, ' + height + 'px, 0)';
        },
        afterHide: function afterHide() {
            return ctrl.containerEl.style.transform = 'translate3d(0, ' + 0 + 'px, 0)';
        }
    };
};

var transitions$1 = {
    show: show$5,
    hide: hide$5
};

var buttonPaddingH$1 = 8; // padding, inner text space

var vars$17 = {
    width: 274,
    border_radius: 0,
    title_padding_h: buttonPaddingH$1,
    title_single_padding_v: 14,
    title_multi_padding_v: 20,
    side_padding: 24 - buttonPaddingH$1,
    font_size: 14,
    line_height: 20,
    tablet_min_width: 288,
    tablet_max_width: 568,

    // switch light and dark: dark on light and light on dark

    color_light_background: appConfig.rgba(appConfig.color_dark_background),
    color_light_text: appConfig.rgba(appConfig.color_dark_foreground, appConfig.blend_light_dark_primary),

    color_dark_background: appConfig.rgba(appConfig.color_light_background),
    color_dark_text: appConfig.rgba(appConfig.color_light_foreground, appConfig.blend_light_text_primary)
};

function _defineProperty$19(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tabletStyle = function tabletStyle(config) {
    return {
        'min-width': config.tablet_min_width + 'px',
        'max-width': config.tablet_max_width + 'px',
        'border-bottom-left-radius': 0,
        'border-bottom-right-radius': 0,
        'border-top-left-radius': appConfig.unit_block_border_radius + 'px',
        'border-top-right-radius': appConfig.unit_block_border_radius + 'px',

        '&.pe-notification--horizontal': {
            ' .pe-notification__title': {
                'padding-right': '30px'
            }
        }
    };
};

var createStyles$34 = function createStyles(config) {
    return [_defineProperty$19({}, '@media (min-width: ' + appConfig.breakpoint_small_handset_landscape + 'px)', {
        '.pe-notification--snackbar': tabletStyle(config)
    })];
};

var layout$21 = (function (config) {
    return mixin.createStyles(config, createStyles$34);
});

function _defineProperty$20(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$15 = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$20({}, scope + '.pe-notification--snackbar', {
        color: config['color_' + tint + '_text'],
        background: config['color_' + tint + '_background']
    })];
};

var createStyles$35 = function createStyles(config) {
    return [style$15(config, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$15(config, 'dark', ' '),
        // has dark theme
        style$15(config, 'dark', '&')]
    }];
};

var color$15 = (function (config) {
    return mixin.createStyles(config, createStyles$35);
});

var configFn$19 = componentConfig && componentConfig.snackbar;
var config$19 = configFn$19 ? configFn$19(vars$17) : vars$17;
var id$20 = 'pe-notification-snackbar';

styler.add(id$20, layout$21(config$19), color$15(config$19));

var snackbar = multiple({
    instance: component$22,
    class: 'pe-notification pe-notification--snackbar',
    defaultId: 'default_snackbar',
    tag: 'div.pe-snackbar__holder',
    noneTag: 'span.pe-snackbar__placeholder',
    bodyShowClass: 'pe-snackbar--open',
    queue: true,
    transitions: transitions$1
});

var rgba$10 = appConfig.rgba;

var defaultConfig = {
    size_small: 24,
    size_regular: 32,
    size_medium: 40,
    size_large: 48,
    size_fab: 56,

    color_light_raised_background: rgba$10(appConfig.color_light_background),
    // also use light background with dark theme
    color_dark_raised_background: rgba$10(appConfig.color_light_background)
};

var sizes = function sizes(size) {
    return {
        width: size + 'px',
        height: size + 'px'
    };
};

var sizesRaised = function sizesRaised(size) {
    var padding = size / 4;
    var paddedSize = size + padding * 2;
    return {
        width: paddedSize + 'px',
        height: paddedSize + 'px',
        padding: padding + 'px'
    };
};

var createStyles$36 = function createStyles(config) {
    return [{
        '.pe-spinner': [mixin.vendorize({
            'transition-timing-function': 'ease-out'
        }, appConfig.prefixes_transition), mixin.vendorize({
            'transition-property': 'opacity'
        }, appConfig.prefixes_transition), {
            opacity: 0,

            '&.pe-spinner--visible, &.pe-spinner--permanent': {
                opacity: 1
            },

            '&.pe-spinner--small': sizes(config.size_small),
            '&.pe-spinner--regular': sizes(config.size_regular),
            '&.pe-spinner--medium': sizes(config.size_medium),
            '&.pe-spinner--large': sizes(config.size_large),
            '&.pe-spinner--fab': sizes(config.size_fab),

            '&.pe-spinner--raised': {
                position: 'relative',
                'border-radius': '50%',

                '&.pe-spinner--small': sizesRaised(config.size_small),
                '&.pe-spinner--regular': sizesRaised(config.size_regular),
                '&.pe-spinner--medium': sizesRaised(config.size_medium),
                '&.pe-spinner--large': sizesRaised(config.size_large),
                '&.pe-spinner--fab': sizesRaised(config.size_fab)
            }
        }]
    }];
};

var layout$22 = (function (config) {
    return mixin.createStyles(config, createStyles$36);
});

function _defineProperty$21(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$16 = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$21({}, scope + '.pe-spinner', {
        '&.pe-spinner--raised': {
            'background-color': config['color_' + tint + '_raised_background']
        }
    })];
};

var createStyles$37 = function createStyles(config) {
    return [style$16(config, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$16(config, 'dark', ' '),
        // has dark theme
        style$16(config, 'dark', '&')]
    }];
};

var color$16 = (function (config) {
    return mixin.createStyles(config, createStyles$37);
});

var configFn$20 = componentConfig && componentConfig['spinner-default'];
var config$20 = configFn$20 ? configFn$20(defaultConfig) : defaultConfig;
var id$21 = 'pe-spinner-default';

styler.add(id$21, layout$22(config$20), color$16(config$20));

var _extends$19 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$21 = {
    block: 'pe-spinner',
    placeholder: 'pe-spinner--placeholder',
    animation: 'pe-spinner__animation',
    visible: 'pe-spinner--visible',
    small: 'pe-spinner--small',
    regular: 'pe-spinner--regular',
    medium: 'pe-spinner--medium',
    large: 'pe-spinner--large',
    fab: 'pe-spinner--fab',
    raised: 'pe-spinner--raised',
    permanent: 'pe-spinner--permanent',
    singleColor: 'pe-spinner--single-color',
    animated: 'pe-spinner--animated'
};

var typeClasses$3 = {
    small: CSS_CLASSES$21.small,
    regular: CSS_CLASSES$21.regular,
    medium: CSS_CLASSES$21.medium,
    large: CSS_CLASSES$21.large,
    fab: CSS_CLASSES$21.fab
};

var classForType$3 = function classForType() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'regular';

    return typeClasses$3[mode];
};

var show$6 = function show(ctrl, opts) {
    if (ctrl.isTransitioning) {
        return;
    }
    ctrl.isTransitioning = true;
    return transition$1.show(_extends$19({}, opts, {
        el: ctrl.el,
        showClass: CSS_CLASSES$21.visible
    })).then(function () {
        ctrl.isTransitioning = false;
        ctrl.visible = true;
    });
};

var hide$6 = function hide(ctrl, opts) {
    if (ctrl.isTransitioning) {
        return;
    }
    ctrl.isTransitioning = true;
    return transition$1.hide(_extends$19({}, opts, {
        el: ctrl.el,
        afterHide: function afterHide() {
            return ctrl.el.style.display = 'none';
        },
        showClass: CSS_CLASSES$21.visible
    })).then(function () {
        ctrl.isTransitioning = false;
        ctrl.visible = false;
        ctrl.hide = false;
        m.redraw(); // removes remainder of drawn component
    });
};

var notifyState$1 = function notifyState(ctrl, opts) {
    if (opts.percentage && opts.getPercentage) {
        var percentage = void 0;
        if (typeof opts.percentage === 'function') {
            percentage = opts.percentage();
        } else {
            percentage = opts.percentage;
        }
        opts.getPercentage(percentage, ctrl, opts);
    }
};

var createView$21 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = _extends$19({}, {
        class: [CSS_CLASSES$21.block, classForType$3(opts.type), opts.singleColor ? CSS_CLASSES$21.singleColor : null, opts.raised ? CSS_CLASSES$21.raised : null, opts.animated ? CSS_CLASSES$21.animated : null, opts.permanent ? CSS_CLASSES$21.permanent : null, opts.class].join(' '),
        id: opts.id || '',
        config: function config(el, inited, context, vdom) {
            if (inited) return;
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            ctrl.el = el;

            notifyState$1(ctrl, opts);

            if (!opts.permanent) {
                setTimeout(function () {
                    show$6(ctrl, opts);
                }, 0);
            }
        }
    }, opts.events ? opts.events : null);

    notifyState$1(ctrl, opts);

    if (ctrl.hide) {
        setTimeout(function () {
            hide$6(ctrl, opts);
        }, 0);
    }

    var content = [opts.raised && opts.content ? m(component$2, {
        z: opts.z
    }) : null, opts.content || m('div', { class: CSS_CLASSES$21.animation }, 'Specific spinner missing')];

    return m(tag, props, [opts.before, content, opts.after]);
};

var delay = function delay(opts, mode) {
    var value = opts[mode];
    return value !== true && !isNaN(value) ? parseFloat(value, 10) * 1000 : false;
};

var component$32 = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return {
            el: null,
            isTransitioning: false,
            visible: opts.permanent || false,
            hide: false,
            percentage: 0
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!ctrl.visible) {
            if (opts.hide !== undefined && !opts.hide || opts.show) {
                var showDelay = delay(opts, 'show');
                if (showDelay) {
                    setTimeout(function () {
                        return ctrl.visible = true, m.redraw();
                    }, showDelay);
                } else {
                    ctrl.visible = true;
                }
            }
        } else {
            if (opts.show !== undefined && !opts.show || opts.hide) {
                var hideDelay = delay(opts, 'hide');
                if (hideDelay) {
                    setTimeout(function () {
                        return ctrl.hide = true, m.redraw();
                    }, hideDelay);
                } else {
                    ctrl.hide = true;
                }
            }
        }
        if (ctrl.visible) {
            return createView$21(ctrl, opts);
        } else {
            return m('span', { class: CSS_CLASSES$21.placeholder });
        }
    }
};

var vars$18 = {
    animation_duration: 1, // seconds

    color_light: appConfig.rgba(appConfig.color_light_foreground),
    color_dark: appConfig.rgba(appConfig.color_dark_foreground)
};

function _defineProperty$22(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var kfFade = function kfFade() {
    return {
        ' 0%': {
            opacity: .640
        },
        ' 100%': {
            opacity: .035
        }
    };
};

var positionBlades = function positionBlades(config) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (i) {
        // reverse to improve performance on iOS
        var delay = -(1 / 12 * i * config.animation_duration);
        var rotation = 360 - 360 / 12 * i;

        return _defineProperty$22({}, ' div:nth-of-type(' + (i + 1) + ')', [mixin.vendorize({
            'transform': 'rotate(' + rotation + 'deg) translate3d(0,-142%,0)'
        }, appConfig.prefixes_transform), mixin.vendorize({
            'animation': 'iosSpinnerFade ' + config.animation_duration + 's ' + delay + 's linear infinite'
        }, appConfig.prefixes_animation)]);
    });
};

var createStyles$38 = function createStyles(config) {
    return [{
        '.pe-spinner--ios': [mixin.vendorize({ 'transform': 'translate3d(0,0,0)' }, appConfig.prefixes_transform), positionBlades(config), {
            position: 'relative',

            ' > div': {
                position: 'absolute',
                width: '10%',
                height: '28%',
                left: '44.5%',
                top: '37%',
                opacity: 0,
                'border-radius': '50px'
            },

            '@keyframes iosSpinnerFade': kfFade()
        }]
    }];
};

var layout$23 = (function (config) {
    return mixin.createStyles(config, createStyles$38);
});

function _defineProperty$23(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$17 = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$23({}, scope + '.pe-spinner--ios', {
        color: config['color_' + tint],

        ' > div': {
            background: 'currentcolor'
        }
    })];
};

var createStyles$39 = function createStyles(config) {
    return [style$17(config, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$17(config, 'dark', ' '),
        // has dark theme
        style$17(config, 'dark', '&')]
    }];
};

var color$17 = (function (config) {
    return mixin.createStyles(config, createStyles$39);
});

var configFn$21 = componentConfig && componentConfig['spinner-ios'];
var config$21 = configFn$21 ? configFn$21(vars$18) : vars$18;
var id$22 = 'pe-spinner-ios';

styler.add(id$22, layout$23(config$21), color$17(config$21));

var CSS_CLASSES$20 = {
    block: 'pe-spinner--ios'
};

var component$30 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var blades = [];
        for (var i = 0; i < 12; i = i + 1) {
            blades.push(m('div'));
        }
        opts.content = blades;
        opts.class = [CSS_CLASSES$20.block, opts.class].join(' ');
        return m(component$32, opts);
    }
};

var _extends$20 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var vars$19 = _extends$20({}, defaultConfig, {
    border_width_small: defaultConfig.size_small / defaultConfig.size_regular * 3,
    border_width_regular: 3,
    border_width_medium: defaultConfig.size_medium / defaultConfig.size_regular * 3,
    border_width_large: defaultConfig.size_large / defaultConfig.size_regular * 3,
    border_width_fab: defaultConfig.size_fab / defaultConfig.size_regular * 3,

    color_light: appConfig.rgba(appConfig.color_primary),
    color_dark: appConfig.rgba(appConfig.color_primary)
});

var createStyles$40 = function createStyles() {
    return [{
        '.pe-spinner-determinate': {
            position: 'relative',

            ' .pe-spinner-determinate__animation': [mixin.vendorize({
                'animation-duration': '1.5s'
            }, appConfig.prefixes_animation), {
                position: 'absolute',
                width: '100%',
                height: '100%'
            }],

            ' .pe-spinner-determinate__circle': {
                position: 'absolute',
                'box-sizing': 'border-box',
                width: '100%',
                height: '100%',
                'border-style': 'solid',
                'border-radius': '50%'
            }
        }
    }];
};

var layout$24 = (function (config) {
    return mixin.createStyles(config, createStyles$40);
});

function _defineProperty$24(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$18 = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$24({}, scope + '.pe-spinner--determinate', {
        color: config['color_' + tint],

        ' .pe-spinner-determinate__circle': {
            'border-color': 'currentcolor'
        }
    })];
};

var createStyles$41 = function createStyles(config) {
    return [style$18(config, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$18(config, 'dark', ' '),
        // has dark theme
        style$18(config, 'dark', '&')]
    }];
};

var color$18 = (function (config) {
    return mixin.createStyles(config, createStyles$41);
});

var configFn$22 = componentConfig && componentConfig['spinner-determinate'];
var config$22 = configFn$22 ? configFn$22(vars$19) : vars$19;
var id$23 = 'pe-spinner-determinate';

styler.add(id$23, layout$24(config$22), color$18(config$22));

/*
Derived from https://github.com/PolymerElements/paper-spinner

@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

var CSS_CLASSES$22 = {
    block: 'pe-spinner-determinate',
    animation: 'pe-spinner-determinate__animation',
    circle: 'pe-spinner-determinate__circle',
    circleRight: 'pe-spinner-determinate__circle--right',
    circleLeft: 'pe-spinner-determinate__circle--left'
};

var sizeFromType = function sizeFromType() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'regular';
    return vars$19['size_' + type];
};

var percentageValue = function percentageValue(min, max, percentage) {
    return min + (max - min) * percentage;
};

var rotateCircle = function rotateCircle(el, min, max, percentage) {
    var style = el.style;
    style['transform'] = style['-webkit-transform'] = style['-moz-transform'] = style['-ms-transform'] = style['-o-transform'] = 'rotate(' + percentageValue(min, max, percentage) + 'deg)';
};

var animate = function animate(ctrlEl, size, percentage) {
    var animationEl = ctrlEl.querySelector('.' + CSS_CLASSES$22.animation);
    var animationElStyle = animationEl.style;

    if (percentage < 0.5) {
        animationElStyle.clip = 'rect(0px, ' + size + 'px, ' + size + 'px, ' + size / 2 + 'px)';
    } else {
        animationElStyle.clip = 'rect(auto, auto, auto, auto)';
    }

    var leftCircle = ctrlEl.querySelector('.' + CSS_CLASSES$22.circleLeft);
    var rightCircle = ctrlEl.querySelector('.' + CSS_CLASSES$22.circleRight);
    leftCircle.style.clip = rightCircle.style.clip = 'rect(0px, ' + size / 2 + 'px, ' + size + 'px, ' + '0px)';
    rotateCircle(rightCircle, 0, 180, Math.min(1, percentage * 2));
    rotateCircle(leftCircle, 0, 360, percentage);
};

var handlePercentage = function handlePercentage(percentage, ctrl, size) {
    var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    if (!ctrl.el) {
        return;
    }

    ctrl._previousPercentage = ctrl._previousPercentage || 0;

    if (opts.animated && ctrl._previousPercentage !== percentage) {
        var STEP_DURATION = opts.updateDuration * 1000;
        var start = null;
        var step = function step(timestamp) {
            if (!start) start = timestamp;
            var progress = timestamp - start;
            var stepPercentage = 1.0 / STEP_DURATION * progress;
            var newPercentage = ctrl._previousPercentage + stepPercentage * (percentage - ctrl._previousPercentage);
            animate(ctrl.el, size, easing.easeInOutQuad(newPercentage));
            ctrl._previousPercentage = newPercentage;
            if (start && progress < STEP_DURATION) {
                window.requestAnimationFrame(step);
            } else {
                start = null;
            }
        };
        window.requestAnimationFrame(step);
    } else {
        animate(ctrl.el, size, percentage);
        ctrl._previousPercentage = percentage;
    }
};

var component$33 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var size = sizeFromType(opts.type);
        opts.content = m('div', {
            class: CSS_CLASSES$22.animation
        }, [m('div', {
            class: [CSS_CLASSES$22.circle, CSS_CLASSES$22.circleLeft].join(' ')
        }), m('div', {
            class: [CSS_CLASSES$22.circle, CSS_CLASSES$22.circleRight].join(' ')
        })]);
        opts.class = [CSS_CLASSES$22.block, opts.class].join(' ');
        opts.getPercentage = function (percentage, ctrl) {
            return handlePercentage(percentage, ctrl, size, opts);
        };
        return m(component$32, opts);
    }
};

/*
Derived from https://github.com/PolymerElements/paper-spinner

@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

var arc_size = 270; // degrees - amount of circle the arc takes up
var arc_time = 1.333; // s - time it takes to expand and contract arc
var arc_start_degrees = 360 / 5 * 3; // degrees - how much the start location of the arc should rotate each time, 216 gives us a 5 pointed star shape (it's 360/5 * 3). For a 7 pointed star, we might do 360/7 * 3 = 154.286.
var rotation_duration = 360 * arc_time / (arc_start_degrees + (360 - arc_size)); // 1.568s

var vars$20 = {
    border_width_small: defaultConfig.size_small / defaultConfig.size_regular * 3,
    border_width_regular: 3,
    border_width_medium: defaultConfig.size_medium / defaultConfig.size_regular * 3,
    border_width_large: defaultConfig.size_large / defaultConfig.size_regular * 3,
    border_width_fab: defaultConfig.size_fab / defaultConfig.size_regular * 3,
    rotation_duration: rotation_duration,
    arc_size: arc_size,
    arc_time: arc_time,
    arc_start_degrees: arc_start_degrees,

    color_light_single: appConfig.rgba(appConfig.color_primary),
    color_light_1: '#42a5f5', // blue 400
    color_light_2: '#f44336', // red 500
    color_light_3: '#fdd835', // yellow 600,
    color_light_4: '#4caf50', // green 500

    color_dark_single: appConfig.rgba(appConfig.color_primary),
    color_dark_1: '#42a5f5', // blue 400
    color_dark_2: '#f44336', // red 500
    color_dark_3: '#fdd835', // yellow 600,
    color_dark_4: '#4caf50' // green 500
};

function _defineProperty$25(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Derived from https://github.com/PolymerElements/paper-spinner

@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

var OPACITY_MIN = 0;
var OPACITY_MAX = .99;
var CURVE_INFINITE = 'cubic-bezier(0.4, 0.0, 0.2, 1) infinite both';

var createStyles$42 = function createStyles(config) {
    return [{
        '.pe-spinner-indeterminate': {

            ' .pe-spinner-indeterminate__animation': [mixin.vendorize({
                'animation': 'indeterminateSpinnerRotate ' + config.rotation_duration + 's linear infinite'
            }, appConfig.prefixes_animation), {
                position: 'relative',
                width: '100%',
                height: '100%',

                /* The spinner does not have any contents that would have to be
                * flipped if the direction changes. Always use ltr so that the
                * style works out correctly in both cases. */
                direction: 'ltr'
            }],

            /**
            * Patch the gap that appear between the two adjacent div.pe-spinner-indeterminate__circle-clipper while the
            * spinner is rotating (appears on Chrome 38, Safari 7.1, and IE 11).
            *
            * Update: the gap no longer appears on Chrome when .pe-spinner-indeterminate__layer's opacity is 0.99,
            * but still does on Safari and IE.
            */
            ' .pe-spinner-indeterminate__gap-patch': {
                position: 'absolute',
                'box-sizing': 'border-box',
                top: 0,
                left: '45%',
                width: '10%',
                height: '100%',
                overflow: 'hidden',
                'border-color': 'inherit'
            },

            ' .pe-spinner-indeterminate__gap-patch .pe-spinner-indeterminate__circle': {
                width: '1000%',
                left: '-450%'
            },

            ' .pe-spinner-indeterminate__circle-clipper': {
                display: 'inline-block',
                'font-size': 0,
                'line-height': 0,
                position: 'relative',
                width: '50%',
                height: '100%',
                overflow: 'hidden',
                'border-color': 'inherit'
            },

            ' .pe-spinner-indeterminate__circle-clipper .pe-spinner-indeterminate__circle': {
                width: '200%'
            },

            ' .pe-spinner-indeterminate__circle': [mixin.fit(), mixin.vendorize({
                'animation': 'none'
            }, appConfig.prefixes_animation), {
                'box-sizing': 'border-box',
                height: '100%',
                'border-style': 'solid',
                'border-color': 'inherit',
                'border-radius': '50%',
                'border-bottom-color': 'transparent !important'
            }],

            '&': ['small', 'regular', 'medium', 'large', 'fab'].map(function (size) {
                return _defineProperty$25({}, '&.pe-spinner--' + size, {
                    ' .pe-spinner-indeterminate__circle': {
                        'border-width': config['border_width_' + size] + 'px'
                    }
                });
            }),

            ' .pe-spinner-indeterminate__circle-clipper--left .pe-spinner-indeterminate__circle': [mixin.vendorize({
                'transform': 'rotate(129deg)'
            }, appConfig.prefixes_transform), mixin.vendorize({
                'animation': 'indeterminateLeftSpin ' + config.arc_time + 's ' + CURVE_INFINITE
            }, appConfig.prefixes_animation), {
                'border-right-color': 'transparent !important'
            }],

            ' .pe-spinner-indeterminate__circle-clipper--right .pe-spinner-indeterminate__circle': [mixin.vendorize({
                'transform': 'rotate(-129deg)'
            }, appConfig.prefixes_transform), mixin.vendorize({
                'animation': 'indeterminateRightSpin ' + config.arc_time + 's ' + CURVE_INFINITE
            }, appConfig.prefixes_animation), {
                left: '-100%',
                'border-left-color': 'transparent !important'
            }],

            /**
            * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
            *
            * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't
            * guarantee that the animation will start _exactly_ after that value. So we avoid using
            * animation-delay and instead set custom keyframes for each color (as redundant as it
            * seems).
            *
            * We write out each animation in full (instead of separating animation-name,
            * animation-duration, etc.) because under the polyfill, Safari does not recognize those
            * specific properties properly, treats them as -webkit-animation, and overrides the
            * other animation rules. See https://github.com/Polymer/platform/issues/53.
            */
            ' .pe-spinner-indeterminate__layer': [mixin.vendorize({
                'animation': 'indeterminateFillUnfillRotate ' + 4 * config.arc_time + 's ' + CURVE_INFINITE
            }, appConfig.prefixes_animation), [1, 2, 3, 4].map(function (num) {
                return layerAnimation(config, num);
            }), {
                position: 'absolute',
                width: '100%',
                height: '100%',
                'white-space': 'nowrap'
            }],

            '@keyframes indeterminateSpinnerRotate': kfRotate(),
            '@keyframes indeterminateRightSpin': kfRightSpin(),
            '@keyframes indeterminateLeftSpin': kfLeftSpin(),
            '@keyframes indeterminateFadeOut': kfFadeOut(),
            '@keyframes indeterminateFillUnfillRotate': kfFillUnfillRotate(config),
            '@keyframes indeterminateLayer1FadeInOut': kfLayer1FadeInOut(),
            '@keyframes indeterminateLayer2FadeInOut': kfLayer2FadeInOut(),
            '@keyframes indeterminateLayer3FadeInOut': kfLayer3FadeInOut(),
            '@keyframes indeterminateLayer4FadeInOut': kfLayer4FadeInOut()
        }
    }];
};

var kfRotate = function kfRotate() {
    return {
        ' to': {
            transform: 'rotate(360deg)'
        }
    };
};

var kfLeftSpin = function kfLeftSpin() {
    return kfSpin(1);
};
var kfRightSpin = function kfRightSpin() {
    return kfSpin(-1);
};

var kfSpin = function kfSpin(direction) {
    return {
        ' from': {
            'transform': 'rotate(' + direction * 130 + 'deg)'
        },
        ' 50%': {
            'transform': 'rotate(' + direction * -5 + 'deg)'
        },
        ' to': {
            'transform': 'rotate(' + direction * 130 + 'deg)'
        }
    };
};

var kfFadeOut = function kfFadeOut() {
    return {
        ' from': {
            opacity: OPACITY_MAX
        },
        ' to': {
            opacity: OPACITY_MIN
        }
    };
};

var kfFillUnfillRotate = function kfFillUnfillRotate(config) {
    return {
        ' 12.5%': {
            transform: 'rotate(' + 0.5 * config.arc_size + 'deg)'
        },
        ' 25%': {
            transform: 'rotate(' + 1.0 * config.arc_size + 'deg)'
        },
        ' 37.5%': {
            transform: 'rotate(' + 1.5 * config.arc_size + 'deg)'
        },
        ' 50%': {
            transform: 'rotate(' + 2.0 * config.arc_size + 'deg)'
        },
        ' 62.5%': {
            transform: 'rotate(' + 2.5 * config.arc_size + 'deg)'
        },
        ' 75%': {
            transform: 'rotate(' + 3.0 * config.arc_size + 'deg)'
        },
        ' 87.5%': {
            transform: 'rotate(' + 3.5 * config.arc_size + 'deg)'
        },
        ' to': {
            transform: 'rotate(' + 4.0 * config.arc_size + 'deg)'
        }
    };
};

/**
* HACK: Even though the intention is to have the current .pe-spinner-indeterminate__layer at
* `opacity: 1`, we set it to `opacity: 0.99` instead since this forces Chrome
* to do proper subpixel rendering for the elements being animated. This is
* especially visible in Chrome 39 on Ubuntu 14.04. See:
*
* - https://github.com/Polymer/paper-spinner/issues/9
* - https://code.google.com/p/chromium/issues/detail?id=436255
*/

var kfLayer1FadeInOut = function kfLayer1FadeInOut() {
    return {
        ' from': {
            opacity: OPACITY_MAX
        },
        ' 25%': {
            opacity: OPACITY_MAX
        },
        ' 26%': {
            opacity: OPACITY_MIN
        },
        ' 89%': {
            opacity: OPACITY_MIN
        },
        ' 90%': {
            opacity: OPACITY_MAX
        },
        ' 100%': {
            opacity: OPACITY_MAX
        }
    };
};

var kfLayer2FadeInOut = function kfLayer2FadeInOut() {
    return {
        ' from': {
            opacity: OPACITY_MIN
        },
        ' 15%': {
            opacity: OPACITY_MIN
        },
        ' 25%': {
            opacity: OPACITY_MAX
        },
        ' 50%': {
            opacity: OPACITY_MAX
        },
        ' 51%': {
            opacity: OPACITY_MIN
        }
    };
};

var kfLayer3FadeInOut = function kfLayer3FadeInOut() {
    return {
        ' from': {
            opacity: OPACITY_MIN
        },
        ' 40%': {
            opacity: OPACITY_MIN
        },
        ' 50%': {
            opacity: OPACITY_MAX
        },
        ' 75%': {
            opacity: OPACITY_MAX
        },
        ' 76%': {
            opacity: OPACITY_MIN
        }
    };
};

var kfLayer4FadeInOut = function kfLayer4FadeInOut() {
    return {
        ' from': {
            opacity: OPACITY_MIN
        },
        ' 65%': {
            opacity: OPACITY_MIN
        },
        ' 75%': {
            opacity: OPACITY_MAX
        },
        ' 90%': {
            opacity: OPACITY_MAX
        },
        ' 100%': {
            opacity: OPACITY_MIN
        }
    };
};

var layerAnimation = function layerAnimation(config, num) {
    return _defineProperty$25({}, '&.pe-spinner-indeterminate__layer--' + num, [mixin.vendorize({
        'animation': 'indeterminateFillUnfillRotate ' + 4 * config.arc_time + 's ' + CURVE_INFINITE + ',  indeterminateLayer' + num + 'FadeInOut ' + 4 * config.arc_time + 's ' + CURVE_INFINITE
    }, appConfig.prefixes_animation)]);
};

var layout$25 = (function (config) {
    return mixin.createStyles(config, createStyles$42);
});

function _defineProperty$26(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Derived from https://github.com/PolymerElements/paper-spinner

@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

var style$19 = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$26({}, scope + '.pe-spinner-indeterminate', {

        color: config['color_' + tint + '_single'],

        ' .pe-spinner-indeterminate__layer': {
            'border-color': 'currentcolor'
        },

        '&:not(.pe-spinner--single-color)': {
            ' .pe-spinner-indeterminate__layer--1': {
                'border-color': config['color_' + tint + '_1']
            },
            ' .pe-spinner-indeterminate__layer--2': {
                'border-color': config['color_' + tint + '_2']
            },
            ' .pe-spinner-indeterminate__layer--3': {
                'border-color': config['color_' + tint + '_3']
            },
            ' .pe-spinner-indeterminate__layer--4': {
                'border-color': config['color_' + tint + '_4']
            }
        }
    })];
};

var createStyles$43 = function createStyles(config) {
    return [style$19(config, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$19(config, 'dark', ' '),
        // has dark theme
        style$19(config, 'dark', '&')]
    }];
};

var color$19 = (function (config) {
    return mixin.createStyles(config, createStyles$43);
});

var configFn$23 = componentConfig && componentConfig['spinner-indeterminate'];
var config$23 = configFn$23 ? configFn$23(vars$20) : vars$20;
var id$24 = 'pe-spinner-indeterminate';

styler.add(id$24, layout$25(config$23), color$19(config$23));

/*
Derived from https://github.com/PolymerElements/paper-spinner

@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

var CSS_CLASSES$23 = {
    block: 'pe-spinner-indeterminate',
    animation: 'pe-spinner-indeterminate__animation',
    layer: 'pe-spinner-indeterminate__layer',
    layerN: 'pe-spinner-indeterminate__layer--',
    gapPatch: 'pe-spinner-indeterminate__gap-patch',
    circle: 'pe-spinner-indeterminate__circle',
    circleClipper: 'pe-spinner-indeterminate__circle-clipper',
    circleClipperLeft: 'pe-spinner-indeterminate__circle-clipper--left',
    circleClipperRight: 'pe-spinner-indeterminate__circle-clipper--right'
};

var layer = function layer(num) {
    return m('div', {
        class: [CSS_CLASSES$23.layer, CSS_CLASSES$23.layerN + num].join(' ')
    }, [m('div', {
        class: [CSS_CLASSES$23.circleClipper, CSS_CLASSES$23.circleClipperLeft].join(' ')
    }, m('div', {
        class: CSS_CLASSES$23.circle
    })), m('div', {
        class: CSS_CLASSES$23.gapPatch
    }, m('div', {
        class: CSS_CLASSES$23.circle
    })), m('div', {
        class: [CSS_CLASSES$23.circleClipper, CSS_CLASSES$23.circleClipperRight].join(' ')
    }, m('div', {
        class: CSS_CLASSES$23.circle
    }))]);
};

var component$35 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        opts.content = m('div', {
            class: CSS_CLASSES$23.animation
        }, [1, 2, 3, 4].map(function (num) {
            return layer(num);
        }));
        opts.class = [CSS_CLASSES$23.block, opts.class].join(' ');
        return m(component$32, opts);
    }
};

var _extends$21 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var rgba$11 = appConfig.rgba;
var hit_area_padding = (appConfig.grid_unit_icon_button - appConfig.unit_icon_size) / 2; // 12

var config$25 = _extends$21({}, selectionControlConfig, {
    track_height: 14,
    track_length: 36,
    thumb_size: 20,
    padding: 1 * appConfig.grid_unit_component,
    icon_button_padding: iconButtonConfig.padding,
    hit_area_padding: hit_area_padding,

    animation_duration: '.18s',

    color_light_thumb_on: rgba$11(appConfig.color_primary),
    color_light_thumb_off: '#f1f1f1',
    color_light_thumb_disabled: '#bdbdbd',

    color_light_track_on: rgba$11(appConfig.color_primary_faded),
    color_light_track_on_opacity: .55,
    color_light_track_off: rgba$11(appConfig.color_light_foreground, appConfig.blend_light_text_regular),
    color_light_track_off_opacity: .55,
    color_light_track_disabled: rgba$11(appConfig.color_light_foreground, appConfig.blend_light_background_disabled),
    color_light_track_disabled_opacity: 1,

    // color_light_focus_on and so on taken from selectionControlConfig

    color_dark_thumb_on: rgba$11(appConfig.color_primary), // or '#80cbc4'
    color_dark_thumb_off: '#bdbdbd',
    color_dark_thumb_disabled: '#555',

    color_dark_track_on: rgba$11(appConfig.color_primary_faded, appConfig.blend_dark_text_tertiary), // or '#5a7f7c'
    color_dark_track_on_opacity: .9,
    color_dark_track_off: '#717171',
    color_dark_track_off_opacity: .55,
    color_dark_track_disabled: '#717171',
    color_dark_track_disabled_opacity: .3

    // color_dark_focus_on and so on taken from selectionControlConfig
});

var transition$2 = function transition(config, properties) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : config.animation_duration;

    return [mixin.defaultTransition(properties, duration, 'ease-out')];
};

var customSize = function customSize(config, size) {
    var factor = size / appConfig.unit_icon_size;
    var thumbSize = Math.floor(0.5 * config.thumb_size * factor) * 2; // round to even
    var scaledTrackHeight = Math.floor(0.5 * config.track_height * factor) * 2; // round to even
    var scaledTrackWidth = Math.floor(0.5 * config.track_length * factor) * 2;
    var scaledThumbSize = Math.floor(0.5 * config.thumb_size * factor) * 2;
    var trackTop = (config.label_height * factor - scaledTrackHeight) / 2;
    var thumbPadding = config.icon_button_padding;
    var thumbMargin = (size - scaledThumbSize) / 2;
    var thumbOuterSize = size + 2 * thumbPadding;
    var thumbOffsetMin = -(thumbOuterSize / 2) + thumbSize / 2;
    var thumbOffsetMax = thumbOffsetMin + scaledTrackWidth - thumbSize;
    var thumbOffsetY = thumbOffsetMin + thumbMargin;
    var trackVisualOffset = 0.3; // prevent sub pixel of track to shine through knob border

    return {
        ' .pe-control__label': {
            height: size + 'px',
            'min-width': scaledTrackWidth + 'px',

            ' span': {
                'padding-left': config.padding * factor + 8 + scaledTrackWidth + 'px'
            }
        },
        ' .pe-control--switch__track': {
            left: trackVisualOffset + 'px',
            height: scaledTrackHeight + 'px',
            width: scaledTrackWidth - 2 * trackVisualOffset + 'px',
            top: trackTop + 'px',
            'border-radius': scaledTrackHeight + 'px'
        },
        ' .pe-control--switch__thumb': {
            top: thumbOffsetY + 'px',
            left: thumbOffsetMin + 'px',
            'z-index': 1
        },

        ' .pe-control--switch__knob': {
            position: 'relative',
            width: scaledThumbSize + 'px',
            height: scaledThumbSize + 'px',
            'border-radius': '50%',
            margin: thumbMargin + 'px'
        },

        ' .pe-button__label': {
            ' .pe-control--switch__knob': {
                ' .pe-icon': [mixin.fit(), {
                    width: '100%',
                    height: '100%'
                }]
            }
        },

        '&.pe-control--on': {
            ' .pe-control--switch__thumb': {
                left: thumbOffsetMax + 'px'
            }
        }
    };
};

var createStyles$44 = function createStyles(config) {
    return [createStyles$12(config, '.pe-control--switch', 'checkbox'), {
        '.pe-control--switch': {

            ' .pe-control--switch__track': [transition$2(config, 'background, opacity'), {
                position: 'absolute',
                left: 0
            }],

            ' .pe-control--switch__thumb': [transition$2(config, 'left, color'), {
                position: 'absolute',
                color: 'inherit',

                ':focus': {
                    outline: 0
                }
            }],

            ' .pe-button__focus': [transition$2(config, 'all')],

            '&.pe-control--small': customSize(config, appConfig.unit_icon_size_small),
            '&.pe-control--regular': customSize(config, appConfig.unit_icon_size),
            '&.pe-control--medium': customSize(config, appConfig.unit_icon_size_medium),
            '&.pe-control--large': customSize(config, appConfig.unit_icon_size_large)
        }
    }];
};

var layout$26 = (function (config) {
    return mixin.createStyles(config, createStyles$44);
});

function _defineProperty$27(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$20 = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [style$5(config, tint, scope), _defineProperty$27({}, scope + '.pe-control--switch', {

        '&.pe-control--off': {
            ' .pe-control--switch__track': {
                opacity: config['color_' + tint + '_track_off_opacity'],
                'background-color': config['color_' + tint + '_track_off']
            },
            ' .pe-control--switch__thumb': {
                color: config['color_' + tint + '_thumb_off']
            },
            ' .pe-control--switch__knob': {
                'background-color': 'currentcolor'
            },
            ' .pe-button--focus': {
                ' .pe-button__focus': {
                    opacity: config['color_' + tint + '_focus_off_opacity'],
                    'background-color': config['color_' + tint + '_focus_off']
                }
            }
        },

        '&.pe-control--on': {
            ' .pe-control--switch__track': {
                opacity: config['color_' + tint + '_track_on_opacity'],
                'background-color': config['color_' + tint + '_track_on']
            },
            ' .pe-control--switch__thumb': {
                color: config['color_' + tint + '_thumb_on']
            },
            ' .pe-control--switch__knob': {
                'background-color': 'currentcolor'
            },
            ' .pe-button--focus': {
                ' .pe-button__focus': {
                    opacity: config['color_' + tint + '_focus_on_opacity'],
                    'background-color': config['color_' + tint + '_focus_on']
                }
            }
        },

        '&.pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled': {
            ' .pe-control--switch__track': {
                opacity: config['color_' + tint + '_track_disabled_opacity'],
                'background-color': config['color_' + tint + '_track_disabled']
            },
            ' .pe-control--switch__thumb': {
                color: config['color_' + tint + '_thumb_disabled']
            }
        }
    })];
};

var createStyles$45 = function createStyles(config) {
    return [style$20(config, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$20(config, 'dark', ' '),
        // has dark theme
        style$20(config, 'dark', '&')]
    }];
};

var color$20 = (function (config) {
    return mixin.createStyles(config, createStyles$45);
});

var configFn$24 = componentConfig && componentConfig.switch;
var config$24 = configFn$24 ? configFn$24(config$25) : config$25;
var id$25 = 'pe-switch';

styler.add(id$25, layout$26(config$24), color$20(config$24));

var CSS_CLASSES$24 = {
    block: 'pe-control--switch',
    track: 'pe-control--switch__track',
    thumb: 'pe-control--switch__thumb',
    knob: 'pe-control--switch__knob'
};

var selectionView = function selectionView(checked, opts) {
    var zOff = opts.zOff !== undefined ? opts.zOff : 1;
    var zOn = opts.zOn !== undefined ? opts.zOn : 2;
    var z = checked ? zOn : zOff;
    var raised = opts.disabled ? false : opts.raised !== undefined ? opts.raised : true;
    return [m('div', { class: CSS_CLASSES$24.track }), m(component$11, {
        class: CSS_CLASSES$24.thumb,
        tabindex: opts.tabindex || 0,
        ink: opts.ink !== undefined ? opts.ink : false,
        wash: opts.wash,
        disabled: opts.disabled,
        content: [m('div', {
            class: CSS_CLASSES$24.knob
        }, [opts.icon ? opts.icon : null, raised ? m(component$2, {
            z: z,
            animated: true
        }) : null])]
    })];
};

var selectable$2 = function selectable() {
    return true;
};

var createView$22 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    opts.defaultClass = CSS_CLASSES$24.block;
    opts.type = 'checkbox';
    opts.selectionView = selectionView;
    opts.selectable = selectable$2;
    return m(component$10, opts);
};

var component$37 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$22(ctrl, opts);
    }
};

/*
Animated scroll to a position.
Derived from https://github.com/madebysource/animated-scrollto
Adapted to Mithril and rewritten to es6.
*/

/*
opts:
    element: HTML Element
    to: position
    duration: seconds
    direction: 'vertical' or 'horizontal'


Function returns a Promise:

    scrollTo({
        element: scroller,
        to: left,
        duration: .5,
        direction: 'horizontal'
    }).then(() => {
        console.log('scroll done')
    });

*/
var scrollTo = function scrollTo(opts) {
    var element = opts.element;
    var which = opts.direction === 'horizontal' ? 'scrollLeft' : 'scrollTop';
    var to = opts.to;
    var duration = opts.duration * 1000;
    var start = element[which];
    var change = to - start;
    var animationStart = new Date().getTime();
    var animating = true;
    return new Promise(function (resolve) {
        var animateScroll = function animateScroll() {
            if (!animating) {
                return;
            }
            requestAnimFrame(animateScroll);
            var now = new Date().getTime();
            var percentage = (now - animationStart) / duration;
            var val = start + change * easing.easeInOutCubic(percentage);
            element[which] = val;
            if (percentage >= 1) {
                element[which] = to;
                animating = false;
                resolve();
            }
        };
        requestAnimFrame(animateScroll);
    });
};

var requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
}();

var fontSize = buttonConfig.font_size;
var tab_label_line_height = 1.1 * fontSize;

var vars$22 = {
    min_width: 72,
    medium_min_width: 160,
    label_max_width: 264,
    tab_height: 48,
    menu_tab_height: 44,
    menu_tab_icon_label_height: 44,
    tab_icon_label_height: 72,
    tab_icon_label_icon_spacing: 7,
    indicator_slide_speed: 600, // px per second
    indicator_slide_min_duration: .250,
    tabs_scroll_speed: 600, // px per second
    tabs_scroll_delay: .15,
    tabs_scroll_min_duration: .5,
    scroll_button_fade_duration: .2,
    scroll_button_fade_delay: .5,
    tab_label_line_height: tab_label_line_height,
    tab_label_vertical_offset: tab_label_line_height - fontSize,
    tab_content_padding_v: 12,
    tab_menu_content_padding_v: 6,
    tab_indicator_height: 2,
    scrollbar_offset: 20,
    scroll_button_opacity: .7,
    label_opacity: .7,

    color_light_selected_text: appConfig.rgba(appConfig.color_primary),
    color_light_selected_background: 'transparent',
    color_light_tab_indicator: appConfig.rgba(appConfig.color_primary),
    color_light_icon: iconButtonConfig.color_light_flat_normal_text,

    color_dark_selected_text: appConfig.rgba(appConfig.color_primary),
    color_dark_selected_background: 'transparent',
    color_dark_tab_indicator: appConfig.rgba(appConfig.color_primary),
    color_dark_icon: iconButtonConfig.color_dark_flat_normal_text
};

function _defineProperty$28(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createStyles$46 = function createStyles(config) {
    return [{
        '.pe-tabs': [mixin.vendorize({
            'user-select': 'none'
        }, appConfig.prefixes_user_select), mixin.vendorize({
            transform: 'translate3d(0,0,0)'
        }, appConfig.prefixes_transform), _defineProperty$28({
            '-webkit-overflow-scrolling': 'touch',

            '& ::-webkit-scrollbar': {
                'display': 'none'
            },

            '&.pe-tabs--menu': {
                // reset sizes to fit within a small space
                ' .pe-tabs__tab': {
                    height: config.menu_tab_height + 'px'
                },
                ' .pe-tabs__tab---icon': {
                    height: config.menu_tab_icon_label_height + 'px'
                },
                ' .pe-tabs__tab, .pe-tabs__tab.pe-tabs__tab---icon': {
                    'min-width': 0,
                    height: config.menu_tab_icon_label_height + 'px',

                    ' .pe-button__content': {
                        padding: '0 ' + config.tab_menu_content_padding_v + 'px',
                        height: config.menu_tab_icon_label_height + 'px',

                        ' .pe-icon': {
                            'margin-bottom': 0
                        },
                        ' .pe-button__label': {
                            'font-size': '10px',
                            'line-height': '12px',
                            'text-transform': 'none'
                        }
                    }
                }
            },

            '&.pe-tabs--scrollable': {
                // hide scrollbar (this approach is required for Firefox)
                'max-height': config.tab_height + 'px',
                '-ms-overflow-style': 'none',

                ' .pe-tabs__scroll-button': {
                    // default hide, show with html.pe-no-touch
                    display: 'none'
                },

                ' .pe-tabs__row': {
                    'margin-bottom': -config.scrollbar_offset + 'px'
                }
            },

            ' .pe-no-touch &': {
                '&.pe-tabs--scrollable': {
                    'background-color': 'inherit'
                },

                ' .pe-tabs__scroll-button': {
                    position: 'absolute',
                    display: 'block',
                    top: 0,
                    'background-color': 'inherit',
                    'z-index': 3,

                    ' .pe-button__content': {
                        'border-radius': 0,
                        'background-color': 'inherit'
                    },
                    ' .pe-button__label': [mixin.vendorize({
                        'transition-property': 'opacity'
                    }, appConfig.prefixes_transition), mixin.vendorize({
                        'transition-duration': config.scroll_button_fade_duration + 's'
                    }, appConfig.prefixes_transition), mixin.vendorize({
                        'transition-timing-function': 'ease-out'
                    }, appConfig.prefixes_transition), mixin.vendorize({
                        'transition-delay': config.scroll_button_fade_delay + 's'
                    }, appConfig.prefixes_transition), {
                        opacity: config.scroll_button_opacity
                    }]
                },
                '&.pe-tabs--start .pe-tabs__scroll-button--start': {
                    'pointer-events': 'none',
                    cursor: 'default',

                    ' .pe-button__label': {
                        opacity: 0
                    }
                },
                '&.pe-tabs--end .pe-tabs__scroll-button--end': {
                    'pointer-events': 'none',
                    cursor: 'default',

                    ' .pe-button__label': {
                        opacity: 0
                    }
                },

                ' .pe-tabs__scroll-button--start': {
                    left: 0
                },
                ' .pe-tabs__scroll-button--end': {
                    right: 0
                }
            },

            ' .pe-tabs__row': [flex$1.layoutHorizontal, mixin.vendorize({
                'user-select': 'none'
            }, appConfig.prefixes_user_select), {
                position: 'relative',
                'white-space': 'nowrap',
                overflow: 'auto'
            }],

            ' .pe-tabs__row--centered': flex$1.layoutCenterJustified,

            ' .pe-tabs__scroll-button--offset': [flex$1.flex(), flex$1.flexIndex('none')],

            ' .pe-tabs__tab': [flex$1.flex(), flex$1.flexIndex('none'), mixin.vendorize({
                'user-select': 'none'
            }, appConfig.prefixes_user_select), mixin.defaultTransition('color'), {
                margin: 0,
                'border-radius': 0,
                height: config.tab_height + 'px',
                padding: 0,
                color: 'inherit',
                'min-width': config.min_width + 'px', // for smaller screens, see also media query below
                // max-width: 264px, // set in theme js

                ' .pe-button__content': {
                    padding: '0 ' + config.tab_content_padding_v + 'px',
                    height: config.tab_height + 'px',
                    'line-height': appConfig.line_height + 'em',

                    ' .pe-button__label, .pe-icon': {
                        'max-width': config.label_max_width + 'px', // or .pe-tabs width minus 56dp
                        'line-height': config.tab_label_line_height + 'px',
                        'max-height': 2 * config.tab_label_line_height + 'px',
                        overflow: 'hidden',
                        'white-space': 'normal'
                    },
                    ' .pe-button__label': [mixin.defaultTransition('opacity', config.animation_duration), {
                        margin: config.tab_label_vertical_offset + 'px 0 0 0',
                        padding: 0,
                        opacity: config.label_opacity
                    }],
                    ' .pe-icon': {
                        'margin-left': 'auto',
                        'margin-right': 'auto'
                    },
                    ' .pe-button__focus': {
                        display: 'none'
                    }
                },
                '&.pe-button--selected': {
                    ' .pe-button__content .pe-button__label': {
                        opacity: 1
                    }
                },
                '&.pe-tabs__tab---icon': {
                    '&, .pe-button__content': [{
                        height: config.tab_icon_label_height + 'px'
                    }, {
                        ' .pe-button__label, .pe-icon': {
                            margin: '0 auto'
                        }
                    }, {
                        ' .pe-icon': {
                            'margin-bottom': config.tab_icon_label_icon_spacing + 'px'
                        }
                    }]
                }
            }],

            ' .pe-tabs__tab-content': [flex$1.layoutCenterCenter, flex$1.layoutVertical, {
                height: 'inherit'
            }],

            '&.pe-tabs--autofit .pe-tabs__tab': [flex$1.flex(), {
                'max-width': 'none'
            }],

            '&.pe-tabs__active-selected': {
                ' .pe-tabs__tab.pe-button--selected': {
                    cursor: 'pointer',
                    'pointer-events': 'initial'
                }
            },

            ' .pe-tabs__indicator': [mixin.vendorize({
                'transform': 'translate3d(0,0,0)'
            }, appConfig.prefixes_transform), mixin.vendorize({
                'transform-origin': 'left 50%'
            }, appConfig.prefixes_transform), mixin.vendorize({
                'transition-property': 'all'
            }, appConfig.prefixes_transition), mixin.vendorize({
                'transition-timing-function': 'ease-out'
            }, appConfig.prefixes_transition), {
                position: 'absolute',
                height: config.tab_indicator_height + 'px',
                bottom: 0,
                left: 0,
                'z-index': 3,
                width: '100%' // and transformed with js
                // background-color defined in implementation/theme css
            }],

            ' .pe-toolbar--tabs .pe-toolbar__bar &': [mixin.fit(), {
                width: 'auto',
                margin: 0,
                top: 'auto',

                ' .pe-tabs__row.pe-tabs__row--indent': {
                    margin: 0,
                    'padding-left': appConfig.unit_indent + 'px',
                    overflow: 'auto'
                }
            }]

        }, '@media (min-width: ' + appConfig.breakpoint_small_tablet_portrait + 'px)', {
            '&:not(.pe-tabs--small):not(.pe-tabs--menu) .pe-tabs__tab': {
                'min-width': config.medium_min_width + 'px'
            }
        })],

        // toolbar with tabs
        '.pe-toolbar--tabs .pe-toolbar__bar': {
            'background-color': 'inherit'
        }
    }];
};

var layout$27 = (function (config) {
    return mixin.createStyles(config, createStyles$46);
});

function _defineProperty$29(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$21 = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$29({}, scope + '.pe-tabs', {
        ' .pe-tabs__tab.pe-button--selected': {
            color: config['color_' + tint + '_selected_text'],

            ' .pe-button__content': {
                background: config['color_' + tint + '_selected_background']
            }
        },
        ' .pe-tabs__tab:not(.pe-button--selected) .pe-icon': {
            color: config['color_' + tint + '_icon']
        },
        ' .pe-tabs__indicator': {
            'background-color': config['color_' + tint + '_tab_indicator']
        }
    })];
};

var createStyles$47 = function createStyles(config) {
    return [style$21(config, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$21(config, 'dark', ' '),
        // has dark theme
        style$21(config, 'dark', '&')]
    }];
};

var color$21 = (function (config) {
    return mixin.createStyles(config, createStyles$47);
});

var configFn$25 = componentConfig && componentConfig.tabs;
var config$26 = configFn$25 ? configFn$25(vars$22) : vars$22;
var id$26 = 'pe-tabs';

styler.add(id$26, layout$27(config$26), color$21(config$26));

// default icons
var arrowBackward = m.trust('<svg width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>');
var arrowForward = m.trust('<svg width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>');

var theme$2 = {
    arrowBackward: arrowBackward,
    arrowForward: arrowForward
};

var _extends$22 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$25 = {
    block: 'pe-tabs',
    scrollButton: 'pe-tabs__scroll-button',
    scrollButtonLeft: 'pe-tabs__scroll-button--start',
    scrollButtonRight: 'pe-tabs__scroll-button--end',
    scrollButtonOffset: 'pe-tabs__scroll-button--offset',
    tabRow: 'pe-tabs__row',
    tabRowCentered: 'pe-tabs__row--centered',
    tabRowIndent: 'pe-tabs__row--indent',
    tab: 'pe-tabs__tab',
    tabContent: 'pe-tabs__tab-content',
    tabHasIcon: 'pe-tabs__tab---icon',
    indicator: 'pe-tabs__indicator',
    scrollable: 'pe-tabs--scrollable',
    isAutofit: 'pe-tabs--autofit',
    isAtStart: 'pe-tabs--start',
    isAtEnd: 'pe-tabs--end',
    isMenu: 'pe-tabs--menu',
    isSmall: 'pe-tabs--small',
    activeSelected: 'pe-tabs__active-selected',
    // reference:
    label: 'pe-button__label'
};

var POSITION_LEFT = 1 << 1;
var POSITION_RIGHT = 1 << 2;

var getNewIndex = function getNewIndex(index, tabs) {
    var minTabIndex = 0;
    var maxTabIndex = tabs.length - 1;
    return {
        left: Math.max(index - 1, minTabIndex),
        right: Math.min(index + 1, maxTabIndex)
    };
};

var handleScrollButtonClick = function handleScrollButtonClick(ctrl, opts, e, direction) {
    e.stopPropagation();
    e.preventDefault();
    var tabs = ctrl.tabs;
    var currentTabIndex = ctrl.selectedTabIndex;
    var newIndex = getNewIndex(currentTabIndex, tabs)[direction];
    scrollToTab(ctrl, newIndex);
    if (newIndex !== currentTabIndex) {
        setSelectedTab(ctrl, opts, newIndex, true);
        m.redraw();
    }
};

var createScrollButton = function createScrollButton(ctrl, position, opts) {
    var scrollIconForward = { msvg: opts.scrollIconForward || theme$2.arrowForward };
    var scrollIconBackward = { msvg: opts.scrollIconBackward || theme$2.arrowBackward };

    return m(component$11, {
        class: [CSS_CLASSES$25.scrollButton, position === POSITION_LEFT ? CSS_CLASSES$25.scrollButtonLeft : CSS_CLASSES$25.scrollButtonRight].join(' '),
        icon: position === POSITION_LEFT ? scrollIconBackward : scrollIconForward,
        ripple: {
            center: true
        },
        config: function config(el) {
            if (ctrl.scrollButtonLeftEl && ctrl.scrollButtonRightEl) {
                return;
            }
            if (position === POSITION_LEFT) {
                ctrl.scrollButtonLeftEl = el;
            } else {
                ctrl.scrollButtonRightEl = el;
            }
        },
        events: {
            onclick: position === POSITION_LEFT ? function (e) {
                handleScrollButtonClick(ctrl, opts, e, 'left');
            } : function (e) {
                handleScrollButtonClick(ctrl, opts, e, 'right');
            }
        }
    });
};

var alignToTitle = function alignToTitle(ctrl) {
    var firstTab = ctrl.tabs[0].el;
    var firstInnerLabel = firstTab.querySelector('.' + CSS_CLASSES$25.label + ' span');
    var firstOuterLabelWidth = firstTab.getBoundingClientRect().width;
    var firstInnerLabelWidth = firstInnerLabel.getBoundingClientRect().width;
    var firstTabOffset = (firstOuterLabelWidth - firstInnerLabelWidth) / 2;
    firstTab.style.marginLeft = -firstTabOffset + 'px';
};

var createRightButtonOffset = function createRightButtonOffset(ctrl) {
    // add padding to right so that last item is not hidden behind scroll button
    var scrollButtonRightWidth = ctrl.scrollButtonRightEl.getBoundingClientRect().width;
    var scrollButtonOffsetEl = ctrl.tabsEl.querySelector('.' + CSS_CLASSES$25.scrollButtonOffset);
    scrollButtonOffsetEl.style.width = scrollButtonRightWidth + 'px';
};

var scrollToTab = function scrollToTab(ctrl, tabIndex) {
    var tabs = ctrl.tabs;
    var scroller = ctrl.scrollerEl;
    // scroll to position of selected tab
    var tabLeft = tabs.slice(0, tabIndex).reduce(function (totalWidth, tabData) {
        return totalWidth + tabData.el.getBoundingClientRect().width;
    }, 0);
    // tabs at the far right will not fully move to the left
    // because the scrollable row will stick to the right 
    // to get the max scroll left, we subtract the visible viewport from the scroll width
    var scrollerWidth = scroller.getBoundingClientRect().width; // frame width
    var scrollingWidth = scroller.scrollWidth;
    var maxScroll = scrollingWidth - scrollerWidth;
    var left = Math.min(tabLeft, maxScroll);
    var currentLeft = scroller.scrollLeft;
    if (currentLeft !== left) {
        var duration = Math.abs(currentLeft - left) / vars$22.tabs_scroll_speed;
        var delaySeconds = vars$22.tabs_scroll_delay || 0;
        setTimeout(function () {
            scrollTo({
                element: scroller,
                to: left,
                duration: Math.max(vars$22.tabs_scroll_min_duration, duration),
                direction: 'horizontal'
            });
        }, delaySeconds * 1000);
    }
};

var updateScrollButtons = function updateScrollButtons(ctrl) {
    var scrollerEl = ctrl.scrollerEl;
    var scrollLeft = scrollerEl.scrollLeft;
    var currentTabIndex = ctrl.selectedTabIndex;
    var tabs = ctrl.tabs;
    var tabsEl = ctrl.tabsEl;
    var minTabIndex = 0;
    var maxTabIndex = tabs.length - 1;
    var isAtLeft = scrollerEl.scrollLeft === 0 && currentTabIndex === minTabIndex;
    var isAtRight = scrollLeft >= scrollerEl.scrollWidth - tabsEl.getBoundingClientRect().width - 1 && currentTabIndex === maxTabIndex;
    ctrl.scrollButtonStates.left = !isAtLeft;
    ctrl.scrollButtonStates.right = !isAtRight;
};

var animateIndicator = function animateIndicator(selectedTabEl, animate, ctrl) {
    var parentRect = ctrl.tabsEl.getBoundingClientRect();
    var rect = selectedTabEl.getBoundingClientRect();
    var style = ctrl.tabIndicatorEl.style;
    var translateX = rect.left - parentRect.left + ctrl.scrollerEl.scrollLeft;
    var transformCmd = 'translate(' + translateX + 'px, 0)';
    var duration = animate ? vars$22.indicator_slide_min_duration : 0;
    // use width instead of scale to please IE10
    style.width = rect.width + 'px';
    style['transition-duration'] = style['-webkit-transition-duration'] = style['-moz-transition-duration'] = style['-o-transition-duration'] = duration + 's';
    style.transform = style['-webkit-transform'] = style['-moz-transform'] = style['-ms-transform'] = style['-o-transform'] = transformCmd;
};

var setSelectedTab = function setSelectedTab(ctrl, opts, index, animate) {
    ctrl.selectedTabIndex = index;
    if (!ctrl.tabs.length) return;
    var selectedTabEl = ctrl.tabs[index].el;
    if (selectedTabEl && ctrl.tabIndicatorEl && ctrl.tabsEl) {
        animateIndicator(selectedTabEl, animate, ctrl);
    }
    if (ctrl.managesScroll) {
        updateScrollButtons(ctrl);
        scrollToTab(ctrl, index);
    }
    if (opts.getState) {
        opts.getState({
            index: index,
            data: ctrl.tabs[index].data,
            el: selectedTabEl
        });
    }
};

var createTab = function createTab(ctrl, opts, index, buttonOpts) {
    // Let internal onclick function co-exist with passed button option
    buttonOpts.events = buttonOpts.events || {};
    buttonOpts.events.onclick = buttonOpts.events.onclick || function () {};
    var tabButtonOptions = _extends$22({}, buttonOpts, {
        content: m('div', {
            class: CSS_CLASSES$25.tabContent
        }, [buttonOpts.icon ? m(component$5, buttonOpts.icon) : null, buttonOpts.label ? m('div', { class: CSS_CLASSES$25.label }, m('span', buttonOpts.label)) : null]),
        class: [CSS_CLASSES$25.tab, buttonOpts.icon && buttonOpts.label ? CSS_CLASSES$25.tabHasIcon : null, buttonOpts.class].join(' '),
        wash: false,
        ripple: true,
        events: _extends$22({}, buttonOpts.events, {
            onclick: function onclick(e) {
                setSelectedTab(ctrl, opts, index, opts.noIndicatorSlide ? false : true);
                buttonOpts.events.onclick(e);
            }
        }),
        config: function config(el, inited) {
            if (inited) {
                return;
            }
            ctrl.tabs.push({ data: buttonOpts, el: el });
        }
    });
    return m(component, tabButtonOptions);
};

var sortNumbers = function sortNumbers(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;else return 0;
};

var createView$23 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var autofit = opts.scrollable || opts.centered ? false : opts.autofit ? true : false;

    // keep selected tab up to date
    if (opts.selectedTab !== undefined && ctrl.previousOptsSelectedTab !== opts.selectedTab) {
        setSelectedTab(ctrl, opts, opts.selectedTab, true);
    }
    ctrl.previousOptsSelectedTab = opts.selectedTab;

    var props = {
        class: [CSS_CLASSES$25.block, opts.scrollable ? CSS_CLASSES$25.scrollable : null, ctrl.selectedTabIndex === 0 ? CSS_CLASSES$25.isAtStart : null, ctrl.selectedTabIndex === ctrl.tabs.length - 1 ? CSS_CLASSES$25.isAtEnd : null, opts.activeSelected ? CSS_CLASSES$25.activeSelected : null, autofit ? CSS_CLASSES$25.isAutofit : null, opts.menu ? CSS_CLASSES$25.isMenu : null, opts.small ? CSS_CLASSES$25.isSmall : null, opts.class].join(' '),
        id: opts.id || '',
        config: function config(el, inited, context) {
            if (inited) {
                return;
            }
            ctrl.tabsEl = el;

            if (opts.largestWidth) {
                var widths = ctrl.tabs.map(function (tabData) {
                    return tabData.el.getBoundingClientRect().width;
                });
                var largest = widths.sort(sortNumbers).reverse()[0];
                ctrl.tabs.forEach(function (tabData) {
                    return tabData.el.style.width = largest + 'px';
                });
            }

            // align first scrollable tab to title
            if (opts.scrollable) {
                alignToTitle(ctrl);
            }
            // handle scroll
            if (opts.scrollable && !p.isTouch) {
                ctrl.managesScroll = true;
                createRightButtonOffset(ctrl);
            }

            var onResize = function onResize() {
                setSelectedTab(ctrl, opts, ctrl.selectedTabIndex, false);
                m.redraw();
            };
            events.subscribe('resize', onResize);

            context.onunload = function () {
                events.unsubscribe('resize', onResize);
            };

            setSelectedTab(ctrl, opts, ctrl.selectedTabIndex, false);
        }
    };
    var tabRow = opts.buttons.map(function (buttonOpts, index) {
        var buttonOptsCombined = _extends$22({}, buttonOpts, {
            selected: index === ctrl.selectedTabIndex,
            animateOnTap: opts.animateOnTap !== false ? true : false
        }, opts.tabsOpts || {});
        return createTab(ctrl, opts, index, buttonOptsCombined);
    }).concat([
    // offset for right scroll button
    opts.scrollable ? m('div', { class: CSS_CLASSES$25.scrollButtonOffset }) : null]);

    var scrollButtonLeft = void 0,
        scrollButtonRight = void 0;
    if (opts.scrollable) {
        scrollButtonLeft = createScrollButton(ctrl, POSITION_LEFT, opts);
        scrollButtonRight = createScrollButton(ctrl, POSITION_RIGHT, opts);
    }

    var tabIndicator = opts.hideIndicator ? null : m('div', {
        class: CSS_CLASSES$25.indicator,
        config: function config(el, inited) {
            if (inited) {
                return;
            }
            ctrl.tabIndicatorEl = el;
        }
    });

    var content = [opts.scrollable ? scrollButtonLeft : null, m('div', {
        class: [CSS_CLASSES$25.tabRow, opts.centered ? CSS_CLASSES$25.tabRowCentered : null, opts.scrollable ? CSS_CLASSES$25.tabRowIndent : null].join(' '),
        config: function config(el, inited) {
            if (inited) {
                return;
            }
            ctrl.scrollerEl = el;
        },
        onscroll: function onscroll() {
            updateScrollButtons(ctrl);
        }
    }, [tabRow, tabIndicator]), opts.scrollable ? scrollButtonRight : null];
    return m(tag, props, [opts.before, content, opts.after]);
};

var component$39 = {
    controller: function controller() {
        return {
            tabsEl: null,
            scrollerEl: null,
            tabs: [], // {data, el}
            tabIndicatorEl: null,
            selectedTabIndex: 0,
            previousOptsSelectedTab: undefined,
            managesScroll: false,
            scrollButtonStates: {
                left: false,
                right: false
            }
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$23(ctrl, opts);
    }
};

export { component as Button, component$3 as Card, component$8 as Checkbox, dialog as Dialog, component$13 as FAB, component$15 as HeaderPanel, component$5 as Icon, component$11 as IconButton, component$18 as List, component$7 as ListTile, component$20 as Menu, notification as Notification, component$23 as RadioButton, component$1 as Ripple, component$25 as Search, component$2 as Shadow, component$28 as Slider, snackbar as Snackbar, component$30 as IOSSpinner, component$33 as DeterminateSpinner, component$35 as IndeterminateSpinner, component$6 as SVG, component$37 as Switch, component$39 as Tabs, component$27 as TextField, component$17 as Toolbar, easing, events, styler, validationHelper as ValidationHelper };
