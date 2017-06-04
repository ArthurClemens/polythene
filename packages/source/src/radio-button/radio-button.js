import m from 'mithril';
import selectionControl from '../selection-control/selection-control';
import iconSelection from '../selection-control/icon-selection';
import theme from './theme/theme'; // contains default icons

const selectable = (selected) => (!selected);

const createView = (ctrl, opts = {}) => {
    opts.theme = theme;
    opts.defaultClass = 'pe-control--radio';
    opts.type = 'radio';
    opts.selectionView = iconSelection;
    opts.selectable = selectable;
    return m(selectionControl, opts);
};

const component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
