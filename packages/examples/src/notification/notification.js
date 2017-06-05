import m from 'mithril';
import { Icon, List, ListTile } from 'polythene';
import iconListItem from 'mmsvg/templarian/msvg/arrow-right';

import mSimple from './notification-simple';
import mMessages from './notification-messages';

const links = [{
    label: 'Notifications',
    links: [{
        url: '/notification/simple',
        name: 'Simple page notification',
        module: mSimple
    }, {
        url: '/notification/messages',
        name: 'Snackbars and Notifications',
        module: mMessages
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
            })
        });
    }));
};

export default module;
