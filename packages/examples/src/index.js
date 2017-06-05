import 'polythene/common/no-tap-delay';

import m from 'mithril';
import { Dialog, Icon, List, ListTile, HeaderPanel, Theme, styler } from 'polythene';
import nav from './app/nav';
import github from './app/github';

import mButton from './button/button';
import mCard from './card/card';
import mCheckbox from './checkbox/checkbox';
import mDialog from './dialog/dialog';
import mFab from './fab/fab';
import mHeaderPanel from './header-panel/header-panel';
import mIcon from './icon/icon';
import mIconButton from './icon-button/icon-button';
import mLayout from './layout/layout';
import mList from './list/list';
import mListControls from './list-controls/list-controls';
import mListTile from './list-tile/list-tile';
import mMenu from './menu/menu';
import mNotification from './notification/notification';
import mRadioButton from './radio-button/radio-button';
import mRipple from './ripple/ripple';
import mSearch from './search/search';
import mShadow from './shadow/shadow';
import mSlider from './slider/slider';
import mSpeedTest from './speed-test/speed-test';
import mSpinner from './spinner/spinner';
import mSVG from './svg/svg';
import mSwitch from './switch/switch';
import mTabs from './tabs/tabs';
import mTabsMenu from './tabs/tabs-menu';
import mTabsRouting from './tabs/tabs-routing';
import mTextfield from './textfield/textfield';
import mTheming from './theming';
import mToolbar from './toolbar/toolbar';
import mValidation from './validation/validation';

import 'polythene/layout/theme/theme';
import appStyle from './app/app-style';
styler.add('polythene-examples-app', appStyle);

import listItemIcon from 'mmsvg/templarian/msvg/arrow-right';
import recycleIcon from './assets/recycle';

const links = [{
    label: 'Components',
    links: [{
        url: '/header-panel',
        module: mHeaderPanel,
        name: 'Header Panel',
        doc: 'http://polythene.js.org/#header-panel'
    }, {
        url: '/toolbar',
        module: mToolbar,
        name: 'Toolbar',
        doc: 'http://polythene.js.org/#toolbar'
    }, {
        url: '/list',
        module: mList,
        name: 'List'
    }, {
        url: '/list-controls',
        module: mListControls,
        name: 'List Controls'
    }, {
        url: '/dialog',
        module: mDialog,
        name: 'Dialog'
    }, {
        url: '/menu',
        module: mMenu,
        name: 'Menu'
    }, {
        url: '/tabs',
        module: mTabs,
        name: 'Tabs'
    }, {
        url: '/card',
        module: mCard,
        name: 'Card'
    }, {
        url: '/notification',
        module: mNotification,
        name: 'Notification and Snackbar'
    }, {
        url: '/button',
        module: mButton,
        name: 'Button'
    }, {
        url: '/icon-button',
        module: mIconButton,
        name: 'Icon Button'
    }, {
        url: '/fab',
        module: mFab,
        name: 'Floating Action Button'
    }, {
        url: '/slider',
        module: mSlider,
        name: 'Slider'
    }, {
        url: '/list-tile',
        module: mListTile,
        name: 'List Tile'
    }, {
        url: '/textfield',
        module: mTextfield,
        name: 'Text field'
    }, {
        url: '/checkbox',
        module: mCheckbox,
        name: 'Checkbox'
    }, {
        url: '/radio-button',
        module: mRadioButton,
        name: 'Radio button'
    }, {
        url: '/search',
        module: mSearch,
        name: 'Search'
    }, {
        url: '/spinner',
        module: mSpinner,
        name: 'Spinner'
    }, {
        url: '/switch',
        module: mSwitch,
        name: 'Switch'
    }, {
        url: '/svg',
        module: mSVG,
        name: 'SVG'
    }, {
        url: '/icon',
        module: mIcon,
        name: 'Icon'
    }, {
        url: '/ripple',
        module: mRipple,
        name: 'Ripple'
    }, {
        url: '/shadow',
        module: mShadow,
        name: 'Shadow'
    }, {
        url: '/validation',
        name: 'Validation',
        module: mValidation
    }]
}, {
    label: 'Layout and theming',
    links: [{
        url: '/layout',
        module: mLayout,
        name: 'Layout'
    }, {
        url: '/theming',
        module: mTheming,
        name: 'Custom theme'
    }]
}, {
    label: 'Tests',
    links: [{
        url: '/speed-test',
        module: mSpeedTest,
        name: 'Mobile tap speed tests'
    }]
}];

