import mixin from 'polythene/common/mixin';

const createStyles = (config) => {
    return [{
        '.pe-button--icon': {
            // don't set button size to facilitate different icon sizes
            display: 'inline-block',
            'vertical-align': 'middle',
            cursor: 'pointer',
            position: 'relative',
            'font-size': '1rem',
            'border-radius': '50%',
            border: 'none',

            ' .pe-button__content': {
                padding: 0
            },

            ' .pe-button__label': {
                'line-height': 1,
                padding: config.padding + 'px'
            }
        }
    }];
};

export default (config) => (mixin.createStyles(config, createStyles));
