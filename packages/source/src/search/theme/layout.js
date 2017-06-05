import common from '../../config/config';
import mixin from '../../common/mixin';
import flex from '../../layout/theme/flex';

const createStyles = (config) => {
    const inset_input_padding_v = ((config.inset_height - config.line_height_input) / 2);
    const fullwidth_input_padding_v = ((config.fullwidth_height - config.line_height_input) / 2);
    const fullwidth_input_indent = (common.unit_indent - config.fullwidth_side_padding) - common.grid_unit_icon_button;

    return [{
        '.pe-search': [
            flex.flex(),
            {
                position: 'relative', // necessary when a shadow is added

                ' .pe-textfield': [
                    flex.flex(),
                    {
                        padding: 0,
                        // prevent that neighboring icon button with ripple hides the cursor
                        position: 'relative',
                        'z-index': 1
                    }
                ],

                ' .pe-textfield__input-area': {
                    padding: 0,
                    flexGrow: 1,

                    '&:after': {
                        display: 'none'
                    }
                },

                ' .pe-textfield__input, .pe-textfield__label': {
                    'font-size': config.font_size_input + 'px',
                    'line-height': config.line_height_input + 'px'
                },

                ' .pe-textfield__input': {
                    // reset
                    border: 'none'
                },

                ' .pe-textfield__label': {
                    // reset
                    top: 0,
                    bottom: 0
                },

                ' .pe-search__content': {
                    '&, .pe-textfield': flex.layoutHorizontal
                },

                ' .pe-search__content > *': flex.layoutVertical,

                ' .pe-button--icon': flex.selfCenter,

                '&.pe-search--inset': {
                    'border-radius': config.inset_border_radius + 'px',
                    padding: '0 ' + config.inset_side_padding + 'px',

                    '&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label': {
                        height: config.inset_height + 'px'
                    },
                    ' .pe-textfield__input, .pe-textfield__label': {
                        'padding-top': inset_input_padding_v + 'px',
                        'padding-bottom': inset_input_padding_v + 'px',
                        'padding-left': config.inset_input_indent + 'px',
                        'padding-right': config.inset_input_right_padding + 'px'
                    }
                },

                '&.pe-search--fullwidth': {
                    'border-radius': config.fullwidth_border_radius + 'px',
                    padding: '0 ' + config.fullwidth_side_padding + 'px',

                    '&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label': {
                        height: config.fullwidth_height + 'px'
                    },
                    ' .pe-textfield__input, .pe-textfield__label': {
                        'padding-top': fullwidth_input_padding_v + 'px',
                        'padding-bottom': fullwidth_input_padding_v + 'px',
                        'padding-left': fullwidth_input_indent + 'px',
                        'padding-right': config.fullwidth_input_right_padding + 'px'
                    }
                }
            }
        ]
    }];
};

export default (config) => (mixin.createStyles(config, createStyles));
