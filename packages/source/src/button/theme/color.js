
const style = (config, tint, type, scope = '') => {
    const normalBorder = config['color_' + tint + '_' + type + '_normal_border'] || 'transparent';
    const activeBorder = config['color_' + tint + '_' + type + '_active_border'] || normalBorder;
    const disabledBorder = config['color_' + tint + '_' + type + '_disabled_border'] || normalBorder;
    return [{
        [scope + '.pe-button']: {
            '&, &:link, &:visited': {
                color: config['color_' + tint + '_' + type + '_normal_text']
            },

            ' .pe-button__content': {
                'background-color': config['color_' + tint + '_' + type + '_normal_background'],
                'border-color': normalBorder
            },

            '&.pe-button--disabled': {
                color: config['color_' + tint + '_' + type + '_disabled_text'],

                ' .pe-button__content': {
                    'background-color': config['color_' + tint + '_' + type + '_disabled_background'],
                    'border-color': disabledBorder
                }
            },

            '&.pe-button--selected': {
                ' .pe-button__content': {
                    'background-color': config['color_' + tint + '_' + type + '_active_background'],
                    'border-color': activeBorder
                },
                ' .pe-button__focus': {
                    opacity: 1,
                    'background-color': config['color_' + tint + '_' + type + '_focus_background']
                }
            },

            '&.pe-button--focus': {
                ' .pe-button__focus': {
                    opacity: 1,
                    'background-color': config['color_' + tint + '_' + type + '_focus_background']
                }
            }
        }
    }];
};

const noTouch = (config, tint, type, scope = '') => {
    const normalBorder = config['color_' + tint + '_' + type + '_normal_border'];
    const hoverBorder = config['color_' + tint + '_' + type + '_normal_border'] || normalBorder;
    return [{
        [scope + '.pe-button:hover']: {
            '&:not(.pe-button--selected) .pe-button__wash': {
                'background-color': config['color_' + tint + '_' + type + '_hover_background'],
                'border-color': hoverBorder
            }
        }
    }];
};

export default (selector, config) => [
    style(config, 'light', 'flat'),
    style(config, 'light', 'raised', '.pe-button--raised'),
    {
        'html.pe-no-touch': [
            noTouch(config, 'light', 'flat', ' '),
            noTouch(config, 'light', 'raised', ' .pe-button--raised')
        ]
    },
    {
        '.pe-dark-theme': [
            // inside dark theme
            style(config, 'dark', 'flat', ' '),
            // has dark theme
            style(config, 'dark', 'flat', '&'),
            //
            style(config, 'dark', 'raised', ' .pe-button--raised')
        ]
    },
    {
        'html.pe-no-touch .pe-dark-theme': [
            noTouch(config, 'dark', 'flat', ' '),
            noTouch(config, 'dark', 'flat', '&'),
            noTouch(config, 'dark', 'raised', ' .pe-button--raised')
        ]
    }
];
