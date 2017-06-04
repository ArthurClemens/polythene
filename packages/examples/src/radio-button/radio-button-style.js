import vars from '../app/common-vars';

const customColor = '15, 157, 88';

const styles = [{
    '.module-radio-button': {
        ' .pe-dark-theme': {
            'background-color': vars.darkThemeBackgroundColor
        },
        ' .custom-color .pe-control--radio': {
            color: 'rgb(' + customColor + ')'
        },
        ' .pe-control--radio': {
            'margin-right': '32px'
        },
        ' .row + .row': {
            'margin-top': '20px'
        }
    }
}];

export default styles;
