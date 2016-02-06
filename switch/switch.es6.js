import m from 'mithril';
import p from 'polythene/polythene/polythene';
import selectionControl from 'polythene/selection-control/selection-control';
import shadow from 'polythene/shadow/shadow';
import 'polythene/switch/theme/theme';

const CSS_CLASSES = {
    block: 'pe-control--switch',
    track: 'pe-control--switch__track',
    thumb: 'pe-control--switch__thumb',
    knob: 'pe-control--switch__knob',
    hitarea: 'pe-control--switch__hitarea',
    hitareaTransparent: 'pe-control--switch__hitarea--transparent'
};

const selectionView = (checked, opts) => {
    const zOff = (opts.zOff !== undefined) ? opts.zOff : 1;
    const zOn = (opts.zOn !== undefined) ? opts.zOn : 2;
    const z = checked ? zOn : zOff;
    const wash = (opts.wash !== undefined) ? opts.wash : true;
    const raised = (opts.disabled)
        ? false
        : (opts.raised !== undefined) ? opts.raised : true;
    return [
        m('div', {class: CSS_CLASSES.track}),
        m('div', {class: CSS_CLASSES.thumb}, [
            m('div', {class: CSS_CLASSES.knob},
                raised
                    ? m.component(shadow, {
                        z: z,
                        animated: true
                    })
                    : null
            ),
            // if not disabled, draw wash to increase hit area
            (!opts.disabled)
                ? m('div', {
                    class: [
                        CSS_CLASSES.hitarea,
                        (!wash || !p.isTouch) ? CSS_CLASSES.hitareaTransparent : null
                    ].join(' ')
                })
                : null
        ])
    ];
};

const createView = (ctrl, opts = {}) => {
    opts.defaultClass = CSS_CLASSES.block;
    opts.type = 'checkbox';
    opts.selectionView = selectionView;
    return m.component(selectionControl, opts);
};

const component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
