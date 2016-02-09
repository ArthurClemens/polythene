import common from 'polythene/config/config';
import mixin from 'polythene/common/mixin';
import flex from 'polythene/layout/theme/flex';

const createStyles = (config) => {
    return [{
        '.pe-notification__holder': {
            position: 'relative',
            'z-index': common.z_notification
        },
        '.pe-notification': [
            flex.layoutCenter,
            {
                position: 'relative',
                width: config.width + 'px',
                padding: '0 ' + config.side_padding + 'px',
                margin: '0 auto',
                'border-radius': config.border_radius + 'px',
                
                ' .pe-notification__content': {
                    width: '100%'
                },

                ' .pe-notification__title': {
                    'padding': config.title_single_padding_v + 'px ' + config.title_padding_h + 'px',
                    'font-size': config.font_size + 'px',
                    'line-height': config.line_height + 'px'
                },

                ' .pe-notification__action': {
                    ' .pe-button': {
                        margin: 0
                    }
                },

                '&.pe-notification--horizontal': {
                    ' .pe-notification__content': flex.layoutHorizontal,
                    ' .pe-notification__title': flex.flex(),
                    ' .pe-notification__title--multi-line': {
                        'padding-top': config.title_multi_padding_v + 'px',
                        'padding-bottom': config.title_multi_padding_v + 'px'
                    },
                    ' .pe-notification__action': flex.layoutCenter
                },
                '&.pe-notification--vertical': {
                    ' .pe-notification__content': flex.layoutVertical,
                    ' .pe-notification__title': {
                        'padding-bottom': '4px'
                    },
                    ' .pe-notification__title--multi-line': {
                        'padding-top': config.title_multi_padding_v + 'px'
                    },
                    ' .pe-notification__action': flex.layoutEndJustified
                }
            }
        ]
    }];
};

export default (config) => (mixin.createStyles(config, createStyles));
