import m from 'mithril';
import { Button, Tabs, styler } from 'polythene';
import style from './tabs-routing-style';
styler.add('polythene-examples-tabs-routing', style);

const TABS = [{
    label: 'New',
    url: {
        href: '/tabs-routing',
        config: m.route
    }
}, {
    label: 'Favourites',
    url: {
        href: '/tabs-routing/favourites',
        config: m.route
    }
}, {
    label: 'Saved',
    url: {
        href: '/tabs-routing/saved',
        config: m.route
    }
}];

const tabNavigation = (currentTabFn) => {
    return m('.nav-header', m(Tabs, {
        buttons: TABS,
        autofit: true,
        selectedTab: currentTabFn(),
        activeSelected: true
    }));
};

const indexForRoute = (route) => {
    return TABS.reduce((previousValue, tab, index) => {
        if (route === tab.url.href) {
            return index;
        } else {
            return previousValue;
        }
    }, 0);
};

const module = {};
module.controller = () => {
    const index = indexForRoute(m.route());
    return {
        currentTab: m.prop(index)
    };
};
module.view = (ctrl) => {
    const currentTabIndex = indexForRoute(m.route());
    ctrl.currentTab(currentTabIndex);
    const nextTabIndex = (currentTabIndex + 1) % TABS.length;
    return m('.module-tabs.tabs-routing', [
        tabNavigation(ctrl.currentTab),
        m('.tab-content.layout.center-center',
            m('h1', TABS[currentTabIndex].label)
        ),
        m('.layout.center-center',
            m(Button, {
                class: 'next',
                label: `Next: ${TABS[nextTabIndex].label}`,
                raised: true,
                url: {
                    href: TABS[nextTabIndex].url.href,
                    config: m.route
                }
            })
        )
    ]);
};
module.isSub = true;
module.back = '/tabs';
module.title = 'Tabs with routing';

export default module;
