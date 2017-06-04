import mixin from '../../common/mixin';

const style = (config, tint, scope = '') => {
    return [{
        [scope + '.pe-list']: {
            '&.pe-list--borders': {
                ' .pe-list-tile:not(.pe-list__header)': {
                    '&:not(:last-child)': {
                        'border-color': config['color_' + tint + '_border']
                    }
                }
            },

            '&.pe-list--borders-indented': {
                ' .pe-list-tile:not(.pe-list__header)': {
                    ' .pe-list-tile__content:not(.pe-list-tile__content--front)': {
                        'border-color': config['color_' + tint + '_border']
                    }
                }
            }
        },
        ' .pe-list + .pe-list': {
            'border-color': config['color_' + tint + '_border']
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
