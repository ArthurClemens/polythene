define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/icon/icon',
    'css!./list-tile'
], function(
    p,
    m,
    icon
) {
    'use strict';

    var createView,
        parsePrimaryContent,
        parseSecondaryContent;

    createView = function(ctrl, opts) {
        var tag, props, content,
            heightClass,
            iconClass;

        opts = opts || {};
        tag = opts.tag || 'div[horizontal][layout][center]';

        heightClass = 'list-tile-single-line';
        if (opts.info) {
            heightClass = 'list-tile-two-line';
        } else if (opts.info_high) {
            heightClass = 'list-tile-three-line';
        }

        iconClass = (opts.icon || opts.indent) ? 'list-tile-has-icon' : null;
        props = {
            class: ['list-tile', heightClass, iconClass, opts.class].join(' '),
            config: opts.config
        };
        content = [
            parsePrimaryContent(opts),
            opts.secondary ? parseSecondaryContent(opts) : null
        ];

        return m(tag, props, p.insertContent(content, opts));
    };

    parsePrimaryContent = function(opts) {
        var tag,
            iconComp;

        if (opts.tag) {
            tag = opts.tag;
        } else {
            if (opts.url) {
                tag = 'a[flex]';
            } else {
                tag = 'div[flex]';
            }
        }

        iconComp = null;
        if (opts.icon) {
            iconComp = m('.list-tile-content-icon', m.component(icon, opts.icon));
        } else if (opts.indent) {
            iconComp = m('.list-tile-content-icon');
        }

        return m(tag, Object.assign({
            class: 'list-tile-primary'
        }, opts.url), m('[layout][horizontal][center]', [
            iconComp,
            m('[flex]', {class: 'list-tile-content'}, [
                m('.list-tile-title', [
                    opts.title,
                    opts.info ? m('.list-tile-info', opts.info) : null,
                    opts.info_high ? m('.list-tile-info.list-tile-double-info', opts.info_high) : null
                ])
            ])
        ]));
    };

    parseSecondaryContent = function(opts) {
        var secondaryOpts,
            defaultTag,
            tag;

        secondaryOpts = opts.secondary || {};

        defaultTag = opts.info_high ? '[vertical][layout][start]' : '[horizontal][layout][center]';

        if (secondaryOpts.tag) {
            tag = secondaryOpts.tag;
        } else {
            if (secondaryOpts.url) {
                tag = 'a' + defaultTag;
            } else {
                tag = 'div' + defaultTag;
            }
        }

        return m('.list-tile-secondary',
            m(tag, Object.assign({class: 'list-tile-content'}, secondaryOpts.url), [
                secondaryOpts.icon ? m.component(icon, secondaryOpts.icon) : null,
                secondaryOpts.content ? secondaryOpts.content : null
            ])
        );
    };

    return {
        controller: function() {
            return {
                view: m.prop()
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