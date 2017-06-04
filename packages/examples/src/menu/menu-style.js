import config from 'polythene/config/config';
import mixin from 'polythene/common/mixin';

const styles = [{
    '.module-menu': {
        'padding-bottom': '100px',

        ' .simple-menu': {
            ' .container': {
                position: 'relative'
            }
        },
        ' .menu-items .pe-menu': {
            display: 'inline-block',
            margin: '0 24px 24px 0'
        },
        ' .selectable-list': {
            width: '100%',
            'min-width': 280 + 2 * 16 + 'px',
            'max-width': 280 + 2 * 16 + 'px',
            'background-color': '#fff'
        },
        ' .demo-list, .pe-dialog': {
            ' .pe-list-item': [
                mixin.vendorize({
                    'user-select': 'none'
                }, config.prefixes_user_select)
            ]
        },
        ' .positioning': {
            margin: '0 -10px',

            ' .container': {
                position: 'relative',
                width: '47%',
                height: '230px',
                background: '#fff',
                margin: '10px',

                ' .bar': {
                    position: 'relative',
                    background: '#3F51B5',
                    width: '100%',
                    padding: '4px 0'
                }
            }
        },
        ' .settings': {
            position: 'relative'
        },
        ' .short-simple-menu': {
            display: 'inline-block',
            margin: '0 16px 16px 0'
        }
    }
}];

export default styles;
