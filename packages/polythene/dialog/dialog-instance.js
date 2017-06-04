var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import '../common/object.assign';
import events from '../common/events';
import m from 'mithril';
import dialog from './dialog';
import transition from '../common/transition';
import shadow from '../shadow/shadow';
import './theme/theme';

var CSS_CLASSES = {
    block: 'pe-dialog',
    visible: 'pe-dialog--visible',
    body: 'pe-dialog__body',
    fullscreen: 'pe-dialog--fullscreen',
    content: 'pe-dialog__content',
    header: 'pe-dialog__header',
    footer: 'pe-dialog__footer',
    footerHigh: 'pe-dialog__footer--high',
    title: 'pe-dialog__title',
    actions: 'pe-dialog__actions',
    hasBackdrop: 'pe-dialog--backdrop',
    hasTopOverflow: 'pe-dialog--overflow-top',
    hasBottomOverflow: 'pe-dialog--overflow-bottom',
    menuContent: 'pe-menu__content'
};

var SCROLL_WATCH_TIMER = 150;

var updateScrollState = function updateScrollState(ctrl) {
    var scroller = ctrl.scrollEl;
    if (!scroller) {
        return;
    }
    ctrl.topOverflow = scroller.scrollTop > 0;
    ctrl.bottomOverflow = scroller.scrollHeight - (scroller.scrollTop + scroller.getBoundingClientRect().height) > 0;
};

var updateFooterState = function updateFooterState(ctrl) {
    var footerEl = ctrl.footerEl;
    if (footerEl) {
        var style = window.getComputedStyle(footerEl);
        var height = footerEl.getBoundingClientRect().height;
        var minHeight = parseInt(style.minHeight, 10);
        if (height > minHeight) {
            footerEl.classList.add(CSS_CLASSES.footerHigh);
        } else {
            footerEl.classList.remove(CSS_CLASSES.footerHigh);
        }
    }
};

var show = function show(ctrl, opts) {
    var id = ctrl.instanceId;
    ctrl.isTransitioning = true;
    return transition.show(_extends({}, opts, {
        el: ctrl.el,
        showClass: CSS_CLASSES.visible
    })).then(function () {
        ctrl.isTransitioning = false;
        ctrl.visible = true;
        if (ctrl.didShow) {
            // notify multiple
            ctrl.didShow(id);
            // this will call opts.didShow
        }
    });
};

var hide = function hide(ctrl, opts) {
    var id = ctrl.instanceId;
    ctrl.isTransitioning = true;
    return transition.hide(_extends({}, opts, {
        el: ctrl.el,
        showClass: CSS_CLASSES.visible
    })).then(function () {
        dialog.remove(id);
        ctrl.isTransitioning = false;
        ctrl.visible = false;
        if (ctrl.didHide) {
            // notify multiple
            ctrl.didHide(id);
            // this will call opts.didHide
        }
        setTimeout(m.redraw, 0); // removes remainder of drawn component
    });
};