const additionalRoutes = [{
    url: '/tabs-routing',
    module: mTabsRouting
}, {
    url: '/tabs-menu',
    module: mTabsMenu
}];

const linkMap = {};
links.forEach((group) => {
    group.links.forEach((linkData) => {
        linkMap[linkData.url] = linkData;
    });
});
additionalRoutes.forEach((linkData) => {
    linkMap[linkData.url] = linkData;
});

const sortLinkData = ((a, b) => {
    const a1 = a.name.toLowerCase();
    const b1 = b.name.toLowerCase();
    return (a1 > b1) ? 1 : (a1 < b1 ? -1 : 0);
});

const getRouteBase = (route) => {
    return '/' + route.split(/\//)[1];
};

const item = function(link) {
    return m(ListTile, {
        title: link.name,
        front: m(Icon, {
            type: 'medium',
            class: 'index-cirle-icon',
            msvg: listItemIcon
        }),
        url: {
            href: link.url,
            config: (link.config !== undefined) ? link.config : m.route
        }
    });
};

const indexContent = {
    view: function() {
        let minScale = 22 / 32;
        let onHeaderTransform = function(e) {
            let titleStyle = document.querySelector('.pe-title').style;
            let middle = e.height - e.condensedHeight;
            let scale = Math.max(minScale, (middle - e.y) / (middle / (1 - minScale)) + minScale);
            titleStyle.transform = titleStyle.webkitTransform =
                'scale(' + scale + ') translateZ(0)';
        };

        return m('.demo-content',
            m(HeaderPanel, {
                class: 'app-header index-header',
                mode: 'waterfall-tall',
                keepCondensedHeader: true,
                header: {
                    toolbar: {
                        bottomBar: m('.pe-toolbar__title--indent.pe-title', [
                            m(Icon, {
                                msvg: recycleIcon,
                                class: 'logo'
                            }),
                            'Polythene Examples'
                        ])
                    }
                },
                content: [
                    m('.index',
                        m('.index-list', [
                            links.map((linkGroup) => {
                                return m(List, {
                                    header: {
                                        title: linkGroup.label,
                                        indent: true
                                    },
                                    tiles: linkGroup.links.sort(sortLinkData).map((link) => {
                                        return link.hidden ? null : item(link);
                                    }),
                                    hoverable: true
                                });
                            })
                        ])
                    ),
                    github
                ],
                transform: onHeaderTransform,
                restoreScrollPositionId: 'index'
            })
        );
    }
};

const getNewModule = (ln) => {
    if (!ln) {
        return null;
    }
    const dynMod = ln.module;
    return dynMod ? (dynMod.subview ? dynMod.subview(m.route()) : dynMod) : null;
};

const app = {};
app.vm = {
    module: m.prop(),
    moduleName: null
};
app.controller = () => {
    m.redraw.strategy('diff');
    // use flexible routing to support nested route calls (f.i. in the dialog and tabs examples)
    const route = getRouteBase(m.route());
    const link = linkMap[route];
    app.vm.module(getNewModule(link));
    const linkName = link && link.name ? link.name : 'index';
    app.vm.moduleName = linkName;
    const baseTitle = 'Polythene Examples';
    document.title = linkName ? (baseTitle + ': ' + linkName) : baseTitle;
};

app.view = () => {
    const module = app.vm.module();
    if (module) {
        return [
            module.hideNav ? m('.demo-content', m(module)) : nav(module.title || app.vm.moduleName, [
                m('.demo-content', m(module)),
                github
            ], {
                updateContentOnScroll: true, //module.updateContentOnScroll || false,
                isSub: module.isSub,
                back: module.back
            }),
            m(Dialog)
        ];
    } else {
        return [
            m(indexContent),
            m(Dialog)
        ];
    }
};

m.route.mode = 'hash';
m.route(document.body, '/', {
    '/:any...': app
});

// When going to another page and then hitting the back button
// on Safari 9.0.x, the scrollable panes are frozen.
// This script reloads the view.
window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
        setTimeout(() => {
            window.location.reload();
        }, 0);
    }
}, false);
