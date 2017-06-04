import vars from '../app/common-vars';

const styles = [{
    '.module-textfield': {
        ' .form': {
            width: vars.listWidth + 'px',
            padding: '16px 24px',
            'background-color': '#fff'
        },
        ' .form.fullWidth': {
            width: '320px',
            padding: 0
        },
        ' .pe-textfield': {
            display: 'block'
        },
        ' .pe-dark-theme .form': {
            'background-color': vars.darkThemeBackgroundColor
        }
    }
}];

export default styles;
