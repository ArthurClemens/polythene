
// Returns a style function to be used by checkbox and radio-button

import common from 'polythene/config/config';
import mixin from 'polythene/common/mixin';
import flex from 'polythene/layout/theme/flex';

const getSize = (height, iconSize = common.unit_icon_size) => ({
    ' .pe-control__label': {
        height: height + 'px'
    },
    ' .pe-control__box': {
        width: iconSize + 'px',
        height: iconSize + 'px'
    }
});

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
                    color: 'inherit'
                }
            ],

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
                color: 'inherit'
            },

            ' .pe-control__button': [
                mixin.defaultAnimation('opacity', config.animation_duration),
                {
                    position: 'absolute',
                    left: -((config.button_size - config.icon_size)/2) + 'px',
                    top: -((config.button_size - config.icon_size)/2) + 'px',
                    'z-index': 1,
                    opacity: 0,
                    'pointer-events': 'auto'
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

            '&.pe-control--small': getSize(common.unit_icon_size_small, common.unit_icon_size_small),
            '&.pe-control--regular': getSize(config.label_height, common.unit_icon_size),
            '&.pe-control--medium': getSize(common.unit_icon_size_medium, common.unit_icon_size_medium),
            '&.pe-control--large': getSize(common.unit_icon_size_large, common.unit_icon_size_large)
        }
    }];
};

export default createStyles;
