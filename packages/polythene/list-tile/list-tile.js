var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import '../common/object.assign';
import m from 'mithril';
import icon from '../icon/icon';
import ripple from '../ripple/ripple';
import './theme/theme';

var CSS_CLASSES = {
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

var parsePrimaryContent = function parsePrimaryContent(opts) {
    var tag = opts.tag ? opts.tag : opts.url ? 'a' : 'div';

    var frontComp = opts.front ? m('div', {
        class: CSS_CLASSES.content + ' ' + CSS_CLASSES.contentFront
    }, opts.front) : opts.indent ? m('div', {
        class: CSS_CLASSES.content + ' ' + CSS_CLASSES.contentFront
    }) : null;

    return m(tag, _extends({}, {
        class: CSS_CLASSES.primary
    }, opts.url, opts.events), [frontComp, m('div', {
        class: CSS_CLASSES.content
    }, [opts.content ? opts.content : null, opts.title ? m('div', { class: CSS_CLASSES.title }, opts.title) : null, opts.subtitle ? m('div', { class: CSS_CLASSES.subtitle }, opts.subtitle) : null, opts.highSubtitle ? m('div', { class: CSS_CLASSES.subtitle + ' ' + CSS_CLASSES.highSubtitle }, opts.highSubtitle) : null])]);
};

var parseSecondaryContent = function parseSecondaryContent(opts) {
    var secondaryOpts = opts.secondary || {};
    var tag = void 0;
    if (secondaryOpts.tag) {
        tag = secondaryOpts.tag;
    } else {
        if (secondaryOpts.url) {
            tag = 'a';
        } else {
            tag = 'div';
        }
    }
    return m(tag, _extends({}, {
        class: CSS_CLASSES.secondary
    }, secondaryOpts.url, secondaryOpts.events), m('div', {
        class: CSS_CLASSES.content
    }, [secondaryOpts.icon ? m(icon, secondaryOpts.icon) : null, secondaryOpts.content ? secondaryOpts.content : null]));
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';

    var heightClass = opts.subtitle ? CSS_CLASSES.hasSubtitle : opts.highSubtitle ? CSS_CLASSES.hasHighSubtitle : opts.front || opts.indent ? CSS_CLASSES.hasFront : null;

    var props = {
        class: [CSS_CLASSES.block, opts.selected ? CSS_CLASSES.selected : null, opts.disabled ? CSS_CLASSES.disabled : null, opts.sticky ? CSS_CLASSES.sticky : null, opts.compact ? CSS_CLASSES.isCompact : null, opts.hoverable ? CSS_CLASSES.isHoverable : null, opts.selectable ? CSS_CLASSES.isSelectable : null, heightClass, opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
        // events and url are attached to primary content to not interfere with controls
    };
    var content = [opts.ink && !opts.disabled ? m(ripple, opts.ripple) : null, parsePrimaryContent(opts), opts.secondary ? parseSecondaryContent(opts) : null];
    return m(tag, props, [opts.before, content, opts.after]);
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

export default component;