import vars from '../app/common-vars';

const customThumbColor = '#fc4482';
const neutralStr = '100, 100, 100';
const purpleStr = '156, 39, 176';

const styles = [{
    '.module-switch': {
        ' .pe-dark-theme': {
            'background-color': vars.darkThemeBackgroundColor
        },
        ' .custom-color': {
            ' .pe-control--switch__track': {
                'background-color': '#fd8b83'
            },
            ' .pe-control--off .pe-control--switch__thumb': {
                color: '#fff'
            },
            ' .pe-control--on .pe-control--switch__thumb': {
                color: customThumbColor
            },
            ' .pe-control--on .pe-button--focus .pe-button__focus': {
                'background-color': customThumbColor
            }
        },
        ' .pe-control--switch': {
            'margin-right': '32px'
        },
        ' .row + .row': {
            'margin-top': '20px'
        },
        ' .custom-icon': {
            ' .pe-control--off': {
                ' .pe-control--switch__track': {
                    'background-color': '#aaa'
                },
                ' .pe-control--switch__thumb': {
                    color: '#fff'
                },
                ' .pe-icon': {
                    color: 'rgb(' + neutralStr + ')'
                }
            },
            ' .pe-control--on': {
                ' .pe-control--switch__track': {
                    'background-color': '#ba83fd'
                },
                ' .pe-control--switch__thumb': {
                    color: '#fff'
                },
                ' .pe-icon': {
                    color: 'rgb(' + purpleStr + ')'
                }
            },
            ' .pe-control--on .pe-button--focus .pe-button__focus': {
                'background-color': 'rgb(' + purpleStr + ')'
            }
        }
    }
}];

export default styles;
