define([
    'polythene/polythene/polythene',
    'mithril',
    'css!./ripple'
], function(
    p,
    m
) {
    'use strict';

    var DEFAULT_START_OPACITY,
        OPACITY_DECAY_VELOCITY,
        createView,
        initTapEvents,
        clearTapEvents;

    DEFAULT_START_OPACITY = 0.2;
    OPACITY_DECAY_VELOCITY = 0.36;

    createView = function(ctrl, opts) {
        var tag, props, content,
            initRipple,
            initWaves;
        opts = opts || {};

        if (opts.disabled) {
            return m('');
        }

        initRipple = function(ripple, inited, context) {
            if (inited) return;
            ctrl.ripple(ripple);

            initTapEvents(ripple, ctrl, opts);

            context.onunload = function() {
                clearTapEvents(ripple);
            };
        };

        initWaves = function(waves, inited) {
            if (inited) return;
            ctrl.waves(waves);
        };

        tag = opts.tag || 'div[fit]';
        props = {
            class: ['ripple', (opts.constrained !== false ? 'constrained' : null), opts.className].join(' '),
            config: initRipple
        };
        content = m('.ripple-mask',
            m('.ripple-waves', {
                config: initWaves
            })
        );

        return m(tag, props, content);
    };

    initTapEvents = function(el, ctrl, opts) {
        el.addEventListener('mousedown', function(e) {
            ctrl.start(e, ctrl, opts);
        });
        el.addEventListener('mouseup', function(e) {
            ctrl.stop(e, ctrl, opts);
        });
    };

    clearTapEvents = function(el) {
        el.removeEventListener('mousedown');
        el.removeEventListener('mouseup');
    };

    return {
        controller: function(opts) {
            opts = opts || {};

            return {
                view: m.prop(),
                ripple: m.prop(),
                waves: m.prop(),
                delegate: m.prop(),

                start: function(e, ctrl, opts) {
                    var el, wavesEl, mx, my, rx, ry, rect, top, left, w, h, waveRadius, transitionEvent, duration, color, onEnd, initialOpacity, opacityDecayVelocity;
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

                    top = rect.top - document.body.scrollTop;
                    left = rect.left - document.body.scrollLeft;
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

                stop: function() {
                    //
                }
            };
        },
        view: function(ctrl, opts) {
            opts = opts || {};
            var view = ctrl.view();
            if (!view || opts.refresh) {
                view = createView(ctrl, opts);
                ctrl.view(view);
            }
            return view;
        }
    };
});