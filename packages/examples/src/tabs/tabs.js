import m from 'mithril';
import { List, ListTile, Icon } from 'polythene';
import iconListItem from 'mmsvg/templarian/msvg/arrow-right';

import mTabsKitchenSink from './tabs-kitchensink';
import mTabsRouting from './tabs-routing';
import mTabsEvents from './tabs-events';
import mTabsMenu from './tabs-menu';

const links = [{
    label: 'Tabs variations',
    links: [{
        url: '/tabs/tabs-kitchensink',
        name: 'Tabs kitchen sink',
        module: mTabsKitchenSink
    }, {
        url: '/tabs/tabs-routing',
        name: 'Tabs with routing',
        module: mTabsRouting
    }, {
        url: '/tabs/tabs-events',
        name: 'Click events instead of routing',
        module: mTabsEvents
    }, {
        url: '/tabs/tabs-menu',
        name: 'Tabs as menu',
        module: mTabsMenu
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

export default module;
