import 'polythene/common/object.assign';
import m from 'mithril';
import icon from 'polythene/icon/icon';
import ripple from 'polythene/ripple/ripple';
import 'polythene/list-tile/theme/theme';

const CSS_CLASSES = {
    block: 'pe-list-tile',
    primary: 'pe-list-tile__primary',
    secondary: 'pe-list-tile__secondary',
    content: 'pe-list-tile__content',
    contentFront: 'pe-list-tile__content--front',
    title: 'pe-list-tile__title',
    subtitle: 'pe-list-tile__subtitle',
    highSubtitle: 'pe-list-tile__subtitle--high',
    selected: 'pe-list-tile--selected',
    disabled: 'pe-list-tile--disabled',
    sticky: 'pe-list-tile--sticky',
    hasSubtitle: 'pe-list-tile--subtitle',
    hasHighSubtitle: 'pe-list-tile--high-subtitle',
    hasFront: 'pe-list-tile--front',
    isCompact: 'pe-list-tile--compact',
    isHoverable: 'pe-list-tile--hoverable',
    isSelectable: 'pe-list-tile--selectable'
};

const parsePrimaryContent = (opts) => {
    const tag = (opts.tag)
        ? opts.tag
        : (opts.url)
            ? 'a'
            : 'div';

    const frontComp = (opts.front)
        ? m('div',
            {
                class: CSS_CLASSES.content + ' ' + CSS_CLASSES.contentFront
            }, opts.front)
        : (opts.indent)
            ? m('div',
                {
                    class: CSS_CLASSES.content + ' ' + CSS_CLASSES.contentFront
                })
            : null;

    return m(tag, Object.assign(
        {},
        {
            class: CSS_CLASSES.primary
        },
        opts.url,
        opts.events
    ), [
        frontComp,
        m('div', {
            class: CSS_CLASSES.content
        }, [
            opts.content ? opts.content : null,
            opts.title ? m('div', {class: CSS_CLASSES.title}, opts.title) : null,
            opts.subtitle ? m('div', {class: CSS_CLASSES.subtitle}, opts.subtitle) : null,
            opts.highSubtitle ? m('div', {class: CSS_CLASSES.subtitle + ' ' + CSS_CLASSES.highSubtitle}, opts.highSubtitle) : null
        ])
    ]);
};

const parseSecondaryContent = (opts) => {
    const secondaryOpts = opts.secondary || {};
    let tag;
    if (secondaryOpts.tag) {
        tag = secondaryOpts.tag;
    } else {
        if (secondaryOpts.url) {
            tag = 'a';
        } else {
            tag = 'div';
        }
    }
    return m(tag, Object.assign(
        {},
        {
            class: CSS_CLASSES.secondary
        },
        secondaryOpts.url, secondaryOpts.events
    ),
        m('div', {
            class: CSS_CLASSES.content
        }, [
            secondaryOpts.icon ? m.component(icon, secondaryOpts.icon) : null,
            secondaryOpts.content ? secondaryOpts.content : null
        ])
    );
};

const createView = (ctrl, opts = {}) => {
    const tag = opts.tag || 'div';

    const heightClass = (opts.subtitle)
        ? CSS_CLASSES.hasSubtitle
        : (opts.highSubtitle)
            ? CSS_CLASSES.hasHighSubtitle
            : (opts.front || opts.indent)
                ? CSS_CLASSES.hasFront
                : null;

    const props = {
        class: [
            CSS_CLASSES.block,
            (opts.selected ? CSS_CLASSES.selected : null),
            (opts.disabled ? CSS_CLASSES.disabled : null),
            (opts.sticky ? CSS_CLASSES.sticky : null),
            (opts.compact ? CSS_CLASSES.isCompact : null),
            (opts.hoverable ? CSS_CLASSES.isHoverable : null),
            (opts.selectable ? CSS_CLASSES.isSelectable : null),
            heightClass,
            opts.class
        ].join(' '),
        id: opts.id || '',
        config: opts.config
        // events and url are attached to primary content to not interfere with controls
    };
    const content = [
        (opts.ink && !opts.disabled) ? m.component(ripple, opts.ripple) : null,
        parsePrimaryContent(opts),
        opts.secondary ? parseSecondaryContent(opts) : null
    ];
    return m(tag, props, [opts.before, content, opts.after]);
};

const component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
