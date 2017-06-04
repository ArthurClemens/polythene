import mixin from '../../common/mixin';

const style = (config, tint, scope = '') => {
    return [{
        [scope + '.pe-toolbar']: {
            color: config['color_' + tint + '_text']
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
