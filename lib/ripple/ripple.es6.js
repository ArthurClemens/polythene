'use strict';

import p from 'polythene/polythene/polythene';
import m from 'mithril';
require('polythene-theme/ripple/ripple');

const DEFAULT_START_OPACITY = 0.2;
const OPACITY_DECAY_VELOCITY = 0.35;

let component,
    createView,
    tapStart,
    tapEnd,
    tapListeners,
    initTapEvents,
    clearTapEvents;

tapListeners = [];

createView = (ctrl, opts = {}) => {
    let tag, props, content,
        initRipple,
        initWaves;

    if (opts.disabled) {
        return m('');
    }

    initRipple = (ripple, inited, context) => {
        if (inited) {
            return;
        }
        ctrl.ripple(ripple);

        initTapEvents(ripple, ctrl, opts);

        context.onunload = function() {
            clearTapEvents(ripple);
        };
    };

    initWaves = (waves, inited) => {
        if (inited) {
            return;
        }
        ctrl.waves(waves);
    };

    tag = opts.tag || 'div[fit]';
    props = {
        class: ['ripple', (opts.constrained !== false ? 'constrained' : null), opts.class].join(' '),
        config: initRipple
    };
    content = m('.ripple-mask',
        m('.ripple-waves', {
            config: initWaves
        })
    );

    return m(tag, props, content);
};

initTapEvents = (el, ctrl, opts = {}) => {
    let startType,
        endType;

    startType = 'mousedown';
    endType = 'mouseup';

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

clearTapEvents = (el) => {
    tapListeners.map(function(o) {
        el.removeEventListener(o.type, o.listener, false);
    });
    tapListeners = [];
};

component = {
    controller: () => {
        return {
            ripple: m.prop(),
            waves: m.prop(),
            delegate: m.prop(),

            start: (e, ctrl, opts = {}) => {
                let el, wavesEl, mx, my, rx, ry, rect, w, h, waveRadius, transitionEvent, duration, color, onEnd, initialOpacity, opacityDecayVelocity;
                el = ctrl.ripple();

                wavesEl = ctrl.waves();
                wavesEl.classList.remove('animated');
                w = el.offsetWidth;
                h = el.offsetHeight;

                waveRadius = Math.sqrt(w * w + h * h);
                wavesEl.style.width = wavesEl.style.height = waveRadius + 'px';

                rect = el.getBoundingClientRect();

                if (opts.center) {
                    mx = rect.left + rect.width / 2;
                    my = rect.top + rect.height / 2;
                } else {
                    mx = e.clientX;
                    my = e.clientY;
                }

                rx = mx - rect.left - waveRadius / 2;
                ry = my - rect.top - waveRadius / 2;
                wavesEl.style.top = ry + 'px';
                wavesEl.style.left = rx + 'px';

                initialOpacity = (opts.initialOpacity !== undefined) ? opts.initialOpacity : DEFAULT_START_OPACITY;
                opacityDecayVelocity = (opts.opacityDecayVelocity !== undefined) ? opts.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;

                duration = 1 / opacityDecayVelocity * initialOpacity;

                wavesEl.style['animation-duration'] =
                    wavesEl.style['-webkit-animation-duration'] =
                    wavesEl.style['-moz-animation-duration'] =
                    wavesEl.style['-o-animation-duration'] = duration + 's';

                color = window.getComputedStyle(el).color;
                wavesEl.style.backgroundColor = color;
                wavesEl.style.opacity = initialOpacity;

                transitionEvent = p.whichTransitionEvent();
                onEnd = function(evt) {
                    wavesEl.classList.remove('animated');
                    wavesEl.removeEventListener(transitionEvent, onEnd, false);
                    if (opts.end) {
                        opts.end(evt);
                    }
                };
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

