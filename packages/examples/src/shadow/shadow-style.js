import vars from '../app/common-vars';
import { appConfig } from "polythene-theme";
import mixin from 'polythene/common/mixin';

const styles = [{
    '.module-shadow': {
        ' .has-background': {
            background: '#fff',
            padding: '20px'
        },
        ' .shadow-card, .shadow-fab': [
            mixin.vendorize({
                'user-select': 'none'
            }, appConfig.prefixes_user_select), {
                display: 'inline-block',
                position: 'relative',
                'text-align': 'center',
                width: '90px',
                height: '90px',
                margin: '0 20px 20px 0',
                'line-height': '90px',
                background: '#BBDEFB',
                'box-sizing': 'border-box',
                '-webkit-touch-callout': 'none'
            }
        ],

        ' .shadow-card': {
            'border-radius': '2px'
        },
        ' .shadow-fab': {
            'border-radius': '50%',
            'text-align': 'center'
        },
        ' .shadow-card.animated, .shadow-fab.animated': {
            cursor: 'pointer',
            background: '#FFC400'
        },
        ' .shadow-card .self-center, .shadow-fab .self-center': {
            width: '100%',
            'pointer-events': 'none'
        }
    }
}];

export default styles;
