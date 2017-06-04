import vars from '../app/common-vars';

const accentColor = '#ff9800';
const toolbarBackgroundColor = '#00BCD4';
const toolbarAccentColor = '#FFFF8D';

const styles = [{
    '.module-tabs.tabs-kitchensink': {
        ' .custom-color': {
            ' .pe-tabs__tab.pe-button--selected': {
                color: accentColor
            },
            ' .pe-tabs__indicator': {
                'background-color': accentColor
            }
        },
        ' .pe-tabs.pe-dark-theme': {
            'background-color': vars.darkThemeBackgroundColor,
            color: '#fff'
        },

        ' .tabArea': {
            'background-color': '#FAFAFA',

            '&.small': {
                'max-width': vars.listWidth + 'px'
            },

            '&.hasToolbar': {
                ' .demo-tabs': {
                    'border-bottom': 0
                }
            }
        },

        ' .demo-tabs.small': {
            'max-width': vars.listWidth + 'px'
        },

        ' .demo-tabs.fixedWidth': {
            '&.pe-tabs:not(.pe-tabs--small) .pe-tabs__tab': {
                'min-width': '100px'
            }
        },

        ' .p-block .pe-toolbar': {
            background: toolbarBackgroundColor,
            color: '#fff',

            ' .pe-button--icon': {
                color: '#fff'
            },
            ' .pe-tabs__tab.pe-button--selected': {
                color: '#fff'
            },
            ' .pe-tabs__indicator': {
                'background-color': toolbarAccentColor
            }
        }
    }
}];

export default styles;
