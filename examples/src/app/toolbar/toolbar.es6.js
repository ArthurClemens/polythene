'use strict';

import m from 'mithril';
import toolbar from 'polythene/toolbar/toolbar';
import iconBtn from 'polythene/icon-button/icon-button';
require('./toolbar.css!');

const btn = function(group, name) {
    return m.component(iconBtn, {
        icon: {
            svg: {
                group: group,
                name: name
            }
        }
    });
};

const toolbarRow = [
    btn('navigation', 'menu'),
    m('span.flex', 'Toolbar title lorem ipsum dolor sit amet'),
    btn('action', 'search'),
    btn('action', 'favorite'),
    btn('navigation', 'more-vert')
];

const toolbarBlock = {
    view: function(ctrl, args) {
        return m('.p-block', [
            m('.p-block-header', args.label),
            m.component(toolbar, args.toolbar)
        ]);
    }
};

let module = {};
module.view = () => {
    return m('.module-toolbar', [
        m.component(toolbarBlock, {
            label: 'Content',
            toolbar: {
                content: toolbarRow
            }
        }),
        m.component(toolbarBlock, {
            label: 'Class dark-theme',
            toolbar: {
                class: 'dark-theme',
                content: toolbarRow
            }
        }),
        m.component(toolbarBlock, {
            label: 'Tall with elements pinned to the bottom',
            toolbar: {
                mode: 'tall',
                bottomBar: toolbarRow
            }
        }),
        m.component(toolbarBlock, {
            label: 'Medium-tall with label aligns to the bottom',
            toolbar: {
                mode: 'medium-tall',
                topBar: toolbarRow,
                bottomBar: m.trust('<span flex class="indent">Bottom content</span>')
            }
        }),
        m.component(toolbarBlock, {
            label: 'Three bars',
            toolbar: {
                mode: 'tall',
                topBar: toolbarRow,
                middleBar: m.trust('<div flex class="middle indent">label aligns to the middle</div>'),
                bottomBar: m.trust('<div class="bottom indent" style="color: #666; font-size: 18px;">some stuffs align to the bottom</div>')
            }
        }),
        m.component(toolbarBlock, {
            label: 'With loader bar',
            toolbar: {
                mode: 'tall',
                topBar: toolbarRow,
                middleBar: m.trust('<div flex class="middle indent">element (e.g. progress) fits at the bottom of the toolbar</div>'),
                bottomBar: m.trust('<div flex class="bottom fit" style="height: 20px; background-color: #0f9d58;"></div>')
            }
        })
    ]);
};

export default module;
