import common from 'polythene/config/config';
import mixin from 'polythene/common/mixin';

const sizes = (size) => ({
    width: size + 'px',
    height: size + 'px'
});

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
                '&.pe-spinner--regular': sizes(config.size),
                '&.pe-spinner--medium': sizes(config.size_medium),
                '&.pe-spinner--large': sizes(config.size_large),
                '&.pe-spinner--fab': sizes(config.size_fab),

                '&.pe-spinner--raised': {
                    position: 'relative',
                    'border-radius': '50%',
                    padding: config.floating_padding + 'px'
                }
            }
        ]
    }];
};

export default (config) => (mixin.createStyles(config, createStyles));
