import p from 'polythene/polythene/polythene';
import styler from 'polythene/common/styler';

// Flexbox styles
import 'polythene/layout/theme/theme';
// Roboto font
import 'polythene/font-roboto/theme';

// Use Roboto font
const roboto = [{
    'html, body, input, textarea': {
        'font-family': 'Roboto, Helvetica, Arial, sans-serif'
    }
}];

// Typography
import typography from 'polythene/theme/typography';

const general = [{
    '*': [
        {
            'box-sizing': 'border-box'
        },
        // remove tap highlight in mobile Safari
        {
            '-webkit-tap-highlight-color': 'rgba(0,0,0,0)'
        }, {
            '-webkit-tap-highlight-color': 'transparent' // For some Androids
        }
    ],

    // Remove dotted link borders in Firefox
    ' a, a:active, a:focus, input:active, input[type]:focus': {
        outline: 0
    },

    // Mobile Safari: override default fading of disabled elements
    'input:disabled': {
        opacity: 1
    }
}];

styler.add('pe-theme', roboto, typography, general);
document.querySelector('html').classList.add(p.isTouch ? 'pe-touch' : 'pe-no-touch');
