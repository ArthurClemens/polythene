import m from 'mithril';
import { Icon, List, ListTile, styler } from 'polythene';
import style from './header-panel-style';
styler.add('polythene-examples-header-panel', style);

import mKitchenSink from './demos/kitchensink';
import mInfinite from './infinite/infinite';
import mCondenses1 from './demos/condenses-1';
import mCondenses2 from './demos/condenses-2';
import mAnimated from './demos/animated';
import mNoReveal from './demos/no-reveal';
import mFixed from './demos/fixed';
import mKeepCondensed from './demos/keep-condensed';
import mBackground1 from './demos/background-1';
import mBackground2 from './demos/background-2';
import mBackground3 from './demos/background-3';
import mBackground4 from './demos/background-4';

import iconListItem from 'mmsvg/templarian/msvg/arrow-right';

const links = [{
    label: 'Small header panels',
    links: [{
        url: '/header-panel/kitchensink',
        name: 'Kitchen sink of small panels',
        module: mKitchenSink
    }]
}, {
    label: 'Infinite',
    links: [{
        url: '/header-panel/infinite',
        name: 'Header panel with infinite scroll',
        module: mInfinite
    }]
}, {
    label: 'Page wide header panels',
    links: [
        {
            url: '/header-panel/condenses-1',
            name: 'Condenses variant 1',
            module: mCondenses1
        }, {
            url: '/header-panel/condenses-2',
            name: 'Condenses variant 2',
            module: mCondenses2
        }, {
            url: '/header-panel/animated',
            name: 'Animated',
            module: mAnimated
        }, {
            url: '/header-panel/no-reveal',
            name: 'No reveal',
            module: mNoReveal
        }, {
            url: '/header-panel/fixed',
            name: 'Fixed header',
            module: mFixed
        }, {
            url: '/header-panel/keep-condensed',
            name: 'Keep condensed header',
            module: mKeepCondensed
        }
    ]
}, {
    label: 'Header background images',
    links: [{
        url: '/header-panel/background-1',
        name: 'Image in header',
        module: mBackground1
    }, {
        url: '/header-panel/background-2',
        name: 'Image fading out 1',
        module: mBackground2
    }, {
        url: '/header-panel/background-3',
        name: 'Image fading out 2',
        module: mBackground3
    }, {
        url: '/header-panel/background-4',
        name: 'Blending images',
        module: mBackground4
    }]
}];

const linkMap = {};
links.forEach((group) => {
    group.links.forEach((linkData) => {
        linkMap[linkData.url] = linkData;
    });
});

const item = function(link) {
    return m(ListTile, {
        title: link.name,
        front: m(Icon, {
            type: 'medium',
            class: 'index-cirle-icon',
            msvg: iconListItem
        }),
        url: {
            href: link.url,
            config: m.route
        }
    });
};

const module = {};
module.controller = () => {
    m.redraw.strategy('diff');
};
module.subview = (path) => {
    const linkData = linkMap[path];
    if (linkData) {
        const subModule = linkData.module;
        return subModule;
    }
    return module;
};
module.view = () => {
    return m('.index-list', links.map(function(linkGroup) {
        return m(List, {
            header: {
                title: linkGroup.label,
                indent: true
            },
            tiles: linkGroup.links.map(function(link) {
                return item(link);
            }),
            hoverable: true
        });
    }));
};

module.updateContentOnScroll = true;
export default module;
