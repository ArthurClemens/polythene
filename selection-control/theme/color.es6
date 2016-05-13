
// Returns a style function to be used by checkbox and radio-button

const style = (config, tint, scope = '') => {
    return [{
        [scope + '.pe-control']: {
            color: config['color_' + tint + '_on_text'], // override by specifying 'color'

            ' .pe-control__label': {
                ' span': {
                    color: config['color_' + tint + '_label_text']
                }
            },
            ' .pe-control__box': {
                ' .pe-control__button': {
                    '&, .pe-icon': {
                        color: 'currentcolor'
                    },

                    '&.pe-control__button--off': {
                        color: config['color_' + tint + '_off_icon']
                    }
                },
                ':focus:before': {
                    'background-color': 'currentcolor',
                    opacity: config['color_' + tint + '_thumb_on_focus_opacity']
                }
            },

            '&.pe-control--disabled': {
                ' .pe-control__label span': {
                    color: config['color_' + tint + '_disabled_text']
                },
                ' .pe-control__box .pe-control__button': {
                    '&, &.pe-control__button--off': {
                        color: config['color_' + tint + '_disabled_text']
                    }
                }
            }
        }
    }];
};

export default style;
