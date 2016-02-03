import common from 'polythene/config/config';
import mixin from 'polythene/common/mixin';

const tabletStyle = (config) => {
    return {
        'min-width': config.tablet_min_width + 'px',
        'max-width': config.tablet_max_width + 'px',
        'border-bottom-left-radius': 0,
        'border-bottom-right-radius': 0,
        'border-top-left-radius': common.unit_block_border_radius + 'px',
        'border-top-right-radius': common.unit_block_border_radius + 'px',

        '&.pe-notification--horizontal': {
            ' .pe-notification__title': {
                'padding-right': '30px'
            }
        }
    };
};

const createStyles = (config) => {
    return [{
        '.pe-notification--snackbar': {
            width: 'auto',

            ['@media (min-width: ' + common.breakpoint_small_handset_landscape + 'px)']: {
                '.pe-notification--snackbar': tabletStyle(config)
            }
        }
    }];
};

export default (config) => (mixin.createStyles(config, createStyles));
