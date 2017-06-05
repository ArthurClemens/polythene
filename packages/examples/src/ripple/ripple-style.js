import vars from '../app/common-vars';

const styles = [{
    '.module-ripple': {
        ' .demo-button + .demo-button': {
            'margin-left': '20px'
        },
        ' .demo-list.demo-bordered': {
            background: 'none',
            'max-width': '100%',

            ' .pe-list-tile': {
                'border-top': '1px solid #ddd',
                'border-bottom': '1px solid #ddd'
            }
        },
        ' .demo-button .pe-ripple.colored-ripple': {
            color: 'green'
        },
        ' .p-block.pe-dark-theme': {
            'background-color': vars.darkThemeBackgroundColor,
            color: '#fff'
        }
    }
}];

export default styles;
