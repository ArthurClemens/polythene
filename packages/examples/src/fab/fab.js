import m from 'mithril';
import { FAB } from 'polythene';
import { styler } from 'polythene-core-css';
import style from './fab-style';
styler.add('polythene-examples-fab', style);

import iconPlus from 'mmsvg/templarian/msvg/plus';

const fabIcon = {
    msvg: iconPlus
};

const block = {
    view: function(ctrl, args) {
        return m(FAB, args.fab);
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

const module = {};
module.view = () => {
    return m('.module-fab', [
        m(titleBlock, {
            title: 'Default FAB',
            content: [
                m(block, {
                    fab: {
                        icon: fabIcon
                    }
                })
            ]
        }),
        m(titleBlock, {
            title: 'Small size',
            content: [
                m(block, {
                    fab: {
                        mini: true,
                        icon: fabIcon,
                        class: 'demo-fab',
                        z: 1
                    }
                }),
                m(block, {
                    fab: {
                        mini: true,
                        icon: fabIcon,
                        class: 'demo-fab green',
                        z: 1
                    }
                }),
                m(block, {
                    fab: {
                        icon: fabIcon,
                        class: 'demo-fab pe-button--fab-mini red',
                        z: 1
                    }
                })
            ]
        }),
        m(titleBlock, {
            title: 'Dark theme, raised more',
            class: 'pe-dark-theme',
            content: [
                m(block, {
                    fab: {
                        icon: fabIcon,
                        class: 'demo-fab',
                        z: 2
                    }
                })
            ]
        }),
        m(titleBlock, {
            title: 'Fully raised',
            content: [
                m(block, {
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
