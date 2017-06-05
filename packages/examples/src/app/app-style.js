import vars from '../app/common-vars';

const styles = [{
    ' html, body': {
        'min-height': '100%',
        height: '100%'
    },
    ' body': {
        background: vars.bodyBackgroundColor,
        margin: 0,
        padding: 0,
        'min-width': '320px',
        color: '#333',
        overflow: 'hidden' // prevent elastic scroll because we are using a header panel on every page
    },
    ' h1': {
        margin: '20px 0 0 0',
        'font-size': '2em',
        'line-height': 1,
        padding: 0,

        ' span': {
            'font-weight': 'normal',
            color: '#aaa',
            'margin-left': '.5em'
        }
    },
    ' h1, h2': {
        color: '#37474F'
    },
    ' a:link, a:visited': {
        'text-decoration': 'none',
        color: '#1565C0'
    },
    ' .demo-content': {
        padding: '0 0 1px 0',
        height: 'inherit'
    },

    ' .index': {
        padding: 0,
        margin: '0 0 32px 0'
    },
    ' .index-list': {
        width: vars.listWidth + 'px',
        margin: vars.margin + 'px auto',
        'background-color': '#fff',

        ' .pe-icon.index-cirle-icon': {
            width: '40px',
            height: '40px',
            'border-radius': '50%',
            'background-color': 'transparent',

            ' svg path': {
                fill: 'rgba(0, 0, 0, 0.4)'
            }
        },
        ' .pe-icon.index-cirle-icon i': {
            padding: '8px'
        },
        ' .pe-list-tile-secondary': {
            color: '#757575'
        },
    },
    ' html.pe-no-touch .index-list .pe-list--hoverable .pe-list-tile:not(.pe-list__header):not(.pe-list-tile--disabled):hover': {
        'background-color': '#f7f7f7'
    },
    '.p-block, .h-block': {
        'max-width': vars.blockMaxWidth + 'px',
        margin: '0 auto',

        '> p': {
            margin: '0 0 16px 0'
        },
        ' .p-block-header': {
            'font-weight': 400,
            margin: '0 0 24px 0',
            'font-size': '18px',
            'line-height': 1.3,
            color: 'inherit'
        },
        ' .p-block-header + p': {
            'margin-top': '-16px'
        }
    },
    '.p-block .p-block .p-block-header': {
        'font-size': '17px'
    },
    '.p-block': {
        padding: '32px 28px'
    },
    '.h-block + .p-block': {
        'margin-top': 0
    },
    '.p-block:not(.p-inner-block) + .p-block:not(.p-inner-block)': {
        'border-top': '1px solid #d6d6d6'
    },
    '.p-block.pe-dark-theme:not(.p-inner-block) + .p-block.pe-dark-theme:not(.p-inner-block)': {
        'border-top': '1px solid #555'
    },
    '.p-block.p-block-info': {
        'margin': '20px auto 10px auto',

        '&, p': {
            'font-size': '16px',
            'line-height': '24px'
        }
    },
    '.p-block.pe-dark-theme': {
        background: vars.darkThemeBackgroundColor,
        color: '#fff'
    },
    '.p-block.p-inner-block': {
        padding: '10px 0',
        margin: 0,
        'font-size': '1.2em'
    },
    '.h-block': {
        padding: '24px 24px 0 24px',
        'margin-top': '24px',

        ' h1, h2, h3, h4, h5, h6': {
            margin: 0
        }
    },
    ' .avatar': {
        'border-radius': '50%',
        'background-color': '#eee'
    },
    ['@media (max-width: ' + vars.mediaMobile + 'px)']: {
        ' .p-block, .h-block': {
            'padding-left': '16px',
            'padding-right': '16px'
        }
    }
}];

export default styles;
