import config from 'polythene/config/config';
import mixin from 'polythene/common/mixin';

const styles = [{
    '.kitchensink': {
        ' .panel-row': {
            'margin-left': '-20px'
        },
        ' .container': {
            width: '300px',
            height: '400px',
            margin: '0 0 20px 20px'
        },
        ' .pe-header-panel': {
            height: '100%',
            '&.pe-header-panel--cover .pe-header-panel__main-container': {
                left: '70px'
            },
            ' .demo-panel-content': {
                padding: '16px',
                height: 'auto',
                'max-width': '700px',
                'background-color': '#fff',
                ' p': {
                    margin: '0 0 1em 0'
                }
            },
            ' .pe-header': [
                mixin.vendorize({
                    'transition': 'height 0.25s'
                }, config.prefixes_transition), {
                    height: '48px',
                    'line-height': '48px',
                    'font-size': '18px',
                    padding: '0 16px',
                    'background-color': '#2196f3',
                    color: '#fff'
                }
            ],
            ' .pe-header.pe-header--tall': {
                height: '180px'
            },
            ' .pe-header.medium-tall': {
                height: '120px'
            },
            ' .pe-toolbar': mixin.vendorize({
                'transition': 'height 0.25s'
            }, config.prefixes_transition)
        },
        ' .pe-header-panel__main-container .pe-header-panel .toolbar': {
            'font-size': '18px',
            'background-color': '#2196F3',
            color: '#fff'
        },
        ' .pe-header-panel .pe-header.custom-header': {
            height: '72px',
            'line-height': '72px',
            'font-size': '18px',
            padding: '0 24px',
            'background-color': '#e91e63',
            color: '#fff',
            'text-align': 'center',
            'text-transform': 'uppercase'
        },
        ' .pe-header-panel .pe-header.pe-header--animated': {
            'background-color': '#9C27B0'
        },
        ' .p-block .pe-toolbar': {
            margin: 0
        }
    }
}];

export default styles;
