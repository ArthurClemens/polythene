import 'polythene/common/object.assign';
import p from 'polythene/polythene/polythene';
import m from 'mithril';
import 'polythene/slider/theme/theme';
import themeConfig from 'polythene/slider/theme/config';

const CSS_CLASSES = {
    block: 'pe-slider',
    thumb: 'pe-slider__thumb',
    label: 'pe-slider__label',
    track: 'pe-slider__track',
    trackPart: 'pe-slider__track-part',
    trackPartValue: 'pe-slider__track-value',
    trackPartRest: 'pe-slider__track-rest',
    trackBar: 'pe-slider__track-bar',
    trackBarValue: 'pe-slider__track-bar-value',

    control: 'pe-slider__control',
    ticks: 'pe-slider__ticks',
    tick: 'pe-slider__ticks-tick',
    pin: 'pe-slider__pin',

    isDisabled: 'pe-slider--disabled',
    isActive: 'pe-slider--active',
    hasTrack: 'pe-slider--track',
    hasPin: 'pe-slider--pin',
    hasFocus: 'pe-slider--focus',
    isAtMin: 'pe-slider--min',
    hasTicks: 'pe-slider--ticks'
};

let focusElement;

// const eventStartType = window.PointerEvent ? 'pointerdown' : (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) ? 'touchstart' : 'mousedown';
const eventMoveType = window.PointerEvent ? 'pointermove' : (('ontouchmove' in window) || window.DocumentTouch && document instanceof DocumentTouch) ? 'touchmove' : 'mousemove';
const eventEndType = window.PointerEvent ? 'pointerup' : (('ontouchend' in window) || window.DocumentTouch && document instanceof DocumentTouch) ? 'touchend' : 'mouseup';

const deFocus = (ctrl) => {
    if (focusElement) {
        focusElement.blur();
    }
    focusElement = undefined;
    ctrl.hasFocus = false;
};

const focus = (ctrl, el) => {
    deFocus(ctrl);
    focusElement = el;
    ctrl.hasFocus = true;
};

const positionFromEvent = (e, isVertical) => {
    if (p.isTouch) {
        return isVertical ? e.touches[0].pageY : e.touches[0].pageX;
    } else {
        return isVertical ? e.pageY : e.pageX;
    }
};

const updatePinPosition = (ctrl) => {
    if (ctrl.controlEl && ctrl.pinEl) {
        const left = ctrl.fraction() * ctrl.rangeWidth;
        ctrl.pinEl.style.left = left + 'px';
    }
};

const updateValue = (ctrl, value) => {
    ctrl.setValue(value);
    updatePinPosition(ctrl);
};

const generateTickMarks = (min, max, stepSize) => {
    const steps = Math.round((max - min) / stepSize);
    const items = [];
    let s = steps + 1;
    while (s > 0) {
        items.push(m('div', {class: CSS_CLASSES.tick}));
        s--;
    }
    return items;
};

const readRangeData = (ctrl) => {
    if (ctrl.controlEl) {
        // range is from the far left to the far right minus the thumb width (max x is at the left side of the thumb)
        ctrl.controlWidth = themeConfig.thumb_size;
        ctrl.rangeWidth = ctrl.trackEl.getBoundingClientRect().width - ctrl.controlWidth;
        const styles = window.getComputedStyle(ctrl.trackEl);
        ctrl.rangeOffset = parseFloat(styles.marginLeft);
    }
};

const calculateClickOffset = (ctrl, controlOffset = 0) => {
    ctrl.clickOffset = ctrl.trackEl.getBoundingClientRect().left - (ctrl.rangeOffset - ctrl.controlWidth / 2) + controlOffset;
};

const initControlEvent = (ctrl, e) => {
    const controlPos = ctrl.controlEl.getBoundingClientRect().left;
    const eventPos = positionFromEvent(e);
    const controlOffset = eventPos - controlPos - ctrl.controlWidth / 2;
    calculateClickOffset(ctrl, controlOffset);
};

const initTrackEvent = (ctrl) => {
    calculateClickOffset(ctrl, 0);
};

