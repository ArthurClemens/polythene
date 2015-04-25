define([
    'polythene/polythene/polythene',
    'mithril',
    'css!./paper-ripple'
], function(
    p,
    m
) {
    'use strict';

    var ripple,
        waveMaxRadius,
        initialOpacity;

    /*
        ripple = {
            view: function(ctrl, opts) {
                console.log('ripple view');
            }
        };
    */

    waveMaxRadius = 150;
    initialOpacity = 0.25;

    ripple = function(e, ctrl) {
        var el, wavesEl, mx, my, rx, ry, rect, top, left, w, h, waveRadius, transitionEvent, duration, color;
        el = e.target;
        wavesEl = ctrl.wavesEl();
        w = el.offsetWidth;
        h = el.offsetHeight;

        waveRadius = Math.min(Math.sqrt(w * w + h * h), waveMaxRadius) * 1.1 + 5;
        wavesEl.style.width = wavesEl.style.height = waveRadius + 'px';

        el = e.target;
        mx = e.clientX;
        my = e.clientY;
        rect = el.getBoundingClientRect();

        top = rect.top - document.body.scrollTop;
        left = rect.left - document.body.scrollLeft;
        rx = e.clientX - rect.left - waveRadius / 2;
        ry = e.clientY - rect.top - waveRadius / 2;
        wavesEl.style.top = ry + 'px';
        wavesEl.style.left = rx + 'px';
        
        duration = 0.4 - 0.2 * (waveRadius / waveMaxRadius);
        
        wavesEl.style['animation-duration'] =
            wavesEl.style['-webkit-animation-duration'] =
            wavesEl.style['-moz-animation-duration'] =
            wavesEl.style['-o-animation-duration'] = duration + 's';

        color = window.getComputedStyle(el).color;
        wavesEl.style.backgroundColor = color;
        wavesEl.style.opacity = initialOpacity;

        wavesEl.classList.add('animated');
        transitionEvent = p.whichTransitionEvent();
        wavesEl.addEventListener(transitionEvent, function() {
            wavesEl.classList.remove('animated');
        });

        //size = Math.abs(waveRadius * (1 - Math.pow(80, -tt)));
    };

    return {
        controller: function() {
            return {
                wavesEl: m.prop(),
            };
        },
        view: function(ctrl, opts) {
            var defaultProps, tag, eventProps, props, initWaves;
            opts = opts || {};
            defaultProps = {
                class: ['paper-ripple', (opts.className || null)].join(' '),
                onmousedown: function(e) {
                    ripple(e, ctrl);
                },
                config: initWaves
            };
            tag = opts.tag || 'div[fit]';
            eventProps = p.handleEventProps(opts.events, this, ctrl);
            props = p.assign(defaultProps, eventProps, opts.props);

            initWaves = function(el, inited) {
                if (inited) return;
                ctrl.wavesEl(el);
            };

            return m(tag, props, m('.waves', {
                config: initWaves
            }));
        }
    };
});