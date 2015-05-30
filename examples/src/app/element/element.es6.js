'use strict';

import m from 'mithril';
import element from 'polythene/element/element';
import nav from 'app/app/nav';
import github from 'app/app/github';

require('polythene-theme/theme');
require('app/app/app.css!');

const NAME = 'Element';

let app,
    block,
    titleBlock,
    content;

block = {
    view: function(ctrl, args) {
        return m.component(element, args.element);
    }
};

titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {class: args.class || ''}, [
            m('.p-block-header', args.title),
            args.content
        ]);
    }
};

content = [
    m.component(titleBlock, {
        title: 'Testing an element',
        content: [
            m.component(block, {
                element: {
                    content: 'This is an element',
                    cache: true
                }
            })
        ]
    })
];

app = {};
app.view = function() {
    return [
        nav(NAME, [content, github])
    ];
};

m.mount(document.body, app);
