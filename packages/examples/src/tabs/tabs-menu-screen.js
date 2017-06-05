import m from 'mithril';
import { Tabs } from 'polythene';

import iconHome from 'mmsvg/google/msvg/action/home';
import iconHeart from 'mmsvg/templarian/msvg/heart';
import iconBell from 'mmsvg/templarian/msvg/bell';
import iconCog from 'mmsvg/templarian/msvg/settings';
import iconSearch from 'mmsvg/google/msvg/action/search';

const menu = [{
    label: 'Home',
    icon: {
        msvg: iconHome
    },
    url: {
        href: '/tabs-menu',
        config: m.route
    }
}, {
    label: 'Search',
    icon: {
        msvg: iconSearch
    },
    url: {
        href: '/tabs-menu/search',
        config: m.route
    }
}, {
    label: 'Favs',
    icon: {
        msvg: iconHeart
    },
    url: {
        href: '/tabs-menu/favorites',
        config: m.route
    }
}, {
    label: 'Notifs',
    icon: {
        msvg: iconBell
    },
    url: {
        href: '/tabs-menu/notifs',
        config: m.route
    }
}, {
    label: 'Settings',
    icon: {
        msvg: iconCog
    },
    url: {
        href: '/tabs-menu/settings',
        config: m.route
    }
}];

const menuNoTitle = menu.map((tab) => {
    const copy = Object.assign({}, tab);
    copy.label = undefined;
    return copy;
});

const repeatText = function(text, count) {
    let out = '';
    while (count > 0) {
        out += text;
        count--;
    }
    return out;
};
const demoContent = repeatText('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', 16);

const indexForRoute = (route) => {
    return menu.reduce((previousValue, tab, index) => {
        if (route === tab.url.href) {
            return index;
        } else {
            return previousValue;
        }
    }, 0);
};

const content = {};
content.view = (ctrl, opts) => {
    return m('.demo-content.flex', {
        config: (el) => {
            if (opts.reset) {
                el.scrollTop = 0;
            }
        }
    }, [
        m('h1', opts.title),
        m.trust(demoContent)
    ]);
};

const module = {};
module.controller = () => {
    m.redraw.strategy('diff');
    return {
        selectedTabIndex: -1,
        previousSelectedTab: -1
    };
};
module.view = (ctrl, opts) => {
    const selectedTabIndex = indexForRoute(m.route());
    let resetContent = false;
    if (ctrl.selectedTabIndex !== selectedTabIndex) {
        ctrl.selectedTabIndex = selectedTabIndex;
        resetContent = true;
    }
    return m('.screen.layout.vertical', [
        m(content, {
            title: menu[selectedTabIndex].label,
            reset: resetContent
        }),
        m(Tabs, {
            class: 'demo-tabs end',
            menu: true,
            buttons: opts.labels ? menu : menuNoTitle,
            autofit: true,
            hideIndicator: true,
            selectedTab: selectedTabIndex
        })
    ]);
};

export default module;
