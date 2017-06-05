import { appConfig } from "polythene-theme";
import mixin from 'polythene/common/mixin';

const styles = [{
    '.demo-dialog': {
        '&.pe-dialog--fullscreen': {
            ' .pe-header-panel .pe-header-panel__main-container': {
                padding: '24px'
            }
        },
        '&.fullwidth-dialog': {
            ' .pe-dialog__content': {
                width: '280px'
            }
        },
        ' .pe-dialog__content': {
            'max-width': 56 * 8 + 'px',

            ' .demo-content': {
                height: 'auto'
            }
        },
        ' .pe-dialog__footer': {
            ' .pe-button:not(.pe-button--disabled)': {
                color: '#009688'
            },
            ' .pe-button--disabled': {
                color: '#ccc'
            }
        },
        ' .pe-toolbar': {
            'background-color': '#009688',
            color: '#fff'
        },
        '&.dialog-simple .pe-icon': {
            color: '#00bad2'
        },
        ' .item.demo-item': {
            height: '56px'
        },
        ' .demo-dialog-settingsmenu .pe-list-item': [
            mixin.vendorize({
                'user-select': 'none'
            }, appConfig.prefixes_user_select)
        ]
    }
}];

export default styles;
