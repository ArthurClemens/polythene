import mixin from 'polythene/common/mixin';
import selectionControlStyle from 'polythene/selection-control/theme/color';

const style = (config, tint, scope = '') => {
    return [
        selectionControlStyle(config, tint, scope),
        {
            [scope + '.pe-control--switch']: {
                ' .pe-control--switch__knob': {
                    'background-color': 'currentcolor'
                },

                ' .pe-control--switch__hitarea--transparent': {
                    opacity: 0
                },

                '&.pe-control--on': {
                    ' .pe-control--switch__track': {
                        opacity: config['color_' + tint + '_track_on_opacity'],
                        'background-color': config['color_' + tint + '_track_on']
                    },
                    ' .pe-control--switch__thumb': {
                        color: config['color_' + tint + '_thumb_on']
                    },

                    ' .pe-control--switch__thumb:active, .pe-control--switch__track:active': {
                        ' .pe-button__wash:not(.pe-control--switch__knob-hitarea)': {
                            opacity: config['color_' + tint + '_wash_on_opacity'],
                            'background-color': config['color_' + tint + '_wash_on']
                        }
                    }
                },

                ' .pe-control--switch__thumb:active, .pe-control--switch__track:active': {
                    ' .pe-control--switch__hitarea:not(.pe-control--switch__hitarea--transparent)': {
                        opacity: config['color_' + tint + '_wash_off_opacity'],
                        'background-color': config['color_' + tint + '_wash_off']
                    }
                },
                
                '&.pe-control--off': {
                    ' .pe-control--switch__track': {
                        opacity: config['color_' + tint + '_track_off_opacity'],
                        'background-color': config['color_' + tint + '_track_off']
                    },
                    ' .pe-control--switch__thumb': {
                        color: config['color_' + tint + '_thumb_off']
                    }
                },

                '&.pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled': {
                    ' .pe-control--switch__track': {
                        opacity: config['color_' + tint + '_track_disabled_opacity'],
                        'background-color': config['color_' + tint + '_track_disabled']
                    },
                    ' .pe-control--switch__thumb .pe-control--switch__knob': {
                        'background-color': config['color_' + tint + '_thumb_disabled']
                    }
                }
            }
        }
    ];
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
