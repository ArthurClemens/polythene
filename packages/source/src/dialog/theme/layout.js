import common from '../../config/config';
import mixin from '../../common/mixin';
import flex from '../../layout/theme/flex';

const createStyles = (config) => {
    const padding = config.padding;
    const lineHeightTitle = 24;

    return [{
        '.pe-dialog': [
            flex.layoutCenterCenter,
            // transition-duration set in js
            mixin.vendorize({
                'transition-timing-function': 'ease-out'
            }, common.prefixes_transition),
            mixin.vendorize({
                'transition-property': 'opacity'
            }, common.prefixes_transition), {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                'z-index': common.z_dialog,
                height: '100%', // 100vh would make the dialog go beneath Mobile Safari toolbar
                padding: padding + 'px 40px',
                opacity: 0,

                '&.pe-dialog--visible': {
                    opacity: 1
                },

                '&.pe-dialog--fullscreen': {
                    padding: 0,

                    ' .pe-dialog__content': {
                        'border-radius': 0,
                        'max-width': 'none',
                        height: '100%',
                        width: '100%',

                        ' .pe-dialog__header, .pe-dialog__footer': {
                            display: 'none'
                        },

                        ' .pe-dialog__body': {
                            padding: 0,
                            height: '100%',
                            'max-height': 'calc(100%)',
                            border: 'none'
                        }
                    }
                },

                ' .pe-dialog__header, pe-dialog__body, pe-dialog__header': {
                    'z-index': 1
                },

                ' .pe-dialog__content': [
                    flex.layoutVertical,
                    {
                        position: 'relative',
                        'max-height': '100%',
                        'min-width': 56 * 5 + 'px',
                        'max-width': 7 * common.grid_unit_menu + 'px',
                        'border-radius': config.border_radius + 'px',

                        ' > .pe-shadow': {
                            'z-index': -1 // For IE10 to get click events on content
                        },

                        '&.pe-menu__content': {
                            ' .pe-dialog__body': {
                                padding: 0,
                                border: 'none'
                            }
                        }
                    }
                ],

                ' .pe-dialog__title': {
                    'font-size': common.font_size_title + 'px',
                    'line-height': lineHeightTitle + 'px',
                    'font-weight': common.font_weight_medium,

                    '& + div': {
                        'margin-top': '16px'
                    },
                },

                ' .pe-dialog__header': {
                    padding: [(padding - 4), padding, (config.header_bottom - 4), padding].map((v) => (v + 'px')).join(' '),
                    'min-height': config.header_height + 'px',

                    ' .pe-dialog__title': [
                        mixin.ellipsis(1),
                        {
                            width: '100%'
                        }
                    ]
                },

                ' .pe-dialog__body': [
                    flex.selfStretch,
                    mixin.hairline('border-top'), {
                        'border-top-style': 'solid'
                    },
                    mixin.hairline('border-top'), {
                        'border-bottom-style': 'solid'
                    },
                    {
                        padding: [padding, padding, (padding - 5), padding].map((v) => (v + 'px')).join(' '),
                        'overflow-y': 'auto',
                        '-webkit-overflow-scrolling': 'touch',
                        'border-width': '1px',
                        'border-style': 'solid none',
                        'border-color': 'transparent',
                        // initially set max-height; will be overridden by dialog core with actual heights
                        'max-height': 'calc(100vh - ' + (2 * padding) + 'px - ' + (config.header_height + config.footer_height) + 'px)'
                    }
                ],
                ' .pe-dialog__header + .pe-dialog__body': {
                    'padding-top': 0
                },

                ' .pe-dialog__footer': {
                    padding: '2px 8px',
                    'min-height': config.footer_height + 'px',
                    'font-size': 0, // remove inline block spacing

                    '&.pe-dialog__footer--high': {
                        // when buttons are stacked vertically
                        'padding-bottom': '8px'
                    }
                },

                ' .pe-dialog__actions': [
                    flex.layoutHorizontal,
                    flex.layoutEndJustified,
                    flex.layoutWrap,
                    {
                        margin: '0 -4px',

                        ' .pe-button': {
                            height: '36px',
                            'margin-top': '6px',
                            'margin-bottom': '6px',
                            padding: 0
                        }
                    }
                ]
            }
        ],

        ' body.pe-dialog--open': {
            overflow: 'hidden',
            left: 0,
            '-webkit-overflow-scrolling': 'touch',
            top: 0,
            width: '100%'
        }
    }];
};

export default (config) => (mixin.createStyles(config, createStyles));
