import vars from '../app/common-vars';

const headerFontSizePx = '32px';
const headerBackgroundColor = vars.colorHeader;
const headerTextColor = '#fff';

const styles = [{
    '.pe-header-panel.app-header': {
        ' .pe-header-panel__outer-container > .pe-header-panel__header-container:first-of-type': {
            ' .pe-toolbar': {
                'background-color': headerBackgroundColor,
                'font-size': '20px',
                padding: '0 4px',
                'font-weight': 400,

                ' .pe-toolbar__bar--top': {
                    color: headerTextColor,

                    ' a.pe-button--icon': {
                        color: headerTextColor
                    }
                }
            }
        }
    },
    /*
    Style for the large header
    */
    '.pe-header-panel.index-header': {
        ' .pe-header-panel__header-container .pe-title': {
            'font-size': headerFontSizePx,
            color: headerTextColor,
            'text-align': 'center'
        },
        ' .pe-icon.logo': {
            width: headerFontSizePx,
            height: headerFontSizePx,
            'margin-right': '16px',
            ' svg path': {
                fill: headerTextColor
            }
        }
    },
    ['@media (max-width: ' + vars.mediaTablet + 'px)']: {
        ' .pe-header-panel.index-header .pe-header-panel__header-container:first-of-type .pe-title': {
            'margin-left': '20px'
        }
    },
    ['@media (max-width: ' + vars.mediaMobile + 'px)']: {
        ' .pe-header-panel.index-header .pe-header-panel__header-container:first-of-type .pe-title': {
            ' .pe-icon': {
                display: 'none'
            }
        }
    }
}];

export default styles;
