import config from 'polythene/config/config';
import mixin from 'polythene/common/mixin';

const styles = [{
    '.demo-header-panel .pe-header-panel.background4': {
        ' .pe-header--tall': {
            height: '256px'
        },
        ' .pe-header-panel__header-container': {
            'background-color': '#673ab7' // purple
        },
        ' .pe-header-panel__condensed-background': {
            'background-color': '#f4b400',
            'background-image': 'url(http://arthurclemens.github.io/assets/polythene/examples/bg2.jpg)'
        },
        ' .pe-toolbar': {
            'background-color': 'transparent',
            ' .pe-title': {
                color: '#fff'
            }
        },
        ' .pe-header-panel__header-background': {
            'background-image': 'url(http://arthurclemens.github.io/assets/polythene/examples/bg1.jpg)'
        },
        ' .pe-header-panel__media-dimmer': mixin.vendorize({
            'box-shadow': 'inset 0px 0px 200px rgba(0, 0, 0, 1)'
        }, config.prefixes_box_shadow)
    }
}];

export default styles;
