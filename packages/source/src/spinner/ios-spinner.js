import m from 'mithril';
import spinner from './spinner';
import './theme/ios';

const CSS_CLASSES = {
    block: 'pe-spinner--ios'
};

const component = {
    view: (ctrl, opts = {}) => {
        const blades = [];
        for (let i = 0 ; i < 12; i = i + 1) {
            blades.push(m('div'));
        }
        opts.content = blades;
        opts.class = [CSS_CLASSES.block, opts.class].join(' ');
        return m(spinner, opts);
    }
};

export default component;
