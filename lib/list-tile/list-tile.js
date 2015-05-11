define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/icon/icon',
    'css!./list-tile',
    'css!polythene/content/content'
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

        heightClass = 'content-single-line';
        if (opts.info) {
            heightClass = 'content-two-line';
        } else if (opts.info_high) {
            heightClass = 'content-three-line';
        }

        iconClass = (opts.icon || opts.indent) ? 'content-has-icon' : null;
        props = {
            class: ['content', 'list-tile', heightClass, iconClass, opts.class].join(' '),
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
            iconComp = m('.content-wrapper-icon', m.component(icon, opts.icon));
        } else if (opts.indent) {
            iconComp = m('.content-wrapper-icon');
        }

        return m(tag, Object.assign({
            class: 'list-tile-primary'
        }, opts.url), m('[layout][horizontal][center]', [
            iconComp,
            m('[flex]', {class: 'content-wrapper'}, [
                m('.content-title', [
                    opts.title,
                    opts.info ? m('.content-info', opts.info) : null,
                    opts.info_high ? m('.content-info.content-double-info', opts.info_high) : null
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
            m(tag, Object.assign({class: 'content-wrapper'}, secondaryOpts.url), [
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