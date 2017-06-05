import mixin from '../../common/mixin';

const style = (config, tint, scope = '') => {
    return [{
        [scope + '.pe-tabs']: {
            ' .pe-tabs__tab.pe-button--selected': {
                color: config['color_' + tint + '_selected_text'],

                ' .pe-button__content': {
                    background: config['color_' + tint + '_selected_background']
                }
            },
            ' .pe-tabs__tab:not(.pe-button--selected) .pe-icon': {
                color: config['color_' + tint + '_icon']
            },
            ' .pe-tabs__indicator': {
                'background-color': config['color_' + tint + '_tab_indicator']
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

export default config => mixin.createStyles(config, createStyles);