const handlePosEvent = (ctrl, e) => {
    const pos = positionFromEvent(e) - ctrl.clickOffset;
    const value = ctrl.min + ((pos - ctrl.rangeOffset) / ctrl.rangeWidth) * (ctrl.max - ctrl.min);
    updateValue(ctrl, value);
    m.redraw();
};

const startDrag = (ctrl, opts, e) => {
    if (ctrl.isDragging) return;
    e.preventDefault();
    ctrl.isDragging = true;
    ctrl.isActive = true;
    deFocus(ctrl);

    const drag = (e) => {
        if (!ctrl.isDragging) return;
        handlePosEvent(ctrl, e);
    };

    const endDrag = () => {
        if (!ctrl.isDragging) return;
        ctrl.isDragging = false;
        ctrl.isActive = false;
        deFocus(ctrl);
        window.removeEventListener(eventMoveType, drag);
        window.removeEventListener(eventEndType, endDrag);
        m.redraw();
    };

    window.addEventListener(eventMoveType, drag);
    window.addEventListener(eventEndType, endDrag);

    readRangeData(ctrl);

    if (opts.pin) {
        updatePinPosition(ctrl);
    }
};

const startTrack = (ctrl, opts, e) => {
    e.preventDefault();
    if (ctrl.isDragging) return;
    readRangeData(ctrl);
    initTrackEvent(ctrl);
    handlePosEvent(ctrl, e);
    startDrag(ctrl, opts, e);
};

const createSlider = (ctrl, opts = {}, hasTicks, interactiveTrack) => {
    const fraction = ctrl.fraction();
    const stepCount = Math.max(10, parseInt(opts.step, 10) || 1); // not more than 100 steps on the screen

    const onStartTrack = (e) => {
        startTrack(ctrl, opts, e);
    };

    const onInitDrag = (e) => {
        readRangeData(ctrl);
        initControlEvent(ctrl, e);
        startDrag(ctrl, opts, e);
    };

    const flexValueCss = fraction + ' 1 0%';
    const flexRestValue = (1 - fraction);
    const flexRestCss = flexRestValue + ' 1 0%';

    return [
        m('div', Object.assign({}, {
            class: CSS_CLASSES.track,
            config: (el, inited) => {
                if (inited) return;
                ctrl.trackEl = el;
                if (opts.pin) {
                    setTimeout(() => {
                        updatePinPosition(ctrl);
                    }, 0);
                }
            }
        }, (interactiveTrack && !opts.disabled && !p.isTouch) ? {
            onmousedown: onStartTrack
        } : null, (interactiveTrack && !opts.disabled && p.isTouch) ? {
            ontouchstart: onStartTrack
        } : null), [
            m('div',
                {
                    class: CSS_CLASSES.trackPart + ' ' + CSS_CLASSES.trackPartValue,
                    style: {
                        flex: flexValueCss,
                        '-ms-flex': flexValueCss,
                        webkitFlex: flexValueCss
                    }
                },
                m('div', {class: CSS_CLASSES.trackBar},
                    m('div', {class: CSS_CLASSES.trackBarValue})
                )
            ),
            m('div', Object.assign({},
                {
                    class: CSS_CLASSES.control,
                    config: (el, inited) => {
                        if (inited) return;
                        ctrl.controlEl = el;
                    }
                }, opts.disabled ? {
                    disabled: true
                } : {
                    tabindex: opts.tabindex || 0,
                    onfocus: () => {
                        focus(ctrl, ctrl.controlEl);
                    },
                    onblur: () => {
                        deFocus(ctrl);
                    },
                    onkeydown: (e) => {
                        if (e.which === 27) {
                            // ESCAPE
                            ctrl.controlEl.blur(e);
                        } else if (e.which === 37) {
                            // LEFT
                            ctrl.decrease(e.shiftKey);
                        } else if (e.which === 38) {
                            // UP
                            ctrl.increase(e.shiftKey);
                        } else if (e.which === 39) {
                            // RIGHT
                            ctrl.increase(e.shiftKey);
                        } else if (e.which === 40) {
                            // DOWN
                            ctrl.decrease(e.shiftKey);
                        }
                        readRangeData(ctrl);
                        updatePinPosition(ctrl);
                    }
                },
                (!opts.disabled && !p.isTouch) ? {
                    onmousedown: onInitDrag
                } : null,
                (!opts.disabled && p.isTouch) ? {
                    ontouchstart: onInitDrag
                } : null,
                opts.events ? opts.events : null,
                hasTicks ? {
                    step: stepCount
                } : null
            ), opts.icon ? m('div', {class: CSS_CLASSES.thumb}, opts.icon) : null),
            m('div',
                {
                    class: CSS_CLASSES.trackPart + ' ' + CSS_CLASSES.trackPartRest,
                    style: {
                        flex: flexRestCss,
                        '-ms-flex': flexRestCss,
                        webkitFlex: flexRestCss,
                        'max-width': (flexRestValue * 100) + '%' // for IE Edge
                    }
                },
                m('div', {class: CSS_CLASSES.trackBar},
                    m('div', {class: CSS_CLASSES.trackBarValue})
                )
            ),
            (hasTicks && !opts.disabled) ? m('div', {class: CSS_CLASSES.ticks}, generateTickMarks(ctrl.min, ctrl.max, stepCount)) : null,
            (hasTicks && opts.pin && !opts.disabled) ? m('div', {
                class: CSS_CLASSES.pin,
                value: Math.round(ctrl.value()),
                config: (el, inited) => {
                    if (inited) return;
                    ctrl.pinEl = el;
                }
            }) : null
        ])
    ];
};

