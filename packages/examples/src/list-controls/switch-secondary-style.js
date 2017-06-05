import { appConfig } from "polythene-theme";
import mixin from 'polythene/common/mixin';

const styles = [{
    '.demo-list': {
        '&.switch-secondary-list': {
            ' .pe-control--switch': {
                ' .pe-control--switch__track': {
                    'background-color': '#f7bcd0'
                },
                '&.pe-control--off': {
                    ' .pe-control--switch__thumb': {
                        color: '#fff'
                    }
                },
                '&.pe-control--on': {
                    ' .pe-control--switch__thumb': {
                        color: '#e91e63'
                    }
                }
            },
            ' .pe-list-tile__title': [
                mixin.vendorize({
                    'user-select': 'none'
                }, appConfig.prefixes_user_select)
            ]
        }
    }
}];

export default styles;
