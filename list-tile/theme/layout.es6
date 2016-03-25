import common from 'polythene/config/config';
import mixin from 'polythene/common/mixin';
import flex from 'polythene/layout/theme/flex';

const paddingH = (h) => ({
    'padding-left': h + 'px',
    'padding-right': h + 'px'
});

const paddingV = (top, bottom) => ({
    'padding-top': top + 'px',
    'padding-bottom': (bottom || top) + 'px'
});

const createStyles = (config) => {
    return [{
        '.pe-list-tile': [
            flex.layout,
            {
                position: 'relative',
                overflow: 'hidden',

                '&.pe-list-tile--sticky': mixin.sticky(),

                ' .pe-list-tile__primary, .pe-list-tile__secondary': [
                    flex.layoutHorizontal,
                    {
                        ' a&': {
                            'text-decoration': 'none',
                            color: 'inherit',
                            border: 'none'
                        }
                    }
                ],

                ' .pe-list-tile__primary': [
                    flex.flex(),
                    {
                        position: 'relative',

                        ' .pe-list-tile__content:not(.pe-list-tile__content--front)': [
                            flex.flex(),
                            paddingV(config.padding, config.padding + 1)
                        ]
                    }
                ],

                ' .pe-list-tile__secondary': {
                    'text-align': 'right',
                    'font-size': config.font_size_title + 'px'
                },

                ' .pe-list-tile__content': [
                    flex.layoutVertical,
                    flex.selfCenter,
                    paddingH(config.side_padding),
                    {
                        '&.pe-list-tile__content--front': [
                            paddingV(config.padding - 5),
                            {
                                width: config.front_item_width + 'px'
                            }
                        ],

                        ' small': {
                            'font-size': config.font_size_small + 'px'
                        }
                    }
                ],

                ' .pe-list-tile__content--front + .pe-list-tile__content': {
                    'padding-left': 0
                },

                ' .pe-list-tile__title': [
                    mixin.ellipsis(1, config.single_line_height),
                    {
                        'font-size': config.font_size_title + 'px',
                        'font-weight': common.font_weight_normal,
                        'line-height': config.single_line_height + 'px'
                    }
                ],

                ' .pe-list-tile__subtitle': [
                    mixin.ellipsis(config.subtitle_line_count, config.line_height_subtitle),
                    {
                        'font-size': config.font_size_subtitle + 'px',
                        'line-height': config.line_height_subtitle + 'px',

                        '&.pe-list-tile__subtitle--high': [
                            mixin.ellipsis(config.high_subtitle_line_count, config.line_height_subtitle),
                            {
                                'white-space': 'normal'
                            }
                        ]
                    }
                ],

                '&.pe-list-tile--selected, &.pe-list-tile--disabled': {
                    cursor: 'default'
                },

                '&.pe-list-tile--subtitle': {
                    ' .pe-list-tile__content': [
                        paddingV(config.has_subtitle_padding, config.has_subtitle_padding + 1),
                        {
                            ' .pe-list-tile__title': {
                                padding: 0
                            }
                        }
                    ]
                },

                '&.pe-list-tile--high-subtitle': {
                    ' .pe-list-tile--high-subtitle .pe-list-tile__secondary': [
                        flex.layoutHorizontal,
                        flex.layoutStart
                    ],
                    ' .pe-list-tile__content': [
                        flex.selfStart,
                        paddingV(config.has_high_subtitle_padding, config.has_high_subtitle_padding + 1),
                        {
                            ' .pe-list-tile__title': {
                                padding: 0
                            }
                        }
                    ]
                },

                // List header
                '&.pe-list__header': {
                    height: config.single_height + 'px',

                    ' .pe-list-tile__content': {
                        'padding-top': 0,
                        'padding-bottom': 0
                    },
                    ' .pe-list-tile__title': [
                        mixin.ellipsis(1, config.single_height),
                        {
                            'font-size': config.font_size_list_header + 'px',
                            'font-weight': common.font_weight_medium,
                            'line-height': config.single_height + 'px',
                            padding: 0
                        }
                    ]
                },

                // Compact list

                ' .pe-list--compact &, &.pe-list-tile--compact': {
                    '&:not(.pe-list__header)': {
                        ' .pe-list-tile__content': paddingV(config.compact_padding, config.compact_padding + 1)
                    }
                },

                // Firefox only
                '@supports (-moz-appearance:none) and (display:contents)': {
                    ' .pe-list-tile__primary, .pe-list-tile__content': {
                        overflow: 'hidden'
                    }
                },

                // Menu

                '.pe-dialog .pe-menu__content &': {
                    ' .pe-list-tile__title': mixin.ellipsis('none')
                },

                '.pe-menu__content &': {
                    '&:not(.pe-list-tile--disabled)': {
                        cursor: 'default',

                        '&, .pe-list-tile__primary, .pe-list-tile__secondary': {
                            ' .pe-list-tile__title, .pe-list-tile__subtitle': [
                                mixin.vendorize({
                                    'user-select': 'none'
                                }, common.prefixes_user_select)
                            ]
                        }
                    }
                },

                // Non-touch

                'html.pe-no-touch .pe-list--hoverable &, html.pe-no-touch .pe-list--selectable &': {
                    '&:not(.pe-list__header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover': {
                        cursor: 'pointer'
                    }
                }
            }
        ]
    }];
};

export default (config) => (mixin.createStyles(config, createStyles));
