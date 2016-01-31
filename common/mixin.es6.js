import common from 'polythene/config/config';
import 'polythene/common/object.assign';

const vendorize = (what, vendors) => {
    const vendorsSel = vendors.map((v) => ('_' + v + '$')).join('');
    return {
        [vendorsSel]: what
    };
};

const boxSizing = (type = 'border-box') => ({
    'box-sizing': type
});

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

const ellipsis = (lines, lineHeight) => {
    if (lines === 'none') {
        return {
            'text-overflow': 'initial',
            overflow: 'initial',
            'white-space': 'initial',
            display: 'block',
            height: 'auto'
        };
    }
    return Object.assign(
        {
            overflow: 'hidden'
        },
        (lines === undefined) ? {
            'white-space': 'nowrap',
            'text-overflow': 'ellipsis'
        } : null,
        (lines !== undefined) ? {
            'white-space': 'normal',
            '-webkit-line-clamp': lines,
            '-webkit-box-orient': 'vertical',
            display: '-webkit-box',
            height: (lines * lineHeight) + 'px'
        } : null
    );
};

const clearfix = () => ({
    '&:after': {
        content: '""',
        display: 'table',
        clear: 'both'
    }
});

// disabled, does not work in Chrome
//const hairline = (which) => ({
// #{$which}-width: 1px;
// @media screen and (min-resolution: 2dppx) {
//     #{$which}-width: 0.5px;
// }
//});
const hairline = () => ({});

const verticalCenter = (position = 'relative') => ([
    vendorize({
        transform: 'translateY(-50%)'
    }, common.prefixes_transform), {
        position: position,
        top: '50%'
    }
]);

const verticalCenterParent = () => ([
    vendorize({
        'transform-style': 'preserve-3d'
    }, common.prefixes_transform)
]);

const sticky = () => ([
    {position: '-webkit-sticky'},
    {position: '-moz-sticky'},
    {position: '-o-sticky'},
    {position: '-ms-sticky'},
    {position: 'sticky'},
    {
        top: 0,
        'z-index': 1
    }
]);

// theme utility function to generate style objects with scopes
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

const defaultAnimation = (properties = 'all', duration = common.animation_duration, curve = common.animation_curve_default) => {
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

export default {
    boxSizing,
    clearfix,
    createStyles,
    defaultAnimation,
    fit,
    fontSmoothing,
    hairline,
    ellipsis,
    sticky,
    vendorize,
    verticalCenter,
    verticalCenterParent
};
