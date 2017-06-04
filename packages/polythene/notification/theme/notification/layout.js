import common from '../../../config/config';
import mixin from '../../../common/mixin';
import flex from '../../../layout/theme/flex';

var createStyles = function createStyles(config) {
    return [{
        '.pe-notification__holder': [mixin.fit(), flex.layoutCenterCenter, {
            'z-index': common.z_notification
        }],
        '.pe-notification': [flex.layoutCenter, {
            position: 'relative',

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
        }],
        '.pe-notification--notification': {
            width: config.width + 'px',
            'min-height': config.minHeight + 'px'
        }
    }];
};

export default (function (config) {
    return mixin.createStyles(config, createStyles);
});