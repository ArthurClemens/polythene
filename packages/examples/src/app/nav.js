import m from 'mithril';
import { styler, HeaderPanel, IconButton } from 'polythene';

import style from './nav-style';
styler.add('polythene-examples-nav', style);

import iconApps from 'mmsvg/google/msvg/navigation/apps';
import iconBack from 'mmsvg/google/msvg/navigation/arrow-back';

const btn = function (name, opts) {
    const route = opts.back || '/';
    return m(IconButton, {
        tag: 'a',
        url: {
            href: (opts.urlConfig !== undefined) ? 'index.html' : route,
            config: (opts.urlConfig !== undefined) ? opts.urlConfig : m.route
        },
        icon: {
            msvg: opts.isSub ? iconBack : iconApps
        }
        // events: {
        //     onclick: (e) => (e.preventDefault(), m.route(route))
        // }
    });
};

const toolbarRow = function (title, opts) {
    return [
        btn('apps', opts),
        m('span.flex', title)
    ];
};

const nav = function(title, content, opts = {}) {
    return m(HeaderPanel, Object.assign(opts, {
        class: 'app-header',
        mode: 'waterfall',
        header: {
            toolbar: {
                topBar: toolbarRow(title, opts)
            }
        },
        content: content
    }));
};

export default nav;
