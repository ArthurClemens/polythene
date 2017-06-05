import m from 'mithril';
import { IconButton, Toolbar, Tabs } from 'polythene';
import { styler } from 'polythene-core-css';
import style from './tabs-kitchensink-style';
styler.add('polythene-examples-tabs', style);

import iconHeart from 'mmsvg/templarian/msvg/heart';
import iconBell from 'mmsvg/templarian/msvg/bell';
import iconCog from 'mmsvg/templarian/msvg/settings';
import iconMenu from 'mmsvg/google/msvg/navigation/menu';
import iconSearch from 'mmsvg/google/msvg/action/search';
import iconMore from 'mmsvg/google/msvg/navigation/more-vert';

import arrowBack from 'mmsvg/google/msvg/navigation/arrow-back';
import arrowForward from 'mmsvg/google/msvg/navigation/arrow-forward';

const threeButtons = [{
    label: 'New',
}, {
    label: 'My Favorites'
}, {
    label: 'Saved'
}];

const iconButtons = [{
    icon: {
        msvg: iconHeart
    }
}, {
    icon: {
        msvg: iconBell
    }
}, {
    icon: {
        msvg: iconCog
    }
}];

const iconTextButtons = [{
    icon: {
        msvg: iconHeart
    },
    label: 'Favs'
}, {
    icon: {
        msvg: iconBell
    },
    label: 'Notifs'
}, {
    icon: {
        msvg: iconCog
    },
    label: 'Custom'
}];

const longLabels = [{
    label: 'New'
}, {
    label: 'A very long label that does not fit'
}, {
    label: 'Saved'
}];

const longList = [{
    label: 'Web'
}, {
    label: 'Shopping'
}, {
    label: 'Videos'
}, {
    label: 'Images'
}, {
    label: 'Books'
}, {
    label: 'More'
}];

const btn = function(msvg) {
    return m(IconButton, {
        icon: {
            msvg: msvg
        }
    });
};

const toolbarRow = [
    btn(iconMenu),
    m('span.flex', 'Page title'),
    btn(iconSearch),
    btn(iconMore)
];

const titleBlock = {
    view: (ctrl, args) => {
        return m('.p-block', {class: args.class || ''}, [
            m('.p-block-header', args.title),
            args.info ? m('p', args.info) : null,
            args.content
        ]);
    }
};


