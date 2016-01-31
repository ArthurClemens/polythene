import m from 'mithril';
import selectionControl from 'polythene/selection-control/selection-control';
import iconSelection from 'polythene/selection-control/icon-selection';
import theme from 'polythene/checkbox/theme/theme'; // contains default icons

const createView = (ctrl, opts = {}) => {
    opts.theme = theme;
    opts.defaultClass = 'pe-control--checkbox';
    opts.type = 'checkbox';
    opts.selectionView = iconSelection;
    return m.component(selectionControl, opts);
};

const component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
