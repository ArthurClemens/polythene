import { appConfig } from "polythene-theme";
import mixin from '../../common/mixin';

const shadowDirective = (dir) => {
    return mixin.vendorize({
        'box-shadow': dir
    }, appConfig.prefixes_box_shadow);
};

const createStyles = (config) => {
    return [{
        '.pe-shadow': [
            mixin.fit(),
            {
                'border-radius': 'inherit',
                'pointer-events': 'none',

                ' .pe-shadow__bottom, .pe-shadow__top': [
                    mixin.fit(),
                    {
                        'border-radius': 'inherit'
                    }
                ],

                '&.pe-shadow--animated': {
                    ' .pe-shadow__bottom, .pe-shadow__top': mixin.vendorize({
                        'transition': config.transition
                    }, appConfig.prefixes_transition)
                }
            },

            [1,2,3,4,5].map((index) => ({
                [' .pe-shadow__top.pe-shadow--z-' + index]: shadowDirective(config['shadow-top-z-' + index]),
                [' .pe-shadow__bottom.pe-shadow--z-' + index]: shadowDirective(config['shadow-bottom-z-' + index])
            }))
        ]
    }];
};

export default config => mixin.createStyles(config, createStyles);
