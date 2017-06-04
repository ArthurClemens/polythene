import common from '../../config/config';
import mixin from '../../common/mixin';
import flex from '../../layout/theme/flex';

const createStyles = (config) => {
    return [{
        '.pe-toolbar': [
            // use hardware-acceleration
            mixin.vendorize({
                transform: 'translate3d(0,0,0)'
            }, common.prefixes_transform),
            {
                display: 'block',
                position: 'relative',
                height: config.height_normal + 'px',
                'font-size': config.font_size + 'px',
                'line-height': config.line_height + 'em',
                'background-color': '#CFD8DC', // just a default color, will normally be overridden

                '&.pe-header--animated': mixin.defaultTransition('height', config.transition_duration, 'ease-in'),

                '&.pe-header--medium-tall': {
                    height: config.height_medium_tall + 'px'
                },

                '&.pe-header--tall': {
                    height: config.height_tall + 'px'
                },

                '&.pe-toolbar--narrow': {
                    height: config.height_narrow + 'px',

                    ' .pe-toolbar__bar': {
                        height: config.height_narrow + 'px',
                        padding: 0
                    }
                },

                '&.pe-toolbar--narrow.pe-header--medium-tall': {
                    height: config.height_narrow_medium_tall + 'px'
                },

                '&.pe-toolbar--narrow.pe-header--tall': {
                    height: config.height_narrow_tall + 'px'
                },

                '&.pe-header--tall .pe-toolbar__bar--middle': mixin.vendorize({
                    transform: 'translateY(100%)'
                }, common.prefixes_transform),

                ' .pe-toolbar__bar': [
                    flex.layoutCenter,
                    flex.layoutHorizontal,
                    {
                        '> *:not(.disabled)': {
                            // make elements (e.g. buttons) respond to mouse/touch events
                            'pointer-events': 'auto'
                        }
                    }, {
                        '> :first-child': {
                            'margin-left': config.margin_side + 'px'
                        }
                    }, {
                        '> :last-child': {
                            'margin-right': config.margin_side + 'px'
                        }
                    }, {
                        ' .pe-button--icon + span, .pe-button--icon + .pe-title': {
                            'margin-left': config.indent - config.margin_side - common.grid_unit_icon_button + 'px'
                        }
                    },
                    {
                        '> span, > .pe-title': [
                            mixin.ellipsis(1, common.line_height, 'em'),
                            mixin.vendorize({
                                'transform-origin': 'left 50%'
                            }, common.prefixes_transform), {
                                'line-height': common.line_height + 'em',
                                'word-break': 'break-all'
                            }
                        ]
                    }, {
                        '> span:first-child, .pe-toolbar__title--indent': [
                            mixin.ellipsis(1, common.line_height, 'em'), {
                                'margin-left': config.indent + 'px'
                            }
                        ]
                    }, {
                        width: '100%',
                        position: 'absolute',
                        height: config.height_normal + 'px',
                        'pointer-events': 'none',

                        ' .pe-fit': [
                            mixin.fit(), {
                                width: 'auto',
                                margin: 0,

                                '.bottom': {
                                    top: 'auto'
                                }
                            }
                        ],
                        ' .pe-header': mixin.ellipsis(1, common.line_height, 'em'),

                        '&.pe-toolbar__bar--top': {
                            'z-index': 3
                        },
                        '&.pe-toolbar__bar--middle': {
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            left: 0,
                            'z-index': 2
                        },
                        '&.pe-toolbar__bar--bottom': {
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                            left: 0,
                            'z-index': 1
                        }
                    }
                ]
            }
        ]
    }];
};

export default (config) => (mixin.createStyles(config, createStyles));
