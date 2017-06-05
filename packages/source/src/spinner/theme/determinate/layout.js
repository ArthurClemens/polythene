import { appConfig } from "polythene-theme";
import mixin from '../../../common/mixin';

const createStyles = () => {
    return [{
        '.pe-spinner-determinate': {
            position: 'relative',

            ' .pe-spinner-determinate__animation': [
                mixin.vendorize({
                    'animation-duration': '1.5s'
                }, appConfig.prefixes_animation),
                {
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                }
            ],

            ' .pe-spinner-determinate__circle': {
                position: 'absolute',
                'box-sizing': 'border-box',
                width: '100%',
                height: '100%',
                'border-style': 'solid',
                'border-radius': '50%'
            }
        }
    }];
};

export default config => mixin.createStyles(config, createStyles);
