/*
Usage:

var listTile = require('polythene/list-tile/list-tile');
m.component(listTile, {
    title: 'Toolbar',
    icon: {
        type: 'medium',
        className: 'demo-cirle-icon',
        svg: {
            name: 'folder',
            iconset: 'mdi'
        }
    },
    url: 'toolbar.html',
    url_config: null,
    secondary_url: 'javascript:alert("Faved Toolbar")',
    secondary_url_config: null,
    secondary: m.component(icon, {
        svg: {
            name: 'heart-outline',
            iconset: 'mdi'
        }
    })
})

Options:

    tag (optional) (String): default 'div'
    className (optional) (String): extra CSS class appended to 'icon'
    title (required) (String or HTML Content)
    info (optional) (String or HTML Content): info text (1 line high)
    info_double_line (String or HTML Content): info text (2 lines high)
    icon (optional) (Object): icon module options

    primary_tag (optional) (String): default: 'a[flex]'
    primary_url (optional) (String): URL
    primary_url_config (optional) (Object): default: m.route; override with another object or 'null'

    secondary (optional) (HTML Content or Mithril template or component): secondary content
    secondary_tag (optional) (String): default: 'a[horizontal][layout][center]' (for one or two lines) and 'a[vertical][layout][start]' (for info_double_line)
    secondary_url (optional) (String): URL
    secondary_url_config (optional) (Object): default: m.route; override with another object or 'null'

*/

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
            var defaultProps, props, tag, heightClass, iconClass, content, primaryContent, secondaryContent, urlConfig, secondaryUrlConfig;

            opts = opts || {};

            heightClass = 'list-tile-single-line';
            if (opts.info) {
                heightClass = 'list-tile-two-line';
            } else if (opts.info_double_line) {
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
            props = p.handleEventProps(defaultProps, opts, ctrl, this);
            p.merge(props, opts.props);

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
                    opts.info_double_line ? m('.list-tile-info.list-tile-double-info', opts.info_double_line) : null
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
                if (opts.info_double_line) {
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