const createView = (ctrl, opts = {}) => {
    if (typeof opts.value === 'function') {
        ctrl.setValue(opts.value());
    }
    const tag = opts.tag || 'div';
    const hasTicks = opts.ticks !== undefined && opts.ticks !== false;
    const interactiveTrack = (opts.interactiveTrack !== undefined) ? opts.interactiveTrack : true;
    const props = {
        class: [
            CSS_CLASSES.block,
            (opts.disabled ? CSS_CLASSES.isDisabled : null),
            (opts.pin ? CSS_CLASSES.hasPin : null),
            (interactiveTrack ? CSS_CLASSES.hasTrack : null),
            (ctrl.isActive ? CSS_CLASSES.isActive : null),
            (ctrl.hasFocus ? CSS_CLASSES.hasFocus : null),
            (ctrl.fraction() === 0 ? CSS_CLASSES.isAtMin : null),
            (hasTicks ? CSS_CLASSES.hasTicks : null),
            opts.class
        ].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    const content = createSlider(ctrl, opts, hasTicks, interactiveTrack);
    return m(tag, props, [opts.before, content, opts.after]);
};

const component = {
    controller: (opts = {}) => {
        const min = (opts.min !== undefined) ? opts.min : 0;
        const max = (opts.max !== undefined) ? opts.max : 100;
        const step = (opts.step !== undefined) ? opts.step : 1;
        const defaultValue = 0;
        let fraction = min;
        let value = defaultValue;

        if (typeof opts.value === 'function') {
            const v = opts.value();
            value = (v !== undefined) ? v : defaultValue;
        } else {
            value = (opts.value !== undefined) ? opts.value : defaultValue;
        }

        const setValue = (v) => {
            if (v < min) v = min;
            if (v > max) v = max;
            value = step ? (Math.round(v / step) * step) : v;
            fraction = (value - min) / (max - min);
            if (opts.getValue) {
                opts.getValue(value);
            }
        };

        setValue(value);

        return {
            min,
            max,
            trackEl: null,
            controlEl: null,
            pinEl: null,
            setValue,
            value: () => (value),
            fraction: () => (fraction),
            increase: (multiply) => (setValue(value + (multiply ? 10 : 1) * (step || 1))),
            decrease: (multiply) => (setValue(value - (multiply ? 10 : 1) * (step || 1))),
            isActive: false,
            hasFocus: false,
            isDragging: false,
            // coordinates
            controlWidth: 0,
            rangeWidth: 0,
            rangeOffset: 0,
            clickOffset: 0
        };
    },
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
