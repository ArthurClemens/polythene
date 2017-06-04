const scale = .95;
const width = 320 * scale;
const height = 480 * scale;

const styles = [{
    '.module-tabs.tabs-menu': {
        ' .screen': {
            position: 'relative',
            width: width + 'px',
            height: height + 'px',
            background: '#fff',
            margin: '0 auto'
        },
        ' .demo-content': {
            padding: '16px',
            'overflow-x': 'hidden',
            'overflow-y': 'auto',

            ' h1': {
                'font-size': '20px',
                'line-heigth': '24px',
                margin: '8px 0 16px 0'
            }
        },
        ' .pe-tabs--menu': {
            width: width + 'px',
            'border-top': '1px solid #ddd',

            ' .pe-tabs__tab': {
                background: '#fff',
                ' .pe-icon': {
                    color: '#aaa'
                },
                ' .pe-button__label': {
                    color: '#777'
                },
                '&.pe-button--selected .pe-icon': {
                    color: '#FF1744'
                },
                '&.pe-button--selected .button__label': {
                    color: '#444'
                }
            }
        }
    }
}];

export default styles;
