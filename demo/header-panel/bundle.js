(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = (function() {
    'use strict';

    var el = document.createElement('style');
    el.innerHTML += '@import url("https://fonts.googleapis.com/css?family=RobotoDraft:400,500,700,400italic")';
    document.head.appendChild(el);
    
}());
},{}],2:[function(require,module,exports){
module.exports = { 
  ".header-panel": {
    "display": "block",
    "position": "relative",
    "height": "100%"
  },
  ".header-panel .outerContainer": {
    "position": "absolute",
    "top": "0",
    "right": "0",
    "bottom": "0",
    "left": "0"
  },
  ".header-panel .mainPanel": {
    "position": "relative"
  },
  ".header-panel .mainContainer": {
    "position": "relative",
    "overflow-y": "auto",
    "overflow-x": "hidden",
    "-webkit-overflow-scrolling": "touch"
  },
  ".header-panel .header": {
    "white-space": "nowrap",
    "overflow": "hidden",
    "text-overflow": "ellipsis"
  },
  ".header-panel .dropShadow": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "right": "0",
    "height": "6px",
    "box-shadow": "inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4)"
  },
  ".header-panel .dropShadow.hidden": {
    "display": "none"
  },
  ".header-panel[mode=seamed] .dropShadow": {
    "display": "none"
  },
  ".header-panel[mode=scroll] .mainContainer": {
    "overflow": "visible"
  },
  ".header-panel[mode=scroll] .outerContainer": {
    "overflow-y": "auto",
    "overflow-x": "hidden",
    "-webkit-overflow-scrolling": "touch"
  },
  ".header-panel[mode=cover] .mainPanel": {
    "position": "static"
  },
  ".header-panel[mode=cover] .mainContainer": {
    "position": "absolute",
    "top": "0",
    "right": "0",
    "bottom": "0",
    "left": "0"
  },
  ".header-panel[mode=cover] .dropShadow": {
    "position": "static",
    "width": "100%"
  }
};

},{}],3:[function(require,module,exports){
/*
Important: The header-panel will not display if its parent does not have a height.

var headerPanel = require('components/header-panel.js');
var myPanel = new headerPanel(opts);
var view = myPanel.view();

Constructor opts:

    opts.controller (optional)
    opts.container (optional): function(inner, opts, controller) => Mithril template
    opts.inner (optional): function(opts, controller) => Mithril template

    opts.mode

        Controls header and scrolling behavior. Options are
        `standard`, `seamed`, `waterfall`, `waterfall-tall`, `scroll` and 
        `cover`. Default is `standard`.

        `standard`: The header is a step above the panel. The header will consume the
        panel at the point of entry, preventing it from passing through to the
        opposite side.

        `seamed`: The header is presented as seamed with the panel.

        `waterfall`: Similar to standard mode, but header is initially presented as
        seamed with panel, but then separates to form the step.

        `waterfall-tall`: The header is initially taller (`tall` class is added to
        the header).  As the user scrolls, the header separates (forming an edge)
        while condensing (`tall` class is removed from the header).

        `scroll`: The header keeps its seam with the panel, and is pushed off screen.

        `cover`: The panel covers the whole `core-header-panel` including the
        header. This allows user to style the panel in such a way that the panel is
        partially covering the header.


    opts.header: Mithril template
    opts.body: Mithril template
    opts.mode (optional): defaults to opts.mode
    opts.tallClass
    opts.shadow
    opts.animateDuration
*/

// TODO: remove scroll listener on detach

module.exports = function(opts) {
    'use strict';

    var m = require('mithril');

    var styler = require('../polythene/styler.js');
    styler('header-panel', require('./header-panel.jss'));

    var container,
        inner,
        controller,
        modeConfigs,

        // functions
        getScrollerContainer,
        scrollHandler,
        initScroll;

    modeConfigs = {
        shadowMode: {'waterfall': 1, 'waterfall-tall': 1},
        noShadow: {'seamed': 1, 'cover': 1, 'scroll': 1},
        tallMode: {'waterfall-tall': 1},
        outerScroll: {'scroll': 1}
    };

    opts = opts || {};
    opts.mode = opts.mode || 'standard';

    getScrollerContainer = function() {
        return modeConfigs.outerScroll[opts.mode] ? 'outer' : 'main';
    };

    scrollHandler = function(e) {
        console.log('scrollHandler', e);
    };

    // function(element, isInitialized, context)
    initScroll = function(element, isInitialized) {
        if (isInitialized) return;
        if (opts.mode !== 'tall') return; // FIXME: premature optimization?
        element.addEventListener('scroll', scrollHandler);
/*
        context.onunload = function() {
            element.removeEventListener('scroll', scrollHandler);
            console.log('removeEventListener');
        }
*/
    };

    // function(inner, opts, controller)
    container = opts.container || function(inner) {
        return m('div', {class: 'header-panel'}, inner);
    };

    // function(opts, controller)
    inner = opts.inner || function(opts) {
        var header = opts.header || '';
        var body = opts.body || '';
        /*
            opts.tallClass = opts.tallClass || 'tall'; // TODO: not used yet
            opts.shadow = opts.shadow || false; // TODO: not used yet
            opts.animateDuration = 200; // TODO: not used yet
        */
        var scrollerContainer = getScrollerContainer();
        return m('div[vertical][layout]', {
                class: 'outerContainer',
                opts: scrollerContainer === 'outer' ? initScroll : ''
            }, [
                header,
                m('div[flex][vertical][layout]', {class: 'mainPanel'}, [
                    m('div[flex]', {
                        class: 'mainContainer',
                        opts: scrollerContainer === 'main' ? initScroll : ''
                    },
                    body
                ),
                opts.mode === 'seamed' ? '' : m('div', {class: 'dropShadow'})
            ])
        ]);
    };

    controller = opts.controller || function() {};
    
    return {
        controller: controller,
        view: function(controller) {
            return container(
                inner(opts, controller),
                opts,
                controller
            );
        }
    };
};

},{"../polythene/styler.js":8,"./header-panel.jss":2,"mithril":17}],4:[function(require,module,exports){
module.exports = {
  ".icon-button": {
    "display": "inline-block",
    "box-sizing": "border-box",
    "-moz-box-sizing": "border-box",
    "user-select": "none",
    "-moz-user-select": "none",
    "-webkit-user-select": "none",
    "border-radius": "2px",
    "padding": "7px",
    "margin": "2px",
    "vertical-align": "middle",
    "font-size": "1rem",
    "cursor": "pointer"
  },
  ".icon-button[disabled]": {
    "opacity": "0.6",
    "pointer-events": "none"
  },
  ".icon-button.outline": {
    "box-shadow": "0 0 0 1px rgba(0, 0, 0, 0.1)"
  },
  ".icon-button:hover:not([disabled])": {
    "box-shadow": "0 1px 0 0 rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.1)"
  },
  ".icon-button.selected:not([disabled])": {
    "background-color": "rgba(0, 0, 0, 0.05)",
    "box-shadow": "inset 0 1px 0 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.12)"
  },
  ".icon-button:active:not([disabled]), .icon-button.selected:active:not([disabled])": {
    "background-color": "rgba(0, 0, 0, 0.05)",
    "box-shadow": "inset 0 1px 0 0 rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.12)"
  },
  ".icon-button.dark-theme.outline": {
    "background-color": "rgba(200, 200, 200, 0.05)",
    "box-shadow": "0 0 0 1px rgba(200, 200, 200, 0.1)"
  },
  ".icon-button.dark-theme:hover": {
    "background-color": "rgba(200, 200, 200, 0.05)",
    "box-shadow": "0 1px 0 0 rgba(200, 200, 200, 0.12), 0 0 0 1px rgba(200, 200, 200, 0.1)"
  },
  ".icon-button.dark-theme.selected": {
    "background-color": "rgba(220, 220, 220, 0.05)",
    "box-shadow": "inset 0 1px 0 0 rgba(200, 200, 200, 0.05), 0 0 0 1px rgba(200, 200, 200, 0.12)"
  },
  ".icon-button.dark-theme:active, .icon-button.dark-theme.selected:active": {
    "background-color": "rgba(200, 200, 200, 0.05)",
    "box-shadow": "inset 0 1px 0 0 rgba(200, 200, 200, 0.1), 0 0 0 1px rgba(200, 200, 200, 0.12)"
  },
  ".icon-button .icon": {
    "pointer-events": "none"
  }
};

},{}],5:[function(require,module,exports){
/*

var iconButton = require('components/icon-button.js');
var myIconButton = new iconButton(opts);
var view = myIconButton.view();

    opts.controller (optional)
    opts.container (optional): function(inner, opts, controller) => Mithril template
    opts.inner (optional): function(opts) => Mithril template
    opts.clickHandler: function(e) => BOOL
    opts.iconClass: CSS class name from material-design-iconic-font

*/

module.exports = function(opts) {
    'use strict';

    var m = require('mithril');
    var styler = require('../polythene/styler.js');
    styler('icon-button', require('./icon-button.jss'));
    var icon = require('../icon/icon.js');

    var container,
        inner,
        controller;

    opts = opts || {};

    // function(inner, opts, controller)
    container = opts.container || function(inner, opts) {
        var clickHandler = opts.clickHandler || null;
        return m('div', {class: 'icon-button', onclick: clickHandler}, inner);
    };

    // function(opts, controller)
    inner = opts.inner || function(opts) {
        return icon({
            iconClass: opts.iconClass || ''
        }).view();
    };

    controller = opts.controller || function() {};

    return {
        controller: controller,
        view: function(controller) {
            return container(
                inner(opts, controller),
                opts,
                controller
            );
        }
    };
};
},{"../icon/icon.js":7,"../polythene/styler.js":8,"./icon-button.jss":4,"mithril":17}],6:[function(require,module,exports){
module.exports = {
  ".icon": {
    "display": "inline-block",
    "vertical-align": "middle",
    "background-repeat": "no-repeat",
    "position": "relative",
    "height": "24px",
    "width": "24px"
  },
  ".icon[fit]": {
    "height": "24px"
  },
  ".icon i": {
    "font-size": "24px",
    "line-height": "24px",
    "display": "block"
  }
};

},{}],7:[function(require,module,exports){
module.exports = function (opts) {
    'use strict';

    var m = require('mithril');
    var styler = require('../polythene/styler.js');
    styler('icon', require('./icon.jss'));

    var controller,
        container,
        inner;

    opts = opts || {};

    // function(inner, opts, controller)
    container = opts.container || function(inner) {
        return m('div', {class: 'icon'}, inner);
    };

    inner = opts.inner || function(opts) {
        var iconClass = opts.iconClass || '';
        return m('i[fit]', {class: ['md', iconClass].join(' ')});
    };

    controller = opts.controller || function() {};

    return {
        controller: controller,
        view: function(controller) {
            return container(
                inner(opts, controller),
                opts,
                controller
            );
        }
    };
};
},{"../polythene/styler.js":8,"./icon.jss":6,"mithril":17}],8:[function(require,module,exports){
'use strict';
var cache = {};

module.exports = function (key, rules) {
    var jss = require('jss');

    if (!key) return;
    if (!cache[key]) {
        var sheet = jss.createStyleSheet(rules, {named: false});
        sheet.attach();
        cache[key] = true;
    }
};
},{"jss":12}],9:[function(require,module,exports){
module.exports = {
  ".toolbar": {
    "display": "block",
    "position": "relative",
    "box-sizing": "border-box",
    "-moz-box-sizing": "border-box",
    "height": "64px",
    "font-size": "1.3em",
    "background-color": "#CFD8DC"
  },
  ".toolbar.animate": {
    "transition": "height 0.18s ease-in"
  },
  ".toolbar.medium-tall": {
    "height": "128px"
  },
  ".toolbar.tall": {
    "height": "192px"
  },
  ".toolbar .narrow": {
    "height": "56px"
  },
  ".toolbar .narrow .toolbar-tools": {
    "height": "56px",
    "padding": "0"
  },
  ".toolbar .narrow.medium-tall": {
    "height": "112px"
  },
  ".toolbar .narrow.tall": {
    "height": "168px"
  },
  ".toolbar .middleBar": {
    "position": "absolute",
    "top": "0",
    "right": "0",
    "left": "0"
  },
  ".toolbar.tall .middleBar": {
    "-webkit-transform": "translateY(100%)",
    "transform": "translateY(100%)"
  },
  ".toolbar .bottomBar": {
    "position": "absolute",
    "right": "0",
    "bottom": "0",
    "left": "0"
  },
  ".toolbar .header": {
    "white-space": "nowrap",
    "overflow": "hidden",
    "text-overflow": "ellipsis"
  },
  ".toolbar .toolbar-tools > *:not([disabled])": {
    "pointer-events": "auto"
  },
  ".toolbar .toolbar-tools > *": {
    "margin": "0 8px"
  },
  ".toolbar .toolbar-tools > .fit": {
    "position": "absolute",
    "top": "auto",
    "right": "0",
    "bottom": "0",
    "left": "0",
    "width": "auto",
    "margin": "0"
  },
  ".toolbar .toolbar-tools > .indent": {
    "margin-left": "60px"
  },
  ".toolbar-tools": {
    "position": "relative",
    "height": "64px",
    "padding": "0 8px",
    "pointer-events": "none"
  }
};

},{}],10:[function(require,module,exports){
/*

var toolbar = require('components/toolbar.js');
var myToolbar = new toolbar(opts);
var view = myToolbar.view();

    opts.container (optional): function(inner, mode) => Mithril template
    opts.inner (optional): function() => Mithril template
    opts.mode (optional): 'tall', 'medium-tall' or 'standard' (default)
    opts.bar (optional): bar contructor => Mithril template
    opts.body (optional): Mithril template
    opts.topBar (optional): shown if no opts.body is passed => Mithril template
    opts.middleBar (optional): shown if no opts.body is passed => Mithril template
    opts.bottomBar (optional): shown if no opts.body is passed => Mithril template


*/
module.exports = function(opts) {
    'use strict';

    var m = require('mithril');

    var styler = require('../polythene/styler.js');
    styler('toolbar', require('./toolbar.jss'));

    var container,
        inner,
        controller,
    	bar;

    opts = opts || {};
	opts.mode = opts.mode || 'standard';

    bar = opts.bar || function(body, className) {
        return body === null ? null : m('div[center][horizontal][layout]', {class: ['toolbar-tools', className].join(' ')}, body);
    };

    // function(inner, opts, controller)
    container = opts.container || function(inner, opts) {
        return m('div', {class: ['toolbar', opts.mode].join(' ')}, inner);
    };

    // function(opts, controller)
    inner = opts.inner || function(opts) {
        var body = opts.body || null;
        var topBar = !body && opts.topBar || null;
        var middleBar = !body && opts.middleBar || null;
        var bottomBar = !body && opts.bottomBar || null;

        return [
            bar(body, 'topBar'),
            bar(topBar, 'topBar'),
            bar(middleBar, 'middleBar'),
            bar(bottomBar, 'bottomBar')
        ];
    };

    controller = opts.controller || function() {};

	return {
        controller: controller,
        view: function(controller) {
            return container(
                inner(opts, controller),
                opts,
                controller
            );
        }
    };
};

},{"../polythene/styler.js":8,"./toolbar.jss":9,"mithril":17}],11:[function(require,module,exports){
'use strict';
require('../../components/font-roboto/font-roboto.js');
var m = require('mithril');
var headerPanel = require('../../components/header-panel/header-panel.js');
var toolbar = require('../../components/toolbar/toolbar.js');
var iconButton = require('../../components/icon-button/icon-button.js');

(function() {
    
    var template = [
        '<div class="content">',
        [
            'Harun Omar and Master Hafiz',
            'keep your dead beautiful ladies',
            'Mine is a little lovelier',
            'than any of your ladies were.',
            '',
            'In her perfectest array',
            'my lady, moving in the day,',
            'is a little stranger thing',
            'than crisp Sheba with her king',
            'in the morning wandering.',
            ].join('<br />'),
        '</div>'].join('');

    var createToolbar = function(mode, label) {
        return toolbar({
            mode: mode,
            bottomBar: [
                iconButton({
                    iconClass: 'md-menu',
                    clickHandler: function(e) {
                        console.log('menu clicked', e.target);
                    }
                }).view(),
                m('span[flex]', label),
                iconButton({
                    iconClass: 'md-refresh',
                    clickHandler: function(e) {
                        console.log('refresh clicked', e.target);
                    }
                }).view(),
                iconButton({
                    iconClass: 'md-add',
                    clickHandler: function(e) {
                        console.log('add clicked', e.target);
                    }
                }).view()
            ]
        });
    };

    var createContainer = function(className) {
        var div = document.createElement('div');
        div.className = className;
        document.body.appendChild(div);
        return div;
    };

    m.module(createContainer('flex-container'), headerPanel({
        mode: 'standard',
        container: function(inner) {
            return m('div[flex]', {class: 'header-panel'}, inner);
        },
        header: m('div', {class: 'header'}, 'Flex'),
        body: m.trust(template)
    }));

    m.module(createContainer('container'), headerPanel({
        mode: 'standard',
        header: m('div', {class: 'header'}, 'Standard'),
        body: m.trust(template)
    }));

    m.module(createContainer('container'), headerPanel({
        mode: 'seamed',
        header: m('div', {class: 'header'}, 'Seamed'),
        body: m.trust(template)
    }));

    m.module(createContainer('container'), headerPanel({
        mode: 'waterfall',
        header: m('div', {class: 'header'}, 'Waterfall'),
        body: m.trust(template)
    }));

    m.module(createContainer('container'), headerPanel({
        mode: 'tall',
        header: m('div', {class: 'header'}, 'Waterfall tall'),
        body: m.trust(template)
    }));
    m.module(createContainer('container'), headerPanel({
        mode: 'tall',
        header: m('div', {class: 'header medium-tall'}, 'Waterfall tall (tallClass: medium-tall)'),
        body: m.trust(template),
        tallClass: 'medium-tall'
    }));

    m.module(createContainer('container'), headerPanel({
        mode: 'scroll',
        header: m('div', {class: 'header'}, 'Scroll'),
        body: m.trust(template)
    }));

    m.module(createContainer('container'), headerPanel({
        mode: 'standard',
        header: createToolbar('standard', 'Toolbar').view(),
        body: m.trust(template)
    }));

    m.module(createContainer('container'), headerPanel({
        mode: 'standard',
        header: createToolbar('tall', 'Toolbar').view(),
        body: m.trust(template)
    }));

})();
},{"../../components/font-roboto/font-roboto.js":1,"../../components/header-panel/header-panel.js":3,"../../components/icon-button/icon-button.js":5,"../../components/toolbar/toolbar.js":10,"mithril":17}],12:[function(require,module,exports){
/**
 * StyleSheets written in javascript.
 *
 * @copyright Oleg Slobodskoi 2014
 * @website https://github.com/jsstyles/jss
 * @license MIT
 */

module.exports = require('./lib/index')

},{"./lib/index":15}],13:[function(require,module,exports){
'use strict'

var plugins = require('./plugins')

var uid = 0

var toString = Object.prototype.toString

/**
 * Rule is selector + style hash.
 *
 * @param {String} [selector]
 * @param {Object} [style] declarations block
 * @param {Object} [options]
 * @api public
 */
function Rule(selector, style, options) {
    if (typeof selector == 'object') {
        options = style
        style = selector
        selector = null
    }

    this.id = Rule.uid++
    this.options = options || {}
    if (this.options.named == null) this.options.named = true

    if (selector) {
        this.selector = selector
        this.isAtRule = selector[0] == '@'
    } else {
        this.isAtRule = false
        this.className = Rule.NAMESPACE_PREFIX + '-' + this.id
        this.selector = '.' + this.className
    }

    this.style = style
    // Will be set by StyleSheet#link if link option is true.
    this.CSSRule = null
    // When at-rule has sub rules.
    this.rules = null
    if (this.isAtRule && this.style) this.extractAtRules()
}

module.exports = Rule

/**
 * Class name prefix when generated.
 *
 * @type {String}
 * @api private
 */
Rule.NAMESPACE_PREFIX = 'jss'

/**
 * Indentation string for formatting toString output.
 *
 * @type {String}
 * @api private
 */
Rule.INDENTATION = '  '

/**
 * Unique id, right now just a counter, because there is no need for better uid.
 *
 * @type {Number}
 * @api private
 */
Rule.uid = 0

/**
 * Get or set a style property.
 *
 * @param {String} name
 * @param {String|Number} [value]
 * @return {Rule|String|Number}
 * @api public
 */
Rule.prototype.prop = function (name, value) {
    // Its a setter.
    if (value != null) {
        if (!this.style) this.style = {}
        this.style[name] = value
        // If linked option in StyleSheet is not passed, CSSRule is not defined.
        if (this.CSSRule) this.CSSRule.style[name] = value
        return this
    }

    // Its a getter.
    if (this.style) value = this.style[name]

    // Read the value from the DOM if its not cached.
    if (value == null && this.CSSRule) {
        value = this.CSSRule.style[name]
        // Cache the value after we have got it from the DOM once.
        this.style[name] = value
    }

    return value
}

/**
 * Add child rule. Required for plugins like "nested".
 * StyleSheet will render them as a separate rule.
 *
 * @param {String} selector
 * @param {Object} style
 * @param {Object} [options] rule options
 * @return {Rule}
 * @api private
 */
Rule.prototype.addChild = function (selector, style, options) {
    if (!this.children) this.children = {}
    this.children[selector] = {
        style: style,
        options: options
    }

    return this
}

/**
 * Add child rule. Required for plugins like "nested".
 * StyleSheet will render them as a separate rule.
 *
 * @param {String} selector
 * @param {Object} style
 * @return {Rule}
 * @api public
 */
Rule.prototype.extractAtRules = function () {
    if (!this.rules) this.rules = {}

    for (var name in this.style) {
        var style = this.style[name]
        // Not a nested rule.
        if (typeof style == 'string') break
        var selector = this.options.named ? undefined : name
        var rule = this.rules[name] = new Rule(selector, style, this.options)
        plugins.run(rule)
        delete this.style[name]
    }

    return this
}

/**
 * Apply rule to an element inline.
 *
 * @param {Element} element
 * @return {Rule}
 * @api public
 */
Rule.prototype.applyTo = function (element) {
    for (var prop in this.style) {
        var value = this.style[prop]
        if (toString.call(value) == '[object Array]') {
            for (var i = 0; i < value.length; i++) {
                element.style[prop] = value[i]
            }
        } else {
            element.style[prop] = value
        }
    }

    return this
}

/**
 * Converts the rule to css string.
 *
 * @return {String}
 * @api public
 */
Rule.prototype.toString = function (options) {
    var style = this.style

    // At rules like @charset
    if (this.isAtRule && !this.style && !this.rules) return this.selector + ';'

    if (!options) options = {}
    if (options.indentationLevel == null) options.indentationLevel = 0

    var str = indent(options.indentationLevel, this.selector + ' {')

    for (var prop in style) {
        var value = style[prop]
        // We want to generate multiple style with identical property names.
        if (toString.call(value) == '[object Array]') {
            for (var i = 0; i < value.length; i++) {
                str += '\n' + indent(options.indentationLevel + 1, prop + ': ' + value[i] + ';')
            }
        } else {
            str += '\n' + indent(options.indentationLevel + 1, prop + ': ' + value + ';')
        }
    }

    // We are have an at-rule with nested statements.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
    for (var name in this.rules) {
        var ruleStr = this.rules[name].toString({
            indentationLevel: options.indentationLevel + 1
        })
        str += '\n' + indent(options.indentationLevel, ruleStr)
    }

    str += '\n' + indent(options.indentationLevel, '}')

    return str
}

/**
 * Returns JSON representation of the rule.
 * Nested rules, at-rules and array values are not supported.
 *
 * @return {Object}
 * @api public
 */
Rule.prototype.toJSON = function () {
    var style = {}

    for (var prop in this.style) {
        var value = this.style[prop]
        var type = typeof value
        if (type == 'string' || type == 'number') {
            style[prop] = value
        }
    }

    return style
}

/**
 * Indent a string.
 *
 * @param {Number} level
 * @param {String} str
 * @return {String}
 */
function indent(level, str) {
    var indentStr = ''
    for (var i = 0; i < level; i++) indentStr += Rule.INDENTATION
    return indentStr + str
}

},{"./plugins":16}],14:[function(require,module,exports){
'use strict'

var Rule = require('./Rule')
var plugins = require('./plugins')

/**
 * StyleSheet abstraction, contains rules, injects stylesheet into dom.
 *
 * Options:
 *
 *  - `media` style element attribute
 *  - `title` style element attribute
 *  - `type` style element attribute
 *  - `named` true by default - keys are names, selectors will be generated,
 *    if false - keys are global selectors.
 *  - `link` link jss Rule instances with DOM CSSRule instances so that styles,
 *  can be modified dynamically, false by default because it has some performance cost.
 *
 * @param {Object} [rules] object with selectors and declarations
 * @param {Object} [options]
 * @api public
 */
function StyleSheet(rules, options) {
    this.options = options || {}
    if (this.options.named == null) this.options.named = true
    this.element = null
    this.attached = false
    this.media = this.options.media
    this.type = this.options.type
    this.title = this.options.title
    this.rules = {}
    // Only when options.named: true.
    this.classes = {}
    this.deployed = false
    this.linked = false

    // Don't create element if we are not in a browser environment.
    if (typeof document != 'undefined') {
        this.element = this.createElement()
    }

    for (var key in rules) {
        this.createRules(key, rules[key])
    }
}

StyleSheet.ATTRIBUTES = ['title', 'type', 'media']

module.exports = StyleSheet

/**
 * Insert stylesheet element to render tree.
 *
 * @api public
 * @return {StyleSheet}
 */
StyleSheet.prototype.attach = function () {
    if (this.attached) return this

    if (!this.deployed) {
        this.deploy()
        this.deployed = true
    }

    document.head.appendChild(this.element)

    // Before element is attached to the dom rules are not created.
    if (!this.linked && this.options.link) {
        this.link()
        this.linked = true
    }

    this.attached = true

    return this
}

/**
 * Remove stylesheet element from render tree.
 *
 * @return {StyleSheet}
 * @api public
 */
StyleSheet.prototype.detach = function () {
    if (!this.attached) return this

    this.element.parentNode.removeChild(this.element)
    this.attached = false

    return this
}

/**
 * Deploy styles to the element.
 *
 * @return {StyleSheet}
 * @api private
 */
StyleSheet.prototype.deploy = function () {
    this.element.innerHTML = '\n' + this.toString() + '\n'

    return this
}

/**
 * Find CSSRule objects in the DOM and link them in the corresponding Rule instance.
 *
 * @return {StyleSheet}
 * @api private
 */
StyleSheet.prototype.link = function () {
    var CSSRuleList = this.element.sheet.cssRules
    var rules = this.rules

    for (var i = 0; i < CSSRuleList.length; i++) {
        var CSSRule = CSSRuleList[i]
        var rule = rules[CSSRule.selectorText]
        if (rule) rule.CSSRule = CSSRule
    }

    return this
}

/**
 * Add a rule to the current stylesheet. Will insert a rule also after the stylesheet
 * has been rendered first time.
 *
 * @param {Object} [key] can be selector or name if `options.named` is true
 * @param {Object} style property/value hash
 * @return {Rule}
 * @api public
 */
StyleSheet.prototype.addRule = function (key, style) {
    var rules = this.createRules(key, style)

    // Don't insert rule directly if there is no stringified version yet.
    // It will be inserted all together when .attach is called.
    if (this.deployed) {
        var sheet = this.element.sheet
        for (var i = 0; i < rules.length; i++) {
            var nextIndex = sheet.cssRules.length
            var rule = rules[i]
            sheet.insertRule(rule.toString(), nextIndex)
            if (this.options.link) rule.CSSRule = sheet.cssRules[nextIndex]
        }
    } else {
        this.deploy()
    }

    return rules
}

/**
 * Create rules, will render also after stylesheet was rendered the first time.
 *
 * @param {Object} rules key:style hash.
 * @return {StyleSheet} this
 * @api public
 */
StyleSheet.prototype.addRules = function (rules) {
    for (var key in rules) {
        this.addRule(key, rules[key])
    }

    return this
}

/**
 * Get a rule.
 *
 * @param {String} key can be selector or name if `named` is true.
 * @return {Rule}
 * @api public
 */
StyleSheet.prototype.getRule = function (key) {
    return this.rules[key]
}

/**
 * Convert rules to a css string.
 *
 * @return {String}
 * @api public
 */
StyleSheet.prototype.toString = function () {
    var str = ''
    var rules = this.rules
    var stringified = {}
    for (var key in rules) {
        var rule = rules[key]
        // We have the same rule referenced twice if using named urles.
        // By name and by selector.
        if (stringified[rule.id]) continue
        if (str) str += '\n'
        str += rules[key].toString()
        stringified[rule.id] = true
    }

    return str
}

/**
 * Create a rule, will not render after stylesheet was rendered the first time.
 *
 * @param {Object} [selector] if you don't pass selector - it will be generated
 * @param {Object} [style] declarations block
 * @param {Object} [options] rule options
 * @return {Array} rule can contain child rules
 * @api private
 */
StyleSheet.prototype.createRules = function (key, style, options) {
    var rules = []
    var selector, name

    if (!options) options = {}
    var named = this.options.named
    // Scope options overwrite instance options.
    if (options.named != null) named = options.named

    if (named) name = key
    else selector = key

    var rule = new Rule(selector, style, {
        sheet: this,
        named: named,
        name: name
    })
    rules.push(rule)

    this.rules[rule.selector] = rule
    if (name) {
        this.rules[name] = rule
        this.classes[name] = rule.className
    }

    plugins.run(rule)

    for (key in rule.children) {
        rules.push(this.createRules(
            key,
            rule.children[key].style,
            rule.children[key].options
        ))
    }

    return rules
}

/**
 * Create style sheet element.
 *
 * @api private
 * @return {Element}
 */
StyleSheet.prototype.createElement = function () {
    var element = document.createElement('style')

    StyleSheet.ATTRIBUTES.forEach(function (name) {
        if (this[name]) element.setAttribute(name, this[name])
    }, this)

    return element
}

},{"./Rule":13,"./plugins":16}],15:[function(require,module,exports){
'use strict'

var StyleSheet = require('./StyleSheet')
var Rule = require('./Rule')

exports.StyleSheet = StyleSheet

exports.Rule = Rule

exports.plugins = require('./plugins')

/**
 * Create a stylesheet.
 *
 * @param {Object} rules is selector:style hash.
 * @param {Object} [named] rules have names if true, class names will be generated.
 * @param {Object} [attributes] stylesheet element attributes.
 * @return {StyleSheet}
 * @api public
 */
exports.createStyleSheet = function (rules, named, attributes) {
    return new StyleSheet(rules, named, attributes)
}

/**
 * Create a rule.
 *
 * @param {String} [selector]
 * @param {Object} style is property:value hash.
 * @return {Rule}
 * @api public
 */
exports.createRule = function (selector, style) {
    var rule = new Rule(selector, style)
    exports.plugins.run(rule)
    return rule
}

/**
 * Register plugin. Passed function will be invoked with a rule instance.
 *
 * @param {Function} fn
 * @api public
 */
exports.use = exports.plugins.use

},{"./Rule":13,"./StyleSheet":14,"./plugins":16}],16:[function(require,module,exports){
'use strict'

/**
 * Registered plugins.
 *
 * @type {Array}
 * @api public
 */
exports.registry = []

/**
 * Register plugin. Passed function will be invoked with a rule instance.
 *
 * @param {Function} fn
 * @api public
 */
exports.use = function (fn) {
    exports.registry.push(fn)
}

/**
 * Execute all registered plugins.
 *
 * @param {Rule} rule
 * @api private
 */
exports.run = function (rule) {
    for (var i = 0; i < exports.registry.length; i++) {
        exports.registry[i](rule)
    }
}

},{}],17:[function(require,module,exports){
var m = (function app(window, undefined) {
	var OBJECT = "[object Object]", ARRAY = "[object Array]", STRING = "[object String]", FUNCTION = "function";
	var type = {}.toString;
	var parser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g, attrParser = /\[(.+?)(?:=("|'|)(.*?)\2)?\]/;
	var voidElements = /^(AREA|BASE|BR|COL|COMMAND|EMBED|HR|IMG|INPUT|KEYGEN|LINK|META|PARAM|SOURCE|TRACK|WBR)$/;

	// caching commonly used variables
	var $document, $location, $requestAnimationFrame, $cancelAnimationFrame;

	// self invoking function needed because of the way mocks work
	function initialize(window){
		$document = window.document;
		$location = window.location;
		$cancelAnimationFrame = window.cancelAnimationFrame || window.clearTimeout;
		$requestAnimationFrame = window.requestAnimationFrame || window.setTimeout;
	}

	initialize(window);


	/**
	 * @typedef {String} Tag
	 * A string that looks like -> div.classname#id[param=one][param2=two]
	 * Which describes a DOM node
	 */

	/**
	 *
	 * @param {Tag} The DOM node tag
	 * @param {Object=[]} optional key-value pairs to be mapped to DOM attrs
	 * @param {...mNode=[]} Zero or more Mithril child nodes. Can be an array, or splat (optional)
	 *
	 */
	function m() {
		var args = [].slice.call(arguments);
		var hasAttrs = args[1] != null && type.call(args[1]) === OBJECT && !("tag" in args[1]) && !("subtree" in args[1]);
		var attrs = hasAttrs ? args[1] : {};
		var classAttrName = "class" in attrs ? "class" : "className";
		var cell = {tag: "div", attrs: {}};
		var match, classes = [];
		if (type.call(args[0]) != STRING) throw new Error("selector in m(selector, attrs, children) should be a string")
		while (match = parser.exec(args[0])) {
			if (match[1] === "" && match[2]) cell.tag = match[2];
			else if (match[1] === "#") cell.attrs.id = match[2];
			else if (match[1] === ".") classes.push(match[2]);
			else if (match[3][0] === "[") {
				var pair = attrParser.exec(match[3]);
				cell.attrs[pair[1]] = pair[3] || (pair[2] ? "" :true)
			}
		}
		if (classes.length > 0) cell.attrs[classAttrName] = classes.join(" ");


		var children = hasAttrs ? args.slice(2) : args.slice(1);
		if (children.length === 1 && type.call(children[0]) === ARRAY) {
			cell.children = children[0]
		}
		else {
			cell.children = children
		}

		for (var attrName in attrs) {
			if (attrName === classAttrName) {
				var className = cell.attrs[attrName]
				cell.attrs[attrName] = (className && attrs[attrName] ? className + " " : className || "") + attrs[attrName];
			}
			else cell.attrs[attrName] = attrs[attrName]
		}
		return cell
	}
	function build(parentElement, parentTag, parentCache, parentIndex, data, cached, shouldReattach, index, editable, namespace, configs) {
		//`build` is a recursive function that manages creation/diffing/removal of DOM elements based on comparison between `data` and `cached`
		//the diff algorithm can be summarized as this:
		//1 - compare `data` and `cached`
		//2 - if they are different, copy `data` to `cached` and update the DOM based on what the difference is
		//3 - recursively apply this algorithm for every array and for the children of every virtual element

		//the `cached` data structure is essentially the same as the previous redraw's `data` data structure, with a few additions:
		//- `cached` always has a property called `nodes`, which is a list of DOM elements that correspond to the data represented by the respective virtual element
		//- in order to support attaching `nodes` as a property of `cached`, `cached` is *always* a non-primitive object, i.e. if the data was a string, then cached is a String instance. If data was `null` or `undefined`, cached is `new String("")`
		//- `cached also has a `configContext` property, which is the state storage object exposed by config(element, isInitialized, context)
		//- when `cached` is an Object, it represents a virtual element; when it's an Array, it represents a list of elements; when it's a String, Number or Boolean, it represents a text node

		//`parentElement` is a DOM element used for W3C DOM API calls
		//`parentTag` is only used for handling a corner case for textarea values
		//`parentCache` is used to remove nodes in some multi-node cases
		//`parentIndex` and `index` are used to figure out the offset of nodes. They're artifacts from before arrays started being flattened and are likely refactorable
		//`data` and `cached` are, respectively, the new and old nodes being diffed
		//`shouldReattach` is a flag indicating whether a parent node was recreated (if so, and if this node is reused, then this node must reattach itself to the new parent)
		//`editable` is a flag that indicates whether an ancestor is contenteditable
		//`namespace` indicates the closest HTML namespace as it cascades down from an ancestor
		//`configs` is a list of config functions to run after the topmost `build` call finishes running

		//there's logic that relies on the assumption that null and undefined data are equivalent to empty strings
		//- this prevents lifecycle surprises from procedural helpers that mix implicit and explicit return statements (e.g. function foo() {if (cond) return m("div")}
		//- it simplifies diffing code
		//data.toString() is null if data is the return value of Console.log in Firefox
		try {if (data == null || data.toString() == null) data = "";} catch (e) {data = ""}
		if (data.subtree === "retain") return cached;
		var cachedType = type.call(cached), dataType = type.call(data);
		if (cached == null || cachedType !== dataType) {
			if (cached != null) {
				if (parentCache && parentCache.nodes) {
					var offset = index - parentIndex;
					var end = offset + (dataType === ARRAY ? data : cached.nodes).length;
					clear(parentCache.nodes.slice(offset, end), parentCache.slice(offset, end))
				}
				else if (cached.nodes) clear(cached.nodes, cached)
			}
			cached = new data.constructor;
			if (cached.tag) cached = {}; //if constructor creates a virtual dom element, use a blank object as the base cached node instead of copying the virtual el (#277)
			cached.nodes = []
		}

		if (dataType === ARRAY) {
			//recursively flatten array
			for (var i = 0, len = data.length; i < len; i++) {
				if (type.call(data[i]) === ARRAY) {
					data = data.concat.apply([], data);
					i-- //check current index again and flatten until there are no more nested arrays at that index
					len = data.length
				}
			}
			
			var nodes = [], intact = cached.length === data.length, subArrayCount = 0;

			//keys algorithm: sort elements without recreating them if keys are present
			//1) create a map of all existing keys, and mark all for deletion
			//2) add new keys to map and mark them for addition
			//3) if key exists in new list, change action from deletion to a move
			//4) for each key, handle its corresponding action as marked in previous steps
			//5) copy unkeyed items into their respective gaps
			var DELETION = 1, INSERTION = 2 , MOVE = 3;
			var existing = {}, unkeyed = [], shouldMaintainIdentities = false;
			for (var i = 0; i < cached.length; i++) {
				if (cached[i] && cached[i].attrs && cached[i].attrs.key != null) {
					shouldMaintainIdentities = true;
					existing[cached[i].attrs.key] = {action: DELETION, index: i}
				}
			}
			var guid = 0
			for (var i = 0, len = data.length; i < len; i++) {
				if (data[i] && data[i].attrs && data[i].attrs.key == null) data[i].attrs.key = "__mithril__" + guid++
			}
			if (shouldMaintainIdentities) {
				if (data.indexOf(null) > -1) data = data.filter(function(x) {return x != null})
				
				var keysDiffer = false
				if (data.length != cached.length) keysDiffer = true
				else for (var i = 0, cachedCell, dataCell; cachedCell = cached[i], dataCell = data[i]; i++) {
					if (cachedCell.attrs && dataCell.attrs && cachedCell.attrs.key != dataCell.attrs.key) {
						keysDiffer = true
						break
					}
				}
				
				if (keysDiffer) {
					for (var i = 0, len = data.length; i < len; i++) {
						if (data[i] && data[i].attrs) {
							if (data[i].attrs.key != null) {
								var key = data[i].attrs.key;
								if (!existing[key]) existing[key] = {action: INSERTION, index: i};
								else existing[key] = {
									action: MOVE,
									index: i,
									from: existing[key].index,
									element: cached.nodes[existing[key].index] || $document.createElement("div")
								}
							}
							else unkeyed.push({index: i, element: parentElement.childNodes[i] || $document.createElement("div")})
						}
					}
					var actions = []
					for (var prop in existing) actions.push(existing[prop])
					var changes = actions.sort(sortChanges);
					var newCached = new Array(cached.length)
					newCached.nodes = cached.nodes.slice()

					for (var i = 0, change; change = changes[i]; i++) {
						if (change.action === DELETION) {
							clear(cached[change.index].nodes, cached[change.index]);
							newCached.splice(change.index, 1)
						}
						if (change.action === INSERTION) {
							var dummy = $document.createElement("div");
							dummy.key = data[change.index].attrs.key;
							parentElement.insertBefore(dummy, parentElement.childNodes[change.index] || null);
							newCached.splice(change.index, 0, {attrs: {key: data[change.index].attrs.key}, nodes: [dummy]})
							newCached.nodes[change.index] = dummy
						}

						if (change.action === MOVE) {
							if (parentElement.childNodes[change.index] !== change.element && change.element !== null) {
								parentElement.insertBefore(change.element, parentElement.childNodes[change.index] || null)
							}
							newCached[change.index] = cached[change.from]
							newCached.nodes[change.index] = change.element
						}
					}
					for (var i = 0, len = unkeyed.length; i < len; i++) {
						var change = unkeyed[i];
						parentElement.insertBefore(change.element, parentElement.childNodes[change.index] || null);
						newCached[change.index] = cached[change.index]
						newCached.nodes[change.index] = change.element
					}
					cached = newCached;
				}
			}
			//end key algorithm

			for (var i = 0, cacheCount = 0, len = data.length; i < len; i++) {
				//diff each item in the array
				var item = build(parentElement, parentTag, cached, index, data[i], cached[cacheCount], shouldReattach, index + subArrayCount || subArrayCount, editable, namespace, configs);
				if (item === undefined) continue;
				if (!item.nodes.intact) intact = false;
				if (item.$trusted) {
					//fix offset of next element if item was a trusted string w/ more than one html element
					//the first clause in the regexp matches elements
					//the second clause (after the pipe) matches text nodes
					subArrayCount += (item.match(/<[^\/]|\>\s*[^<]/g) || [0]).length
				}
				else subArrayCount += type.call(item) === ARRAY ? item.length : 1;
				cached[cacheCount++] = item
			}
			if (!intact) {
				//diff the array itself
				
				//update the list of DOM nodes by collecting the nodes from each item
				for (var i = 0, len = data.length; i < len; i++) {
					if (cached[i] != null) nodes.push.apply(nodes, cached[i].nodes)
				}
				//remove items from the end of the array if the new array is shorter than the old one
				//if errors ever happen here, the issue is most likely a bug in the construction of the `cached` data structure somewhere earlier in the program
				for (var i = 0, node; node = cached.nodes[i]; i++) {
					if (node.parentNode != null && nodes.indexOf(node) < 0) clear([node], [cached[i]])
				}
				if (data.length < cached.length) cached.length = data.length;
				cached.nodes = nodes
			}
		}
		else if (data != null && dataType === OBJECT) {
			if (!data.attrs) data.attrs = {};
			if (!cached.attrs) cached.attrs = {};

			var dataAttrKeys = Object.keys(data.attrs)
			var hasKeys = dataAttrKeys.length > ("key" in data.attrs ? 1 : 0)
			//if an element is different enough from the one in cache, recreate it
			if (data.tag != cached.tag || dataAttrKeys.join() != Object.keys(cached.attrs).join() || data.attrs.id != cached.attrs.id || (m.redraw.strategy() == "all" && cached.configContext && cached.configContext.retain !== true) || (m.redraw.strategy() == "diff" && cached.configContext && cached.configContext.retain === false)) {
				if (cached.nodes.length) clear(cached.nodes);
				if (cached.configContext && typeof cached.configContext.onunload === FUNCTION) cached.configContext.onunload()
			}
			if (type.call(data.tag) != STRING) return;

			var node, isNew = cached.nodes.length === 0;
			if (data.attrs.xmlns) namespace = data.attrs.xmlns;
			else if (data.tag === "svg") namespace = "http://www.w3.org/2000/svg";
			else if (data.tag === "math") namespace = "http://www.w3.org/1998/Math/MathML";
			if (isNew) {
				if (data.attrs.is) node = namespace === undefined ? $document.createElement(data.tag, data.attrs.is) : $document.createElementNS(namespace, data.tag, data.attrs.is);
				else node = namespace === undefined ? $document.createElement(data.tag) : $document.createElementNS(namespace, data.tag);
				cached = {
					tag: data.tag,
					//set attributes first, then create children
					attrs: hasKeys ? setAttributes(node, data.tag, data.attrs, {}, namespace) : data.attrs,
					children: data.children != null && data.children.length > 0 ?
						build(node, data.tag, undefined, undefined, data.children, cached.children, true, 0, data.attrs.contenteditable ? node : editable, namespace, configs) :
						data.children,
					nodes: [node]
				};
				if (cached.children && !cached.children.nodes) cached.children.nodes = [];
				//edge case: setting value on <select> doesn't work before children exist, so set it again after children have been created
				if (data.tag === "select" && data.attrs.value) setAttributes(node, data.tag, {value: data.attrs.value}, {}, namespace);
				parentElement.insertBefore(node, parentElement.childNodes[index] || null)
			}
			else {
				node = cached.nodes[0];
				if (hasKeys) setAttributes(node, data.tag, data.attrs, cached.attrs, namespace);
				cached.children = build(node, data.tag, undefined, undefined, data.children, cached.children, false, 0, data.attrs.contenteditable ? node : editable, namespace, configs);
				cached.nodes.intact = true;
				if (shouldReattach === true && node != null) parentElement.insertBefore(node, parentElement.childNodes[index] || null)
			}
			//schedule configs to be called. They are called after `build` finishes running
			if (typeof data.attrs["config"] === FUNCTION) {
				var context = cached.configContext = cached.configContext || {retain: (m.redraw.strategy() == "diff") || undefined};

				// bind
				var callback = function(data, args) {
					return function() {
						return data.attrs["config"].apply(data, args)
					}
				};
				configs.push(callback(data, [node, !isNew, context, cached]))
			}
		}
		else if (typeof data != FUNCTION) {
			//handle text nodes
			var nodes;
			if (cached.nodes.length === 0) {
				if (data.$trusted) {
					nodes = injectHTML(parentElement, index, data)
				}
				else {
					nodes = [$document.createTextNode(data)];
					if (!parentElement.nodeName.match(voidElements)) parentElement.insertBefore(nodes[0], parentElement.childNodes[index] || null)
				}
				cached = "string number boolean".indexOf(typeof data) > -1 ? new data.constructor(data) : data;
				cached.nodes = nodes
			}
			else if (cached.valueOf() !== data.valueOf() || shouldReattach === true) {
				nodes = cached.nodes;
				if (!editable || editable !== $document.activeElement) {
					if (data.$trusted) {
						clear(nodes, cached);
						nodes = injectHTML(parentElement, index, data)
					}
					else {
						//corner case: replacing the nodeValue of a text node that is a child of a textarea/contenteditable doesn't work
						//we need to update the value property of the parent textarea or the innerHTML of the contenteditable element instead
						if (parentTag === "textarea") parentElement.value = data;
						else if (editable) editable.innerHTML = data;
						else {
							if (nodes[0].nodeType === 1 || nodes.length > 1) { //was a trusted string
								clear(cached.nodes, cached);
								nodes = [$document.createTextNode(data)]
							}
							parentElement.insertBefore(nodes[0], parentElement.childNodes[index] || null);
							nodes[0].nodeValue = data
						}
					}
				}
				cached = new data.constructor(data);
				cached.nodes = nodes
			}
			else cached.nodes.intact = true
		}

		return cached
	}
	function sortChanges(a, b) {return a.action - b.action || a.index - b.index}
	function setAttributes(node, tag, dataAttrs, cachedAttrs, namespace) {
		for (var attrName in dataAttrs) {
			var dataAttr = dataAttrs[attrName];
			var cachedAttr = cachedAttrs[attrName];
			if (!(attrName in cachedAttrs) || (cachedAttr !== dataAttr)) {
				cachedAttrs[attrName] = dataAttr;
				try {
					//`config` isn't a real attributes, so ignore it
					if (attrName === "config" || attrName == "key") continue;
					//hook event handlers to the auto-redrawing system
					else if (typeof dataAttr === FUNCTION && attrName.indexOf("on") === 0) {
						node[attrName] = autoredraw(dataAttr, node)
					}
					//handle `style: {...}`
					else if (attrName === "style" && dataAttr != null && type.call(dataAttr) === OBJECT) {
						for (var rule in dataAttr) {
							if (cachedAttr == null || cachedAttr[rule] !== dataAttr[rule]) node.style[rule] = dataAttr[rule]
						}
						for (var rule in cachedAttr) {
							if (!(rule in dataAttr)) node.style[rule] = ""
						}
					}
					//handle SVG
					else if (namespace != null) {
						if (attrName === "href") node.setAttributeNS("http://www.w3.org/1999/xlink", "href", dataAttr);
						else if (attrName === "className") node.setAttribute("class", dataAttr);
						else node.setAttribute(attrName, dataAttr)
					}
					//handle cases that are properties (but ignore cases where we should use setAttribute instead)
					//- list and form are typically used as strings, but are DOM element references in js
					//- when using CSS selectors (e.g. `m("[style='']")`), style is used as a string, but it's an object in js
					else if (attrName in node && !(attrName === "list" || attrName === "style" || attrName === "form" || attrName === "type" || attrName === "width" || attrName === "height")) {
						//#348 don't set the value if not needed otherwise cursor placement breaks in Chrome
						if (tag !== "input" || node[attrName] !== dataAttr) node[attrName] = dataAttr
					}
					else node.setAttribute(attrName, dataAttr)
				}
				catch (e) {
					//swallow IE's invalid argument errors to mimic HTML's fallback-to-doing-nothing-on-invalid-attributes behavior
					if (e.message.indexOf("Invalid argument") < 0) throw e
				}
			}
			//#348 dataAttr may not be a string, so use loose comparison (double equal) instead of strict (triple equal)
			else if (attrName === "value" && tag === "input" && node.value != dataAttr) {
				node.value = dataAttr
			}
		}
		return cachedAttrs
	}
	function clear(nodes, cached) {
		for (var i = nodes.length - 1; i > -1; i--) {
			if (nodes[i] && nodes[i].parentNode) {
				try {nodes[i].parentNode.removeChild(nodes[i])}
				catch (e) {} //ignore if this fails due to order of events (see http://stackoverflow.com/questions/21926083/failed-to-execute-removechild-on-node)
				cached = [].concat(cached);
				if (cached[i]) unload(cached[i])
			}
		}
		if (nodes.length != 0) nodes.length = 0
	}
	function unload(cached) {
		if (cached.configContext && typeof cached.configContext.onunload === FUNCTION) {
			cached.configContext.onunload();
			cached.configContext.onunload = null
		}
		if (cached.children) {
			if (type.call(cached.children) === ARRAY) {
				for (var i = 0, child; child = cached.children[i]; i++) unload(child)
			}
			else if (cached.children.tag) unload(cached.children)
		}
	}
	function injectHTML(parentElement, index, data) {
		var nextSibling = parentElement.childNodes[index];
		if (nextSibling) {
			var isElement = nextSibling.nodeType != 1;
			var placeholder = $document.createElement("span");
			if (isElement) {
				parentElement.insertBefore(placeholder, nextSibling || null);
				placeholder.insertAdjacentHTML("beforebegin", data);
				parentElement.removeChild(placeholder)
			}
			else nextSibling.insertAdjacentHTML("beforebegin", data)
		}
		else parentElement.insertAdjacentHTML("beforeend", data);
		var nodes = [];
		while (parentElement.childNodes[index] !== nextSibling) {
			nodes.push(parentElement.childNodes[index]);
			index++
		}
		return nodes
	}
	function autoredraw(callback, object) {
		return function(e) {
			e = e || event;
			m.redraw.strategy("diff");
			m.startComputation();
			try {return callback.call(object, e)}
			finally {
				endFirstComputation()
			}
		}
	}

	var html;
	var documentNode = {
		appendChild: function(node) {
			if (html === undefined) html = $document.createElement("html");
			if ($document.documentElement && $document.documentElement !== node) {
				$document.replaceChild(node, $document.documentElement)
			}
			else $document.appendChild(node);
			this.childNodes = $document.childNodes
		},
		insertBefore: function(node) {
			this.appendChild(node)
		},
		childNodes: []
	};
	var nodeCache = [], cellCache = {};
	m.render = function(root, cell, forceRecreation) {
		var configs = [];
		if (!root) throw new Error("Please ensure the DOM element exists before rendering a template into it.");
		var id = getCellCacheKey(root);
		var isDocumentRoot = root === $document;
		var node = isDocumentRoot || root === $document.documentElement ? documentNode : root;
		if (isDocumentRoot && cell.tag != "html") cell = {tag: "html", attrs: {}, children: cell};
		if (cellCache[id] === undefined) clear(node.childNodes);
		if (forceRecreation === true) reset(root);
		cellCache[id] = build(node, null, undefined, undefined, cell, cellCache[id], false, 0, null, undefined, configs);
		for (var i = 0, len = configs.length; i < len; i++) configs[i]()
	};
	function getCellCacheKey(element) {
		var index = nodeCache.indexOf(element);
		return index < 0 ? nodeCache.push(element) - 1 : index
	}

	m.trust = function(value) {
		value = new String(value);
		value.$trusted = true;
		return value
	};

	function gettersetter(store) {
		var prop = function() {
			if (arguments.length) store = arguments[0];
			return store
		};

		prop.toJSON = function() {
			return store
		};

		return prop
	}

	m.prop = function (store) {
		//note: using non-strict equality check here because we're checking if store is null OR undefined
		if (((store != null && type.call(store) === OBJECT) || typeof store === FUNCTION) && typeof store.then === FUNCTION) {
			return propify(store)
		}

		return gettersetter(store)
	};

	var roots = [], modules = [], controllers = [], lastRedrawId = null, lastRedrawCallTime = 0, computePostRedrawHook = null, prevented = false, topModule;
	var FRAME_BUDGET = 16; //60 frames per second = 1 call per 16 ms
	m.module = function(root, module) {
		if (!root) throw new Error("Please ensure the DOM element exists before rendering a template into it.");
		var index = roots.indexOf(root);
		if (index < 0) index = roots.length;
		var isPrevented = false;
		if (controllers[index] && typeof controllers[index].onunload === FUNCTION) {
			var event = {
				preventDefault: function() {isPrevented = true}
			};
			controllers[index].onunload(event)
		}
		if (!isPrevented) {
			m.redraw.strategy("all");
			m.startComputation();
			roots[index] = root;
			var currentModule = topModule = module = module || {};
			var controller = new (module.controller || function() {});
			//controllers may call m.module recursively (via m.route redirects, for example)
			//this conditional ensures only the last recursive m.module call is applied
			if (currentModule === topModule) {
				controllers[index] = controller;
				modules[index] = module
			}
			endFirstComputation();
			return controllers[index]
		}
	};
	m.redraw = function(force) {
		//lastRedrawId is a positive number if a second redraw is requested before the next animation frame
		//lastRedrawID is null if it's the first redraw and not an event handler
		if (lastRedrawId && force !== true) {
			//when setTimeout: only reschedule redraw if time between now and previous redraw is bigger than a frame, otherwise keep currently scheduled timeout
			//when rAF: always reschedule redraw
			if (new Date - lastRedrawCallTime > FRAME_BUDGET || $requestAnimationFrame === window.requestAnimationFrame) {
				if (lastRedrawId > 0) $cancelAnimationFrame(lastRedrawId);
				lastRedrawId = $requestAnimationFrame(redraw, FRAME_BUDGET)
			}
		}
		else {
			redraw();
			lastRedrawId = $requestAnimationFrame(function() {lastRedrawId = null}, FRAME_BUDGET)
		}
	};
	m.redraw.strategy = m.prop();
	var blank = function() {return ""}
	function redraw() {
		for (var i = 0, root; root = roots[i]; i++) {
			if (controllers[i]) {
				m.render(root, modules[i].view ? modules[i].view(controllers[i]) : blank())
			}
		}
		//after rendering within a routed context, we need to scroll back to the top, and fetch the document title for history.pushState
		if (computePostRedrawHook) {
			computePostRedrawHook();
			computePostRedrawHook = null
		}
		lastRedrawId = null;
		lastRedrawCallTime = new Date;
		m.redraw.strategy("diff")
	}

	var pendingRequests = 0;
	m.startComputation = function() {pendingRequests++};
	m.endComputation = function() {
		pendingRequests = Math.max(pendingRequests - 1, 0);
		if (pendingRequests === 0) m.redraw()
	};
	var endFirstComputation = function() {
		if (m.redraw.strategy() == "none") {
			pendingRequests--
			m.redraw.strategy("diff")
		}
		else m.endComputation();
	}

	m.withAttr = function(prop, withAttrCallback) {
		return function(e) {
			e = e || event;
			var currentTarget = e.currentTarget || this;
			withAttrCallback(prop in currentTarget ? currentTarget[prop] : currentTarget.getAttribute(prop))
		}
	};

	//routing
	var modes = {pathname: "", hash: "#", search: "?"};
	var redirect = function() {}, routeParams, currentRoute;
	m.route = function() {
		//m.route()
		if (arguments.length === 0) return currentRoute;
		//m.route(el, defaultRoute, routes)
		else if (arguments.length === 3 && type.call(arguments[1]) === STRING) {
			var root = arguments[0], defaultRoute = arguments[1], router = arguments[2];
			redirect = function(source) {
				var path = currentRoute = normalizeRoute(source);
				if (!routeByValue(root, router, path)) {
					m.route(defaultRoute, true)
				}
			};
			var listener = m.route.mode === "hash" ? "onhashchange" : "onpopstate";
			window[listener] = function() {
				var path = $location[m.route.mode]
				if (m.route.mode === "pathname") path += $location.search
				if (currentRoute != normalizeRoute(path)) {
					redirect(path)
				}
			};
			computePostRedrawHook = setScroll;
			window[listener]()
		}
		//config: m.route
		else if (arguments[0].addEventListener || arguments[0].attachEvent) {
			var element = arguments[0];
			var isInitialized = arguments[1];
			var context = arguments[2];
			element.href = (m.route.mode !== 'pathname' ? $location.pathname : '') + modes[m.route.mode] + this.attrs.href;
			if (element.addEventListener) {
				element.removeEventListener("click", routeUnobtrusive);
				element.addEventListener("click", routeUnobtrusive)
			}
			else {
				element.detachEvent("onclick", routeUnobtrusive);
				element.attachEvent("onclick", routeUnobtrusive)
			}
		}
		//m.route(route, params)
		else if (type.call(arguments[0]) === STRING) {
			var oldRoute = currentRoute;
			currentRoute = arguments[0];
			var args = arguments[1] || {}
			var queryIndex = currentRoute.indexOf("?")
			var params = queryIndex > -1 ? parseQueryString(currentRoute.slice(queryIndex + 1)) : {}
			for (var i in args) params[i] = args[i]
			var querystring = buildQueryString(params)
			var currentPath = queryIndex > -1 ? currentRoute.slice(0, queryIndex) : currentRoute
			if (querystring) currentRoute = currentPath + (currentPath.indexOf("?") === -1 ? "?" : "&") + querystring;

			var shouldReplaceHistoryEntry = (arguments.length === 3 ? arguments[2] : arguments[1]) === true || oldRoute === arguments[0];

			if (window.history.pushState) {
				computePostRedrawHook = function() {
					window.history[shouldReplaceHistoryEntry ? "replaceState" : "pushState"](null, $document.title, modes[m.route.mode] + currentRoute);
					setScroll()
				};
				redirect(modes[m.route.mode] + currentRoute)
			}
			else {
				$location[m.route.mode] = currentRoute
				redirect(modes[m.route.mode] + currentRoute)
			}
		}
	};
	m.route.param = function(key) {
		if (!routeParams) throw new Error("You must call m.route(element, defaultRoute, routes) before calling m.route.param()")
		return routeParams[key]
	};
	m.route.mode = "search";
	function normalizeRoute(route) {
		return route.slice(modes[m.route.mode].length)
	}
	function routeByValue(root, router, path) {
		routeParams = {};

		var queryStart = path.indexOf("?");
		if (queryStart !== -1) {
			routeParams = parseQueryString(path.substr(queryStart + 1, path.length));
			path = path.substr(0, queryStart)
		}

		// Get all routes and check if there's
		// an exact match for the current path
		var keys = Object.keys(router);
		var index = keys.indexOf(path);
		if(index !== -1){
			m.module(root, router[keys [index]]);
			return true;
		}

		for (var route in router) {
			if (route === path) {
				m.module(root, router[route]);
				return true
			}

			var matcher = new RegExp("^" + route.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$");

			if (matcher.test(path)) {
				path.replace(matcher, function() {
					var keys = route.match(/:[^\/]+/g) || [];
					var values = [].slice.call(arguments, 1, -2);
					for (var i = 0, len = keys.length; i < len; i++) routeParams[keys[i].replace(/:|\./g, "")] = decodeURIComponent(values[i])
					m.module(root, router[route])
				});
				return true
			}
		}
	}
	function routeUnobtrusive(e) {
		e = e || event;
		if (e.ctrlKey || e.metaKey || e.which === 2) return;
		if (e.preventDefault) e.preventDefault();
		else e.returnValue = false;
		var currentTarget = e.currentTarget || e.srcElement;
		var args = m.route.mode === "pathname" && currentTarget.search ? parseQueryString(currentTarget.search.slice(1)) : {};
		while (currentTarget && currentTarget.nodeName.toUpperCase() != "A") currentTarget = currentTarget.parentNode
		m.route(currentTarget[m.route.mode].slice(modes[m.route.mode].length), args)
	}
	function setScroll() {
		if (m.route.mode != "hash" && $location.hash) $location.hash = $location.hash;
		else window.scrollTo(0, 0)
	}
	function buildQueryString(object, prefix) {
		var duplicates = {}
		var str = []
		for (var prop in object) {
			var key = prefix ? prefix + "[" + prop + "]" : prop
			var value = object[prop]
			var valueType = type.call(value)
			var pair = (value === null) ? encodeURIComponent(key) :
				valueType === OBJECT ? buildQueryString(value, key) :
				valueType === ARRAY ? value.reduce(function(memo, item) {
					if (!duplicates[key]) duplicates[key] = {}
					if (!duplicates[key][item]) {
						duplicates[key][item] = true
						return memo.concat(encodeURIComponent(key) + "=" + encodeURIComponent(item))
					}
					return memo
				}, []).join("&") :
				encodeURIComponent(key) + "=" + encodeURIComponent(value)
			if (value !== undefined) str.push(pair)
		}
		return str.join("&")
	}
	function parseQueryString(str) {
		var pairs = str.split("&"), params = {};
		for (var i = 0, len = pairs.length; i < len; i++) {
			var pair = pairs[i].split("=");
			var key = decodeURIComponent(pair[0])
			var value = pair.length == 2 ? decodeURIComponent(pair[1]) : null
			if (params[key] != null) {
				if (type.call(params[key]) !== ARRAY) params[key] = [params[key]]
				params[key].push(value)
			}
			else params[key] = value
		}
		return params
	}
	m.route.buildQueryString = buildQueryString
	m.route.parseQueryString = parseQueryString
	
	function reset(root) {
		var cacheKey = getCellCacheKey(root);
		clear(root.childNodes, cellCache[cacheKey]);
		cellCache[cacheKey] = undefined
	}

	m.deferred = function () {
		var deferred = new Deferred();
		deferred.promise = propify(deferred.promise);
		return deferred
	};
	function propify(promise, initialValue) {
		var prop = m.prop(initialValue);
		promise.then(prop);
		prop.then = function(resolve, reject) {
			return propify(promise.then(resolve, reject), initialValue)
		};
		return prop
	}
	//Promiz.mithril.js | Zolmeister | MIT
	//a modified version of Promiz.js, which does not conform to Promises/A+ for two reasons:
	//1) `then` callbacks are called synchronously (because setTimeout is too slow, and the setImmediate polyfill is too big
	//2) throwing subclasses of Error cause the error to be bubbled up instead of triggering rejection (because the spec does not account for the important use case of default browser error handling, i.e. message w/ line number)
	function Deferred(successCallback, failureCallback) {
		var RESOLVING = 1, REJECTING = 2, RESOLVED = 3, REJECTED = 4;
		var self = this, state = 0, promiseValue = 0, next = [];

		self["promise"] = {};

		self["resolve"] = function(value) {
			if (!state) {
				promiseValue = value;
				state = RESOLVING;

				fire()
			}
			return this
		};

		self["reject"] = function(value) {
			if (!state) {
				promiseValue = value;
				state = REJECTING;

				fire()
			}
			return this
		};

		self.promise["then"] = function(successCallback, failureCallback) {
			var deferred = new Deferred(successCallback, failureCallback);
			if (state === RESOLVED) {
				deferred.resolve(promiseValue)
			}
			else if (state === REJECTED) {
				deferred.reject(promiseValue)
			}
			else {
				next.push(deferred)
			}
			return deferred.promise
		};

		function finish(type) {
			state = type || REJECTED;
			next.map(function(deferred) {
				state === RESOLVED && deferred.resolve(promiseValue) || deferred.reject(promiseValue)
			})
		}

		function thennable(then, successCallback, failureCallback, notThennableCallback) {
			if (((promiseValue != null && type.call(promiseValue) === OBJECT) || typeof promiseValue === FUNCTION) && typeof then === FUNCTION) {
				try {
					// count protects against abuse calls from spec checker
					var count = 0;
					then.call(promiseValue, function(value) {
						if (count++) return;
						promiseValue = value;
						successCallback()
					}, function (value) {
						if (count++) return;
						promiseValue = value;
						failureCallback()
					})
				}
				catch (e) {
					m.deferred.onerror(e);
					promiseValue = e;
					failureCallback()
				}
			} else {
				notThennableCallback()
			}
		}

		function fire() {
			// check if it's a thenable
			var then;
			try {
				then = promiseValue && promiseValue.then
			}
			catch (e) {
				m.deferred.onerror(e);
				promiseValue = e;
				state = REJECTING;
				return fire()
			}
			thennable(then, function() {
				state = RESOLVING;
				fire()
			}, function() {
				state = REJECTING;
				fire()
			}, function() {
				try {
					if (state === RESOLVING && typeof successCallback === FUNCTION) {
						promiseValue = successCallback(promiseValue)
					}
					else if (state === REJECTING && typeof failureCallback === "function") {
						promiseValue = failureCallback(promiseValue);
						state = RESOLVING
					}
				}
				catch (e) {
					m.deferred.onerror(e);
					promiseValue = e;
					return finish()
				}

				if (promiseValue === self) {
					promiseValue = TypeError();
					finish()
				}
				else {
					thennable(then, function () {
						finish(RESOLVED)
					}, finish, function () {
						finish(state === RESOLVING && RESOLVED)
					})
				}
			})
		}
	}
	m.deferred.onerror = function(e) {
		if (type.call(e) === "[object Error]" && !e.constructor.toString().match(/ Error/)) throw e
	};

	m.sync = function(args) {
		var method = "resolve";
		function synchronizer(pos, resolved) {
			return function(value) {
				results[pos] = value;
				if (!resolved) method = "reject";
				if (--outstanding === 0) {
					deferred.promise(results);
					deferred[method](results)
				}
				return value
			}
		}

		var deferred = m.deferred();
		var outstanding = args.length;
		var results = new Array(outstanding);
		if (args.length > 0) {
			for (var i = 0; i < args.length; i++) {
				args[i].then(synchronizer(i, true), synchronizer(i, false))
			}
		}
		else deferred.resolve([]);

		return deferred.promise
	};
	function identity(value) {return value}

	function ajax(options) {
		if (options.dataType && options.dataType.toLowerCase() === "jsonp") {
			var callbackKey = "mithril_callback_" + new Date().getTime() + "_" + (Math.round(Math.random() * 1e16)).toString(36);
			var script = $document.createElement("script");

			window[callbackKey] = function(resp) {
				script.parentNode.removeChild(script);
				options.onload({
					type: "load",
					target: {
						responseText: resp
					}
				});
				window[callbackKey] = undefined
			};

			script.onerror = function(e) {
				script.parentNode.removeChild(script);

				options.onerror({
					type: "error",
					target: {
						status: 500,
						responseText: JSON.stringify({error: "Error making jsonp request"})
					}
				});
				window[callbackKey] = undefined;

				return false
			};

			script.onload = function(e) {
				return false
			};

			script.src = options.url
				+ (options.url.indexOf("?") > 0 ? "&" : "?")
				+ (options.callbackKey ? options.callbackKey : "callback")
				+ "=" + callbackKey
				+ "&" + buildQueryString(options.data || {});
			$document.body.appendChild(script)
		}
		else {
			var xhr = new window.XMLHttpRequest;
			xhr.open(options.method, options.url, true, options.user, options.password);
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status >= 200 && xhr.status < 300) options.onload({type: "load", target: xhr});
					else options.onerror({type: "error", target: xhr})
				}
			};
			if (options.serialize === JSON.stringify && options.data && options.method !== "GET") {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (options.deserialize === JSON.parse) {
				xhr.setRequestHeader("Accept", "application/json, text/*");
			}
			if (typeof options.config === FUNCTION) {
				var maybeXhr = options.config(xhr, options);
				if (maybeXhr != null) xhr = maybeXhr
			}

			var data = options.method === "GET" || !options.data ? "" : options.data
			if (data && (type.call(data) != STRING && data.constructor != window.FormData)) {
				throw "Request data should be either be a string or FormData. Check the `serialize` option in `m.request`";
			}
			xhr.send(data);
			return xhr
		}
	}
	function bindData(xhrOptions, data, serialize) {
		if (xhrOptions.method === "GET" && xhrOptions.dataType != "jsonp") {
			var prefix = xhrOptions.url.indexOf("?") < 0 ? "?" : "&";
			var querystring = buildQueryString(data);
			xhrOptions.url = xhrOptions.url + (querystring ? prefix + querystring : "")
		}
		else xhrOptions.data = serialize(data);
		return xhrOptions
	}
	function parameterizeUrl(url, data) {
		var tokens = url.match(/:[a-z]\w+/gi);
		if (tokens && data) {
			for (var i = 0; i < tokens.length; i++) {
				var key = tokens[i].slice(1);
				url = url.replace(tokens[i], data[key]);
				delete data[key]
			}
		}
		return url
	}

	m.request = function(xhrOptions) {
		if (xhrOptions.background !== true) m.startComputation();
		var deferred = new Deferred();
		var isJSONP = xhrOptions.dataType && xhrOptions.dataType.toLowerCase() === "jsonp";
		var serialize = xhrOptions.serialize = isJSONP ? identity : xhrOptions.serialize || JSON.stringify;
		var deserialize = xhrOptions.deserialize = isJSONP ? identity : xhrOptions.deserialize || JSON.parse;
		var extract = xhrOptions.extract || function(xhr) {
			return xhr.responseText.length === 0 && deserialize === JSON.parse ? null : xhr.responseText
		};
		xhrOptions.url = parameterizeUrl(xhrOptions.url, xhrOptions.data);
		xhrOptions = bindData(xhrOptions, xhrOptions.data, serialize);
		xhrOptions.onload = xhrOptions.onerror = function(e) {
			try {
				e = e || event;
				var unwrap = (e.type === "load" ? xhrOptions.unwrapSuccess : xhrOptions.unwrapError) || identity;
				var response = unwrap(deserialize(extract(e.target, xhrOptions)), e.target);
				if (e.type === "load") {
					if (type.call(response) === ARRAY && xhrOptions.type) {
						for (var i = 0; i < response.length; i++) response[i] = new xhrOptions.type(response[i])
					}
					else if (xhrOptions.type) response = new xhrOptions.type(response)
				}
				deferred[e.type === "load" ? "resolve" : "reject"](response)
			}
			catch (e) {
				m.deferred.onerror(e);
				deferred.reject(e)
			}
			if (xhrOptions.background !== true) m.endComputation()
		};
		ajax(xhrOptions);
		deferred.promise = propify(deferred.promise, xhrOptions.initialValue);
		return deferred.promise
	};

	//testing API
	m.deps = function(mock) {
		initialize(window = mock || window);
		return window;
	};
	//for internal testing only, do not use `m.deps.factory`
	m.deps.factory = app;

	return m
})(typeof window != "undefined" ? window : {});

if (typeof module != "undefined" && module !== null && module.exports) module.exports = m;
else if (typeof define === "function" && define.amd) define(function() {return m});

},{}]},{},[11])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy5ub2RlL2xpYi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi4uLy4uL2NvbXBvbmVudHMvZm9udC1yb2JvdG8vZm9udC1yb2JvdG8uanMiLCIuLi8uLi9jb21wb25lbnRzL2hlYWRlci1wYW5lbC9oZWFkZXItcGFuZWwuanNzIiwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXItcGFuZWwvaGVhZGVyLXBhbmVsLmpzIiwiLi4vLi4vY29tcG9uZW50cy9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5qc3MiLCIuLi8uLi9jb21wb25lbnRzL2ljb24tYnV0dG9uL2ljb24tYnV0dG9uLmpzIiwiLi4vLi4vY29tcG9uZW50cy9pY29uL2ljb24uanNzIiwiLi4vLi4vY29tcG9uZW50cy9pY29uL2ljb24uanMiLCIuLi8uLi9jb21wb25lbnRzL3BvbHl0aGVuZS9zdHlsZXIuanMiLCIuLi8uLi9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5qc3MiLCIuLi8uLi9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5qcyIsImRlbW8uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvanNzL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2pzcy9saWIvUnVsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9qc3MvbGliL1N0eWxlU2hlZXQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvanNzL2xpYi9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9qc3MvbGliL3BsdWdpbnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9taXRocmlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdlFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgZWwuaW5uZXJIVE1MICs9ICdAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG9EcmFmdDo0MDAsNTAwLDcwMCw0MDBpdGFsaWNcIiknO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIFxufSgpKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXG4gIFwiLmhlYWRlci1wYW5lbFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIlxuICB9LFxuICBcIi5oZWFkZXItcGFuZWwgLm91dGVyQ29udGFpbmVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiBcIjBcIixcbiAgICBcInJpZ2h0XCI6IFwiMFwiLFxuICAgIFwiYm90dG9tXCI6IFwiMFwiLFxuICAgIFwibGVmdFwiOiBcIjBcIlxuICB9LFxuICBcIi5oZWFkZXItcGFuZWwgLm1haW5QYW5lbFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCIuaGVhZGVyLXBhbmVsIC5tYWluQ29udGFpbmVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcIm92ZXJmbG93LXlcIjogXCJhdXRvXCIsXG4gICAgXCJvdmVyZmxvdy14XCI6IFwiaGlkZGVuXCIsXG4gICAgXCItd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZ1wiOiBcInRvdWNoXCJcbiAgfSxcbiAgXCIuaGVhZGVyLXBhbmVsIC5oZWFkZXJcIjoge1xuICAgIFwid2hpdGUtc3BhY2VcIjogXCJub3dyYXBcIixcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJ0ZXh0LW92ZXJmbG93XCI6IFwiZWxsaXBzaXNcIlxuICB9LFxuICBcIi5oZWFkZXItcGFuZWwgLmRyb3BTaGFkb3dcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IFwiMFwiLFxuICAgIFwibGVmdFwiOiBcIjBcIixcbiAgICBcInJpZ2h0XCI6IFwiMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNnB4XCIsXG4gICAgXCJib3gtc2hhZG93XCI6IFwiaW5zZXQgMHB4IDVweCA2cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNClcIlxuICB9LFxuICBcIi5oZWFkZXItcGFuZWwgLmRyb3BTaGFkb3cuaGlkZGVuXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJub25lXCJcbiAgfSxcbiAgXCIuaGVhZGVyLXBhbmVsW21vZGU9c2VhbWVkXSAuZHJvcFNoYWRvd1wiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiXG4gIH0sXG4gIFwiLmhlYWRlci1wYW5lbFttb2RlPXNjcm9sbF0gLm1haW5Db250YWluZXJcIjoge1xuICAgIFwib3ZlcmZsb3dcIjogXCJ2aXNpYmxlXCJcbiAgfSxcbiAgXCIuaGVhZGVyLXBhbmVsW21vZGU9c2Nyb2xsXSAub3V0ZXJDb250YWluZXJcIjoge1xuICAgIFwib3ZlcmZsb3cteVwiOiBcImF1dG9cIixcbiAgICBcIm92ZXJmbG93LXhcIjogXCJoaWRkZW5cIixcbiAgICBcIi13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nXCI6IFwidG91Y2hcIlxuICB9LFxuICBcIi5oZWFkZXItcGFuZWxbbW9kZT1jb3Zlcl0gLm1haW5QYW5lbFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInN0YXRpY1wiXG4gIH0sXG4gIFwiLmhlYWRlci1wYW5lbFttb2RlPWNvdmVyXSAubWFpbkNvbnRhaW5lclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogXCIwXCIsXG4gICAgXCJyaWdodFwiOiBcIjBcIixcbiAgICBcImJvdHRvbVwiOiBcIjBcIixcbiAgICBcImxlZnRcIjogXCIwXCJcbiAgfSxcbiAgXCIuaGVhZGVyLXBhbmVsW21vZGU9Y292ZXJdIC5kcm9wU2hhZG93XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwic3RhdGljXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICB9XG59O1xuIiwiLypcbkltcG9ydGFudDogVGhlIGhlYWRlci1wYW5lbCB3aWxsIG5vdCBkaXNwbGF5IGlmIGl0cyBwYXJlbnQgZG9lcyBub3QgaGF2ZSBhIGhlaWdodC5cblxudmFyIGhlYWRlclBhbmVsID0gcmVxdWlyZSgnY29tcG9uZW50cy9oZWFkZXItcGFuZWwuanMnKTtcbnZhciBteVBhbmVsID0gbmV3IGhlYWRlclBhbmVsKG9wdHMpO1xudmFyIHZpZXcgPSBteVBhbmVsLnZpZXcoKTtcblxuQ29uc3RydWN0b3Igb3B0czpcblxuICAgIG9wdHMuY29udHJvbGxlciAob3B0aW9uYWwpXG4gICAgb3B0cy5jb250YWluZXIgKG9wdGlvbmFsKTogZnVuY3Rpb24oaW5uZXIsIG9wdHMsIGNvbnRyb2xsZXIpID0+IE1pdGhyaWwgdGVtcGxhdGVcbiAgICBvcHRzLmlubmVyIChvcHRpb25hbCk6IGZ1bmN0aW9uKG9wdHMsIGNvbnRyb2xsZXIpID0+IE1pdGhyaWwgdGVtcGxhdGVcblxuICAgIG9wdHMubW9kZVxuXG4gICAgICAgIENvbnRyb2xzIGhlYWRlciBhbmQgc2Nyb2xsaW5nIGJlaGF2aW9yLiBPcHRpb25zIGFyZVxuICAgICAgICBgc3RhbmRhcmRgLCBgc2VhbWVkYCwgYHdhdGVyZmFsbGAsIGB3YXRlcmZhbGwtdGFsbGAsIGBzY3JvbGxgIGFuZCBcbiAgICAgICAgYGNvdmVyYC4gRGVmYXVsdCBpcyBgc3RhbmRhcmRgLlxuXG4gICAgICAgIGBzdGFuZGFyZGA6IFRoZSBoZWFkZXIgaXMgYSBzdGVwIGFib3ZlIHRoZSBwYW5lbC4gVGhlIGhlYWRlciB3aWxsIGNvbnN1bWUgdGhlXG4gICAgICAgIHBhbmVsIGF0IHRoZSBwb2ludCBvZiBlbnRyeSwgcHJldmVudGluZyBpdCBmcm9tIHBhc3NpbmcgdGhyb3VnaCB0byB0aGVcbiAgICAgICAgb3Bwb3NpdGUgc2lkZS5cblxuICAgICAgICBgc2VhbWVkYDogVGhlIGhlYWRlciBpcyBwcmVzZW50ZWQgYXMgc2VhbWVkIHdpdGggdGhlIHBhbmVsLlxuXG4gICAgICAgIGB3YXRlcmZhbGxgOiBTaW1pbGFyIHRvIHN0YW5kYXJkIG1vZGUsIGJ1dCBoZWFkZXIgaXMgaW5pdGlhbGx5IHByZXNlbnRlZCBhc1xuICAgICAgICBzZWFtZWQgd2l0aCBwYW5lbCwgYnV0IHRoZW4gc2VwYXJhdGVzIHRvIGZvcm0gdGhlIHN0ZXAuXG5cbiAgICAgICAgYHdhdGVyZmFsbC10YWxsYDogVGhlIGhlYWRlciBpcyBpbml0aWFsbHkgdGFsbGVyIChgdGFsbGAgY2xhc3MgaXMgYWRkZWQgdG9cbiAgICAgICAgdGhlIGhlYWRlcikuICBBcyB0aGUgdXNlciBzY3JvbGxzLCB0aGUgaGVhZGVyIHNlcGFyYXRlcyAoZm9ybWluZyBhbiBlZGdlKVxuICAgICAgICB3aGlsZSBjb25kZW5zaW5nIChgdGFsbGAgY2xhc3MgaXMgcmVtb3ZlZCBmcm9tIHRoZSBoZWFkZXIpLlxuXG4gICAgICAgIGBzY3JvbGxgOiBUaGUgaGVhZGVyIGtlZXBzIGl0cyBzZWFtIHdpdGggdGhlIHBhbmVsLCBhbmQgaXMgcHVzaGVkIG9mZiBzY3JlZW4uXG5cbiAgICAgICAgYGNvdmVyYDogVGhlIHBhbmVsIGNvdmVycyB0aGUgd2hvbGUgYGNvcmUtaGVhZGVyLXBhbmVsYCBpbmNsdWRpbmcgdGhlXG4gICAgICAgIGhlYWRlci4gVGhpcyBhbGxvd3MgdXNlciB0byBzdHlsZSB0aGUgcGFuZWwgaW4gc3VjaCBhIHdheSB0aGF0IHRoZSBwYW5lbCBpc1xuICAgICAgICBwYXJ0aWFsbHkgY292ZXJpbmcgdGhlIGhlYWRlci5cblxuXG4gICAgb3B0cy5oZWFkZXI6IE1pdGhyaWwgdGVtcGxhdGVcbiAgICBvcHRzLmJvZHk6IE1pdGhyaWwgdGVtcGxhdGVcbiAgICBvcHRzLm1vZGUgKG9wdGlvbmFsKTogZGVmYXVsdHMgdG8gb3B0cy5tb2RlXG4gICAgb3B0cy50YWxsQ2xhc3NcbiAgICBvcHRzLnNoYWRvd1xuICAgIG9wdHMuYW5pbWF0ZUR1cmF0aW9uXG4qL1xuXG4vLyBUT0RPOiByZW1vdmUgc2Nyb2xsIGxpc3RlbmVyIG9uIGRldGFjaFxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgbSA9IHJlcXVpcmUoJ21pdGhyaWwnKTtcblxuICAgIHZhciBzdHlsZXIgPSByZXF1aXJlKCcuLi9wb2x5dGhlbmUvc3R5bGVyLmpzJyk7XG4gICAgc3R5bGVyKCdoZWFkZXItcGFuZWwnLCByZXF1aXJlKCcuL2hlYWRlci1wYW5lbC5qc3MnKSk7XG5cbiAgICB2YXIgY29udGFpbmVyLFxuICAgICAgICBpbm5lcixcbiAgICAgICAgY29udHJvbGxlcixcbiAgICAgICAgbW9kZUNvbmZpZ3MsXG5cbiAgICAgICAgLy8gZnVuY3Rpb25zXG4gICAgICAgIGdldFNjcm9sbGVyQ29udGFpbmVyLFxuICAgICAgICBzY3JvbGxIYW5kbGVyLFxuICAgICAgICBpbml0U2Nyb2xsO1xuXG4gICAgbW9kZUNvbmZpZ3MgPSB7XG4gICAgICAgIHNoYWRvd01vZGU6IHsnd2F0ZXJmYWxsJzogMSwgJ3dhdGVyZmFsbC10YWxsJzogMX0sXG4gICAgICAgIG5vU2hhZG93OiB7J3NlYW1lZCc6IDEsICdjb3Zlcic6IDEsICdzY3JvbGwnOiAxfSxcbiAgICAgICAgdGFsbE1vZGU6IHsnd2F0ZXJmYWxsLXRhbGwnOiAxfSxcbiAgICAgICAgb3V0ZXJTY3JvbGw6IHsnc2Nyb2xsJzogMX1cbiAgICB9O1xuXG4gICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgb3B0cy5tb2RlID0gb3B0cy5tb2RlIHx8ICdzdGFuZGFyZCc7XG5cbiAgICBnZXRTY3JvbGxlckNvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbW9kZUNvbmZpZ3Mub3V0ZXJTY3JvbGxbb3B0cy5tb2RlXSA/ICdvdXRlcicgOiAnbWFpbic7XG4gICAgfTtcblxuICAgIHNjcm9sbEhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzY3JvbGxIYW5kbGVyJywgZSk7XG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uKGVsZW1lbnQsIGlzSW5pdGlhbGl6ZWQsIGNvbnRleHQpXG4gICAgaW5pdFNjcm9sbCA9IGZ1bmN0aW9uKGVsZW1lbnQsIGlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgaWYgKGlzSW5pdGlhbGl6ZWQpIHJldHVybjtcbiAgICAgICAgaWYgKG9wdHMubW9kZSAhPT0gJ3RhbGwnKSByZXR1cm47IC8vIEZJWE1FOiBwcmVtYXR1cmUgb3B0aW1pemF0aW9uP1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xuLypcbiAgICAgICAgY29udGV4dC5vbnVubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmVFdmVudExpc3RlbmVyJyk7XG4gICAgICAgIH1cbiovXG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uKGlubmVyLCBvcHRzLCBjb250cm9sbGVyKVxuICAgIGNvbnRhaW5lciA9IG9wdHMuY29udGFpbmVyIHx8IGZ1bmN0aW9uKGlubmVyKSB7XG4gICAgICAgIHJldHVybiBtKCdkaXYnLCB7Y2xhc3M6ICdoZWFkZXItcGFuZWwnfSwgaW5uZXIpO1xuICAgIH07XG5cbiAgICAvLyBmdW5jdGlvbihvcHRzLCBjb250cm9sbGVyKVxuICAgIGlubmVyID0gb3B0cy5pbm5lciB8fCBmdW5jdGlvbihvcHRzKSB7XG4gICAgICAgIHZhciBoZWFkZXIgPSBvcHRzLmhlYWRlciB8fCAnJztcbiAgICAgICAgdmFyIGJvZHkgPSBvcHRzLmJvZHkgfHwgJyc7XG4gICAgICAgIC8qXG4gICAgICAgICAgICBvcHRzLnRhbGxDbGFzcyA9IG9wdHMudGFsbENsYXNzIHx8ICd0YWxsJzsgLy8gVE9ETzogbm90IHVzZWQgeWV0XG4gICAgICAgICAgICBvcHRzLnNoYWRvdyA9IG9wdHMuc2hhZG93IHx8IGZhbHNlOyAvLyBUT0RPOiBub3QgdXNlZCB5ZXRcbiAgICAgICAgICAgIG9wdHMuYW5pbWF0ZUR1cmF0aW9uID0gMjAwOyAvLyBUT0RPOiBub3QgdXNlZCB5ZXRcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIHNjcm9sbGVyQ29udGFpbmVyID0gZ2V0U2Nyb2xsZXJDb250YWluZXIoKTtcbiAgICAgICAgcmV0dXJuIG0oJ2Rpdlt2ZXJ0aWNhbF1bbGF5b3V0XScsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ291dGVyQ29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBvcHRzOiBzY3JvbGxlckNvbnRhaW5lciA9PT0gJ291dGVyJyA/IGluaXRTY3JvbGwgOiAnJ1xuICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgIGhlYWRlcixcbiAgICAgICAgICAgICAgICBtKCdkaXZbZmxleF1bdmVydGljYWxdW2xheW91dF0nLCB7Y2xhc3M6ICdtYWluUGFuZWwnfSwgW1xuICAgICAgICAgICAgICAgICAgICBtKCdkaXZbZmxleF0nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ21haW5Db250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0czogc2Nyb2xsZXJDb250YWluZXIgPT09ICdtYWluJyA/IGluaXRTY3JvbGwgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBvcHRzLm1vZGUgPT09ICdzZWFtZWQnID8gJycgOiBtKCdkaXYnLCB7Y2xhc3M6ICdkcm9wU2hhZG93J30pXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKTtcbiAgICB9O1xuXG4gICAgY29udHJvbGxlciA9IG9wdHMuY29udHJvbGxlciB8fCBmdW5jdGlvbigpIHt9O1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIsXG4gICAgICAgIHZpZXc6IGZ1bmN0aW9uKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXIoXG4gICAgICAgICAgICAgICAgaW5uZXIob3B0cywgY29udHJvbGxlciksXG4gICAgICAgICAgICAgICAgb3B0cyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuaWNvbi1idXR0b25cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwiYm94LXNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcIi1tb3otYm94LXNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcInVzZXItc2VsZWN0XCI6IFwibm9uZVwiLFxuICAgIFwiLW1vei11c2VyLXNlbGVjdFwiOiBcIm5vbmVcIixcbiAgICBcIi13ZWJraXQtdXNlci1zZWxlY3RcIjogXCJub25lXCIsXG4gICAgXCJib3JkZXItcmFkaXVzXCI6IFwiMnB4XCIsXG4gICAgXCJwYWRkaW5nXCI6IFwiN3B4XCIsXG4gICAgXCJtYXJnaW5cIjogXCIycHhcIixcbiAgICBcInZlcnRpY2FsLWFsaWduXCI6IFwibWlkZGxlXCIsXG4gICAgXCJmb250LXNpemVcIjogXCIxcmVtXCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCIuaWNvbi1idXR0b25bZGlzYWJsZWRdXCI6IHtcbiAgICBcIm9wYWNpdHlcIjogXCIwLjZcIixcbiAgICBcInBvaW50ZXItZXZlbnRzXCI6IFwibm9uZVwiXG4gIH0sXG4gIFwiLmljb24tYnV0dG9uLm91dGxpbmVcIjoge1xuICAgIFwiYm94LXNoYWRvd1wiOiBcIjAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSlcIlxuICB9LFxuICBcIi5pY29uLWJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSlcIjoge1xuICAgIFwiYm94LXNoYWRvd1wiOiBcIjAgMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpXCJcbiAgfSxcbiAgXCIuaWNvbi1idXR0b24uc2VsZWN0ZWQ6bm90KFtkaXNhYmxlZF0pXCI6IHtcbiAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJyZ2JhKDAsIDAsIDAsIDAuMDUpXCIsXG4gICAgXCJib3gtc2hhZG93XCI6IFwiaW5zZXQgMCAxcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpXCJcbiAgfSxcbiAgXCIuaWNvbi1idXR0b246YWN0aXZlOm5vdChbZGlzYWJsZWRdKSwgLmljb24tYnV0dG9uLnNlbGVjdGVkOmFjdGl2ZTpub3QoW2Rpc2FibGVkXSlcIjoge1xuICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcInJnYmEoMCwgMCwgMCwgMC4wNSlcIixcbiAgICBcImJveC1zaGFkb3dcIjogXCJpbnNldCAwIDFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKVwiXG4gIH0sXG4gIFwiLmljb24tYnV0dG9uLmRhcmstdGhlbWUub3V0bGluZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwicmdiYSgyMDAsIDIwMCwgMjAwLCAwLjA1KVwiLFxuICAgIFwiYm94LXNoYWRvd1wiOiBcIjAgMCAwIDFweCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMSlcIlxuICB9LFxuICBcIi5pY29uLWJ1dHRvbi5kYXJrLXRoZW1lOmhvdmVyXCI6IHtcbiAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJyZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMDUpXCIsXG4gICAgXCJib3gtc2hhZG93XCI6IFwiMCAxcHggMCAwIHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4xMiksIDAgMCAwIDFweCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMSlcIlxuICB9LFxuICBcIi5pY29uLWJ1dHRvbi5kYXJrLXRoZW1lLnNlbGVjdGVkXCI6IHtcbiAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJyZ2JhKDIyMCwgMjIwLCAyMjAsIDAuMDUpXCIsXG4gICAgXCJib3gtc2hhZG93XCI6IFwiaW5zZXQgMCAxcHggMCAwIHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4wNSksIDAgMCAwIDFweCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMTIpXCJcbiAgfSxcbiAgXCIuaWNvbi1idXR0b24uZGFyay10aGVtZTphY3RpdmUsIC5pY29uLWJ1dHRvbi5kYXJrLXRoZW1lLnNlbGVjdGVkOmFjdGl2ZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwicmdiYSgyMDAsIDIwMCwgMjAwLCAwLjA1KVwiLFxuICAgIFwiYm94LXNoYWRvd1wiOiBcImluc2V0IDAgMXB4IDAgMCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMSksIDAgMCAwIDFweCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMTIpXCJcbiAgfSxcbiAgXCIuaWNvbi1idXR0b24gLmljb25cIjoge1xuICAgIFwicG9pbnRlci1ldmVudHNcIjogXCJub25lXCJcbiAgfVxufTtcbiIsIi8qXG5cbnZhciBpY29uQnV0dG9uID0gcmVxdWlyZSgnY29tcG9uZW50cy9pY29uLWJ1dHRvbi5qcycpO1xudmFyIG15SWNvbkJ1dHRvbiA9IG5ldyBpY29uQnV0dG9uKG9wdHMpO1xudmFyIHZpZXcgPSBteUljb25CdXR0b24udmlldygpO1xuXG4gICAgb3B0cy5jb250cm9sbGVyIChvcHRpb25hbClcbiAgICBvcHRzLmNvbnRhaW5lciAob3B0aW9uYWwpOiBmdW5jdGlvbihpbm5lciwgb3B0cywgY29udHJvbGxlcikgPT4gTWl0aHJpbCB0ZW1wbGF0ZVxuICAgIG9wdHMuaW5uZXIgKG9wdGlvbmFsKTogZnVuY3Rpb24ob3B0cykgPT4gTWl0aHJpbCB0ZW1wbGF0ZVxuICAgIG9wdHMuY2xpY2tIYW5kbGVyOiBmdW5jdGlvbihlKSA9PiBCT09MXG4gICAgb3B0cy5pY29uQ2xhc3M6IENTUyBjbGFzcyBuYW1lIGZyb20gbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250XG5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0cykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtID0gcmVxdWlyZSgnbWl0aHJpbCcpO1xuICAgIHZhciBzdHlsZXIgPSByZXF1aXJlKCcuLi9wb2x5dGhlbmUvc3R5bGVyLmpzJyk7XG4gICAgc3R5bGVyKCdpY29uLWJ1dHRvbicsIHJlcXVpcmUoJy4vaWNvbi1idXR0b24uanNzJykpO1xuICAgIHZhciBpY29uID0gcmVxdWlyZSgnLi4vaWNvbi9pY29uLmpzJyk7XG5cbiAgICB2YXIgY29udGFpbmVyLFxuICAgICAgICBpbm5lcixcbiAgICAgICAgY29udHJvbGxlcjtcblxuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gICAgLy8gZnVuY3Rpb24oaW5uZXIsIG9wdHMsIGNvbnRyb2xsZXIpXG4gICAgY29udGFpbmVyID0gb3B0cy5jb250YWluZXIgfHwgZnVuY3Rpb24oaW5uZXIsIG9wdHMpIHtcbiAgICAgICAgdmFyIGNsaWNrSGFuZGxlciA9IG9wdHMuY2xpY2tIYW5kbGVyIHx8IG51bGw7XG4gICAgICAgIHJldHVybiBtKCdkaXYnLCB7Y2xhc3M6ICdpY29uLWJ1dHRvbicsIG9uY2xpY2s6IGNsaWNrSGFuZGxlcn0sIGlubmVyKTtcbiAgICB9O1xuXG4gICAgLy8gZnVuY3Rpb24ob3B0cywgY29udHJvbGxlcilcbiAgICBpbm5lciA9IG9wdHMuaW5uZXIgfHwgZnVuY3Rpb24ob3B0cykge1xuICAgICAgICByZXR1cm4gaWNvbih7XG4gICAgICAgICAgICBpY29uQ2xhc3M6IG9wdHMuaWNvbkNsYXNzIHx8ICcnXG4gICAgICAgIH0pLnZpZXcoKTtcbiAgICB9O1xuXG4gICAgY29udHJvbGxlciA9IG9wdHMuY29udHJvbGxlciB8fCBmdW5jdGlvbigpIHt9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udHJvbGxlcjogY29udHJvbGxlcixcbiAgICAgICAgdmlldzogZnVuY3Rpb24oY29udHJvbGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcihcbiAgICAgICAgICAgICAgICBpbm5lcihvcHRzLCBjb250cm9sbGVyKSxcbiAgICAgICAgICAgICAgICBvcHRzLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuaWNvblwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgXCJ2ZXJ0aWNhbC1hbGlnblwiOiBcIm1pZGRsZVwiLFxuICAgIFwiYmFja2dyb3VuZC1yZXBlYXRcIjogXCJuby1yZXBlYXRcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImhlaWdodFwiOiBcIjI0cHhcIixcbiAgICBcIndpZHRoXCI6IFwiMjRweFwiXG4gIH0sXG4gIFwiLmljb25bZml0XVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIyNHB4XCJcbiAgfSxcbiAgXCIuaWNvbiBpXCI6IHtcbiAgICBcImZvbnQtc2l6ZVwiOiBcIjI0cHhcIixcbiAgICBcImxpbmUtaGVpZ2h0XCI6IFwiMjRweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgbSA9IHJlcXVpcmUoJ21pdGhyaWwnKTtcbiAgICB2YXIgc3R5bGVyID0gcmVxdWlyZSgnLi4vcG9seXRoZW5lL3N0eWxlci5qcycpO1xuICAgIHN0eWxlcignaWNvbicsIHJlcXVpcmUoJy4vaWNvbi5qc3MnKSk7XG5cbiAgICB2YXIgY29udHJvbGxlcixcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBpbm5lcjtcblxuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gICAgLy8gZnVuY3Rpb24oaW5uZXIsIG9wdHMsIGNvbnRyb2xsZXIpXG4gICAgY29udGFpbmVyID0gb3B0cy5jb250YWluZXIgfHwgZnVuY3Rpb24oaW5uZXIpIHtcbiAgICAgICAgcmV0dXJuIG0oJ2RpdicsIHtjbGFzczogJ2ljb24nfSwgaW5uZXIpO1xuICAgIH07XG5cbiAgICBpbm5lciA9IG9wdHMuaW5uZXIgfHwgZnVuY3Rpb24ob3B0cykge1xuICAgICAgICB2YXIgaWNvbkNsYXNzID0gb3B0cy5pY29uQ2xhc3MgfHwgJyc7XG4gICAgICAgIHJldHVybiBtKCdpW2ZpdF0nLCB7Y2xhc3M6IFsnbWQnLCBpY29uQ2xhc3NdLmpvaW4oJyAnKX0pO1xuICAgIH07XG5cbiAgICBjb250cm9sbGVyID0gb3B0cy5jb250cm9sbGVyIHx8IGZ1bmN0aW9uKCkge307XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjb250cm9sbGVyOiBjb250cm9sbGVyLFxuICAgICAgICB2aWV3OiBmdW5jdGlvbihjb250cm9sbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyKFxuICAgICAgICAgICAgICAgIGlubmVyKG9wdHMsIGNvbnRyb2xsZXIpLFxuICAgICAgICAgICAgICAgIG9wdHMsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWNoZSA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHJ1bGVzKSB7XG4gICAgdmFyIGpzcyA9IHJlcXVpcmUoJ2pzcycpO1xuXG4gICAgaWYgKCFrZXkpIHJldHVybjtcbiAgICBpZiAoIWNhY2hlW2tleV0pIHtcbiAgICAgICAgdmFyIHNoZWV0ID0ganNzLmNyZWF0ZVN0eWxlU2hlZXQocnVsZXMsIHtuYW1lZDogZmFsc2V9KTtcbiAgICAgICAgc2hlZXQuYXR0YWNoKCk7XG4gICAgICAgIGNhY2hlW2tleV0gPSB0cnVlO1xuICAgIH1cbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLnRvb2xiYXJcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJib3gtc2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiLW1vei1ib3gtc2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjRweFwiLFxuICAgIFwiZm9udC1zaXplXCI6IFwiMS4zZW1cIixcbiAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjQ0ZEOERDXCJcbiAgfSxcbiAgXCIudG9vbGJhci5hbmltYXRlXCI6IHtcbiAgICBcInRyYW5zaXRpb25cIjogXCJoZWlnaHQgMC4xOHMgZWFzZS1pblwiXG4gIH0sXG4gIFwiLnRvb2xiYXIubWVkaXVtLXRhbGxcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTI4cHhcIlxuICB9LFxuICBcIi50b29sYmFyLnRhbGxcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTkycHhcIlxuICB9LFxuICBcIi50b29sYmFyIC5uYXJyb3dcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNTZweFwiXG4gIH0sXG4gIFwiLnRvb2xiYXIgLm5hcnJvdyAudG9vbGJhci10b29sc1wiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI1NnB4XCIsXG4gICAgXCJwYWRkaW5nXCI6IFwiMFwiXG4gIH0sXG4gIFwiLnRvb2xiYXIgLm5hcnJvdy5tZWRpdW0tdGFsbFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxMTJweFwiXG4gIH0sXG4gIFwiLnRvb2xiYXIgLm5hcnJvdy50YWxsXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjE2OHB4XCJcbiAgfSxcbiAgXCIudG9vbGJhciAubWlkZGxlQmFyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiBcIjBcIixcbiAgICBcInJpZ2h0XCI6IFwiMFwiLFxuICAgIFwibGVmdFwiOiBcIjBcIlxuICB9LFxuICBcIi50b29sYmFyLnRhbGwgLm1pZGRsZUJhclwiOiB7XG4gICAgXCItd2Via2l0LXRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVkoMTAwJSlcIixcbiAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVkoMTAwJSlcIlxuICB9LFxuICBcIi50b29sYmFyIC5ib3R0b21CYXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHRcIjogXCIwXCIsXG4gICAgXCJib3R0b21cIjogXCIwXCIsXG4gICAgXCJsZWZ0XCI6IFwiMFwiXG4gIH0sXG4gIFwiLnRvb2xiYXIgLmhlYWRlclwiOiB7XG4gICAgXCJ3aGl0ZS1zcGFjZVwiOiBcIm5vd3JhcFwiLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIixcbiAgICBcInRleHQtb3ZlcmZsb3dcIjogXCJlbGxpcHNpc1wiXG4gIH0sXG4gIFwiLnRvb2xiYXIgLnRvb2xiYXItdG9vbHMgPiAqOm5vdChbZGlzYWJsZWRdKVwiOiB7XG4gICAgXCJwb2ludGVyLWV2ZW50c1wiOiBcImF1dG9cIlxuICB9LFxuICBcIi50b29sYmFyIC50b29sYmFyLXRvb2xzID4gKlwiOiB7XG4gICAgXCJtYXJnaW5cIjogXCIwIDhweFwiXG4gIH0sXG4gIFwiLnRvb2xiYXIgLnRvb2xiYXItdG9vbHMgPiAuZml0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiBcImF1dG9cIixcbiAgICBcInJpZ2h0XCI6IFwiMFwiLFxuICAgIFwiYm90dG9tXCI6IFwiMFwiLFxuICAgIFwibGVmdFwiOiBcIjBcIixcbiAgICBcIndpZHRoXCI6IFwiYXV0b1wiLFxuICAgIFwibWFyZ2luXCI6IFwiMFwiXG4gIH0sXG4gIFwiLnRvb2xiYXIgLnRvb2xiYXItdG9vbHMgPiAuaW5kZW50XCI6IHtcbiAgICBcIm1hcmdpbi1sZWZ0XCI6IFwiNjBweFwiXG4gIH0sXG4gIFwiLnRvb2xiYXItdG9vbHNcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjRweFwiLFxuICAgIFwicGFkZGluZ1wiOiBcIjAgOHB4XCIsXG4gICAgXCJwb2ludGVyLWV2ZW50c1wiOiBcIm5vbmVcIlxuICB9XG59O1xuIiwiLypcblxudmFyIHRvb2xiYXIgPSByZXF1aXJlKCdjb21wb25lbnRzL3Rvb2xiYXIuanMnKTtcbnZhciBteVRvb2xiYXIgPSBuZXcgdG9vbGJhcihvcHRzKTtcbnZhciB2aWV3ID0gbXlUb29sYmFyLnZpZXcoKTtcblxuICAgIG9wdHMuY29udGFpbmVyIChvcHRpb25hbCk6IGZ1bmN0aW9uKGlubmVyLCBtb2RlKSA9PiBNaXRocmlsIHRlbXBsYXRlXG4gICAgb3B0cy5pbm5lciAob3B0aW9uYWwpOiBmdW5jdGlvbigpID0+IE1pdGhyaWwgdGVtcGxhdGVcbiAgICBvcHRzLm1vZGUgKG9wdGlvbmFsKTogJ3RhbGwnLCAnbWVkaXVtLXRhbGwnIG9yICdzdGFuZGFyZCcgKGRlZmF1bHQpXG4gICAgb3B0cy5iYXIgKG9wdGlvbmFsKTogYmFyIGNvbnRydWN0b3IgPT4gTWl0aHJpbCB0ZW1wbGF0ZVxuICAgIG9wdHMuYm9keSAob3B0aW9uYWwpOiBNaXRocmlsIHRlbXBsYXRlXG4gICAgb3B0cy50b3BCYXIgKG9wdGlvbmFsKTogc2hvd24gaWYgbm8gb3B0cy5ib2R5IGlzIHBhc3NlZCA9PiBNaXRocmlsIHRlbXBsYXRlXG4gICAgb3B0cy5taWRkbGVCYXIgKG9wdGlvbmFsKTogc2hvd24gaWYgbm8gb3B0cy5ib2R5IGlzIHBhc3NlZCA9PiBNaXRocmlsIHRlbXBsYXRlXG4gICAgb3B0cy5ib3R0b21CYXIgKG9wdGlvbmFsKTogc2hvd24gaWYgbm8gb3B0cy5ib2R5IGlzIHBhc3NlZCA9PiBNaXRocmlsIHRlbXBsYXRlXG5cblxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0cykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtID0gcmVxdWlyZSgnbWl0aHJpbCcpO1xuXG4gICAgdmFyIHN0eWxlciA9IHJlcXVpcmUoJy4uL3BvbHl0aGVuZS9zdHlsZXIuanMnKTtcbiAgICBzdHlsZXIoJ3Rvb2xiYXInLCByZXF1aXJlKCcuL3Rvb2xiYXIuanNzJykpO1xuXG4gICAgdmFyIGNvbnRhaW5lcixcbiAgICAgICAgaW5uZXIsXG4gICAgICAgIGNvbnRyb2xsZXIsXG4gICAgXHRiYXI7XG5cbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcblx0b3B0cy5tb2RlID0gb3B0cy5tb2RlIHx8ICdzdGFuZGFyZCc7XG5cbiAgICBiYXIgPSBvcHRzLmJhciB8fCBmdW5jdGlvbihib2R5LCBjbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIGJvZHkgPT09IG51bGwgPyBudWxsIDogbSgnZGl2W2NlbnRlcl1baG9yaXpvbnRhbF1bbGF5b3V0XScsIHtjbGFzczogWyd0b29sYmFyLXRvb2xzJywgY2xhc3NOYW1lXS5qb2luKCcgJyl9LCBib2R5KTtcbiAgICB9O1xuXG4gICAgLy8gZnVuY3Rpb24oaW5uZXIsIG9wdHMsIGNvbnRyb2xsZXIpXG4gICAgY29udGFpbmVyID0gb3B0cy5jb250YWluZXIgfHwgZnVuY3Rpb24oaW5uZXIsIG9wdHMpIHtcbiAgICAgICAgcmV0dXJuIG0oJ2RpdicsIHtjbGFzczogWyd0b29sYmFyJywgb3B0cy5tb2RlXS5qb2luKCcgJyl9LCBpbm5lcik7XG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uKG9wdHMsIGNvbnRyb2xsZXIpXG4gICAgaW5uZXIgPSBvcHRzLmlubmVyIHx8IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgICAgdmFyIGJvZHkgPSBvcHRzLmJvZHkgfHwgbnVsbDtcbiAgICAgICAgdmFyIHRvcEJhciA9ICFib2R5ICYmIG9wdHMudG9wQmFyIHx8IG51bGw7XG4gICAgICAgIHZhciBtaWRkbGVCYXIgPSAhYm9keSAmJiBvcHRzLm1pZGRsZUJhciB8fCBudWxsO1xuICAgICAgICB2YXIgYm90dG9tQmFyID0gIWJvZHkgJiYgb3B0cy5ib3R0b21CYXIgfHwgbnVsbDtcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgYmFyKGJvZHksICd0b3BCYXInKSxcbiAgICAgICAgICAgIGJhcih0b3BCYXIsICd0b3BCYXInKSxcbiAgICAgICAgICAgIGJhcihtaWRkbGVCYXIsICdtaWRkbGVCYXInKSxcbiAgICAgICAgICAgIGJhcihib3R0b21CYXIsICdib3R0b21CYXInKVxuICAgICAgICBdO1xuICAgIH07XG5cbiAgICBjb250cm9sbGVyID0gb3B0cy5jb250cm9sbGVyIHx8IGZ1bmN0aW9uKCkge307XG5cblx0cmV0dXJuIHtcbiAgICAgICAgY29udHJvbGxlcjogY29udHJvbGxlcixcbiAgICAgICAgdmlldzogZnVuY3Rpb24oY29udHJvbGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcihcbiAgICAgICAgICAgICAgICBpbm5lcihvcHRzLCBjb250cm9sbGVyKSxcbiAgICAgICAgICAgICAgICBvcHRzLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJy4uLy4uL2NvbXBvbmVudHMvZm9udC1yb2JvdG8vZm9udC1yb2JvdG8uanMnKTtcbnZhciBtID0gcmVxdWlyZSgnbWl0aHJpbCcpO1xudmFyIGhlYWRlclBhbmVsID0gcmVxdWlyZSgnLi4vLi4vY29tcG9uZW50cy9oZWFkZXItcGFuZWwvaGVhZGVyLXBhbmVsLmpzJyk7XG52YXIgdG9vbGJhciA9IHJlcXVpcmUoJy4uLy4uL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmpzJyk7XG52YXIgaWNvbkJ1dHRvbiA9IHJlcXVpcmUoJy4uLy4uL2NvbXBvbmVudHMvaWNvbi1idXR0b24vaWNvbi1idXR0b24uanMnKTtcblxuKGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIHZhciB0ZW1wbGF0ZSA9IFtcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJjb250ZW50XCI+JyxcbiAgICAgICAgW1xuICAgICAgICAgICAgJ0hhcnVuIE9tYXIgYW5kIE1hc3RlciBIYWZpeicsXG4gICAgICAgICAgICAna2VlcCB5b3VyIGRlYWQgYmVhdXRpZnVsIGxhZGllcycsXG4gICAgICAgICAgICAnTWluZSBpcyBhIGxpdHRsZSBsb3ZlbGllcicsXG4gICAgICAgICAgICAndGhhbiBhbnkgb2YgeW91ciBsYWRpZXMgd2VyZS4nLFxuICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAnSW4gaGVyIHBlcmZlY3Rlc3QgYXJyYXknLFxuICAgICAgICAgICAgJ215IGxhZHksIG1vdmluZyBpbiB0aGUgZGF5LCcsXG4gICAgICAgICAgICAnaXMgYSBsaXR0bGUgc3RyYW5nZXIgdGhpbmcnLFxuICAgICAgICAgICAgJ3RoYW4gY3Jpc3AgU2hlYmEgd2l0aCBoZXIga2luZycsXG4gICAgICAgICAgICAnaW4gdGhlIG1vcm5pbmcgd2FuZGVyaW5nLicsXG4gICAgICAgICAgICBdLmpvaW4oJzxiciAvPicpLFxuICAgICAgICAnPC9kaXY+J10uam9pbignJyk7XG5cbiAgICB2YXIgY3JlYXRlVG9vbGJhciA9IGZ1bmN0aW9uKG1vZGUsIGxhYmVsKSB7XG4gICAgICAgIHJldHVybiB0b29sYmFyKHtcbiAgICAgICAgICAgIG1vZGU6IG1vZGUsXG4gICAgICAgICAgICBib3R0b21CYXI6IFtcbiAgICAgICAgICAgICAgICBpY29uQnV0dG9uKHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsYXNzOiAnbWQtbWVudScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrSGFuZGxlcjogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21lbnUgY2xpY2tlZCcsIGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLnZpZXcoKSxcbiAgICAgICAgICAgICAgICBtKCdzcGFuW2ZsZXhdJywgbGFiZWwpLFxuICAgICAgICAgICAgICAgIGljb25CdXR0b24oe1xuICAgICAgICAgICAgICAgICAgICBpY29uQ2xhc3M6ICdtZC1yZWZyZXNoJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVmcmVzaCBjbGlja2VkJywgZS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkudmlldygpLFxuICAgICAgICAgICAgICAgIGljb25CdXR0b24oe1xuICAgICAgICAgICAgICAgICAgICBpY29uQ2xhc3M6ICdtZC1hZGQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGQgY2xpY2tlZCcsIGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLnZpZXcoKVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIGNyZWF0ZUNvbnRhaW5lciA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9O1xuXG4gICAgbS5tb2R1bGUoY3JlYXRlQ29udGFpbmVyKCdmbGV4LWNvbnRhaW5lcicpLCBoZWFkZXJQYW5lbCh7XG4gICAgICAgIG1vZGU6ICdzdGFuZGFyZCcsXG4gICAgICAgIGNvbnRhaW5lcjogZnVuY3Rpb24oaW5uZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBtKCdkaXZbZmxleF0nLCB7Y2xhc3M6ICdoZWFkZXItcGFuZWwnfSwgaW5uZXIpO1xuICAgICAgICB9LFxuICAgICAgICBoZWFkZXI6IG0oJ2RpdicsIHtjbGFzczogJ2hlYWRlcid9LCAnRmxleCcpLFxuICAgICAgICBib2R5OiBtLnRydXN0KHRlbXBsYXRlKVxuICAgIH0pKTtcblxuICAgIG0ubW9kdWxlKGNyZWF0ZUNvbnRhaW5lcignY29udGFpbmVyJyksIGhlYWRlclBhbmVsKHtcbiAgICAgICAgbW9kZTogJ3N0YW5kYXJkJyxcbiAgICAgICAgaGVhZGVyOiBtKCdkaXYnLCB7Y2xhc3M6ICdoZWFkZXInfSwgJ1N0YW5kYXJkJyksXG4gICAgICAgIGJvZHk6IG0udHJ1c3QodGVtcGxhdGUpXG4gICAgfSkpO1xuXG4gICAgbS5tb2R1bGUoY3JlYXRlQ29udGFpbmVyKCdjb250YWluZXInKSwgaGVhZGVyUGFuZWwoe1xuICAgICAgICBtb2RlOiAnc2VhbWVkJyxcbiAgICAgICAgaGVhZGVyOiBtKCdkaXYnLCB7Y2xhc3M6ICdoZWFkZXInfSwgJ1NlYW1lZCcpLFxuICAgICAgICBib2R5OiBtLnRydXN0KHRlbXBsYXRlKVxuICAgIH0pKTtcblxuICAgIG0ubW9kdWxlKGNyZWF0ZUNvbnRhaW5lcignY29udGFpbmVyJyksIGhlYWRlclBhbmVsKHtcbiAgICAgICAgbW9kZTogJ3dhdGVyZmFsbCcsXG4gICAgICAgIGhlYWRlcjogbSgnZGl2Jywge2NsYXNzOiAnaGVhZGVyJ30sICdXYXRlcmZhbGwnKSxcbiAgICAgICAgYm9keTogbS50cnVzdCh0ZW1wbGF0ZSlcbiAgICB9KSk7XG5cbiAgICBtLm1vZHVsZShjcmVhdGVDb250YWluZXIoJ2NvbnRhaW5lcicpLCBoZWFkZXJQYW5lbCh7XG4gICAgICAgIG1vZGU6ICd0YWxsJyxcbiAgICAgICAgaGVhZGVyOiBtKCdkaXYnLCB7Y2xhc3M6ICdoZWFkZXInfSwgJ1dhdGVyZmFsbCB0YWxsJyksXG4gICAgICAgIGJvZHk6IG0udHJ1c3QodGVtcGxhdGUpXG4gICAgfSkpO1xuICAgIG0ubW9kdWxlKGNyZWF0ZUNvbnRhaW5lcignY29udGFpbmVyJyksIGhlYWRlclBhbmVsKHtcbiAgICAgICAgbW9kZTogJ3RhbGwnLFxuICAgICAgICBoZWFkZXI6IG0oJ2RpdicsIHtjbGFzczogJ2hlYWRlciBtZWRpdW0tdGFsbCd9LCAnV2F0ZXJmYWxsIHRhbGwgKHRhbGxDbGFzczogbWVkaXVtLXRhbGwpJyksXG4gICAgICAgIGJvZHk6IG0udHJ1c3QodGVtcGxhdGUpLFxuICAgICAgICB0YWxsQ2xhc3M6ICdtZWRpdW0tdGFsbCdcbiAgICB9KSk7XG5cbiAgICBtLm1vZHVsZShjcmVhdGVDb250YWluZXIoJ2NvbnRhaW5lcicpLCBoZWFkZXJQYW5lbCh7XG4gICAgICAgIG1vZGU6ICdzY3JvbGwnLFxuICAgICAgICBoZWFkZXI6IG0oJ2RpdicsIHtjbGFzczogJ2hlYWRlcid9LCAnU2Nyb2xsJyksXG4gICAgICAgIGJvZHk6IG0udHJ1c3QodGVtcGxhdGUpXG4gICAgfSkpO1xuXG4gICAgbS5tb2R1bGUoY3JlYXRlQ29udGFpbmVyKCdjb250YWluZXInKSwgaGVhZGVyUGFuZWwoe1xuICAgICAgICBtb2RlOiAnc3RhbmRhcmQnLFxuICAgICAgICBoZWFkZXI6IGNyZWF0ZVRvb2xiYXIoJ3N0YW5kYXJkJywgJ1Rvb2xiYXInKS52aWV3KCksXG4gICAgICAgIGJvZHk6IG0udHJ1c3QodGVtcGxhdGUpXG4gICAgfSkpO1xuXG4gICAgbS5tb2R1bGUoY3JlYXRlQ29udGFpbmVyKCdjb250YWluZXInKSwgaGVhZGVyUGFuZWwoe1xuICAgICAgICBtb2RlOiAnc3RhbmRhcmQnLFxuICAgICAgICBoZWFkZXI6IGNyZWF0ZVRvb2xiYXIoJ3RhbGwnLCAnVG9vbGJhcicpLnZpZXcoKSxcbiAgICAgICAgYm9keTogbS50cnVzdCh0ZW1wbGF0ZSlcbiAgICB9KSk7XG5cbn0pKCk7IiwiLyoqXG4gKiBTdHlsZVNoZWV0cyB3cml0dGVuIGluIGphdmFzY3JpcHQuXG4gKlxuICogQGNvcHlyaWdodCBPbGVnIFNsb2JvZHNrb2kgMjAxNFxuICogQHdlYnNpdGUgaHR0cHM6Ly9naXRodWIuY29tL2pzc3R5bGVzL2pzc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9pbmRleCcpXG4iLCIndXNlIHN0cmljdCdcblxudmFyIHBsdWdpbnMgPSByZXF1aXJlKCcuL3BsdWdpbnMnKVxuXG52YXIgdWlkID0gMFxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbi8qKlxuICogUnVsZSBpcyBzZWxlY3RvciArIHN0eWxlIGhhc2guXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IFtzZWxlY3Rvcl1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3R5bGVdIGRlY2xhcmF0aW9ucyBibG9ja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gUnVsZShzZWxlY3Rvciwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdvYmplY3QnKSB7XG4gICAgICAgIG9wdGlvbnMgPSBzdHlsZVxuICAgICAgICBzdHlsZSA9IHNlbGVjdG9yXG4gICAgICAgIHNlbGVjdG9yID0gbnVsbFxuICAgIH1cblxuICAgIHRoaXMuaWQgPSBSdWxlLnVpZCsrXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIGlmICh0aGlzLm9wdGlvbnMubmFtZWQgPT0gbnVsbCkgdGhpcy5vcHRpb25zLm5hbWVkID0gdHJ1ZVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvclxuICAgICAgICB0aGlzLmlzQXRSdWxlID0gc2VsZWN0b3JbMF0gPT0gJ0AnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc0F0UnVsZSA9IGZhbHNlXG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gUnVsZS5OQU1FU1BBQ0VfUFJFRklYICsgJy0nICsgdGhpcy5pZFxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gJy4nICsgdGhpcy5jbGFzc05hbWVcbiAgICB9XG5cbiAgICB0aGlzLnN0eWxlID0gc3R5bGVcbiAgICAvLyBXaWxsIGJlIHNldCBieSBTdHlsZVNoZWV0I2xpbmsgaWYgbGluayBvcHRpb24gaXMgdHJ1ZS5cbiAgICB0aGlzLkNTU1J1bGUgPSBudWxsXG4gICAgLy8gV2hlbiBhdC1ydWxlIGhhcyBzdWIgcnVsZXMuXG4gICAgdGhpcy5ydWxlcyA9IG51bGxcbiAgICBpZiAodGhpcy5pc0F0UnVsZSAmJiB0aGlzLnN0eWxlKSB0aGlzLmV4dHJhY3RBdFJ1bGVzKClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlXG5cbi8qKlxuICogQ2xhc3MgbmFtZSBwcmVmaXggd2hlbiBnZW5lcmF0ZWQuXG4gKlxuICogQHR5cGUge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5SdWxlLk5BTUVTUEFDRV9QUkVGSVggPSAnanNzJ1xuXG4vKipcbiAqIEluZGVudGF0aW9uIHN0cmluZyBmb3IgZm9ybWF0dGluZyB0b1N0cmluZyBvdXRwdXQuXG4gKlxuICogQHR5cGUge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5SdWxlLklOREVOVEFUSU9OID0gJyAgJ1xuXG4vKipcbiAqIFVuaXF1ZSBpZCwgcmlnaHQgbm93IGp1c3QgYSBjb3VudGVyLCBiZWNhdXNlIHRoZXJlIGlzIG5vIG5lZWQgZm9yIGJldHRlciB1aWQuXG4gKlxuICogQHR5cGUge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5SdWxlLnVpZCA9IDBcblxuLyoqXG4gKiBHZXQgb3Igc2V0IGEgc3R5bGUgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gW3ZhbHVlXVxuICogQHJldHVybiB7UnVsZXxTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuUnVsZS5wcm90b3R5cGUucHJvcCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIC8vIEl0cyBhIHNldHRlci5cbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBpZiAoIXRoaXMuc3R5bGUpIHRoaXMuc3R5bGUgPSB7fVxuICAgICAgICB0aGlzLnN0eWxlW25hbWVdID0gdmFsdWVcbiAgICAgICAgLy8gSWYgbGlua2VkIG9wdGlvbiBpbiBTdHlsZVNoZWV0IGlzIG5vdCBwYXNzZWQsIENTU1J1bGUgaXMgbm90IGRlZmluZWQuXG4gICAgICAgIGlmICh0aGlzLkNTU1J1bGUpIHRoaXMuQ1NTUnVsZS5zdHlsZVtuYW1lXSA9IHZhbHVlXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLy8gSXRzIGEgZ2V0dGVyLlxuICAgIGlmICh0aGlzLnN0eWxlKSB2YWx1ZSA9IHRoaXMuc3R5bGVbbmFtZV1cblxuICAgIC8vIFJlYWQgdGhlIHZhbHVlIGZyb20gdGhlIERPTSBpZiBpdHMgbm90IGNhY2hlZC5cbiAgICBpZiAodmFsdWUgPT0gbnVsbCAmJiB0aGlzLkNTU1J1bGUpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLkNTU1J1bGUuc3R5bGVbbmFtZV1cbiAgICAgICAgLy8gQ2FjaGUgdGhlIHZhbHVlIGFmdGVyIHdlIGhhdmUgZ290IGl0IGZyb20gdGhlIERPTSBvbmNlLlxuICAgICAgICB0aGlzLnN0eWxlW25hbWVdID0gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVcbn1cblxuLyoqXG4gKiBBZGQgY2hpbGQgcnVsZS4gUmVxdWlyZWQgZm9yIHBsdWdpbnMgbGlrZSBcIm5lc3RlZFwiLlxuICogU3R5bGVTaGVldCB3aWxsIHJlbmRlciB0aGVtIGFzIGEgc2VwYXJhdGUgcnVsZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBydWxlIG9wdGlvbnNcbiAqIEByZXR1cm4ge1J1bGV9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuUnVsZS5wcm90b3R5cGUuYWRkQ2hpbGQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgaWYgKCF0aGlzLmNoaWxkcmVuKSB0aGlzLmNoaWxkcmVuID0ge31cbiAgICB0aGlzLmNoaWxkcmVuW3NlbGVjdG9yXSA9IHtcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBBZGQgY2hpbGQgcnVsZS4gUmVxdWlyZWQgZm9yIHBsdWdpbnMgbGlrZSBcIm5lc3RlZFwiLlxuICogU3R5bGVTaGVldCB3aWxsIHJlbmRlciB0aGVtIGFzIGEgc2VwYXJhdGUgcnVsZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZVxuICogQHJldHVybiB7UnVsZX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblJ1bGUucHJvdG90eXBlLmV4dHJhY3RBdFJ1bGVzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5ydWxlcykgdGhpcy5ydWxlcyA9IHt9XG5cbiAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMuc3R5bGUpIHtcbiAgICAgICAgdmFyIHN0eWxlID0gdGhpcy5zdHlsZVtuYW1lXVxuICAgICAgICAvLyBOb3QgYSBuZXN0ZWQgcnVsZS5cbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PSAnc3RyaW5nJykgYnJlYWtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gdGhpcy5vcHRpb25zLm5hbWVkID8gdW5kZWZpbmVkIDogbmFtZVxuICAgICAgICB2YXIgcnVsZSA9IHRoaXMucnVsZXNbbmFtZV0gPSBuZXcgUnVsZShzZWxlY3Rvciwgc3R5bGUsIHRoaXMub3B0aW9ucylcbiAgICAgICAgcGx1Z2lucy5ydW4ocnVsZSlcbiAgICAgICAgZGVsZXRlIHRoaXMuc3R5bGVbbmFtZV1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIEFwcGx5IHJ1bGUgdG8gYW4gZWxlbWVudCBpbmxpbmUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJuIHtSdWxlfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuUnVsZS5wcm90b3R5cGUuYXBwbHlUbyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLnN0eWxlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuc3R5bGVbcHJvcF1cbiAgICAgICAgaWYgKHRvU3RyaW5nLmNhbGwodmFsdWUpID09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gdmFsdWVbaV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSB2YWx1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgcnVsZSB0byBjc3Mgc3RyaW5nLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblJ1bGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgc3R5bGUgPSB0aGlzLnN0eWxlXG5cbiAgICAvLyBBdCBydWxlcyBsaWtlIEBjaGFyc2V0XG4gICAgaWYgKHRoaXMuaXNBdFJ1bGUgJiYgIXRoaXMuc3R5bGUgJiYgIXRoaXMucnVsZXMpIHJldHVybiB0aGlzLnNlbGVjdG9yICsgJzsnXG5cbiAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fVxuICAgIGlmIChvcHRpb25zLmluZGVudGF0aW9uTGV2ZWwgPT0gbnVsbCkgb3B0aW9ucy5pbmRlbnRhdGlvbkxldmVsID0gMFxuXG4gICAgdmFyIHN0ciA9IGluZGVudChvcHRpb25zLmluZGVudGF0aW9uTGV2ZWwsIHRoaXMuc2VsZWN0b3IgKyAnIHsnKVxuXG4gICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBzdHlsZVtwcm9wXVxuICAgICAgICAvLyBXZSB3YW50IHRvIGdlbmVyYXRlIG11bHRpcGxlIHN0eWxlIHdpdGggaWRlbnRpY2FsIHByb3BlcnR5IG5hbWVzLlxuICAgICAgICBpZiAodG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHN0ciArPSAnXFxuJyArIGluZGVudChvcHRpb25zLmluZGVudGF0aW9uTGV2ZWwgKyAxLCBwcm9wICsgJzogJyArIHZhbHVlW2ldICsgJzsnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyICs9ICdcXG4nICsgaW5kZW50KG9wdGlvbnMuaW5kZW50YXRpb25MZXZlbCArIDEsIHByb3AgKyAnOiAnICsgdmFsdWUgKyAnOycpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXZSBhcmUgaGF2ZSBhbiBhdC1ydWxlIHdpdGggbmVzdGVkIHN0YXRlbWVudHMuXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0F0LXJ1bGVcbiAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMucnVsZXMpIHtcbiAgICAgICAgdmFyIHJ1bGVTdHIgPSB0aGlzLnJ1bGVzW25hbWVdLnRvU3RyaW5nKHtcbiAgICAgICAgICAgIGluZGVudGF0aW9uTGV2ZWw6IG9wdGlvbnMuaW5kZW50YXRpb25MZXZlbCArIDFcbiAgICAgICAgfSlcbiAgICAgICAgc3RyICs9ICdcXG4nICsgaW5kZW50KG9wdGlvbnMuaW5kZW50YXRpb25MZXZlbCwgcnVsZVN0cilcbiAgICB9XG5cbiAgICBzdHIgKz0gJ1xcbicgKyBpbmRlbnQob3B0aW9ucy5pbmRlbnRhdGlvbkxldmVsLCAnfScpXG5cbiAgICByZXR1cm4gc3RyXG59XG5cbi8qKlxuICogUmV0dXJucyBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBydWxlLlxuICogTmVzdGVkIHJ1bGVzLCBhdC1ydWxlcyBhbmQgYXJyYXkgdmFsdWVzIGFyZSBub3Qgc3VwcG9ydGVkLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblJ1bGUucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3R5bGUgPSB7fVxuXG4gICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLnN0eWxlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuc3R5bGVbcHJvcF1cbiAgICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWVcbiAgICAgICAgaWYgKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgc3R5bGVbcHJvcF0gPSB2YWx1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlXG59XG5cbi8qKlxuICogSW5kZW50IGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBsZXZlbFxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBpbmRlbnQobGV2ZWwsIHN0cikge1xuICAgIHZhciBpbmRlbnRTdHIgPSAnJ1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGV2ZWw7IGkrKykgaW5kZW50U3RyICs9IFJ1bGUuSU5ERU5UQVRJT05cbiAgICByZXR1cm4gaW5kZW50U3RyICsgc3RyXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIFJ1bGUgPSByZXF1aXJlKCcuL1J1bGUnKVxudmFyIHBsdWdpbnMgPSByZXF1aXJlKCcuL3BsdWdpbnMnKVxuXG4vKipcbiAqIFN0eWxlU2hlZXQgYWJzdHJhY3Rpb24sIGNvbnRhaW5zIHJ1bGVzLCBpbmplY3RzIHN0eWxlc2hlZXQgaW50byBkb20uXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbWVkaWFgIHN0eWxlIGVsZW1lbnQgYXR0cmlidXRlXG4gKiAgLSBgdGl0bGVgIHN0eWxlIGVsZW1lbnQgYXR0cmlidXRlXG4gKiAgLSBgdHlwZWAgc3R5bGUgZWxlbWVudCBhdHRyaWJ1dGVcbiAqICAtIGBuYW1lZGAgdHJ1ZSBieSBkZWZhdWx0IC0ga2V5cyBhcmUgbmFtZXMsIHNlbGVjdG9ycyB3aWxsIGJlIGdlbmVyYXRlZCxcbiAqICAgIGlmIGZhbHNlIC0ga2V5cyBhcmUgZ2xvYmFsIHNlbGVjdG9ycy5cbiAqICAtIGBsaW5rYCBsaW5rIGpzcyBSdWxlIGluc3RhbmNlcyB3aXRoIERPTSBDU1NSdWxlIGluc3RhbmNlcyBzbyB0aGF0IHN0eWxlcyxcbiAqICBjYW4gYmUgbW9kaWZpZWQgZHluYW1pY2FsbHksIGZhbHNlIGJ5IGRlZmF1bHQgYmVjYXVzZSBpdCBoYXMgc29tZSBwZXJmb3JtYW5jZSBjb3N0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcnVsZXNdIG9iamVjdCB3aXRoIHNlbGVjdG9ycyBhbmQgZGVjbGFyYXRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBTdHlsZVNoZWV0KHJ1bGVzLCBvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIGlmICh0aGlzLm9wdGlvbnMubmFtZWQgPT0gbnVsbCkgdGhpcy5vcHRpb25zLm5hbWVkID0gdHJ1ZVxuICAgIHRoaXMuZWxlbWVudCA9IG51bGxcbiAgICB0aGlzLmF0dGFjaGVkID0gZmFsc2VcbiAgICB0aGlzLm1lZGlhID0gdGhpcy5vcHRpb25zLm1lZGlhXG4gICAgdGhpcy50eXBlID0gdGhpcy5vcHRpb25zLnR5cGVcbiAgICB0aGlzLnRpdGxlID0gdGhpcy5vcHRpb25zLnRpdGxlXG4gICAgdGhpcy5ydWxlcyA9IHt9XG4gICAgLy8gT25seSB3aGVuIG9wdGlvbnMubmFtZWQ6IHRydWUuXG4gICAgdGhpcy5jbGFzc2VzID0ge31cbiAgICB0aGlzLmRlcGxveWVkID0gZmFsc2VcbiAgICB0aGlzLmxpbmtlZCA9IGZhbHNlXG5cbiAgICAvLyBEb24ndCBjcmVhdGUgZWxlbWVudCBpZiB3ZSBhcmUgbm90IGluIGEgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgpXG4gICAgfVxuXG4gICAgZm9yICh2YXIga2V5IGluIHJ1bGVzKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlUnVsZXMoa2V5LCBydWxlc1trZXldKVxuICAgIH1cbn1cblxuU3R5bGVTaGVldC5BVFRSSUJVVEVTID0gWyd0aXRsZScsICd0eXBlJywgJ21lZGlhJ11cblxubW9kdWxlLmV4cG9ydHMgPSBTdHlsZVNoZWV0XG5cbi8qKlxuICogSW5zZXJ0IHN0eWxlc2hlZXQgZWxlbWVudCB0byByZW5kZXIgdHJlZS5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICogQHJldHVybiB7U3R5bGVTaGVldH1cbiAqL1xuU3R5bGVTaGVldC5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmF0dGFjaGVkKSByZXR1cm4gdGhpc1xuXG4gICAgaWYgKCF0aGlzLmRlcGxveWVkKSB7XG4gICAgICAgIHRoaXMuZGVwbG95KClcbiAgICAgICAgdGhpcy5kZXBsb3llZCA9IHRydWVcbiAgICB9XG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudClcblxuICAgIC8vIEJlZm9yZSBlbGVtZW50IGlzIGF0dGFjaGVkIHRvIHRoZSBkb20gcnVsZXMgYXJlIG5vdCBjcmVhdGVkLlxuICAgIGlmICghdGhpcy5saW5rZWQgJiYgdGhpcy5vcHRpb25zLmxpbmspIHtcbiAgICAgICAgdGhpcy5saW5rKClcbiAgICAgICAgdGhpcy5saW5rZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgdGhpcy5hdHRhY2hlZCA9IHRydWVcblxuICAgIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogUmVtb3ZlIHN0eWxlc2hlZXQgZWxlbWVudCBmcm9tIHJlbmRlciB0cmVlLlxuICpcbiAqIEByZXR1cm4ge1N0eWxlU2hlZXR9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5TdHlsZVNoZWV0LnByb3RvdHlwZS5kZXRhY2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmF0dGFjaGVkKSByZXR1cm4gdGhpc1xuXG4gICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KVxuICAgIHRoaXMuYXR0YWNoZWQgPSBmYWxzZVxuXG4gICAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBEZXBsb3kgc3R5bGVzIHRvIHRoZSBlbGVtZW50LlxuICpcbiAqIEByZXR1cm4ge1N0eWxlU2hlZXR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuU3R5bGVTaGVldC5wcm90b3R5cGUuZGVwbG95ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnXFxuJyArIHRoaXMudG9TdHJpbmcoKSArICdcXG4nXG5cbiAgICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIEZpbmQgQ1NTUnVsZSBvYmplY3RzIGluIHRoZSBET00gYW5kIGxpbmsgdGhlbSBpbiB0aGUgY29ycmVzcG9uZGluZyBSdWxlIGluc3RhbmNlLlxuICpcbiAqIEByZXR1cm4ge1N0eWxlU2hlZXR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuU3R5bGVTaGVldC5wcm90b3R5cGUubGluayA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgQ1NTUnVsZUxpc3QgPSB0aGlzLmVsZW1lbnQuc2hlZXQuY3NzUnVsZXNcbiAgICB2YXIgcnVsZXMgPSB0aGlzLnJ1bGVzXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IENTU1J1bGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBDU1NSdWxlID0gQ1NTUnVsZUxpc3RbaV1cbiAgICAgICAgdmFyIHJ1bGUgPSBydWxlc1tDU1NSdWxlLnNlbGVjdG9yVGV4dF1cbiAgICAgICAgaWYgKHJ1bGUpIHJ1bGUuQ1NTUnVsZSA9IENTU1J1bGVcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIEFkZCBhIHJ1bGUgdG8gdGhlIGN1cnJlbnQgc3R5bGVzaGVldC4gV2lsbCBpbnNlcnQgYSBydWxlIGFsc28gYWZ0ZXIgdGhlIHN0eWxlc2hlZXRcbiAqIGhhcyBiZWVuIHJlbmRlcmVkIGZpcnN0IHRpbWUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtrZXldIGNhbiBiZSBzZWxlY3RvciBvciBuYW1lIGlmIGBvcHRpb25zLm5hbWVkYCBpcyB0cnVlXG4gKiBAcGFyYW0ge09iamVjdH0gc3R5bGUgcHJvcGVydHkvdmFsdWUgaGFzaFxuICogQHJldHVybiB7UnVsZX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblN0eWxlU2hlZXQucHJvdG90eXBlLmFkZFJ1bGUgPSBmdW5jdGlvbiAoa2V5LCBzdHlsZSkge1xuICAgIHZhciBydWxlcyA9IHRoaXMuY3JlYXRlUnVsZXMoa2V5LCBzdHlsZSlcblxuICAgIC8vIERvbid0IGluc2VydCBydWxlIGRpcmVjdGx5IGlmIHRoZXJlIGlzIG5vIHN0cmluZ2lmaWVkIHZlcnNpb24geWV0LlxuICAgIC8vIEl0IHdpbGwgYmUgaW5zZXJ0ZWQgYWxsIHRvZ2V0aGVyIHdoZW4gLmF0dGFjaCBpcyBjYWxsZWQuXG4gICAgaWYgKHRoaXMuZGVwbG95ZWQpIHtcbiAgICAgICAgdmFyIHNoZWV0ID0gdGhpcy5lbGVtZW50LnNoZWV0XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuZXh0SW5kZXggPSBzaGVldC5jc3NSdWxlcy5sZW5ndGhcbiAgICAgICAgICAgIHZhciBydWxlID0gcnVsZXNbaV1cbiAgICAgICAgICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZS50b1N0cmluZygpLCBuZXh0SW5kZXgpXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxpbmspIHJ1bGUuQ1NTUnVsZSA9IHNoZWV0LmNzc1J1bGVzW25leHRJbmRleF1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVwbG95KClcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXNcbn1cblxuLyoqXG4gKiBDcmVhdGUgcnVsZXMsIHdpbGwgcmVuZGVyIGFsc28gYWZ0ZXIgc3R5bGVzaGVldCB3YXMgcmVuZGVyZWQgdGhlIGZpcnN0IHRpbWUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHJ1bGVzIGtleTpzdHlsZSBoYXNoLlxuICogQHJldHVybiB7U3R5bGVTaGVldH0gdGhpc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuU3R5bGVTaGVldC5wcm90b3R5cGUuYWRkUnVsZXMgPSBmdW5jdGlvbiAocnVsZXMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcnVsZXMpIHtcbiAgICAgICAgdGhpcy5hZGRSdWxlKGtleSwgcnVsZXNba2V5XSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIEdldCBhIHJ1bGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSBjYW4gYmUgc2VsZWN0b3Igb3IgbmFtZSBpZiBgbmFtZWRgIGlzIHRydWUuXG4gKiBAcmV0dXJuIHtSdWxlfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuU3R5bGVTaGVldC5wcm90b3R5cGUuZ2V0UnVsZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlc1trZXldXG59XG5cbi8qKlxuICogQ29udmVydCBydWxlcyB0byBhIGNzcyBzdHJpbmcuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuU3R5bGVTaGVldC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0ciA9ICcnXG4gICAgdmFyIHJ1bGVzID0gdGhpcy5ydWxlc1xuICAgIHZhciBzdHJpbmdpZmllZCA9IHt9XG4gICAgZm9yICh2YXIga2V5IGluIHJ1bGVzKSB7XG4gICAgICAgIHZhciBydWxlID0gcnVsZXNba2V5XVxuICAgICAgICAvLyBXZSBoYXZlIHRoZSBzYW1lIHJ1bGUgcmVmZXJlbmNlZCB0d2ljZSBpZiB1c2luZyBuYW1lZCB1cmxlcy5cbiAgICAgICAgLy8gQnkgbmFtZSBhbmQgYnkgc2VsZWN0b3IuXG4gICAgICAgIGlmIChzdHJpbmdpZmllZFtydWxlLmlkXSkgY29udGludWVcbiAgICAgICAgaWYgKHN0cikgc3RyICs9ICdcXG4nXG4gICAgICAgIHN0ciArPSBydWxlc1trZXldLnRvU3RyaW5nKClcbiAgICAgICAgc3RyaW5naWZpZWRbcnVsZS5pZF0gPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0clxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHJ1bGUsIHdpbGwgbm90IHJlbmRlciBhZnRlciBzdHlsZXNoZWV0IHdhcyByZW5kZXJlZCB0aGUgZmlyc3QgdGltZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gW3NlbGVjdG9yXSBpZiB5b3UgZG9uJ3QgcGFzcyBzZWxlY3RvciAtIGl0IHdpbGwgYmUgZ2VuZXJhdGVkXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0eWxlXSBkZWNsYXJhdGlvbnMgYmxvY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gcnVsZSBvcHRpb25zXG4gKiBAcmV0dXJuIHtBcnJheX0gcnVsZSBjYW4gY29udGFpbiBjaGlsZCBydWxlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblN0eWxlU2hlZXQucHJvdG90eXBlLmNyZWF0ZVJ1bGVzID0gZnVuY3Rpb24gKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgcnVsZXMgPSBbXVxuICAgIHZhciBzZWxlY3RvciwgbmFtZVxuXG4gICAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge31cbiAgICB2YXIgbmFtZWQgPSB0aGlzLm9wdGlvbnMubmFtZWRcbiAgICAvLyBTY29wZSBvcHRpb25zIG92ZXJ3cml0ZSBpbnN0YW5jZSBvcHRpb25zLlxuICAgIGlmIChvcHRpb25zLm5hbWVkICE9IG51bGwpIG5hbWVkID0gb3B0aW9ucy5uYW1lZFxuXG4gICAgaWYgKG5hbWVkKSBuYW1lID0ga2V5XG4gICAgZWxzZSBzZWxlY3RvciA9IGtleVxuXG4gICAgdmFyIHJ1bGUgPSBuZXcgUnVsZShzZWxlY3Rvciwgc3R5bGUsIHtcbiAgICAgICAgc2hlZXQ6IHRoaXMsXG4gICAgICAgIG5hbWVkOiBuYW1lZCxcbiAgICAgICAgbmFtZTogbmFtZVxuICAgIH0pXG4gICAgcnVsZXMucHVzaChydWxlKVxuXG4gICAgdGhpcy5ydWxlc1tydWxlLnNlbGVjdG9yXSA9IHJ1bGVcbiAgICBpZiAobmFtZSkge1xuICAgICAgICB0aGlzLnJ1bGVzW25hbWVdID0gcnVsZVxuICAgICAgICB0aGlzLmNsYXNzZXNbbmFtZV0gPSBydWxlLmNsYXNzTmFtZVxuICAgIH1cblxuICAgIHBsdWdpbnMucnVuKHJ1bGUpXG5cbiAgICBmb3IgKGtleSBpbiBydWxlLmNoaWxkcmVuKSB7XG4gICAgICAgIHJ1bGVzLnB1c2godGhpcy5jcmVhdGVSdWxlcyhcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIHJ1bGUuY2hpbGRyZW5ba2V5XS5zdHlsZSxcbiAgICAgICAgICAgIHJ1bGUuY2hpbGRyZW5ba2V5XS5vcHRpb25zXG4gICAgICAgICkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzXG59XG5cbi8qKlxuICogQ3JlYXRlIHN0eWxlIHNoZWV0IGVsZW1lbnQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG5TdHlsZVNoZWV0LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuXG4gICAgU3R5bGVTaGVldC5BVFRSSUJVVEVTLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXNbbmFtZV0pIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHRoaXNbbmFtZV0pXG4gICAgfSwgdGhpcylcblxuICAgIHJldHVybiBlbGVtZW50XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIFN0eWxlU2hlZXQgPSByZXF1aXJlKCcuL1N0eWxlU2hlZXQnKVxudmFyIFJ1bGUgPSByZXF1aXJlKCcuL1J1bGUnKVxuXG5leHBvcnRzLlN0eWxlU2hlZXQgPSBTdHlsZVNoZWV0XG5cbmV4cG9ydHMuUnVsZSA9IFJ1bGVcblxuZXhwb3J0cy5wbHVnaW5zID0gcmVxdWlyZSgnLi9wbHVnaW5zJylcblxuLyoqXG4gKiBDcmVhdGUgYSBzdHlsZXNoZWV0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBydWxlcyBpcyBzZWxlY3RvcjpzdHlsZSBoYXNoLlxuICogQHBhcmFtIHtPYmplY3R9IFtuYW1lZF0gcnVsZXMgaGF2ZSBuYW1lcyBpZiB0cnVlLCBjbGFzcyBuYW1lcyB3aWxsIGJlIGdlbmVyYXRlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXR0cmlidXRlc10gc3R5bGVzaGVldCBlbGVtZW50IGF0dHJpYnV0ZXMuXG4gKiBAcmV0dXJuIHtTdHlsZVNoZWV0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZXhwb3J0cy5jcmVhdGVTdHlsZVNoZWV0ID0gZnVuY3Rpb24gKHJ1bGVzLCBuYW1lZCwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiBuZXcgU3R5bGVTaGVldChydWxlcywgbmFtZWQsIGF0dHJpYnV0ZXMpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcnVsZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gW3NlbGVjdG9yXVxuICogQHBhcmFtIHtPYmplY3R9IHN0eWxlIGlzIHByb3BlcnR5OnZhbHVlIGhhc2guXG4gKiBAcmV0dXJuIHtSdWxlfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZXhwb3J0cy5jcmVhdGVSdWxlID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBzdHlsZSkge1xuICAgIHZhciBydWxlID0gbmV3IFJ1bGUoc2VsZWN0b3IsIHN0eWxlKVxuICAgIGV4cG9ydHMucGx1Z2lucy5ydW4ocnVsZSlcbiAgICByZXR1cm4gcnVsZVxufVxuXG4vKipcbiAqIFJlZ2lzdGVyIHBsdWdpbi4gUGFzc2VkIGZ1bmN0aW9uIHdpbGwgYmUgaW52b2tlZCB3aXRoIGEgcnVsZSBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQGFwaSBwdWJsaWNcbiAqL1xuZXhwb3J0cy51c2UgPSBleHBvcnRzLnBsdWdpbnMudXNlXG4iLCIndXNlIHN0cmljdCdcblxuLyoqXG4gKiBSZWdpc3RlcmVkIHBsdWdpbnMuXG4gKlxuICogQHR5cGUge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZXhwb3J0cy5yZWdpc3RyeSA9IFtdXG5cbi8qKlxuICogUmVnaXN0ZXIgcGx1Z2luLiBQYXNzZWQgZnVuY3Rpb24gd2lsbCBiZSBpbnZva2VkIHdpdGggYSBydWxlIGluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5leHBvcnRzLnVzZSA9IGZ1bmN0aW9uIChmbikge1xuICAgIGV4cG9ydHMucmVnaXN0cnkucHVzaChmbilcbn1cblxuLyoqXG4gKiBFeGVjdXRlIGFsbCByZWdpc3RlcmVkIHBsdWdpbnMuXG4gKlxuICogQHBhcmFtIHtSdWxlfSBydWxlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZXhwb3J0cy5ydW4gPSBmdW5jdGlvbiAocnVsZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwb3J0cy5yZWdpc3RyeS5sZW5ndGg7IGkrKykge1xuICAgICAgICBleHBvcnRzLnJlZ2lzdHJ5W2ldKHJ1bGUpXG4gICAgfVxufVxuIiwidmFyIG0gPSAoZnVuY3Rpb24gYXBwKHdpbmRvdywgdW5kZWZpbmVkKSB7XHJcblx0dmFyIE9CSkVDVCA9IFwiW29iamVjdCBPYmplY3RdXCIsIEFSUkFZID0gXCJbb2JqZWN0IEFycmF5XVwiLCBTVFJJTkcgPSBcIltvYmplY3QgU3RyaW5nXVwiLCBGVU5DVElPTiA9IFwiZnVuY3Rpb25cIjtcclxuXHR2YXIgdHlwZSA9IHt9LnRvU3RyaW5nO1xyXG5cdHZhciBwYXJzZXIgPSAvKD86KF58I3xcXC4pKFteI1xcLlxcW1xcXV0rKSl8KFxcWy4rP1xcXSkvZywgYXR0clBhcnNlciA9IC9cXFsoLis/KSg/Oj0oXCJ8J3wpKC4qPylcXDIpP1xcXS87XHJcblx0dmFyIHZvaWRFbGVtZW50cyA9IC9eKEFSRUF8QkFTRXxCUnxDT0x8Q09NTUFORHxFTUJFRHxIUnxJTUd8SU5QVVR8S0VZR0VOfExJTkt8TUVUQXxQQVJBTXxTT1VSQ0V8VFJBQ0t8V0JSKSQvO1xyXG5cclxuXHQvLyBjYWNoaW5nIGNvbW1vbmx5IHVzZWQgdmFyaWFibGVzXHJcblx0dmFyICRkb2N1bWVudCwgJGxvY2F0aW9uLCAkcmVxdWVzdEFuaW1hdGlvbkZyYW1lLCAkY2FuY2VsQW5pbWF0aW9uRnJhbWU7XHJcblxyXG5cdC8vIHNlbGYgaW52b2tpbmcgZnVuY3Rpb24gbmVlZGVkIGJlY2F1c2Ugb2YgdGhlIHdheSBtb2NrcyB3b3JrXHJcblx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSh3aW5kb3cpe1xyXG5cdFx0JGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xyXG5cdFx0JGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uO1xyXG5cdFx0JGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5jbGVhclRpbWVvdXQ7XHJcblx0XHQkcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cuc2V0VGltZW91dDtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUod2luZG93KTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlZGVmIHtTdHJpbmd9IFRhZ1xyXG5cdCAqIEEgc3RyaW5nIHRoYXQgbG9va3MgbGlrZSAtPiBkaXYuY2xhc3NuYW1lI2lkW3BhcmFtPW9uZV1bcGFyYW0yPXR3b11cclxuXHQgKiBXaGljaCBkZXNjcmliZXMgYSBET00gbm9kZVxyXG5cdCAqL1xyXG5cclxuXHQvKipcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7VGFnfSBUaGUgRE9NIG5vZGUgdGFnXHJcblx0ICogQHBhcmFtIHtPYmplY3Q9W119IG9wdGlvbmFsIGtleS12YWx1ZSBwYWlycyB0byBiZSBtYXBwZWQgdG8gRE9NIGF0dHJzXHJcblx0ICogQHBhcmFtIHsuLi5tTm9kZT1bXX0gWmVybyBvciBtb3JlIE1pdGhyaWwgY2hpbGQgbm9kZXMuIENhbiBiZSBhbiBhcnJheSwgb3Igc3BsYXQgKG9wdGlvbmFsKVxyXG5cdCAqXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gbSgpIHtcclxuXHRcdHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG5cdFx0dmFyIGhhc0F0dHJzID0gYXJnc1sxXSAhPSBudWxsICYmIHR5cGUuY2FsbChhcmdzWzFdKSA9PT0gT0JKRUNUICYmICEoXCJ0YWdcIiBpbiBhcmdzWzFdKSAmJiAhKFwic3VidHJlZVwiIGluIGFyZ3NbMV0pO1xyXG5cdFx0dmFyIGF0dHJzID0gaGFzQXR0cnMgPyBhcmdzWzFdIDoge307XHJcblx0XHR2YXIgY2xhc3NBdHRyTmFtZSA9IFwiY2xhc3NcIiBpbiBhdHRycyA/IFwiY2xhc3NcIiA6IFwiY2xhc3NOYW1lXCI7XHJcblx0XHR2YXIgY2VsbCA9IHt0YWc6IFwiZGl2XCIsIGF0dHJzOiB7fX07XHJcblx0XHR2YXIgbWF0Y2gsIGNsYXNzZXMgPSBbXTtcclxuXHRcdGlmICh0eXBlLmNhbGwoYXJnc1swXSkgIT0gU1RSSU5HKSB0aHJvdyBuZXcgRXJyb3IoXCJzZWxlY3RvciBpbiBtKHNlbGVjdG9yLCBhdHRycywgY2hpbGRyZW4pIHNob3VsZCBiZSBhIHN0cmluZ1wiKVxyXG5cdFx0d2hpbGUgKG1hdGNoID0gcGFyc2VyLmV4ZWMoYXJnc1swXSkpIHtcclxuXHRcdFx0aWYgKG1hdGNoWzFdID09PSBcIlwiICYmIG1hdGNoWzJdKSBjZWxsLnRhZyA9IG1hdGNoWzJdO1xyXG5cdFx0XHRlbHNlIGlmIChtYXRjaFsxXSA9PT0gXCIjXCIpIGNlbGwuYXR0cnMuaWQgPSBtYXRjaFsyXTtcclxuXHRcdFx0ZWxzZSBpZiAobWF0Y2hbMV0gPT09IFwiLlwiKSBjbGFzc2VzLnB1c2gobWF0Y2hbMl0pO1xyXG5cdFx0XHRlbHNlIGlmIChtYXRjaFszXVswXSA9PT0gXCJbXCIpIHtcclxuXHRcdFx0XHR2YXIgcGFpciA9IGF0dHJQYXJzZXIuZXhlYyhtYXRjaFszXSk7XHJcblx0XHRcdFx0Y2VsbC5hdHRyc1twYWlyWzFdXSA9IHBhaXJbM10gfHwgKHBhaXJbMl0gPyBcIlwiIDp0cnVlKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSBjZWxsLmF0dHJzW2NsYXNzQXR0ck5hbWVdID0gY2xhc3Nlcy5qb2luKFwiIFwiKTtcclxuXHJcblxyXG5cdFx0dmFyIGNoaWxkcmVuID0gaGFzQXR0cnMgPyBhcmdzLnNsaWNlKDIpIDogYXJncy5zbGljZSgxKTtcclxuXHRcdGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgdHlwZS5jYWxsKGNoaWxkcmVuWzBdKSA9PT0gQVJSQVkpIHtcclxuXHRcdFx0Y2VsbC5jaGlsZHJlbiA9IGNoaWxkcmVuWzBdXHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Y2VsbC5jaGlsZHJlbiA9IGNoaWxkcmVuXHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICh2YXIgYXR0ck5hbWUgaW4gYXR0cnMpIHtcclxuXHRcdFx0aWYgKGF0dHJOYW1lID09PSBjbGFzc0F0dHJOYW1lKSB7XHJcblx0XHRcdFx0dmFyIGNsYXNzTmFtZSA9IGNlbGwuYXR0cnNbYXR0ck5hbWVdXHJcblx0XHRcdFx0Y2VsbC5hdHRyc1thdHRyTmFtZV0gPSAoY2xhc3NOYW1lICYmIGF0dHJzW2F0dHJOYW1lXSA/IGNsYXNzTmFtZSArIFwiIFwiIDogY2xhc3NOYW1lIHx8IFwiXCIpICsgYXR0cnNbYXR0ck5hbWVdO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgY2VsbC5hdHRyc1thdHRyTmFtZV0gPSBhdHRyc1thdHRyTmFtZV1cclxuXHRcdH1cclxuXHRcdHJldHVybiBjZWxsXHJcblx0fVxyXG5cdGZ1bmN0aW9uIGJ1aWxkKHBhcmVudEVsZW1lbnQsIHBhcmVudFRhZywgcGFyZW50Q2FjaGUsIHBhcmVudEluZGV4LCBkYXRhLCBjYWNoZWQsIHNob3VsZFJlYXR0YWNoLCBpbmRleCwgZWRpdGFibGUsIG5hbWVzcGFjZSwgY29uZmlncykge1xyXG5cdFx0Ly9gYnVpbGRgIGlzIGEgcmVjdXJzaXZlIGZ1bmN0aW9uIHRoYXQgbWFuYWdlcyBjcmVhdGlvbi9kaWZmaW5nL3JlbW92YWwgb2YgRE9NIGVsZW1lbnRzIGJhc2VkIG9uIGNvbXBhcmlzb24gYmV0d2VlbiBgZGF0YWAgYW5kIGBjYWNoZWRgXHJcblx0XHQvL3RoZSBkaWZmIGFsZ29yaXRobSBjYW4gYmUgc3VtbWFyaXplZCBhcyB0aGlzOlxyXG5cdFx0Ly8xIC0gY29tcGFyZSBgZGF0YWAgYW5kIGBjYWNoZWRgXHJcblx0XHQvLzIgLSBpZiB0aGV5IGFyZSBkaWZmZXJlbnQsIGNvcHkgYGRhdGFgIHRvIGBjYWNoZWRgIGFuZCB1cGRhdGUgdGhlIERPTSBiYXNlZCBvbiB3aGF0IHRoZSBkaWZmZXJlbmNlIGlzXHJcblx0XHQvLzMgLSByZWN1cnNpdmVseSBhcHBseSB0aGlzIGFsZ29yaXRobSBmb3IgZXZlcnkgYXJyYXkgYW5kIGZvciB0aGUgY2hpbGRyZW4gb2YgZXZlcnkgdmlydHVhbCBlbGVtZW50XHJcblxyXG5cdFx0Ly90aGUgYGNhY2hlZGAgZGF0YSBzdHJ1Y3R1cmUgaXMgZXNzZW50aWFsbHkgdGhlIHNhbWUgYXMgdGhlIHByZXZpb3VzIHJlZHJhdydzIGBkYXRhYCBkYXRhIHN0cnVjdHVyZSwgd2l0aCBhIGZldyBhZGRpdGlvbnM6XHJcblx0XHQvLy0gYGNhY2hlZGAgYWx3YXlzIGhhcyBhIHByb3BlcnR5IGNhbGxlZCBgbm9kZXNgLCB3aGljaCBpcyBhIGxpc3Qgb2YgRE9NIGVsZW1lbnRzIHRoYXQgY29ycmVzcG9uZCB0byB0aGUgZGF0YSByZXByZXNlbnRlZCBieSB0aGUgcmVzcGVjdGl2ZSB2aXJ0dWFsIGVsZW1lbnRcclxuXHRcdC8vLSBpbiBvcmRlciB0byBzdXBwb3J0IGF0dGFjaGluZyBgbm9kZXNgIGFzIGEgcHJvcGVydHkgb2YgYGNhY2hlZGAsIGBjYWNoZWRgIGlzICphbHdheXMqIGEgbm9uLXByaW1pdGl2ZSBvYmplY3QsIGkuZS4gaWYgdGhlIGRhdGEgd2FzIGEgc3RyaW5nLCB0aGVuIGNhY2hlZCBpcyBhIFN0cmluZyBpbnN0YW5jZS4gSWYgZGF0YSB3YXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLCBjYWNoZWQgaXMgYG5ldyBTdHJpbmcoXCJcIilgXHJcblx0XHQvLy0gYGNhY2hlZCBhbHNvIGhhcyBhIGBjb25maWdDb250ZXh0YCBwcm9wZXJ0eSwgd2hpY2ggaXMgdGhlIHN0YXRlIHN0b3JhZ2Ugb2JqZWN0IGV4cG9zZWQgYnkgY29uZmlnKGVsZW1lbnQsIGlzSW5pdGlhbGl6ZWQsIGNvbnRleHQpXHJcblx0XHQvLy0gd2hlbiBgY2FjaGVkYCBpcyBhbiBPYmplY3QsIGl0IHJlcHJlc2VudHMgYSB2aXJ0dWFsIGVsZW1lbnQ7IHdoZW4gaXQncyBhbiBBcnJheSwgaXQgcmVwcmVzZW50cyBhIGxpc3Qgb2YgZWxlbWVudHM7IHdoZW4gaXQncyBhIFN0cmluZywgTnVtYmVyIG9yIEJvb2xlYW4sIGl0IHJlcHJlc2VudHMgYSB0ZXh0IG5vZGVcclxuXHJcblx0XHQvL2BwYXJlbnRFbGVtZW50YCBpcyBhIERPTSBlbGVtZW50IHVzZWQgZm9yIFczQyBET00gQVBJIGNhbGxzXHJcblx0XHQvL2BwYXJlbnRUYWdgIGlzIG9ubHkgdXNlZCBmb3IgaGFuZGxpbmcgYSBjb3JuZXIgY2FzZSBmb3IgdGV4dGFyZWEgdmFsdWVzXHJcblx0XHQvL2BwYXJlbnRDYWNoZWAgaXMgdXNlZCB0byByZW1vdmUgbm9kZXMgaW4gc29tZSBtdWx0aS1ub2RlIGNhc2VzXHJcblx0XHQvL2BwYXJlbnRJbmRleGAgYW5kIGBpbmRleGAgYXJlIHVzZWQgdG8gZmlndXJlIG91dCB0aGUgb2Zmc2V0IG9mIG5vZGVzLiBUaGV5J3JlIGFydGlmYWN0cyBmcm9tIGJlZm9yZSBhcnJheXMgc3RhcnRlZCBiZWluZyBmbGF0dGVuZWQgYW5kIGFyZSBsaWtlbHkgcmVmYWN0b3JhYmxlXHJcblx0XHQvL2BkYXRhYCBhbmQgYGNhY2hlZGAgYXJlLCByZXNwZWN0aXZlbHksIHRoZSBuZXcgYW5kIG9sZCBub2RlcyBiZWluZyBkaWZmZWRcclxuXHRcdC8vYHNob3VsZFJlYXR0YWNoYCBpcyBhIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIGEgcGFyZW50IG5vZGUgd2FzIHJlY3JlYXRlZCAoaWYgc28sIGFuZCBpZiB0aGlzIG5vZGUgaXMgcmV1c2VkLCB0aGVuIHRoaXMgbm9kZSBtdXN0IHJlYXR0YWNoIGl0c2VsZiB0byB0aGUgbmV3IHBhcmVudClcclxuXHRcdC8vYGVkaXRhYmxlYCBpcyBhIGZsYWcgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciBhbiBhbmNlc3RvciBpcyBjb250ZW50ZWRpdGFibGVcclxuXHRcdC8vYG5hbWVzcGFjZWAgaW5kaWNhdGVzIHRoZSBjbG9zZXN0IEhUTUwgbmFtZXNwYWNlIGFzIGl0IGNhc2NhZGVzIGRvd24gZnJvbSBhbiBhbmNlc3RvclxyXG5cdFx0Ly9gY29uZmlnc2AgaXMgYSBsaXN0IG9mIGNvbmZpZyBmdW5jdGlvbnMgdG8gcnVuIGFmdGVyIHRoZSB0b3Btb3N0IGBidWlsZGAgY2FsbCBmaW5pc2hlcyBydW5uaW5nXHJcblxyXG5cdFx0Ly90aGVyZSdzIGxvZ2ljIHRoYXQgcmVsaWVzIG9uIHRoZSBhc3N1bXB0aW9uIHRoYXQgbnVsbCBhbmQgdW5kZWZpbmVkIGRhdGEgYXJlIGVxdWl2YWxlbnQgdG8gZW1wdHkgc3RyaW5nc1xyXG5cdFx0Ly8tIHRoaXMgcHJldmVudHMgbGlmZWN5Y2xlIHN1cnByaXNlcyBmcm9tIHByb2NlZHVyYWwgaGVscGVycyB0aGF0IG1peCBpbXBsaWNpdCBhbmQgZXhwbGljaXQgcmV0dXJuIHN0YXRlbWVudHMgKGUuZy4gZnVuY3Rpb24gZm9vKCkge2lmIChjb25kKSByZXR1cm4gbShcImRpdlwiKX1cclxuXHRcdC8vLSBpdCBzaW1wbGlmaWVzIGRpZmZpbmcgY29kZVxyXG5cdFx0Ly9kYXRhLnRvU3RyaW5nKCkgaXMgbnVsbCBpZiBkYXRhIGlzIHRoZSByZXR1cm4gdmFsdWUgb2YgQ29uc29sZS5sb2cgaW4gRmlyZWZveFxyXG5cdFx0dHJ5IHtpZiAoZGF0YSA9PSBudWxsIHx8IGRhdGEudG9TdHJpbmcoKSA9PSBudWxsKSBkYXRhID0gXCJcIjt9IGNhdGNoIChlKSB7ZGF0YSA9IFwiXCJ9XHJcblx0XHRpZiAoZGF0YS5zdWJ0cmVlID09PSBcInJldGFpblwiKSByZXR1cm4gY2FjaGVkO1xyXG5cdFx0dmFyIGNhY2hlZFR5cGUgPSB0eXBlLmNhbGwoY2FjaGVkKSwgZGF0YVR5cGUgPSB0eXBlLmNhbGwoZGF0YSk7XHJcblx0XHRpZiAoY2FjaGVkID09IG51bGwgfHwgY2FjaGVkVHlwZSAhPT0gZGF0YVR5cGUpIHtcclxuXHRcdFx0aWYgKGNhY2hlZCAhPSBudWxsKSB7XHJcblx0XHRcdFx0aWYgKHBhcmVudENhY2hlICYmIHBhcmVudENhY2hlLm5vZGVzKSB7XHJcblx0XHRcdFx0XHR2YXIgb2Zmc2V0ID0gaW5kZXggLSBwYXJlbnRJbmRleDtcclxuXHRcdFx0XHRcdHZhciBlbmQgPSBvZmZzZXQgKyAoZGF0YVR5cGUgPT09IEFSUkFZID8gZGF0YSA6IGNhY2hlZC5ub2RlcykubGVuZ3RoO1xyXG5cdFx0XHRcdFx0Y2xlYXIocGFyZW50Q2FjaGUubm9kZXMuc2xpY2Uob2Zmc2V0LCBlbmQpLCBwYXJlbnRDYWNoZS5zbGljZShvZmZzZXQsIGVuZCkpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKGNhY2hlZC5ub2RlcykgY2xlYXIoY2FjaGVkLm5vZGVzLCBjYWNoZWQpXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FjaGVkID0gbmV3IGRhdGEuY29uc3RydWN0b3I7XHJcblx0XHRcdGlmIChjYWNoZWQudGFnKSBjYWNoZWQgPSB7fTsgLy9pZiBjb25zdHJ1Y3RvciBjcmVhdGVzIGEgdmlydHVhbCBkb20gZWxlbWVudCwgdXNlIGEgYmxhbmsgb2JqZWN0IGFzIHRoZSBiYXNlIGNhY2hlZCBub2RlIGluc3RlYWQgb2YgY29weWluZyB0aGUgdmlydHVhbCBlbCAoIzI3NylcclxuXHRcdFx0Y2FjaGVkLm5vZGVzID0gW11cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoZGF0YVR5cGUgPT09IEFSUkFZKSB7XHJcblx0XHRcdC8vcmVjdXJzaXZlbHkgZmxhdHRlbiBhcnJheVxyXG5cdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gZGF0YS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdGlmICh0eXBlLmNhbGwoZGF0YVtpXSkgPT09IEFSUkFZKSB7XHJcblx0XHRcdFx0XHRkYXRhID0gZGF0YS5jb25jYXQuYXBwbHkoW10sIGRhdGEpO1xyXG5cdFx0XHRcdFx0aS0tIC8vY2hlY2sgY3VycmVudCBpbmRleCBhZ2FpbiBhbmQgZmxhdHRlbiB1bnRpbCB0aGVyZSBhcmUgbm8gbW9yZSBuZXN0ZWQgYXJyYXlzIGF0IHRoYXQgaW5kZXhcclxuXHRcdFx0XHRcdGxlbiA9IGRhdGEubGVuZ3RoXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgbm9kZXMgPSBbXSwgaW50YWN0ID0gY2FjaGVkLmxlbmd0aCA9PT0gZGF0YS5sZW5ndGgsIHN1YkFycmF5Q291bnQgPSAwO1xyXG5cclxuXHRcdFx0Ly9rZXlzIGFsZ29yaXRobTogc29ydCBlbGVtZW50cyB3aXRob3V0IHJlY3JlYXRpbmcgdGhlbSBpZiBrZXlzIGFyZSBwcmVzZW50XHJcblx0XHRcdC8vMSkgY3JlYXRlIGEgbWFwIG9mIGFsbCBleGlzdGluZyBrZXlzLCBhbmQgbWFyayBhbGwgZm9yIGRlbGV0aW9uXHJcblx0XHRcdC8vMikgYWRkIG5ldyBrZXlzIHRvIG1hcCBhbmQgbWFyayB0aGVtIGZvciBhZGRpdGlvblxyXG5cdFx0XHQvLzMpIGlmIGtleSBleGlzdHMgaW4gbmV3IGxpc3QsIGNoYW5nZSBhY3Rpb24gZnJvbSBkZWxldGlvbiB0byBhIG1vdmVcclxuXHRcdFx0Ly80KSBmb3IgZWFjaCBrZXksIGhhbmRsZSBpdHMgY29ycmVzcG9uZGluZyBhY3Rpb24gYXMgbWFya2VkIGluIHByZXZpb3VzIHN0ZXBzXHJcblx0XHRcdC8vNSkgY29weSB1bmtleWVkIGl0ZW1zIGludG8gdGhlaXIgcmVzcGVjdGl2ZSBnYXBzXHJcblx0XHRcdHZhciBERUxFVElPTiA9IDEsIElOU0VSVElPTiA9IDIgLCBNT1ZFID0gMztcclxuXHRcdFx0dmFyIGV4aXN0aW5nID0ge30sIHVua2V5ZWQgPSBbXSwgc2hvdWxkTWFpbnRhaW5JZGVudGl0aWVzID0gZmFsc2U7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2FjaGVkLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKGNhY2hlZFtpXSAmJiBjYWNoZWRbaV0uYXR0cnMgJiYgY2FjaGVkW2ldLmF0dHJzLmtleSAhPSBudWxsKSB7XHJcblx0XHRcdFx0XHRzaG91bGRNYWludGFpbklkZW50aXRpZXMgPSB0cnVlO1xyXG5cdFx0XHRcdFx0ZXhpc3RpbmdbY2FjaGVkW2ldLmF0dHJzLmtleV0gPSB7YWN0aW9uOiBERUxFVElPTiwgaW5kZXg6IGl9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBndWlkID0gMFxyXG5cdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gZGF0YS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdGlmIChkYXRhW2ldICYmIGRhdGFbaV0uYXR0cnMgJiYgZGF0YVtpXS5hdHRycy5rZXkgPT0gbnVsbCkgZGF0YVtpXS5hdHRycy5rZXkgPSBcIl9fbWl0aHJpbF9fXCIgKyBndWlkKytcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoc2hvdWxkTWFpbnRhaW5JZGVudGl0aWVzKSB7XHJcblx0XHRcdFx0aWYgKGRhdGEuaW5kZXhPZihudWxsKSA+IC0xKSBkYXRhID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24oeCkge3JldHVybiB4ICE9IG51bGx9KVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHZhciBrZXlzRGlmZmVyID0gZmFsc2VcclxuXHRcdFx0XHRpZiAoZGF0YS5sZW5ndGggIT0gY2FjaGVkLmxlbmd0aCkga2V5c0RpZmZlciA9IHRydWVcclxuXHRcdFx0XHRlbHNlIGZvciAodmFyIGkgPSAwLCBjYWNoZWRDZWxsLCBkYXRhQ2VsbDsgY2FjaGVkQ2VsbCA9IGNhY2hlZFtpXSwgZGF0YUNlbGwgPSBkYXRhW2ldOyBpKyspIHtcclxuXHRcdFx0XHRcdGlmIChjYWNoZWRDZWxsLmF0dHJzICYmIGRhdGFDZWxsLmF0dHJzICYmIGNhY2hlZENlbGwuYXR0cnMua2V5ICE9IGRhdGFDZWxsLmF0dHJzLmtleSkge1xyXG5cdFx0XHRcdFx0XHRrZXlzRGlmZmVyID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHRicmVha1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoa2V5c0RpZmZlcikge1xyXG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKGRhdGFbaV0gJiYgZGF0YVtpXS5hdHRycykge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChkYXRhW2ldLmF0dHJzLmtleSAhPSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIga2V5ID0gZGF0YVtpXS5hdHRycy5rZXk7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIWV4aXN0aW5nW2tleV0pIGV4aXN0aW5nW2tleV0gPSB7YWN0aW9uOiBJTlNFUlRJT04sIGluZGV4OiBpfTtcclxuXHRcdFx0XHRcdFx0XHRcdGVsc2UgZXhpc3Rpbmdba2V5XSA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aW9uOiBNT1ZFLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbmRleDogaSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZnJvbTogZXhpc3Rpbmdba2V5XS5pbmRleCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudDogY2FjaGVkLm5vZGVzW2V4aXN0aW5nW2tleV0uaW5kZXhdIHx8ICRkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGVsc2UgdW5rZXllZC5wdXNoKHtpbmRleDogaSwgZWxlbWVudDogcGFyZW50RWxlbWVudC5jaGlsZE5vZGVzW2ldIHx8ICRkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpfSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmFyIGFjdGlvbnMgPSBbXVxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgcHJvcCBpbiBleGlzdGluZykgYWN0aW9ucy5wdXNoKGV4aXN0aW5nW3Byb3BdKVxyXG5cdFx0XHRcdFx0dmFyIGNoYW5nZXMgPSBhY3Rpb25zLnNvcnQoc29ydENoYW5nZXMpO1xyXG5cdFx0XHRcdFx0dmFyIG5ld0NhY2hlZCA9IG5ldyBBcnJheShjYWNoZWQubGVuZ3RoKVxyXG5cdFx0XHRcdFx0bmV3Q2FjaGVkLm5vZGVzID0gY2FjaGVkLm5vZGVzLnNsaWNlKClcclxuXHJcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMCwgY2hhbmdlOyBjaGFuZ2UgPSBjaGFuZ2VzW2ldOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKGNoYW5nZS5hY3Rpb24gPT09IERFTEVUSU9OKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2xlYXIoY2FjaGVkW2NoYW5nZS5pbmRleF0ubm9kZXMsIGNhY2hlZFtjaGFuZ2UuaW5kZXhdKTtcclxuXHRcdFx0XHRcdFx0XHRuZXdDYWNoZWQuc3BsaWNlKGNoYW5nZS5pbmRleCwgMSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAoY2hhbmdlLmFjdGlvbiA9PT0gSU5TRVJUSU9OKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGR1bW15ID0gJGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdFx0XHRcdFx0ZHVtbXkua2V5ID0gZGF0YVtjaGFuZ2UuaW5kZXhdLmF0dHJzLmtleTtcclxuXHRcdFx0XHRcdFx0XHRwYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShkdW1teSwgcGFyZW50RWxlbWVudC5jaGlsZE5vZGVzW2NoYW5nZS5pbmRleF0gfHwgbnVsbCk7XHJcblx0XHRcdFx0XHRcdFx0bmV3Q2FjaGVkLnNwbGljZShjaGFuZ2UuaW5kZXgsIDAsIHthdHRyczoge2tleTogZGF0YVtjaGFuZ2UuaW5kZXhdLmF0dHJzLmtleX0sIG5vZGVzOiBbZHVtbXldfSlcclxuXHRcdFx0XHRcdFx0XHRuZXdDYWNoZWQubm9kZXNbY2hhbmdlLmluZGV4XSA9IGR1bW15XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGlmIChjaGFuZ2UuYWN0aW9uID09PSBNT1ZFKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1tjaGFuZ2UuaW5kZXhdICE9PSBjaGFuZ2UuZWxlbWVudCAmJiBjaGFuZ2UuZWxlbWVudCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoY2hhbmdlLmVsZW1lbnQsIHBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1tjaGFuZ2UuaW5kZXhdIHx8IG51bGwpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdG5ld0NhY2hlZFtjaGFuZ2UuaW5kZXhdID0gY2FjaGVkW2NoYW5nZS5mcm9tXVxyXG5cdFx0XHRcdFx0XHRcdG5ld0NhY2hlZC5ub2Rlc1tjaGFuZ2UuaW5kZXhdID0gY2hhbmdlLmVsZW1lbnRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHVua2V5ZWQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0dmFyIGNoYW5nZSA9IHVua2V5ZWRbaV07XHJcblx0XHRcdFx0XHRcdHBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNoYW5nZS5lbGVtZW50LCBwYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbY2hhbmdlLmluZGV4XSB8fCBudWxsKTtcclxuXHRcdFx0XHRcdFx0bmV3Q2FjaGVkW2NoYW5nZS5pbmRleF0gPSBjYWNoZWRbY2hhbmdlLmluZGV4XVxyXG5cdFx0XHRcdFx0XHRuZXdDYWNoZWQubm9kZXNbY2hhbmdlLmluZGV4XSA9IGNoYW5nZS5lbGVtZW50XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjYWNoZWQgPSBuZXdDYWNoZWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC8vZW5kIGtleSBhbGdvcml0aG1cclxuXHJcblx0XHRcdGZvciAodmFyIGkgPSAwLCBjYWNoZUNvdW50ID0gMCwgbGVuID0gZGF0YS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdC8vZGlmZiBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5XHJcblx0XHRcdFx0dmFyIGl0ZW0gPSBidWlsZChwYXJlbnRFbGVtZW50LCBwYXJlbnRUYWcsIGNhY2hlZCwgaW5kZXgsIGRhdGFbaV0sIGNhY2hlZFtjYWNoZUNvdW50XSwgc2hvdWxkUmVhdHRhY2gsIGluZGV4ICsgc3ViQXJyYXlDb3VudCB8fCBzdWJBcnJheUNvdW50LCBlZGl0YWJsZSwgbmFtZXNwYWNlLCBjb25maWdzKTtcclxuXHRcdFx0XHRpZiAoaXRlbSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuXHRcdFx0XHRpZiAoIWl0ZW0ubm9kZXMuaW50YWN0KSBpbnRhY3QgPSBmYWxzZTtcclxuXHRcdFx0XHRpZiAoaXRlbS4kdHJ1c3RlZCkge1xyXG5cdFx0XHRcdFx0Ly9maXggb2Zmc2V0IG9mIG5leHQgZWxlbWVudCBpZiBpdGVtIHdhcyBhIHRydXN0ZWQgc3RyaW5nIHcvIG1vcmUgdGhhbiBvbmUgaHRtbCBlbGVtZW50XHJcblx0XHRcdFx0XHQvL3RoZSBmaXJzdCBjbGF1c2UgaW4gdGhlIHJlZ2V4cCBtYXRjaGVzIGVsZW1lbnRzXHJcblx0XHRcdFx0XHQvL3RoZSBzZWNvbmQgY2xhdXNlIChhZnRlciB0aGUgcGlwZSkgbWF0Y2hlcyB0ZXh0IG5vZGVzXHJcblx0XHRcdFx0XHRzdWJBcnJheUNvdW50ICs9IChpdGVtLm1hdGNoKC88W15cXC9dfFxcPlxccypbXjxdL2cpIHx8IFswXSkubGVuZ3RoXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Ugc3ViQXJyYXlDb3VudCArPSB0eXBlLmNhbGwoaXRlbSkgPT09IEFSUkFZID8gaXRlbS5sZW5ndGggOiAxO1xyXG5cdFx0XHRcdGNhY2hlZFtjYWNoZUNvdW50KytdID0gaXRlbVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghaW50YWN0KSB7XHJcblx0XHRcdFx0Ly9kaWZmIHRoZSBhcnJheSBpdHNlbGZcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL3VwZGF0ZSB0aGUgbGlzdCBvZiBET00gbm9kZXMgYnkgY29sbGVjdGluZyB0aGUgbm9kZXMgZnJvbSBlYWNoIGl0ZW1cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gZGF0YS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKGNhY2hlZFtpXSAhPSBudWxsKSBub2Rlcy5wdXNoLmFwcGx5KG5vZGVzLCBjYWNoZWRbaV0ubm9kZXMpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vcmVtb3ZlIGl0ZW1zIGZyb20gdGhlIGVuZCBvZiB0aGUgYXJyYXkgaWYgdGhlIG5ldyBhcnJheSBpcyBzaG9ydGVyIHRoYW4gdGhlIG9sZCBvbmVcclxuXHRcdFx0XHQvL2lmIGVycm9ycyBldmVyIGhhcHBlbiBoZXJlLCB0aGUgaXNzdWUgaXMgbW9zdCBsaWtlbHkgYSBidWcgaW4gdGhlIGNvbnN0cnVjdGlvbiBvZiB0aGUgYGNhY2hlZGAgZGF0YSBzdHJ1Y3R1cmUgc29tZXdoZXJlIGVhcmxpZXIgaW4gdGhlIHByb2dyYW1cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgbm9kZTsgbm9kZSA9IGNhY2hlZC5ub2Rlc1tpXTsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZiAobm9kZS5wYXJlbnROb2RlICE9IG51bGwgJiYgbm9kZXMuaW5kZXhPZihub2RlKSA8IDApIGNsZWFyKFtub2RlXSwgW2NhY2hlZFtpXV0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkYXRhLmxlbmd0aCA8IGNhY2hlZC5sZW5ndGgpIGNhY2hlZC5sZW5ndGggPSBkYXRhLmxlbmd0aDtcclxuXHRcdFx0XHRjYWNoZWQubm9kZXMgPSBub2Rlc1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChkYXRhICE9IG51bGwgJiYgZGF0YVR5cGUgPT09IE9CSkVDVCkge1xyXG5cdFx0XHRpZiAoIWRhdGEuYXR0cnMpIGRhdGEuYXR0cnMgPSB7fTtcclxuXHRcdFx0aWYgKCFjYWNoZWQuYXR0cnMpIGNhY2hlZC5hdHRycyA9IHt9O1xyXG5cclxuXHRcdFx0dmFyIGRhdGFBdHRyS2V5cyA9IE9iamVjdC5rZXlzKGRhdGEuYXR0cnMpXHJcblx0XHRcdHZhciBoYXNLZXlzID0gZGF0YUF0dHJLZXlzLmxlbmd0aCA+IChcImtleVwiIGluIGRhdGEuYXR0cnMgPyAxIDogMClcclxuXHRcdFx0Ly9pZiBhbiBlbGVtZW50IGlzIGRpZmZlcmVudCBlbm91Z2ggZnJvbSB0aGUgb25lIGluIGNhY2hlLCByZWNyZWF0ZSBpdFxyXG5cdFx0XHRpZiAoZGF0YS50YWcgIT0gY2FjaGVkLnRhZyB8fCBkYXRhQXR0cktleXMuam9pbigpICE9IE9iamVjdC5rZXlzKGNhY2hlZC5hdHRycykuam9pbigpIHx8IGRhdGEuYXR0cnMuaWQgIT0gY2FjaGVkLmF0dHJzLmlkIHx8IChtLnJlZHJhdy5zdHJhdGVneSgpID09IFwiYWxsXCIgJiYgY2FjaGVkLmNvbmZpZ0NvbnRleHQgJiYgY2FjaGVkLmNvbmZpZ0NvbnRleHQucmV0YWluICE9PSB0cnVlKSB8fCAobS5yZWRyYXcuc3RyYXRlZ3koKSA9PSBcImRpZmZcIiAmJiBjYWNoZWQuY29uZmlnQ29udGV4dCAmJiBjYWNoZWQuY29uZmlnQ29udGV4dC5yZXRhaW4gPT09IGZhbHNlKSkge1xyXG5cdFx0XHRcdGlmIChjYWNoZWQubm9kZXMubGVuZ3RoKSBjbGVhcihjYWNoZWQubm9kZXMpO1xyXG5cdFx0XHRcdGlmIChjYWNoZWQuY29uZmlnQ29udGV4dCAmJiB0eXBlb2YgY2FjaGVkLmNvbmZpZ0NvbnRleHQub251bmxvYWQgPT09IEZVTkNUSU9OKSBjYWNoZWQuY29uZmlnQ29udGV4dC5vbnVubG9hZCgpXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHR5cGUuY2FsbChkYXRhLnRhZykgIT0gU1RSSU5HKSByZXR1cm47XHJcblxyXG5cdFx0XHR2YXIgbm9kZSwgaXNOZXcgPSBjYWNoZWQubm9kZXMubGVuZ3RoID09PSAwO1xyXG5cdFx0XHRpZiAoZGF0YS5hdHRycy54bWxucykgbmFtZXNwYWNlID0gZGF0YS5hdHRycy54bWxucztcclxuXHRcdFx0ZWxzZSBpZiAoZGF0YS50YWcgPT09IFwic3ZnXCIpIG5hbWVzcGFjZSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuXHRcdFx0ZWxzZSBpZiAoZGF0YS50YWcgPT09IFwibWF0aFwiKSBuYW1lc3BhY2UgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIjtcclxuXHRcdFx0aWYgKGlzTmV3KSB7XHJcblx0XHRcdFx0aWYgKGRhdGEuYXR0cnMuaXMpIG5vZGUgPSBuYW1lc3BhY2UgPT09IHVuZGVmaW5lZCA/ICRkb2N1bWVudC5jcmVhdGVFbGVtZW50KGRhdGEudGFnLCBkYXRhLmF0dHJzLmlzKSA6ICRkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlLCBkYXRhLnRhZywgZGF0YS5hdHRycy5pcyk7XHJcblx0XHRcdFx0ZWxzZSBub2RlID0gbmFtZXNwYWNlID09PSB1bmRlZmluZWQgPyAkZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkYXRhLnRhZykgOiAkZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgZGF0YS50YWcpO1xyXG5cdFx0XHRcdGNhY2hlZCA9IHtcclxuXHRcdFx0XHRcdHRhZzogZGF0YS50YWcsXHJcblx0XHRcdFx0XHQvL3NldCBhdHRyaWJ1dGVzIGZpcnN0LCB0aGVuIGNyZWF0ZSBjaGlsZHJlblxyXG5cdFx0XHRcdFx0YXR0cnM6IGhhc0tleXMgPyBzZXRBdHRyaWJ1dGVzKG5vZGUsIGRhdGEudGFnLCBkYXRhLmF0dHJzLCB7fSwgbmFtZXNwYWNlKSA6IGRhdGEuYXR0cnMsXHJcblx0XHRcdFx0XHRjaGlsZHJlbjogZGF0YS5jaGlsZHJlbiAhPSBudWxsICYmIGRhdGEuY2hpbGRyZW4ubGVuZ3RoID4gMCA/XHJcblx0XHRcdFx0XHRcdGJ1aWxkKG5vZGUsIGRhdGEudGFnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgZGF0YS5jaGlsZHJlbiwgY2FjaGVkLmNoaWxkcmVuLCB0cnVlLCAwLCBkYXRhLmF0dHJzLmNvbnRlbnRlZGl0YWJsZSA/IG5vZGUgOiBlZGl0YWJsZSwgbmFtZXNwYWNlLCBjb25maWdzKSA6XHJcblx0XHRcdFx0XHRcdGRhdGEuY2hpbGRyZW4sXHJcblx0XHRcdFx0XHRub2RlczogW25vZGVdXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRpZiAoY2FjaGVkLmNoaWxkcmVuICYmICFjYWNoZWQuY2hpbGRyZW4ubm9kZXMpIGNhY2hlZC5jaGlsZHJlbi5ub2RlcyA9IFtdO1xyXG5cdFx0XHRcdC8vZWRnZSBjYXNlOiBzZXR0aW5nIHZhbHVlIG9uIDxzZWxlY3Q+IGRvZXNuJ3Qgd29yayBiZWZvcmUgY2hpbGRyZW4gZXhpc3QsIHNvIHNldCBpdCBhZ2FpbiBhZnRlciBjaGlsZHJlbiBoYXZlIGJlZW4gY3JlYXRlZFxyXG5cdFx0XHRcdGlmIChkYXRhLnRhZyA9PT0gXCJzZWxlY3RcIiAmJiBkYXRhLmF0dHJzLnZhbHVlKSBzZXRBdHRyaWJ1dGVzKG5vZGUsIGRhdGEudGFnLCB7dmFsdWU6IGRhdGEuYXR0cnMudmFsdWV9LCB7fSwgbmFtZXNwYWNlKTtcclxuXHRcdFx0XHRwYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShub2RlLCBwYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbaW5kZXhdIHx8IG51bGwpXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0bm9kZSA9IGNhY2hlZC5ub2Rlc1swXTtcclxuXHRcdFx0XHRpZiAoaGFzS2V5cykgc2V0QXR0cmlidXRlcyhub2RlLCBkYXRhLnRhZywgZGF0YS5hdHRycywgY2FjaGVkLmF0dHJzLCBuYW1lc3BhY2UpO1xyXG5cdFx0XHRcdGNhY2hlZC5jaGlsZHJlbiA9IGJ1aWxkKG5vZGUsIGRhdGEudGFnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgZGF0YS5jaGlsZHJlbiwgY2FjaGVkLmNoaWxkcmVuLCBmYWxzZSwgMCwgZGF0YS5hdHRycy5jb250ZW50ZWRpdGFibGUgPyBub2RlIDogZWRpdGFibGUsIG5hbWVzcGFjZSwgY29uZmlncyk7XHJcblx0XHRcdFx0Y2FjaGVkLm5vZGVzLmludGFjdCA9IHRydWU7XHJcblx0XHRcdFx0aWYgKHNob3VsZFJlYXR0YWNoID09PSB0cnVlICYmIG5vZGUgIT0gbnVsbCkgcGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUobm9kZSwgcGFyZW50RWxlbWVudC5jaGlsZE5vZGVzW2luZGV4XSB8fCBudWxsKVxyXG5cdFx0XHR9XHJcblx0XHRcdC8vc2NoZWR1bGUgY29uZmlncyB0byBiZSBjYWxsZWQuIFRoZXkgYXJlIGNhbGxlZCBhZnRlciBgYnVpbGRgIGZpbmlzaGVzIHJ1bm5pbmdcclxuXHRcdFx0aWYgKHR5cGVvZiBkYXRhLmF0dHJzW1wiY29uZmlnXCJdID09PSBGVU5DVElPTikge1xyXG5cdFx0XHRcdHZhciBjb250ZXh0ID0gY2FjaGVkLmNvbmZpZ0NvbnRleHQgPSBjYWNoZWQuY29uZmlnQ29udGV4dCB8fCB7cmV0YWluOiAobS5yZWRyYXcuc3RyYXRlZ3koKSA9PSBcImRpZmZcIikgfHwgdW5kZWZpbmVkfTtcclxuXHJcblx0XHRcdFx0Ly8gYmluZFxyXG5cdFx0XHRcdHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uKGRhdGEsIGFyZ3MpIHtcclxuXHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGRhdGEuYXR0cnNbXCJjb25maWdcIl0uYXBwbHkoZGF0YSwgYXJncylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGNvbmZpZ3MucHVzaChjYWxsYmFjayhkYXRhLCBbbm9kZSwgIWlzTmV3LCBjb250ZXh0LCBjYWNoZWRdKSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIGRhdGEgIT0gRlVOQ1RJT04pIHtcclxuXHRcdFx0Ly9oYW5kbGUgdGV4dCBub2Rlc1xyXG5cdFx0XHR2YXIgbm9kZXM7XHJcblx0XHRcdGlmIChjYWNoZWQubm9kZXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0aWYgKGRhdGEuJHRydXN0ZWQpIHtcclxuXHRcdFx0XHRcdG5vZGVzID0gaW5qZWN0SFRNTChwYXJlbnRFbGVtZW50LCBpbmRleCwgZGF0YSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRub2RlcyA9IFskZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSldO1xyXG5cdFx0XHRcdFx0aWYgKCFwYXJlbnRFbGVtZW50Lm5vZGVOYW1lLm1hdGNoKHZvaWRFbGVtZW50cykpIHBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5vZGVzWzBdLCBwYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbaW5kZXhdIHx8IG51bGwpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhY2hlZCA9IFwic3RyaW5nIG51bWJlciBib29sZWFuXCIuaW5kZXhPZih0eXBlb2YgZGF0YSkgPiAtMSA/IG5ldyBkYXRhLmNvbnN0cnVjdG9yKGRhdGEpIDogZGF0YTtcclxuXHRcdFx0XHRjYWNoZWQubm9kZXMgPSBub2Rlc1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGNhY2hlZC52YWx1ZU9mKCkgIT09IGRhdGEudmFsdWVPZigpIHx8IHNob3VsZFJlYXR0YWNoID09PSB0cnVlKSB7XHJcblx0XHRcdFx0bm9kZXMgPSBjYWNoZWQubm9kZXM7XHJcblx0XHRcdFx0aWYgKCFlZGl0YWJsZSB8fCBlZGl0YWJsZSAhPT0gJGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdGlmIChkYXRhLiR0cnVzdGVkKSB7XHJcblx0XHRcdFx0XHRcdGNsZWFyKG5vZGVzLCBjYWNoZWQpO1xyXG5cdFx0XHRcdFx0XHRub2RlcyA9IGluamVjdEhUTUwocGFyZW50RWxlbWVudCwgaW5kZXgsIGRhdGEpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly9jb3JuZXIgY2FzZTogcmVwbGFjaW5nIHRoZSBub2RlVmFsdWUgb2YgYSB0ZXh0IG5vZGUgdGhhdCBpcyBhIGNoaWxkIG9mIGEgdGV4dGFyZWEvY29udGVudGVkaXRhYmxlIGRvZXNuJ3Qgd29ya1xyXG5cdFx0XHRcdFx0XHQvL3dlIG5lZWQgdG8gdXBkYXRlIHRoZSB2YWx1ZSBwcm9wZXJ0eSBvZiB0aGUgcGFyZW50IHRleHRhcmVhIG9yIHRoZSBpbm5lckhUTUwgb2YgdGhlIGNvbnRlbnRlZGl0YWJsZSBlbGVtZW50IGluc3RlYWRcclxuXHRcdFx0XHRcdFx0aWYgKHBhcmVudFRhZyA9PT0gXCJ0ZXh0YXJlYVwiKSBwYXJlbnRFbGVtZW50LnZhbHVlID0gZGF0YTtcclxuXHRcdFx0XHRcdFx0ZWxzZSBpZiAoZWRpdGFibGUpIGVkaXRhYmxlLmlubmVySFRNTCA9IGRhdGE7XHJcblx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChub2Rlc1swXS5ub2RlVHlwZSA9PT0gMSB8fCBub2Rlcy5sZW5ndGggPiAxKSB7IC8vd2FzIGEgdHJ1c3RlZCBzdHJpbmdcclxuXHRcdFx0XHRcdFx0XHRcdGNsZWFyKGNhY2hlZC5ub2RlcywgY2FjaGVkKTtcclxuXHRcdFx0XHRcdFx0XHRcdG5vZGVzID0gWyRkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKV1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0cGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUobm9kZXNbMF0sIHBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1tpbmRleF0gfHwgbnVsbCk7XHJcblx0XHRcdFx0XHRcdFx0bm9kZXNbMF0ubm9kZVZhbHVlID0gZGF0YVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhY2hlZCA9IG5ldyBkYXRhLmNvbnN0cnVjdG9yKGRhdGEpO1xyXG5cdFx0XHRcdGNhY2hlZC5ub2RlcyA9IG5vZGVzXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBjYWNoZWQubm9kZXMuaW50YWN0ID0gdHJ1ZVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjYWNoZWRcclxuXHR9XHJcblx0ZnVuY3Rpb24gc29ydENoYW5nZXMoYSwgYikge3JldHVybiBhLmFjdGlvbiAtIGIuYWN0aW9uIHx8IGEuaW5kZXggLSBiLmluZGV4fVxyXG5cdGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMobm9kZSwgdGFnLCBkYXRhQXR0cnMsIGNhY2hlZEF0dHJzLCBuYW1lc3BhY2UpIHtcclxuXHRcdGZvciAodmFyIGF0dHJOYW1lIGluIGRhdGFBdHRycykge1xyXG5cdFx0XHR2YXIgZGF0YUF0dHIgPSBkYXRhQXR0cnNbYXR0ck5hbWVdO1xyXG5cdFx0XHR2YXIgY2FjaGVkQXR0ciA9IGNhY2hlZEF0dHJzW2F0dHJOYW1lXTtcclxuXHRcdFx0aWYgKCEoYXR0ck5hbWUgaW4gY2FjaGVkQXR0cnMpIHx8IChjYWNoZWRBdHRyICE9PSBkYXRhQXR0cikpIHtcclxuXHRcdFx0XHRjYWNoZWRBdHRyc1thdHRyTmFtZV0gPSBkYXRhQXR0cjtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0Ly9gY29uZmlnYCBpc24ndCBhIHJlYWwgYXR0cmlidXRlcywgc28gaWdub3JlIGl0XHJcblx0XHRcdFx0XHRpZiAoYXR0ck5hbWUgPT09IFwiY29uZmlnXCIgfHwgYXR0ck5hbWUgPT0gXCJrZXlcIikgY29udGludWU7XHJcblx0XHRcdFx0XHQvL2hvb2sgZXZlbnQgaGFuZGxlcnMgdG8gdGhlIGF1dG8tcmVkcmF3aW5nIHN5c3RlbVxyXG5cdFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRhdGFBdHRyID09PSBGVU5DVElPTiAmJiBhdHRyTmFtZS5pbmRleE9mKFwib25cIikgPT09IDApIHtcclxuXHRcdFx0XHRcdFx0bm9kZVthdHRyTmFtZV0gPSBhdXRvcmVkcmF3KGRhdGFBdHRyLCBub2RlKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly9oYW5kbGUgYHN0eWxlOiB7Li4ufWBcclxuXHRcdFx0XHRcdGVsc2UgaWYgKGF0dHJOYW1lID09PSBcInN0eWxlXCIgJiYgZGF0YUF0dHIgIT0gbnVsbCAmJiB0eXBlLmNhbGwoZGF0YUF0dHIpID09PSBPQkpFQ1QpIHtcclxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgcnVsZSBpbiBkYXRhQXR0cikge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChjYWNoZWRBdHRyID09IG51bGwgfHwgY2FjaGVkQXR0cltydWxlXSAhPT0gZGF0YUF0dHJbcnVsZV0pIG5vZGUuc3R5bGVbcnVsZV0gPSBkYXRhQXR0cltydWxlXVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGZvciAodmFyIHJ1bGUgaW4gY2FjaGVkQXR0cikge1xyXG5cdFx0XHRcdFx0XHRcdGlmICghKHJ1bGUgaW4gZGF0YUF0dHIpKSBub2RlLnN0eWxlW3J1bGVdID0gXCJcIlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvL2hhbmRsZSBTVkdcclxuXHRcdFx0XHRcdGVsc2UgaWYgKG5hbWVzcGFjZSAhPSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdGlmIChhdHRyTmFtZSA9PT0gXCJocmVmXCIpIG5vZGUuc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIFwiaHJlZlwiLCBkYXRhQXR0cik7XHJcblx0XHRcdFx0XHRcdGVsc2UgaWYgKGF0dHJOYW1lID09PSBcImNsYXNzTmFtZVwiKSBub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGRhdGFBdHRyKTtcclxuXHRcdFx0XHRcdFx0ZWxzZSBub2RlLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgZGF0YUF0dHIpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvL2hhbmRsZSBjYXNlcyB0aGF0IGFyZSBwcm9wZXJ0aWVzIChidXQgaWdub3JlIGNhc2VzIHdoZXJlIHdlIHNob3VsZCB1c2Ugc2V0QXR0cmlidXRlIGluc3RlYWQpXHJcblx0XHRcdFx0XHQvLy0gbGlzdCBhbmQgZm9ybSBhcmUgdHlwaWNhbGx5IHVzZWQgYXMgc3RyaW5ncywgYnV0IGFyZSBET00gZWxlbWVudCByZWZlcmVuY2VzIGluIGpzXHJcblx0XHRcdFx0XHQvLy0gd2hlbiB1c2luZyBDU1Mgc2VsZWN0b3JzIChlLmcuIGBtKFwiW3N0eWxlPScnXVwiKWApLCBzdHlsZSBpcyB1c2VkIGFzIGEgc3RyaW5nLCBidXQgaXQncyBhbiBvYmplY3QgaW4ganNcclxuXHRcdFx0XHRcdGVsc2UgaWYgKGF0dHJOYW1lIGluIG5vZGUgJiYgIShhdHRyTmFtZSA9PT0gXCJsaXN0XCIgfHwgYXR0ck5hbWUgPT09IFwic3R5bGVcIiB8fCBhdHRyTmFtZSA9PT0gXCJmb3JtXCIgfHwgYXR0ck5hbWUgPT09IFwidHlwZVwiIHx8IGF0dHJOYW1lID09PSBcIndpZHRoXCIgfHwgYXR0ck5hbWUgPT09IFwiaGVpZ2h0XCIpKSB7XHJcblx0XHRcdFx0XHRcdC8vIzM0OCBkb24ndCBzZXQgdGhlIHZhbHVlIGlmIG5vdCBuZWVkZWQgb3RoZXJ3aXNlIGN1cnNvciBwbGFjZW1lbnQgYnJlYWtzIGluIENocm9tZVxyXG5cdFx0XHRcdFx0XHRpZiAodGFnICE9PSBcImlucHV0XCIgfHwgbm9kZVthdHRyTmFtZV0gIT09IGRhdGFBdHRyKSBub2RlW2F0dHJOYW1lXSA9IGRhdGFBdHRyXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBkYXRhQXR0cilcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRcdC8vc3dhbGxvdyBJRSdzIGludmFsaWQgYXJndW1lbnQgZXJyb3JzIHRvIG1pbWljIEhUTUwncyBmYWxsYmFjay10by1kb2luZy1ub3RoaW5nLW9uLWludmFsaWQtYXR0cmlidXRlcyBiZWhhdmlvclxyXG5cdFx0XHRcdFx0aWYgKGUubWVzc2FnZS5pbmRleE9mKFwiSW52YWxpZCBhcmd1bWVudFwiKSA8IDApIHRocm93IGVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8jMzQ4IGRhdGFBdHRyIG1heSBub3QgYmUgYSBzdHJpbmcsIHNvIHVzZSBsb29zZSBjb21wYXJpc29uIChkb3VibGUgZXF1YWwpIGluc3RlYWQgb2Ygc3RyaWN0ICh0cmlwbGUgZXF1YWwpXHJcblx0XHRcdGVsc2UgaWYgKGF0dHJOYW1lID09PSBcInZhbHVlXCIgJiYgdGFnID09PSBcImlucHV0XCIgJiYgbm9kZS52YWx1ZSAhPSBkYXRhQXR0cikge1xyXG5cdFx0XHRcdG5vZGUudmFsdWUgPSBkYXRhQXR0clxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gY2FjaGVkQXR0cnNcclxuXHR9XHJcblx0ZnVuY3Rpb24gY2xlYXIobm9kZXMsIGNhY2hlZCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IG5vZGVzLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XHJcblx0XHRcdGlmIChub2Rlc1tpXSAmJiBub2Rlc1tpXS5wYXJlbnROb2RlKSB7XHJcblx0XHRcdFx0dHJ5IHtub2Rlc1tpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGVzW2ldKX1cclxuXHRcdFx0XHRjYXRjaCAoZSkge30gLy9pZ25vcmUgaWYgdGhpcyBmYWlscyBkdWUgdG8gb3JkZXIgb2YgZXZlbnRzIChzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMTkyNjA4My9mYWlsZWQtdG8tZXhlY3V0ZS1yZW1vdmVjaGlsZC1vbi1ub2RlKVxyXG5cdFx0XHRcdGNhY2hlZCA9IFtdLmNvbmNhdChjYWNoZWQpO1xyXG5cdFx0XHRcdGlmIChjYWNoZWRbaV0pIHVubG9hZChjYWNoZWRbaV0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChub2Rlcy5sZW5ndGggIT0gMCkgbm9kZXMubGVuZ3RoID0gMFxyXG5cdH1cclxuXHRmdW5jdGlvbiB1bmxvYWQoY2FjaGVkKSB7XHJcblx0XHRpZiAoY2FjaGVkLmNvbmZpZ0NvbnRleHQgJiYgdHlwZW9mIGNhY2hlZC5jb25maWdDb250ZXh0Lm9udW5sb2FkID09PSBGVU5DVElPTikge1xyXG5cdFx0XHRjYWNoZWQuY29uZmlnQ29udGV4dC5vbnVubG9hZCgpO1xyXG5cdFx0XHRjYWNoZWQuY29uZmlnQ29udGV4dC5vbnVubG9hZCA9IG51bGxcclxuXHRcdH1cclxuXHRcdGlmIChjYWNoZWQuY2hpbGRyZW4pIHtcclxuXHRcdFx0aWYgKHR5cGUuY2FsbChjYWNoZWQuY2hpbGRyZW4pID09PSBBUlJBWSkge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCBjaGlsZDsgY2hpbGQgPSBjYWNoZWQuY2hpbGRyZW5baV07IGkrKykgdW5sb2FkKGNoaWxkKVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGNhY2hlZC5jaGlsZHJlbi50YWcpIHVubG9hZChjYWNoZWQuY2hpbGRyZW4pXHJcblx0XHR9XHJcblx0fVxyXG5cdGZ1bmN0aW9uIGluamVjdEhUTUwocGFyZW50RWxlbWVudCwgaW5kZXgsIGRhdGEpIHtcclxuXHRcdHZhciBuZXh0U2libGluZyA9IHBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1tpbmRleF07XHJcblx0XHRpZiAobmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0dmFyIGlzRWxlbWVudCA9IG5leHRTaWJsaW5nLm5vZGVUeXBlICE9IDE7XHJcblx0XHRcdHZhciBwbGFjZWhvbGRlciA9ICRkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuXHRcdFx0aWYgKGlzRWxlbWVudCkge1xyXG5cdFx0XHRcdHBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHBsYWNlaG9sZGVyLCBuZXh0U2libGluZyB8fCBudWxsKTtcclxuXHRcdFx0XHRwbGFjZWhvbGRlci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmViZWdpblwiLCBkYXRhKTtcclxuXHRcdFx0XHRwYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHBsYWNlaG9sZGVyKVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgbmV4dFNpYmxpbmcuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlYmVnaW5cIiwgZGF0YSlcclxuXHRcdH1cclxuXHRcdGVsc2UgcGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgZGF0YSk7XHJcblx0XHR2YXIgbm9kZXMgPSBbXTtcclxuXHRcdHdoaWxlIChwYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbaW5kZXhdICE9PSBuZXh0U2libGluZykge1xyXG5cdFx0XHRub2Rlcy5wdXNoKHBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0XHRpbmRleCsrXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbm9kZXNcclxuXHR9XHJcblx0ZnVuY3Rpb24gYXV0b3JlZHJhdyhjYWxsYmFjaywgb2JqZWN0KSB7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRlID0gZSB8fCBldmVudDtcclxuXHRcdFx0bS5yZWRyYXcuc3RyYXRlZ3koXCJkaWZmXCIpO1xyXG5cdFx0XHRtLnN0YXJ0Q29tcHV0YXRpb24oKTtcclxuXHRcdFx0dHJ5IHtyZXR1cm4gY2FsbGJhY2suY2FsbChvYmplY3QsIGUpfVxyXG5cdFx0XHRmaW5hbGx5IHtcclxuXHRcdFx0XHRlbmRGaXJzdENvbXB1dGF0aW9uKClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIGh0bWw7XHJcblx0dmFyIGRvY3VtZW50Tm9kZSA9IHtcclxuXHRcdGFwcGVuZENoaWxkOiBmdW5jdGlvbihub2RlKSB7XHJcblx0XHRcdGlmIChodG1sID09PSB1bmRlZmluZWQpIGh0bWwgPSAkZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImh0bWxcIik7XHJcblx0XHRcdGlmICgkZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmICRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgIT09IG5vZGUpIHtcclxuXHRcdFx0XHQkZG9jdW1lbnQucmVwbGFjZUNoaWxkKG5vZGUsICRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSAkZG9jdW1lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XHJcblx0XHRcdHRoaXMuY2hpbGROb2RlcyA9ICRkb2N1bWVudC5jaGlsZE5vZGVzXHJcblx0XHR9LFxyXG5cdFx0aW5zZXJ0QmVmb3JlOiBmdW5jdGlvbihub2RlKSB7XHJcblx0XHRcdHRoaXMuYXBwZW5kQ2hpbGQobm9kZSlcclxuXHRcdH0sXHJcblx0XHRjaGlsZE5vZGVzOiBbXVxyXG5cdH07XHJcblx0dmFyIG5vZGVDYWNoZSA9IFtdLCBjZWxsQ2FjaGUgPSB7fTtcclxuXHRtLnJlbmRlciA9IGZ1bmN0aW9uKHJvb3QsIGNlbGwsIGZvcmNlUmVjcmVhdGlvbikge1xyXG5cdFx0dmFyIGNvbmZpZ3MgPSBbXTtcclxuXHRcdGlmICghcm9vdCkgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGVuc3VyZSB0aGUgRE9NIGVsZW1lbnQgZXhpc3RzIGJlZm9yZSByZW5kZXJpbmcgYSB0ZW1wbGF0ZSBpbnRvIGl0LlwiKTtcclxuXHRcdHZhciBpZCA9IGdldENlbGxDYWNoZUtleShyb290KTtcclxuXHRcdHZhciBpc0RvY3VtZW50Um9vdCA9IHJvb3QgPT09ICRkb2N1bWVudDtcclxuXHRcdHZhciBub2RlID0gaXNEb2N1bWVudFJvb3QgfHwgcm9vdCA9PT0gJGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IGRvY3VtZW50Tm9kZSA6IHJvb3Q7XHJcblx0XHRpZiAoaXNEb2N1bWVudFJvb3QgJiYgY2VsbC50YWcgIT0gXCJodG1sXCIpIGNlbGwgPSB7dGFnOiBcImh0bWxcIiwgYXR0cnM6IHt9LCBjaGlsZHJlbjogY2VsbH07XHJcblx0XHRpZiAoY2VsbENhY2hlW2lkXSA9PT0gdW5kZWZpbmVkKSBjbGVhcihub2RlLmNoaWxkTm9kZXMpO1xyXG5cdFx0aWYgKGZvcmNlUmVjcmVhdGlvbiA9PT0gdHJ1ZSkgcmVzZXQocm9vdCk7XHJcblx0XHRjZWxsQ2FjaGVbaWRdID0gYnVpbGQobm9kZSwgbnVsbCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNlbGwsIGNlbGxDYWNoZVtpZF0sIGZhbHNlLCAwLCBudWxsLCB1bmRlZmluZWQsIGNvbmZpZ3MpO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvbmZpZ3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIGNvbmZpZ3NbaV0oKVxyXG5cdH07XHJcblx0ZnVuY3Rpb24gZ2V0Q2VsbENhY2hlS2V5KGVsZW1lbnQpIHtcclxuXHRcdHZhciBpbmRleCA9IG5vZGVDYWNoZS5pbmRleE9mKGVsZW1lbnQpO1xyXG5cdFx0cmV0dXJuIGluZGV4IDwgMCA/IG5vZGVDYWNoZS5wdXNoKGVsZW1lbnQpIC0gMSA6IGluZGV4XHJcblx0fVxyXG5cclxuXHRtLnRydXN0ID0gZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHZhbHVlID0gbmV3IFN0cmluZyh2YWx1ZSk7XHJcblx0XHR2YWx1ZS4kdHJ1c3RlZCA9IHRydWU7XHJcblx0XHRyZXR1cm4gdmFsdWVcclxuXHR9O1xyXG5cclxuXHRmdW5jdGlvbiBnZXR0ZXJzZXR0ZXIoc3RvcmUpIHtcclxuXHRcdHZhciBwcm9wID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSBzdG9yZSA9IGFyZ3VtZW50c1swXTtcclxuXHRcdFx0cmV0dXJuIHN0b3JlXHJcblx0XHR9O1xyXG5cclxuXHRcdHByb3AudG9KU09OID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiBzdG9yZVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gcHJvcFxyXG5cdH1cclxuXHJcblx0bS5wcm9wID0gZnVuY3Rpb24gKHN0b3JlKSB7XHJcblx0XHQvL25vdGU6IHVzaW5nIG5vbi1zdHJpY3QgZXF1YWxpdHkgY2hlY2sgaGVyZSBiZWNhdXNlIHdlJ3JlIGNoZWNraW5nIGlmIHN0b3JlIGlzIG51bGwgT1IgdW5kZWZpbmVkXHJcblx0XHRpZiAoKChzdG9yZSAhPSBudWxsICYmIHR5cGUuY2FsbChzdG9yZSkgPT09IE9CSkVDVCkgfHwgdHlwZW9mIHN0b3JlID09PSBGVU5DVElPTikgJiYgdHlwZW9mIHN0b3JlLnRoZW4gPT09IEZVTkNUSU9OKSB7XHJcblx0XHRcdHJldHVybiBwcm9waWZ5KHN0b3JlKVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBnZXR0ZXJzZXR0ZXIoc3RvcmUpXHJcblx0fTtcclxuXHJcblx0dmFyIHJvb3RzID0gW10sIG1vZHVsZXMgPSBbXSwgY29udHJvbGxlcnMgPSBbXSwgbGFzdFJlZHJhd0lkID0gbnVsbCwgbGFzdFJlZHJhd0NhbGxUaW1lID0gMCwgY29tcHV0ZVBvc3RSZWRyYXdIb29rID0gbnVsbCwgcHJldmVudGVkID0gZmFsc2UsIHRvcE1vZHVsZTtcclxuXHR2YXIgRlJBTUVfQlVER0VUID0gMTY7IC8vNjAgZnJhbWVzIHBlciBzZWNvbmQgPSAxIGNhbGwgcGVyIDE2IG1zXHJcblx0bS5tb2R1bGUgPSBmdW5jdGlvbihyb290LCBtb2R1bGUpIHtcclxuXHRcdGlmICghcm9vdCkgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGVuc3VyZSB0aGUgRE9NIGVsZW1lbnQgZXhpc3RzIGJlZm9yZSByZW5kZXJpbmcgYSB0ZW1wbGF0ZSBpbnRvIGl0LlwiKTtcclxuXHRcdHZhciBpbmRleCA9IHJvb3RzLmluZGV4T2Yocm9vdCk7XHJcblx0XHRpZiAoaW5kZXggPCAwKSBpbmRleCA9IHJvb3RzLmxlbmd0aDtcclxuXHRcdHZhciBpc1ByZXZlbnRlZCA9IGZhbHNlO1xyXG5cdFx0aWYgKGNvbnRyb2xsZXJzW2luZGV4XSAmJiB0eXBlb2YgY29udHJvbGxlcnNbaW5kZXhdLm9udW5sb2FkID09PSBGVU5DVElPTikge1xyXG5cdFx0XHR2YXIgZXZlbnQgPSB7XHJcblx0XHRcdFx0cHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uKCkge2lzUHJldmVudGVkID0gdHJ1ZX1cclxuXHRcdFx0fTtcclxuXHRcdFx0Y29udHJvbGxlcnNbaW5kZXhdLm9udW5sb2FkKGV2ZW50KVxyXG5cdFx0fVxyXG5cdFx0aWYgKCFpc1ByZXZlbnRlZCkge1xyXG5cdFx0XHRtLnJlZHJhdy5zdHJhdGVneShcImFsbFwiKTtcclxuXHRcdFx0bS5zdGFydENvbXB1dGF0aW9uKCk7XHJcblx0XHRcdHJvb3RzW2luZGV4XSA9IHJvb3Q7XHJcblx0XHRcdHZhciBjdXJyZW50TW9kdWxlID0gdG9wTW9kdWxlID0gbW9kdWxlID0gbW9kdWxlIHx8IHt9O1xyXG5cdFx0XHR2YXIgY29udHJvbGxlciA9IG5ldyAobW9kdWxlLmNvbnRyb2xsZXIgfHwgZnVuY3Rpb24oKSB7fSk7XHJcblx0XHRcdC8vY29udHJvbGxlcnMgbWF5IGNhbGwgbS5tb2R1bGUgcmVjdXJzaXZlbHkgKHZpYSBtLnJvdXRlIHJlZGlyZWN0cywgZm9yIGV4YW1wbGUpXHJcblx0XHRcdC8vdGhpcyBjb25kaXRpb25hbCBlbnN1cmVzIG9ubHkgdGhlIGxhc3QgcmVjdXJzaXZlIG0ubW9kdWxlIGNhbGwgaXMgYXBwbGllZFxyXG5cdFx0XHRpZiAoY3VycmVudE1vZHVsZSA9PT0gdG9wTW9kdWxlKSB7XHJcblx0XHRcdFx0Y29udHJvbGxlcnNbaW5kZXhdID0gY29udHJvbGxlcjtcclxuXHRcdFx0XHRtb2R1bGVzW2luZGV4XSA9IG1vZHVsZVxyXG5cdFx0XHR9XHJcblx0XHRcdGVuZEZpcnN0Q29tcHV0YXRpb24oKTtcclxuXHRcdFx0cmV0dXJuIGNvbnRyb2xsZXJzW2luZGV4XVxyXG5cdFx0fVxyXG5cdH07XHJcblx0bS5yZWRyYXcgPSBmdW5jdGlvbihmb3JjZSkge1xyXG5cdFx0Ly9sYXN0UmVkcmF3SWQgaXMgYSBwb3NpdGl2ZSBudW1iZXIgaWYgYSBzZWNvbmQgcmVkcmF3IGlzIHJlcXVlc3RlZCBiZWZvcmUgdGhlIG5leHQgYW5pbWF0aW9uIGZyYW1lXHJcblx0XHQvL2xhc3RSZWRyYXdJRCBpcyBudWxsIGlmIGl0J3MgdGhlIGZpcnN0IHJlZHJhdyBhbmQgbm90IGFuIGV2ZW50IGhhbmRsZXJcclxuXHRcdGlmIChsYXN0UmVkcmF3SWQgJiYgZm9yY2UgIT09IHRydWUpIHtcclxuXHRcdFx0Ly93aGVuIHNldFRpbWVvdXQ6IG9ubHkgcmVzY2hlZHVsZSByZWRyYXcgaWYgdGltZSBiZXR3ZWVuIG5vdyBhbmQgcHJldmlvdXMgcmVkcmF3IGlzIGJpZ2dlciB0aGFuIGEgZnJhbWUsIG90aGVyd2lzZSBrZWVwIGN1cnJlbnRseSBzY2hlZHVsZWQgdGltZW91dFxyXG5cdFx0XHQvL3doZW4gckFGOiBhbHdheXMgcmVzY2hlZHVsZSByZWRyYXdcclxuXHRcdFx0aWYgKG5ldyBEYXRlIC0gbGFzdFJlZHJhd0NhbGxUaW1lID4gRlJBTUVfQlVER0VUIHx8ICRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcclxuXHRcdFx0XHRpZiAobGFzdFJlZHJhd0lkID4gMCkgJGNhbmNlbEFuaW1hdGlvbkZyYW1lKGxhc3RSZWRyYXdJZCk7XHJcblx0XHRcdFx0bGFzdFJlZHJhd0lkID0gJHJlcXVlc3RBbmltYXRpb25GcmFtZShyZWRyYXcsIEZSQU1FX0JVREdFVClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHJlZHJhdygpO1xyXG5cdFx0XHRsYXN0UmVkcmF3SWQgPSAkcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge2xhc3RSZWRyYXdJZCA9IG51bGx9LCBGUkFNRV9CVURHRVQpXHJcblx0XHR9XHJcblx0fTtcclxuXHRtLnJlZHJhdy5zdHJhdGVneSA9IG0ucHJvcCgpO1xyXG5cdHZhciBibGFuayA9IGZ1bmN0aW9uKCkge3JldHVybiBcIlwifVxyXG5cdGZ1bmN0aW9uIHJlZHJhdygpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwLCByb290OyByb290ID0gcm9vdHNbaV07IGkrKykge1xyXG5cdFx0XHRpZiAoY29udHJvbGxlcnNbaV0pIHtcclxuXHRcdFx0XHRtLnJlbmRlcihyb290LCBtb2R1bGVzW2ldLnZpZXcgPyBtb2R1bGVzW2ldLnZpZXcoY29udHJvbGxlcnNbaV0pIDogYmxhbmsoKSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly9hZnRlciByZW5kZXJpbmcgd2l0aGluIGEgcm91dGVkIGNvbnRleHQsIHdlIG5lZWQgdG8gc2Nyb2xsIGJhY2sgdG8gdGhlIHRvcCwgYW5kIGZldGNoIHRoZSBkb2N1bWVudCB0aXRsZSBmb3IgaGlzdG9yeS5wdXNoU3RhdGVcclxuXHRcdGlmIChjb21wdXRlUG9zdFJlZHJhd0hvb2spIHtcclxuXHRcdFx0Y29tcHV0ZVBvc3RSZWRyYXdIb29rKCk7XHJcblx0XHRcdGNvbXB1dGVQb3N0UmVkcmF3SG9vayA9IG51bGxcclxuXHRcdH1cclxuXHRcdGxhc3RSZWRyYXdJZCA9IG51bGw7XHJcblx0XHRsYXN0UmVkcmF3Q2FsbFRpbWUgPSBuZXcgRGF0ZTtcclxuXHRcdG0ucmVkcmF3LnN0cmF0ZWd5KFwiZGlmZlwiKVxyXG5cdH1cclxuXHJcblx0dmFyIHBlbmRpbmdSZXF1ZXN0cyA9IDA7XHJcblx0bS5zdGFydENvbXB1dGF0aW9uID0gZnVuY3Rpb24oKSB7cGVuZGluZ1JlcXVlc3RzKyt9O1xyXG5cdG0uZW5kQ29tcHV0YXRpb24gPSBmdW5jdGlvbigpIHtcclxuXHRcdHBlbmRpbmdSZXF1ZXN0cyA9IE1hdGgubWF4KHBlbmRpbmdSZXF1ZXN0cyAtIDEsIDApO1xyXG5cdFx0aWYgKHBlbmRpbmdSZXF1ZXN0cyA9PT0gMCkgbS5yZWRyYXcoKVxyXG5cdH07XHJcblx0dmFyIGVuZEZpcnN0Q29tcHV0YXRpb24gPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChtLnJlZHJhdy5zdHJhdGVneSgpID09IFwibm9uZVwiKSB7XHJcblx0XHRcdHBlbmRpbmdSZXF1ZXN0cy0tXHJcblx0XHRcdG0ucmVkcmF3LnN0cmF0ZWd5KFwiZGlmZlwiKVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBtLmVuZENvbXB1dGF0aW9uKCk7XHJcblx0fVxyXG5cclxuXHRtLndpdGhBdHRyID0gZnVuY3Rpb24ocHJvcCwgd2l0aEF0dHJDYWxsYmFjaykge1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ZSA9IGUgfHwgZXZlbnQ7XHJcblx0XHRcdHZhciBjdXJyZW50VGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0IHx8IHRoaXM7XHJcblx0XHRcdHdpdGhBdHRyQ2FsbGJhY2socHJvcCBpbiBjdXJyZW50VGFyZ2V0ID8gY3VycmVudFRhcmdldFtwcm9wXSA6IGN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKHByb3ApKVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vcm91dGluZ1xyXG5cdHZhciBtb2RlcyA9IHtwYXRobmFtZTogXCJcIiwgaGFzaDogXCIjXCIsIHNlYXJjaDogXCI/XCJ9O1xyXG5cdHZhciByZWRpcmVjdCA9IGZ1bmN0aW9uKCkge30sIHJvdXRlUGFyYW1zLCBjdXJyZW50Um91dGU7XHJcblx0bS5yb3V0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly9tLnJvdXRlKClcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gY3VycmVudFJvdXRlO1xyXG5cdFx0Ly9tLnJvdXRlKGVsLCBkZWZhdWx0Um91dGUsIHJvdXRlcylcclxuXHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMgJiYgdHlwZS5jYWxsKGFyZ3VtZW50c1sxXSkgPT09IFNUUklORykge1xyXG5cdFx0XHR2YXIgcm9vdCA9IGFyZ3VtZW50c1swXSwgZGVmYXVsdFJvdXRlID0gYXJndW1lbnRzWzFdLCByb3V0ZXIgPSBhcmd1bWVudHNbMl07XHJcblx0XHRcdHJlZGlyZWN0ID0gZnVuY3Rpb24oc291cmNlKSB7XHJcblx0XHRcdFx0dmFyIHBhdGggPSBjdXJyZW50Um91dGUgPSBub3JtYWxpemVSb3V0ZShzb3VyY2UpO1xyXG5cdFx0XHRcdGlmICghcm91dGVCeVZhbHVlKHJvb3QsIHJvdXRlciwgcGF0aCkpIHtcclxuXHRcdFx0XHRcdG0ucm91dGUoZGVmYXVsdFJvdXRlLCB0cnVlKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdFx0dmFyIGxpc3RlbmVyID0gbS5yb3V0ZS5tb2RlID09PSBcImhhc2hcIiA/IFwib25oYXNoY2hhbmdlXCIgOiBcIm9ucG9wc3RhdGVcIjtcclxuXHRcdFx0d2luZG93W2xpc3RlbmVyXSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBwYXRoID0gJGxvY2F0aW9uW20ucm91dGUubW9kZV1cclxuXHRcdFx0XHRpZiAobS5yb3V0ZS5tb2RlID09PSBcInBhdGhuYW1lXCIpIHBhdGggKz0gJGxvY2F0aW9uLnNlYXJjaFxyXG5cdFx0XHRcdGlmIChjdXJyZW50Um91dGUgIT0gbm9ybWFsaXplUm91dGUocGF0aCkpIHtcclxuXHRcdFx0XHRcdHJlZGlyZWN0KHBhdGgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0XHRjb21wdXRlUG9zdFJlZHJhd0hvb2sgPSBzZXRTY3JvbGw7XHJcblx0XHRcdHdpbmRvd1tsaXN0ZW5lcl0oKVxyXG5cdFx0fVxyXG5cdFx0Ly9jb25maWc6IG0ucm91dGVcclxuXHRcdGVsc2UgaWYgKGFyZ3VtZW50c1swXS5hZGRFdmVudExpc3RlbmVyIHx8IGFyZ3VtZW50c1swXS5hdHRhY2hFdmVudCkge1xyXG5cdFx0XHR2YXIgZWxlbWVudCA9IGFyZ3VtZW50c1swXTtcclxuXHRcdFx0dmFyIGlzSW5pdGlhbGl6ZWQgPSBhcmd1bWVudHNbMV07XHJcblx0XHRcdHZhciBjb250ZXh0ID0gYXJndW1lbnRzWzJdO1xyXG5cdFx0XHRlbGVtZW50LmhyZWYgPSAobS5yb3V0ZS5tb2RlICE9PSAncGF0aG5hbWUnID8gJGxvY2F0aW9uLnBhdGhuYW1lIDogJycpICsgbW9kZXNbbS5yb3V0ZS5tb2RlXSArIHRoaXMuYXR0cnMuaHJlZjtcclxuXHRcdFx0aWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG5cdFx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvdXRlVW5vYnRydXNpdmUpO1xyXG5cdFx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvdXRlVW5vYnRydXNpdmUpXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0ZWxlbWVudC5kZXRhY2hFdmVudChcIm9uY2xpY2tcIiwgcm91dGVVbm9idHJ1c2l2ZSk7XHJcblx0XHRcdFx0ZWxlbWVudC5hdHRhY2hFdmVudChcIm9uY2xpY2tcIiwgcm91dGVVbm9idHJ1c2l2ZSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly9tLnJvdXRlKHJvdXRlLCBwYXJhbXMpXHJcblx0XHRlbHNlIGlmICh0eXBlLmNhbGwoYXJndW1lbnRzWzBdKSA9PT0gU1RSSU5HKSB7XHJcblx0XHRcdHZhciBvbGRSb3V0ZSA9IGN1cnJlbnRSb3V0ZTtcclxuXHRcdFx0Y3VycmVudFJvdXRlID0gYXJndW1lbnRzWzBdO1xyXG5cdFx0XHR2YXIgYXJncyA9IGFyZ3VtZW50c1sxXSB8fCB7fVxyXG5cdFx0XHR2YXIgcXVlcnlJbmRleCA9IGN1cnJlbnRSb3V0ZS5pbmRleE9mKFwiP1wiKVxyXG5cdFx0XHR2YXIgcGFyYW1zID0gcXVlcnlJbmRleCA+IC0xID8gcGFyc2VRdWVyeVN0cmluZyhjdXJyZW50Um91dGUuc2xpY2UocXVlcnlJbmRleCArIDEpKSA6IHt9XHJcblx0XHRcdGZvciAodmFyIGkgaW4gYXJncykgcGFyYW1zW2ldID0gYXJnc1tpXVxyXG5cdFx0XHR2YXIgcXVlcnlzdHJpbmcgPSBidWlsZFF1ZXJ5U3RyaW5nKHBhcmFtcylcclxuXHRcdFx0dmFyIGN1cnJlbnRQYXRoID0gcXVlcnlJbmRleCA+IC0xID8gY3VycmVudFJvdXRlLnNsaWNlKDAsIHF1ZXJ5SW5kZXgpIDogY3VycmVudFJvdXRlXHJcblx0XHRcdGlmIChxdWVyeXN0cmluZykgY3VycmVudFJvdXRlID0gY3VycmVudFBhdGggKyAoY3VycmVudFBhdGguaW5kZXhPZihcIj9cIikgPT09IC0xID8gXCI/XCIgOiBcIiZcIikgKyBxdWVyeXN0cmluZztcclxuXHJcblx0XHRcdHZhciBzaG91bGRSZXBsYWNlSGlzdG9yeUVudHJ5ID0gKGFyZ3VtZW50cy5sZW5ndGggPT09IDMgPyBhcmd1bWVudHNbMl0gOiBhcmd1bWVudHNbMV0pID09PSB0cnVlIHx8IG9sZFJvdXRlID09PSBhcmd1bWVudHNbMF07XHJcblxyXG5cdFx0XHRpZiAod2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKSB7XHJcblx0XHRcdFx0Y29tcHV0ZVBvc3RSZWRyYXdIb29rID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR3aW5kb3cuaGlzdG9yeVtzaG91bGRSZXBsYWNlSGlzdG9yeUVudHJ5ID8gXCJyZXBsYWNlU3RhdGVcIiA6IFwicHVzaFN0YXRlXCJdKG51bGwsICRkb2N1bWVudC50aXRsZSwgbW9kZXNbbS5yb3V0ZS5tb2RlXSArIGN1cnJlbnRSb3V0ZSk7XHJcblx0XHRcdFx0XHRzZXRTY3JvbGwoKVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0cmVkaXJlY3QobW9kZXNbbS5yb3V0ZS5tb2RlXSArIGN1cnJlbnRSb3V0ZSlcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHQkbG9jYXRpb25bbS5yb3V0ZS5tb2RlXSA9IGN1cnJlbnRSb3V0ZVxyXG5cdFx0XHRcdHJlZGlyZWN0KG1vZGVzW20ucm91dGUubW9kZV0gKyBjdXJyZW50Um91dGUpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdG0ucm91dGUucGFyYW0gPSBmdW5jdGlvbihrZXkpIHtcclxuXHRcdGlmICghcm91dGVQYXJhbXMpIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IGNhbGwgbS5yb3V0ZShlbGVtZW50LCBkZWZhdWx0Um91dGUsIHJvdXRlcykgYmVmb3JlIGNhbGxpbmcgbS5yb3V0ZS5wYXJhbSgpXCIpXHJcblx0XHRyZXR1cm4gcm91dGVQYXJhbXNba2V5XVxyXG5cdH07XHJcblx0bS5yb3V0ZS5tb2RlID0gXCJzZWFyY2hcIjtcclxuXHRmdW5jdGlvbiBub3JtYWxpemVSb3V0ZShyb3V0ZSkge1xyXG5cdFx0cmV0dXJuIHJvdXRlLnNsaWNlKG1vZGVzW20ucm91dGUubW9kZV0ubGVuZ3RoKVxyXG5cdH1cclxuXHRmdW5jdGlvbiByb3V0ZUJ5VmFsdWUocm9vdCwgcm91dGVyLCBwYXRoKSB7XHJcblx0XHRyb3V0ZVBhcmFtcyA9IHt9O1xyXG5cclxuXHRcdHZhciBxdWVyeVN0YXJ0ID0gcGF0aC5pbmRleE9mKFwiP1wiKTtcclxuXHRcdGlmIChxdWVyeVN0YXJ0ICE9PSAtMSkge1xyXG5cdFx0XHRyb3V0ZVBhcmFtcyA9IHBhcnNlUXVlcnlTdHJpbmcocGF0aC5zdWJzdHIocXVlcnlTdGFydCArIDEsIHBhdGgubGVuZ3RoKSk7XHJcblx0XHRcdHBhdGggPSBwYXRoLnN1YnN0cigwLCBxdWVyeVN0YXJ0KVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEdldCBhbGwgcm91dGVzIGFuZCBjaGVjayBpZiB0aGVyZSdzXHJcblx0XHQvLyBhbiBleGFjdCBtYXRjaCBmb3IgdGhlIGN1cnJlbnQgcGF0aFxyXG5cdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhyb3V0ZXIpO1xyXG5cdFx0dmFyIGluZGV4ID0ga2V5cy5pbmRleE9mKHBhdGgpO1xyXG5cdFx0aWYoaW5kZXggIT09IC0xKXtcclxuXHRcdFx0bS5tb2R1bGUocm9vdCwgcm91dGVyW2tleXMgW2luZGV4XV0pO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKHZhciByb3V0ZSBpbiByb3V0ZXIpIHtcclxuXHRcdFx0aWYgKHJvdXRlID09PSBwYXRoKSB7XHJcblx0XHRcdFx0bS5tb2R1bGUocm9vdCwgcm91dGVyW3JvdXRlXSk7XHJcblx0XHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKFwiXlwiICsgcm91dGUucmVwbGFjZSgvOlteXFwvXSs/XFwuezN9L2csIFwiKC4qPylcIikucmVwbGFjZSgvOlteXFwvXSsvZywgXCIoW15cXFxcL10rKVwiKSArIFwiXFwvPyRcIik7XHJcblxyXG5cdFx0XHRpZiAobWF0Y2hlci50ZXN0KHBhdGgpKSB7XHJcblx0XHRcdFx0cGF0aC5yZXBsYWNlKG1hdGNoZXIsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dmFyIGtleXMgPSByb3V0ZS5tYXRjaCgvOlteXFwvXSsvZykgfHwgW107XHJcblx0XHRcdFx0XHR2YXIgdmFsdWVzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEsIC0yKTtcclxuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSBrZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSByb3V0ZVBhcmFtc1trZXlzW2ldLnJlcGxhY2UoLzp8XFwuL2csIFwiXCIpXSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZXNbaV0pXHJcblx0XHRcdFx0XHRtLm1vZHVsZShyb290LCByb3V0ZXJbcm91dGVdKVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gcm91dGVVbm9idHJ1c2l2ZShlKSB7XHJcblx0XHRlID0gZSB8fCBldmVudDtcclxuXHRcdGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5IHx8IGUud2hpY2ggPT09IDIpIHJldHVybjtcclxuXHRcdGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlbHNlIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcclxuXHRcdHZhciBjdXJyZW50VGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcclxuXHRcdHZhciBhcmdzID0gbS5yb3V0ZS5tb2RlID09PSBcInBhdGhuYW1lXCIgJiYgY3VycmVudFRhcmdldC5zZWFyY2ggPyBwYXJzZVF1ZXJ5U3RyaW5nKGN1cnJlbnRUYXJnZXQuc2VhcmNoLnNsaWNlKDEpKSA6IHt9O1xyXG5cdFx0d2hpbGUgKGN1cnJlbnRUYXJnZXQgJiYgY3VycmVudFRhcmdldC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpICE9IFwiQVwiKSBjdXJyZW50VGFyZ2V0ID0gY3VycmVudFRhcmdldC5wYXJlbnROb2RlXHJcblx0XHRtLnJvdXRlKGN1cnJlbnRUYXJnZXRbbS5yb3V0ZS5tb2RlXS5zbGljZShtb2Rlc1ttLnJvdXRlLm1vZGVdLmxlbmd0aCksIGFyZ3MpXHJcblx0fVxyXG5cdGZ1bmN0aW9uIHNldFNjcm9sbCgpIHtcclxuXHRcdGlmIChtLnJvdXRlLm1vZGUgIT0gXCJoYXNoXCIgJiYgJGxvY2F0aW9uLmhhc2gpICRsb2NhdGlvbi5oYXNoID0gJGxvY2F0aW9uLmhhc2g7XHJcblx0XHRlbHNlIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxyXG5cdH1cclxuXHRmdW5jdGlvbiBidWlsZFF1ZXJ5U3RyaW5nKG9iamVjdCwgcHJlZml4KSB7XHJcblx0XHR2YXIgZHVwbGljYXRlcyA9IHt9XHJcblx0XHR2YXIgc3RyID0gW11cclxuXHRcdGZvciAodmFyIHByb3AgaW4gb2JqZWN0KSB7XHJcblx0XHRcdHZhciBrZXkgPSBwcmVmaXggPyBwcmVmaXggKyBcIltcIiArIHByb3AgKyBcIl1cIiA6IHByb3BcclxuXHRcdFx0dmFyIHZhbHVlID0gb2JqZWN0W3Byb3BdXHJcblx0XHRcdHZhciB2YWx1ZVR5cGUgPSB0eXBlLmNhbGwodmFsdWUpXHJcblx0XHRcdHZhciBwYWlyID0gKHZhbHVlID09PSBudWxsKSA/IGVuY29kZVVSSUNvbXBvbmVudChrZXkpIDpcclxuXHRcdFx0XHR2YWx1ZVR5cGUgPT09IE9CSkVDVCA/IGJ1aWxkUXVlcnlTdHJpbmcodmFsdWUsIGtleSkgOlxyXG5cdFx0XHRcdHZhbHVlVHlwZSA9PT0gQVJSQVkgPyB2YWx1ZS5yZWR1Y2UoZnVuY3Rpb24obWVtbywgaXRlbSkge1xyXG5cdFx0XHRcdFx0aWYgKCFkdXBsaWNhdGVzW2tleV0pIGR1cGxpY2F0ZXNba2V5XSA9IHt9XHJcblx0XHRcdFx0XHRpZiAoIWR1cGxpY2F0ZXNba2V5XVtpdGVtXSkge1xyXG5cdFx0XHRcdFx0XHRkdXBsaWNhdGVzW2tleV1baXRlbV0gPSB0cnVlXHJcblx0XHRcdFx0XHRcdHJldHVybiBtZW1vLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGl0ZW0pKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIG1lbW9cclxuXHRcdFx0XHR9LCBbXSkuam9pbihcIiZcIikgOlxyXG5cdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpXHJcblx0XHRcdGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSBzdHIucHVzaChwYWlyKVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN0ci5qb2luKFwiJlwiKVxyXG5cdH1cclxuXHRmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nKHN0cikge1xyXG5cdFx0dmFyIHBhaXJzID0gc3RyLnNwbGl0KFwiJlwiKSwgcGFyYW1zID0ge307XHJcblx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gcGFpcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0dmFyIHBhaXIgPSBwYWlyc1tpXS5zcGxpdChcIj1cIik7XHJcblx0XHRcdHZhciBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQocGFpclswXSlcclxuXHRcdFx0dmFyIHZhbHVlID0gcGFpci5sZW5ndGggPT0gMiA/IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdKSA6IG51bGxcclxuXHRcdFx0aWYgKHBhcmFtc1trZXldICE9IG51bGwpIHtcclxuXHRcdFx0XHRpZiAodHlwZS5jYWxsKHBhcmFtc1trZXldKSAhPT0gQVJSQVkpIHBhcmFtc1trZXldID0gW3BhcmFtc1trZXldXVxyXG5cdFx0XHRcdHBhcmFtc1trZXldLnB1c2godmFsdWUpXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBwYXJhbXNba2V5XSA9IHZhbHVlXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcGFyYW1zXHJcblx0fVxyXG5cdG0ucm91dGUuYnVpbGRRdWVyeVN0cmluZyA9IGJ1aWxkUXVlcnlTdHJpbmdcclxuXHRtLnJvdXRlLnBhcnNlUXVlcnlTdHJpbmcgPSBwYXJzZVF1ZXJ5U3RyaW5nXHJcblx0XHJcblx0ZnVuY3Rpb24gcmVzZXQocm9vdCkge1xyXG5cdFx0dmFyIGNhY2hlS2V5ID0gZ2V0Q2VsbENhY2hlS2V5KHJvb3QpO1xyXG5cdFx0Y2xlYXIocm9vdC5jaGlsZE5vZGVzLCBjZWxsQ2FjaGVbY2FjaGVLZXldKTtcclxuXHRcdGNlbGxDYWNoZVtjYWNoZUtleV0gPSB1bmRlZmluZWRcclxuXHR9XHJcblxyXG5cdG0uZGVmZXJyZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgZGVmZXJyZWQgPSBuZXcgRGVmZXJyZWQoKTtcclxuXHRcdGRlZmVycmVkLnByb21pc2UgPSBwcm9waWZ5KGRlZmVycmVkLnByb21pc2UpO1xyXG5cdFx0cmV0dXJuIGRlZmVycmVkXHJcblx0fTtcclxuXHRmdW5jdGlvbiBwcm9waWZ5KHByb21pc2UsIGluaXRpYWxWYWx1ZSkge1xyXG5cdFx0dmFyIHByb3AgPSBtLnByb3AoaW5pdGlhbFZhbHVlKTtcclxuXHRcdHByb21pc2UudGhlbihwcm9wKTtcclxuXHRcdHByb3AudGhlbiA9IGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cdFx0XHRyZXR1cm4gcHJvcGlmeShwcm9taXNlLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KSwgaW5pdGlhbFZhbHVlKVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBwcm9wXHJcblx0fVxyXG5cdC8vUHJvbWl6Lm1pdGhyaWwuanMgfCBab2xtZWlzdGVyIHwgTUlUXHJcblx0Ly9hIG1vZGlmaWVkIHZlcnNpb24gb2YgUHJvbWl6LmpzLCB3aGljaCBkb2VzIG5vdCBjb25mb3JtIHRvIFByb21pc2VzL0ErIGZvciB0d28gcmVhc29uczpcclxuXHQvLzEpIGB0aGVuYCBjYWxsYmFja3MgYXJlIGNhbGxlZCBzeW5jaHJvbm91c2x5IChiZWNhdXNlIHNldFRpbWVvdXQgaXMgdG9vIHNsb3csIGFuZCB0aGUgc2V0SW1tZWRpYXRlIHBvbHlmaWxsIGlzIHRvbyBiaWdcclxuXHQvLzIpIHRocm93aW5nIHN1YmNsYXNzZXMgb2YgRXJyb3IgY2F1c2UgdGhlIGVycm9yIHRvIGJlIGJ1YmJsZWQgdXAgaW5zdGVhZCBvZiB0cmlnZ2VyaW5nIHJlamVjdGlvbiAoYmVjYXVzZSB0aGUgc3BlYyBkb2VzIG5vdCBhY2NvdW50IGZvciB0aGUgaW1wb3J0YW50IHVzZSBjYXNlIG9mIGRlZmF1bHQgYnJvd3NlciBlcnJvciBoYW5kbGluZywgaS5lLiBtZXNzYWdlIHcvIGxpbmUgbnVtYmVyKVxyXG5cdGZ1bmN0aW9uIERlZmVycmVkKHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKSB7XHJcblx0XHR2YXIgUkVTT0xWSU5HID0gMSwgUkVKRUNUSU5HID0gMiwgUkVTT0xWRUQgPSAzLCBSRUpFQ1RFRCA9IDQ7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXMsIHN0YXRlID0gMCwgcHJvbWlzZVZhbHVlID0gMCwgbmV4dCA9IFtdO1xyXG5cclxuXHRcdHNlbGZbXCJwcm9taXNlXCJdID0ge307XHJcblxyXG5cdFx0c2VsZltcInJlc29sdmVcIl0gPSBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0XHRpZiAoIXN0YXRlKSB7XHJcblx0XHRcdFx0cHJvbWlzZVZhbHVlID0gdmFsdWU7XHJcblx0XHRcdFx0c3RhdGUgPSBSRVNPTFZJTkc7XHJcblxyXG5cdFx0XHRcdGZpcmUoKVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzXHJcblx0XHR9O1xyXG5cclxuXHRcdHNlbGZbXCJyZWplY3RcIl0gPSBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0XHRpZiAoIXN0YXRlKSB7XHJcblx0XHRcdFx0cHJvbWlzZVZhbHVlID0gdmFsdWU7XHJcblx0XHRcdFx0c3RhdGUgPSBSRUpFQ1RJTkc7XHJcblxyXG5cdFx0XHRcdGZpcmUoKVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzXHJcblx0XHR9O1xyXG5cclxuXHRcdHNlbGYucHJvbWlzZVtcInRoZW5cIl0gPSBmdW5jdGlvbihzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjaykge1xyXG5cdFx0XHR2YXIgZGVmZXJyZWQgPSBuZXcgRGVmZXJyZWQoc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spO1xyXG5cdFx0XHRpZiAoc3RhdGUgPT09IFJFU09MVkVEKSB7XHJcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShwcm9taXNlVmFsdWUpXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoc3RhdGUgPT09IFJFSkVDVEVEKSB7XHJcblx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KHByb21pc2VWYWx1ZSlcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRuZXh0LnB1c2goZGVmZXJyZWQpXHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGRlZmVycmVkLnByb21pc2VcclxuXHRcdH07XHJcblxyXG5cdFx0ZnVuY3Rpb24gZmluaXNoKHR5cGUpIHtcclxuXHRcdFx0c3RhdGUgPSB0eXBlIHx8IFJFSkVDVEVEO1xyXG5cdFx0XHRuZXh0Lm1hcChmdW5jdGlvbihkZWZlcnJlZCkge1xyXG5cdFx0XHRcdHN0YXRlID09PSBSRVNPTFZFRCAmJiBkZWZlcnJlZC5yZXNvbHZlKHByb21pc2VWYWx1ZSkgfHwgZGVmZXJyZWQucmVqZWN0KHByb21pc2VWYWx1ZSlcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiB0aGVubmFibGUodGhlbiwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2ssIG5vdFRoZW5uYWJsZUNhbGxiYWNrKSB7XHJcblx0XHRcdGlmICgoKHByb21pc2VWYWx1ZSAhPSBudWxsICYmIHR5cGUuY2FsbChwcm9taXNlVmFsdWUpID09PSBPQkpFQ1QpIHx8IHR5cGVvZiBwcm9taXNlVmFsdWUgPT09IEZVTkNUSU9OKSAmJiB0eXBlb2YgdGhlbiA9PT0gRlVOQ1RJT04pIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0Ly8gY291bnQgcHJvdGVjdHMgYWdhaW5zdCBhYnVzZSBjYWxscyBmcm9tIHNwZWMgY2hlY2tlclxyXG5cdFx0XHRcdFx0dmFyIGNvdW50ID0gMDtcclxuXHRcdFx0XHRcdHRoZW4uY2FsbChwcm9taXNlVmFsdWUsIGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRcdFx0XHRcdGlmIChjb3VudCsrKSByZXR1cm47XHJcblx0XHRcdFx0XHRcdHByb21pc2VWYWx1ZSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0XHRzdWNjZXNzQ2FsbGJhY2soKVxyXG5cdFx0XHRcdFx0fSwgZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0XHRcdFx0XHRcdGlmIChjb3VudCsrKSByZXR1cm47XHJcblx0XHRcdFx0XHRcdHByb21pc2VWYWx1ZSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0XHRmYWlsdXJlQ2FsbGJhY2soKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRcdG0uZGVmZXJyZWQub25lcnJvcihlKTtcclxuXHRcdFx0XHRcdHByb21pc2VWYWx1ZSA9IGU7XHJcblx0XHRcdFx0XHRmYWlsdXJlQ2FsbGJhY2soKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRub3RUaGVubmFibGVDYWxsYmFjaygpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBmaXJlKCkge1xyXG5cdFx0XHQvLyBjaGVjayBpZiBpdCdzIGEgdGhlbmFibGVcclxuXHRcdFx0dmFyIHRoZW47XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0dGhlbiA9IHByb21pc2VWYWx1ZSAmJiBwcm9taXNlVmFsdWUudGhlblxyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdFx0bS5kZWZlcnJlZC5vbmVycm9yKGUpO1xyXG5cdFx0XHRcdHByb21pc2VWYWx1ZSA9IGU7XHJcblx0XHRcdFx0c3RhdGUgPSBSRUpFQ1RJTkc7XHJcblx0XHRcdFx0cmV0dXJuIGZpcmUoKVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoZW5uYWJsZSh0aGVuLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRzdGF0ZSA9IFJFU09MVklORztcclxuXHRcdFx0XHRmaXJlKClcclxuXHRcdFx0fSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0c3RhdGUgPSBSRUpFQ1RJTkc7XHJcblx0XHRcdFx0ZmlyZSgpXHJcblx0XHRcdH0sIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRpZiAoc3RhdGUgPT09IFJFU09MVklORyAmJiB0eXBlb2Ygc3VjY2Vzc0NhbGxiYWNrID09PSBGVU5DVElPTikge1xyXG5cdFx0XHRcdFx0XHRwcm9taXNlVmFsdWUgPSBzdWNjZXNzQ2FsbGJhY2socHJvbWlzZVZhbHVlKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSBpZiAoc3RhdGUgPT09IFJFSkVDVElORyAmJiB0eXBlb2YgZmFpbHVyZUNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRcdFx0cHJvbWlzZVZhbHVlID0gZmFpbHVyZUNhbGxiYWNrKHByb21pc2VWYWx1ZSk7XHJcblx0XHRcdFx0XHRcdHN0YXRlID0gUkVTT0xWSU5HXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHRtLmRlZmVycmVkLm9uZXJyb3IoZSk7XHJcblx0XHRcdFx0XHRwcm9taXNlVmFsdWUgPSBlO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZpbmlzaCgpXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAocHJvbWlzZVZhbHVlID09PSBzZWxmKSB7XHJcblx0XHRcdFx0XHRwcm9taXNlVmFsdWUgPSBUeXBlRXJyb3IoKTtcclxuXHRcdFx0XHRcdGZpbmlzaCgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhlbm5hYmxlKHRoZW4sIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0ZmluaXNoKFJFU09MVkVEKVxyXG5cdFx0XHRcdFx0fSwgZmluaXNoLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdGZpbmlzaChzdGF0ZSA9PT0gUkVTT0xWSU5HICYmIFJFU09MVkVEKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fVxyXG5cdG0uZGVmZXJyZWQub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmICh0eXBlLmNhbGwoZSkgPT09IFwiW29iamVjdCBFcnJvcl1cIiAmJiAhZS5jb25zdHJ1Y3Rvci50b1N0cmluZygpLm1hdGNoKC8gRXJyb3IvKSkgdGhyb3cgZVxyXG5cdH07XHJcblxyXG5cdG0uc3luYyA9IGZ1bmN0aW9uKGFyZ3MpIHtcclxuXHRcdHZhciBtZXRob2QgPSBcInJlc29sdmVcIjtcclxuXHRcdGZ1bmN0aW9uIHN5bmNocm9uaXplcihwb3MsIHJlc29sdmVkKSB7XHJcblx0XHRcdHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0XHRcdHJlc3VsdHNbcG9zXSA9IHZhbHVlO1xyXG5cdFx0XHRcdGlmICghcmVzb2x2ZWQpIG1ldGhvZCA9IFwicmVqZWN0XCI7XHJcblx0XHRcdFx0aWYgKC0tb3V0c3RhbmRpbmcgPT09IDApIHtcclxuXHRcdFx0XHRcdGRlZmVycmVkLnByb21pc2UocmVzdWx0cyk7XHJcblx0XHRcdFx0XHRkZWZlcnJlZFttZXRob2RdKHJlc3VsdHMpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB2YWx1ZVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGRlZmVycmVkID0gbS5kZWZlcnJlZCgpO1xyXG5cdFx0dmFyIG91dHN0YW5kaW5nID0gYXJncy5sZW5ndGg7XHJcblx0XHR2YXIgcmVzdWx0cyA9IG5ldyBBcnJheShvdXRzdGFuZGluZyk7XHJcblx0XHRpZiAoYXJncy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGFyZ3NbaV0udGhlbihzeW5jaHJvbml6ZXIoaSwgdHJ1ZSksIHN5bmNocm9uaXplcihpLCBmYWxzZSkpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2UgZGVmZXJyZWQucmVzb2x2ZShbXSk7XHJcblxyXG5cdFx0cmV0dXJuIGRlZmVycmVkLnByb21pc2VcclxuXHR9O1xyXG5cdGZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7cmV0dXJuIHZhbHVlfVxyXG5cclxuXHRmdW5jdGlvbiBhamF4KG9wdGlvbnMpIHtcclxuXHRcdGlmIChvcHRpb25zLmRhdGFUeXBlICYmIG9wdGlvbnMuZGF0YVR5cGUudG9Mb3dlckNhc2UoKSA9PT0gXCJqc29ucFwiKSB7XHJcblx0XHRcdHZhciBjYWxsYmFja0tleSA9IFwibWl0aHJpbF9jYWxsYmFja19cIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgXCJfXCIgKyAoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMWUxNikpLnRvU3RyaW5nKDM2KTtcclxuXHRcdFx0dmFyIHNjcmlwdCA9ICRkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG5cclxuXHRcdFx0d2luZG93W2NhbGxiYWNrS2V5XSA9IGZ1bmN0aW9uKHJlc3ApIHtcclxuXHRcdFx0XHRzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xyXG5cdFx0XHRcdG9wdGlvbnMub25sb2FkKHtcclxuXHRcdFx0XHRcdHR5cGU6IFwibG9hZFwiLFxyXG5cdFx0XHRcdFx0dGFyZ2V0OiB7XHJcblx0XHRcdFx0XHRcdHJlc3BvbnNlVGV4dDogcmVzcFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHdpbmRvd1tjYWxsYmFja0tleV0gPSB1bmRlZmluZWRcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XHJcblxyXG5cdFx0XHRcdG9wdGlvbnMub25lcnJvcih7XHJcblx0XHRcdFx0XHR0eXBlOiBcImVycm9yXCIsXHJcblx0XHRcdFx0XHR0YXJnZXQ6IHtcclxuXHRcdFx0XHRcdFx0c3RhdHVzOiA1MDAsXHJcblx0XHRcdFx0XHRcdHJlc3BvbnNlVGV4dDogSlNPTi5zdHJpbmdpZnkoe2Vycm9yOiBcIkVycm9yIG1ha2luZyBqc29ucCByZXF1ZXN0XCJ9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHdpbmRvd1tjYWxsYmFja0tleV0gPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0c2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHNjcmlwdC5zcmMgPSBvcHRpb25zLnVybFxyXG5cdFx0XHRcdCsgKG9wdGlvbnMudXJsLmluZGV4T2YoXCI/XCIpID4gMCA/IFwiJlwiIDogXCI/XCIpXHJcblx0XHRcdFx0KyAob3B0aW9ucy5jYWxsYmFja0tleSA/IG9wdGlvbnMuY2FsbGJhY2tLZXkgOiBcImNhbGxiYWNrXCIpXHJcblx0XHRcdFx0KyBcIj1cIiArIGNhbGxiYWNrS2V5XHJcblx0XHRcdFx0KyBcIiZcIiArIGJ1aWxkUXVlcnlTdHJpbmcob3B0aW9ucy5kYXRhIHx8IHt9KTtcclxuXHRcdFx0JGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHZhciB4aHIgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0O1xyXG5cdFx0XHR4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy51cmwsIHRydWUsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XHJcblx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuXHRcdFx0XHRcdGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSBvcHRpb25zLm9ubG9hZCh7dHlwZTogXCJsb2FkXCIsIHRhcmdldDogeGhyfSk7XHJcblx0XHRcdFx0XHRlbHNlIG9wdGlvbnMub25lcnJvcih7dHlwZTogXCJlcnJvclwiLCB0YXJnZXQ6IHhocn0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0XHRpZiAob3B0aW9ucy5zZXJpYWxpemUgPT09IEpTT04uc3RyaW5naWZ5ICYmIG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLm1ldGhvZCAhPT0gXCJHRVRcIikge1xyXG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiKVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChvcHRpb25zLmRlc2VyaWFsaXplID09PSBKU09OLnBhcnNlKSB7XHJcblx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIiwgXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0LypcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHR5cGVvZiBvcHRpb25zLmNvbmZpZyA9PT0gRlVOQ1RJT04pIHtcclxuXHRcdFx0XHR2YXIgbWF5YmVYaHIgPSBvcHRpb25zLmNvbmZpZyh4aHIsIG9wdGlvbnMpO1xyXG5cdFx0XHRcdGlmIChtYXliZVhociAhPSBudWxsKSB4aHIgPSBtYXliZVhoclxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgZGF0YSA9IG9wdGlvbnMubWV0aG9kID09PSBcIkdFVFwiIHx8ICFvcHRpb25zLmRhdGEgPyBcIlwiIDogb3B0aW9ucy5kYXRhXHJcblx0XHRcdGlmIChkYXRhICYmICh0eXBlLmNhbGwoZGF0YSkgIT0gU1RSSU5HICYmIGRhdGEuY29uc3RydWN0b3IgIT0gd2luZG93LkZvcm1EYXRhKSkge1xyXG5cdFx0XHRcdHRocm93IFwiUmVxdWVzdCBkYXRhIHNob3VsZCBiZSBlaXRoZXIgYmUgYSBzdHJpbmcgb3IgRm9ybURhdGEuIENoZWNrIHRoZSBgc2VyaWFsaXplYCBvcHRpb24gaW4gYG0ucmVxdWVzdGBcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHR4aHIuc2VuZChkYXRhKTtcclxuXHRcdFx0cmV0dXJuIHhoclxyXG5cdFx0fVxyXG5cdH1cclxuXHRmdW5jdGlvbiBiaW5kRGF0YSh4aHJPcHRpb25zLCBkYXRhLCBzZXJpYWxpemUpIHtcclxuXHRcdGlmICh4aHJPcHRpb25zLm1ldGhvZCA9PT0gXCJHRVRcIiAmJiB4aHJPcHRpb25zLmRhdGFUeXBlICE9IFwianNvbnBcIikge1xyXG5cdFx0XHR2YXIgcHJlZml4ID0geGhyT3B0aW9ucy51cmwuaW5kZXhPZihcIj9cIikgPCAwID8gXCI/XCIgOiBcIiZcIjtcclxuXHRcdFx0dmFyIHF1ZXJ5c3RyaW5nID0gYnVpbGRRdWVyeVN0cmluZyhkYXRhKTtcclxuXHRcdFx0eGhyT3B0aW9ucy51cmwgPSB4aHJPcHRpb25zLnVybCArIChxdWVyeXN0cmluZyA/IHByZWZpeCArIHF1ZXJ5c3RyaW5nIDogXCJcIilcclxuXHRcdH1cclxuXHRcdGVsc2UgeGhyT3B0aW9ucy5kYXRhID0gc2VyaWFsaXplKGRhdGEpO1xyXG5cdFx0cmV0dXJuIHhock9wdGlvbnNcclxuXHR9XHJcblx0ZnVuY3Rpb24gcGFyYW1ldGVyaXplVXJsKHVybCwgZGF0YSkge1xyXG5cdFx0dmFyIHRva2VucyA9IHVybC5tYXRjaCgvOlthLXpdXFx3Ky9naSk7XHJcblx0XHRpZiAodG9rZW5zICYmIGRhdGEpIHtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR2YXIga2V5ID0gdG9rZW5zW2ldLnNsaWNlKDEpO1xyXG5cdFx0XHRcdHVybCA9IHVybC5yZXBsYWNlKHRva2Vuc1tpXSwgZGF0YVtrZXldKTtcclxuXHRcdFx0XHRkZWxldGUgZGF0YVtrZXldXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB1cmxcclxuXHR9XHJcblxyXG5cdG0ucmVxdWVzdCA9IGZ1bmN0aW9uKHhock9wdGlvbnMpIHtcclxuXHRcdGlmICh4aHJPcHRpb25zLmJhY2tncm91bmQgIT09IHRydWUpIG0uc3RhcnRDb21wdXRhdGlvbigpO1xyXG5cdFx0dmFyIGRlZmVycmVkID0gbmV3IERlZmVycmVkKCk7XHJcblx0XHR2YXIgaXNKU09OUCA9IHhock9wdGlvbnMuZGF0YVR5cGUgJiYgeGhyT3B0aW9ucy5kYXRhVHlwZS50b0xvd2VyQ2FzZSgpID09PSBcImpzb25wXCI7XHJcblx0XHR2YXIgc2VyaWFsaXplID0geGhyT3B0aW9ucy5zZXJpYWxpemUgPSBpc0pTT05QID8gaWRlbnRpdHkgOiB4aHJPcHRpb25zLnNlcmlhbGl6ZSB8fCBKU09OLnN0cmluZ2lmeTtcclxuXHRcdHZhciBkZXNlcmlhbGl6ZSA9IHhock9wdGlvbnMuZGVzZXJpYWxpemUgPSBpc0pTT05QID8gaWRlbnRpdHkgOiB4aHJPcHRpb25zLmRlc2VyaWFsaXplIHx8IEpTT04ucGFyc2U7XHJcblx0XHR2YXIgZXh0cmFjdCA9IHhock9wdGlvbnMuZXh0cmFjdCB8fCBmdW5jdGlvbih4aHIpIHtcclxuXHRcdFx0cmV0dXJuIHhoci5yZXNwb25zZVRleHQubGVuZ3RoID09PSAwICYmIGRlc2VyaWFsaXplID09PSBKU09OLnBhcnNlID8gbnVsbCA6IHhoci5yZXNwb25zZVRleHRcclxuXHRcdH07XHJcblx0XHR4aHJPcHRpb25zLnVybCA9IHBhcmFtZXRlcml6ZVVybCh4aHJPcHRpb25zLnVybCwgeGhyT3B0aW9ucy5kYXRhKTtcclxuXHRcdHhock9wdGlvbnMgPSBiaW5kRGF0YSh4aHJPcHRpb25zLCB4aHJPcHRpb25zLmRhdGEsIHNlcmlhbGl6ZSk7XHJcblx0XHR4aHJPcHRpb25zLm9ubG9hZCA9IHhock9wdGlvbnMub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRlID0gZSB8fCBldmVudDtcclxuXHRcdFx0XHR2YXIgdW53cmFwID0gKGUudHlwZSA9PT0gXCJsb2FkXCIgPyB4aHJPcHRpb25zLnVud3JhcFN1Y2Nlc3MgOiB4aHJPcHRpb25zLnVud3JhcEVycm9yKSB8fCBpZGVudGl0eTtcclxuXHRcdFx0XHR2YXIgcmVzcG9uc2UgPSB1bndyYXAoZGVzZXJpYWxpemUoZXh0cmFjdChlLnRhcmdldCwgeGhyT3B0aW9ucykpLCBlLnRhcmdldCk7XHJcblx0XHRcdFx0aWYgKGUudHlwZSA9PT0gXCJsb2FkXCIpIHtcclxuXHRcdFx0XHRcdGlmICh0eXBlLmNhbGwocmVzcG9uc2UpID09PSBBUlJBWSAmJiB4aHJPcHRpb25zLnR5cGUpIHtcclxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZXNwb25zZS5sZW5ndGg7IGkrKykgcmVzcG9uc2VbaV0gPSBuZXcgeGhyT3B0aW9ucy50eXBlKHJlc3BvbnNlW2ldKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSBpZiAoeGhyT3B0aW9ucy50eXBlKSByZXNwb25zZSA9IG5ldyB4aHJPcHRpb25zLnR5cGUocmVzcG9uc2UpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGRlZmVycmVkW2UudHlwZSA9PT0gXCJsb2FkXCIgPyBcInJlc29sdmVcIiA6IFwicmVqZWN0XCJdKHJlc3BvbnNlKVxyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdFx0bS5kZWZlcnJlZC5vbmVycm9yKGUpO1xyXG5cdFx0XHRcdGRlZmVycmVkLnJlamVjdChlKVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh4aHJPcHRpb25zLmJhY2tncm91bmQgIT09IHRydWUpIG0uZW5kQ29tcHV0YXRpb24oKVxyXG5cdFx0fTtcclxuXHRcdGFqYXgoeGhyT3B0aW9ucyk7XHJcblx0XHRkZWZlcnJlZC5wcm9taXNlID0gcHJvcGlmeShkZWZlcnJlZC5wcm9taXNlLCB4aHJPcHRpb25zLmluaXRpYWxWYWx1ZSk7XHJcblx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZVxyXG5cdH07XHJcblxyXG5cdC8vdGVzdGluZyBBUElcclxuXHRtLmRlcHMgPSBmdW5jdGlvbihtb2NrKSB7XHJcblx0XHRpbml0aWFsaXplKHdpbmRvdyA9IG1vY2sgfHwgd2luZG93KTtcclxuXHRcdHJldHVybiB3aW5kb3c7XHJcblx0fTtcclxuXHQvL2ZvciBpbnRlcm5hbCB0ZXN0aW5nIG9ubHksIGRvIG5vdCB1c2UgYG0uZGVwcy5mYWN0b3J5YFxyXG5cdG0uZGVwcy5mYWN0b3J5ID0gYXBwO1xyXG5cclxuXHRyZXR1cm4gbVxyXG59KSh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSk7XHJcblxyXG5pZiAodHlwZW9mIG1vZHVsZSAhPSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZSAhPT0gbnVsbCAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBtO1xyXG5lbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkgZGVmaW5lKGZ1bmN0aW9uKCkge3JldHVybiBtfSk7XHJcbiJdfQ==
