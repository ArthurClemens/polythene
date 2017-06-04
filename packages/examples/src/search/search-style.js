import vars from '../app/common-vars';

const primaryColor = '#448AFF';

const styles = [{
    '.module-search': {
        ' .p-block': {
            background: 'none'
        },
        ' .demo-search': {
            'background-color': '#e4e4e4',
            'min-height': '200px',
            'max-width': '100%',
            padding: '8px',

            '&.mobile': {
                width: vars.minWidth + 'px'
            },
            '&.tablet': {
                width: vars.tabletWidth + 'px'
            },
            '&.desktop': {
                width: vars.desktopWidth + 'px'
            }
        },
        ' .demo-search.fullwidth': {
            padding: 0
        },

        ' .size-buttons': {
            margin: '0 -4px',

            ' .pe-button--selected .pe-button__content': {
                'background-color': primaryColor,
                color: '#fff'
            }
        },

        ' .drop-shadow': {
            'box-shadow': 'inset 0px 4px 4px -3px rgba(0, 0, 0, 0.4)',
            height: '4px'
        }
    }
}];

export default styles;
