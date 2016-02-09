import common from 'polythene/config/config';
import mixin from 'polythene/common/mixin';
import flex from 'polythene/layout/theme/flex';

const createStyles = (config) => {
    return [{
        '.pe-tabs': [
            mixin.vendorize({
                'user-select': 'none'
            }, common.prefixes_user_select),
            mixin.vendorize({
                transform: 'translate3d(0,0,0)'
            }, common.prefixes_transform),
            {
                '-webkit-overflow-scrolling': 'touch',

                '& ::-webkit-scrollbar': {
                    'display': 'none'
                },

                '&.pe-tabs--menu': {
                    // reset sizes to fit within a small space
                    ' .pe-tabs__tab': {
                        height: config.menu_tab_height + 'px',
                    },
                    ' .pe-tabs__tab---icon': {
                        height: config.menu_tab_icon_label_height + 'px',
                    },
                    ' .pe-tabs__tab, .pe-tabs__tab.pe-tabs__tab---icon': {
                        'min-width': 0,
                        height: config.menu_tab_icon_label_height + 'px',

                        ' .pe-button__content': {
                            padding: '0 ' + config.tab_menu_content_padding_v + 'px',
                            height: config.menu_tab_icon_label_height + 'px',

                            ' .pe-icon': {
                                'margin-bottom': 0
                            },
                            ' .pe-button__label': {
                                'font-size': '10px',
                                'line-height': '12px',
                                'text-transform': 'none'
                            },
                        }
                    }
                },

                '&.pe-tabs--scrollable': {
                    // hide scrollbar (this approach is required for Firefox)
                    'max-height': config.tab_height + 'px',
                    '-ms-overflow-style': 'none',

                    ' .pe-tabs__scroll-button': {
                        // default hide, show with html.pe-no-touch
                        display: 'none'
                    },

                    ' .pe-tabs__row': {
                        'margin-bottom': -config.scrollbar_offset + 'px'
                    }
                },

                ' .pe-no-touch &': {
                    '&.pe-tabs--scrollable': {
                        'background-color': 'inherit'
                    },

                    ' .pe-tabs__scroll-button': {
                        position: 'absolute',
                        display: 'block',
                        top: 0,
                        'background-color': 'inherit',
                        'z-index': 3,

                        ' .pe-button__content': {
                            'border-radius': 0,
                            'background-color': 'inherit'
                        },
                        ' .pe-button__label': [
                            mixin.vendorize({
                                'transition-property': 'opacity'
                            }, common.prefixes_transition),
                            mixin.vendorize({
                                'transition-duration': config.scroll_button_fade_duration + 's'
                            }, common.prefixes_transition),
                            mixin.vendorize({
                                'transition-timing-function': 'ease-out'
                            }, common.prefixes_transition),
                            mixin.vendorize({
                                'transition-delay': config.scroll_button_fade_delay + 's'
                            }, common.prefixes_transition),
                            {
                                opacity: config.scroll_button_opacity
                            }
                        ]
                    },
                    '&.pe-tabs--start .pe-tabs__scroll-button--start': {
                        'pointer-events': 'none',
                        cursor: 'default',

                        ' .pe-button__label': {
                            opacity: 0
                        }
                    },
                    '&.pe-tabs--end .pe-tabs__scroll-button--end': {
                        'pointer-events': 'none',
                        cursor: 'default',

                        ' .pe-button__label': {
                            opacity: 0
                        }
                    },

                    ' .pe-tabs__scroll-button--start': {
                        left: 0
                    },
                    ' .pe-tabs__scroll-button--end': {
                        right: 0
                    }
                },

                ' .pe-tabs__row': [
                    flex.layoutHorizontal,
                    mixin.vendorize({
                        'user-select': 'none'
                    }, common.prefixes_user_select), {
                        position: 'relative',
                        'white-space': 'nowrap',
                        overflow: 'auto'
                    }
                ],

                ' .pe-tabs__scroll-button--offset': [
                    flex.flex(),
                    flex.flexIndex('none')
                ],

                ' .pe-tabs__tab': [
                    flex.flex(),
                    flex.flexIndex('none'),
                    mixin.vendorize({
                        'user-select': 'none'
                    }, common.prefixes_user_select),
                    {
                        margin: 0,
                        'border-radius': 0,
                        height: config.tab_height + 'px',
                        padding: 0,
                        color: 'inherit',
                        'min-width': config.min_width + 'px', // for smaller screens, see also media query below
                        // max-width: 264px, // set in theme js

                        ' .pe-button__content': {
                            padding: '0 ' + config.tab_content_padding_v + 'px',
                            height: config.tab_height + 'px',
                            'line-height': common.line_height + 'em',

                            ' .pe-button__label, .pe-icon': {
                                'max-width': config.label_max_width + 'px', // or .pe-tabs width minus 56dp
                                'line-height': config.tab_label_line_height + 'px',
                                'max-height': 2 * config.tab_label_line_height + 'px',
                                overflow: 'hidden',
                                'white-space': 'normal'
                            },
                            ' .pe-button__label': [
                                mixin.defaultAnimation('opacity', config.animation_duration),
                                {
                                    margin: config.tab_label_vertical_offset + 'px 0 0 0',
                                    padding: 0,
                                    opacity: config.label_opacity
                                }
                            ],
                            ' .pe-icon': {
                                'margin-left': 'auto',
                                'margin-right': 'auto'
                            }
                        },
                        '&.pe-button--selected': {
                            ' .pe-button__content .pe-button__label': {
                                opacity: 1
                            }
                        },
                        '&.pe-tabs__tab---icon': {
                            '&, .pe-button__content': [{
                                height: config.tab_icon_label_height + 'px'
                            }, {
                                ' .pe-button__label, .pe-icon': {
                                    margin: '0 auto'
                                }
                            }, {
                                ' .pe-icon': {
                                    'margin-bottom': '8px'
                                }
                            }]
                        }
                    }
                ],

                ' .pe-tabs__tab-content': [
                    flex.layoutVertical,
                    {
                        height: 'inherit'
                    }
                ],

                ' .pe-tabs__tab-filler': flex.flex(),

                '&.pe-tabs--autofit .pe-tabs__tab': [
                    flex.flex(),
                    {
                        'max-width': 'none'
                    }
                ],

                '&.pe-tabs__active-selected': {
                    ' .pe-tabs__tab.pe-button--selected': {
                        cursor: 'pointer',
                        'pointer-events': 'initial',
                    }
                },

                ' .pe-tabs__indicator': [
                    mixin.vendorize({
                        'transform': 'translate3d(0,0,0)'
                    }, common.prefixes_transform),
                    mixin.vendorize({
                        'transform-origin': 'left 50%'
                    }, common.prefixes_transform),
                    mixin.vendorize({
                        'transition-property': 'all'
                    }, common.prefixes_transition),
                    mixin.vendorize({
                        'transition-timing-function': 'ease-out'
                    }, common.prefixes_transition),
                    {
                        position: 'absolute',
                        height: config.tab_indicator_height + 'px',
                        bottom: 0,
                        left: 0,
                        'z-index': 3,
                        width: '100%' // and transformed with js
                        // background-color defined in implementation/theme css
                    }
                ],

                ' .pe-toolbar--tabs .pe-toolbar__bar &': [
                    mixin.fit(),
                    {
                        width: 'auto',
                        margin: 0,
                        top: 'auto',

                        ' .pe-tabs__row.pe-tabs__row--indent': {
                            margin: 0,
                            'padding-left': common.unit_indent + 'px',
                            overflow: 'auto'
                        }
                    }
                ],

                ['@media (min-width: ' + common.breakpoint_small_tablet_portrait + 'px)']: {
                    '&:not(.pe-tabs--small):not(.pe-tabs--menu) .pe-tabs__tab': {
                        'min-width': config.medium_min_width + 'px'
                    }
                }
            }
        ],

        // toolbar with tabs
        '.pe-toolbar--tabs .pe-toolbar__bar': {
            'background-color': 'inherit',
        }
    }];
};

export default (config) => (mixin.createStyles(config, createStyles));
