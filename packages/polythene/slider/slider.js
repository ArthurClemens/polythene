var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import '../common/object.assign';
import p from '../polythene/polythene';
import m from 'mithril';
import './theme';
import themeConfig from './theme/config';

var CSS_CLASSES = {
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

var focusElement = void 0;

// const eventStartType = window.PointerEvent ? 'pointerdown' : (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) ? 'touchstart' : 'mousedown';
var eventMoveType = window.PointerEvent ? 'pointermove' : 'ontouchmove' in window || window.DocumentTouch && document instanceof window.DocumentTouch ? 'touchmove' : 'mousemove';
var eventEndType = window.PointerEvent ? 'pointerup' : 'ontouchend' in window || window.DocumentTouch && document instanceof window.DocumentTouch ? 'touchend' : 'mouseup';

var deFocus = function deFocus(ctrl) {
    if (focusElement) {
        focusElement.blur();
    }
    focusElement = undefined;
    ctrl.hasFocus = false;
};

var focus = function focus(ctrl, el) {
    deFocus(ctrl);
    focusElement = el;
    ctrl.hasFocus = true;
};

var positionFromEvent = function positionFromEvent(e, isVertical) {
    if (p.isTouch) {
        return isVertical ? e.touches[0].pageY : e.touches[0].pageX;
    } else {
        return isVertical ? e.pageY : e.pageX;
    }
};

var updatePinPosition = function updatePinPosition(ctrl) {
    if (ctrl.controlEl && ctrl.pinEl) {
        var left = ctrl.fraction() * ctrl.rangeWidth;
        ctrl.pinEl.style.left = left + 'px';
    }
};

var updateValue = function updateValue(ctrl, value) {
    ctrl.setValue(value);
    updatePinPosition(ctrl);
};

var generateTickMarks = function generateTickMarks(min, max, stepSize) {
    var steps = Math.round((max - min) / stepSize);
    var items = [];
    var s = steps + 1;
    while (s > 0) {
        items.push(m('div', { class: CSS_CLASSES.tick }));
        s--;
    }
    return items;
};

var readRangeData = function readRangeData(ctrl) {
    if (ctrl.controlEl) {
        // range is from the far left to the far right minus the thumb width (max x is at the left side of the thumb)
        ctrl.controlWidth = themeConfig.thumb_size;
        ctrl.rangeWidth = ctrl.trackEl.getBoundingClientRect().width - ctrl.controlWidth;
        var styles = window.getComputedStyle(ctrl.trackEl);
        ctrl.rangeOffset = parseFloat(styles.marginLeft);
    }
};

var calculateClickOffset = function calculateClickOffset(ctrl) {
    var controlOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    ctrl.clickOffset = ctrl.trackEl.getBoundingClientRect().left - (ctrl.rangeOffset - ctrl.controlWidth / 2) + controlOffset;
};

var initControlEvent = function initControlEvent(ctrl, e) {
    var controlPos = ctrl.controlEl.getBoundingClientRect().left;
    var eventPos = positionFromEvent(e);
    var controlOffset = eventPos - controlPos - ctrl.controlWidth / 2;
    calculateClickOffset(ctrl, controlOffset);
};

var initTrackEvent = function initTrackEvent(ctrl) {
    calculateClickOffset(ctrl, 0);
};

var handlePosEvent = function handlePosEvent(ctrl, e) {
    var pos = positionFromEvent(e) - ctrl.clickOffset;
    var value = ctrl.min + (pos - ctrl.rangeOffset) / ctrl.rangeWidth * (ctrl.max - ctrl.min);
    updateValue(ctrl, value);
    m.redraw();
};

var startDrag = function startDrag(ctrl, opts, e) {
    if (ctrl.isDragging) return;
    e.preventDefault();
    ctrl.isDragging = true;
    ctrl.isActive = true;
    deFocus(ctrl);

    var drag = function drag(e) {
        if (!ctrl.isDragging) return;
        handlePosEvent(ctrl, e);
    };

    var endDrag = function endDrag() {
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

var startTrack = function startTrack(ctrl, opts, e) {
    e.preventDefault();
    if (ctrl.isDragging) return;
    readRangeData(ctrl);
    initTrackEvent(ctrl);
    handlePosEvent(ctrl, e);
    startDrag(ctrl, opts, e);
};

var createSlider = function createSlider(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var hasTicks = arguments[2];
    var interactiveTrack = arguments[3];

    var fraction = ctrl.fraction();
    var stepCount = Math.max(10, parseInt(opts.step, 10) || 1); // not more than 100 steps on the screen

    var onStartTrack = function onStartTrack(e) {
        startTrack(ctrl, opts, e);
    };

    var onInitDrag = function onInitDrag(e) {
        readRangeData(ctrl);
        initControlEvent(ctrl, e);
        startDrag(ctrl, opts, e);
    };

    var flexValueCss = fraction + ' 1 0%';
    var flexRestValue = 1 - fraction;
    var flexRestCss = flexRestValue + ' 1 0%';

    return [m('div', _extends({}, {
        class: CSS_CLASSES.track,
        config: function config(el, inited) {
            if (inited) return;
            ctrl.trackEl = el;
            if (opts.pin) {
                setTimeout(function () {
                    updatePinPosition(ctrl);
                }, 0);
            }
        }
    }, interactiveTrack && !opts.disabled && !p.isTouch ? {
        onmousedown: onStartTrack
    } : null, interactiveTrack && !opts.disabled && p.isTouch ? {
        ontouchstart: onStartTrack
    } : null), [m('div', {
        class: CSS_CLASSES.trackPart + ' ' + CSS_CLASSES.trackPartValue,
        style: {
            flex: flexValueCss,
            '-ms-flex': flexValueCss,
            webkitFlex: flexValueCss
        }
    }, m('div', { class: CSS_CLASSES.trackBar }, m('div', { class: CSS_CLASSES.trackBarValue }))), m('div', _extends({}, {
        class: CSS_CLASSES.control,
        config: function config(el, inited) {
            if (inited) return;
            ctrl.controlEl = el;
        }
    }, opts.disabled ? {
        disabled: true
    } : {
        tabindex: opts.tabindex || 0,
        onfocus: function onfocus() {
            focus(ctrl, ctrl.controlEl);
        },
        onblur: function onblur() {
            deFocus(ctrl);
        },
        onkeydown: function onkeydown(e) {
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
    }, !opts.disabled && !p.isTouch ? {
        onmousedown: onInitDrag
    } : null, !opts.disabled && p.isTouch ? {
        ontouchstart: onInitDrag
    } : null, opts.events ? opts.events : null, hasTicks ? {
        step: stepCount
    } : null), opts.icon ? m('div', { class: CSS_CLASSES.thumb }, opts.icon) : null), m('div', {
        class: CSS_CLASSES.trackPart + ' ' + CSS_CLASSES.trackPartRest,
        style: {
            flex: flexRestCss,
            '-ms-flex': flexRestCss,
            webkitFlex: flexRestCss,
            'max-width': flexRestValue * 100 + '%' // for IE Edge
        }
    }, m('div', { class: CSS_CLASSES.trackBar }, m('div', { class: CSS_CLASSES.trackBarValue }))), hasTicks && !opts.disabled ? m('div', { class: CSS_CLASSES.ticks }, generateTickMarks(ctrl.min, ctrl.max, stepCount)) : null, hasTicks && opts.pin && !opts.disabled ? m('div', {
        class: CSS_CLASSES.pin,
        value: Math.round(ctrl.value()),
        config: function config(el, inited) {
            if (inited) return;
            ctrl.pinEl = el;
        }
    }) : null])];
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof opts.value === 'function') {
        ctrl.setValue(opts.value());
    }
    var tag = opts.tag || 'div';
    var hasTicks = opts.ticks !== undefined && opts.ticks !== false;
    var interactiveTrack = opts.interactiveTrack !== undefined ? opts.interactiveTrack : true;
    var props = {
        class: [CSS_CLASSES.block, opts.disabled ? CSS_CLASSES.isDisabled : null, opts.pin ? CSS_CLASSES.hasPin : null, interactiveTrack ? CSS_CLASSES.hasTrack : null, ctrl.isActive ? CSS_CLASSES.isActive : null, ctrl.hasFocus ? CSS_CLASSES.hasFocus : null, ctrl.fraction() === 0 ? CSS_CLASSES.isAtMin : null, hasTicks ? CSS_CLASSES.hasTicks : null, opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    var content = createSlider(ctrl, opts, hasTicks, interactiveTrack);
    return m(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var min = opts.min !== undefined ? opts.min : 0;
        var max = opts.max !== undefined ? opts.max : 100;
        var step = opts.step !== undefined ? opts.step : 1;
        var defaultValue = 0;
        var _fraction = min;
        var _value = defaultValue;

        if (typeof opts.value === 'function') {
            var v = opts.value();
            _value = v !== undefined ? v : defaultValue;
        } else {
            _value = opts.value !== undefined ? opts.value : defaultValue;
        }

        var setValue = function setValue(v) {
            if (v < min) v = min;
            if (v > max) v = max;
            _value = step ? Math.round(v / step) * step : v;
            _fraction = (_value - min) / (max - min);
            if (opts.getValue) {
                opts.getValue(_value);
            }
        };

        setValue(_value);

        return {
            min: min,
            max: max,
            trackEl: null,
            controlEl: null,
            pinEl: null,
            setValue: setValue,
            value: function value() {
                return _value;
            },
            fraction: function fraction() {
                return _fraction;
            },
            increase: function increase(multiply) {
                return setValue(_value + (multiply ? 10 : 1) * (step || 1));
            },
            decrease: function decrease(multiply) {
                return setValue(_value - (multiply ? 10 : 1) * (step || 1));
            },
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
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

export default component;