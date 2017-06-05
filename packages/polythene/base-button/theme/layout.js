import mixin from '../../common/mixin';
import { appConfig as cfg } from "polythene-theme";

var style = [{
    '.pe-button': [mixin.vendorize({
        'user-select': 'none'
    }, cfg.prefixes_user_select), {
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

        ' .pe-button__label': [mixin.fontSmoothing(), {
            position: 'relative',
            'z-index': 1, // stick above wash that has position absolute
            display: 'block',
            'border-radius': 'inherit',
            'pointer-events': 'none'
        }],

        ' .pe-button__wash, .pe-button__focus': [mixin.defaultTransition('background-color'), mixin.fit(), {
            'border-radius': 'inherit',
            'pointer-events': 'none'
        }],

        ' .pe-button__focus': {
            opacity: 0
        },

        '&.pe-button--focus': {
            ' .pe-button__focus': {
                opacity: 1
            }
        },

        ' .pe-button__wash': {
            'z-index': 1
        }
    }]
}];

export default style;