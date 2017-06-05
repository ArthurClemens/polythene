import vars from '../app/common-vars';

const customColor = '15, 157, 88';

const styles = [{
    '.module-checkbox': {
        ' .pe-dark-theme': {
            'background-color': vars.darkThemeBackgroundColor
        },
        ' .custom-color': {
            ' .pe-control--checkbox': {
                color: 'rgb(' + customColor + ')'
            },
            ' .pe-control--on .pe-button--focus .pe-button__focus': {
                'background-color': 'rgb(' + customColor + ')'
            }
        },
        ' .pe-control--checkbox': {
            'margin-right': '32px'
        },
        ' .row + .row': {
            'margin-top': '20px'
        }
    }
}];

export default styles;
