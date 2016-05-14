import common from 'polythene/config/config';
import mixin from 'polythene/common/mixin';
import selectionControlStyle from 'polythene/selection-control/theme/layout';

const transition = (config, properties, duration = config.animation_duration) => {
    return [
        mixin.defaultTransition(properties, duration, 'ease-out')
    ];
};

const customSize = (config, size) => {
    const factor = size/common.unit_icon_size;
    const thumbSize = Math.floor(0.5 * config.thumb_size * factor) * 2; // round to even
    const scaledTrackHeight = Math.floor(0.5 * config.track_height * factor) * 2; // round to even
    const scaledTrackWidth = Math.floor(0.5 * config.track_length * factor) * 2;
    const scaledThumbSize = Math.floor(0.5 * config.thumb_size * factor) * 2;
    const trackTop = ((config.label_height * factor - scaledTrackHeight) / 2);
    const trackMin = scaledTrackHeight / 2;
    const trackMax = scaledTrackWidth - scaledTrackHeight / 2;
    const thumbPadding = 12;
    const thumbMargin = (size - scaledThumbSize) / 2;
    const thumbOuterSize = thumbSize + 2 * thumbPadding;
    const thumbOffsetMin = trackMin - thumbOuterSize / 2;
    const thumbOffsetMax = trackMax - thumbOuterSize / 2;
    const thumbOffsetY = trackTop + thumbOffsetMin - thumbMargin;

    return {
        ' .pe-control__label': {
            height: size + 'px',
            'min-width': scaledTrackWidth + 'px',

            ' span': {
                'padding-left': (config.padding * factor + 8 + scaledTrackWidth) + 'px'
            }
        },
        ' .pe-control--switch__track': {
            height: scaledTrackHeight + 'px',
            width: scaledTrackWidth + 'px',
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
                ' .pe-icon': [
                    mixin.fit(),
                    {
                        width: '100%',
                        height: '100%'
                    }
                ]
            }
        },

        '&.pe-control--on': {
            ' .pe-control--switch__thumb': {
                left: thumbOffsetMax + 'px'
            }
        }
    };
};

const createStyles = (config) => {
    return [selectionControlStyle(config, '.pe-control--switch', 'checkbox'), {
        '.pe-control--switch': {

            ' .pe-control--switch__track': [
                transition(config, 'background, opacity'),
                {
                    position: 'absolute',
                    left: 0
                }
            ],

            ' .pe-control--switch__thumb': [
                transition(config, 'left, color'),
                {
                    position: 'absolute',
                    color: 'inherit',

                    ':focus': {
                        outline: 0
                    }
                }
            ],

            ' .pe-button__focus': [
                transition(config, 'all')
            ],

            '&.pe-control--small': customSize(config, common.unit_icon_size_small),
            '&.pe-control--regular': customSize(config, common.unit_icon_size),
            '&.pe-control--medium': customSize(config, common.unit_icon_size_medium),
            '&.pe-control--large': customSize(config, common.unit_icon_size_large)
        }
    }];
};

export default (config) => (mixin.createStyles(config, createStyles));
