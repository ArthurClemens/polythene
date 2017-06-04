var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import events from '../common/events';
import m from 'mithril';
import shadow from '../shadow/shadow';
import transition from '../common/transition';
import './theme/theme';

var CSS_CLASSES = {
    block: 'pe-menu',
    content: 'pe-menu__content',
    placeholder: 'pe-menu--placeholder',
    visible: 'pe-menu--visible',
    permanent: 'pe-menu--permanent',
    target: 'pe-menu--target',
    width_n: 'pe-menu--width-',
    width_auto: 'pe-menu--width-auto',

    // lookup
    listTile: 'pe-list-tile',
    selectedListTile: 'pe-list-tile--selected'
};

var OFFSET_V = -8;
var DEFAULT_OFFSET_H = 16;
var MIN_SIZE = 1.5;

var positionMenu = function positionMenu(ctrl, opts) {
    if (!opts.target) {
        return;
    }
    var targetEl = document.querySelector('#' + opts.target);
    if (!targetEl) {
        return;
    }
    var offsetH = opts.offset !== undefined ? opts.offset : DEFAULT_OFFSET_H;
    var menuEl = ctrl.el;
    if (!menuEl) {
        return;
    }
    var contentEl = ctrl.contentEl;
    var origin = opts.origin || 'top-left';
    var reposition = opts.reposition === false ? false : true;
    var positionOffset = 0;
    if (reposition) {
        var firstItem = contentEl.querySelectorAll('.' + CSS_CLASSES.listTile)[0];
        var selectedItem = contentEl.querySelector('.' + CSS_CLASSES.selectedListTile);
        if (firstItem && selectedItem) {
            // calculate v position: menu should shift upward relative to the first item
            var firstItemRect = firstItem.getBoundingClientRect();
            var selectedItemRect = selectedItem.getBoundingClientRect();
            positionOffset = selectedItemRect.top - firstItemRect.top;
        }
        // align to middle of target
        var alignEl = selectedItem || firstItem;
        var alignRect = alignEl.getBoundingClientRect();
        var _targetRect = targetEl.getBoundingClientRect();
        var heightDiff = alignRect.height - _targetRect.height;
        positionOffset += heightDiff / 2;
    }
    var targetRect = targetEl.getBoundingClientRect();
    var parentRect = menuEl.parentNode.getBoundingClientRect();
    var alignLeft = function alignLeft() {
        return menuEl.style.left = targetRect.left - parentRect.left + offsetH + 'px';
    };
    var alignRight = function alignRight() {
        return menuEl.style.right = targetRect.right - parentRect.right + offsetH + 'px';
    };
    var alignTop = function alignTop() {
        return menuEl.style.top = targetRect.top - parentRect.top - positionOffset + OFFSET_V + 'px';
    };
    var alignBottom = function alignBottom() {
        return menuEl.style.bottom = targetRect.bottom - parentRect.bottom - positionOffset + 'px';
    };
    var alignFn = {
        'top-left': function topLeft() {
            return alignTop() && alignLeft();
        },
        'top-right': function topRight() {
            return alignTop() && alignRight();
        },
        'bottom-left': function bottomLeft() {
            return alignBottom() && alignLeft();
        },
        'bottom-right': function bottomRight() {
            return alignBottom() && alignRight();
        }
    };
    alignFn[origin].call();
};

var show = function show(ctrl, opts) {
    ctrl.isTransitioning = true;
    return transition.show(_extends({}, opts, {
        el: ctrl.el,
        showClass: CSS_CLASSES.visible
    })).then(function () {
        ctrl.isTransitioning = false;
        ctrl.visible = true;
        if (opts.didShow) {
            opts.didShow(opts.id);
        }
    });
};

var hide = function hide(ctrl, opts) {
    ctrl.isTransitioning = true;
    return transition.hide(_extends({}, opts, {
        el: ctrl.el,
        showClass: CSS_CLASSES.visible
    })).then(function () {
        ctrl.isTransitioning = false;
        ctrl.visible = false;
        if (opts.didHide) {
            opts.didHide(opts.id);
        }
        m.redraw(); // removes remainder of drawn component
    });
};

var unifySize = function unifySize(size) {
    return size < MIN_SIZE ? MIN_SIZE : size;
};

var widthClass = function widthClass(size) {
    var sizeStr = size.toString().replace('.', '-');
    return CSS_CLASSES.width_n + sizeStr;
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var listenEl = document.body;
    var activateDismissTap = function activateDismissTap() {
        listenEl.addEventListener('click', handleDismissTap);
    };
    var deActivateDismissTap = function deActivateDismissTap() {
        listenEl.removeEventListener('click', handleDismissTap);
    };
    var handleDismissTap = function handleDismissTap(e) {
        if (e.target === ctrl.el) {
            return;
        }
        deActivateDismissTap();
        if (e.defaultPrevented) {
            // clicked on .pe-menu__content
            hide(ctrl, opts);
        } else {
            hide(ctrl, _extends({}, opts, { hideDelay: 0 }));
        }
    };
    var tag = opts.tag || 'div';
    var props = {
        class: [CSS_CLASSES.block, opts.permanent ? CSS_CLASSES.permanent : null, opts.target ? CSS_CLASSES.target : 'layout center-center', opts.size ? widthClass(unifySize(opts.size)) : null, opts.class].join(' '),

        id: opts.id || '',
        config: function config(el, inited, context, vdom) {
            if (inited) {
                return;
            }
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            ctrl.el = el;

            var update = function update() {
                positionMenu(ctrl, opts);
                m.redraw();
            };

            var handleEscape = function handleEscape(e) {
                if (e.which === 27) {
                    hide(ctrl, _extends({}, opts, { hideDelay: 0 }));
                }
            };

            if (!opts.permanent) {
                events.subscribe('resize', update);
                events.subscribe('keydown', handleEscape);
                setTimeout(function () {
                    activateDismissTap();
                    show(ctrl, opts);
                }, 0);
            }
            context.onunload = function () {
                events.unsubscribe('resize', update);
                events.unsubscribe('keydown', handleEscape);
                if (!opts.permanent) {
                    deActivateDismissTap();
                }
            };

            positionMenu(ctrl, opts);
        }
    };
    var content = m('div', {
        class: CSS_CLASSES.content,
        config: function config(el, inited) {
            if (!inited) {
                ctrl.contentEl = el;
            }
        },
        onclick: function onclick(e) {
            e.preventDefault();
        }
    }, [m(shadow, {
        z: ctrl.z,
        animated: true
    }), opts.content ? opts.content : null]);
    return m(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var z = opts.z !== undefined ? opts.z : 1;
        return {
            z: z,
            el: null,
            contentEl: null,
            isTransitioning: false,
            visible: opts.permanent || false
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (opts.show && !ctrl.visible) {
            ctrl.visible = true;
        }
        if (ctrl.visible) {
            return createView(ctrl, opts);
        } else {
            return m('span', { class: CSS_CLASSES.placeholder });
        }
    }
};

export default component;