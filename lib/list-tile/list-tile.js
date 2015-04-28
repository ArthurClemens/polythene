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

    return {
        view: function(ctrl, opts) {
            var tag, props, content,
                heightClass,
                iconClass,
                primaryContent,
                primaryContentTag,
                secondaryContent,
                secondaryContentTag,
                urlConfig,
                secondaryUrlConfig;

            opts = opts || {};

            heightClass = 'list-tile-single-line';
            if (opts.info) {
                heightClass = 'list-tile-two-line';
            } else if (opts.info_high) {
                heightClass = 'list-tile-three-line';
            }

            iconClass = null;
            if (opts.icon) {
                iconClass = 'list-tile-has-icon';
            }

            tag = opts.tag || 'div[horizontal][layout][center]';
            props = p.componentProps({
                classList: ['list-tile', heightClass, iconClass]
            }, opts, this, ctrl);

            urlConfig = null;
            if (opts.url) {
                if (opts.url_config !== undefined) {
                    urlConfig = opts.url_config;
                } else {
                    urlConfig = m.route;
                }
            }

            if (opts.primary_tag) {
                primaryContentTag = opts.primary_tag;
            } else {
                if (opts.url) {
                    primaryContentTag = 'a[flex]';
                } else {
                    primaryContentTag = 'div[flex]';
                }
            }
            primaryContent = m(primaryContentTag, {
                class: 'list-tile-primary',
                href: opts.url ? opts.url : '',
                config: urlConfig ? urlConfig : ''
            }, [
                opts.icon ? m.component(icon, opts.icon) : null,
                m('.list-tile-content', [
                    m('.list-tile-title', opts.title),
                    opts.info ? m('.list-tile-info', opts.info) : null,
                    opts.info_high ? m('.list-tile-info.list-tile-double-info', opts.info_high) : null
                ])
            ]);

            secondaryContent = null;
            secondaryUrlConfig = null;
            if (opts.secondary_url) {
                if (opts.secondary_url_config !== undefined) {
                    secondaryUrlConfig = opts.secondary_url_config;
                } else {
                    secondaryUrlConfig = m.route;
                }
            }

            if (opts.secondary) {
                var defaultSecondaryTag = '[horizontal][layout][center]';
                if (opts.info_high) {
                    defaultSecondaryTag = '[vertical][layout][start]';
                }

                if (opts.secondary_tag) {
                    secondaryContentTag = opts.secondary_tag;
                } else {
                    if (opts.secondary_url) {
                        secondaryContentTag = 'a' + defaultSecondaryTag;
                    } else {
                        secondaryContentTag = 'div' + defaultSecondaryTag;
                    }
                }

                secondaryContent = m(secondaryContentTag, {
                    class: 'list-tile-secondary',
                    href: opts.secondary_url ? opts.secondary_url : '',
                    config: secondaryUrlConfig ? secondaryUrlConfig : null
                }, opts.secondary);
            }
            content = [
                primaryContent,
                secondaryContent
            ];

            return m(tag, props, p.embellish(content, opts));
        }
    };
});