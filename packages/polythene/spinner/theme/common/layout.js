import { appConfig } from "polythene-theme";
import mixin from '../../../common/mixin';

var sizes = function sizes(size) {
    return {
        width: size + 'px',
        height: size + 'px'
    };
};

var sizesRaised = function sizesRaised(size) {
    var padding = size / 4;
    var paddedSize = size + padding * 2;
    return {
        width: paddedSize + 'px',
        height: paddedSize + 'px',
        padding: padding + 'px'
    };
};

var createStyles = function createStyles(config) {
    return [{
        '.pe-spinner': [mixin.vendorize({
            'transition-timing-function': 'ease-out'
        }, appConfig.prefixes_transition), mixin.vendorize({
            'transition-property': 'opacity'
        }, appConfig.prefixes_transition), {
            opacity: 0,

            '&.pe-spinner--visible, &.pe-spinner--permanent': {
                opacity: 1
            },

            '&.pe-spinner--small': sizes(config.size_small),
            '&.pe-spinner--regular': sizes(config.size_regular),
            '&.pe-spinner--medium': sizes(config.size_medium),
            '&.pe-spinner--large': sizes(config.size_large),
            '&.pe-spinner--fab': sizes(config.size_fab),

            '&.pe-spinner--raised': {
                position: 'relative',
                'border-radius': '50%',

                '&.pe-spinner--small': sizesRaised(config.size_small),
                '&.pe-spinner--regular': sizesRaised(config.size_regular),
                '&.pe-spinner--medium': sizesRaised(config.size_medium),
                '&.pe-spinner--large': sizesRaised(config.size_large),
                '&.pe-spinner--fab': sizesRaised(config.size_fab)
            }
        }]
    }];
};

export default (function (config) {
    return mixin.createStyles(config, createStyles);
});