const module = {};
module.view = () => {
    return m('.module-tabs.tabs-kitchensink', [

        m(titleBlock, {
            title: 'Autofit',
            content: m('.tabArea',
                m(Tabs, {
                    class: 'demo-tabs',
                    buttons: threeButtons,
                    autofit: true
                })
            )
        }),

        m(titleBlock, {
            title: 'Default (no autofit)',
            content: m('.tabArea',
                m(Tabs, {
                    class: 'demo-tabs',
                    buttons: threeButtons
                })
            )
        }),

        m(titleBlock, {
            title: 'Centered (auto width)',
            content: m('.tabArea',
                m(Tabs, {
                    class: 'demo-tabs',
                    buttons: threeButtons,
                    centered: true,
                    autofit: false
                })
            )
        }),

        m(titleBlock, {
            title: 'Centered (largest tab width)',
            content: m('.tabArea',
                m(Tabs, {
                    class: 'demo-tabs',
                    buttons: threeButtons,
                    centered: true,
                    largestWidth: true
                })
            )
        }),

        m(titleBlock, {
            title: 'Centered (fixed width in CSS)',
            content: m('.tabArea',
                m(Tabs, {
                    class: 'demo-tabs fixedWidth',
                    buttons: threeButtons,
                    centered: true
                })
            )
        }),

        m(titleBlock, {
            title: 'Preselected tab',
            content: m('.tabArea',
                m(Tabs, {
                    class: 'demo-tabs',
                    buttons: threeButtons,
                    autofit: true,
                    selectedTab: 1
                })
            )
        }),

        m(titleBlock, {
            title: 'Custom color',
            class: 'custom-color',
            content: m('.tabArea',
                m(Tabs, {
                    class: 'demo-tabs',
                    buttons: threeButtons,
                    autofit: true
                })
            )
        }),

        m(titleBlock, {
            title: 'In toolbar',
            content: m('.tabArea.hasToolbar',
                m(Toolbar, {
                    mode: 'medium-tall',
                    class: 'pe-toolbar--tabs',
                    topBar: toolbarRow,
                    bottomBar: m(Tabs, {
                        class: 'demo-tabs',
                        buttons: threeButtons,
                        autofit: true
                    })
                })
            )
        }),

        m(titleBlock, {
            title: 'In toolbar and scrollable (small)',
            content: m('.tabArea.small.hasToolbar',
                m(Toolbar, {
                    mode: 'medium-tall',
                    class: 'pe-toolbar--tabs',
                    topBar: toolbarRow,
                    bottomBar: m(Tabs, {
                        class: 'demo-tabs',
                        buttons: longList,
                        scrollable: true,
                        small: true
                    })
                })
            )
        }),

        m(titleBlock, {
            title: 'In toolbar and scrollable (desktop)',
            content: m('.tabArea.hasToolbar',
                m(Toolbar, {
                    mode: 'medium-tall',
                    class: 'pe-toolbar--tabs',
                    topBar: toolbarRow,
                    bottomBar: m(Tabs, {
                        class: 'demo-tabs',
                        buttons: longList,
                        scrollable: true
                    })
                })
            )
        }),

        m(titleBlock, {
            title: 'Custom arrows',
            content: m('.tabArea.hasToolbar',
                m(Toolbar, {
                    mode: 'medium-tall',
                    class: 'pe-toolbar--tabs',
                    topBar: toolbarRow,
                    bottomBar: m(Tabs, {
                        class: 'demo-tabs',
                        buttons: longList,
                        scrollable: true,
                        scrollIconBackward: {
                            msvg: arrowBack
                        },
                        scrollIconForward: {
                            msvg: arrowForward
                        }
                    })
                })
            )
        }),

        m(titleBlock, {
            title: 'Long label: wrap to second line',
            content: m('.tabArea.small',
                m(Tabs, {
                    class: 'demo-tabs',
                    buttons: longLabels,
                    autofit: true,
                    small: true
                })
            )
        }),

        m(titleBlock, {
            title: 'Hide indicator',
            content: m('.tabArea.small',
                m(Tabs, {
                    class: 'demo-tabs',
                    buttons: threeButtons,
                    autofit: true,
                    hideIndicator: true,
                    small: true
                })
            )
        }),

        m(titleBlock, {
            title: 'No indicator slide',
            content: m('.tabArea.small',
                m(Tabs, {
                    class: 'demo-tabs',
                    buttons: threeButtons,
                    autofit: true,
                    noIndicatorSlide: true,
                    small: true
                })
            )
        }),

        m(titleBlock, {
            title: 'No ink',
            content: m('.tabArea.small',
                m(Tabs, {
                    class: 'demo-tabs',
                    buttons: threeButtons,
                    autofit: true,
                    tabsOpts: {
                        ink: false
                    },
                    small: true
                })
            )
        }),

        m(titleBlock, {
            title: 'Tabs with icons',
            content: m('.tabArea.small',
                m(Tabs, {
                    class: 'demo-tabs',
                    buttons: iconButtons,
                    autofit: true,
                    small: true
                })
            )
        }),

        m(titleBlock, {
            title: 'Tabs with icons (dark theme)',
            content: m('.tabArea.small',
                m(Tabs, {
                    class: 'pe-dark-theme demo-tabs',
                    buttons: iconButtons,
                    autofit: true,
                    small: true
                })
            )
        }),

        m(titleBlock, {
            title: 'Tabs with icons and text',
            content: m('.tabArea.small',
                m(Tabs, {
                    class: 'demo-tabs',
                    buttons: iconTextButtons,
                    autofit: true,
                    small: true
                })
            )
        })

        /*
        m(titleBlock, {
            title: 'More button dropdown TODO',
            content: m('.tabArea.small',
                m(Tabs, {
                    class: 'demo-tabs small',
                    buttons: threeButtons,
                    autofit: false,
                    scrollable: true
                })
            )
        }),
        */

    ]);
};
module.isSub = true;
module.back = '/tabs';
module.title = 'Tabs kitchen sink';

export default module;
