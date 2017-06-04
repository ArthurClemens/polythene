import vars from '../app/common-vars';

const styles = [{
    '.module-svg': {
        ' .demo-icons': {
            'font-size': 0,
            'line-height': 0,
            height: '30px'
        },

        ' .demo-icon': {
            display: 'inline-block',
            'font-size': '1rem',
            color: vars.attentionColor,

            '& + &': {
                margin: '0 0 0 10px'
            }
        },

        ' .p-block': {
            ' .demo-svg': {
                display: 'inline-block',
                'vertical-align': 'middle',
                fill: 'currentcolor',

                '& + span': {
                    'margin-left': '5px'
                },

                ' svg': {
                    width: '24px',
                    height: '24px'
                },

                ' path:not([fill="none"])': {
                    fill: 'currentcolor'
                }
            }
        }
    }
}];

export default styles;
