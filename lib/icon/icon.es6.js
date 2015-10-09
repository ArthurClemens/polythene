import 'polythene/common/object.assign';
import p from 'polythene/polythene/polythene';
import m from 'mithril';
import svg from 'polythene/svg/svg';
import 'polythene-theme/icon/icon';

const layoutContent = (opts) => {
    if (opts.content) {
        return opts.content;
    } else if (opts.svg) {
        let svgOpts = Object.assign({}, opts.svg);
        svgOpts.tag = svgOpts.tag || 'i.fit';
        return m.component(svg, svgOpts);
    } else if (opts.msvg) {
        return m('i.fit.svg', opts.msvg);
    } else {
        return m('i.fit',
            m('img', {
                src: opts.src
            })
        );
    }
};

const createView = (ctrl, opts = {}) => {
    const tag = opts.tag || 'div';
    const props = {
        class: ['icon', 'icon-' + (opts.type || 'normal'), opts.class].join(' '),
        config: opts.config
    };
    const content = layoutContent(opts);
    return m(tag, props, p.insertContent(content, opts));
};

const component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
