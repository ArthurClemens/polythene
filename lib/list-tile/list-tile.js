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

        iconClass = opts.icon ? 'list-tile-has-icon' : null;

        props = p.componentProps({
            classList: ['list-tile', heightClass, iconClass]
        }, opts, this, ctrl);

        content = [
            parsePrimaryContent(opts),
            parseSecondaryContent(opts)
        ];

        return m(tag, props, p.embellish(content, opts));
    };

    parsePrimaryContent = function(opts) {
        var tag;

        if (opts.tag) {
            tag = opts.tag;
        } else {
            if (opts.url) {
                tag = 'a[flex]';
            } else {
                tag = 'div[flex]';
            }
        }
        return m(tag, p.assign({
            class: 'list-tile-primary'
        }, opts.url), [
            opts.icon ? m.component(icon, opts.icon) : null,
            m('.list-tile-content', [
                m('.list-tile-title', opts.title),
                opts.info ? m('.list-tile-info', opts.info) : null,
                opts.info_high ? m('.list-tile-info.list-tile-double-info', opts.info_high) : null
            ])
        ]);
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

        return m(tag, p.assign({
            class: 'list-tile-secondary'
        }, secondaryOpts.url), [
            secondaryOpts.icon ? m.component(icon, secondaryOpts.icon) : null,
            secondaryOpts.content ? secondaryOpts.content : null
        ]);
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