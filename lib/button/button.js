define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/ripple/ripple',
    'polythene/shadow/shadow',
    'css!./button'
], function(
    p,
    m,
    ripple,
    shadow
) {
    'use strict';

    var createView,
        tapStart,
        tapEnd,
        initTapEvents,
        clearTapEvents;

    createView = function(ctrl, opts) {
        var tag, props, content,
            noink, label;
        opts = opts || {};
        opts.ripple = opts.ripple || {cache: true};
        opts.shadow = opts.shadow || {};

        tag = opts.tag || (opts.url ? 'a' : 'div');
        noink = (opts.ink !== undefined && !opts.ink);

        if (opts.disabled) {
            tag += '[disabled]';
        }
        if (noink) {
            tag += '[noink]';
        }
        if (opts.raised) {
            tag += '[raised]';
        }

        props = {
            class: [opts.parentClass || 'button', opts.selected ? 'selected' : null, opts.class].join(' ')
        };
        if (!opts.disabled) {
            props = Object.assign({}, props, {
                config: function(el, isInited, context) {
                    if (isInited) return;
                    initTapEvents(el, ctrl, opts.shadow);

                    context.onunload = function() {
                        clearTapEvents(el);
                    };
                }
            },
            (opts.url ? opts.url : null),
            (opts.events ? opts.events : null));
        }
        label = null;
        if (opts.label) {
            label = m('span', opts.label);
        }
        if (opts.content) {
            label = opts.content;
        }
        content = [
            m('div', {
                class: 'content'
            }, [
                label,
                (opts.disabled || noink) ? null : m.component(ripple, opts.ripple),
                (opts.disabled || (opts.wash !== undefined && !opts.wash)) ? null : m('.wash[fit]'),
                (opts.raised && !opts.disabled) ? m.component(shadow, {
                    z: ctrl.z(),
                    animated: true
                }) : null
            ])
        ];

        return m(tag, props, p.insertContent(content, opts));
    };

    initTapEvents = function(el, ctrl, opts) {

        var tapHandler = function(evt) {
            var MAX_Z, baseZ, increase;
            MAX_Z = 5;
            baseZ = ctrl.baseZ();
            increase = opts.increase || 1;

            if (baseZ == 5) return;
            var z = ctrl.z();
            if (evt === 'down') {
                z = z + increase;
                z = Math.min(z, MAX_Z);
            } else if (evt == 'up') {
                z = z - increase;
                z = Math.max(z, baseZ);
            }
            ctrl.z(z);
            m.redraw();
        };
        tapStart = function() {
            tapHandler('down');
        };
        tapEnd = function() {
            tapHandler('up');
        };

        el.addEventListener('mousedown', tapStart);
        el.addEventListener('mouseup', tapEnd);
    };

    clearTapEvents = function(el) {
        el.removeEventListener('mousedown', tapStart);
        el.removeEventListener('mouseup', tapEnd);
    };

    return {
        controller: function(opts) {
            var z;
            z = (opts.z !== undefined) ? opts.z : 1;

            return {
                view: m.prop(),
                baseZ: m.prop(z),
                z: m.prop(z)
            };
        },
        view: function(ctrl, opts) {
            var view;
            opts = opts || {};
            view = ctrl.view();
            if (view && opts.cache) {
                return view;
            }
            view = createView(ctrl, opts);
            if (opts.cache) ctrl.view(view);
            return view;
        }
    };
});