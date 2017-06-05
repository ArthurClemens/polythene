import 'polythene/common/object.assign';
import m from 'mithril';
import infinite from 'mithril-infinite';
import { HeaderPanel } from 'polythene';
import { styler } from 'polythene-core-css';
import common from '../demos/common';
import gridStyle from './infinite-grid-style';
import infiniteStyle from './infinite-style';
styler.add('polythene-examples-header-panel-infinite', gridStyle, infiniteStyle);

const TITLE = 'Infinite scroll';
const SUBTITLE = '';
const PANEL_PROPS = {
    class: 'pe-header-panel--fit demo-infinite',
    mode: 'waterfall'
};

const IMG_URL = 'http://arthurclemens.github.io/assets/mithril-infinite-scroll/thumbs/';

let vm = {
    seen: {}
};

// fade in first time only
const showImage = (el, imgUrl) => {
    const url = IMG_URL + imgUrl;
    const populate = () => {
        el.style.backgroundImage = 'url(' + url + ')';
        el.style.opacity = 1;
        vm.seen[url] = 1;
    };
    if (!vm.seen[url]) {
        let img = new Image();
        img.onload = () => {
            populate();
        };
        img.src = url;
    } else {
        populate();
    }
};


const item = (data) => {
    return m('a.grid-item',
        m('.image-holder',
            m('.image', {
                config: (el, inited, context) => {
                    if (context.inited) {
                        return;
                    }
                    if (infinite.isElementInViewport({el: el})) {
                        showImage(el, data.src);
                        context.inited = true;
                    }
                }
            })
        )
    );
};

let content = m(infinite, {
    maxPages: 16, // pages of 12 items each
    item: item,
    pageUrl: page => 'assets/infinite-data/page-' + page + '.json',
    scrollView: '.pe-header-panel__main-container',
    class: 'demo-content demo-infinite grid',
    before: m('p', m.trust('This example uses <a href="https://github.com/ArthurClemens/mithril-infinite">mithril-infinite</a>. In order to update the scrolling contents, we need to set <code>updateContentOnScroll</code> to <code>true</code>, and we assign header panel\'s <code>header-panel__main-container</code> as <code>scrollView</code>.')),
    after: m('p', m.trust('That was the last pug.'))
});

const module = {};
module.view = function() {
    return m('.demo-header-panel',
        m(HeaderPanel, Object.assign({}, {
            header: {
                toolbar: {
                    topBar: common.toolbarRow(''),
                    bottomBar: common.createBottomBar(TITLE, SUBTITLE)
                }
            },
            updateContentOnScroll: true,
            content
        }, PANEL_PROPS))
    );
};
module.hideNav = true;

export default module;
