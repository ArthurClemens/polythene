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
            var defaultProps, props, eventProps, tag, heightClass, iconClass, content, primaryContent, secondaryContent, urlConfig, secondaryUrlConfig;
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

            defaultProps = {
                class: ['list-tile', heightClass, iconClass, (opts.className || '')].join(' ')
            };
            tag = opts.tag || 'div[horizontal][layout][center]';
            eventProps = p.handleEventProps(opts.events, this, ctrl);
            props = p.assign(defaultProps, eventProps, opts.props);

            urlConfig = null;
            if (opts.url) {
                if (opts.url_config !== undefined) {
                    urlConfig = opts.url_config;
                } else {
                    urlConfig = m.route;
                }
            }

            primaryContent = m((opts.primary_tag ? opts.primary_tag : 'a[flex]'), {
                class: 'list-tile-primary',
                href: opts.url ? opts.url : null,
                config: urlConfig ? urlConfig : null
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
                var defaultSecondaryTag = 'a[horizontal][layout][center]';
                if (opts.info_high) {
                    defaultSecondaryTag = 'a[vertical][layout][start]';
                }
                secondaryContent = m((opts.secondary_tag ? opts.secondary_tag : defaultSecondaryTag), {
                    class: 'list-tile-secondary',
                    href: opts.secondary_url ? opts.secondary_url : null,
                    config: secondaryUrlConfig ? secondaryUrlConfig : null
                }, opts.secondary);
            }
            content = [primaryContent, secondaryContent];

            return m(tag, props, content);
        }
    };
});