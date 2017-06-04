import mixin from '../../common/mixin';

const style = (config, tint, scope = '') => {
    return [{
        [scope + '.pe-slider']: {

            color: config['color_' + tint + '_thumb_on'], // override by specifying 'color'

            ' .pe-slider__control': {
                background: config['color_' + tint + '_thumb_off'],

                '&:after': {
                    'border-color': 'transparent'
                }
            },
            ' .pe-slider__track-bar-value': {
                background: config['color_' + tint + '_track_inactive']
            },

            ' .pe-slider__ticks-tick': {
                background: config['color_' + tint + '_tick']
            },

            ' .pe-slider__pin': {
                'background-color': 'currentcolor'
            },

            ' > .pe-icon': {
                color: config['color_' + tint + '_disabled_icon']
            },

            ' .pe-slider__label': {
                color: config['color_' + tint + '_disabled_label']
            },

            // states

            '&.pe-slider--active': {
                ' .pe-slider__track-bar-value': {
                    background: config['color_' + tint + '_track_active']
                },
            },

            '&:not(.pe-slider--disabled)': {
                ' .pe-slider__control': {
                    background: 'currentcolor',

                    '&:before': {
                        opacity: config['color_' + tint + '_thumb_off_focus_opacity']
                    }
                },
                ' .pe-slider__track-value .pe-slider__track-bar-value': {
                    background: 'currentcolor'
                },
                '&.pe-slider--focus.pe-slider--min:not(.pe-slider--pin) .pe-slider__control:before,\
                &.pe-slider--min:not(.pe-slider--pin) .pe-slider__control:focus:before': {
                    'background-color': config['color_' + tint + '_thumb_off_focus']
                },
                '&.pe-slider--focus:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:before,\
                &:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:focus:before': {
                    'background-color': 'currentcolor',
                    opacity: config['color_' + tint + '_thumb_on_focus_opacity']
                },
                ' > .pe-icon': {
                    color: config['color_' + tint + '_icon']
                },
                ' .pe-slider__label': {
                    color: config['color_' + tint + '_label']
                }
            },
            '&.pe-slider--min:not(.pe-slider--disabled)': {
                ' .pe-slider__control': {
                    'background-color': 'transparent'
                },
                ' .pe-slider__thumb': {
                    'opacity': 0
                },
                ' .pe-slider__control:after': {
                    'border-color': config['color_' + tint + '_track_inactive']
                },
                '&.pe-slider--active .pe-slider__control:after': {
                    'border-color': config['color_' + tint + '_track_active']
                },
                '&.pe-slider--ticks': {
                    ' .pe-slider__control': {
                        'background-color': config['color_' + tint + '_tick']
                    },
                    ' .pe-slider__control:after': {
                        'border-color': 'transparent'
                    }
                },
                ' .pe-slider__pin': {
                    'background-color': config['color_' + tint + '_track_inactive']
                }
            }
        }
    }];
};

const createStyles = (config) => {
    return [
        style(config, 'light'),
        {
            '.pe-dark-theme': [
                // inside dark theme
                style(config, 'dark', ' '),
                // has dark theme
                style(config, 'dark', '&')
            ]
        }
    ];
};

export default (config) => (mixin.createStyles(config, createStyles));
