
// Returns a style function to be used by checkbox and radio-button

import common from '../../config/config';
import mixin from '../../common/mixin';
import flex from '../../layout/theme/flex';

const getSize = (config, height, iconSize = common.unit_icon_size) => {
    const labelSize = iconSize + 2 * config.label_padding;
    const iconOffset = (labelSize - iconSize) / 2;
    return {
        ' .pe-control__label': {
            height: height + 'px'
        },
        ' .pe-control__box': {
            width: iconSize + 'px',
            height: iconSize + 'px'
        },
        ' .pe-button__label': {
            width: labelSize + 'px',
            height: labelSize + 'px',

            ' .pe-icon': [
                mixin.fit(iconOffset)
            ]
        }
    };
};

const activeButton = () => ({
    opacity: 1,
    'z-index': 1
});

const inactiveButton = () => ({
    opacity: 0,
    'z-index': 0
});

const createStyles = (config, className, type) => {
    return [{
        '.pe-control': {
            display: 'inline-block',
            'box-sizing': 'border-box',
            margin: 0,
            padding: 0,

            ' .pe-control__label': [
                flex.layoutHorizontal,
                flex.layoutCenter,
                {
                    position: 'relative',
                    cursor: 'pointer',
                    'font-size': config.label_font_size + 'px',
                    'line-height': config.label_height + 'px',
                    margin: 0,
                    color: 'inherit',

                    ':focus': {
                        outline: 0
                    },
                }
            ],

            '&.pe-control--inactive': {
                ' .pe-control__label': {
                    cursor: 'default'
                }
            },

            [' input[type=' + type + '].pe-control__input']: [
                mixin.vendorize({
                    'appearance': 'none'
                }, common.prefixes_appearance), {
                    'line-height': config.label_height + 'px',
                    // Hide input element
                    position: 'absolute',
                    'z-index': '-1',
                    width: 0,
                    height: 0,
                    margin: 0,
                    padding: 0,
                    opacity: 0,
                    border: 'none',
                    'pointer-events': 'none'
                }
            ],

            ' .pe-control__box': {
                position: 'relative',
                display: 'inline-block',
                'box-sizing': 'border-box',
                width: config.label_height + 'px',
                height: config.label_height + 'px',
                color: 'inherit',

                ':focus': {
                    outline: 0,
                }
            },

            ' .pe-control__button': [
                mixin.defaultTransition('opacity', config.animation_duration),
                {
                    position: 'absolute',
                    left: -((config.button_size - config.icon_size)/2) + 'px',
                    top: -((config.button_size - config.icon_size)/2) + 'px',
                    'z-index': 1
                    // opacity: 0,
                    // 'pointer-events': 'auto'
                }
            ],

            '&.pe-control--off': {
                ' .pe-control__button--on': inactiveButton(),
                ' .pe-control__button--off': activeButton()
            },

            '&.pe-control--on': {
                ' .pe-control__button--on': activeButton(),
                ' .pe-control__button--off': inactiveButton()
            },

            ' .pe-control__label span': {
                'padding-left': config.padding + 'px',
                'padding-right': config.padding + 'px'
            },

            '&.pe-control--disabled': {
                ' .pe-control__label': {
                    cursor: 'auto'
                },
                ' .pe-control__button': {
                    'pointer-events': 'none'
                }
            },

            ' .pe-button__label': {
                ' .pe-icon': {
                    position: 'absolute'
                }
            },

            '&.pe-control--small': getSize(config, common.unit_icon_size_small, common.unit_icon_size_small),
            '&.pe-control--regular': getSize(config, config.label_height, common.unit_icon_size),
            '&.pe-control--medium': getSize(config, common.unit_icon_size_medium, common.unit_icon_size_medium),
            '&.pe-control--large': getSize(config, common.unit_icon_size_large, common.unit_icon_size_large)
        }
    }];
};

export default createStyles;
