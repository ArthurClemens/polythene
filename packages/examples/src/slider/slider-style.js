import vars from '../app/common-vars';

const purpleStr = '156, 39, 176';
const redStr = '255, 0, 0';

const styles = [{
    '.module-slider': {
        ' .pe-slider': {
            'margin-top': '20px'
        },
        ' .has-pins .pe-slider': {
            'margin-top': '50px'
        },
        ' .pe-dark-theme': {
            'background-color': vars.darkThemeBackgroundColor
        },
        ' .custom-color': {
            ' .pe-slider': {
                color: 'rgb(' + redStr + ')'
            }
        },
        ' .custom-thumb': {
            ' .pe-slider': {
                color: 'rgb(' + purpleStr + ')'
            },
            ' .pe-slider__control': {
                'background-color': '#fff'
            }
        }
    }
}];

export default styles;
