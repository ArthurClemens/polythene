import m from 'mithril';
import { Button, Tabs } from 'polythene';

// Style: Use tabs-routing-style

const TABS = [{
    id: 'new',
    label: 'New'
}, {
    id: 'favourites',
    label: 'Favourites'
}, {
    id: 'saved',
    label: 'Saved'
}];

const tabNavigation = (currentTabFn) => {
    return m('.nav-header', m(Tabs, {
        buttons: TABS,
        autofit: true,
        selectedTab: currentTabFn(),
        activeSelected: true,
        getState: (state) => {
            currentTabFn(state.index);
        }
    }));
};

const module = {};
module.controller = () => {
    return {
        currentTab: m.prop(0)
    };
};
module.view = (ctrl) => {
    const currentTabIndex = ctrl.currentTab();
    const nextTabIndex = (currentTabIndex + 1) % TABS.length;
    return m('.module-tabs.tabs-routing', [
        tabNavigation(ctrl.currentTab),
        m('.tab-content.layout.center-center',
            m('h1', TABS[currentTabIndex].label)
        ),
        // For the fun of it, let the Next button also use events instead of url
        m('.layout.center-center',
            m(Button, {
                class: 'next',
                label: `Next: ${TABS[nextTabIndex].label}`,
                raised: true,
                events: {
                    onclick: () => (ctrl.currentTab(nextTabIndex))
                }
            })
        )
    ]);
};
module.isSub = true;
module.back = '/tabs';
module.title = 'Tabs with events';

export default module;
