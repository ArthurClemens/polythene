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
        initTapEvents,
        clearTapEvents;

    createView = function(ctrl, opts) {
        var tag, props, content,
            noink, label;
        opts = opts || {};
        opts.ripple = opts.ripple || {};
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
            class: [opts.parentClass || 'button', opts.class].join(' ')
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
            }, (opts.url ? opts.url : null));
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
                class: 'button-content'
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
        var MAX_Z, baseZ, increase;
        MAX_Z = 5;
        baseZ = ctrl.baseZ();
        increase = opts.increase || 1;

        el.addEventListener('mousedown', function() {
            if (baseZ == 5) return;
            var z = ctrl.z();
            z = z + increase;
            z = Math.min(z, MAX_Z);
            ctrl.z(z);
            m.redraw();
        });
        el.addEventListener('mouseup', function() {
            if (baseZ == 5) return;
            var z = ctrl.z();
            z = z - increase;
            z = Math.max(z, baseZ);
            ctrl.z(z);
            m.redraw();
        });
    };

    clearTapEvents = function(el) {
        el.removeEventListener('mousedown');
        el.removeEventListener('mouseup');
    };

    return {
        controller: function(opts) {
            return {
                view: m.prop(),
                baseZ: m.prop(opts.z || 1),
                z: m.prop(opts.z || 1)
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