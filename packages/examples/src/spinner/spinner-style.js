
const purpleStr = '156, 39, 176';
const redStr = '255, 0, 0';
const yellow = '#fdd835';
const green = '#4caf50';

const styles = [{
    '.module-spinner': {
        ' .pe-button + .pe-spinner': {
            'margin-top': '20px'
        },
        ' .row .pe-spinner': {
            margin: '20px 20px 0 0'
        },
        ' .colors': {
            // ' .pe-spinner': {
            //     margin: '0 20px 0 0'
            // },
            ' .pe-spinner.custom-color ': {
                color: 'rgb(' + purpleStr + ')'
            },
            ' .pe-spinner--ios.custom-color-1 ': {
                color: 'rgb(' + purpleStr + ')'
            },
            ' .pe-spinner--ios.custom-color-2 ': {
                color: 'rgb(' + redStr + ')'
            },
            ' .pe-spinner--ios.custom-color-3 ': {
                color: yellow
            },
            ' .pe-spinner--ios.custom-color-4 ': {
                color: green
            }
        },
        ' .toggle': {
            ' .pe-spinner': {
                'margin-left': '30px',
                'margin-top': '4px'
            }
        },
        ' .pe-slider__track': {
            width: '204px'
        },
        ' .raised': {
            ' .pe-spinner': {
                color: '#aaa'
            }
        },
        ' .sizes': {
            ' .pe-spinner + .pe-spinner': {
                'margin-top': '20px'
            }
        }
    }
}];

export default styles;
