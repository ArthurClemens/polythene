var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import '../common/object.assign';
import m from 'mithril';
import listTile from '../list-tile/list-tile';
import './theme';

var CSS_CLASSES = {
    block: 'pe-list',
    header: 'pe-list__header',
    borders: 'pe-list--borders',
    indentedBorders: 'pe-list--borders-indented',
    hasHeader: 'pe-list--header',
    isCompact: 'pe-list--compact',
    isHoverable: 'pe-list--hoverable',
    isSelectable: 'pe-list--selectable'
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = {
        class: [CSS_CLASSES.block, opts.borders ? CSS_CLASSES.borders : null, opts.indentedBorders ? CSS_CLASSES.indentedBorders : null, opts.hoverable ? CSS_CLASSES.isHoverable : null, opts.selectable ? CSS_CLASSES.isSelectable : null, opts.header ? CSS_CLASSES.hasHeader : null, opts.compact ? CSS_CLASSES.isCompact : null, opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    var headerOpts = void 0;
    if (opts.header) {
        headerOpts = _extends({}, opts.header);
        headerOpts.class = [CSS_CLASSES.header, headerOpts.class || null].join(' ');
    }
    var content = [headerOpts ? m(listTile, headerOpts) : null, opts.tiles ? opts.tiles : null];
    return m(tag, props, [opts.before, content, opts.after]);
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

export default component;