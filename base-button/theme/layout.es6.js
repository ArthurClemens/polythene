import common from 'polythene/config/config';
import mixin from 'polythene/common/mixin';

const style = [{
    '.pe-button': [
        mixin.vendorize({
            'user-select': 'none'
        }, common.prefixes_user_select),
        {
            outline: 'none',
            padding: 0,
            'text-decoration': 'none',
            'text-align': 'center',
            cursor: 'pointer',

            '&.pe-button--selected, &.pe-button--disabled, &.pe-button--inactive': {
                cursor: 'default',
                'pointer-events': 'none'
            },

            ' .pe-button__content': {
                position: 'relative',
                'border-radius': 'inherit'
            },

            ' .pe-button__label': [
                mixin.fontSmoothing(), {
                    position: 'relative',
                    display: 'block',
                    'border-radius': 'inherit',
                    'pointer-events': 'none'
                }
            ],

            ' .pe-button__wash': [
                mixin.vendorize({'transition': 'background-color ' + common.animation_duration + ' ' + common.animation_curve_default}, common.prefixes_transition),
                mixin.fit(),
                {
                    'z-index': 1,
                    'border-radius': 'inherit',
                    'pointer-events': 'none'
                }
            ]
        }
    ]
}];

export default style;
