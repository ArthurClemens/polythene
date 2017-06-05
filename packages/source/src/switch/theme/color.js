import mixin from '../../common/mixin';
import selectionControlStyle from '../../selection-control/theme/color';

const style = (config, tint, scope = '') => {
    return [
        selectionControlStyle(config, tint, scope),
        {
            [scope + '.pe-control--switch']: {

                '&.pe-control--off': {
                    ' .pe-control--switch__track': {
                        opacity: config['color_' + tint + '_track_off_opacity'],
                        'background-color': config['color_' + tint + '_track_off']
                    },
                    ' .pe-control--switch__thumb': {
                        color: config['color_' + tint + '_thumb_off']
                    },
                    ' .pe-control--switch__knob': {
                        'background-color': 'currentcolor'
                    },
                    ' .pe-button--focus': {
                        ' .pe-button__focus': {
                            opacity: config['color_' + tint + '_focus_off_opacity'],
                            'background-color': config['color_' + tint + '_focus_off']
                        }
                    }
                },

                '&.pe-control--on': {
                    ' .pe-control--switch__track': {
                        opacity: config['color_' + tint + '_track_on_opacity'],
                        'background-color': config['color_' + tint + '_track_on']
                    },
                    ' .pe-control--switch__thumb': {
                        color: config['color_' + tint + '_thumb_on']
                    },
                    ' .pe-control--switch__knob': {
                        'background-color': 'currentcolor'
                    },
                    ' .pe-button--focus': {
                        ' .pe-button__focus': {
                            opacity: config['color_' + tint + '_focus_on_opacity'],
                            'background-color': config['color_' + tint + '_focus_on']   
                        }
                    }
                },

                '&.pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled': {
                    ' .pe-control--switch__track': {
                        opacity: config['color_' + tint + '_track_disabled_opacity'],
                        'background-color': config['color_' + tint + '_track_disabled']
                    },
                    ' .pe-control--switch__thumb': {
                        color: config['color_' + tint + '_thumb_disabled']
                    },
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

export default config => mixin.createStyles(config, createStyles);