var createViewContent = function createViewContent(ctrl, opts) {
    // if flex "self-stretch" is not supported, calculate the maximum height
    var style = {};
    var bodyOpts = opts.body || opts.menu;

    return m('div', {
        class: CSS_CLASSES.body,
        style: style,
        config: function config(el, inited) {
            if (inited) {
                return;
            }
            ctrl.scrollEl = el;
        },
        onscroll: function onscroll() {
            ctrl.isScrolling = true;
            updateScrollState(ctrl);

            clearTimeout(ctrl.scrollWatchId);
            ctrl.scrollWatchId = setTimeout(function () {
                ctrl.isScrolling = false;
            }, SCROLL_WATCH_TIMER);
        }
    }, bodyOpts);
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var bodyOpts = opts.body || opts.menu;
    var updateContentOnScroll = opts.updateContentOnScroll || false;
    var ignoreContent = !updateContentOnScroll && ctrl.isScrolling;
    var tag = opts.tag || 'form';

    var update = function update() {
        updateScrollState(ctrl);
        updateFooterState(ctrl);
        m.redraw();
    };

    var props = _extends({}, {
        class: [CSS_CLASSES.block, opts.fullscreen ? CSS_CLASSES.fullscreen : null, opts.backdrop ? CSS_CLASSES.hasBackdrop : null, ctrl.topOverflow || opts.borders ? CSS_CLASSES.hasTopOverflow : null, ctrl.bottomOverflow || opts.borders ? CSS_CLASSES.hasBottomOverflow : null, ctrl.visible ? CSS_CLASSES.visible : null, opts.class].join(' '),
        id: opts.id || '',
        config: function config(el, inited, context, vdom) {
            if (inited) {
                return;
            }
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            ctrl.el = el;

            var cleanup = function cleanup() {
                events.unsubscribe('resize', update);
                events.unsubscribe('keydown', handleEscape);
            };

            var handleEscape = function handleEscape(e) {
                if (opts.fullscreen || opts.modal) return;
                if (e.which === 27) {
                    cleanup();
                    hide(ctrl, _extends({}, opts, { hideDelay: 0 }));
                }
            };

            // resize: update scroll state ('overflow' borders)
            events.subscribe('resize', update);
            events.subscribe('keydown', handleEscape);

            context.onunload = function () {
                cleanup();
            };

            updateScrollState(ctrl);
            updateFooterState(ctrl);

            show(ctrl, opts).then(function () {
                updateScrollState(ctrl);
                updateFooterState(ctrl);
                if (ctrl.topOverflow || ctrl.bottomOverflow) {
                    setTimeout(m.redraw, 0);
                }
            });
        },
        // click backdrop: close dialog
        onclick: function onclick(e) {
            if (e.target !== ctrl.el) {
                return;
            }
            if (opts.modal) {
                // not allowed
                return;
            }
            if (!ctrl.isTransitioning) {
                hide(ctrl, _extends({}, opts, { hideDelay: 0 }));
            }
        }
    }, opts.formOptions ? opts.formOptions : null);

    var body = bodyOpts ? ignoreContent ? {
        subtree: 'retain'
    } : createViewContent(ctrl, opts) : null;

    var content = m('div', {
        class: [CSS_CLASSES.content, opts.menu ? CSS_CLASSES.menuContent : null].join(' ')
    }, [opts.fullscreen ? null : m(shadow, {
        z: ctrl.z,
        animated: true
    }), opts.fullscreen ? null : opts.title ? m('div', {
        class: CSS_CLASSES.header,
        config: function config(el) {
            ctrl.headerHeight = el.scrollHeight;
        }
    }, [m('div', { class: CSS_CLASSES.title }, opts.title)]) : null, body, opts.fullscreen ? null : opts.footer ? m('div', {
        class: CSS_CLASSES.footer,
        config: function config(el, inited) {
            ctrl.footerHeight = el.scrollHeight;
            if (inited) {
                return;
            }
            ctrl.footerEl = el;
        }
    }, [m('div', { class: CSS_CLASSES.actions }, opts.footer)]) : null]);
    return m(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        var instanceData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        // instanceData contains {id, opts}
        var opts = instanceData.opts || {};
        var z = opts.z !== undefined ? opts.z : 3; // shadow depth
        return _extends({}, instanceData, {
            instanceId: instanceData.instanceId,
            z: z,
            scrollEl: null,
            footerEl: null,
            topOverflow: false,
            bottomOverflow: false,
            scrollWatchId: 0,
            isScrolling: false,
            headerHeight: 0,
            footerHeight: 0,
            el: null,
            visible: false,
            isTransitioning: false
        });
    },
    view: function view(ctrl, instanceData) {
        // instanceData contains {id, opts}
        var opts = typeof instanceData.opts === 'function' ? instanceData.opts() : instanceData.opts;
        if (instanceData.hide && !ctrl.isTransitioning) {
            hide(ctrl, opts);
        }
        return createView(ctrl, opts);
    }
};

export default component;