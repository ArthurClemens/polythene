import common from 'polythene/config/config';
import mixin from 'polythene/common/mixin';
import flex from 'polythene/layout/theme/flex';

const positionBorder = (thumbSize, borderWidth) => ({
    'border-width': borderWidth + 'px',
    width: (thumbSize - 2 * borderWidth) + 'px',
    height: (thumbSize - 2 * borderWidth) + 'px'
});

const createStyles = (config) => {
    const thumbSize = Math.max(config.thumb_size, 2 * config.thumb_border_width);
    const scaledThumbDiff = (config.active_thumb_scale - 1) * thumbSize / 2;
    const barOffset = (thumbSize / 2);
    const scaledBorderWidth = Math.max(1, config.thumb_border_width / config.active_thumb_scale);
    const thumbTouchSize = config.thumb_touch_size;
    const stepsOffset = config.side_spacing + barOffset - 1;

    return [{
        '.pe-slider': [
            mixin.vendorize({
                'user-select': 'none'
            }, common.prefixes_user_select),
            {
                height: config.height + 'px',
                'margin-top': ((config.height - config.track_height) / 2) + 'px ',
                position: 'relative',

                ' > .pe-icon': {
                    height: config.height + 'px'
                },

                ' .pe-slider__track': [
                    flex.layoutHorizontal,
                    mixin.defaultTransition('transform', config.animation_duration),
                    mixin.vendorize({
                        'user-select': 'none'
                    }, common.prefixes_user_select),
                    {
                        height: config.track_height + 'px',
                        margin: '0 ' + config.side_spacing + 'px',
                        outline: 0
                    }
                ],
                ' div + .pe-slider__track': {
                    margin: '0 ' + config.horizontal_layout_side_spacing + 'px'
                },

                ' .pe-slider__control': [
                    flex.selfCenter,
                    mixin.defaultTransition('transform, background', config.animation_duration),
                    mixin.vendorize({
                        'user-select': 'none'
                    }, common.prefixes_user_select), {
                        width: thumbSize + 'px',
                        height: thumbSize + 'px',
                        'line-height': 0,
                        'border-radius': '50%',
                        outline: 0,
                        'z-index': 1,
                        position: 'relative',

                        // touch area
                        '&:before': [
                            mixin.defaultTransition('background-color', config.animation_duration),
                            {
                                content: '""',
                                position: 'absolute',
                                'border-radius': '50%',
                                left: (-thumbTouchSize/2 + thumbSize/2) + 'px',
                                top: (-thumbTouchSize/2 + thumbSize/2) + 'px',
                                width: thumbTouchSize + 'px',
                                height: thumbTouchSize + 'px'
                            }
                        ],

                        // border
                        '&:after': [
                            mixin.defaultTransition('border', config.animation_duration),
                            positionBorder(thumbSize, config.thumb_border_width),
                            {
                                content: '""',
                                position: 'absolute',
                                'border-radius': '50%',
                                'border-style': 'solid'
                            }
                        ]
                    }
                ],

                ' .pe-slider__thumb': [
                    mixin.defaultTransition('opacity', config.animation_duration),
                    mixin.fit(),
                    {
                        '&, .pe-icon': {
                            width: 'inherit',
                            height: 'inherit'
                        }
                    }
                ],

                ' .pe-slider__label': {
                    height: config.height + 'px',
                    'line-height': config.height + 'px',
                    'min-width': common.unit_icon_size + 'px',
                    'text-align': 'center',
                    'font-size': '16px',
                    'font-weight': common.font_weight_medium
                },

                ' .pe-slider__track-part': [
                    flex.flex(),
                    mixin.vendorize({
                        'user-select': 'none'
                    }, common.prefixes_user_select),
                    {
                        height: config.bar_height + 'px',
                        margin: ((config.track_height - config.bar_height) / 2) + 'px 0px',
                        overflow: 'hidden' // Firefox otherwise uses 6x at 0%
                    }
                ],

                ' .pe-slider__track-value, .pe-slider__track-rest': flex.layoutHorizontal,

                ' .pe-slider__track-bar': [
                    flex.flex(),
                    {
                        position: 'relative',
                        overflow: 'hidden'
                    }
                ],
                ' .pe-slider__track-bar-value': [
                    flex.flex(),
                    mixin.defaultTransition('transform, background-color', config.animation_duration), {
                        height: config.bar_height + 'px'
                    }
                ],
                ' .pe-slider__track-value .pe-slider__track-bar': {
                    'margin-left': barOffset + 'px'
                },
                ' .pe-slider__track-rest .pe-slider__track-bar': {
                    'margin-right': barOffset + 'px'
                },

                ' .pe-slider__ticks': [
                    flex.layoutJustified,
                    mixin.vendorize({
                        'user-select': 'none'
                    }, common.prefixes_user_select), {
                        position: 'absolute',
                        width: 'calc(100% - ' + (2 * stepsOffset) + 'px)',
                        height: config.bar_height + 'px',
                        left: 0,
                        top: ((config.height / 2) - 1) + 'px',
                        margin: '0 ' + stepsOffset + 'px',
                        'pointer-events': 'none'
                    }
                ],

                ' .pe-slider__ticks-tick': {
                    width: config.step_width + 'px',
                    height: config.bar_height + 'px'
                },

                ' .pe-slider__pin': [
                    mixin.vendorize({
                        'transform': 'translateZ(0) scale(0) translate(0, 0)'
                    }, common.prefixes_transform),
                    mixin.vendorize({
                        'transform-origin': 'bottom'
                    }, common.prefixes_transform),
                    mixin.defaultTransition('transform', '.11s'), {
                        position: 'absolute',
                        'z-index': 1,
                        width: config.pin_width + 'px',
                        height: 0,
                        left: 0, // set in js
                        top: 0,
                        'margin': '0 ' + stepsOffset + 'px 0 ' + (stepsOffset - config.pin_width/2 + 1) + 'px',
                        'pointer-events': 'none',

                        '&::before': [
                            mixin.vendorize({
                                'transform': 'rotate(-45deg)'
                            }, common.prefixes_transform), {
                                content: '" "',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: config.pin_width + 'px',
                                height: config.pin_width + 'px',
                                'border-radius': '50% 50% 50% 0',
                                'background-color': 'inherit'
                            }
                        ],
                        '&::after': {
                            content: 'attr(value)',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: config.pin_width + 'px',
                            height: config.pin_height + 'px',
                            'text-align': 'center',
                            color: '#fff',
                            'font-size': config.pin_font_size + 'px',
                            'line-height': config.pin_width + 'px'
                        }
                    }
                ],

                '&.pe-slider--active:not(.pe-slider--ticks)': {
                    ' .pe-slider__control': [
                        mixin.vendorize({
                            'transform': 'scale(' + config.active_thumb_scale + ')'
                        }, common.prefixes_transform),
                        {
                            'border-width': scaledBorderWidth + 'px'
                        }
                    ],
                    // left side
                    ' .pe-slider__track-value .pe-slider__track-bar-value': [
                        mixin.vendorize({
                            'transform': 'translateX(' + (-scaledThumbDiff) + 'px)'
                        }, common.prefixes_transform)
                    ],
                    // right side
                    ' .pe-slider__track-rest .pe-slider__track-bar-value': [
                        mixin.vendorize({
                            'transform': 'translateX(' + (scaledThumbDiff) + 'px)'
                        }, common.prefixes_transform)
                    ]
                },

                '&.pe-slider--pin.pe-slider--active, &.pe-slider--pin.pe-slider--focus': {
                    ' .pe-slider__pin': [
                        mixin.vendorize({
                            'transform': 'translateZ(0) scale(1) translate(0, -24px)'
                        }, common.prefixes_transform)
                    ],
                    ' .pe-slider__control': [
                        mixin.vendorize({
                            'transform': 'scale(' + config.active_pin_thumb_scale + ')'
                        }, common.prefixes_transform)
                    ]
                },

                '&:not(.pe-slider--disabled)': {
                    ' .pe-slider__control': {
                        cursor: 'pointer'
                    },
                    '&.pe-slider--track': {
                        ' .pe-slider__track': {
                            cursor: 'pointer'
                        }
                    }
                },

                '&.pe-slider--disabled': {
                    ' .pe-slider__control': [
                        mixin.vendorize({
                            'transform': 'scale(' + config.disabled_thumb_scale + ')'
                        }, common.prefixes_transform), {
                            'border-width': 0
                        }
                    ],
                    '&.pe-slider--min': {
                        ' .pe-slider__control:after': [
                            positionBorder(thumbSize, 1 / config.disabled_thumb_scale * config.thumb_border_width)
                        ]
                    }
                }
            }
        ]
    }];
};

export default (config) => (mixin.createStyles(config, createStyles));
