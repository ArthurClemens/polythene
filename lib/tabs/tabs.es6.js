'use strict';

import p from 'polythene/polythene/polythene';
import m from 'mithril';
import button from 'polythene/button/button';
require('polythene-theme/tabs/tabs');

const SLIDE_DURATION = 0.2; // seconds

const setSelectedTab = (index, animate, ctrl) => {
    ctrl.selectedTab(index);
    const selectedTabEl = ctrl.tabs[index];
    if (selectedTabEl && ctrl.tabIndicatorEl && ctrl.tabsEl) {
        const parentRect = ctrl.tabsEl.getBoundingClientRect();
        const rect = selectedTabEl.getBoundingClientRect();
        const style = ctrl.tabIndicatorEl.style;
        const scaleX = 1 / parentRect.width * rect.width;
        const translateX = (rect.left - parentRect.left + ctrl.tabsEl.scrollLeft) / scaleX;
        const transformCmd = 'scaleX(' + scaleX + ') translate(' + translateX + 'px)';
        const duration = animate ? SLIDE_DURATION : 0;
        style['transition-duration'] =
            style['-webkit-transition-duration'] =
            style['-moz-transition-duration'] =
            style['-o-transition-duration'] = duration + 's';
        style.transform =
            style['-webkit-transform'] =
            style['-moz-transform'] =
            style['-o-transform'] = transformCmd;
    }
};

const createTab = (index, opts, tabsOpts, ctrl) => {
    const autofit = (tabsOpts.scrollable || tabsOpts.centered) ? false : (tabsOpts.autofit ? true : false);
    const tabButtonOptions = Object.assign({}, {
        content: m('.layout.vertical', [
            m('.flex'),
            m('.label', opts.label),
            m('.flex')
        ]),
        class: ['tab', (autofit ? 'flex' : 'flex none'), opts.class].join(' '),
        wash: false,
        events: {
            onclick: () => setSelectedTab(index, tabsOpts.noIndicatorSlide ? false : true, ctrl)
        },
        config: (el, inited) => {
            if (inited) {
                return;
            }
            ctrl.tabs.push(el);
        }
    }, opts);
    return m.component(button, tabButtonOptions);
};

const createView = (ctrl, opts = {}) => {
    const tag = opts.tag || 'div';
    const props = {
        class: ['tabs', opts.class].join(' '),
        config: (el, inited, context) => {
            if (opts.config) {
                opts.config(el, inited, context);
            }
            if (inited) {
                return;
            }
            ctrl.tabsEl = el;

            if (opts.largestWidth) {
                const widths = ctrl.tabs.map(tab => tab.getBoundingClientRect().width).sort();
                const largest = widths[0];
                ctrl.tabs.forEach(tab => tab.style.width = largest + 'px');
            }

            setSelectedTab(opts.selectedTab || 0, false, ctrl);

            p.addListener('resize', () => {
                setSelectedTab(ctrl.selectedTab(), false, ctrl);
                m.redraw();
            });
        }
    };
    const tabRow = opts.buttons.map((buttonOpts, index) => {
        buttonOpts = Object.assign(buttonOpts, {
            selected: index === ctrl.selectedTab()
        });
        return createTab(index, buttonOpts, opts, ctrl);
    });
    const content = m('div', {
        class: ['tabRow layout horizontal', opts.scrollable ? 'indent' : null].join(' ')
    }, [
        opts.centered ? m('.flex') : null,
        tabRow,
        opts.hideIndicator ? null : m('.tabIndicator', {
            config: (el, inited) => {
                if (inited) {
                    return;
                }
                ctrl.tabIndicatorEl = el;
            }
        }),
        opts.centered ? m('.flex') : null
    ]);
    return m(tag, props, p.insertContent(content, opts));
};

const component = {
    controller: () => {
        return {
            tabsEl: null,
            tabs: [],
            tabIndicatorEl: null,
            selectedTab: m.prop(0)
        };
    },
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
