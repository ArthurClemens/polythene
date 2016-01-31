import mixin from 'polythene/common/mixin';
import common from 'polythene/config/config';

const createStyles = (config) => {
    return [{
        '.pe-spinner--determinate': {
            ' circle': [
                {
                    'stroke-width': config.circle_stroke_width + 'px',
                    'stroke-dasharray': (3.14 * config.size)
                }
            ],

            '&.pe-spinner--animated': {
                ' .pe-spinner__animation': mixin.vendorize({
                    'transition-duration': config.animation_update_duration + 's'
                }, common.prefixes_transition),
                ' circle': mixin.vendorize({
                    'transition': 'stroke-dashoffset ' + config.animation_update_duration + 's'
                }, common.prefixes_transition)
            }
        }
    }];
};

export default (config) => (mixin.createStyles(config, createStyles));
