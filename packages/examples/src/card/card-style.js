import vars from '../app/common-vars';
import config from 'polythene/config/config';
import mixin from 'polythene/common/mixin';

const styles = [{
    '.module-card': {
        ' .demo-cards': {
            margin: '-10px'
        },
        ' .demo-card': {
            width: '400px',
            margin: '10px',
            ':not(.overlay.pe-dark-theme) .button__content': {
                color: '#5C6BC0'
            },

            '&.small': {
                width: '170px',
                ' .pe-card-overlay': {
                    background: 'none'
                }
            },
            '&.on .pe-card__media__dimmer, &.small .pe-card__media__dimmer': mixin.vendorize({
                'box-shadow': 'inset 0px 0px 40px rgba(0, 0, 0, 0.6)'
            }, config.prefixes_box_shadow),
            '&.extra-large': {
                width: vars.listWidth + 'px'
            },
            '&.custom': {
                width: '344px',
                '&.custom-travel .pe-button .pe-button__content': {
                    color: '#5C6BC0'
                }
            },
            '&.custom-sand.pe-dark-theme': {
                'background-color': '#B89E58'
            },
            '&.custom-sky.pe-dark-theme': {
                'background-color': '#227586'
            },
            '&.custom-bucket.pe-dark-theme': {
                'background-color': '#871E6A'
            }
        },
        ' a[href].demo-card:hover .pe-card__media__dimmer': mixin.vendorize({
            'box-shadow': 'inset 0px 0px 40px rgba(0, 0, 0, 0.6)'
        }, config.prefixes_box_shadow)
    }
}];

export default styles;
