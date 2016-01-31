import m from 'mithril';
import spinner from 'polythene/spinner/spinner';
import 'polythene/spinner/theme/indeterminate/theme';

const CSS_CLASSES = {
    block: 'pe-spinner--indeterminate',
    animation: 'pe-spinner__animation',
};

const component = {
    view: (ctrl, opts = {}) => {
        opts.content = m('svg', {
            class: CSS_CLASSES.animation,
            viewBox: '0 0 40 40'
        }, m('circle', {
            cx: 20,
            cy: 20,
            r: 18,
            fill: 'none'
        }));
        opts.class = [CSS_CLASSES.block, opts.class].join(' ');
        return m.component(spinner, opts);
    }
};

export default component;
