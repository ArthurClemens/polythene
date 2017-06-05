import { appConfig } from "polythene-theme";
import mixin from '../../common/mixin';

var iconSizesPx = function iconSizesPx() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : appConfig.unit_icon_size;
    return {
        width: size + 'px',
        height: size + 'px'
    };
};

var createStyles = function createStyles(config) {
    return [{
        '.pe-icon': {
            display: 'inline-block',
            'vertical-align': 'middle',
            'background-repeat': 'no-repeat',
            fill: 'currentcolor',
            position: 'relative',
            'font-size': 0,
            'line-height': 0,

            '&.pe-icon--avatar img': {
                border: 'none',
                'border-radius': '50%',
                width: '100%',
                height: '100%'
            },

            ' i': [mixin.fit(), {
                display: 'block',
                'font-size': 'inherit',
                color: 'inherit',
                'line-height': 'inherit',
                height: '100%',

                ' img': {
                    height: '100%'
                },

                ' svg': {
                    width: '100%',
                    height: '100%',
                    fill: 'currentcolor',
                    color: 'inherit',

                    ' path, rect, polygon': {
                        '&:not([fill=none])': {
                            fill: 'currentcolor'
                        }
                    }
                }
            }],

            '&.pe-icon--small': iconSizesPx(config.size_small),
            '&.pe-icon--regular': iconSizesPx(config.size_regular),
            '&.pe-icon--medium': iconSizesPx(config.size_medium),
            '&.pe-icon--large': iconSizesPx(config.size_large)
        }
    }];
};

export default (function (config) {
    return mixin.createStyles(config, createStyles);
});