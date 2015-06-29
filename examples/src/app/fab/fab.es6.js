'use strict';

import m from 'mithril';
import fab from 'polythene/fab/fab';
require('./fab.css!');

const fabIcon = {
    svg: {
        iconSet: 'mdi',
        name: 'plus'
    }
};

const block = {
    view: function(ctrl, args) {
        return m.component(fab, args.fab);
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
    return m('.module-fab', [
        m.component(titleBlock, {
            title: 'Regular size',
            content: [
                m.component(block, {
                    fab: {
                        icon: fabIcon,
                        class: 'demo-fab',
                        z: 1
                    }
                })
            ]
        }),
        m.component(titleBlock, {
            title: 'Small size',
            content: [
                m.component(block, {
                    fab: {
                        mini: true,
                        icon: fabIcon,
                        class: 'demo-fab green',
                        z: 1
                    }
                }),
                m.component(block, {
                    fab: {
                        icon: fabIcon,
                        class: 'demo-fab mini red',
                        z: 1
                    }
                })
            ]
        }),
        m.component(titleBlock, {
            title: 'Dark theme, raised more',
            class: 'dark-theme',
            content: [
                m.component(block, {
                    fab: {
                        icon: fabIcon,
                        class: 'demo-fab',
                        z: 2
                    }
                })
            ]
        }),
        m.component(titleBlock, {
            title: 'Fully raised',
            content: [
                m.component(block, {
                    fab: {
                        icon: fabIcon,
                        class: 'demo-fab',
                        z: 5
                    }
                })
            ]
        })
    ]);
};

export default module;
