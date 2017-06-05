import vars from '../app/common-vars';

const styles = [{
    '.module-list': {
        ' .p-block': {
            background: 'none',
            'min-width': '320px',
            'max-width': '480px'
        },
        ' .demo-list': {
            width: '100%',
            'background-color': '#fff',

            '&.menu-list': {
                'max-width': vars.listWidth + 'px',
                margin: '0 auto'
            }
        },
        ' .pe-dark-theme .demo-list.pe-list, .demo-list.pe-list.pe-dark-theme': {
            'background-color': vars.darkThemeBackgroundColor
        },
        ' .scrollable-list': {
            height: '300px',
            'overflow-y': 'auto',
            '-webkit-overflow-scrolling': 'touch',

            ' .pe-list-tile.pe-list-header': {
                top: 0
            }
        }
    }
}];

export default styles;
