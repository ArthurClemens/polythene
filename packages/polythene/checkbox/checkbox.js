import m from 'mithril';
import selectionControl from '../selection-control/selection-control';
import iconSelection from '../selection-control/icon-selection';
import theme from './theme/theme'; // contains default icons

var selectable = function selectable() {
    return true;
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    opts.theme = theme;
    opts.defaultClass = 'pe-control--checkbox';
    opts.type = 'checkbox';
    opts.selectionView = iconSelection;
    opts.selectable = selectable;
    return m(selectionControl, opts);
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

export default component;