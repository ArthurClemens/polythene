import mixin from '../../common/mixin';

const style = (config, tint, scope = '') => {
    return [{
        [scope + '.pe-dialog']: {
            '&.pe-dialog--backdrop': {
                'background-color': config['color_' + tint + '_backdrop_background']
            },
            ' .pe-dialog__content': {
                'background-color': config['color_' + tint + '_content_background']
            },
            ' .pe-dialog__header .pe-dialog__title': {
                'color': config['color_' + tint + '_title_text']
            },
            ' .pe-dialog__body': {
                'color': config['color_' + tint + '_body_text']
            },
            '&.pe-dialog--overflow-top .pe-dialog__body': {
                'border-top-color': config['color_' + tint + '_body_border']
            },
            '&.pe-dialog--overflow-bottom .pe-dialog__body': {
                'border-bottom-color': config['color_' + tint + '_body_border']
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
