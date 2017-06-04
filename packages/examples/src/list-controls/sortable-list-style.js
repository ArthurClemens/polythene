import config from 'polythene/config/config';
import mixin from 'polythene/common/mixin';

const styles = [{
    '.demo-list': {
        '&.sortable-list': {
            position: 'relative',
            'border-radius': '2px',

            ' a': {
                cursor: 'pointer'
            },
            ' .controls-row': {
                padding: '0 16px',
                'border-bottom': '1px solid rgba(0, 0, 0, .11)'
            },
            ' .controls': {
                'margin-left': '-8px',
                'margin-right': '-8px'
            },
            ' .pe-list-tile': [
                mixin.vendorize({
                    'user-select': 'none'
                }, config.prefixes_user_select)
            ]
        }
    }
}];

export default styles;
