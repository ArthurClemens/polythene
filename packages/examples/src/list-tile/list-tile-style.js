import vars from '../app/common-vars';

const styles = [{
    '.module-list-tile': {
        ' .demo-list': {
            width: '100%',
            'max-width': vars.blockMaxWidth + 'px',

            ' .pe-icon': {
                color: '#757575'
            },

            ' .pe-icon.demo-cirle-icon': {
                width: '40px',
                height: '40px',
                'border-radius': '50%',
                'background-color': '#ddd',
                ' i': {
                    padding: '8px'
                },
                'svg path': {
                    fill: '#fff'
                }
            },
            '&.links': {
                ' .pe-list-tile': {
                    ' a:hover': {
                        'background-color': vars.colorPrimary,
                        color: '#fff',

                        ' .pe-list-tile__title, .pe-list-tile__subtitle, , .pe-icon': {
                            color: '#fff'
                        }
                    }
                }
            },
            '&.custom': {
                ' .custom-secondary': {
                    'text-align': 'center'
                }
            }
        },
        ' .pe-list-tile-secondary .pe-icon': {
            color: '#aaa'
        },
        ' .p-block.pe-dark-theme': {
            background: '#222',

            ' .demo-list': {
                ' .pe-list-tile': {
                    background: vars.darkThemeBackgroundColor
                }
            }
        },
        ' :not(.pe-dark-theme) .demo-list:not(.demo-no-zebra)': {
            ' .pe-list-tile:nth-child(even)': {
                'background-color': '#f8f8f8'
            },
            ' .pe-list-tile:nth-child(odd)': {
                'background-color': '#fff'
            }
        }
    }
}];

export default styles;
