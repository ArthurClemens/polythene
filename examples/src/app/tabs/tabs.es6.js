'use strict';

import m from 'mithril';
import tabs from 'polythene/tabs/tabs';
import toolbar from 'polythene/toolbar/toolbar';
import iconBtn from 'polythene/icon-button/icon-button';
import nav from 'app/app/nav';
import github from 'app/app/github';

require('polythene-theme/theme');
require('app/app/app.css!');
require('./tabs.css!');

const NAME = 'Tabs';

const threeButtons = [
	{
		label: 'New'
	},
	{
		label: 'Favorites'
	},
	{
		label: 'Saved'
	}
];

const longLabels = [
	{
		label: 'New'
	},
	{
		label: 'A very long label that does not fit'
	},
	{
		label: 'Saved'
	}
];

const longList = [
	{
		label: 'Web'
	},
	{
		label: 'Shopping'
	},
	{
		label: 'Videos'
	},
	{
		label: 'Images'
	},
	{
		label: 'Books'
	},
	{
		label: 'More'
	}
];


const btn = function(group, name) {
    return m.component(iconBtn, {
        icon: {
            svg: {
                group: group,
                name: name
            }
        }
    });
};

const toolbarRow = [
    btn('navigation', 'menu'),
    m('span.flex', 'Page title'),
    btn('action', 'search'),
    btn('navigation', 'more-vert')
];

const titleBlock = {
    view: (ctrl, args) => {
        return m('.p-block', [
            m('.p-block-header', args.title),
            args.info ? m('p', args.info) : null,
            args.content
        ]);
    }
};


const content = m('.demo-content', [

    m.component(titleBlock, {
        title: 'Default (no autofit)',
        content: m('.tabArea.mobile',
			m.component(tabs, {
				class: 'demo-tabs mobile',
				buttons: threeButtons
			})
		)
    }),

    m.component(titleBlock, {
        title: 'Autofit',
        content: m('.tabArea.mobile',
			m.component(tabs, {
				class: 'demo-tabs mobile',
				buttons: threeButtons,
				autofit: true
			})
		)
    }),

    m.component(titleBlock, {
        title: 'Centered (auto width)',
        content: m('.tabArea.mobile',
			m.component(tabs, {
				class: 'demo-tabs mobile',
				buttons: threeButtons,
				centered: true,
				autofit: false
			})
		)
    }),

    m.component(titleBlock, {
        title: 'Centered (fixed width in CSS)',
        content: m('.tabArea',
			m.component(tabs, {
				class: 'demo-tabs fixedWidth',
				buttons: threeButtons,
				centered: true
			})
		)
    }),

    m.component(titleBlock, {
        title: 'Preselected tab',
        content: m('.tabArea.mobile',
			m.component(tabs, {
				class: 'demo-tabs mobile',
				buttons: threeButtons,
				autofit: true,
				selectedTab: 1
			})
		)
    }),

	m.component(titleBlock, {
        title: 'In toolbar',
        content: m('div',
			m.component(toolbar, {
				mode: 'medium-tall',
				topBar: toolbarRow,
				bottomBar: m.component(tabs, {
					class: 'demo-tabs',
					buttons: threeButtons,
					autofit: true
				})
			})
		)
    }),

	m.component(titleBlock, {
        title: 'In toolbar and scrollable',
        content: m('.tabArea.mobile.hasToolbar',
			m.component(toolbar, {
				mode: 'medium-tall',
				topBar: toolbarRow,
				bottomBar: m.component(tabs, {
					class: 'demo-tabs',
					buttons: longList,
					scrollable: true
				})
			})
		)
    }),

    m.component(titleBlock, {
        title: 'Long label: wrap to second line',
        content: m('.tabArea.mobile',
			m.component(tabs, {
				class: 'demo-tabs mobile',
				buttons: longLabels,
				autofit: true
			})
		)
    }),

    m.component(titleBlock, {
        title: 'Hide indicator',
        content: m('.tabArea.mobile',
			m.component(tabs, {
				class: 'demo-tabs mobile',
				buttons: threeButtons,
				autofit: false,
				hideIndicator: true
			})
		)
    }),

    m.component(titleBlock, {
        title: 'No indicator slide',
        content: m('.tabArea.mobile',
			m.component(tabs, {
				class: 'demo-tabs mobile',
				buttons: threeButtons,
				autofit: false,
				noIndicatorSlide: true
			})
		)
    })

/*
    m.component(titleBlock, {
        title: 'More button dropdown TODO',
        content: m('.tabArea.mobile',
			m.component(tabs, {
				class: 'demo-tabs mobile',
				buttons: threeButtons,
				autofit: false,
				scrollable: true
			})
		)
    }),

    m.component(titleBlock, {
        title: 'Icon buttons TODO',
        content: m('.tabArea.mobile',
			m.component(tabs, {
				class: 'demo-tabs mobile',
				buttons: threeButtons,
				autofit: false,
				scrollable: true
			})
		)
    })
*/


]);

let app = {};
app.view = function() {
    return [
        nav(NAME, [content, github])
    ];
};

m.mount(document.body, app);
