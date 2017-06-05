import { appConfig } from "polythene-theme";
import mixin from '../../common/mixin';

const unifySize = (config, size) => {
    return (size < config.min_size) ? config.min_size : size;
};

const widthClass = (config, size) => {
    const sizeStr = size.toString().replace('.', '-');
    return 'pe-menu--width-' + sizeStr;
};

const widthStyle = (config, size) => {
    const s = unifySize(config, size);
    return {
        ['&.' + widthClass(config, s)]: {
            width: config.size_factor * s + 'px',
            'max-width': '100%'
        }
    };
};

const createStyles = config => {
    return [{
        '.pe-menu': [
            // transition-duration set in js
            mixin.vendorize({
                'transition-timing-function': 'ease-out'
            }, appConfig.prefixes_transition),
            mixin.vendorize({
                'transition-property': 'opacity'
            }, appConfig.prefixes_transition),
            config.sizes.map((size) => {
                return widthStyle(config, size);
            }),
            {
                'z-index': appConfig.z_menu,
                opacity: 0,
                position: 'absolute',
                width: '100%',
                'min-width': appConfig.grid_unit_menu * config.min_size + 'px',

                '&.pe-menu--width-auto': {
                    width: 'auto'
                },

                '&.pe-menu--visible': {
                    opacity: 1
                },

                '&.pe-menu--permanent': {
                    position: 'relative',
                    opacity: 1
                },

                ' .pe-menu__content': {
                    width: '100%',
                    'border-radius': config.border_radius + 'px'
                },

                ['@media (max-width: ' + appConfig.unit_screen_size_large + 'px)']: {
                    'max-width': config.max_size_small_screen * appConfig.grid_unit_menu + 'px'
                }
            }
        ]

    }];
};

export default config => mixin.createStyles(config, createStyles);
