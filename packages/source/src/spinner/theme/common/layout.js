import common from '../../../config/config';
import mixin from '../../../common/mixin';

const sizes = (size) => ({
    width: size + 'px',
    height: size + 'px'
});

const sizesRaised = (size) => {
    const padding = size / 4;
    const paddedSize = size + padding * 2;
    return {
        width: paddedSize + 'px',
        height: paddedSize + 'px',
        padding: padding + 'px'
    };
};

const createStyles = (config) => {
    return [{
        '.pe-spinner': [
            mixin.vendorize({
                'transition-timing-function': 'ease-out'
            }, common.prefixes_transition),
            mixin.vendorize({
                'transition-property': 'opacity'
            }, common.prefixes_transition),
            {
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
            }
        ]
    }];
};

export default (config) => (mixin.createStyles(config, createStyles));
