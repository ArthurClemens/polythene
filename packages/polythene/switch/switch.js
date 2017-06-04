import m from 'mithril';
import selectionControl from '../selection-control/selection-control';
import shadow from '../shadow/shadow';
import iconButton from '../icon-button/icon-button';
import './theme/theme';

var CSS_CLASSES = {
    block: 'pe-control--switch',
    track: 'pe-control--switch__track',
    thumb: 'pe-control--switch__thumb',
    knob: 'pe-control--switch__knob'
};

var selectionView = function selectionView(checked, opts) {
    var zOff = opts.zOff !== undefined ? opts.zOff : 1;
    var zOn = opts.zOn !== undefined ? opts.zOn : 2;
    var z = checked ? zOn : zOff;
    var raised = opts.disabled ? false : opts.raised !== undefined ? opts.raised : true;
    return [m('div', { class: CSS_CLASSES.track }), m(iconButton, {
        class: CSS_CLASSES.thumb,
        tabindex: opts.tabindex || 0,
        ink: opts.ink !== undefined ? opts.ink : false,
        wash: opts.wash,
        disabled: opts.disabled,
        content: [m('div', {
            class: CSS_CLASSES.knob
        }, [opts.icon ? opts.icon : null, raised ? m(shadow, {
            z: z,
            animated: true
        }) : null])]
    })];
};

var selectable = function selectable() {
    return true;
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    opts.defaultClass = CSS_CLASSES.block;
    opts.type = 'checkbox';
    opts.selectionView = selectionView;
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