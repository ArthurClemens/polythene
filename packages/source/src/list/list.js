import '../common/object.assign';
import m from 'mithril';
import listTile from '../list-tile/list-tile';
import './theme/theme';

const CSS_CLASSES = {
    block: 'pe-list',
    header: 'pe-list__header',
    borders: 'pe-list--borders',
    indentedBorders: 'pe-list--borders-indented',
    hasHeader: 'pe-list--header',
    isCompact: 'pe-list--compact',
    isHoverable: 'pe-list--hoverable',
    isSelectable: 'pe-list--selectable'
};

const createView = (ctrl, opts = {}) => {
    const tag = opts.tag || 'div';
    const props = {
        class: [
            CSS_CLASSES.block,
            (opts.borders ? CSS_CLASSES.borders : null),
            (opts.indentedBorders ? CSS_CLASSES.indentedBorders : null),
            (opts.hoverable ? CSS_CLASSES.isHoverable : null),
            (opts.selectable ? CSS_CLASSES.isSelectable : null),
            (opts.header ? CSS_CLASSES.hasHeader : null),
            (opts.compact ? CSS_CLASSES.isCompact : null),
            opts.class
        ].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    let headerOpts;
    if (opts.header) {
        headerOpts = Object.assign({}, opts.header);
        headerOpts.class = [CSS_CLASSES.header, (headerOpts.class || null)].join(' ');
    }
    const content = [
        headerOpts ? m(listTile, headerOpts) : null,
        opts.tiles ? opts.tiles : null
    ];
    return m(tag, props, [opts.before, content, opts.after]);
};

const component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
