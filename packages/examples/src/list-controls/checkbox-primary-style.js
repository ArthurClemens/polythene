import config from 'polythene/config/config';
import mixin from 'polythene/common/mixin';

const styles = [{
    '.demo-list': {
        '&.checkbox-primary-list': {
            ' .checkbox': {
                color: '#0e9c57'
            },
            ' .pe-list-tile__title': [
                mixin.vendorize({
                    'user-select': 'none'
                }, config.prefixes_user_select)
            ]
        }
    }
}];

export default styles;
