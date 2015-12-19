import 'polythene/common/object.assign';
import p from 'polythene/polythene/polythene';
require('polythene/common/object.assign');
import m from 'mithril';
import button from 'polythene/button/button';
import icon from 'polythene/icon/icon';
import iconBtn from 'polythene/icon-button/icon-button';
import scrollTo from 'polythene/common/scroll-to';
import 'polythene-theme/tabs/tabs';

const SLIDE_DURATION = 250; // milliseconds
const SCROLL_DURATION = 380; // milliseconds
const POSITION_LEFT = (1 << 1);
const POSITION_RIGHT = (1 << 2);

const getNewIndex = (index, tabs) => {
    const minTabIndex = 0;
    const maxTabIndex = tabs.length - 1;
    return {
        left: Math.max(index - 1, minTabIndex),
        right: Math.min(index + 1, maxTabIndex)
    };
};

const handleScrollButtonClick = (e, direction, ctrl) => {
    e.stopPropagation();
    e.preventDefault();
    const tabs = ctrl.tabs;
    const currentTabIndex = ctrl.selectedTabIndex();
    const newIndex = getNewIndex(currentTabIndex, tabs)[direction];
    scrollToTab(newIndex, tabs, ctrl.scrollerEl);
    if (newIndex !== currentTabIndex) {
        setSelectedTab(newIndex, true, ctrl);
        updateScrollButtons(ctrl);
        m.redraw();
    }
};

const createScrollButton = (ctrl, position, opts) => {
    return m.component(iconBtn, {
        class: ['scroll-btn', (position === POSITION_LEFT ? 'scroll-btn-left' : 'scroll-btn-right')].join(' '),
        icon: position === POSITION_LEFT ? opts.scrollIconLeft : opts.scrollIconRight,
        disabled: opts.disabled,
        ripple: {
            center: true
        },
        config: (el) => {
            if (ctrl.scrollButtonLeftEl && ctrl.scrollButtonRightEl) {
                return;
            }
            if (position === POSITION_LEFT) {
                ctrl.scrollButtonLeftEl = el;
            } else {
                ctrl.scrollButtonRightEl = el;
            }
        },
        events: {
            onclick: (position === POSITION_LEFT) ? (e) => {
                handleScrollButtonClick(e, 'left', ctrl);
            } : (e) => {
                handleScrollButtonClick(e, 'right', ctrl);
            }
        }
    });
};

const setTabMaxWidth = (ctrl) => {
    // use the smallest: tab max-width 264 or view width minus 56
    // this is really only for screens smaller than 320px
    const tabsElWidth = ctrl.tabsEl.getBoundingClientRect().width;
    const maxWidth = Math.min((tabsElWidth - 56), 264);
    ctrl.tabs.forEach(tab => tab.style.maxWidth = maxWidth + 'px');
};

const alignToTitle = (ctrl) => {
    const firstTab = ctrl.tabs[0];
    const firstInnerLabel = firstTab.querySelector('.label span');
    const firstOuterLabelWidth = firstTab.getBoundingClientRect().width;
    const firstInnerLabelWidth = firstInnerLabel.getBoundingClientRect().width;
    const firstTabOffset = (firstOuterLabelWidth - firstInnerLabelWidth) / 2;
    firstTab.style.marginLeft = -firstTabOffset + 'px';
};

const createRightButtonOffset = (ctrl) => {
    // add padding to right so that last item is not hidden behind scroll button
    const scrollButtonRightWidth = ctrl.scrollButtonRightEl.getBoundingClientRect().width;
    const scrollButtonOffsetEl = ctrl.tabsEl.querySelector('.scrollButtonOffset');
    scrollButtonOffsetEl.style.width = scrollButtonRightWidth + 'px';
};

const scrollToTab = (tabIndex, tabs, scroller) => {
    const left = tabs.slice(0, tabIndex).reduce((width, el) => {
        return width + el.getBoundingClientRect().width;
    }, 0);
    scrollTo({
        element: scroller,
        to: left,
        duration: SCROLL_DURATION,
        which: 'scrollLeft'
    });
};

const updateScrollButtons = (ctrl) => {
    const scrollerEl = ctrl.scrollerEl;
    const scrollLeft = scrollerEl.scrollLeft;
    const currentTabIndex = ctrl.selectedTabIndex();
    const tabs = ctrl.tabs;
    const tabsEl = ctrl.tabsEl;
    const minTabIndex = 0;
    const maxTabIndex = tabs.length - 1;
    const isAtLeft = (scrollerEl.scrollLeft === 0) && (currentTabIndex === minTabIndex);
    const isAtRight = (scrollLeft >= (scrollerEl.scrollWidth - tabsEl.getBoundingClientRect().width - 1)) && (currentTabIndex === maxTabIndex);
    ctrl.scrollButtonStates.left = !isAtLeft;
    ctrl.scrollButtonStates.right = !isAtRight;
};

const animateIndicator = (selectedTabEl, animate, ctrl) => {
    const parentRect = ctrl.tabsEl.getBoundingClientRect();
    const rect = selectedTabEl.getBoundingClientRect();
    const style = ctrl.tabIndicatorEl.style;
    const translateX = rect.left - parentRect.left + ctrl.scrollerEl.scrollLeft;
    const transformCmd = 'translate(' + translateX + 'px, 0)';
    const duration = animate ? SLIDE_DURATION : 0;
    // use width instead of scale to please IE10
    style.width = rect.width + 'px';
    style['transition-duration'] =
        style['-webkit-transition-duration'] =
        style['-moz-transition-duration'] =
        style['-o-transition-duration'] = duration + 'ms';
    style.transform =
        style['-webkit-transform'] =
        style['-moz-transform'] =
        style['-ms-transform'] =
        style['-o-transform'] = transformCmd;
};

