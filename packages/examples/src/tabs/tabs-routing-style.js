import vars from '../app/common-vars';

const accentColor = '#00bcd4';

const styles = [{
    '.module-tabs.tabs-routing': {
        ' .nav-header': {
            'background-color': '#fff'
        },
        ' .pe-tabs': {
            'max-width': vars.blockMaxWidth + 'px',
            margin: '0 auto',

            ' .pe-tabs__tab.pe-button--selected': {
                color: accentColor
            },
            ' .pe-tabs__indicator': {
                'background-color': accentColor
            }
        },
        ' .tab-content': {
            padding: '16px',
            'min-height': '320px'
        },
        ' h1': {
            color: '#aaa',
            'font-size': '48px',
            'text-align': 'center'
        },
        ' .next': {
            margin: '0 auto',
            width: '200px'
        }
    }
}];

export default styles;
