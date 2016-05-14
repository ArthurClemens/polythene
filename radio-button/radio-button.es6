import m from 'mithril';
import selectionControl from 'polythene/selection-control/selection-control';
import iconSelection from 'polythene/selection-control/icon-selection';
import theme from 'polythene/radio-button/theme/theme'; // contains default icons

const selectable = (selected) => (!selected);

const createView = (ctrl, opts = {}) => {
    opts.theme = theme;
    opts.defaultClass = 'pe-control--radio';
    opts.type = 'radio';
    opts.selectionView = iconSelection;
    opts.selectable = selectable;
    return m.component(selectionControl, opts);
};

const component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
