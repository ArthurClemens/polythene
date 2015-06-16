'use strict';

import infinite from 'mithril-infinite';
import m from 'mithril';
import nav from 'app/app/nav';

require('polythene-theme/theme');
require('app/app/app.css!');
require('./infinite.css!');
require('./grid.css!');

const NAME = 'Header panel with infinite scroll';

const IMG_URL = 'http://arthurclemens.github.io/assets/mithril-infinite-scroll/thumbs/';

const item = (data) => {
    return m('a.grid-item',
        m('.image-holder',
            m('.image', {
                config: (el, inited, context) => {
                    if (context.inited) {
                        return;
                    }
                    if (infinite.isElementInViewport({el: el})) {
                        const url = IMG_URL + data.src;
                        el.style.backgroundImage = 'url(' + url + ')';
                        context.inited = true;
                    }
                }
            })
        )
    );
};

let content = m('.demo-content', [
    m.component(infinite, {
        maxPages: 16, // pages of 12 items each
        item: item,
        pageUrl: page => 'app/infinite/data/page-' + page + '.json',
        class: 'grid'
    })
]);

let app = {};
app.view = function() {
    return [
        nav(NAME, [content])
    ];
};

m.mount(document.body, app);
