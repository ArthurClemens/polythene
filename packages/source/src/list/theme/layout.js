import mixin from '../../common/mixin';

const borderStyle = (config) => {
    return mixin.hairline('border-bottom'), {
        'border-style': 'none none solid none',
        'border-width': config.border_width_bordered + 'px'
    };
};

const createStyles = (config) => {
    return [{
        '.pe-list': {
            padding: config.padding + 'px 0',

            '&.pe-list--header': {
                'padding-top': 0
            },

            '&.pe-list--compact': {
                padding: config.padding_compact + 'px 0',
            },

            '& + &': [
                mixin.hairline('border-top'), {
                    'border-style': 'solid none none none',
                    'border-width': config.border_width_stacked + 'px'
                }
            ],

            '&.pe-list--borders': {
                ' .pe-list-tile:not(.pe-list__header)': {
                    '&:not(:last-child)': {
                        '&': borderStyle(config)
                    }
                }
            },

            '&.pe-list--borders-indented': {
                'border-top': 'none',

                ' .pe-list-tile:not(.pe-list__header)': {
                    '&:not(:last-child)': {
                        ' .pe-list-tile__content:not(.pe-list-tile__content--front)': borderStyle(config)
                    }
                }
            }
        }
    }];
};

export default (config) => (mixin.createStyles(config, createStyles));
