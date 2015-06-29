'use strict';

import m from 'mithril';
import element from 'polythene/element/element';

const block = {
    view: function(ctrl, args) {
        return m.component(element, args.element);
    }
};

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {class: args.class || ''}, [
            m('.p-block-header', args.title),
            args.content
        ]);
    }
};

let module = {};
module.view = () => {
    return m('.module-element', [
        m.component(titleBlock, {
            title: 'Testing an element',
            content: [
                m.component(block, {
                    element: {
                        content: 'This is an element'
                    }
                })
            ]
        })
    ]);
};

export default module;
