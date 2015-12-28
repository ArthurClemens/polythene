import 'polythene/common/object.assign';
import p from 'polythene/polythene/polythene';
import m from 'mithril';
import 'polythene-theme/slider/slider';
import sliderConfig from 'polythene-theme/slider/slider-style-config';

const IS_IE = window.navigator.msPointerEnabled;

const positionToValue = (ctrl, x) => {
    const elWidth = ctrl.inputEl.getBoundingClientRect().width - sliderConfig.thumbSize;
    const relX = Math.max(0, Math.min(1, 1 / elWidth * (x - sliderConfig.thumbSize/2)));
    return ctrl.min + ((ctrl.max - ctrl.min) * relX);
};

const valueToPosition = (ctrl) => {
    const elWidth = ctrl.inputEl.getBoundingClientRect().width - sliderConfig.thumbSize;
    const marginLeft = parseInt(window.getComputedStyle(ctrl.inputEl).marginLeft, 10);
    return marginLeft + sliderConfig.thumbSize/2 + elWidth * ctrl.fraction();
};

const valueFromTouchEvent = (ctrl, touchEvent) => {
    return positionToValue(ctrl, touchEvent.layerX);
};

const updatePinPosition = (ctrl) => {
    if (ctrl.inputEl && ctrl.pinEl) {
        ctrl.pinEl.style.left = valueToPosition(ctrl) + 'px';
    }
};

const updateValue = (ctrl, value) => {
    ctrl.setValue(value);
    ctrl.updateFraction();
    updatePinPosition(ctrl);
};

const generateStepItems = (min, max, stepSize) => {
    const steps = Math.round((max - min) / stepSize);
    const items = [];
    let s = steps + 1;
    while (s > 0) {
        items.push(m('div'));
        s--;
    }
    return items;
};

const createSlider = (ctrl, opts = {}) => {
    const fraction = ctrl.fraction();

    return [
        m('input', Object.assign({}, {
            class: ['slider-control', (fraction === 0 ? 'is-min' : null), (opts.pin ? 'pin' : null)].join(' '),
            type: 'range',
            min: ctrl.min,
            max: ctrl.max,
            tabindex: 0,
            config: (el, inited) => {
                if (inited) return;
                ctrl.inputEl = el;
                const value = ctrl.value();
                ctrl.inputEl.value = value;
                const needsUpdate = (value !== el.value);
                // take steps into accout: read back the value from the input:
                updateValue(ctrl, el.value);
                if (needsUpdate) {
                    setTimeout(() => (m.redraw()), 0);
                }
            }
        }, opts.disabled ? {
            disabled: true
        } : {
            onmousedown: (e) => {
                updateValue(ctrl, e.target.value);
            },
            onchange: (e) => {
                updateValue(ctrl, e.target.value);
            },
            oninput: (e) => {
                updateValue(ctrl, e.target.value);
            },
            onmouseup: () => {
                ctrl.inputEl.blur();
            },
            ontouchstart: (e) => {
                e.preventDefault();
                const value = valueFromTouchEvent(ctrl, e);
                ctrl.inputEl.value = value;
                updateValue(ctrl, ctrl.inputEl.value);
            },
            ontouchmove: (e) => {
                e.preventDefault();
                let value = valueFromTouchEvent(ctrl, e);
                ctrl.inputEl.value = value;
                // take steps into accout: read back the value from the input:
                updateValue(ctrl, ctrl.inputEl.value);
            },
            ontouchend: (e) => {
                e.preventDefault();
                ctrl.inputEl.blur();
            }
        }, (opts.step !== undefined) ? {step: opts.step} : null)),
        m('.slider-background', [
            m('.slider-background-lower', {
                style: {
                    flex: fraction + ' 1 0%',
                    webkitFlex: fraction + ' 1 0%'
                }
            }),
            m('.slider-background-upper', {
                style: {
                    flex: 1 - fraction + ' 1 0%',
                    webkitFlex: 1 - fraction + ' 1 0%'
                }
            })
        ]),
        (opts.step && !opts.disabled) ? m('.slider-steps.layout.justified', generateStepItems(ctrl.min, ctrl.max, parseInt(opts.step, 10))) : null,
        (opts.pin && opts.step && !opts.disabled) ? m('.slider-pin', {
            value: Math.round(ctrl.value()),
            config: (el, inited) => {
                if (inited) return;
                ctrl.pinEl = el;
            }
        }) : null
    ];
};

const createView = (ctrl, opts = {}) => {
    const tag = opts.tag || 'div';
    const props = {
        class: ['slider', (opts.disabled ? 'disabled': null), (opts.pin ? 'pin' : null), opts.class].join(' '),
        id: opts.id || '',
        config: (el, inited) => {
            if (inited) return;
            if (opts.step && !opts.disabled) {
                updatePinPosition(ctrl);
            }
        }
    };

    const content = createSlider(ctrl, opts);
    if (IS_IE) {
        return m('.slider-ie-container',
            m(tag, props, p.insertContent(content, opts))
        );
    } else {
        return m(tag, props, p.insertContent(content, opts));
    }
};

const component = {
    controller: (opts = {}) => {
        let value = (opts.value !== undefined) ? opts.value : 0;
        let min = (opts.min !== undefined) ? opts.min : 0;
        let max = (opts.max !== undefined) ? opts.max : 100;
        let fraction = 0;

        const updateFraction = () => {
            fraction = (value - min) / (max - min);
        };
        const setValue = (v) => {
            value = v;
            if (opts.getValue) {
                opts.getValue(v);
            }
        };

        setValue(value);
        updateFraction();

        return {
            min,
            max,
            inputEl: null,
            pinEl: null,
            setValue,
            value: () => (value),
            fraction: () => (fraction),
            updateFraction
        };
    },
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
