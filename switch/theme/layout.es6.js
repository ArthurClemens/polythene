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
    const knobSize = Math.round(0.5 * config.thumb_size * factor) * 2; // round to even
    const focusRingSize = Math.max(size * 2, 48);
    const scaledTrackHeight = Math.round(0.5 * config.track_height * factor) * 2; // round to even
    const scaledTrackWidth = Math.round(0.5 * config.track_length * factor) * 2;
    const scaledThumbSize = Math.round(0.5 * config.thumb_size * factor) * 2;

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
            top: ((config.label_height * factor - scaledTrackHeight) / 2) + 'px',
            'border-radius': scaledTrackHeight + 'px'
        },
        ' .pe-control--switch__thumb': {
            width: scaledThumbSize + 'px',
            height: scaledThumbSize + 'px',
            top: ((config.label_height * factor - scaledThumbSize) / 2) + 'px'
        },
        ' .pe-control--switch__knob': {
            height: knobSize + 'px',
            width: knobSize + 'px'
        },
        ' .pe-control--switch__hitarea': {
            width: focusRingSize + 'px',
            height: focusRingSize + 'px',
            left: -((focusRingSize - knobSize) / 2) + 'px',
            top: -((focusRingSize - knobSize) / 2) + 'px'
        },
        '&.pe-control--on': {
            ' .pe-control--switch__thumb': {
                left: (scaledTrackWidth + 1 - scaledThumbSize) + 'px'
            }
        }
    };
};

const createStyles = (config) => {
    return [selectionControlStyle(config, '.pe-control--switch', 'checkbox'), {
        '.pe-control--switch': {

            ' .pe-control--switch__track': [
                transition(config, 'background, opacity'), {
                    position: 'absolute',
                    left: 0
                }
            ],

            ' .pe-control--switch__thumb': [
                transition(config, 'left, color'), {
                    position: 'absolute',
                    left: 0,
                    color: 'inherit'
                }
            ],

            ' .pe-control--switch__knob': {
                'border-radius': '50%',
                position: 'absolute',
                'z-index': 1
            },

            ' .pe-control--switch__hitarea': {
                position: 'absolute',
                'border-radius': '50%'
            },

            '&:not(.pe-control--disabled)': {
                ' .pe-control--switch__track, .pe-control--switch__thumb': {
                    cursor: 'pointer'
                }
            },

            '&.pe-control--small': customSize(config, common.unit_icon_size_small),
            '&.pe-control--regular': customSize(config, common.unit_icon_size),
            '&.pe-control--medium': customSize(config, common.unit_icon_size_medium),
            '&.pe-control--large': customSize(config, common.unit_icon_size_large)
        }
    }];
};

export default (config) => (mixin.createStyles(config, createStyles));