const setSelectedTab = (index, animate, ctrl) => {
    ctrl.selectedTabIndex(index);
    const selectedTabEl = ctrl.tabs[index];
    if (selectedTabEl && ctrl.tabIndicatorEl && ctrl.tabsEl) {
        animateIndicator(selectedTabEl, animate, ctrl);
    }
    if (ctrl.managesScroll) {
        updateScrollButtons(ctrl);
    }
};

const createTab = (index, opts, tabsOpts, ctrl) => {
    const autofit = (tabsOpts.scrollable || tabsOpts.centered) ? false : (tabsOpts.autofit ? true : false);
    // create a button
    const tabButtonOptions = Object.assign({}, {
        content: m('.layout.vertical', [
            m('.flex'),
            opts.icon ? m.component(icon, opts.icon) : null,
            opts.label ? m('.label', m('span', opts.label)) : null,
            m('.flex')
        ]),
        class: ['tab', (autofit ? 'flex' : 'flex none'), (opts.icon && opts.label ? 'hasIconLabel' : null), opts.class].join(' '),
        wash: false,
        onTap: (evt) => {
            if (evt === 'down') {
                setSelectedTab(index, tabsOpts.noIndicatorSlide ? false : true, ctrl);
                // no route change, no redraw, so do an extra redraw
                if (!opts.url) {
                    m.redraw();
                }
            }
        },
        config: (el, inited) => {
            if (inited) {
                return;
            }
            ctrl.tabs.push(el);
        }
    }, opts, tabsOpts.tabOpts || {});
    return m.component(button, tabButtonOptions);
};

const createView = (ctrl, opts = {}) => {
    const tag = opts.tag || 'div';

    // keep selected tab up to date
    if (opts.selectedTab !== undefined && opts.buttons[0].url) {
        ctrl.selectedTabIndex(opts.selectedTab);
    }

    const props = {
        class: ['tabs', opts.scrollable ? 'scrollable' : null, opts.class].join(' '),
        id: opts.id || '',
        config: (el, inited, context) => {
            if (inited) {
                return;
            }
            ctrl.tabsEl = el;

            if (opts.largestWidth) {
                const widths = ctrl.tabs.map(tab => tab.getBoundingClientRect().width).sort();
                const largest = widths[0];
                ctrl.tabs.forEach(tab => tab.style.width = largest + 'px');
            }

            setTabMaxWidth(ctrl);

            // align first scrollable tab to title
            if (opts.scrollable) {
                alignToTitle(ctrl);
            }
            // handle scroll
            if (opts.scrollable && !p.isTouch()) {
                ctrl.managesScroll = true;
                createRightButtonOffset(ctrl);
            }

            const onResize = () => {
                setSelectedTab(ctrl.selectedTabIndex(), false, ctrl);
                m.redraw();
            };
            p.addListener('resize', onResize);

            context.onunload = () => {
                p.removeListener('resize', onResize);
            };
            setTimeout(() => {
                setSelectedTab(opts.selectedTab || 0, false, ctrl);
                m.redraw();
            }, 0);
        }
    };
    const tabRow = opts.buttons.map((buttonOpts, index) => {
        buttonOpts = Object.assign(buttonOpts, {
            selected: index === ctrl.selectedTabIndex(),
            animateOnTap: (opts.animateOnTap !== undefined) ? opts.animateOnTap : false
        });
        return createTab(index, buttonOpts, opts, ctrl);
    }).concat([
        // offset for right scroll button
        opts.scrollable ? m('.scrollButtonOffset.flex.none') : null
    ]);

    let scrollButtonLeft, scrollButtonRight;
    if (opts.scrollable) {
        scrollButtonLeft = createScrollButton(ctrl, POSITION_LEFT, Object.assign({}, opts, {
            disabled: ctrl.scrollButtonStates.left === false
        }));
        scrollButtonRight = createScrollButton(ctrl, POSITION_RIGHT, Object.assign({}, opts, {
            disabled: ctrl.scrollButtonStates.right === false
        }));
    }

    const tabIndicator = opts.hideIndicator ? null : m('.tabIndicator', {
        config: (el, inited) => {
            if (inited) {
                return;
            }
            setTimeout(() => {
                el.style.display = 'block';
            }, 0);
            ctrl.tabIndicatorEl = el;
        }
    });

    const content = [
        opts.scrollable ? scrollButtonLeft : null,
        m('div', {
            class: ['tabRow layout horizontal', opts.scrollable ? 'indent' : null].join(' '),
            config: (el, inited) => {
                if (inited) {
                    return;
                }
                ctrl.scrollerEl = el;
            },
            onscroll: () => {
                updateScrollButtons(ctrl);
            }
        }, [
            tabIndicator,
            opts.centered ? m('.flex') : null,
            tabRow,
            opts.centered ? m('.flex') : null
        ]),
        opts.scrollable ? scrollButtonRight : null
    ];
    return m(tag, props, p.insertContent(content, opts));
};

const component = {
    controller: () => {
        return {
            tabsEl: null,
            scrollerEl: null,
            tabs: [],
            tabIndicatorEl: null,
            selectedTabIndex: m.prop(0),
            managesScroll: false,
            scrollButtonStates: {
                left: false,
                right: false
            }
        };
    },
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
