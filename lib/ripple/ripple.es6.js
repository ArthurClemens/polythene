import m from 'mithril';
import whichTransitionEvent from 'polythene/common/transitionEvent';
require('polythene-theme/ripple/ripple');

const DEFAULT_START_OPACITY = 0.2;
const OPACITY_DECAY_VELOCITY = 0.35;

let tapStart,
    tapEnd,
    tapListeners;

tapListeners = [];

const initTapEvents = (el, ctrl, opts = {}) => {
    const startType = document.documentElement.classList.contains('no-touch') ? 'mousedown' : 'click';
    const endType = 'mouseup';

    tapStart = function(e) {
        ctrl.start(e, ctrl, opts);
    };
    tapEnd = function(e) {
        ctrl.stop(e, ctrl, opts);
    };

    el.addEventListener(startType, tapStart, false);
    el.addEventListener(endType, tapEnd, false);

    tapListeners = [{
        type: startType,
        listener: tapStart
    }, {
        type: endType,
        listener: tapEnd
    }];
};

const clearTapEvents = (el) => {
    tapListeners.map(function(o) {
        el.removeEventListener(o.type, o.listener, false);
    });
    tapListeners = [];
};

const createView = (ctrl, opts = {}) => {
    if (opts.disabled) {
        return m('');
    }
    const initRipple = (ripple, inited, context) => {
        if (inited) {
            return;
        }
        ctrl.ripple(ripple);
        initTapEvents(ripple, ctrl, opts);
        context.onunload = function() {
            clearTapEvents(ripple);
        };
    };
    const initWaves = (waves, inited) => {
        if (inited) {
            return;
        }
        ctrl.waves(waves);
    };
    const tag = opts.tag || 'div.fit';
    const props = {
        class: ['ripple', (opts.constrained !== false ? 'constrained' : null), opts.class].join(' '),
        config: initRipple
    };
    const content = m('.ripple-mask',
        m('.ripple-waves', {
            config: initWaves
        })
    );
    return m(tag, props, content);
};

const component = {
    controller: () => {
        return {
            ripple: m.prop(),
            waves: m.prop(),
            delegate: m.prop(),

            start: (e, ctrl, opts = {}) => {
                const el = ctrl.ripple();
                const wavesEl = ctrl.waves();
                const w = el.offsetWidth;
                const h = el.offsetHeight;
                const waveRadius = Math.sqrt(w * w + h * h);
                const rect = el.getBoundingClientRect();
                const mx = (opts.center) ? (rect.left + rect.width / 2) : e.clientX;
                const my = (opts.center) ? (rect.top + rect.height / 2) : e.clientY;
                const rx = mx - rect.left - waveRadius / 2;
                const ry = my - rect.top - waveRadius / 2;
                const initialOpacity = (opts.initialOpacity !== undefined) ? opts.initialOpacity : DEFAULT_START_OPACITY;
                const opacityDecayVelocity = (opts.opacityDecayVelocity !== undefined) ? opts.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
                const duration = 1 / opacityDecayVelocity * initialOpacity;
                const color = window.getComputedStyle(el).color;
                const transitionEvent = whichTransitionEvent();
                const onEnd = function(evt) {
                    wavesEl.classList.remove('animated');
                    wavesEl.removeEventListener(transitionEvent, onEnd, false);
                    if (opts.end) {
                        opts.end(evt);
                    }
                };

                wavesEl.classList.remove('animated');
                wavesEl.style.width = wavesEl.style.height = waveRadius + 'px';
                wavesEl.style.top = ry + 'px';
                wavesEl.style.left = rx + 'px';
                wavesEl.style['animation-duration'] =
                    wavesEl.style['-webkit-animation-duration'] =
                    wavesEl.style['-moz-animation-duration'] =
                    wavesEl.style['-o-animation-duration'] = duration + 's';
                wavesEl.style.backgroundColor = color;
                wavesEl.style.opacity = initialOpacity;
                wavesEl.addEventListener(transitionEvent, onEnd, false);

                if (opts.start) {
                    opts.start(e);
                }
                wavesEl.classList.add('animated');
            },

            stop: () => {
                //
            }
        };
    },
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
