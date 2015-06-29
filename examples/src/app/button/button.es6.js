'use strict';

import m from 'mithril';
import button from 'polythene/button/button';
require('./button.css!');

const buttonComponent = function(opts) {
    return m.component(button, opts);
};

const buttonRow = function(opts) {
    return [{
        label: 'Normal',
        raised: opts.raised
    }, {
        label: 'Linked',
        url: {
            href: 'index.html'
        },
        raised: opts.raised
    }, {
        label: 'Disabled',
        disabled: true,
        raised: opts.raised
    }, {
        label: 'Wash only',
        ink: false,
        raised: opts.raised
    }, {
        label: 'Ink only',
        ink: true,
        raised: opts.raised,
        wash: false
    }, {
        label: 'Raised more',
        raised: opts.raised,
        z: 2
    }];
};

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {
            class: args.class
        }, [
            m('.p-block-header', args.title),
            m('.button-row',
                args.content.map(function(c) {
                    return buttonComponent(c);
                })
            )
        ]);
    }
};

let module = {};
module.view = () => {
    return m('.module-button', [
        m.component(titleBlock, {
            title: 'Raised Light / Light theme',
            class: '',
            content: buttonRow({
                raised: true
            })
        }),
        m.component(titleBlock, {
            title: 'Flat Light / Light theme',
            content: buttonRow({
                raised: false
            })
        }),
        m.component(titleBlock, {
            title: 'Raised Dark / Dark theme',
            class: 'dark-theme',
            content: buttonRow({
                raised: true
            })
        }),
        m.component(titleBlock, {
            title: 'Flat Dark / Dark theme',
            class: 'dark-theme',
            content: buttonRow({
                raised: false
            })
        }),
        m.component(titleBlock, {
            title: 'Custom label color',
            class: 'custom-label',
            content: buttonRow({
                raised: false
            })
        }),
        m.component(titleBlock, {
            title: 'Custom background color',
            class: 'custom-bg',
            content: buttonRow({
                raised: true
            })
        })
    ]);
};

export default module;
