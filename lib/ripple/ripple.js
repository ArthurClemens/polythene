// Ripple is called from polythene.js
// so prevent circular reference to Polythene and Mithril.

define([
    'css!./ripple'
], function() {
    'use strict';

    var ripple,
        stopRipple,
        SPEED,
        MIN_DURATION,
        MAX_DURATION,
        START_OPACITY;

    SPEED = 1000; // px per second
    MIN_DURATION = 0.35;
    MAX_DURATION = 0.8;
    START_OPACITY = 0.2;

    ripple = function(e, opts, ctrl, p) {
        var el, wavesEl, mx, my, rx, ry, rect, top, left, w, h, waveRadius, transitionEvent, duration, color, onEnd;
        el = ctrl.rippleEl();
        wavesEl = ctrl.wavesEl();
        wavesEl.classList.remove('animated');
        w = el.offsetWidth;
        h = el.offsetHeight;

        waveRadius = Math.sqrt(w * w + h * h);
        wavesEl.style.width = wavesEl.style.height = waveRadius + 'px';

        mx = e.clientX;
        my = e.clientY;
        rect = el.getBoundingClientRect();

        top = rect.top - document.body.scrollTop;
        left = rect.left - document.body.scrollLeft;
        rx = e.clientX - rect.left - waveRadius / 2;
        ry = e.clientY - rect.top - waveRadius / 2;
        wavesEl.style.top = ry + 'px';
        wavesEl.style.left = rx + 'px';

        duration = Math.min(Math.max(waveRadius / SPEED, MIN_DURATION), MAX_DURATION);

        wavesEl.style['animation-duration'] =
            wavesEl.style['-webkit-animation-duration'] =
            wavesEl.style['-moz-animation-duration'] =
            wavesEl.style['-o-animation-duration'] = duration + 's';

        color = window.getComputedStyle(el).color;
        wavesEl.style.backgroundColor = color;
        wavesEl.style.opacity = START_OPACITY;

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
    };

    stopRipple = function(e, opts, ctrl, p, m) {
        //
    };

    return {
        controller: function(opts, p, m) {
            return {
                rippleEl: m.prop(),
                wavesEl: m.prop(),
            };
        },
        view: function(ctrl, opts, p, m) {
            var defaultProps, tag, eventProps, props, initRipple, initWaves;
            
            if (typeof opts !== 'object') {
                opts = {};
            }

            initRipple = function(ripple, inited) {
                if (inited) return;
                ctrl.rippleEl(ripple);
            };

            initWaves = function(waves, inited) {
                if (inited) return;
                ctrl.wavesEl(waves);
            };

            defaultProps = {
                class: ['ripple', (opts.constrained !== false ? 'constrained' : null), (opts.className || null)].join(' '),
                onmousedown: function(e) {
                    ripple(e, opts, ctrl, p);
                    return true;
                },
                onmouseup: function(e) {
                    stopRipple(e, opts, ctrl, p);
                    return true;
                },
                config: initRipple
            };
            tag = opts.tag || 'div[fit]';
            eventProps = p.handleEventProps(opts.events, this, ctrl);
            props = p.assign(defaultProps, eventProps, opts.props);

            return m(tag, props, m('.waves', {
                config: initWaves
            }));
        }
    };
});