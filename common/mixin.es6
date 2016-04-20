// Mixins for j2c

import common from 'polythene/config/config';
import 'polythene/common/object.assign';

// Creates j2c vendor key string from vendor list
// mixin.vendorize({'user-select': 'none'}, common.prefixes_user_select)
const vendorize = (what, prefixes) => {
    const vendorsSel = prefixes.map((v) => ('_' + v + '$')).join('');
    return {
        [vendorsSel]: what
    };
};

// Centers an item absolutely within relative parent
// mixin.fit()
const fit = (offset = 0) => {
    const offsetPx = offset + 'px';
    return {
        position: 'absolute',
        top: offsetPx,
        right: offsetPx,
        bottom: offsetPx,
        left: offsetPx
    };
};

// Optional font smoothing
// mixin.fontSmoothing()
const fontSmoothing = (smoothing = true) => {
    if (smoothing) {
        return {
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale'
        };
    } else {
        return {
            '-webkit-font-smoothing': 'subpixel-antialiased',
            '-moz-osx-font-smoothing': 'auto'
        };
    }
};

// Breaks off a line with ...
// unless lines is 'none'
// mixin.ellipsis(1, 16) // max 1 line, 16px high
// mixin.ellipsis(2, 1.3, 'em') // max 2 lines, 2.6em high
const ellipsis = (lines, lineHeight, unit = 'px') => {
    if (lines === 'none') {
        return {
            'text-overflow': 'initial',
            overflow: 'initial',
            display: 'block',
            height: 'auto'
        };
    }
    return Object.assign(
        {
            overflow: 'hidden',
            'text-overflow': 'ellipsis',
            'text-rendering': 'auto' // Samsung Android
        },
        (lines !== undefined) ? {
            '-webkit-line-clamp': lines,
            '-webkit-box-orient': 'vertical',
            display: '-webkit-box'
        } : null,
        (lineHeight !== undefined) ? {
            'max-height': (lines * lineHeight) + unit
        } : null
    );
};

// Clears float
// mixin.clearfix()
const clearfix = () => ({
    '&:after': {
        content: '""',
        display: 'table',
        clear: 'both'
    }
});


// Creates a very thin line
// disabled, does not work in Chrome
// mixin.hairline()
const hairline = () => ({});

// const hairline = (which) => ({
//     [`${which}-width`]: '1px',
//
//     ' html.pe-hairlines &': {
//         [`${which}-width`]: '0.5px'
//     }
// });

// Test if browser handles 0.5px borders
// and add class pe-hairlines if so
// if (window.devicePixelRatio && devicePixelRatio >= 2) {
//     const el = document.createElement('div');
//     el.style.border = '.5px solid transparent';
//     document.body.appendChild(el);
//     if (el.offsetHeight === 1) {
//         document.querySelector('html').classList.add('pe-hairlines');
//     }
//     document.body.removeChild(el);
// }

// Creates sticky headers in a scrollable list
// Does not work in Chrome: http://caniuse.com/#feat=css-sticky
// mixin.sticky()
const sticky = (zIndex = 1) => ([
    {position: '-webkit-sticky'},
    {position: '-moz-sticky'},
    {position: '-o-sticky'},
    {position: '-ms-sticky'},
    {position: 'sticky'},
    {
        top: 0,
        'z-index': zIndex
    }
]);

// Polythene utility function to generate style objects with scopes
// Used in theme files
const createStyles = (common, fn) => {
    if (Array.isArray(common)) {
        return common.map((o) => {
            for (let scope in o) {
                return {[scope]: fn(o[scope])};
            };
        });
    } else {
        return fn(common);
    }
};

// Creats a transition with presets
// mixin.defaultTransition('opacity', config.animation_duration)
const defaultTransition = (properties = 'all', duration = common.animation_duration, curve = common.animation_curve_default) => {
    return [
        vendorize({
            'transition-delay': 0
        }, common.prefixes_transition),
        vendorize({
            'transition-duration': duration
        }, common.prefixes_transition),
        vendorize({
            'transition-timing-function': curve
        }, common.prefixes_transition),
        vendorize({
            'transition-property': properties
        }, common.prefixes_transition),
    ];
};

// Scales an item dynamically between 2 screen sizes
// mixin.fluidScale('font-size', 'px', 50, 100);
// => 50px at 320 and below; scaling between sizes 50px and 100px in between the breakpoints; 100px at 1920 and above
const fluidScale = (property, unit, minValue, maxValue, minBreakpoint = 320, maxBreakpoint = 1920, orientation = 'horizontal') => (fluidScales([property], unit, [[minBreakpoint, minValue], [maxBreakpoint, maxValue]], orientation));

// Scales an item dynamically between multiple screen sizes
// mixin.fluidScales(['padding-left', 'padding-right'], 'px', [[375, 40], [320, 35], [480, 55]])
// => 35px padding-left and padding-right at 320 and below; scaling between sizes 35px and 40px in between the breakpoints 320 and 375; scaling between sizes 40px and 55px in between the breakpoints 375 and 480; 55px at 480 and above
const fluidScales = (property, unit, sizes, orientation) => {
    const sorted = sizes.sort();
    const minBreakpoints = sorted.map((data) => (data[0]));
    const maxBreakpoints = sorted.map((data) => (data[0]));
    maxBreakpoints.shift();
    maxBreakpoints.push(minBreakpoints[minBreakpoints.length - 1]);
    const minValues = sorted.map((data) => (data[1]));
    const maxValues = sorted.map((data) => (data[1]));
    maxValues.shift();
    maxValues.push(minValues[minValues.length - 1]);
    return sorted.map((data, index) => (fluidRule(
        property,
        unit,
        orientation,
        minBreakpoints[index],
        maxBreakpoints[index],
        minValues[index],
        maxValues[index],
        index === 0,
        index === sorted.length - 1
    )));
};

const fluidRule = (property, unit, orientation = 'horizontal', minBreakpoint, maxBreakpoint, minValue, maxValue, isFirst, isLast) => {
    const orientationUnit = (orientation === 'vertical') ? 'vh' : 'vw';
    const orientationRule = (orientation === 'vertical') ? 'height' : 'width';
    const rule = isLast
        ? [`@media (min-${orientationRule}: ${minBreakpoint}px)`]
        : [`@media (min-${orientationRule}: ${minBreakpoint}px) and (max-${orientationRule}: ${maxBreakpoint}px)`];
    const multiplier = `((${maxValue} - ${minValue}) / (${maxBreakpoint} - ${minBreakpoint}) * 100${orientationUnit})`;
    const adder = `(((${minValue} * ${maxBreakpoint}) - (${maxValue} * ${minBreakpoint})) / (${maxBreakpoint} - ${minBreakpoint})) * 1${unit}`;
    const formula = `calc(${multiplier} + ${adder})`;
    const properties = Array.isArray(property) ? property : [property];
    return [
        isFirst ? properties.map((p) => ({[p]: `${minValue}${unit}`})) : null,
        {[rule]: properties.map((p) => ({[p]: isLast ? `${maxValue}${unit}` : formula}))}
    ];
};

export default {
    clearfix,
    createStyles,
    defaultTransition,
    ellipsis,
    fit,
    fontSmoothing,
    fluidScale,
    fluidScales,
    hairline,
    sticky,
    vendorize
};
