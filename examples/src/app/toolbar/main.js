define(function(require) {
    'use strict';

    var NAME = 'Toolbar',
        m = require('mithril'),
        toolbar = require('polythene/toolbar/toolbar'),
        iconBtn = require('polythene/icon-button/icon-button'),
        nav = require('nav'),
        github = require('github'),
        app,
        toolbarBlock,
        content,
        btn,
        toolbarRow;

    require('polythene/font-roboto/font-roboto');
    require('polythene/theme/theme');
    require('css!app-css');

    btn = function(group, name) {
        return m.component(iconBtn, {
            icon: {
                svg: {
                    group: group,
                    name: name
                }
            }
        });
    };

    toolbarRow = [
        btn('navigation', 'menu'),
        m('span[flex]', 'Toolbar title lorem ipsum dolor sit amet'),
        btn('action', 'search'),
        btn('action', 'favorite'),
        btn('navigation', 'more-vert')
    ];

    toolbarBlock = {
        view: function(ctrl, args) {
            return m('.p-block', [
                m('.p-block-header', args.label),
                m.component(toolbar, args.toolbar)
            ]);
        }
    };

    content = m('.demo-content', [
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
        }),

        github
    ]);
    
    app = {};
    app.view = function() {
        return [
            nav(NAME, content)
        ];
    };

    m.mount(document.body, app);
});