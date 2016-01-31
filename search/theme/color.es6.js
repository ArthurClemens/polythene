import mixin from 'polythene/common/mixin';

const style = (config, tint, scope = '') => {
    return [{
        [scope + '.pe-search']: {
            'background-color': config['color_' + tint + '_background'],

            ' .pe-textfield__label': {
                color: config['color_' + tint + '_label_text']
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
