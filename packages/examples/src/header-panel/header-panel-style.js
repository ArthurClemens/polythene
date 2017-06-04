
const styles = [{
    ' .flex-container': {
        height: '100%'
    },
    ' .demo-header-panel .pe-header-panel': {
        ' .pe-toolbar': {
            'background-color': '#3f51b5',
            color: '#fff',

            '&.medium-tall': {
                height: '120px'
            },

            ' .common-toolbar': {
                width: '100%',
                position: 'relative'
            }
        }
    },
    ' .pe-header-panel .pe-header-panel-content': {
        padding: '16px 16px 36px 16px',
        'max-width': '700px',
        margin: '0 auto',
        color: '#444',

        ' + .pe-header-panel-content': {
            'margin-top': '-36px'
        }
    },
    ' .pe-toolbar__title--indent': {
        'word-break': 'break-all'
    },
    ' .spacer-right': {
        width: '48px'
    }
}];

export default styles;
