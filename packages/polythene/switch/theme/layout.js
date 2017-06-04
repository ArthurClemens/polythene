import common from '../../config/config';
import mixin from '../../common/mixin';
import selectionControlStyle from '../../selection-control/theme/layout';

var transition = function transition(config, properties) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : config.animation_duration;

    return [mixin.defaultTransition(properties, duration, 'ease-out')];
};

var customSize = function customSize(config, size) {
    var factor = size / common.unit_icon_size;
    var thumbSize = Math.floor(0.5 * config.thumb_size * factor) * 2; // round to even
    var scaledTrackHeight = Math.floor(0.5 * config.track_height * factor) * 2; // round to even
    var scaledTrackWidth = Math.floor(0.5 * config.track_length * factor) * 2;
    var scaledThumbSize = Math.floor(0.5 * config.thumb_size * factor) * 2;
    var trackTop = (config.label_height * factor - scaledTrackHeight) / 2;
    var thumbPadding = config.icon_button_padding;
    var thumbMargin = (size - scaledThumbSize) / 2;
    var thumbOuterSize = size + 2 * thumbPadding;
    var thumbOffsetMin = -(thumbOuterSize / 2) + thumbSize / 2;
    var thumbOffsetMax = thumbOffsetMin + scaledTrackWidth - thumbSize;
    var thumbOffsetY = thumbOffsetMin + thumbMargin;
    var trackVisualOffset = 0.3; // prevent sub pixel of track to shine through knob border

    return {
        ' .pe-control__label': {
            height: size + 'px',
            'min-width': scaledTrackWidth + 'px',

            ' span': {
                'padding-left': config.padding * factor + 8 + scaledTrackWidth + 'px'
            }
        },
        ' .pe-control--switch__track': {
            left: trackVisualOffset + 'px',
            height: scaledTrackHeight + 'px',
            width: scaledTrackWidth - 2 * trackVisualOffset + 'px',
            top: trackTop + 'px',
            'border-radius': scaledTrackHeight + 'px'
        },
        ' .pe-control--switch__thumb': {
            top: thumbOffsetY + 'px',
            left: thumbOffsetMin + 'px',
            'z-index': 1
        },

        ' .pe-control--switch__knob': {
            position: 'relative',
            width: scaledThumbSize + 'px',
            height: scaledThumbSize + 'px',
            'border-radius': '50%',
            margin: thumbMargin + 'px'
        },

        ' .pe-button__label': {
            ' .pe-control--switch__knob': {
                ' .pe-icon': [mixin.fit(), {
                    width: '100%',
                    height: '100%'
                }]
            }
        },

        '&.pe-control--on': {
            ' .pe-control--switch__thumb': {
                left: thumbOffsetMax + 'px'
            }
        }
    };
};

var createStyles = function createStyles(config) {
    return [selectionControlStyle(config, '.pe-control--switch', 'checkbox'), {
        '.pe-control--switch': {

            ' .pe-control--switch__track': [transition(config, 'background, opacity'), {
                position: 'absolute',
                left: 0
            }],

            ' .pe-control--switch__thumb': [transition(config, 'left, color'), {
                position: 'absolute',
                color: 'inherit',

                ':focus': {
                    outline: 0
                }
            }],

            ' .pe-button__focus': [transition(config, 'all')],

            '&.pe-control--small': customSize(config, common.unit_icon_size_small),
            '&.pe-control--regular': customSize(config, common.unit_icon_size),
            '&.pe-control--medium': customSize(config, common.unit_icon_size_medium),
            '&.pe-control--large': customSize(config, common.unit_icon_size_large)
        }
    }];
};

export default (function (config) {
    return mixin.createStyles(config, createStyles);
});