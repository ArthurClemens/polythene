import 'polythene/common/object.assign';
import p from 'polythene/polythene/polythene';
import m from 'mithril';
import icon from 'polythene/icon/icon';
import ripple from 'polythene/ripple/ripple';
import 'polythene-theme/list-tile/list-tile';

const parsePrimaryContent = (opts) => {
    let tag,
        iconComp;

    if (opts.tag) {
        tag = opts.tag;
    } else {
        if (opts.url) {
            tag = 'a.flex';
        } else {
            tag = 'div.flex';
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
    }, opts.url, opts.events), m('.layout.horizontal.center', [
        iconComp,
        m('.flex', {
            class: 'list-tile-content'
        }, [
            m('.list-tile-title', [
                opts.title,
                opts.subtitle ? m('.list-tile-info', opts.subtitle) : null,
                opts.highSubtitle ? m('.list-tile-info.list-tile-double-info', opts.highSubtitle) : null
            ])
        ])
    ]));
};

const parseSecondaryContent = (opts) => {
    const secondaryOpts = opts.secondary || {};
    const defaultTag = opts.highSubtitle ? '.vertical.layout.start' : '.horizontal.layout.center';
    let tag;
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
        m(tag, Object.assign({
            class: 'list-tile-content'
        }, secondaryOpts.url, secondaryOpts.events), [
            secondaryOpts.icon ? m.component(icon, secondaryOpts.icon) : null,
            secondaryOpts.content ? secondaryOpts.content : null
        ])
    );
};

const createView = (ctrl, opts = {}) => {
    const tag = opts.tag || 'div.horizontal.layout.center';

    let heightClass;
    if (opts.subtitle) {
        heightClass = 'list-tile-two-line';
    } else if (opts.highSubtitle) {
        heightClass = 'list-tile-three-line';
    } else {
        heightClass = 'list-tile-single-line';
    }

    const iconClass = (opts.icon || opts.indent) ? 'list-tile-has-icon' : null;
    const props = {
        class: ['list-tile', (opts.selected ? 'selected' : null), (opts.disabled ? 'disabled' : null), heightClass, iconClass, opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    const content = [
        (opts.ink && !opts.disabled) ? m.component(ripple, opts.ripple) : null,
        parsePrimaryContent(opts),
        opts.secondary ? parseSecondaryContent(opts) : null
    ];

    return m(tag, props, p.insertContent(content, opts));
};

const component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
