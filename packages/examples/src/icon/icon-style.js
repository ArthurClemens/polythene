import vars from '../app/common-vars';

const styles = [{
    '.module-icon': {
        ' .demo-icons': {
            'font-size': 0
        },
        ' .demo-icon': {
            display: 'inline-block',
            margin: '0 10px 0 0',
            'font-size': '1rem',
            color: vars.attentionColor,

            '& + &': {
                margin: '0 0 0 10px'
            }
        }
    }
}];

export default styles;
