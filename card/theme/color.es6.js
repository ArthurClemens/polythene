import mixin from 'polythene/common/mixin';

const style = (config, tint, scope = '') => {
    return [{
        [scope + '.pe-card']: {
            'background-color': config['color_' + tint + '_main_background']
        }
    }];
};

const content = (config, tint, scope = '') => {
    return [{
        [scope]: {
            ' .pe-card__title, .pe-list-tile__title': {
                'color': config['color_' + tint + '_title_text']
            },
            ' .pe-card__subtitle, .pe-list-tile__subtitle': {
                'color': config['color_' + tint + '_subtitle_text']
            },
            ' .pe-card__text': {
                'color': config['color_' + tint + '_text']
            },
            ' .pe-card__actions--borders': [
                mixin.hairline('border-top'), {
                    'border-top': '1px solid ' + config['color_' + tint + '_actions_border']
                }
            ]
        }
    }];
};

const overlay = (config, tint, scope = '') => {
    return [{
        [scope + '.pe-card__overlay--sheet']: {
            ' .pe-card__overlay__content': {
                'background-color': config['color_' + tint + '_overlay_background']
            }
        }
    }];
};

const createStyles = (config) => {
    return [
        style(config, 'light'),
        content(config, 'light', '.pe-card'),
        overlay(config, 'light'),
        {
            '.pe-dark-theme': [
                // inside dark theme
                style(config, 'dark', ' '),
                content(config, 'dark', ' '),
                overlay(config, 'dark', ' ')
            ]
        },
        // is dark theme
        style(config, 'dark', '.pe-dark-theme'),
        overlay(config, 'dark', '.pe-dark-theme '),
        content(config, 'dark', '.pe-card.pe-dark-theme')
    ];
};

export default (config) => (mixin.createStyles(config, createStyles));
