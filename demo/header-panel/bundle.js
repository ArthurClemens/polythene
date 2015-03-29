(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

    var style = require('../polythene/style.js');
    style('header-panel', require('./header-panel.jss'));

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

    initScroll = function(element, isInitialized, context) {
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

    container = opts.container || function(inner, opts, controller) {
        return m('div', {class: 'header-panel'}, inner);
    };

    inner = opts.inner || function(opts, controller) {
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
            )
        }
    }
};

},{"../polythene/style.js":7,"./header-panel.jss":1,"mithril":16}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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
    var style = require('../polythene/style.js');
    style('icon-button', require('./icon-button.jss'));
    require("../icon/icon.js");

    var container,
    	inner,
    	controller;

    opts = opts || {};

    container = opts.container || function(inner, opts, controller) {
    	var clickHandler = opts.clickHandler || null;
        return m('div', {class: 'icon-button', onclick: clickHandler}, inner);
    };

    inner = opts.inner || function(opts, controller) {
    	var iconClass = opts.iconClass || '';
    	return m('div', {class: 'icon'}, 
    		m('i[fit]', {class: ['md', iconClass].join(' ')})
    	);
    };

    controller = opts.controller || function() {};

	return {
        controller: controller,
        view: function(controller) {
        	return container(
                inner(opts, controller),
                opts,
                controller
            )
        }
    }
};
},{"../icon/icon.js":6,"../polythene/style.js":7,"./icon-button.jss":3,"mithril":16}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
module.exports = (function() {
    'use strict';

    var style = require('../polythene/style.js');
    style('icon', require('./icon.jss'));
}());
},{"../polythene/style.js":7,"./icon.jss":5}],7:[function(require,module,exports){
var cache = {};

module.exports = function (key, rules) {
    'use strict';

    var jss = require("jss");

    if (!key) return;
    if (!cache[key]) {
        var sheet = jss.createStyleSheet(rules, {named: false});
        sheet.attach();
        cache[key] = true;
    }
};
},{"jss":11}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

    var style = require('../polythene/style.js');
    style('toolbar', require('./toolbar.jss'));

    var container,
        inner,
        controller,
    	bar;

    opts = opts || {};
	opts.mode = opts.mode || 'standard';

    bar = opts.bar || function(body, className) {
        return body === null ? null : m('div[center][horizontal][layout]', {class: ['toolbar-tools', className].join(' ')}, body);
    };

    container = opts.container || function(inner, opts, controller) {
        return m('div', {class: ['toolbar', opts.mode].join(' ')}, inner);
    };

    inner = opts.inner || function(opts, controller) {
        var body = opts.body || null;
        var topBar = !body && opts.topBar || null;
        var middleBar = !body && opts.middleBar || null;
        var bottomBar = !body && opts.bottomBar || null;

        return [
            bar(body, 'topBar'),
            bar(topBar, 'topBar'),
            bar(middleBar, 'middleBar'),
            bar(bottomBar, 'bottomBar')
        ]
    };

    controller = opts.controller || function() {};

	return {
        controller: controller,
        view: function(controller) {
            return container(
                inner(opts, controller),
                opts,
                controller
            )
        }
    }
};

},{"../polythene/style.js":7,"./toolbar.jss":8,"mithril":16}],10:[function(require,module,exports){
var m = require("mithril");
var headerPanel = require("../../components/header-panel/header-panel.js");
var toolbar = require("../../components/toolbar/toolbar.js");
var iconButton = require("../../components/icon-button/icon-button.js");
var icon = require("../../components/icon/icon.js");

(function() {
    var template = [
        '<div class="content">',
        [
            "Harun Omar and Master Hafiz",
            "keep your dead beautiful ladies",
            "Mine is a little lovelier",
            "than any of your ladies were.",
            "",
            "In her perfectest array",
            "my lady, moving in the day,",
            "is a little stranger thing",
            "than crisp Sheba with her king",
            "in the morning wandering.",
            ].join("<br />"),
        '</div>'].join("");

    function createToolbar (label) {
        return new toolbar({
            mode: "tall",
            bottomBar: [
                new iconButton({
                    iconClass: "md-menu",
                    clickHandler: function(e) {
                        console.log("menu clicked", e.target);
                    }
                }).view(),
                m("span[flex]", label),
                new iconButton({
                    iconClass: "md-refresh",
                    clickHandler: function(e) {
                        console.log("refresh clicked", e.target);
                    }
                }).view(),
                new iconButton({
                    iconClass: "md-add",
                    clickHandler: function(e) {
                        console.log("add clicked", e.target);
                    }
                }).view()
            ]
        });
    };

    function createContainer(className) {
        var div = document.createElement("div");
        div.className = className;
        document.body.appendChild(div);
        return div;
    };

    m.module(createContainer("flex-container"), headerPanel({
        mode: "standard",
        container: function(inner) {
            return m("div[flex]", {class: "header-panel"}, inner);
        },
        header: m("div", {class: "header"}, "Flex"),
        body: m.trust(template)
    }));

    m.module(createContainer("container"), headerPanel({
        mode: "standard",
        header: m("div", {class: "header"}, "Standard"),
        body: m.trust(template)
    }));

    m.module(createContainer("container"), headerPanel({
        mode: "seamed",
        header: m("div", {class: "header"}, "Seamed"),
        body: m.trust(template)
    }));

    m.module(createContainer("container"), headerPanel({
        mode: "waterfall",
        header: m("div", {class: "header"}, "Waterfall"),
        body: m.trust(template)
    }));

    m.module(createContainer("container"), headerPanel({
        mode: "tall",
        header: m("div", {class: "header"}, "Waterfall tall"),
        body: m.trust(template)
    }));
    m.module(createContainer("container"), headerPanel({
        mode: "tall",
        header: m("div", {class: "header medium-tall"}, "Waterfall tall (tallClass: medium-tall)"),
        body: m.trust(template),
        tallClass: "medium-tall"
    }));

    m.module(createContainer("container"), headerPanel({
        mode: "scroll",
        header: m("div", {class: "header"}, "Scroll"),
        body: m.trust(template)
    }));

    m.module(createContainer("container"), headerPanel({
        mode: "standard",
        header: createToolbar("Toolbar").view(),
        body: m.trust(template)
    }));

})();
},{"../../components/header-panel/header-panel.js":2,"../../components/icon-button/icon-button.js":4,"../../components/icon/icon.js":6,"../../components/toolbar/toolbar.js":9,"mithril":16}],11:[function(require,module,exports){
/**
 * StyleSheets written in javascript.
 *
 * @copyright Oleg Slobodskoi 2014
 * @website https://github.com/jsstyles/jss
 * @license MIT
 */

module.exports = require('./lib/index')

},{"./lib/index":14}],12:[function(require,module,exports){
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

},{"./plugins":15}],13:[function(require,module,exports){
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

},{"./Rule":12,"./plugins":15}],14:[function(require,module,exports){
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

},{"./Rule":12,"./StyleSheet":13,"./plugins":15}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{}]},{},[10])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy5ub2RlL2xpYi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyLXBhbmVsL2hlYWRlci1wYW5lbC5qc3MiLCIuLi8uLi9jb21wb25lbnRzL2hlYWRlci1wYW5lbC9oZWFkZXItcGFuZWwuanMiLCIuLi8uLi9jb21wb25lbnRzL2ljb24tYnV0dG9uL2ljb24tYnV0dG9uLmpzcyIsIi4uLy4uL2NvbXBvbmVudHMvaWNvbi1idXR0b24vaWNvbi1idXR0b24uanMiLCIuLi8uLi9jb21wb25lbnRzL2ljb24vaWNvbi5qc3MiLCIuLi8uLi9jb21wb25lbnRzL2ljb24vaWNvbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvcG9seXRoZW5lL3N0eWxlLmpzIiwiLi4vLi4vY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuanNzIiwiLi4vLi4vY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuanMiLCJkZW1vLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2pzcy9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9qc3MvbGliL1J1bGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvanNzL2xpYi9TdHlsZVNoZWV0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2pzcy9saWIvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvanNzL2xpYi9wbHVnaW5zLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL21pdGhyaWwvbWl0aHJpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdlFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcbiAgXCIuaGVhZGVyLXBhbmVsXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiXG4gIH0sXG4gIFwiLmhlYWRlci1wYW5lbCAub3V0ZXJDb250YWluZXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IFwiMFwiLFxuICAgIFwicmlnaHRcIjogXCIwXCIsXG4gICAgXCJib3R0b21cIjogXCIwXCIsXG4gICAgXCJsZWZ0XCI6IFwiMFwiXG4gIH0sXG4gIFwiLmhlYWRlci1wYW5lbCAubWFpblBhbmVsXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIlxuICB9LFxuICBcIi5oZWFkZXItcGFuZWwgLm1haW5Db250YWluZXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwib3ZlcmZsb3cteVwiOiBcImF1dG9cIixcbiAgICBcIm92ZXJmbG93LXhcIjogXCJoaWRkZW5cIixcbiAgICBcIi13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nXCI6IFwidG91Y2hcIlxuICB9LFxuICBcIi5oZWFkZXItcGFuZWwgLmhlYWRlclwiOiB7XG4gICAgXCJ3aGl0ZS1zcGFjZVwiOiBcIm5vd3JhcFwiLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIixcbiAgICBcInRleHQtb3ZlcmZsb3dcIjogXCJlbGxpcHNpc1wiXG4gIH0sXG4gIFwiLmhlYWRlci1wYW5lbCAuZHJvcFNoYWRvd1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogXCIwXCIsXG4gICAgXCJsZWZ0XCI6IFwiMFwiLFxuICAgIFwicmlnaHRcIjogXCIwXCIsXG4gICAgXCJoZWlnaHRcIjogXCI2cHhcIixcbiAgICBcImJveC1zaGFkb3dcIjogXCJpbnNldCAwcHggNXB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC40KVwiXG4gIH0sXG4gIFwiLmhlYWRlci1wYW5lbCAuZHJvcFNoYWRvdy5oaWRkZW5cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcIm5vbmVcIlxuICB9LFxuICBcIi5oZWFkZXItcGFuZWxbbW9kZT1zZWFtZWRdIC5kcm9wU2hhZG93XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJub25lXCJcbiAgfSxcbiAgXCIuaGVhZGVyLXBhbmVsW21vZGU9c2Nyb2xsXSAubWFpbkNvbnRhaW5lclwiOiB7XG4gICAgXCJvdmVyZmxvd1wiOiBcInZpc2libGVcIlxuICB9LFxuICBcIi5oZWFkZXItcGFuZWxbbW9kZT1zY3JvbGxdIC5vdXRlckNvbnRhaW5lclwiOiB7XG4gICAgXCJvdmVyZmxvdy15XCI6IFwiYXV0b1wiLFxuICAgIFwib3ZlcmZsb3cteFwiOiBcImhpZGRlblwiLFxuICAgIFwiLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmdcIjogXCJ0b3VjaFwiXG4gIH0sXG4gIFwiLmhlYWRlci1wYW5lbFttb2RlPWNvdmVyXSAubWFpblBhbmVsXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwic3RhdGljXCJcbiAgfSxcbiAgXCIuaGVhZGVyLXBhbmVsW21vZGU9Y292ZXJdIC5tYWluQ29udGFpbmVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiBcIjBcIixcbiAgICBcInJpZ2h0XCI6IFwiMFwiLFxuICAgIFwiYm90dG9tXCI6IFwiMFwiLFxuICAgIFwibGVmdFwiOiBcIjBcIlxuICB9LFxuICBcIi5oZWFkZXItcGFuZWxbbW9kZT1jb3Zlcl0gLmRyb3BTaGFkb3dcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJzdGF0aWNcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gIH1cbn07XG4iLCIvKlxuSW1wb3J0YW50OiBUaGUgaGVhZGVyLXBhbmVsIHdpbGwgbm90IGRpc3BsYXkgaWYgaXRzIHBhcmVudCBkb2VzIG5vdCBoYXZlIGEgaGVpZ2h0LlxuXG52YXIgaGVhZGVyUGFuZWwgPSByZXF1aXJlKCdjb21wb25lbnRzL2hlYWRlci1wYW5lbC5qcycpO1xudmFyIG15UGFuZWwgPSBuZXcgaGVhZGVyUGFuZWwob3B0cyk7XG52YXIgdmlldyA9IG15UGFuZWwudmlldygpO1xuXG5Db25zdHJ1Y3RvciBvcHRzOlxuXG4gICAgb3B0cy5jb250cm9sbGVyIChvcHRpb25hbClcbiAgICBvcHRzLmNvbnRhaW5lciAob3B0aW9uYWwpOiBmdW5jdGlvbihpbm5lciwgb3B0cywgY29udHJvbGxlcikgPT4gTWl0aHJpbCB0ZW1wbGF0ZVxuICAgIG9wdHMuaW5uZXIgKG9wdGlvbmFsKTogZnVuY3Rpb24ob3B0cywgY29udHJvbGxlcikgPT4gTWl0aHJpbCB0ZW1wbGF0ZVxuXG4gICAgb3B0cy5tb2RlXG5cbiAgICAgICAgQ29udHJvbHMgaGVhZGVyIGFuZCBzY3JvbGxpbmcgYmVoYXZpb3IuIE9wdGlvbnMgYXJlXG4gICAgICAgIGBzdGFuZGFyZGAsIGBzZWFtZWRgLCBgd2F0ZXJmYWxsYCwgYHdhdGVyZmFsbC10YWxsYCwgYHNjcm9sbGAgYW5kIFxuICAgICAgICBgY292ZXJgLiBEZWZhdWx0IGlzIGBzdGFuZGFyZGAuXG5cbiAgICAgICAgYHN0YW5kYXJkYDogVGhlIGhlYWRlciBpcyBhIHN0ZXAgYWJvdmUgdGhlIHBhbmVsLiBUaGUgaGVhZGVyIHdpbGwgY29uc3VtZSB0aGVcbiAgICAgICAgcGFuZWwgYXQgdGhlIHBvaW50IG9mIGVudHJ5LCBwcmV2ZW50aW5nIGl0IGZyb20gcGFzc2luZyB0aHJvdWdoIHRvIHRoZVxuICAgICAgICBvcHBvc2l0ZSBzaWRlLlxuXG4gICAgICAgIGBzZWFtZWRgOiBUaGUgaGVhZGVyIGlzIHByZXNlbnRlZCBhcyBzZWFtZWQgd2l0aCB0aGUgcGFuZWwuXG5cbiAgICAgICAgYHdhdGVyZmFsbGA6IFNpbWlsYXIgdG8gc3RhbmRhcmQgbW9kZSwgYnV0IGhlYWRlciBpcyBpbml0aWFsbHkgcHJlc2VudGVkIGFzXG4gICAgICAgIHNlYW1lZCB3aXRoIHBhbmVsLCBidXQgdGhlbiBzZXBhcmF0ZXMgdG8gZm9ybSB0aGUgc3RlcC5cblxuICAgICAgICBgd2F0ZXJmYWxsLXRhbGxgOiBUaGUgaGVhZGVyIGlzIGluaXRpYWxseSB0YWxsZXIgKGB0YWxsYCBjbGFzcyBpcyBhZGRlZCB0b1xuICAgICAgICB0aGUgaGVhZGVyKS4gIEFzIHRoZSB1c2VyIHNjcm9sbHMsIHRoZSBoZWFkZXIgc2VwYXJhdGVzIChmb3JtaW5nIGFuIGVkZ2UpXG4gICAgICAgIHdoaWxlIGNvbmRlbnNpbmcgKGB0YWxsYCBjbGFzcyBpcyByZW1vdmVkIGZyb20gdGhlIGhlYWRlcikuXG5cbiAgICAgICAgYHNjcm9sbGA6IFRoZSBoZWFkZXIga2VlcHMgaXRzIHNlYW0gd2l0aCB0aGUgcGFuZWwsIGFuZCBpcyBwdXNoZWQgb2ZmIHNjcmVlbi5cblxuICAgICAgICBgY292ZXJgOiBUaGUgcGFuZWwgY292ZXJzIHRoZSB3aG9sZSBgY29yZS1oZWFkZXItcGFuZWxgIGluY2x1ZGluZyB0aGVcbiAgICAgICAgaGVhZGVyLiBUaGlzIGFsbG93cyB1c2VyIHRvIHN0eWxlIHRoZSBwYW5lbCBpbiBzdWNoIGEgd2F5IHRoYXQgdGhlIHBhbmVsIGlzXG4gICAgICAgIHBhcnRpYWxseSBjb3ZlcmluZyB0aGUgaGVhZGVyLlxuXG5cbiAgICBvcHRzLmhlYWRlcjogTWl0aHJpbCB0ZW1wbGF0ZVxuICAgIG9wdHMuYm9keTogTWl0aHJpbCB0ZW1wbGF0ZVxuICAgIG9wdHMubW9kZSAob3B0aW9uYWwpOiBkZWZhdWx0cyB0byBvcHRzLm1vZGVcbiAgICBvcHRzLnRhbGxDbGFzc1xuICAgIG9wdHMuc2hhZG93XG4gICAgb3B0cy5hbmltYXRlRHVyYXRpb25cbiovXG5cbi8vIFRPRE86IHJlbW92ZSBzY3JvbGwgbGlzdGVuZXIgb24gZGV0YWNoXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0cykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtID0gcmVxdWlyZSgnbWl0aHJpbCcpO1xuXG4gICAgdmFyIHN0eWxlID0gcmVxdWlyZSgnLi4vcG9seXRoZW5lL3N0eWxlLmpzJyk7XG4gICAgc3R5bGUoJ2hlYWRlci1wYW5lbCcsIHJlcXVpcmUoJy4vaGVhZGVyLXBhbmVsLmpzcycpKTtcblxuICAgIHZhciBjb250YWluZXIsXG4gICAgICAgIGlubmVyLFxuICAgICAgICBjb250cm9sbGVyLFxuICAgICAgICBtb2RlQ29uZmlncyxcblxuICAgICAgICAvLyBmdW5jdGlvbnNcbiAgICAgICAgZ2V0U2Nyb2xsZXJDb250YWluZXIsXG4gICAgICAgIHNjcm9sbEhhbmRsZXIsXG4gICAgICAgIGluaXRTY3JvbGw7XG5cbiAgICBtb2RlQ29uZmlncyA9IHtcbiAgICAgICAgc2hhZG93TW9kZTogeyd3YXRlcmZhbGwnOiAxLCAnd2F0ZXJmYWxsLXRhbGwnOiAxfSxcbiAgICAgICAgbm9TaGFkb3c6IHsnc2VhbWVkJzogMSwgJ2NvdmVyJzogMSwgJ3Njcm9sbCc6IDF9LFxuICAgICAgICB0YWxsTW9kZTogeyd3YXRlcmZhbGwtdGFsbCc6IDF9LFxuICAgICAgICBvdXRlclNjcm9sbDogeydzY3JvbGwnOiAxfVxuICAgIH07XG5cbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICBvcHRzLm1vZGUgPSBvcHRzLm1vZGUgfHwgJ3N0YW5kYXJkJztcblxuICAgIGdldFNjcm9sbGVyQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBtb2RlQ29uZmlncy5vdXRlclNjcm9sbFtvcHRzLm1vZGVdID8gJ291dGVyJyA6ICdtYWluJztcbiAgICB9O1xuXG4gICAgc2Nyb2xsSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Njcm9sbEhhbmRsZXInLCBlKTtcbiAgICB9O1xuXG4gICAgaW5pdFNjcm9sbCA9IGZ1bmN0aW9uKGVsZW1lbnQsIGlzSW5pdGlhbGl6ZWQsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGlzSW5pdGlhbGl6ZWQpIHJldHVybjtcbiAgICAgICAgaWYgKG9wdHMubW9kZSAhPT0gJ3RhbGwnKSByZXR1cm47IC8vIEZJWE1FOiBwcmVtYXR1cmUgb3B0aW1pemF0aW9uP1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xuLypcbiAgICAgICAgY29udGV4dC5vbnVubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmVFdmVudExpc3RlbmVyJyk7XG4gICAgICAgIH1cbiovXG4gICAgfTtcblxuICAgIGNvbnRhaW5lciA9IG9wdHMuY29udGFpbmVyIHx8IGZ1bmN0aW9uKGlubmVyLCBvcHRzLCBjb250cm9sbGVyKSB7XG4gICAgICAgIHJldHVybiBtKCdkaXYnLCB7Y2xhc3M6ICdoZWFkZXItcGFuZWwnfSwgaW5uZXIpO1xuICAgIH07XG5cbiAgICBpbm5lciA9IG9wdHMuaW5uZXIgfHwgZnVuY3Rpb24ob3B0cywgY29udHJvbGxlcikge1xuICAgICAgICB2YXIgaGVhZGVyID0gb3B0cy5oZWFkZXIgfHwgJyc7XG4gICAgICAgIHZhciBib2R5ID0gb3B0cy5ib2R5IHx8ICcnO1xuICAgICAgICAvKlxuICAgICAgICAgICAgb3B0cy50YWxsQ2xhc3MgPSBvcHRzLnRhbGxDbGFzcyB8fCAndGFsbCc7IC8vIFRPRE86IG5vdCB1c2VkIHlldFxuICAgICAgICAgICAgb3B0cy5zaGFkb3cgPSBvcHRzLnNoYWRvdyB8fCBmYWxzZTsgLy8gVE9ETzogbm90IHVzZWQgeWV0XG4gICAgICAgICAgICBvcHRzLmFuaW1hdGVEdXJhdGlvbiA9IDIwMDsgLy8gVE9ETzogbm90IHVzZWQgeWV0XG4gICAgICAgICovXG4gICAgICAgIHZhciBzY3JvbGxlckNvbnRhaW5lciA9IGdldFNjcm9sbGVyQ29udGFpbmVyKCk7XG4gICAgICAgIHJldHVybiBtKCdkaXZbdmVydGljYWxdW2xheW91dF0nLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICdvdXRlckNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgb3B0czogc2Nyb2xsZXJDb250YWluZXIgPT09ICdvdXRlcicgPyBpbml0U2Nyb2xsIDogJydcbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICBoZWFkZXIsXG4gICAgICAgICAgICAgICAgbSgnZGl2W2ZsZXhdW3ZlcnRpY2FsXVtsYXlvdXRdJywge2NsYXNzOiAnbWFpblBhbmVsJ30sIFtcbiAgICAgICAgICAgICAgICAgICAgbSgnZGl2W2ZsZXhdJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdtYWluQ29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdHM6IHNjcm9sbGVyQ29udGFpbmVyID09PSAnbWFpbicgPyBpbml0U2Nyb2xsIDogJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgb3B0cy5tb2RlID09PSAnc2VhbWVkJyA/ICcnIDogbSgnZGl2Jywge2NsYXNzOiAnZHJvcFNoYWRvdyd9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSk7XG4gICAgfTtcblxuICAgIGNvbnRyb2xsZXIgPSBvcHRzLmNvbnRyb2xsZXIgfHwgZnVuY3Rpb24oKSB7fTtcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBjb250cm9sbGVyOiBjb250cm9sbGVyLFxuICAgICAgICB2aWV3OiBmdW5jdGlvbihjb250cm9sbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyKFxuICAgICAgICAgICAgICAgIGlubmVyKG9wdHMsIGNvbnRyb2xsZXIpLFxuICAgICAgICAgICAgICAgIG9wdHMsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlclxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5pY29uLWJ1dHRvblwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgXCJib3gtc2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiLW1vei1ib3gtc2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwidXNlci1zZWxlY3RcIjogXCJub25lXCIsXG4gICAgXCItbW96LXVzZXItc2VsZWN0XCI6IFwibm9uZVwiLFxuICAgIFwiLXdlYmtpdC11c2VyLXNlbGVjdFwiOiBcIm5vbmVcIixcbiAgICBcImJvcmRlci1yYWRpdXNcIjogXCIycHhcIixcbiAgICBcInBhZGRpbmdcIjogXCI3cHhcIixcbiAgICBcIm1hcmdpblwiOiBcIjJweFwiLFxuICAgIFwidmVydGljYWwtYWxpZ25cIjogXCJtaWRkbGVcIixcbiAgICBcImZvbnQtc2l6ZVwiOiBcIjFyZW1cIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcIi5pY29uLWJ1dHRvbltkaXNhYmxlZF1cIjoge1xuICAgIFwib3BhY2l0eVwiOiBcIjAuNlwiLFxuICAgIFwicG9pbnRlci1ldmVudHNcIjogXCJub25lXCJcbiAgfSxcbiAgXCIuaWNvbi1idXR0b24ub3V0bGluZVwiOiB7XG4gICAgXCJib3gtc2hhZG93XCI6IFwiMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKVwiXG4gIH0sXG4gIFwiLmljb24tYnV0dG9uOmhvdmVyOm5vdChbZGlzYWJsZWRdKVwiOiB7XG4gICAgXCJib3gtc2hhZG93XCI6IFwiMCAxcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSlcIlxuICB9LFxuICBcIi5pY29uLWJ1dHRvbi5zZWxlY3RlZDpub3QoW2Rpc2FibGVkXSlcIjoge1xuICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcInJnYmEoMCwgMCwgMCwgMC4wNSlcIixcbiAgICBcImJveC1zaGFkb3dcIjogXCJpbnNldCAwIDFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMilcIlxuICB9LFxuICBcIi5pY29uLWJ1dHRvbjphY3RpdmU6bm90KFtkaXNhYmxlZF0pLCAuaWNvbi1idXR0b24uc2VsZWN0ZWQ6YWN0aXZlOm5vdChbZGlzYWJsZWRdKVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwicmdiYSgwLCAwLCAwLCAwLjA1KVwiLFxuICAgIFwiYm94LXNoYWRvd1wiOiBcImluc2V0IDAgMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpXCJcbiAgfSxcbiAgXCIuaWNvbi1idXR0b24uZGFyay10aGVtZS5vdXRsaW5lXCI6IHtcbiAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJyZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMDUpXCIsXG4gICAgXCJib3gtc2hhZG93XCI6IFwiMCAwIDAgMXB4IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4xKVwiXG4gIH0sXG4gIFwiLmljb24tYnV0dG9uLmRhcmstdGhlbWU6aG92ZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcInJnYmEoMjAwLCAyMDAsIDIwMCwgMC4wNSlcIixcbiAgICBcImJveC1zaGFkb3dcIjogXCIwIDFweCAwIDAgcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjEyKSwgMCAwIDAgMXB4IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4xKVwiXG4gIH0sXG4gIFwiLmljb24tYnV0dG9uLmRhcmstdGhlbWUuc2VsZWN0ZWRcIjoge1xuICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcInJnYmEoMjIwLCAyMjAsIDIyMCwgMC4wNSlcIixcbiAgICBcImJveC1zaGFkb3dcIjogXCJpbnNldCAwIDFweCAwIDAgcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjA1KSwgMCAwIDAgMXB4IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4xMilcIlxuICB9LFxuICBcIi5pY29uLWJ1dHRvbi5kYXJrLXRoZW1lOmFjdGl2ZSwgLmljb24tYnV0dG9uLmRhcmstdGhlbWUuc2VsZWN0ZWQ6YWN0aXZlXCI6IHtcbiAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJyZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMDUpXCIsXG4gICAgXCJib3gtc2hhZG93XCI6IFwiaW5zZXQgMCAxcHggMCAwIHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4xKSwgMCAwIDAgMXB4IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4xMilcIlxuICB9LFxuICBcIi5pY29uLWJ1dHRvbiAuaWNvblwiOiB7XG4gICAgXCJwb2ludGVyLWV2ZW50c1wiOiBcIm5vbmVcIlxuICB9XG59O1xuIiwiLypcblxudmFyIGljb25CdXR0b24gPSByZXF1aXJlKCdjb21wb25lbnRzL2ljb24tYnV0dG9uLmpzJyk7XG52YXIgbXlJY29uQnV0dG9uID0gbmV3IGljb25CdXR0b24ob3B0cyk7XG52YXIgdmlldyA9IG15SWNvbkJ1dHRvbi52aWV3KCk7XG5cblx0b3B0cy5jb250cm9sbGVyIChvcHRpb25hbClcblx0b3B0cy5jb250YWluZXIgKG9wdGlvbmFsKTogZnVuY3Rpb24oaW5uZXIsIG9wdHMsIGNvbnRyb2xsZXIpID0+IE1pdGhyaWwgdGVtcGxhdGVcblx0b3B0cy5pbm5lciAob3B0aW9uYWwpOiBmdW5jdGlvbihvcHRzKSA9PiBNaXRocmlsIHRlbXBsYXRlXG5cdG9wdHMuY2xpY2tIYW5kbGVyOiBmdW5jdGlvbihlKSA9PiBCT09MXG5cdG9wdHMuaWNvbkNsYXNzOiBDU1MgY2xhc3MgbmFtZSBmcm9tIG1hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udFxuXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIG0gPSByZXF1aXJlKCdtaXRocmlsJyk7XG4gICAgdmFyIHN0eWxlID0gcmVxdWlyZSgnLi4vcG9seXRoZW5lL3N0eWxlLmpzJyk7XG4gICAgc3R5bGUoJ2ljb24tYnV0dG9uJywgcmVxdWlyZSgnLi9pY29uLWJ1dHRvbi5qc3MnKSk7XG4gICAgcmVxdWlyZShcIi4uL2ljb24vaWNvbi5qc1wiKTtcblxuICAgIHZhciBjb250YWluZXIsXG4gICAgXHRpbm5lcixcbiAgICBcdGNvbnRyb2xsZXI7XG5cbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgIGNvbnRhaW5lciA9IG9wdHMuY29udGFpbmVyIHx8IGZ1bmN0aW9uKGlubmVyLCBvcHRzLCBjb250cm9sbGVyKSB7XG4gICAgXHR2YXIgY2xpY2tIYW5kbGVyID0gb3B0cy5jbGlja0hhbmRsZXIgfHwgbnVsbDtcbiAgICAgICAgcmV0dXJuIG0oJ2RpdicsIHtjbGFzczogJ2ljb24tYnV0dG9uJywgb25jbGljazogY2xpY2tIYW5kbGVyfSwgaW5uZXIpO1xuICAgIH07XG5cbiAgICBpbm5lciA9IG9wdHMuaW5uZXIgfHwgZnVuY3Rpb24ob3B0cywgY29udHJvbGxlcikge1xuICAgIFx0dmFyIGljb25DbGFzcyA9IG9wdHMuaWNvbkNsYXNzIHx8ICcnO1xuICAgIFx0cmV0dXJuIG0oJ2RpdicsIHtjbGFzczogJ2ljb24nfSwgXG4gICAgXHRcdG0oJ2lbZml0XScsIHtjbGFzczogWydtZCcsIGljb25DbGFzc10uam9pbignICcpfSlcbiAgICBcdCk7XG4gICAgfTtcblxuICAgIGNvbnRyb2xsZXIgPSBvcHRzLmNvbnRyb2xsZXIgfHwgZnVuY3Rpb24oKSB7fTtcblxuXHRyZXR1cm4ge1xuICAgICAgICBjb250cm9sbGVyOiBjb250cm9sbGVyLFxuICAgICAgICB2aWV3OiBmdW5jdGlvbihjb250cm9sbGVyKSB7XG4gICAgICAgIFx0cmV0dXJuIGNvbnRhaW5lcihcbiAgICAgICAgICAgICAgICBpbm5lcihvcHRzLCBjb250cm9sbGVyKSxcbiAgICAgICAgICAgICAgICBvcHRzLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLmljb25cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwidmVydGljYWwtYWxpZ25cIjogXCJtaWRkbGVcIixcbiAgICBcImJhY2tncm91bmQtcmVwZWF0XCI6IFwibm8tcmVwZWF0XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIyNHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjI0cHhcIlxuICB9LFxuICBcIi5pY29uW2ZpdF1cIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMjRweFwiXG4gIH0sXG4gIFwiLmljb24gaVwiOiB7XG4gICAgXCJmb250LXNpemVcIjogXCIyNHB4XCIsXG4gICAgXCJsaW5lLWhlaWdodFwiOiBcIjI0cHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgc3R5bGUgPSByZXF1aXJlKCcuLi9wb2x5dGhlbmUvc3R5bGUuanMnKTtcbiAgICBzdHlsZSgnaWNvbicsIHJlcXVpcmUoJy4vaWNvbi5qc3MnKSk7XG59KCkpOyIsInZhciBjYWNoZSA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHJ1bGVzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGpzcyA9IHJlcXVpcmUoXCJqc3NcIik7XG5cbiAgICBpZiAoIWtleSkgcmV0dXJuO1xuICAgIGlmICghY2FjaGVba2V5XSkge1xuICAgICAgICB2YXIgc2hlZXQgPSBqc3MuY3JlYXRlU3R5bGVTaGVldChydWxlcywge25hbWVkOiBmYWxzZX0pO1xuICAgICAgICBzaGVldC5hdHRhY2goKTtcbiAgICAgICAgY2FjaGVba2V5XSA9IHRydWU7XG4gICAgfVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIudG9vbGJhclwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImJveC1zaXppbmdcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCItbW96LWJveC1zaXppbmdcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2NHB4XCIsXG4gICAgXCJmb250LXNpemVcIjogXCIxLjNlbVwiLFxuICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNDRkQ4RENcIlxuICB9LFxuICBcIi50b29sYmFyLmFuaW1hdGVcIjoge1xuICAgIFwidHJhbnNpdGlvblwiOiBcImhlaWdodCAwLjE4cyBlYXNlLWluXCJcbiAgfSxcbiAgXCIudG9vbGJhci5tZWRpdW0tdGFsbFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxMjhweFwiXG4gIH0sXG4gIFwiLnRvb2xiYXIudGFsbFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxOTJweFwiXG4gIH0sXG4gIFwiLnRvb2xiYXIgLm5hcnJvd1wiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI1NnB4XCJcbiAgfSxcbiAgXCIudG9vbGJhciAubmFycm93IC50b29sYmFyLXRvb2xzXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjU2cHhcIixcbiAgICBcInBhZGRpbmdcIjogXCIwXCJcbiAgfSxcbiAgXCIudG9vbGJhciAubmFycm93Lm1lZGl1bS10YWxsXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjExMnB4XCJcbiAgfSxcbiAgXCIudG9vbGJhciAubmFycm93LnRhbGxcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTY4cHhcIlxuICB9LFxuICBcIi50b29sYmFyIC5taWRkbGVCYXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IFwiMFwiLFxuICAgIFwicmlnaHRcIjogXCIwXCIsXG4gICAgXCJsZWZ0XCI6IFwiMFwiXG4gIH0sXG4gIFwiLnRvb2xiYXIudGFsbCAubWlkZGxlQmFyXCI6IHtcbiAgICBcIi13ZWJraXQtdHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWSgxMDAlKVwiLFxuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWSgxMDAlKVwiXG4gIH0sXG4gIFwiLnRvb2xiYXIgLmJvdHRvbUJhclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodFwiOiBcIjBcIixcbiAgICBcImJvdHRvbVwiOiBcIjBcIixcbiAgICBcImxlZnRcIjogXCIwXCJcbiAgfSxcbiAgXCIudG9vbGJhciAuaGVhZGVyXCI6IHtcbiAgICBcIndoaXRlLXNwYWNlXCI6IFwibm93cmFwXCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwidGV4dC1vdmVyZmxvd1wiOiBcImVsbGlwc2lzXCJcbiAgfSxcbiAgXCIudG9vbGJhciAudG9vbGJhci10b29scyA+ICo6bm90KFtkaXNhYmxlZF0pXCI6IHtcbiAgICBcInBvaW50ZXItZXZlbnRzXCI6IFwiYXV0b1wiXG4gIH0sXG4gIFwiLnRvb2xiYXIgLnRvb2xiYXItdG9vbHMgPiAqXCI6IHtcbiAgICBcIm1hcmdpblwiOiBcIjAgOHB4XCJcbiAgfSxcbiAgXCIudG9vbGJhciAudG9vbGJhci10b29scyA+IC5maXRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IFwiYXV0b1wiLFxuICAgIFwicmlnaHRcIjogXCIwXCIsXG4gICAgXCJib3R0b21cIjogXCIwXCIsXG4gICAgXCJsZWZ0XCI6IFwiMFwiLFxuICAgIFwid2lkdGhcIjogXCJhdXRvXCIsXG4gICAgXCJtYXJnaW5cIjogXCIwXCJcbiAgfSxcbiAgXCIudG9vbGJhciAudG9vbGJhci10b29scyA+IC5pbmRlbnRcIjoge1xuICAgIFwibWFyZ2luLWxlZnRcIjogXCI2MHB4XCJcbiAgfSxcbiAgXCIudG9vbGJhci10b29sc1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJoZWlnaHRcIjogXCI2NHB4XCIsXG4gICAgXCJwYWRkaW5nXCI6IFwiMCA4cHhcIixcbiAgICBcInBvaW50ZXItZXZlbnRzXCI6IFwibm9uZVwiXG4gIH1cbn07XG4iLCIvKlxuXG52YXIgdG9vbGJhciA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvdG9vbGJhci5qcycpO1xudmFyIG15VG9vbGJhciA9IG5ldyB0b29sYmFyKG9wdHMpO1xudmFyIHZpZXcgPSBteVRvb2xiYXIudmlldygpO1xuXG4gICAgb3B0cy5jb250YWluZXIgKG9wdGlvbmFsKTogZnVuY3Rpb24oaW5uZXIsIG1vZGUpID0+IE1pdGhyaWwgdGVtcGxhdGVcbiAgICBvcHRzLmlubmVyIChvcHRpb25hbCk6IGZ1bmN0aW9uKCkgPT4gTWl0aHJpbCB0ZW1wbGF0ZVxuICAgIG9wdHMubW9kZSAob3B0aW9uYWwpOiAndGFsbCcsICdtZWRpdW0tdGFsbCcgb3IgJ3N0YW5kYXJkJyAoZGVmYXVsdClcbiAgICBvcHRzLmJhciAob3B0aW9uYWwpOiBiYXIgY29udHJ1Y3RvciA9PiBNaXRocmlsIHRlbXBsYXRlXG4gICAgb3B0cy5ib2R5IChvcHRpb25hbCk6IE1pdGhyaWwgdGVtcGxhdGVcbiAgICBvcHRzLnRvcEJhciAob3B0aW9uYWwpOiBzaG93biBpZiBubyBvcHRzLmJvZHkgaXMgcGFzc2VkID0+IE1pdGhyaWwgdGVtcGxhdGVcbiAgICBvcHRzLm1pZGRsZUJhciAob3B0aW9uYWwpOiBzaG93biBpZiBubyBvcHRzLmJvZHkgaXMgcGFzc2VkID0+IE1pdGhyaWwgdGVtcGxhdGVcbiAgICBvcHRzLmJvdHRvbUJhciAob3B0aW9uYWwpOiBzaG93biBpZiBubyBvcHRzLmJvZHkgaXMgcGFzc2VkID0+IE1pdGhyaWwgdGVtcGxhdGVcblxuXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIG0gPSByZXF1aXJlKCdtaXRocmlsJyk7XG5cbiAgICB2YXIgc3R5bGUgPSByZXF1aXJlKCcuLi9wb2x5dGhlbmUvc3R5bGUuanMnKTtcbiAgICBzdHlsZSgndG9vbGJhcicsIHJlcXVpcmUoJy4vdG9vbGJhci5qc3MnKSk7XG5cbiAgICB2YXIgY29udGFpbmVyLFxuICAgICAgICBpbm5lcixcbiAgICAgICAgY29udHJvbGxlcixcbiAgICBcdGJhcjtcblxuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuXHRvcHRzLm1vZGUgPSBvcHRzLm1vZGUgfHwgJ3N0YW5kYXJkJztcblxuICAgIGJhciA9IG9wdHMuYmFyIHx8IGZ1bmN0aW9uKGJvZHksIGNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gYm9keSA9PT0gbnVsbCA/IG51bGwgOiBtKCdkaXZbY2VudGVyXVtob3Jpem9udGFsXVtsYXlvdXRdJywge2NsYXNzOiBbJ3Rvb2xiYXItdG9vbHMnLCBjbGFzc05hbWVdLmpvaW4oJyAnKX0sIGJvZHkpO1xuICAgIH07XG5cbiAgICBjb250YWluZXIgPSBvcHRzLmNvbnRhaW5lciB8fCBmdW5jdGlvbihpbm5lciwgb3B0cywgY29udHJvbGxlcikge1xuICAgICAgICByZXR1cm4gbSgnZGl2Jywge2NsYXNzOiBbJ3Rvb2xiYXInLCBvcHRzLm1vZGVdLmpvaW4oJyAnKX0sIGlubmVyKTtcbiAgICB9O1xuXG4gICAgaW5uZXIgPSBvcHRzLmlubmVyIHx8IGZ1bmN0aW9uKG9wdHMsIGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdmFyIGJvZHkgPSBvcHRzLmJvZHkgfHwgbnVsbDtcbiAgICAgICAgdmFyIHRvcEJhciA9ICFib2R5ICYmIG9wdHMudG9wQmFyIHx8IG51bGw7XG4gICAgICAgIHZhciBtaWRkbGVCYXIgPSAhYm9keSAmJiBvcHRzLm1pZGRsZUJhciB8fCBudWxsO1xuICAgICAgICB2YXIgYm90dG9tQmFyID0gIWJvZHkgJiYgb3B0cy5ib3R0b21CYXIgfHwgbnVsbDtcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgYmFyKGJvZHksICd0b3BCYXInKSxcbiAgICAgICAgICAgIGJhcih0b3BCYXIsICd0b3BCYXInKSxcbiAgICAgICAgICAgIGJhcihtaWRkbGVCYXIsICdtaWRkbGVCYXInKSxcbiAgICAgICAgICAgIGJhcihib3R0b21CYXIsICdib3R0b21CYXInKVxuICAgICAgICBdXG4gICAgfTtcblxuICAgIGNvbnRyb2xsZXIgPSBvcHRzLmNvbnRyb2xsZXIgfHwgZnVuY3Rpb24oKSB7fTtcblxuXHRyZXR1cm4ge1xuICAgICAgICBjb250cm9sbGVyOiBjb250cm9sbGVyLFxuICAgICAgICB2aWV3OiBmdW5jdGlvbihjb250cm9sbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyKFxuICAgICAgICAgICAgICAgIGlubmVyKG9wdHMsIGNvbnRyb2xsZXIpLFxuICAgICAgICAgICAgICAgIG9wdHMsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlclxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxufTtcbiIsInZhciBtID0gcmVxdWlyZShcIm1pdGhyaWxcIik7XG52YXIgaGVhZGVyUGFuZWwgPSByZXF1aXJlKFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXItcGFuZWwvaGVhZGVyLXBhbmVsLmpzXCIpO1xudmFyIHRvb2xiYXIgPSByZXF1aXJlKFwiLi4vLi4vY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuanNcIik7XG52YXIgaWNvbkJ1dHRvbiA9IHJlcXVpcmUoXCIuLi8uLi9jb21wb25lbnRzL2ljb24tYnV0dG9uL2ljb24tYnV0dG9uLmpzXCIpO1xudmFyIGljb24gPSByZXF1aXJlKFwiLi4vLi4vY29tcG9uZW50cy9pY29uL2ljb24uanNcIik7XG5cbihmdW5jdGlvbigpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSBbXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiY29udGVudFwiPicsXG4gICAgICAgIFtcbiAgICAgICAgICAgIFwiSGFydW4gT21hciBhbmQgTWFzdGVyIEhhZml6XCIsXG4gICAgICAgICAgICBcImtlZXAgeW91ciBkZWFkIGJlYXV0aWZ1bCBsYWRpZXNcIixcbiAgICAgICAgICAgIFwiTWluZSBpcyBhIGxpdHRsZSBsb3ZlbGllclwiLFxuICAgICAgICAgICAgXCJ0aGFuIGFueSBvZiB5b3VyIGxhZGllcyB3ZXJlLlwiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIFwiSW4gaGVyIHBlcmZlY3Rlc3QgYXJyYXlcIixcbiAgICAgICAgICAgIFwibXkgbGFkeSwgbW92aW5nIGluIHRoZSBkYXksXCIsXG4gICAgICAgICAgICBcImlzIGEgbGl0dGxlIHN0cmFuZ2VyIHRoaW5nXCIsXG4gICAgICAgICAgICBcInRoYW4gY3Jpc3AgU2hlYmEgd2l0aCBoZXIga2luZ1wiLFxuICAgICAgICAgICAgXCJpbiB0aGUgbW9ybmluZyB3YW5kZXJpbmcuXCIsXG4gICAgICAgICAgICBdLmpvaW4oXCI8YnIgLz5cIiksXG4gICAgICAgICc8L2Rpdj4nXS5qb2luKFwiXCIpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9vbGJhciAobGFiZWwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0b29sYmFyKHtcbiAgICAgICAgICAgIG1vZGU6IFwidGFsbFwiLFxuICAgICAgICAgICAgYm90dG9tQmFyOiBbXG4gICAgICAgICAgICAgICAgbmV3IGljb25CdXR0b24oe1xuICAgICAgICAgICAgICAgICAgICBpY29uQ2xhc3M6IFwibWQtbWVudVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWVudSBjbGlja2VkXCIsIGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLnZpZXcoKSxcbiAgICAgICAgICAgICAgICBtKFwic3BhbltmbGV4XVwiLCBsYWJlbCksXG4gICAgICAgICAgICAgICAgbmV3IGljb25CdXR0b24oe1xuICAgICAgICAgICAgICAgICAgICBpY29uQ2xhc3M6IFwibWQtcmVmcmVzaFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVmcmVzaCBjbGlja2VkXCIsIGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLnZpZXcoKSxcbiAgICAgICAgICAgICAgICBuZXcgaWNvbkJ1dHRvbih7XG4gICAgICAgICAgICAgICAgICAgIGljb25DbGFzczogXCJtZC1hZGRcIixcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZCBjbGlja2VkXCIsIGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLnZpZXcoKVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVyKGNsYXNzTmFtZSkge1xuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH07XG5cbiAgICBtLm1vZHVsZShjcmVhdGVDb250YWluZXIoXCJmbGV4LWNvbnRhaW5lclwiKSwgaGVhZGVyUGFuZWwoe1xuICAgICAgICBtb2RlOiBcInN0YW5kYXJkXCIsXG4gICAgICAgIGNvbnRhaW5lcjogZnVuY3Rpb24oaW5uZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBtKFwiZGl2W2ZsZXhdXCIsIHtjbGFzczogXCJoZWFkZXItcGFuZWxcIn0sIGlubmVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyOiBtKFwiZGl2XCIsIHtjbGFzczogXCJoZWFkZXJcIn0sIFwiRmxleFwiKSxcbiAgICAgICAgYm9keTogbS50cnVzdCh0ZW1wbGF0ZSlcbiAgICB9KSk7XG5cbiAgICBtLm1vZHVsZShjcmVhdGVDb250YWluZXIoXCJjb250YWluZXJcIiksIGhlYWRlclBhbmVsKHtcbiAgICAgICAgbW9kZTogXCJzdGFuZGFyZFwiLFxuICAgICAgICBoZWFkZXI6IG0oXCJkaXZcIiwge2NsYXNzOiBcImhlYWRlclwifSwgXCJTdGFuZGFyZFwiKSxcbiAgICAgICAgYm9keTogbS50cnVzdCh0ZW1wbGF0ZSlcbiAgICB9KSk7XG5cbiAgICBtLm1vZHVsZShjcmVhdGVDb250YWluZXIoXCJjb250YWluZXJcIiksIGhlYWRlclBhbmVsKHtcbiAgICAgICAgbW9kZTogXCJzZWFtZWRcIixcbiAgICAgICAgaGVhZGVyOiBtKFwiZGl2XCIsIHtjbGFzczogXCJoZWFkZXJcIn0sIFwiU2VhbWVkXCIpLFxuICAgICAgICBib2R5OiBtLnRydXN0KHRlbXBsYXRlKVxuICAgIH0pKTtcblxuICAgIG0ubW9kdWxlKGNyZWF0ZUNvbnRhaW5lcihcImNvbnRhaW5lclwiKSwgaGVhZGVyUGFuZWwoe1xuICAgICAgICBtb2RlOiBcIndhdGVyZmFsbFwiLFxuICAgICAgICBoZWFkZXI6IG0oXCJkaXZcIiwge2NsYXNzOiBcImhlYWRlclwifSwgXCJXYXRlcmZhbGxcIiksXG4gICAgICAgIGJvZHk6IG0udHJ1c3QodGVtcGxhdGUpXG4gICAgfSkpO1xuXG4gICAgbS5tb2R1bGUoY3JlYXRlQ29udGFpbmVyKFwiY29udGFpbmVyXCIpLCBoZWFkZXJQYW5lbCh7XG4gICAgICAgIG1vZGU6IFwidGFsbFwiLFxuICAgICAgICBoZWFkZXI6IG0oXCJkaXZcIiwge2NsYXNzOiBcImhlYWRlclwifSwgXCJXYXRlcmZhbGwgdGFsbFwiKSxcbiAgICAgICAgYm9keTogbS50cnVzdCh0ZW1wbGF0ZSlcbiAgICB9KSk7XG4gICAgbS5tb2R1bGUoY3JlYXRlQ29udGFpbmVyKFwiY29udGFpbmVyXCIpLCBoZWFkZXJQYW5lbCh7XG4gICAgICAgIG1vZGU6IFwidGFsbFwiLFxuICAgICAgICBoZWFkZXI6IG0oXCJkaXZcIiwge2NsYXNzOiBcImhlYWRlciBtZWRpdW0tdGFsbFwifSwgXCJXYXRlcmZhbGwgdGFsbCAodGFsbENsYXNzOiBtZWRpdW0tdGFsbClcIiksXG4gICAgICAgIGJvZHk6IG0udHJ1c3QodGVtcGxhdGUpLFxuICAgICAgICB0YWxsQ2xhc3M6IFwibWVkaXVtLXRhbGxcIlxuICAgIH0pKTtcblxuICAgIG0ubW9kdWxlKGNyZWF0ZUNvbnRhaW5lcihcImNvbnRhaW5lclwiKSwgaGVhZGVyUGFuZWwoe1xuICAgICAgICBtb2RlOiBcInNjcm9sbFwiLFxuICAgICAgICBoZWFkZXI6IG0oXCJkaXZcIiwge2NsYXNzOiBcImhlYWRlclwifSwgXCJTY3JvbGxcIiksXG4gICAgICAgIGJvZHk6IG0udHJ1c3QodGVtcGxhdGUpXG4gICAgfSkpO1xuXG4gICAgbS5tb2R1bGUoY3JlYXRlQ29udGFpbmVyKFwiY29udGFpbmVyXCIpLCBoZWFkZXJQYW5lbCh7XG4gICAgICAgIG1vZGU6IFwic3RhbmRhcmRcIixcbiAgICAgICAgaGVhZGVyOiBjcmVhdGVUb29sYmFyKFwiVG9vbGJhclwiKS52aWV3KCksXG4gICAgICAgIGJvZHk6IG0udHJ1c3QodGVtcGxhdGUpXG4gICAgfSkpO1xuXG59KSgpOyIsIi8qKlxuICogU3R5bGVTaGVldHMgd3JpdHRlbiBpbiBqYXZhc2NyaXB0LlxuICpcbiAqIEBjb3B5cmlnaHQgT2xlZyBTbG9ib2Rza29pIDIwMTRcbiAqIEB3ZWJzaXRlIGh0dHBzOi8vZ2l0aHViLmNvbS9qc3N0eWxlcy9qc3NcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaW5kZXgnKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBwbHVnaW5zID0gcmVxdWlyZSgnLi9wbHVnaW5zJylcblxudmFyIHVpZCA9IDBcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG4vKipcbiAqIFJ1bGUgaXMgc2VsZWN0b3IgKyBzdHlsZSBoYXNoLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBbc2VsZWN0b3JdXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0eWxlXSBkZWNsYXJhdGlvbnMgYmxvY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIFJ1bGUoc2VsZWN0b3IsIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PSAnb2JqZWN0Jykge1xuICAgICAgICBvcHRpb25zID0gc3R5bGVcbiAgICAgICAgc3R5bGUgPSBzZWxlY3RvclxuICAgICAgICBzZWxlY3RvciA9IG51bGxcbiAgICB9XG5cbiAgICB0aGlzLmlkID0gUnVsZS51aWQrK1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICBpZiAodGhpcy5vcHRpb25zLm5hbWVkID09IG51bGwpIHRoaXMub3B0aW9ucy5uYW1lZCA9IHRydWVcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3JcbiAgICAgICAgdGhpcy5pc0F0UnVsZSA9IHNlbGVjdG9yWzBdID09ICdAJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNBdFJ1bGUgPSBmYWxzZVxuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFJ1bGUuTkFNRVNQQUNFX1BSRUZJWCArICctJyArIHRoaXMuaWRcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9ICcuJyArIHRoaXMuY2xhc3NOYW1lXG4gICAgfVxuXG4gICAgdGhpcy5zdHlsZSA9IHN0eWxlXG4gICAgLy8gV2lsbCBiZSBzZXQgYnkgU3R5bGVTaGVldCNsaW5rIGlmIGxpbmsgb3B0aW9uIGlzIHRydWUuXG4gICAgdGhpcy5DU1NSdWxlID0gbnVsbFxuICAgIC8vIFdoZW4gYXQtcnVsZSBoYXMgc3ViIHJ1bGVzLlxuICAgIHRoaXMucnVsZXMgPSBudWxsXG4gICAgaWYgKHRoaXMuaXNBdFJ1bGUgJiYgdGhpcy5zdHlsZSkgdGhpcy5leHRyYWN0QXRSdWxlcygpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZVxuXG4vKipcbiAqIENsYXNzIG5hbWUgcHJlZml4IHdoZW4gZ2VuZXJhdGVkLlxuICpcbiAqIEB0eXBlIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuUnVsZS5OQU1FU1BBQ0VfUFJFRklYID0gJ2pzcydcblxuLyoqXG4gKiBJbmRlbnRhdGlvbiBzdHJpbmcgZm9yIGZvcm1hdHRpbmcgdG9TdHJpbmcgb3V0cHV0LlxuICpcbiAqIEB0eXBlIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuUnVsZS5JTkRFTlRBVElPTiA9ICcgICdcblxuLyoqXG4gKiBVbmlxdWUgaWQsIHJpZ2h0IG5vdyBqdXN0IGEgY291bnRlciwgYmVjYXVzZSB0aGVyZSBpcyBubyBuZWVkIGZvciBiZXR0ZXIgdWlkLlxuICpcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuUnVsZS51aWQgPSAwXG5cbi8qKlxuICogR2V0IG9yIHNldCBhIHN0eWxlIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IFt2YWx1ZV1cbiAqIEByZXR1cm4ge1J1bGV8U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblJ1bGUucHJvdG90eXBlLnByb3AgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAvLyBJdHMgYSBzZXR0ZXIuXG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0eWxlKSB0aGlzLnN0eWxlID0ge31cbiAgICAgICAgdGhpcy5zdHlsZVtuYW1lXSA9IHZhbHVlXG4gICAgICAgIC8vIElmIGxpbmtlZCBvcHRpb24gaW4gU3R5bGVTaGVldCBpcyBub3QgcGFzc2VkLCBDU1NSdWxlIGlzIG5vdCBkZWZpbmVkLlxuICAgICAgICBpZiAodGhpcy5DU1NSdWxlKSB0aGlzLkNTU1J1bGUuc3R5bGVbbmFtZV0gPSB2YWx1ZVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8vIEl0cyBhIGdldHRlci5cbiAgICBpZiAodGhpcy5zdHlsZSkgdmFsdWUgPSB0aGlzLnN0eWxlW25hbWVdXG5cbiAgICAvLyBSZWFkIHRoZSB2YWx1ZSBmcm9tIHRoZSBET00gaWYgaXRzIG5vdCBjYWNoZWQuXG4gICAgaWYgKHZhbHVlID09IG51bGwgJiYgdGhpcy5DU1NSdWxlKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5DU1NSdWxlLnN0eWxlW25hbWVdXG4gICAgICAgIC8vIENhY2hlIHRoZSB2YWx1ZSBhZnRlciB3ZSBoYXZlIGdvdCBpdCBmcm9tIHRoZSBET00gb25jZS5cbiAgICAgICAgdGhpcy5zdHlsZVtuYW1lXSA9IHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogQWRkIGNoaWxkIHJ1bGUuIFJlcXVpcmVkIGZvciBwbHVnaW5zIGxpa2UgXCJuZXN0ZWRcIi5cbiAqIFN0eWxlU2hlZXQgd2lsbCByZW5kZXIgdGhlbSBhcyBhIHNlcGFyYXRlIHJ1bGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gc3R5bGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gcnVsZSBvcHRpb25zXG4gKiBAcmV0dXJuIHtSdWxlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblJ1bGUucHJvdG90eXBlLmFkZENoaWxkID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBzdHlsZSwgb3B0aW9ucykge1xuICAgIGlmICghdGhpcy5jaGlsZHJlbikgdGhpcy5jaGlsZHJlbiA9IHt9XG4gICAgdGhpcy5jaGlsZHJlbltzZWxlY3Rvcl0gPSB7XG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQWRkIGNoaWxkIHJ1bGUuIFJlcXVpcmVkIGZvciBwbHVnaW5zIGxpa2UgXCJuZXN0ZWRcIi5cbiAqIFN0eWxlU2hlZXQgd2lsbCByZW5kZXIgdGhlbSBhcyBhIHNlcGFyYXRlIHJ1bGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gc3R5bGVcbiAqIEByZXR1cm4ge1J1bGV9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5SdWxlLnByb3RvdHlwZS5leHRyYWN0QXRSdWxlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMucnVsZXMpIHRoaXMucnVsZXMgPSB7fVxuXG4gICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLnN0eWxlKSB7XG4gICAgICAgIHZhciBzdHlsZSA9IHRoaXMuc3R5bGVbbmFtZV1cbiAgICAgICAgLy8gTm90IGEgbmVzdGVkIHJ1bGUuXG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT0gJ3N0cmluZycpIGJyZWFrXG4gICAgICAgIHZhciBzZWxlY3RvciA9IHRoaXMub3B0aW9ucy5uYW1lZCA/IHVuZGVmaW5lZCA6IG5hbWVcbiAgICAgICAgdmFyIHJ1bGUgPSB0aGlzLnJ1bGVzW25hbWVdID0gbmV3IFJ1bGUoc2VsZWN0b3IsIHN0eWxlLCB0aGlzLm9wdGlvbnMpXG4gICAgICAgIHBsdWdpbnMucnVuKHJ1bGUpXG4gICAgICAgIGRlbGV0ZSB0aGlzLnN0eWxlW25hbWVdXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBBcHBseSBydWxlIHRvIGFuIGVsZW1lbnQgaW5saW5lLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybiB7UnVsZX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblJ1bGUucHJvdG90eXBlLmFwcGx5VG8gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGZvciAodmFyIHByb3AgaW4gdGhpcy5zdHlsZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnN0eWxlW3Byb3BdXG4gICAgICAgIGlmICh0b1N0cmluZy5jYWxsKHZhbHVlKSA9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtwcm9wXSA9IHZhbHVlW2ldXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gdmFsdWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQ29udmVydHMgdGhlIHJ1bGUgdG8gY3NzIHN0cmluZy5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5SdWxlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdmFyIHN0eWxlID0gdGhpcy5zdHlsZVxuXG4gICAgLy8gQXQgcnVsZXMgbGlrZSBAY2hhcnNldFxuICAgIGlmICh0aGlzLmlzQXRSdWxlICYmICF0aGlzLnN0eWxlICYmICF0aGlzLnJ1bGVzKSByZXR1cm4gdGhpcy5zZWxlY3RvciArICc7J1xuXG4gICAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge31cbiAgICBpZiAob3B0aW9ucy5pbmRlbnRhdGlvbkxldmVsID09IG51bGwpIG9wdGlvbnMuaW5kZW50YXRpb25MZXZlbCA9IDBcblxuICAgIHZhciBzdHIgPSBpbmRlbnQob3B0aW9ucy5pbmRlbnRhdGlvbkxldmVsLCB0aGlzLnNlbGVjdG9yICsgJyB7JylcblxuICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVbcHJvcF1cbiAgICAgICAgLy8gV2Ugd2FudCB0byBnZW5lcmF0ZSBtdWx0aXBsZSBzdHlsZSB3aXRoIGlkZW50aWNhbCBwcm9wZXJ0eSBuYW1lcy5cbiAgICAgICAgaWYgKHRvU3RyaW5nLmNhbGwodmFsdWUpID09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzdHIgKz0gJ1xcbicgKyBpbmRlbnQob3B0aW9ucy5pbmRlbnRhdGlvbkxldmVsICsgMSwgcHJvcCArICc6ICcgKyB2YWx1ZVtpXSArICc7JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0ciArPSAnXFxuJyArIGluZGVudChvcHRpb25zLmluZGVudGF0aW9uTGV2ZWwgKyAxLCBwcm9wICsgJzogJyArIHZhbHVlICsgJzsnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2UgYXJlIGhhdmUgYW4gYXQtcnVsZSB3aXRoIG5lc3RlZCBzdGF0ZW1lbnRzLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9BdC1ydWxlXG4gICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLnJ1bGVzKSB7XG4gICAgICAgIHZhciBydWxlU3RyID0gdGhpcy5ydWxlc1tuYW1lXS50b1N0cmluZyh7XG4gICAgICAgICAgICBpbmRlbnRhdGlvbkxldmVsOiBvcHRpb25zLmluZGVudGF0aW9uTGV2ZWwgKyAxXG4gICAgICAgIH0pXG4gICAgICAgIHN0ciArPSAnXFxuJyArIGluZGVudChvcHRpb25zLmluZGVudGF0aW9uTGV2ZWwsIHJ1bGVTdHIpXG4gICAgfVxuXG4gICAgc3RyICs9ICdcXG4nICsgaW5kZW50KG9wdGlvbnMuaW5kZW50YXRpb25MZXZlbCwgJ30nKVxuXG4gICAgcmV0dXJuIHN0clxufVxuXG4vKipcbiAqIFJldHVybnMgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgcnVsZS5cbiAqIE5lc3RlZCBydWxlcywgYXQtcnVsZXMgYW5kIGFycmF5IHZhbHVlcyBhcmUgbm90IHN1cHBvcnRlZC5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5SdWxlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0eWxlID0ge31cblxuICAgIGZvciAodmFyIHByb3AgaW4gdGhpcy5zdHlsZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnN0eWxlW3Byb3BdXG4gICAgICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlXG4gICAgICAgIGlmICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHN0eWxlW3Byb3BdID0gdmFsdWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHlsZVxufVxuXG4vKipcbiAqIEluZGVudCBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbGV2ZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gaW5kZW50KGxldmVsLCBzdHIpIHtcbiAgICB2YXIgaW5kZW50U3RyID0gJydcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxldmVsOyBpKyspIGluZGVudFN0ciArPSBSdWxlLklOREVOVEFUSU9OXG4gICAgcmV0dXJuIGluZGVudFN0ciArIHN0clxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBSdWxlID0gcmVxdWlyZSgnLi9SdWxlJylcbnZhciBwbHVnaW5zID0gcmVxdWlyZSgnLi9wbHVnaW5zJylcblxuLyoqXG4gKiBTdHlsZVNoZWV0IGFic3RyYWN0aW9uLCBjb250YWlucyBydWxlcywgaW5qZWN0cyBzdHlsZXNoZWV0IGludG8gZG9tLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYG1lZGlhYCBzdHlsZSBlbGVtZW50IGF0dHJpYnV0ZVxuICogIC0gYHRpdGxlYCBzdHlsZSBlbGVtZW50IGF0dHJpYnV0ZVxuICogIC0gYHR5cGVgIHN0eWxlIGVsZW1lbnQgYXR0cmlidXRlXG4gKiAgLSBgbmFtZWRgIHRydWUgYnkgZGVmYXVsdCAtIGtleXMgYXJlIG5hbWVzLCBzZWxlY3RvcnMgd2lsbCBiZSBnZW5lcmF0ZWQsXG4gKiAgICBpZiBmYWxzZSAtIGtleXMgYXJlIGdsb2JhbCBzZWxlY3RvcnMuXG4gKiAgLSBgbGlua2AgbGluayBqc3MgUnVsZSBpbnN0YW5jZXMgd2l0aCBET00gQ1NTUnVsZSBpbnN0YW5jZXMgc28gdGhhdCBzdHlsZXMsXG4gKiAgY2FuIGJlIG1vZGlmaWVkIGR5bmFtaWNhbGx5LCBmYWxzZSBieSBkZWZhdWx0IGJlY2F1c2UgaXQgaGFzIHNvbWUgcGVyZm9ybWFuY2UgY29zdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gW3J1bGVzXSBvYmplY3Qgd2l0aCBzZWxlY3RvcnMgYW5kIGRlY2xhcmF0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gU3R5bGVTaGVldChydWxlcywgb3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICBpZiAodGhpcy5vcHRpb25zLm5hbWVkID09IG51bGwpIHRoaXMub3B0aW9ucy5uYW1lZCA9IHRydWVcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5hdHRhY2hlZCA9IGZhbHNlXG4gICAgdGhpcy5tZWRpYSA9IHRoaXMub3B0aW9ucy5tZWRpYVxuICAgIHRoaXMudHlwZSA9IHRoaXMub3B0aW9ucy50eXBlXG4gICAgdGhpcy50aXRsZSA9IHRoaXMub3B0aW9ucy50aXRsZVxuICAgIHRoaXMucnVsZXMgPSB7fVxuICAgIC8vIE9ubHkgd2hlbiBvcHRpb25zLm5hbWVkOiB0cnVlLlxuICAgIHRoaXMuY2xhc3NlcyA9IHt9XG4gICAgdGhpcy5kZXBsb3llZCA9IGZhbHNlXG4gICAgdGhpcy5saW5rZWQgPSBmYWxzZVxuXG4gICAgLy8gRG9uJ3QgY3JlYXRlIGVsZW1lbnQgaWYgd2UgYXJlIG5vdCBpbiBhIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoKVxuICAgIH1cblxuICAgIGZvciAodmFyIGtleSBpbiBydWxlcykge1xuICAgICAgICB0aGlzLmNyZWF0ZVJ1bGVzKGtleSwgcnVsZXNba2V5XSlcbiAgICB9XG59XG5cblN0eWxlU2hlZXQuQVRUUklCVVRFUyA9IFsndGl0bGUnLCAndHlwZScsICdtZWRpYSddXG5cbm1vZHVsZS5leHBvcnRzID0gU3R5bGVTaGVldFxuXG4vKipcbiAqIEluc2VydCBzdHlsZXNoZWV0IGVsZW1lbnQgdG8gcmVuZGVyIHRyZWUuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqIEByZXR1cm4ge1N0eWxlU2hlZXR9XG4gKi9cblN0eWxlU2hlZXQucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5hdHRhY2hlZCkgcmV0dXJuIHRoaXNcblxuICAgIGlmICghdGhpcy5kZXBsb3llZCkge1xuICAgICAgICB0aGlzLmRlcGxveSgpXG4gICAgICAgIHRoaXMuZGVwbG95ZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpXG5cbiAgICAvLyBCZWZvcmUgZWxlbWVudCBpcyBhdHRhY2hlZCB0byB0aGUgZG9tIHJ1bGVzIGFyZSBub3QgY3JlYXRlZC5cbiAgICBpZiAoIXRoaXMubGlua2VkICYmIHRoaXMub3B0aW9ucy5saW5rKSB7XG4gICAgICAgIHRoaXMubGluaygpXG4gICAgICAgIHRoaXMubGlua2VkID0gdHJ1ZVxuICAgIH1cblxuICAgIHRoaXMuYXR0YWNoZWQgPSB0cnVlXG5cbiAgICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIFJlbW92ZSBzdHlsZXNoZWV0IGVsZW1lbnQgZnJvbSByZW5kZXIgdHJlZS5cbiAqXG4gKiBAcmV0dXJuIHtTdHlsZVNoZWV0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuU3R5bGVTaGVldC5wcm90b3R5cGUuZGV0YWNoID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5hdHRhY2hlZCkgcmV0dXJuIHRoaXNcblxuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudClcbiAgICB0aGlzLmF0dGFjaGVkID0gZmFsc2VcblxuICAgIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogRGVwbG95IHN0eWxlcyB0byB0aGUgZWxlbWVudC5cbiAqXG4gKiBAcmV0dXJuIHtTdHlsZVNoZWV0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblN0eWxlU2hlZXQucHJvdG90eXBlLmRlcGxveSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJ1xcbicgKyB0aGlzLnRvU3RyaW5nKCkgKyAnXFxuJ1xuXG4gICAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBGaW5kIENTU1J1bGUgb2JqZWN0cyBpbiB0aGUgRE9NIGFuZCBsaW5rIHRoZW0gaW4gdGhlIGNvcnJlc3BvbmRpbmcgUnVsZSBpbnN0YW5jZS5cbiAqXG4gKiBAcmV0dXJuIHtTdHlsZVNoZWV0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblN0eWxlU2hlZXQucHJvdG90eXBlLmxpbmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIENTU1J1bGVMaXN0ID0gdGhpcy5lbGVtZW50LnNoZWV0LmNzc1J1bGVzXG4gICAgdmFyIHJ1bGVzID0gdGhpcy5ydWxlc1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBDU1NSdWxlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgQ1NTUnVsZSA9IENTU1J1bGVMaXN0W2ldXG4gICAgICAgIHZhciBydWxlID0gcnVsZXNbQ1NTUnVsZS5zZWxlY3RvclRleHRdXG4gICAgICAgIGlmIChydWxlKSBydWxlLkNTU1J1bGUgPSBDU1NSdWxlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBBZGQgYSBydWxlIHRvIHRoZSBjdXJyZW50IHN0eWxlc2hlZXQuIFdpbGwgaW5zZXJ0IGEgcnVsZSBhbHNvIGFmdGVyIHRoZSBzdHlsZXNoZWV0XG4gKiBoYXMgYmVlbiByZW5kZXJlZCBmaXJzdCB0aW1lLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBba2V5XSBjYW4gYmUgc2VsZWN0b3Igb3IgbmFtZSBpZiBgb3B0aW9ucy5uYW1lZGAgaXMgdHJ1ZVxuICogQHBhcmFtIHtPYmplY3R9IHN0eWxlIHByb3BlcnR5L3ZhbHVlIGhhc2hcbiAqIEByZXR1cm4ge1J1bGV9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5TdHlsZVNoZWV0LnByb3RvdHlwZS5hZGRSdWxlID0gZnVuY3Rpb24gKGtleSwgc3R5bGUpIHtcbiAgICB2YXIgcnVsZXMgPSB0aGlzLmNyZWF0ZVJ1bGVzKGtleSwgc3R5bGUpXG5cbiAgICAvLyBEb24ndCBpbnNlcnQgcnVsZSBkaXJlY3RseSBpZiB0aGVyZSBpcyBubyBzdHJpbmdpZmllZCB2ZXJzaW9uIHlldC5cbiAgICAvLyBJdCB3aWxsIGJlIGluc2VydGVkIGFsbCB0b2dldGhlciB3aGVuIC5hdHRhY2ggaXMgY2FsbGVkLlxuICAgIGlmICh0aGlzLmRlcGxveWVkKSB7XG4gICAgICAgIHZhciBzaGVldCA9IHRoaXMuZWxlbWVudC5zaGVldFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmV4dEluZGV4ID0gc2hlZXQuY3NzUnVsZXMubGVuZ3RoXG4gICAgICAgICAgICB2YXIgcnVsZSA9IHJ1bGVzW2ldXG4gICAgICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUudG9TdHJpbmcoKSwgbmV4dEluZGV4KVxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5saW5rKSBydWxlLkNTU1J1bGUgPSBzaGVldC5jc3NSdWxlc1tuZXh0SW5kZXhdXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlcGxveSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzXG59XG5cbi8qKlxuICogQ3JlYXRlIHJ1bGVzLCB3aWxsIHJlbmRlciBhbHNvIGFmdGVyIHN0eWxlc2hlZXQgd2FzIHJlbmRlcmVkIHRoZSBmaXJzdCB0aW1lLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBydWxlcyBrZXk6c3R5bGUgaGFzaC5cbiAqIEByZXR1cm4ge1N0eWxlU2hlZXR9IHRoaXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblN0eWxlU2hlZXQucHJvdG90eXBlLmFkZFJ1bGVzID0gZnVuY3Rpb24gKHJ1bGVzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHJ1bGVzKSB7XG4gICAgICAgIHRoaXMuYWRkUnVsZShrZXksIHJ1bGVzW2tleV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBHZXQgYSBydWxlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgY2FuIGJlIHNlbGVjdG9yIG9yIG5hbWUgaWYgYG5hbWVkYCBpcyB0cnVlLlxuICogQHJldHVybiB7UnVsZX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblN0eWxlU2hlZXQucHJvdG90eXBlLmdldFJ1bGUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXNba2V5XVxufVxuXG4vKipcbiAqIENvbnZlcnQgcnVsZXMgdG8gYSBjc3Mgc3RyaW5nLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblN0eWxlU2hlZXQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdHIgPSAnJ1xuICAgIHZhciBydWxlcyA9IHRoaXMucnVsZXNcbiAgICB2YXIgc3RyaW5naWZpZWQgPSB7fVxuICAgIGZvciAodmFyIGtleSBpbiBydWxlcykge1xuICAgICAgICB2YXIgcnVsZSA9IHJ1bGVzW2tleV1cbiAgICAgICAgLy8gV2UgaGF2ZSB0aGUgc2FtZSBydWxlIHJlZmVyZW5jZWQgdHdpY2UgaWYgdXNpbmcgbmFtZWQgdXJsZXMuXG4gICAgICAgIC8vIEJ5IG5hbWUgYW5kIGJ5IHNlbGVjdG9yLlxuICAgICAgICBpZiAoc3RyaW5naWZpZWRbcnVsZS5pZF0pIGNvbnRpbnVlXG4gICAgICAgIGlmIChzdHIpIHN0ciArPSAnXFxuJ1xuICAgICAgICBzdHIgKz0gcnVsZXNba2V5XS50b1N0cmluZygpXG4gICAgICAgIHN0cmluZ2lmaWVkW3J1bGUuaWRdID0gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBzdHJcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBydWxlLCB3aWxsIG5vdCByZW5kZXIgYWZ0ZXIgc3R5bGVzaGVldCB3YXMgcmVuZGVyZWQgdGhlIGZpcnN0IHRpbWUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtzZWxlY3Rvcl0gaWYgeW91IGRvbid0IHBhc3Mgc2VsZWN0b3IgLSBpdCB3aWxsIGJlIGdlbmVyYXRlZFxuICogQHBhcmFtIHtPYmplY3R9IFtzdHlsZV0gZGVjbGFyYXRpb25zIGJsb2NrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIHJ1bGUgb3B0aW9uc1xuICogQHJldHVybiB7QXJyYXl9IHJ1bGUgY2FuIGNvbnRhaW4gY2hpbGQgcnVsZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5TdHlsZVNoZWV0LnByb3RvdHlwZS5jcmVhdGVSdWxlcyA9IGZ1bmN0aW9uIChrZXksIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgdmFyIHJ1bGVzID0gW11cbiAgICB2YXIgc2VsZWN0b3IsIG5hbWVcblxuICAgIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9XG4gICAgdmFyIG5hbWVkID0gdGhpcy5vcHRpb25zLm5hbWVkXG4gICAgLy8gU2NvcGUgb3B0aW9ucyBvdmVyd3JpdGUgaW5zdGFuY2Ugb3B0aW9ucy5cbiAgICBpZiAob3B0aW9ucy5uYW1lZCAhPSBudWxsKSBuYW1lZCA9IG9wdGlvbnMubmFtZWRcblxuICAgIGlmIChuYW1lZCkgbmFtZSA9IGtleVxuICAgIGVsc2Ugc2VsZWN0b3IgPSBrZXlcblxuICAgIHZhciBydWxlID0gbmV3IFJ1bGUoc2VsZWN0b3IsIHN0eWxlLCB7XG4gICAgICAgIHNoZWV0OiB0aGlzLFxuICAgICAgICBuYW1lZDogbmFtZWQsXG4gICAgICAgIG5hbWU6IG5hbWVcbiAgICB9KVxuICAgIHJ1bGVzLnB1c2gocnVsZSlcblxuICAgIHRoaXMucnVsZXNbcnVsZS5zZWxlY3Rvcl0gPSBydWxlXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgICAgdGhpcy5ydWxlc1tuYW1lXSA9IHJ1bGVcbiAgICAgICAgdGhpcy5jbGFzc2VzW25hbWVdID0gcnVsZS5jbGFzc05hbWVcbiAgICB9XG5cbiAgICBwbHVnaW5zLnJ1bihydWxlKVxuXG4gICAgZm9yIChrZXkgaW4gcnVsZS5jaGlsZHJlbikge1xuICAgICAgICBydWxlcy5wdXNoKHRoaXMuY3JlYXRlUnVsZXMoXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBydWxlLmNoaWxkcmVuW2tleV0uc3R5bGUsXG4gICAgICAgICAgICBydWxlLmNoaWxkcmVuW2tleV0ub3B0aW9uc1xuICAgICAgICApKVxuICAgIH1cblxuICAgIHJldHVybiBydWxlc1xufVxuXG4vKipcbiAqIENyZWF0ZSBzdHlsZSBzaGVldCBlbGVtZW50LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xuU3R5bGVTaGVldC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcblxuICAgIFN0eWxlU2hlZXQuQVRUUklCVVRFUy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzW25hbWVdKSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB0aGlzW25hbWVdKVxuICAgIH0sIHRoaXMpXG5cbiAgICByZXR1cm4gZWxlbWVudFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBTdHlsZVNoZWV0ID0gcmVxdWlyZSgnLi9TdHlsZVNoZWV0JylcbnZhciBSdWxlID0gcmVxdWlyZSgnLi9SdWxlJylcblxuZXhwb3J0cy5TdHlsZVNoZWV0ID0gU3R5bGVTaGVldFxuXG5leHBvcnRzLlJ1bGUgPSBSdWxlXG5cbmV4cG9ydHMucGx1Z2lucyA9IHJlcXVpcmUoJy4vcGx1Z2lucycpXG5cbi8qKlxuICogQ3JlYXRlIGEgc3R5bGVzaGVldC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcnVsZXMgaXMgc2VsZWN0b3I6c3R5bGUgaGFzaC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbbmFtZWRdIHJ1bGVzIGhhdmUgbmFtZXMgaWYgdHJ1ZSwgY2xhc3MgbmFtZXMgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gKiBAcGFyYW0ge09iamVjdH0gW2F0dHJpYnV0ZXNdIHN0eWxlc2hlZXQgZWxlbWVudCBhdHRyaWJ1dGVzLlxuICogQHJldHVybiB7U3R5bGVTaGVldH1cbiAqIEBhcGkgcHVibGljXG4gKi9cbmV4cG9ydHMuY3JlYXRlU3R5bGVTaGVldCA9IGZ1bmN0aW9uIChydWxlcywgbmFtZWQsIGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlU2hlZXQocnVsZXMsIG5hbWVkLCBhdHRyaWJ1dGVzKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHJ1bGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IFtzZWxlY3Rvcl1cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZSBpcyBwcm9wZXJ0eTp2YWx1ZSBoYXNoLlxuICogQHJldHVybiB7UnVsZX1cbiAqIEBhcGkgcHVibGljXG4gKi9cbmV4cG9ydHMuY3JlYXRlUnVsZSA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgc3R5bGUpIHtcbiAgICB2YXIgcnVsZSA9IG5ldyBSdWxlKHNlbGVjdG9yLCBzdHlsZSlcbiAgICBleHBvcnRzLnBsdWdpbnMucnVuKHJ1bGUpXG4gICAgcmV0dXJuIHJ1bGVcbn1cblxuLyoqXG4gKiBSZWdpc3RlciBwbHVnaW4uIFBhc3NlZCBmdW5jdGlvbiB3aWxsIGJlIGludm9rZWQgd2l0aCBhIHJ1bGUgaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmV4cG9ydHMudXNlID0gZXhwb3J0cy5wbHVnaW5zLnVzZVxuIiwiJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogUmVnaXN0ZXJlZCBwbHVnaW5zLlxuICpcbiAqIEB0eXBlIHtBcnJheX1cbiAqIEBhcGkgcHVibGljXG4gKi9cbmV4cG9ydHMucmVnaXN0cnkgPSBbXVxuXG4vKipcbiAqIFJlZ2lzdGVyIHBsdWdpbi4gUGFzc2VkIGZ1bmN0aW9uIHdpbGwgYmUgaW52b2tlZCB3aXRoIGEgcnVsZSBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQGFwaSBwdWJsaWNcbiAqL1xuZXhwb3J0cy51c2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICBleHBvcnRzLnJlZ2lzdHJ5LnB1c2goZm4pXG59XG5cbi8qKlxuICogRXhlY3V0ZSBhbGwgcmVnaXN0ZXJlZCBwbHVnaW5zLlxuICpcbiAqIEBwYXJhbSB7UnVsZX0gcnVsZVxuICogQGFwaSBwcml2YXRlXG4gKi9cbmV4cG9ydHMucnVuID0gZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cG9ydHMucmVnaXN0cnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZXhwb3J0cy5yZWdpc3RyeVtpXShydWxlKVxuICAgIH1cbn1cbiIsInZhciBtID0gKGZ1bmN0aW9uIGFwcCh3aW5kb3csIHVuZGVmaW5lZCkge1xyXG5cdHZhciBPQkpFQ1QgPSBcIltvYmplY3QgT2JqZWN0XVwiLCBBUlJBWSA9IFwiW29iamVjdCBBcnJheV1cIiwgU1RSSU5HID0gXCJbb2JqZWN0IFN0cmluZ11cIiwgRlVOQ1RJT04gPSBcImZ1bmN0aW9uXCI7XHJcblx0dmFyIHR5cGUgPSB7fS50b1N0cmluZztcclxuXHR2YXIgcGFyc2VyID0gLyg/OihefCN8XFwuKShbXiNcXC5cXFtcXF1dKykpfChcXFsuKz9cXF0pL2csIGF0dHJQYXJzZXIgPSAvXFxbKC4rPykoPzo9KFwifCd8KSguKj8pXFwyKT9cXF0vO1xyXG5cdHZhciB2b2lkRWxlbWVudHMgPSAvXihBUkVBfEJBU0V8QlJ8Q09MfENPTU1BTkR8RU1CRUR8SFJ8SU1HfElOUFVUfEtFWUdFTnxMSU5LfE1FVEF8UEFSQU18U09VUkNFfFRSQUNLfFdCUikkLztcclxuXHJcblx0Ly8gY2FjaGluZyBjb21tb25seSB1c2VkIHZhcmlhYmxlc1xyXG5cdHZhciAkZG9jdW1lbnQsICRsb2NhdGlvbiwgJHJlcXVlc3RBbmltYXRpb25GcmFtZSwgJGNhbmNlbEFuaW1hdGlvbkZyYW1lO1xyXG5cclxuXHQvLyBzZWxmIGludm9raW5nIGZ1bmN0aW9uIG5lZWRlZCBiZWNhdXNlIG9mIHRoZSB3YXkgbW9ja3Mgd29ya1xyXG5cdGZ1bmN0aW9uIGluaXRpYWxpemUod2luZG93KXtcclxuXHRcdCRkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcclxuXHRcdCRsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcclxuXHRcdCRjYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cuY2xlYXJUaW1lb3V0O1xyXG5cdFx0JHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LnNldFRpbWVvdXQ7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKHdpbmRvdyk7XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZWRlZiB7U3RyaW5nfSBUYWdcclxuXHQgKiBBIHN0cmluZyB0aGF0IGxvb2tzIGxpa2UgLT4gZGl2LmNsYXNzbmFtZSNpZFtwYXJhbT1vbmVdW3BhcmFtMj10d29dXHJcblx0ICogV2hpY2ggZGVzY3JpYmVzIGEgRE9NIG5vZGVcclxuXHQgKi9cclxuXHJcblx0LyoqXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1RhZ30gVGhlIERPTSBub2RlIHRhZ1xyXG5cdCAqIEBwYXJhbSB7T2JqZWN0PVtdfSBvcHRpb25hbCBrZXktdmFsdWUgcGFpcnMgdG8gYmUgbWFwcGVkIHRvIERPTSBhdHRyc1xyXG5cdCAqIEBwYXJhbSB7Li4ubU5vZGU9W119IFplcm8gb3IgbW9yZSBNaXRocmlsIGNoaWxkIG5vZGVzLiBDYW4gYmUgYW4gYXJyYXksIG9yIHNwbGF0IChvcHRpb25hbClcclxuXHQgKlxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIG0oKSB7XHJcblx0XHR2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuXHRcdHZhciBoYXNBdHRycyA9IGFyZ3NbMV0gIT0gbnVsbCAmJiB0eXBlLmNhbGwoYXJnc1sxXSkgPT09IE9CSkVDVCAmJiAhKFwidGFnXCIgaW4gYXJnc1sxXSkgJiYgIShcInN1YnRyZWVcIiBpbiBhcmdzWzFdKTtcclxuXHRcdHZhciBhdHRycyA9IGhhc0F0dHJzID8gYXJnc1sxXSA6IHt9O1xyXG5cdFx0dmFyIGNsYXNzQXR0ck5hbWUgPSBcImNsYXNzXCIgaW4gYXR0cnMgPyBcImNsYXNzXCIgOiBcImNsYXNzTmFtZVwiO1xyXG5cdFx0dmFyIGNlbGwgPSB7dGFnOiBcImRpdlwiLCBhdHRyczoge319O1xyXG5cdFx0dmFyIG1hdGNoLCBjbGFzc2VzID0gW107XHJcblx0XHRpZiAodHlwZS5jYWxsKGFyZ3NbMF0pICE9IFNUUklORykgdGhyb3cgbmV3IEVycm9yKFwic2VsZWN0b3IgaW4gbShzZWxlY3RvciwgYXR0cnMsIGNoaWxkcmVuKSBzaG91bGQgYmUgYSBzdHJpbmdcIilcclxuXHRcdHdoaWxlIChtYXRjaCA9IHBhcnNlci5leGVjKGFyZ3NbMF0pKSB7XHJcblx0XHRcdGlmIChtYXRjaFsxXSA9PT0gXCJcIiAmJiBtYXRjaFsyXSkgY2VsbC50YWcgPSBtYXRjaFsyXTtcclxuXHRcdFx0ZWxzZSBpZiAobWF0Y2hbMV0gPT09IFwiI1wiKSBjZWxsLmF0dHJzLmlkID0gbWF0Y2hbMl07XHJcblx0XHRcdGVsc2UgaWYgKG1hdGNoWzFdID09PSBcIi5cIikgY2xhc3Nlcy5wdXNoKG1hdGNoWzJdKTtcclxuXHRcdFx0ZWxzZSBpZiAobWF0Y2hbM11bMF0gPT09IFwiW1wiKSB7XHJcblx0XHRcdFx0dmFyIHBhaXIgPSBhdHRyUGFyc2VyLmV4ZWMobWF0Y2hbM10pO1xyXG5cdFx0XHRcdGNlbGwuYXR0cnNbcGFpclsxXV0gPSBwYWlyWzNdIHx8IChwYWlyWzJdID8gXCJcIiA6dHJ1ZSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKGNsYXNzZXMubGVuZ3RoID4gMCkgY2VsbC5hdHRyc1tjbGFzc0F0dHJOYW1lXSA9IGNsYXNzZXMuam9pbihcIiBcIik7XHJcblxyXG5cclxuXHRcdHZhciBjaGlsZHJlbiA9IGhhc0F0dHJzID8gYXJncy5zbGljZSgyKSA6IGFyZ3Muc2xpY2UoMSk7XHJcblx0XHRpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIHR5cGUuY2FsbChjaGlsZHJlblswXSkgPT09IEFSUkFZKSB7XHJcblx0XHRcdGNlbGwuY2hpbGRyZW4gPSBjaGlsZHJlblswXVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGNlbGwuY2hpbGRyZW4gPSBjaGlsZHJlblxyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAodmFyIGF0dHJOYW1lIGluIGF0dHJzKSB7XHJcblx0XHRcdGlmIChhdHRyTmFtZSA9PT0gY2xhc3NBdHRyTmFtZSkge1xyXG5cdFx0XHRcdHZhciBjbGFzc05hbWUgPSBjZWxsLmF0dHJzW2F0dHJOYW1lXVxyXG5cdFx0XHRcdGNlbGwuYXR0cnNbYXR0ck5hbWVdID0gKGNsYXNzTmFtZSAmJiBhdHRyc1thdHRyTmFtZV0gPyBjbGFzc05hbWUgKyBcIiBcIiA6IGNsYXNzTmFtZSB8fCBcIlwiKSArIGF0dHJzW2F0dHJOYW1lXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGNlbGwuYXR0cnNbYXR0ck5hbWVdID0gYXR0cnNbYXR0ck5hbWVdXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gY2VsbFxyXG5cdH1cclxuXHRmdW5jdGlvbiBidWlsZChwYXJlbnRFbGVtZW50LCBwYXJlbnRUYWcsIHBhcmVudENhY2hlLCBwYXJlbnRJbmRleCwgZGF0YSwgY2FjaGVkLCBzaG91bGRSZWF0dGFjaCwgaW5kZXgsIGVkaXRhYmxlLCBuYW1lc3BhY2UsIGNvbmZpZ3MpIHtcclxuXHRcdC8vYGJ1aWxkYCBpcyBhIHJlY3Vyc2l2ZSBmdW5jdGlvbiB0aGF0IG1hbmFnZXMgY3JlYXRpb24vZGlmZmluZy9yZW1vdmFsIG9mIERPTSBlbGVtZW50cyBiYXNlZCBvbiBjb21wYXJpc29uIGJldHdlZW4gYGRhdGFgIGFuZCBgY2FjaGVkYFxyXG5cdFx0Ly90aGUgZGlmZiBhbGdvcml0aG0gY2FuIGJlIHN1bW1hcml6ZWQgYXMgdGhpczpcclxuXHRcdC8vMSAtIGNvbXBhcmUgYGRhdGFgIGFuZCBgY2FjaGVkYFxyXG5cdFx0Ly8yIC0gaWYgdGhleSBhcmUgZGlmZmVyZW50LCBjb3B5IGBkYXRhYCB0byBgY2FjaGVkYCBhbmQgdXBkYXRlIHRoZSBET00gYmFzZWQgb24gd2hhdCB0aGUgZGlmZmVyZW5jZSBpc1xyXG5cdFx0Ly8zIC0gcmVjdXJzaXZlbHkgYXBwbHkgdGhpcyBhbGdvcml0aG0gZm9yIGV2ZXJ5IGFycmF5IGFuZCBmb3IgdGhlIGNoaWxkcmVuIG9mIGV2ZXJ5IHZpcnR1YWwgZWxlbWVudFxyXG5cclxuXHRcdC8vdGhlIGBjYWNoZWRgIGRhdGEgc3RydWN0dXJlIGlzIGVzc2VudGlhbGx5IHRoZSBzYW1lIGFzIHRoZSBwcmV2aW91cyByZWRyYXcncyBgZGF0YWAgZGF0YSBzdHJ1Y3R1cmUsIHdpdGggYSBmZXcgYWRkaXRpb25zOlxyXG5cdFx0Ly8tIGBjYWNoZWRgIGFsd2F5cyBoYXMgYSBwcm9wZXJ0eSBjYWxsZWQgYG5vZGVzYCwgd2hpY2ggaXMgYSBsaXN0IG9mIERPTSBlbGVtZW50cyB0aGF0IGNvcnJlc3BvbmQgdG8gdGhlIGRhdGEgcmVwcmVzZW50ZWQgYnkgdGhlIHJlc3BlY3RpdmUgdmlydHVhbCBlbGVtZW50XHJcblx0XHQvLy0gaW4gb3JkZXIgdG8gc3VwcG9ydCBhdHRhY2hpbmcgYG5vZGVzYCBhcyBhIHByb3BlcnR5IG9mIGBjYWNoZWRgLCBgY2FjaGVkYCBpcyAqYWx3YXlzKiBhIG5vbi1wcmltaXRpdmUgb2JqZWN0LCBpLmUuIGlmIHRoZSBkYXRhIHdhcyBhIHN0cmluZywgdGhlbiBjYWNoZWQgaXMgYSBTdHJpbmcgaW5zdGFuY2UuIElmIGRhdGEgd2FzIGBudWxsYCBvciBgdW5kZWZpbmVkYCwgY2FjaGVkIGlzIGBuZXcgU3RyaW5nKFwiXCIpYFxyXG5cdFx0Ly8tIGBjYWNoZWQgYWxzbyBoYXMgYSBgY29uZmlnQ29udGV4dGAgcHJvcGVydHksIHdoaWNoIGlzIHRoZSBzdGF0ZSBzdG9yYWdlIG9iamVjdCBleHBvc2VkIGJ5IGNvbmZpZyhlbGVtZW50LCBpc0luaXRpYWxpemVkLCBjb250ZXh0KVxyXG5cdFx0Ly8tIHdoZW4gYGNhY2hlZGAgaXMgYW4gT2JqZWN0LCBpdCByZXByZXNlbnRzIGEgdmlydHVhbCBlbGVtZW50OyB3aGVuIGl0J3MgYW4gQXJyYXksIGl0IHJlcHJlc2VudHMgYSBsaXN0IG9mIGVsZW1lbnRzOyB3aGVuIGl0J3MgYSBTdHJpbmcsIE51bWJlciBvciBCb29sZWFuLCBpdCByZXByZXNlbnRzIGEgdGV4dCBub2RlXHJcblxyXG5cdFx0Ly9gcGFyZW50RWxlbWVudGAgaXMgYSBET00gZWxlbWVudCB1c2VkIGZvciBXM0MgRE9NIEFQSSBjYWxsc1xyXG5cdFx0Ly9gcGFyZW50VGFnYCBpcyBvbmx5IHVzZWQgZm9yIGhhbmRsaW5nIGEgY29ybmVyIGNhc2UgZm9yIHRleHRhcmVhIHZhbHVlc1xyXG5cdFx0Ly9gcGFyZW50Q2FjaGVgIGlzIHVzZWQgdG8gcmVtb3ZlIG5vZGVzIGluIHNvbWUgbXVsdGktbm9kZSBjYXNlc1xyXG5cdFx0Ly9gcGFyZW50SW5kZXhgIGFuZCBgaW5kZXhgIGFyZSB1c2VkIHRvIGZpZ3VyZSBvdXQgdGhlIG9mZnNldCBvZiBub2Rlcy4gVGhleSdyZSBhcnRpZmFjdHMgZnJvbSBiZWZvcmUgYXJyYXlzIHN0YXJ0ZWQgYmVpbmcgZmxhdHRlbmVkIGFuZCBhcmUgbGlrZWx5IHJlZmFjdG9yYWJsZVxyXG5cdFx0Ly9gZGF0YWAgYW5kIGBjYWNoZWRgIGFyZSwgcmVzcGVjdGl2ZWx5LCB0aGUgbmV3IGFuZCBvbGQgbm9kZXMgYmVpbmcgZGlmZmVkXHJcblx0XHQvL2BzaG91bGRSZWF0dGFjaGAgaXMgYSBmbGFnIGluZGljYXRpbmcgd2hldGhlciBhIHBhcmVudCBub2RlIHdhcyByZWNyZWF0ZWQgKGlmIHNvLCBhbmQgaWYgdGhpcyBub2RlIGlzIHJldXNlZCwgdGhlbiB0aGlzIG5vZGUgbXVzdCByZWF0dGFjaCBpdHNlbGYgdG8gdGhlIG5ldyBwYXJlbnQpXHJcblx0XHQvL2BlZGl0YWJsZWAgaXMgYSBmbGFnIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgYW4gYW5jZXN0b3IgaXMgY29udGVudGVkaXRhYmxlXHJcblx0XHQvL2BuYW1lc3BhY2VgIGluZGljYXRlcyB0aGUgY2xvc2VzdCBIVE1MIG5hbWVzcGFjZSBhcyBpdCBjYXNjYWRlcyBkb3duIGZyb20gYW4gYW5jZXN0b3JcclxuXHRcdC8vYGNvbmZpZ3NgIGlzIGEgbGlzdCBvZiBjb25maWcgZnVuY3Rpb25zIHRvIHJ1biBhZnRlciB0aGUgdG9wbW9zdCBgYnVpbGRgIGNhbGwgZmluaXNoZXMgcnVubmluZ1xyXG5cclxuXHRcdC8vdGhlcmUncyBsb2dpYyB0aGF0IHJlbGllcyBvbiB0aGUgYXNzdW1wdGlvbiB0aGF0IG51bGwgYW5kIHVuZGVmaW5lZCBkYXRhIGFyZSBlcXVpdmFsZW50IHRvIGVtcHR5IHN0cmluZ3NcclxuXHRcdC8vLSB0aGlzIHByZXZlbnRzIGxpZmVjeWNsZSBzdXJwcmlzZXMgZnJvbSBwcm9jZWR1cmFsIGhlbHBlcnMgdGhhdCBtaXggaW1wbGljaXQgYW5kIGV4cGxpY2l0IHJldHVybiBzdGF0ZW1lbnRzIChlLmcuIGZ1bmN0aW9uIGZvbygpIHtpZiAoY29uZCkgcmV0dXJuIG0oXCJkaXZcIil9XHJcblx0XHQvLy0gaXQgc2ltcGxpZmllcyBkaWZmaW5nIGNvZGVcclxuXHRcdC8vZGF0YS50b1N0cmluZygpIGlzIG51bGwgaWYgZGF0YSBpcyB0aGUgcmV0dXJuIHZhbHVlIG9mIENvbnNvbGUubG9nIGluIEZpcmVmb3hcclxuXHRcdHRyeSB7aWYgKGRhdGEgPT0gbnVsbCB8fCBkYXRhLnRvU3RyaW5nKCkgPT0gbnVsbCkgZGF0YSA9IFwiXCI7fSBjYXRjaCAoZSkge2RhdGEgPSBcIlwifVxyXG5cdFx0aWYgKGRhdGEuc3VidHJlZSA9PT0gXCJyZXRhaW5cIikgcmV0dXJuIGNhY2hlZDtcclxuXHRcdHZhciBjYWNoZWRUeXBlID0gdHlwZS5jYWxsKGNhY2hlZCksIGRhdGFUeXBlID0gdHlwZS5jYWxsKGRhdGEpO1xyXG5cdFx0aWYgKGNhY2hlZCA9PSBudWxsIHx8IGNhY2hlZFR5cGUgIT09IGRhdGFUeXBlKSB7XHJcblx0XHRcdGlmIChjYWNoZWQgIT0gbnVsbCkge1xyXG5cdFx0XHRcdGlmIChwYXJlbnRDYWNoZSAmJiBwYXJlbnRDYWNoZS5ub2Rlcykge1xyXG5cdFx0XHRcdFx0dmFyIG9mZnNldCA9IGluZGV4IC0gcGFyZW50SW5kZXg7XHJcblx0XHRcdFx0XHR2YXIgZW5kID0gb2Zmc2V0ICsgKGRhdGFUeXBlID09PSBBUlJBWSA/IGRhdGEgOiBjYWNoZWQubm9kZXMpLmxlbmd0aDtcclxuXHRcdFx0XHRcdGNsZWFyKHBhcmVudENhY2hlLm5vZGVzLnNsaWNlKG9mZnNldCwgZW5kKSwgcGFyZW50Q2FjaGUuc2xpY2Uob2Zmc2V0LCBlbmQpKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChjYWNoZWQubm9kZXMpIGNsZWFyKGNhY2hlZC5ub2RlcywgY2FjaGVkKVxyXG5cdFx0XHR9XHJcblx0XHRcdGNhY2hlZCA9IG5ldyBkYXRhLmNvbnN0cnVjdG9yO1xyXG5cdFx0XHRpZiAoY2FjaGVkLnRhZykgY2FjaGVkID0ge307IC8vaWYgY29uc3RydWN0b3IgY3JlYXRlcyBhIHZpcnR1YWwgZG9tIGVsZW1lbnQsIHVzZSBhIGJsYW5rIG9iamVjdCBhcyB0aGUgYmFzZSBjYWNoZWQgbm9kZSBpbnN0ZWFkIG9mIGNvcHlpbmcgdGhlIHZpcnR1YWwgZWwgKCMyNzcpXHJcblx0XHRcdGNhY2hlZC5ub2RlcyA9IFtdXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGRhdGFUeXBlID09PSBBUlJBWSkge1xyXG5cdFx0XHQvL3JlY3Vyc2l2ZWx5IGZsYXR0ZW4gYXJyYXlcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRpZiAodHlwZS5jYWxsKGRhdGFbaV0pID09PSBBUlJBWSkge1xyXG5cdFx0XHRcdFx0ZGF0YSA9IGRhdGEuY29uY2F0LmFwcGx5KFtdLCBkYXRhKTtcclxuXHRcdFx0XHRcdGktLSAvL2NoZWNrIGN1cnJlbnQgaW5kZXggYWdhaW4gYW5kIGZsYXR0ZW4gdW50aWwgdGhlcmUgYXJlIG5vIG1vcmUgbmVzdGVkIGFycmF5cyBhdCB0aGF0IGluZGV4XHJcblx0XHRcdFx0XHRsZW4gPSBkYXRhLmxlbmd0aFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dmFyIG5vZGVzID0gW10sIGludGFjdCA9IGNhY2hlZC5sZW5ndGggPT09IGRhdGEubGVuZ3RoLCBzdWJBcnJheUNvdW50ID0gMDtcclxuXHJcblx0XHRcdC8va2V5cyBhbGdvcml0aG06IHNvcnQgZWxlbWVudHMgd2l0aG91dCByZWNyZWF0aW5nIHRoZW0gaWYga2V5cyBhcmUgcHJlc2VudFxyXG5cdFx0XHQvLzEpIGNyZWF0ZSBhIG1hcCBvZiBhbGwgZXhpc3Rpbmcga2V5cywgYW5kIG1hcmsgYWxsIGZvciBkZWxldGlvblxyXG5cdFx0XHQvLzIpIGFkZCBuZXcga2V5cyB0byBtYXAgYW5kIG1hcmsgdGhlbSBmb3IgYWRkaXRpb25cclxuXHRcdFx0Ly8zKSBpZiBrZXkgZXhpc3RzIGluIG5ldyBsaXN0LCBjaGFuZ2UgYWN0aW9uIGZyb20gZGVsZXRpb24gdG8gYSBtb3ZlXHJcblx0XHRcdC8vNCkgZm9yIGVhY2gga2V5LCBoYW5kbGUgaXRzIGNvcnJlc3BvbmRpbmcgYWN0aW9uIGFzIG1hcmtlZCBpbiBwcmV2aW91cyBzdGVwc1xyXG5cdFx0XHQvLzUpIGNvcHkgdW5rZXllZCBpdGVtcyBpbnRvIHRoZWlyIHJlc3BlY3RpdmUgZ2Fwc1xyXG5cdFx0XHR2YXIgREVMRVRJT04gPSAxLCBJTlNFUlRJT04gPSAyICwgTU9WRSA9IDM7XHJcblx0XHRcdHZhciBleGlzdGluZyA9IHt9LCB1bmtleWVkID0gW10sIHNob3VsZE1haW50YWluSWRlbnRpdGllcyA9IGZhbHNlO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNhY2hlZC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmIChjYWNoZWRbaV0gJiYgY2FjaGVkW2ldLmF0dHJzICYmIGNhY2hlZFtpXS5hdHRycy5rZXkgIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0c2hvdWxkTWFpbnRhaW5JZGVudGl0aWVzID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGV4aXN0aW5nW2NhY2hlZFtpXS5hdHRycy5rZXldID0ge2FjdGlvbjogREVMRVRJT04sIGluZGV4OiBpfVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgZ3VpZCA9IDBcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRpZiAoZGF0YVtpXSAmJiBkYXRhW2ldLmF0dHJzICYmIGRhdGFbaV0uYXR0cnMua2V5ID09IG51bGwpIGRhdGFbaV0uYXR0cnMua2V5ID0gXCJfX21pdGhyaWxfX1wiICsgZ3VpZCsrXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHNob3VsZE1haW50YWluSWRlbnRpdGllcykge1xyXG5cdFx0XHRcdGlmIChkYXRhLmluZGV4T2YobnVsbCkgPiAtMSkgZGF0YSA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uKHgpIHtyZXR1cm4geCAhPSBudWxsfSlcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YXIga2V5c0RpZmZlciA9IGZhbHNlXHJcblx0XHRcdFx0aWYgKGRhdGEubGVuZ3RoICE9IGNhY2hlZC5sZW5ndGgpIGtleXNEaWZmZXIgPSB0cnVlXHJcblx0XHRcdFx0ZWxzZSBmb3IgKHZhciBpID0gMCwgY2FjaGVkQ2VsbCwgZGF0YUNlbGw7IGNhY2hlZENlbGwgPSBjYWNoZWRbaV0sIGRhdGFDZWxsID0gZGF0YVtpXTsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZiAoY2FjaGVkQ2VsbC5hdHRycyAmJiBkYXRhQ2VsbC5hdHRycyAmJiBjYWNoZWRDZWxsLmF0dHJzLmtleSAhPSBkYXRhQ2VsbC5hdHRycy5rZXkpIHtcclxuXHRcdFx0XHRcdFx0a2V5c0RpZmZlciA9IHRydWVcclxuXHRcdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKGtleXNEaWZmZXIpIHtcclxuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSBkYXRhLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdGlmIChkYXRhW2ldICYmIGRhdGFbaV0uYXR0cnMpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YVtpXS5hdHRycy5rZXkgIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGtleSA9IGRhdGFbaV0uYXR0cnMua2V5O1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFleGlzdGluZ1trZXldKSBleGlzdGluZ1trZXldID0ge2FjdGlvbjogSU5TRVJUSU9OLCBpbmRleDogaX07XHJcblx0XHRcdFx0XHRcdFx0XHRlbHNlIGV4aXN0aW5nW2tleV0gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGlvbjogTU9WRSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aW5kZXg6IGksXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZyb206IGV4aXN0aW5nW2tleV0uaW5kZXgsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQ6IGNhY2hlZC5ub2Rlc1tleGlzdGluZ1trZXldLmluZGV4XSB8fCAkZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbHNlIHVua2V5ZWQucHVzaCh7aW5kZXg6IGksIGVsZW1lbnQ6IHBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1tpXSB8fCAkZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKX0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHZhciBhY3Rpb25zID0gW11cclxuXHRcdFx0XHRcdGZvciAodmFyIHByb3AgaW4gZXhpc3RpbmcpIGFjdGlvbnMucHVzaChleGlzdGluZ1twcm9wXSlcclxuXHRcdFx0XHRcdHZhciBjaGFuZ2VzID0gYWN0aW9ucy5zb3J0KHNvcnRDaGFuZ2VzKTtcclxuXHRcdFx0XHRcdHZhciBuZXdDYWNoZWQgPSBuZXcgQXJyYXkoY2FjaGVkLmxlbmd0aClcclxuXHRcdFx0XHRcdG5ld0NhY2hlZC5ub2RlcyA9IGNhY2hlZC5ub2Rlcy5zbGljZSgpXHJcblxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIGNoYW5nZTsgY2hhbmdlID0gY2hhbmdlc1tpXTsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdGlmIChjaGFuZ2UuYWN0aW9uID09PSBERUxFVElPTikge1xyXG5cdFx0XHRcdFx0XHRcdGNsZWFyKGNhY2hlZFtjaGFuZ2UuaW5kZXhdLm5vZGVzLCBjYWNoZWRbY2hhbmdlLmluZGV4XSk7XHJcblx0XHRcdFx0XHRcdFx0bmV3Q2FjaGVkLnNwbGljZShjaGFuZ2UuaW5kZXgsIDEpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKGNoYW5nZS5hY3Rpb24gPT09IElOU0VSVElPTikge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBkdW1teSA9ICRkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRcdFx0XHRcdGR1bW15LmtleSA9IGRhdGFbY2hhbmdlLmluZGV4XS5hdHRycy5rZXk7XHJcblx0XHRcdFx0XHRcdFx0cGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoZHVtbXksIHBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1tjaGFuZ2UuaW5kZXhdIHx8IG51bGwpO1xyXG5cdFx0XHRcdFx0XHRcdG5ld0NhY2hlZC5zcGxpY2UoY2hhbmdlLmluZGV4LCAwLCB7YXR0cnM6IHtrZXk6IGRhdGFbY2hhbmdlLmluZGV4XS5hdHRycy5rZXl9LCBub2RlczogW2R1bW15XX0pXHJcblx0XHRcdFx0XHRcdFx0bmV3Q2FjaGVkLm5vZGVzW2NoYW5nZS5pbmRleF0gPSBkdW1teVxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoY2hhbmdlLmFjdGlvbiA9PT0gTU9WRSkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChwYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbY2hhbmdlLmluZGV4XSAhPT0gY2hhbmdlLmVsZW1lbnQgJiYgY2hhbmdlLmVsZW1lbnQgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNoYW5nZS5lbGVtZW50LCBwYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbY2hhbmdlLmluZGV4XSB8fCBudWxsKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRuZXdDYWNoZWRbY2hhbmdlLmluZGV4XSA9IGNhY2hlZFtjaGFuZ2UuZnJvbV1cclxuXHRcdFx0XHRcdFx0XHRuZXdDYWNoZWQubm9kZXNbY2hhbmdlLmluZGV4XSA9IGNoYW5nZS5lbGVtZW50XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSB1bmtleWVkLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdHZhciBjaGFuZ2UgPSB1bmtleWVkW2ldO1xyXG5cdFx0XHRcdFx0XHRwYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShjaGFuZ2UuZWxlbWVudCwgcGFyZW50RWxlbWVudC5jaGlsZE5vZGVzW2NoYW5nZS5pbmRleF0gfHwgbnVsbCk7XHJcblx0XHRcdFx0XHRcdG5ld0NhY2hlZFtjaGFuZ2UuaW5kZXhdID0gY2FjaGVkW2NoYW5nZS5pbmRleF1cclxuXHRcdFx0XHRcdFx0bmV3Q2FjaGVkLm5vZGVzW2NoYW5nZS5pbmRleF0gPSBjaGFuZ2UuZWxlbWVudFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y2FjaGVkID0gbmV3Q2FjaGVkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQvL2VuZCBrZXkgYWxnb3JpdGhtXHJcblxyXG5cdFx0XHRmb3IgKHZhciBpID0gMCwgY2FjaGVDb3VudCA9IDAsIGxlbiA9IGRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHQvL2RpZmYgZWFjaCBpdGVtIGluIHRoZSBhcnJheVxyXG5cdFx0XHRcdHZhciBpdGVtID0gYnVpbGQocGFyZW50RWxlbWVudCwgcGFyZW50VGFnLCBjYWNoZWQsIGluZGV4LCBkYXRhW2ldLCBjYWNoZWRbY2FjaGVDb3VudF0sIHNob3VsZFJlYXR0YWNoLCBpbmRleCArIHN1YkFycmF5Q291bnQgfHwgc3ViQXJyYXlDb3VudCwgZWRpdGFibGUsIG5hbWVzcGFjZSwgY29uZmlncyk7XHJcblx0XHRcdFx0aWYgKGl0ZW0gPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcblx0XHRcdFx0aWYgKCFpdGVtLm5vZGVzLmludGFjdCkgaW50YWN0ID0gZmFsc2U7XHJcblx0XHRcdFx0aWYgKGl0ZW0uJHRydXN0ZWQpIHtcclxuXHRcdFx0XHRcdC8vZml4IG9mZnNldCBvZiBuZXh0IGVsZW1lbnQgaWYgaXRlbSB3YXMgYSB0cnVzdGVkIHN0cmluZyB3LyBtb3JlIHRoYW4gb25lIGh0bWwgZWxlbWVudFxyXG5cdFx0XHRcdFx0Ly90aGUgZmlyc3QgY2xhdXNlIGluIHRoZSByZWdleHAgbWF0Y2hlcyBlbGVtZW50c1xyXG5cdFx0XHRcdFx0Ly90aGUgc2Vjb25kIGNsYXVzZSAoYWZ0ZXIgdGhlIHBpcGUpIG1hdGNoZXMgdGV4dCBub2Rlc1xyXG5cdFx0XHRcdFx0c3ViQXJyYXlDb3VudCArPSAoaXRlbS5tYXRjaCgvPFteXFwvXXxcXD5cXHMqW148XS9nKSB8fCBbMF0pLmxlbmd0aFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHN1YkFycmF5Q291bnQgKz0gdHlwZS5jYWxsKGl0ZW0pID09PSBBUlJBWSA/IGl0ZW0ubGVuZ3RoIDogMTtcclxuXHRcdFx0XHRjYWNoZWRbY2FjaGVDb3VudCsrXSA9IGl0ZW1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIWludGFjdCkge1xyXG5cdFx0XHRcdC8vZGlmZiB0aGUgYXJyYXkgaXRzZWxmXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly91cGRhdGUgdGhlIGxpc3Qgb2YgRE9NIG5vZGVzIGJ5IGNvbGxlY3RpbmcgdGhlIG5vZGVzIGZyb20gZWFjaCBpdGVtXHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdGlmIChjYWNoZWRbaV0gIT0gbnVsbCkgbm9kZXMucHVzaC5hcHBseShub2RlcywgY2FjaGVkW2ldLm5vZGVzKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvL3JlbW92ZSBpdGVtcyBmcm9tIHRoZSBlbmQgb2YgdGhlIGFycmF5IGlmIHRoZSBuZXcgYXJyYXkgaXMgc2hvcnRlciB0aGFuIHRoZSBvbGQgb25lXHJcblx0XHRcdFx0Ly9pZiBlcnJvcnMgZXZlciBoYXBwZW4gaGVyZSwgdGhlIGlzc3VlIGlzIG1vc3QgbGlrZWx5IGEgYnVnIGluIHRoZSBjb25zdHJ1Y3Rpb24gb2YgdGhlIGBjYWNoZWRgIGRhdGEgc3RydWN0dXJlIHNvbWV3aGVyZSBlYXJsaWVyIGluIHRoZSBwcm9ncmFtXHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIG5vZGU7IG5vZGUgPSBjYWNoZWQubm9kZXNbaV07IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKG5vZGUucGFyZW50Tm9kZSAhPSBudWxsICYmIG5vZGVzLmluZGV4T2Yobm9kZSkgPCAwKSBjbGVhcihbbm9kZV0sIFtjYWNoZWRbaV1dKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZGF0YS5sZW5ndGggPCBjYWNoZWQubGVuZ3RoKSBjYWNoZWQubGVuZ3RoID0gZGF0YS5sZW5ndGg7XHJcblx0XHRcdFx0Y2FjaGVkLm5vZGVzID0gbm9kZXNcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZGF0YSAhPSBudWxsICYmIGRhdGFUeXBlID09PSBPQkpFQ1QpIHtcclxuXHRcdFx0aWYgKCFkYXRhLmF0dHJzKSBkYXRhLmF0dHJzID0ge307XHJcblx0XHRcdGlmICghY2FjaGVkLmF0dHJzKSBjYWNoZWQuYXR0cnMgPSB7fTtcclxuXHJcblx0XHRcdHZhciBkYXRhQXR0cktleXMgPSBPYmplY3Qua2V5cyhkYXRhLmF0dHJzKVxyXG5cdFx0XHR2YXIgaGFzS2V5cyA9IGRhdGFBdHRyS2V5cy5sZW5ndGggPiAoXCJrZXlcIiBpbiBkYXRhLmF0dHJzID8gMSA6IDApXHJcblx0XHRcdC8vaWYgYW4gZWxlbWVudCBpcyBkaWZmZXJlbnQgZW5vdWdoIGZyb20gdGhlIG9uZSBpbiBjYWNoZSwgcmVjcmVhdGUgaXRcclxuXHRcdFx0aWYgKGRhdGEudGFnICE9IGNhY2hlZC50YWcgfHwgZGF0YUF0dHJLZXlzLmpvaW4oKSAhPSBPYmplY3Qua2V5cyhjYWNoZWQuYXR0cnMpLmpvaW4oKSB8fCBkYXRhLmF0dHJzLmlkICE9IGNhY2hlZC5hdHRycy5pZCB8fCAobS5yZWRyYXcuc3RyYXRlZ3koKSA9PSBcImFsbFwiICYmIGNhY2hlZC5jb25maWdDb250ZXh0ICYmIGNhY2hlZC5jb25maWdDb250ZXh0LnJldGFpbiAhPT0gdHJ1ZSkgfHwgKG0ucmVkcmF3LnN0cmF0ZWd5KCkgPT0gXCJkaWZmXCIgJiYgY2FjaGVkLmNvbmZpZ0NvbnRleHQgJiYgY2FjaGVkLmNvbmZpZ0NvbnRleHQucmV0YWluID09PSBmYWxzZSkpIHtcclxuXHRcdFx0XHRpZiAoY2FjaGVkLm5vZGVzLmxlbmd0aCkgY2xlYXIoY2FjaGVkLm5vZGVzKTtcclxuXHRcdFx0XHRpZiAoY2FjaGVkLmNvbmZpZ0NvbnRleHQgJiYgdHlwZW9mIGNhY2hlZC5jb25maWdDb250ZXh0Lm9udW5sb2FkID09PSBGVU5DVElPTikgY2FjaGVkLmNvbmZpZ0NvbnRleHQub251bmxvYWQoKVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlLmNhbGwoZGF0YS50YWcpICE9IFNUUklORykgcmV0dXJuO1xyXG5cclxuXHRcdFx0dmFyIG5vZGUsIGlzTmV3ID0gY2FjaGVkLm5vZGVzLmxlbmd0aCA9PT0gMDtcclxuXHRcdFx0aWYgKGRhdGEuYXR0cnMueG1sbnMpIG5hbWVzcGFjZSA9IGRhdGEuYXR0cnMueG1sbnM7XHJcblx0XHRcdGVsc2UgaWYgKGRhdGEudGFnID09PSBcInN2Z1wiKSBuYW1lc3BhY2UgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcblx0XHRcdGVsc2UgaWYgKGRhdGEudGFnID09PSBcIm1hdGhcIikgbmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCI7XHJcblx0XHRcdGlmIChpc05ldykge1xyXG5cdFx0XHRcdGlmIChkYXRhLmF0dHJzLmlzKSBub2RlID0gbmFtZXNwYWNlID09PSB1bmRlZmluZWQgPyAkZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkYXRhLnRhZywgZGF0YS5hdHRycy5pcykgOiAkZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgZGF0YS50YWcsIGRhdGEuYXR0cnMuaXMpO1xyXG5cdFx0XHRcdGVsc2Ugbm9kZSA9IG5hbWVzcGFjZSA9PT0gdW5kZWZpbmVkID8gJGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZGF0YS50YWcpIDogJGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsIGRhdGEudGFnKTtcclxuXHRcdFx0XHRjYWNoZWQgPSB7XHJcblx0XHRcdFx0XHR0YWc6IGRhdGEudGFnLFxyXG5cdFx0XHRcdFx0Ly9zZXQgYXR0cmlidXRlcyBmaXJzdCwgdGhlbiBjcmVhdGUgY2hpbGRyZW5cclxuXHRcdFx0XHRcdGF0dHJzOiBoYXNLZXlzID8gc2V0QXR0cmlidXRlcyhub2RlLCBkYXRhLnRhZywgZGF0YS5hdHRycywge30sIG5hbWVzcGFjZSkgOiBkYXRhLmF0dHJzLFxyXG5cdFx0XHRcdFx0Y2hpbGRyZW46IGRhdGEuY2hpbGRyZW4gIT0gbnVsbCAmJiBkYXRhLmNoaWxkcmVuLmxlbmd0aCA+IDAgP1xyXG5cdFx0XHRcdFx0XHRidWlsZChub2RlLCBkYXRhLnRhZywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGRhdGEuY2hpbGRyZW4sIGNhY2hlZC5jaGlsZHJlbiwgdHJ1ZSwgMCwgZGF0YS5hdHRycy5jb250ZW50ZWRpdGFibGUgPyBub2RlIDogZWRpdGFibGUsIG5hbWVzcGFjZSwgY29uZmlncykgOlxyXG5cdFx0XHRcdFx0XHRkYXRhLmNoaWxkcmVuLFxyXG5cdFx0XHRcdFx0bm9kZXM6IFtub2RlXVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0aWYgKGNhY2hlZC5jaGlsZHJlbiAmJiAhY2FjaGVkLmNoaWxkcmVuLm5vZGVzKSBjYWNoZWQuY2hpbGRyZW4ubm9kZXMgPSBbXTtcclxuXHRcdFx0XHQvL2VkZ2UgY2FzZTogc2V0dGluZyB2YWx1ZSBvbiA8c2VsZWN0PiBkb2Vzbid0IHdvcmsgYmVmb3JlIGNoaWxkcmVuIGV4aXN0LCBzbyBzZXQgaXQgYWdhaW4gYWZ0ZXIgY2hpbGRyZW4gaGF2ZSBiZWVuIGNyZWF0ZWRcclxuXHRcdFx0XHRpZiAoZGF0YS50YWcgPT09IFwic2VsZWN0XCIgJiYgZGF0YS5hdHRycy52YWx1ZSkgc2V0QXR0cmlidXRlcyhub2RlLCBkYXRhLnRhZywge3ZhbHVlOiBkYXRhLmF0dHJzLnZhbHVlfSwge30sIG5hbWVzcGFjZSk7XHJcblx0XHRcdFx0cGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUobm9kZSwgcGFyZW50RWxlbWVudC5jaGlsZE5vZGVzW2luZGV4XSB8fCBudWxsKVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdG5vZGUgPSBjYWNoZWQubm9kZXNbMF07XHJcblx0XHRcdFx0aWYgKGhhc0tleXMpIHNldEF0dHJpYnV0ZXMobm9kZSwgZGF0YS50YWcsIGRhdGEuYXR0cnMsIGNhY2hlZC5hdHRycywgbmFtZXNwYWNlKTtcclxuXHRcdFx0XHRjYWNoZWQuY2hpbGRyZW4gPSBidWlsZChub2RlLCBkYXRhLnRhZywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGRhdGEuY2hpbGRyZW4sIGNhY2hlZC5jaGlsZHJlbiwgZmFsc2UsIDAsIGRhdGEuYXR0cnMuY29udGVudGVkaXRhYmxlID8gbm9kZSA6IGVkaXRhYmxlLCBuYW1lc3BhY2UsIGNvbmZpZ3MpO1xyXG5cdFx0XHRcdGNhY2hlZC5ub2Rlcy5pbnRhY3QgPSB0cnVlO1xyXG5cdFx0XHRcdGlmIChzaG91bGRSZWF0dGFjaCA9PT0gdHJ1ZSAmJiBub2RlICE9IG51bGwpIHBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIHBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1tpbmRleF0gfHwgbnVsbClcclxuXHRcdFx0fVxyXG5cdFx0XHQvL3NjaGVkdWxlIGNvbmZpZ3MgdG8gYmUgY2FsbGVkLiBUaGV5IGFyZSBjYWxsZWQgYWZ0ZXIgYGJ1aWxkYCBmaW5pc2hlcyBydW5uaW5nXHJcblx0XHRcdGlmICh0eXBlb2YgZGF0YS5hdHRyc1tcImNvbmZpZ1wiXSA9PT0gRlVOQ1RJT04pIHtcclxuXHRcdFx0XHR2YXIgY29udGV4dCA9IGNhY2hlZC5jb25maWdDb250ZXh0ID0gY2FjaGVkLmNvbmZpZ0NvbnRleHQgfHwge3JldGFpbjogKG0ucmVkcmF3LnN0cmF0ZWd5KCkgPT0gXCJkaWZmXCIpIHx8IHVuZGVmaW5lZH07XHJcblxyXG5cdFx0XHRcdC8vIGJpbmRcclxuXHRcdFx0XHR2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbihkYXRhLCBhcmdzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBkYXRhLmF0dHJzW1wiY29uZmlnXCJdLmFwcGx5KGRhdGEsIGFyZ3MpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRjb25maWdzLnB1c2goY2FsbGJhY2soZGF0YSwgW25vZGUsICFpc05ldywgY29udGV4dCwgY2FjaGVkXSkpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHR5cGVvZiBkYXRhICE9IEZVTkNUSU9OKSB7XHJcblx0XHRcdC8vaGFuZGxlIHRleHQgbm9kZXNcclxuXHRcdFx0dmFyIG5vZGVzO1xyXG5cdFx0XHRpZiAoY2FjaGVkLm5vZGVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdGlmIChkYXRhLiR0cnVzdGVkKSB7XHJcblx0XHRcdFx0XHRub2RlcyA9IGluamVjdEhUTUwocGFyZW50RWxlbWVudCwgaW5kZXgsIGRhdGEpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0bm9kZXMgPSBbJGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpXTtcclxuXHRcdFx0XHRcdGlmICghcGFyZW50RWxlbWVudC5ub2RlTmFtZS5tYXRjaCh2b2lkRWxlbWVudHMpKSBwYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShub2Rlc1swXSwgcGFyZW50RWxlbWVudC5jaGlsZE5vZGVzW2luZGV4XSB8fCBudWxsKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYWNoZWQgPSBcInN0cmluZyBudW1iZXIgYm9vbGVhblwiLmluZGV4T2YodHlwZW9mIGRhdGEpID4gLTEgPyBuZXcgZGF0YS5jb25zdHJ1Y3RvcihkYXRhKSA6IGRhdGE7XHJcblx0XHRcdFx0Y2FjaGVkLm5vZGVzID0gbm9kZXNcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChjYWNoZWQudmFsdWVPZigpICE9PSBkYXRhLnZhbHVlT2YoKSB8fCBzaG91bGRSZWF0dGFjaCA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdG5vZGVzID0gY2FjaGVkLm5vZGVzO1xyXG5cdFx0XHRcdGlmICghZWRpdGFibGUgfHwgZWRpdGFibGUgIT09ICRkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XHJcblx0XHRcdFx0XHRpZiAoZGF0YS4kdHJ1c3RlZCkge1xyXG5cdFx0XHRcdFx0XHRjbGVhcihub2RlcywgY2FjaGVkKTtcclxuXHRcdFx0XHRcdFx0bm9kZXMgPSBpbmplY3RIVE1MKHBhcmVudEVsZW1lbnQsIGluZGV4LCBkYXRhKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdC8vY29ybmVyIGNhc2U6IHJlcGxhY2luZyB0aGUgbm9kZVZhbHVlIG9mIGEgdGV4dCBub2RlIHRoYXQgaXMgYSBjaGlsZCBvZiBhIHRleHRhcmVhL2NvbnRlbnRlZGl0YWJsZSBkb2Vzbid0IHdvcmtcclxuXHRcdFx0XHRcdFx0Ly93ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgdmFsdWUgcHJvcGVydHkgb2YgdGhlIHBhcmVudCB0ZXh0YXJlYSBvciB0aGUgaW5uZXJIVE1MIG9mIHRoZSBjb250ZW50ZWRpdGFibGUgZWxlbWVudCBpbnN0ZWFkXHJcblx0XHRcdFx0XHRcdGlmIChwYXJlbnRUYWcgPT09IFwidGV4dGFyZWFcIikgcGFyZW50RWxlbWVudC52YWx1ZSA9IGRhdGE7XHJcblx0XHRcdFx0XHRcdGVsc2UgaWYgKGVkaXRhYmxlKSBlZGl0YWJsZS5pbm5lckhUTUwgPSBkYXRhO1xyXG5cdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAobm9kZXNbMF0ubm9kZVR5cGUgPT09IDEgfHwgbm9kZXMubGVuZ3RoID4gMSkgeyAvL3dhcyBhIHRydXN0ZWQgc3RyaW5nXHJcblx0XHRcdFx0XHRcdFx0XHRjbGVhcihjYWNoZWQubm9kZXMsIGNhY2hlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRub2RlcyA9IFskZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSldXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5vZGVzWzBdLCBwYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbaW5kZXhdIHx8IG51bGwpO1xyXG5cdFx0XHRcdFx0XHRcdG5vZGVzWzBdLm5vZGVWYWx1ZSA9IGRhdGFcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYWNoZWQgPSBuZXcgZGF0YS5jb25zdHJ1Y3RvcihkYXRhKTtcclxuXHRcdFx0XHRjYWNoZWQubm9kZXMgPSBub2Rlc1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgY2FjaGVkLm5vZGVzLmludGFjdCA9IHRydWVcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY2FjaGVkXHJcblx0fVxyXG5cdGZ1bmN0aW9uIHNvcnRDaGFuZ2VzKGEsIGIpIHtyZXR1cm4gYS5hY3Rpb24gLSBiLmFjdGlvbiB8fCBhLmluZGV4IC0gYi5pbmRleH1cclxuXHRmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKG5vZGUsIHRhZywgZGF0YUF0dHJzLCBjYWNoZWRBdHRycywgbmFtZXNwYWNlKSB7XHJcblx0XHRmb3IgKHZhciBhdHRyTmFtZSBpbiBkYXRhQXR0cnMpIHtcclxuXHRcdFx0dmFyIGRhdGFBdHRyID0gZGF0YUF0dHJzW2F0dHJOYW1lXTtcclxuXHRcdFx0dmFyIGNhY2hlZEF0dHIgPSBjYWNoZWRBdHRyc1thdHRyTmFtZV07XHJcblx0XHRcdGlmICghKGF0dHJOYW1lIGluIGNhY2hlZEF0dHJzKSB8fCAoY2FjaGVkQXR0ciAhPT0gZGF0YUF0dHIpKSB7XHJcblx0XHRcdFx0Y2FjaGVkQXR0cnNbYXR0ck5hbWVdID0gZGF0YUF0dHI7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdC8vYGNvbmZpZ2AgaXNuJ3QgYSByZWFsIGF0dHJpYnV0ZXMsIHNvIGlnbm9yZSBpdFxyXG5cdFx0XHRcdFx0aWYgKGF0dHJOYW1lID09PSBcImNvbmZpZ1wiIHx8IGF0dHJOYW1lID09IFwia2V5XCIpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0Ly9ob29rIGV2ZW50IGhhbmRsZXJzIHRvIHRoZSBhdXRvLXJlZHJhd2luZyBzeXN0ZW1cclxuXHRcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkYXRhQXR0ciA9PT0gRlVOQ1RJT04gJiYgYXR0ck5hbWUuaW5kZXhPZihcIm9uXCIpID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdG5vZGVbYXR0ck5hbWVdID0gYXV0b3JlZHJhdyhkYXRhQXR0ciwgbm9kZSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vaGFuZGxlIGBzdHlsZTogey4uLn1gXHJcblx0XHRcdFx0XHRlbHNlIGlmIChhdHRyTmFtZSA9PT0gXCJzdHlsZVwiICYmIGRhdGFBdHRyICE9IG51bGwgJiYgdHlwZS5jYWxsKGRhdGFBdHRyKSA9PT0gT0JKRUNUKSB7XHJcblx0XHRcdFx0XHRcdGZvciAodmFyIHJ1bGUgaW4gZGF0YUF0dHIpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoY2FjaGVkQXR0ciA9PSBudWxsIHx8IGNhY2hlZEF0dHJbcnVsZV0gIT09IGRhdGFBdHRyW3J1bGVdKSBub2RlLnN0eWxlW3J1bGVdID0gZGF0YUF0dHJbcnVsZV1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBydWxlIGluIGNhY2hlZEF0dHIpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoIShydWxlIGluIGRhdGFBdHRyKSkgbm9kZS5zdHlsZVtydWxlXSA9IFwiXCJcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly9oYW5kbGUgU1ZHXHJcblx0XHRcdFx0XHRlbHNlIGlmIChuYW1lc3BhY2UgIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoYXR0ck5hbWUgPT09IFwiaHJlZlwiKSBub2RlLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBcImhyZWZcIiwgZGF0YUF0dHIpO1xyXG5cdFx0XHRcdFx0XHRlbHNlIGlmIChhdHRyTmFtZSA9PT0gXCJjbGFzc05hbWVcIikgbm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBkYXRhQXR0cik7XHJcblx0XHRcdFx0XHRcdGVsc2Ugbm9kZS5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGRhdGFBdHRyKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly9oYW5kbGUgY2FzZXMgdGhhdCBhcmUgcHJvcGVydGllcyAoYnV0IGlnbm9yZSBjYXNlcyB3aGVyZSB3ZSBzaG91bGQgdXNlIHNldEF0dHJpYnV0ZSBpbnN0ZWFkKVxyXG5cdFx0XHRcdFx0Ly8tIGxpc3QgYW5kIGZvcm0gYXJlIHR5cGljYWxseSB1c2VkIGFzIHN0cmluZ3MsIGJ1dCBhcmUgRE9NIGVsZW1lbnQgcmVmZXJlbmNlcyBpbiBqc1xyXG5cdFx0XHRcdFx0Ly8tIHdoZW4gdXNpbmcgQ1NTIHNlbGVjdG9ycyAoZS5nLiBgbShcIltzdHlsZT0nJ11cIilgKSwgc3R5bGUgaXMgdXNlZCBhcyBhIHN0cmluZywgYnV0IGl0J3MgYW4gb2JqZWN0IGluIGpzXHJcblx0XHRcdFx0XHRlbHNlIGlmIChhdHRyTmFtZSBpbiBub2RlICYmICEoYXR0ck5hbWUgPT09IFwibGlzdFwiIHx8IGF0dHJOYW1lID09PSBcInN0eWxlXCIgfHwgYXR0ck5hbWUgPT09IFwiZm9ybVwiIHx8IGF0dHJOYW1lID09PSBcInR5cGVcIiB8fCBhdHRyTmFtZSA9PT0gXCJ3aWR0aFwiIHx8IGF0dHJOYW1lID09PSBcImhlaWdodFwiKSkge1xyXG5cdFx0XHRcdFx0XHQvLyMzNDggZG9uJ3Qgc2V0IHRoZSB2YWx1ZSBpZiBub3QgbmVlZGVkIG90aGVyd2lzZSBjdXJzb3IgcGxhY2VtZW50IGJyZWFrcyBpbiBDaHJvbWVcclxuXHRcdFx0XHRcdFx0aWYgKHRhZyAhPT0gXCJpbnB1dFwiIHx8IG5vZGVbYXR0ck5hbWVdICE9PSBkYXRhQXR0cikgbm9kZVthdHRyTmFtZV0gPSBkYXRhQXR0clxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSBub2RlLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgZGF0YUF0dHIpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHQvL3N3YWxsb3cgSUUncyBpbnZhbGlkIGFyZ3VtZW50IGVycm9ycyB0byBtaW1pYyBIVE1MJ3MgZmFsbGJhY2stdG8tZG9pbmctbm90aGluZy1vbi1pbnZhbGlkLWF0dHJpYnV0ZXMgYmVoYXZpb3JcclxuXHRcdFx0XHRcdGlmIChlLm1lc3NhZ2UuaW5kZXhPZihcIkludmFsaWQgYXJndW1lbnRcIikgPCAwKSB0aHJvdyBlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC8vIzM0OCBkYXRhQXR0ciBtYXkgbm90IGJlIGEgc3RyaW5nLCBzbyB1c2UgbG9vc2UgY29tcGFyaXNvbiAoZG91YmxlIGVxdWFsKSBpbnN0ZWFkIG9mIHN0cmljdCAodHJpcGxlIGVxdWFsKVxyXG5cdFx0XHRlbHNlIGlmIChhdHRyTmFtZSA9PT0gXCJ2YWx1ZVwiICYmIHRhZyA9PT0gXCJpbnB1dFwiICYmIG5vZGUudmFsdWUgIT0gZGF0YUF0dHIpIHtcclxuXHRcdFx0XHRub2RlLnZhbHVlID0gZGF0YUF0dHJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGNhY2hlZEF0dHJzXHJcblx0fVxyXG5cdGZ1bmN0aW9uIGNsZWFyKG5vZGVzLCBjYWNoZWQpIHtcclxuXHRcdGZvciAodmFyIGkgPSBub2Rlcy5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xyXG5cdFx0XHRpZiAobm9kZXNbaV0gJiYgbm9kZXNbaV0ucGFyZW50Tm9kZSkge1xyXG5cdFx0XHRcdHRyeSB7bm9kZXNbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2Rlc1tpXSl9XHJcblx0XHRcdFx0Y2F0Y2ggKGUpIHt9IC8vaWdub3JlIGlmIHRoaXMgZmFpbHMgZHVlIHRvIG9yZGVyIG9mIGV2ZW50cyAoc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjE5MjYwODMvZmFpbGVkLXRvLWV4ZWN1dGUtcmVtb3ZlY2hpbGQtb24tbm9kZSlcclxuXHRcdFx0XHRjYWNoZWQgPSBbXS5jb25jYXQoY2FjaGVkKTtcclxuXHRcdFx0XHRpZiAoY2FjaGVkW2ldKSB1bmxvYWQoY2FjaGVkW2ldKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAobm9kZXMubGVuZ3RoICE9IDApIG5vZGVzLmxlbmd0aCA9IDBcclxuXHR9XHJcblx0ZnVuY3Rpb24gdW5sb2FkKGNhY2hlZCkge1xyXG5cdFx0aWYgKGNhY2hlZC5jb25maWdDb250ZXh0ICYmIHR5cGVvZiBjYWNoZWQuY29uZmlnQ29udGV4dC5vbnVubG9hZCA9PT0gRlVOQ1RJT04pIHtcclxuXHRcdFx0Y2FjaGVkLmNvbmZpZ0NvbnRleHQub251bmxvYWQoKTtcclxuXHRcdFx0Y2FjaGVkLmNvbmZpZ0NvbnRleHQub251bmxvYWQgPSBudWxsXHJcblx0XHR9XHJcblx0XHRpZiAoY2FjaGVkLmNoaWxkcmVuKSB7XHJcblx0XHRcdGlmICh0eXBlLmNhbGwoY2FjaGVkLmNoaWxkcmVuKSA9PT0gQVJSQVkpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgY2hpbGQ7IGNoaWxkID0gY2FjaGVkLmNoaWxkcmVuW2ldOyBpKyspIHVubG9hZChjaGlsZClcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChjYWNoZWQuY2hpbGRyZW4udGFnKSB1bmxvYWQoY2FjaGVkLmNoaWxkcmVuKVxyXG5cdFx0fVxyXG5cdH1cclxuXHRmdW5jdGlvbiBpbmplY3RIVE1MKHBhcmVudEVsZW1lbnQsIGluZGV4LCBkYXRhKSB7XHJcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBwYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbaW5kZXhdO1xyXG5cdFx0aWYgKG5leHRTaWJsaW5nKSB7XHJcblx0XHRcdHZhciBpc0VsZW1lbnQgPSBuZXh0U2libGluZy5ub2RlVHlwZSAhPSAxO1xyXG5cdFx0XHR2YXIgcGxhY2Vob2xkZXIgPSAkZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblx0XHRcdGlmIChpc0VsZW1lbnQpIHtcclxuXHRcdFx0XHRwYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShwbGFjZWhvbGRlciwgbmV4dFNpYmxpbmcgfHwgbnVsbCk7XHJcblx0XHRcdFx0cGxhY2Vob2xkZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlYmVnaW5cIiwgZGF0YSk7XHJcblx0XHRcdFx0cGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChwbGFjZWhvbGRlcilcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIG5leHRTaWJsaW5nLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWJlZ2luXCIsIGRhdGEpXHJcblx0XHR9XHJcblx0XHRlbHNlIHBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGRhdGEpO1xyXG5cdFx0dmFyIG5vZGVzID0gW107XHJcblx0XHR3aGlsZSAocGFyZW50RWxlbWVudC5jaGlsZE5vZGVzW2luZGV4XSAhPT0gbmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0bm9kZXMucHVzaChwYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdFx0aW5kZXgrK1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5vZGVzXHJcblx0fVxyXG5cdGZ1bmN0aW9uIGF1dG9yZWRyYXcoY2FsbGJhY2ssIG9iamVjdCkge1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ZSA9IGUgfHwgZXZlbnQ7XHJcblx0XHRcdG0ucmVkcmF3LnN0cmF0ZWd5KFwiZGlmZlwiKTtcclxuXHRcdFx0bS5zdGFydENvbXB1dGF0aW9uKCk7XHJcblx0XHRcdHRyeSB7cmV0dXJuIGNhbGxiYWNrLmNhbGwob2JqZWN0LCBlKX1cclxuXHRcdFx0ZmluYWxseSB7XHJcblx0XHRcdFx0ZW5kRmlyc3RDb21wdXRhdGlvbigpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhciBodG1sO1xyXG5cdHZhciBkb2N1bWVudE5vZGUgPSB7XHJcblx0XHRhcHBlbmRDaGlsZDogZnVuY3Rpb24obm9kZSkge1xyXG5cdFx0XHRpZiAoaHRtbCA9PT0gdW5kZWZpbmVkKSBodG1sID0gJGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJodG1sXCIpO1xyXG5cdFx0XHRpZiAoJGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiAkZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICE9PSBub2RlKSB7XHJcblx0XHRcdFx0JGRvY3VtZW50LnJlcGxhY2VDaGlsZChub2RlLCAkZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgJGRvY3VtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xyXG5cdFx0XHR0aGlzLmNoaWxkTm9kZXMgPSAkZG9jdW1lbnQuY2hpbGROb2Rlc1xyXG5cdFx0fSxcclxuXHRcdGluc2VydEJlZm9yZTogZnVuY3Rpb24obm9kZSkge1xyXG5cdFx0XHR0aGlzLmFwcGVuZENoaWxkKG5vZGUpXHJcblx0XHR9LFxyXG5cdFx0Y2hpbGROb2RlczogW11cclxuXHR9O1xyXG5cdHZhciBub2RlQ2FjaGUgPSBbXSwgY2VsbENhY2hlID0ge307XHJcblx0bS5yZW5kZXIgPSBmdW5jdGlvbihyb290LCBjZWxsLCBmb3JjZVJlY3JlYXRpb24pIHtcclxuXHRcdHZhciBjb25maWdzID0gW107XHJcblx0XHRpZiAoIXJvb3QpIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBlbnN1cmUgdGhlIERPTSBlbGVtZW50IGV4aXN0cyBiZWZvcmUgcmVuZGVyaW5nIGEgdGVtcGxhdGUgaW50byBpdC5cIik7XHJcblx0XHR2YXIgaWQgPSBnZXRDZWxsQ2FjaGVLZXkocm9vdCk7XHJcblx0XHR2YXIgaXNEb2N1bWVudFJvb3QgPSByb290ID09PSAkZG9jdW1lbnQ7XHJcblx0XHR2YXIgbm9kZSA9IGlzRG9jdW1lbnRSb290IHx8IHJvb3QgPT09ICRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyBkb2N1bWVudE5vZGUgOiByb290O1xyXG5cdFx0aWYgKGlzRG9jdW1lbnRSb290ICYmIGNlbGwudGFnICE9IFwiaHRtbFwiKSBjZWxsID0ge3RhZzogXCJodG1sXCIsIGF0dHJzOiB7fSwgY2hpbGRyZW46IGNlbGx9O1xyXG5cdFx0aWYgKGNlbGxDYWNoZVtpZF0gPT09IHVuZGVmaW5lZCkgY2xlYXIobm9kZS5jaGlsZE5vZGVzKTtcclxuXHRcdGlmIChmb3JjZVJlY3JlYXRpb24gPT09IHRydWUpIHJlc2V0KHJvb3QpO1xyXG5cdFx0Y2VsbENhY2hlW2lkXSA9IGJ1aWxkKG5vZGUsIG51bGwsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjZWxsLCBjZWxsQ2FjaGVbaWRdLCBmYWxzZSwgMCwgbnVsbCwgdW5kZWZpbmVkLCBjb25maWdzKTtcclxuXHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb25maWdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSBjb25maWdzW2ldKClcclxuXHR9O1xyXG5cdGZ1bmN0aW9uIGdldENlbGxDYWNoZUtleShlbGVtZW50KSB7XHJcblx0XHR2YXIgaW5kZXggPSBub2RlQ2FjaGUuaW5kZXhPZihlbGVtZW50KTtcclxuXHRcdHJldHVybiBpbmRleCA8IDAgPyBub2RlQ2FjaGUucHVzaChlbGVtZW50KSAtIDEgOiBpbmRleFxyXG5cdH1cclxuXHJcblx0bS50cnVzdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHR2YWx1ZSA9IG5ldyBTdHJpbmcodmFsdWUpO1xyXG5cdFx0dmFsdWUuJHRydXN0ZWQgPSB0cnVlO1xyXG5cdFx0cmV0dXJuIHZhbHVlXHJcblx0fTtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0dGVyc2V0dGVyKHN0b3JlKSB7XHJcblx0XHR2YXIgcHJvcCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkgc3RvcmUgPSBhcmd1bWVudHNbMF07XHJcblx0XHRcdHJldHVybiBzdG9yZVxyXG5cdFx0fTtcclxuXHJcblx0XHRwcm9wLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gc3RvcmVcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHByb3BcclxuXHR9XHJcblxyXG5cdG0ucHJvcCA9IGZ1bmN0aW9uIChzdG9yZSkge1xyXG5cdFx0Ly9ub3RlOiB1c2luZyBub24tc3RyaWN0IGVxdWFsaXR5IGNoZWNrIGhlcmUgYmVjYXVzZSB3ZSdyZSBjaGVja2luZyBpZiBzdG9yZSBpcyBudWxsIE9SIHVuZGVmaW5lZFxyXG5cdFx0aWYgKCgoc3RvcmUgIT0gbnVsbCAmJiB0eXBlLmNhbGwoc3RvcmUpID09PSBPQkpFQ1QpIHx8IHR5cGVvZiBzdG9yZSA9PT0gRlVOQ1RJT04pICYmIHR5cGVvZiBzdG9yZS50aGVuID09PSBGVU5DVElPTikge1xyXG5cdFx0XHRyZXR1cm4gcHJvcGlmeShzdG9yZSlcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZ2V0dGVyc2V0dGVyKHN0b3JlKVxyXG5cdH07XHJcblxyXG5cdHZhciByb290cyA9IFtdLCBtb2R1bGVzID0gW10sIGNvbnRyb2xsZXJzID0gW10sIGxhc3RSZWRyYXdJZCA9IG51bGwsIGxhc3RSZWRyYXdDYWxsVGltZSA9IDAsIGNvbXB1dGVQb3N0UmVkcmF3SG9vayA9IG51bGwsIHByZXZlbnRlZCA9IGZhbHNlLCB0b3BNb2R1bGU7XHJcblx0dmFyIEZSQU1FX0JVREdFVCA9IDE2OyAvLzYwIGZyYW1lcyBwZXIgc2Vjb25kID0gMSBjYWxsIHBlciAxNiBtc1xyXG5cdG0ubW9kdWxlID0gZnVuY3Rpb24ocm9vdCwgbW9kdWxlKSB7XHJcblx0XHRpZiAoIXJvb3QpIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBlbnN1cmUgdGhlIERPTSBlbGVtZW50IGV4aXN0cyBiZWZvcmUgcmVuZGVyaW5nIGEgdGVtcGxhdGUgaW50byBpdC5cIik7XHJcblx0XHR2YXIgaW5kZXggPSByb290cy5pbmRleE9mKHJvb3QpO1xyXG5cdFx0aWYgKGluZGV4IDwgMCkgaW5kZXggPSByb290cy5sZW5ndGg7XHJcblx0XHR2YXIgaXNQcmV2ZW50ZWQgPSBmYWxzZTtcclxuXHRcdGlmIChjb250cm9sbGVyc1tpbmRleF0gJiYgdHlwZW9mIGNvbnRyb2xsZXJzW2luZGV4XS5vbnVubG9hZCA9PT0gRlVOQ1RJT04pIHtcclxuXHRcdFx0dmFyIGV2ZW50ID0ge1xyXG5cdFx0XHRcdHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbigpIHtpc1ByZXZlbnRlZCA9IHRydWV9XHJcblx0XHRcdH07XHJcblx0XHRcdGNvbnRyb2xsZXJzW2luZGV4XS5vbnVubG9hZChldmVudClcclxuXHRcdH1cclxuXHRcdGlmICghaXNQcmV2ZW50ZWQpIHtcclxuXHRcdFx0bS5yZWRyYXcuc3RyYXRlZ3koXCJhbGxcIik7XHJcblx0XHRcdG0uc3RhcnRDb21wdXRhdGlvbigpO1xyXG5cdFx0XHRyb290c1tpbmRleF0gPSByb290O1xyXG5cdFx0XHR2YXIgY3VycmVudE1vZHVsZSA9IHRvcE1vZHVsZSA9IG1vZHVsZSA9IG1vZHVsZSB8fCB7fTtcclxuXHRcdFx0dmFyIGNvbnRyb2xsZXIgPSBuZXcgKG1vZHVsZS5jb250cm9sbGVyIHx8IGZ1bmN0aW9uKCkge30pO1xyXG5cdFx0XHQvL2NvbnRyb2xsZXJzIG1heSBjYWxsIG0ubW9kdWxlIHJlY3Vyc2l2ZWx5ICh2aWEgbS5yb3V0ZSByZWRpcmVjdHMsIGZvciBleGFtcGxlKVxyXG5cdFx0XHQvL3RoaXMgY29uZGl0aW9uYWwgZW5zdXJlcyBvbmx5IHRoZSBsYXN0IHJlY3Vyc2l2ZSBtLm1vZHVsZSBjYWxsIGlzIGFwcGxpZWRcclxuXHRcdFx0aWYgKGN1cnJlbnRNb2R1bGUgPT09IHRvcE1vZHVsZSkge1xyXG5cdFx0XHRcdGNvbnRyb2xsZXJzW2luZGV4XSA9IGNvbnRyb2xsZXI7XHJcblx0XHRcdFx0bW9kdWxlc1tpbmRleF0gPSBtb2R1bGVcclxuXHRcdFx0fVxyXG5cdFx0XHRlbmRGaXJzdENvbXB1dGF0aW9uKCk7XHJcblx0XHRcdHJldHVybiBjb250cm9sbGVyc1tpbmRleF1cclxuXHRcdH1cclxuXHR9O1xyXG5cdG0ucmVkcmF3ID0gZnVuY3Rpb24oZm9yY2UpIHtcclxuXHRcdC8vbGFzdFJlZHJhd0lkIGlzIGEgcG9zaXRpdmUgbnVtYmVyIGlmIGEgc2Vjb25kIHJlZHJhdyBpcyByZXF1ZXN0ZWQgYmVmb3JlIHRoZSBuZXh0IGFuaW1hdGlvbiBmcmFtZVxyXG5cdFx0Ly9sYXN0UmVkcmF3SUQgaXMgbnVsbCBpZiBpdCdzIHRoZSBmaXJzdCByZWRyYXcgYW5kIG5vdCBhbiBldmVudCBoYW5kbGVyXHJcblx0XHRpZiAobGFzdFJlZHJhd0lkICYmIGZvcmNlICE9PSB0cnVlKSB7XHJcblx0XHRcdC8vd2hlbiBzZXRUaW1lb3V0OiBvbmx5IHJlc2NoZWR1bGUgcmVkcmF3IGlmIHRpbWUgYmV0d2VlbiBub3cgYW5kIHByZXZpb3VzIHJlZHJhdyBpcyBiaWdnZXIgdGhhbiBhIGZyYW1lLCBvdGhlcndpc2Uga2VlcCBjdXJyZW50bHkgc2NoZWR1bGVkIHRpbWVvdXRcclxuXHRcdFx0Ly93aGVuIHJBRjogYWx3YXlzIHJlc2NoZWR1bGUgcmVkcmF3XHJcblx0XHRcdGlmIChuZXcgRGF0ZSAtIGxhc3RSZWRyYXdDYWxsVGltZSA+IEZSQU1FX0JVREdFVCB8fCAkcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09PSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XHJcblx0XHRcdFx0aWYgKGxhc3RSZWRyYXdJZCA+IDApICRjYW5jZWxBbmltYXRpb25GcmFtZShsYXN0UmVkcmF3SWQpO1xyXG5cdFx0XHRcdGxhc3RSZWRyYXdJZCA9ICRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVkcmF3LCBGUkFNRV9CVURHRVQpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRyZWRyYXcoKTtcclxuXHRcdFx0bGFzdFJlZHJhd0lkID0gJHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtsYXN0UmVkcmF3SWQgPSBudWxsfSwgRlJBTUVfQlVER0VUKVxyXG5cdFx0fVxyXG5cdH07XHJcblx0bS5yZWRyYXcuc3RyYXRlZ3kgPSBtLnByb3AoKTtcclxuXHR2YXIgYmxhbmsgPSBmdW5jdGlvbigpIHtyZXR1cm4gXCJcIn1cclxuXHRmdW5jdGlvbiByZWRyYXcoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMCwgcm9vdDsgcm9vdCA9IHJvb3RzW2ldOyBpKyspIHtcclxuXHRcdFx0aWYgKGNvbnRyb2xsZXJzW2ldKSB7XHJcblx0XHRcdFx0bS5yZW5kZXIocm9vdCwgbW9kdWxlc1tpXS52aWV3ID8gbW9kdWxlc1tpXS52aWV3KGNvbnRyb2xsZXJzW2ldKSA6IGJsYW5rKCkpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vYWZ0ZXIgcmVuZGVyaW5nIHdpdGhpbiBhIHJvdXRlZCBjb250ZXh0LCB3ZSBuZWVkIHRvIHNjcm9sbCBiYWNrIHRvIHRoZSB0b3AsIGFuZCBmZXRjaCB0aGUgZG9jdW1lbnQgdGl0bGUgZm9yIGhpc3RvcnkucHVzaFN0YXRlXHJcblx0XHRpZiAoY29tcHV0ZVBvc3RSZWRyYXdIb29rKSB7XHJcblx0XHRcdGNvbXB1dGVQb3N0UmVkcmF3SG9vaygpO1xyXG5cdFx0XHRjb21wdXRlUG9zdFJlZHJhd0hvb2sgPSBudWxsXHJcblx0XHR9XHJcblx0XHRsYXN0UmVkcmF3SWQgPSBudWxsO1xyXG5cdFx0bGFzdFJlZHJhd0NhbGxUaW1lID0gbmV3IERhdGU7XHJcblx0XHRtLnJlZHJhdy5zdHJhdGVneShcImRpZmZcIilcclxuXHR9XHJcblxyXG5cdHZhciBwZW5kaW5nUmVxdWVzdHMgPSAwO1xyXG5cdG0uc3RhcnRDb21wdXRhdGlvbiA9IGZ1bmN0aW9uKCkge3BlbmRpbmdSZXF1ZXN0cysrfTtcclxuXHRtLmVuZENvbXB1dGF0aW9uID0gZnVuY3Rpb24oKSB7XHJcblx0XHRwZW5kaW5nUmVxdWVzdHMgPSBNYXRoLm1heChwZW5kaW5nUmVxdWVzdHMgLSAxLCAwKTtcclxuXHRcdGlmIChwZW5kaW5nUmVxdWVzdHMgPT09IDApIG0ucmVkcmF3KClcclxuXHR9O1xyXG5cdHZhciBlbmRGaXJzdENvbXB1dGF0aW9uID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAobS5yZWRyYXcuc3RyYXRlZ3koKSA9PSBcIm5vbmVcIikge1xyXG5cdFx0XHRwZW5kaW5nUmVxdWVzdHMtLVxyXG5cdFx0XHRtLnJlZHJhdy5zdHJhdGVneShcImRpZmZcIilcclxuXHRcdH1cclxuXHRcdGVsc2UgbS5lbmRDb21wdXRhdGlvbigpO1xyXG5cdH1cclxuXHJcblx0bS53aXRoQXR0ciA9IGZ1bmN0aW9uKHByb3AsIHdpdGhBdHRyQ2FsbGJhY2spIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGUgPSBlIHx8IGV2ZW50O1xyXG5cdFx0XHR2YXIgY3VycmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldCB8fCB0aGlzO1xyXG5cdFx0XHR3aXRoQXR0ckNhbGxiYWNrKHByb3AgaW4gY3VycmVudFRhcmdldCA/IGN1cnJlbnRUYXJnZXRbcHJvcF0gOiBjdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZShwcm9wKSlcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvL3JvdXRpbmdcclxuXHR2YXIgbW9kZXMgPSB7cGF0aG5hbWU6IFwiXCIsIGhhc2g6IFwiI1wiLCBzZWFyY2g6IFwiP1wifTtcclxuXHR2YXIgcmVkaXJlY3QgPSBmdW5jdGlvbigpIHt9LCByb3V0ZVBhcmFtcywgY3VycmVudFJvdXRlO1xyXG5cdG0ucm91dGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdC8vbS5yb3V0ZSgpXHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGN1cnJlbnRSb3V0ZTtcclxuXHRcdC8vbS5yb3V0ZShlbCwgZGVmYXVsdFJvdXRlLCByb3V0ZXMpXHJcblx0XHRlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzICYmIHR5cGUuY2FsbChhcmd1bWVudHNbMV0pID09PSBTVFJJTkcpIHtcclxuXHRcdFx0dmFyIHJvb3QgPSBhcmd1bWVudHNbMF0sIGRlZmF1bHRSb3V0ZSA9IGFyZ3VtZW50c1sxXSwgcm91dGVyID0gYXJndW1lbnRzWzJdO1xyXG5cdFx0XHRyZWRpcmVjdCA9IGZ1bmN0aW9uKHNvdXJjZSkge1xyXG5cdFx0XHRcdHZhciBwYXRoID0gY3VycmVudFJvdXRlID0gbm9ybWFsaXplUm91dGUoc291cmNlKTtcclxuXHRcdFx0XHRpZiAoIXJvdXRlQnlWYWx1ZShyb290LCByb3V0ZXIsIHBhdGgpKSB7XHJcblx0XHRcdFx0XHRtLnJvdXRlKGRlZmF1bHRSb3V0ZSwgdHJ1ZSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHRcdHZhciBsaXN0ZW5lciA9IG0ucm91dGUubW9kZSA9PT0gXCJoYXNoXCIgPyBcIm9uaGFzaGNoYW5nZVwiIDogXCJvbnBvcHN0YXRlXCI7XHJcblx0XHRcdHdpbmRvd1tsaXN0ZW5lcl0gPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgcGF0aCA9ICRsb2NhdGlvblttLnJvdXRlLm1vZGVdXHJcblx0XHRcdFx0aWYgKG0ucm91dGUubW9kZSA9PT0gXCJwYXRobmFtZVwiKSBwYXRoICs9ICRsb2NhdGlvbi5zZWFyY2hcclxuXHRcdFx0XHRpZiAoY3VycmVudFJvdXRlICE9IG5vcm1hbGl6ZVJvdXRlKHBhdGgpKSB7XHJcblx0XHRcdFx0XHRyZWRpcmVjdChwYXRoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdFx0Y29tcHV0ZVBvc3RSZWRyYXdIb29rID0gc2V0U2Nyb2xsO1xyXG5cdFx0XHR3aW5kb3dbbGlzdGVuZXJdKClcclxuXHRcdH1cclxuXHRcdC8vY29uZmlnOiBtLnJvdXRlXHJcblx0XHRlbHNlIGlmIChhcmd1bWVudHNbMF0uYWRkRXZlbnRMaXN0ZW5lciB8fCBhcmd1bWVudHNbMF0uYXR0YWNoRXZlbnQpIHtcclxuXHRcdFx0dmFyIGVsZW1lbnQgPSBhcmd1bWVudHNbMF07XHJcblx0XHRcdHZhciBpc0luaXRpYWxpemVkID0gYXJndW1lbnRzWzFdO1xyXG5cdFx0XHR2YXIgY29udGV4dCA9IGFyZ3VtZW50c1syXTtcclxuXHRcdFx0ZWxlbWVudC5ocmVmID0gKG0ucm91dGUubW9kZSAhPT0gJ3BhdGhuYW1lJyA/ICRsb2NhdGlvbi5wYXRobmFtZSA6ICcnKSArIG1vZGVzW20ucm91dGUubW9kZV0gKyB0aGlzLmF0dHJzLmhyZWY7XHJcblx0XHRcdGlmIChlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuXHRcdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb3V0ZVVub2J0cnVzaXZlKTtcclxuXHRcdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb3V0ZVVub2J0cnVzaXZlKVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGVsZW1lbnQuZGV0YWNoRXZlbnQoXCJvbmNsaWNrXCIsIHJvdXRlVW5vYnRydXNpdmUpO1xyXG5cdFx0XHRcdGVsZW1lbnQuYXR0YWNoRXZlbnQoXCJvbmNsaWNrXCIsIHJvdXRlVW5vYnRydXNpdmUpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vbS5yb3V0ZShyb3V0ZSwgcGFyYW1zKVxyXG5cdFx0ZWxzZSBpZiAodHlwZS5jYWxsKGFyZ3VtZW50c1swXSkgPT09IFNUUklORykge1xyXG5cdFx0XHR2YXIgb2xkUm91dGUgPSBjdXJyZW50Um91dGU7XHJcblx0XHRcdGN1cnJlbnRSb3V0ZSA9IGFyZ3VtZW50c1swXTtcclxuXHRcdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHNbMV0gfHwge31cclxuXHRcdFx0dmFyIHF1ZXJ5SW5kZXggPSBjdXJyZW50Um91dGUuaW5kZXhPZihcIj9cIilcclxuXHRcdFx0dmFyIHBhcmFtcyA9IHF1ZXJ5SW5kZXggPiAtMSA/IHBhcnNlUXVlcnlTdHJpbmcoY3VycmVudFJvdXRlLnNsaWNlKHF1ZXJ5SW5kZXggKyAxKSkgOiB7fVxyXG5cdFx0XHRmb3IgKHZhciBpIGluIGFyZ3MpIHBhcmFtc1tpXSA9IGFyZ3NbaV1cclxuXHRcdFx0dmFyIHF1ZXJ5c3RyaW5nID0gYnVpbGRRdWVyeVN0cmluZyhwYXJhbXMpXHJcblx0XHRcdHZhciBjdXJyZW50UGF0aCA9IHF1ZXJ5SW5kZXggPiAtMSA/IGN1cnJlbnRSb3V0ZS5zbGljZSgwLCBxdWVyeUluZGV4KSA6IGN1cnJlbnRSb3V0ZVxyXG5cdFx0XHRpZiAocXVlcnlzdHJpbmcpIGN1cnJlbnRSb3V0ZSA9IGN1cnJlbnRQYXRoICsgKGN1cnJlbnRQYXRoLmluZGV4T2YoXCI/XCIpID09PSAtMSA/IFwiP1wiIDogXCImXCIpICsgcXVlcnlzdHJpbmc7XHJcblxyXG5cdFx0XHR2YXIgc2hvdWxkUmVwbGFjZUhpc3RvcnlFbnRyeSA9IChhcmd1bWVudHMubGVuZ3RoID09PSAzID8gYXJndW1lbnRzWzJdIDogYXJndW1lbnRzWzFdKSA9PT0gdHJ1ZSB8fCBvbGRSb3V0ZSA9PT0gYXJndW1lbnRzWzBdO1xyXG5cclxuXHRcdFx0aWYgKHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSkge1xyXG5cdFx0XHRcdGNvbXB1dGVQb3N0UmVkcmF3SG9vayA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0d2luZG93Lmhpc3Rvcnlbc2hvdWxkUmVwbGFjZUhpc3RvcnlFbnRyeSA/IFwicmVwbGFjZVN0YXRlXCIgOiBcInB1c2hTdGF0ZVwiXShudWxsLCAkZG9jdW1lbnQudGl0bGUsIG1vZGVzW20ucm91dGUubW9kZV0gKyBjdXJyZW50Um91dGUpO1xyXG5cdFx0XHRcdFx0c2V0U2Nyb2xsKClcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHJlZGlyZWN0KG1vZGVzW20ucm91dGUubW9kZV0gKyBjdXJyZW50Um91dGUpXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0JGxvY2F0aW9uW20ucm91dGUubW9kZV0gPSBjdXJyZW50Um91dGVcclxuXHRcdFx0XHRyZWRpcmVjdChtb2Rlc1ttLnJvdXRlLm1vZGVdICsgY3VycmVudFJvdXRlKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRtLnJvdXRlLnBhcmFtID0gZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRpZiAoIXJvdXRlUGFyYW1zKSB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBjYWxsIG0ucm91dGUoZWxlbWVudCwgZGVmYXVsdFJvdXRlLCByb3V0ZXMpIGJlZm9yZSBjYWxsaW5nIG0ucm91dGUucGFyYW0oKVwiKVxyXG5cdFx0cmV0dXJuIHJvdXRlUGFyYW1zW2tleV1cclxuXHR9O1xyXG5cdG0ucm91dGUubW9kZSA9IFwic2VhcmNoXCI7XHJcblx0ZnVuY3Rpb24gbm9ybWFsaXplUm91dGUocm91dGUpIHtcclxuXHRcdHJldHVybiByb3V0ZS5zbGljZShtb2Rlc1ttLnJvdXRlLm1vZGVdLmxlbmd0aClcclxuXHR9XHJcblx0ZnVuY3Rpb24gcm91dGVCeVZhbHVlKHJvb3QsIHJvdXRlciwgcGF0aCkge1xyXG5cdFx0cm91dGVQYXJhbXMgPSB7fTtcclxuXHJcblx0XHR2YXIgcXVlcnlTdGFydCA9IHBhdGguaW5kZXhPZihcIj9cIik7XHJcblx0XHRpZiAocXVlcnlTdGFydCAhPT0gLTEpIHtcclxuXHRcdFx0cm91dGVQYXJhbXMgPSBwYXJzZVF1ZXJ5U3RyaW5nKHBhdGguc3Vic3RyKHF1ZXJ5U3RhcnQgKyAxLCBwYXRoLmxlbmd0aCkpO1xyXG5cdFx0XHRwYXRoID0gcGF0aC5zdWJzdHIoMCwgcXVlcnlTdGFydClcclxuXHRcdH1cclxuXHJcblx0XHQvLyBHZXQgYWxsIHJvdXRlcyBhbmQgY2hlY2sgaWYgdGhlcmUnc1xyXG5cdFx0Ly8gYW4gZXhhY3QgbWF0Y2ggZm9yIHRoZSBjdXJyZW50IHBhdGhcclxuXHRcdHZhciBrZXlzID0gT2JqZWN0LmtleXMocm91dGVyKTtcclxuXHRcdHZhciBpbmRleCA9IGtleXMuaW5kZXhPZihwYXRoKTtcclxuXHRcdGlmKGluZGV4ICE9PSAtMSl7XHJcblx0XHRcdG0ubW9kdWxlKHJvb3QsIHJvdXRlcltrZXlzIFtpbmRleF1dKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICh2YXIgcm91dGUgaW4gcm91dGVyKSB7XHJcblx0XHRcdGlmIChyb3V0ZSA9PT0gcGF0aCkge1xyXG5cdFx0XHRcdG0ubW9kdWxlKHJvb3QsIHJvdXRlcltyb3V0ZV0pO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cChcIl5cIiArIHJvdXRlLnJlcGxhY2UoLzpbXlxcL10rP1xcLnszfS9nLCBcIiguKj8pXCIpLnJlcGxhY2UoLzpbXlxcL10rL2csIFwiKFteXFxcXC9dKylcIikgKyBcIlxcLz8kXCIpO1xyXG5cclxuXHRcdFx0aWYgKG1hdGNoZXIudGVzdChwYXRoKSkge1xyXG5cdFx0XHRcdHBhdGgucmVwbGFjZShtYXRjaGVyLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHZhciBrZXlzID0gcm91dGUubWF0Y2goLzpbXlxcL10rL2cpIHx8IFtdO1xyXG5cdFx0XHRcdFx0dmFyIHZhbHVlcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxLCAtMik7XHJcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0ga2V5cy5sZW5ndGg7IGkgPCBsZW47IGkrKykgcm91dGVQYXJhbXNba2V5c1tpXS5yZXBsYWNlKC86fFxcLi9nLCBcIlwiKV0gPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWVzW2ldKVxyXG5cdFx0XHRcdFx0bS5tb2R1bGUocm9vdCwgcm91dGVyW3JvdXRlXSlcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHJvdXRlVW5vYnRydXNpdmUoZSkge1xyXG5cdFx0ZSA9IGUgfHwgZXZlbnQ7XHJcblx0XHRpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSB8fCBlLndoaWNoID09PSAyKSByZXR1cm47XHJcblx0XHRpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZWxzZSBlLnJldHVyblZhbHVlID0gZmFsc2U7XHJcblx0XHR2YXIgY3VycmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XHJcblx0XHR2YXIgYXJncyA9IG0ucm91dGUubW9kZSA9PT0gXCJwYXRobmFtZVwiICYmIGN1cnJlbnRUYXJnZXQuc2VhcmNoID8gcGFyc2VRdWVyeVN0cmluZyhjdXJyZW50VGFyZ2V0LnNlYXJjaC5zbGljZSgxKSkgOiB7fTtcclxuXHRcdHdoaWxlIChjdXJyZW50VGFyZ2V0ICYmIGN1cnJlbnRUYXJnZXQubm9kZU5hbWUudG9VcHBlckNhc2UoKSAhPSBcIkFcIikgY3VycmVudFRhcmdldCA9IGN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZVxyXG5cdFx0bS5yb3V0ZShjdXJyZW50VGFyZ2V0W20ucm91dGUubW9kZV0uc2xpY2UobW9kZXNbbS5yb3V0ZS5tb2RlXS5sZW5ndGgpLCBhcmdzKVxyXG5cdH1cclxuXHRmdW5jdGlvbiBzZXRTY3JvbGwoKSB7XHJcblx0XHRpZiAobS5yb3V0ZS5tb2RlICE9IFwiaGFzaFwiICYmICRsb2NhdGlvbi5oYXNoKSAkbG9jYXRpb24uaGFzaCA9ICRsb2NhdGlvbi5oYXNoO1xyXG5cdFx0ZWxzZSB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcclxuXHR9XHJcblx0ZnVuY3Rpb24gYnVpbGRRdWVyeVN0cmluZyhvYmplY3QsIHByZWZpeCkge1xyXG5cdFx0dmFyIGR1cGxpY2F0ZXMgPSB7fVxyXG5cdFx0dmFyIHN0ciA9IFtdXHJcblx0XHRmb3IgKHZhciBwcm9wIGluIG9iamVjdCkge1xyXG5cdFx0XHR2YXIga2V5ID0gcHJlZml4ID8gcHJlZml4ICsgXCJbXCIgKyBwcm9wICsgXCJdXCIgOiBwcm9wXHJcblx0XHRcdHZhciB2YWx1ZSA9IG9iamVjdFtwcm9wXVxyXG5cdFx0XHR2YXIgdmFsdWVUeXBlID0gdHlwZS5jYWxsKHZhbHVlKVxyXG5cdFx0XHR2YXIgcGFpciA9ICh2YWx1ZSA9PT0gbnVsbCkgPyBlbmNvZGVVUklDb21wb25lbnQoa2V5KSA6XHJcblx0XHRcdFx0dmFsdWVUeXBlID09PSBPQkpFQ1QgPyBidWlsZFF1ZXJ5U3RyaW5nKHZhbHVlLCBrZXkpIDpcclxuXHRcdFx0XHR2YWx1ZVR5cGUgPT09IEFSUkFZID8gdmFsdWUucmVkdWNlKGZ1bmN0aW9uKG1lbW8sIGl0ZW0pIHtcclxuXHRcdFx0XHRcdGlmICghZHVwbGljYXRlc1trZXldKSBkdXBsaWNhdGVzW2tleV0gPSB7fVxyXG5cdFx0XHRcdFx0aWYgKCFkdXBsaWNhdGVzW2tleV1baXRlbV0pIHtcclxuXHRcdFx0XHRcdFx0ZHVwbGljYXRlc1trZXldW2l0ZW1dID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gbWVtby5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChpdGVtKSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBtZW1vXHJcblx0XHRcdFx0fSwgW10pLmpvaW4oXCImXCIpIDpcclxuXHRcdFx0XHRlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKVxyXG5cdFx0XHRpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkgc3RyLnB1c2gocGFpcilcclxuXHRcdH1cclxuXHRcdHJldHVybiBzdHIuam9pbihcIiZcIilcclxuXHR9XHJcblx0ZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZyhzdHIpIHtcclxuXHRcdHZhciBwYWlycyA9IHN0ci5zcGxpdChcIiZcIiksIHBhcmFtcyA9IHt9O1xyXG5cdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhaXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdHZhciBwYWlyID0gcGFpcnNbaV0uc3BsaXQoXCI9XCIpO1xyXG5cdFx0XHR2YXIga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMF0pXHJcblx0XHRcdHZhciB2YWx1ZSA9IHBhaXIubGVuZ3RoID09IDIgPyBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSkgOiBudWxsXHJcblx0XHRcdGlmIChwYXJhbXNba2V5XSAhPSBudWxsKSB7XHJcblx0XHRcdFx0aWYgKHR5cGUuY2FsbChwYXJhbXNba2V5XSkgIT09IEFSUkFZKSBwYXJhbXNba2V5XSA9IFtwYXJhbXNba2V5XV1cclxuXHRcdFx0XHRwYXJhbXNba2V5XS5wdXNoKHZhbHVlKVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgcGFyYW1zW2tleV0gPSB2YWx1ZVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHBhcmFtc1xyXG5cdH1cclxuXHRtLnJvdXRlLmJ1aWxkUXVlcnlTdHJpbmcgPSBidWlsZFF1ZXJ5U3RyaW5nXHJcblx0bS5yb3V0ZS5wYXJzZVF1ZXJ5U3RyaW5nID0gcGFyc2VRdWVyeVN0cmluZ1xyXG5cdFxyXG5cdGZ1bmN0aW9uIHJlc2V0KHJvb3QpIHtcclxuXHRcdHZhciBjYWNoZUtleSA9IGdldENlbGxDYWNoZUtleShyb290KTtcclxuXHRcdGNsZWFyKHJvb3QuY2hpbGROb2RlcywgY2VsbENhY2hlW2NhY2hlS2V5XSk7XHJcblx0XHRjZWxsQ2FjaGVbY2FjaGVLZXldID0gdW5kZWZpbmVkXHJcblx0fVxyXG5cclxuXHRtLmRlZmVycmVkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIGRlZmVycmVkID0gbmV3IERlZmVycmVkKCk7XHJcblx0XHRkZWZlcnJlZC5wcm9taXNlID0gcHJvcGlmeShkZWZlcnJlZC5wcm9taXNlKTtcclxuXHRcdHJldHVybiBkZWZlcnJlZFxyXG5cdH07XHJcblx0ZnVuY3Rpb24gcHJvcGlmeShwcm9taXNlLCBpbml0aWFsVmFsdWUpIHtcclxuXHRcdHZhciBwcm9wID0gbS5wcm9wKGluaXRpYWxWYWx1ZSk7XHJcblx0XHRwcm9taXNlLnRoZW4ocHJvcCk7XHJcblx0XHRwcm9wLnRoZW4gPSBmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHRcdFx0cmV0dXJuIHByb3BpZnkocHJvbWlzZS50aGVuKHJlc29sdmUsIHJlamVjdCksIGluaXRpYWxWYWx1ZSlcclxuXHRcdH07XHJcblx0XHRyZXR1cm4gcHJvcFxyXG5cdH1cclxuXHQvL1Byb21pei5taXRocmlsLmpzIHwgWm9sbWVpc3RlciB8IE1JVFxyXG5cdC8vYSBtb2RpZmllZCB2ZXJzaW9uIG9mIFByb21pei5qcywgd2hpY2ggZG9lcyBub3QgY29uZm9ybSB0byBQcm9taXNlcy9BKyBmb3IgdHdvIHJlYXNvbnM6XHJcblx0Ly8xKSBgdGhlbmAgY2FsbGJhY2tzIGFyZSBjYWxsZWQgc3luY2hyb25vdXNseSAoYmVjYXVzZSBzZXRUaW1lb3V0IGlzIHRvbyBzbG93LCBhbmQgdGhlIHNldEltbWVkaWF0ZSBwb2x5ZmlsbCBpcyB0b28gYmlnXHJcblx0Ly8yKSB0aHJvd2luZyBzdWJjbGFzc2VzIG9mIEVycm9yIGNhdXNlIHRoZSBlcnJvciB0byBiZSBidWJibGVkIHVwIGluc3RlYWQgb2YgdHJpZ2dlcmluZyByZWplY3Rpb24gKGJlY2F1c2UgdGhlIHNwZWMgZG9lcyBub3QgYWNjb3VudCBmb3IgdGhlIGltcG9ydGFudCB1c2UgY2FzZSBvZiBkZWZhdWx0IGJyb3dzZXIgZXJyb3IgaGFuZGxpbmcsIGkuZS4gbWVzc2FnZSB3LyBsaW5lIG51bWJlcilcclxuXHRmdW5jdGlvbiBEZWZlcnJlZChzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjaykge1xyXG5cdFx0dmFyIFJFU09MVklORyA9IDEsIFJFSkVDVElORyA9IDIsIFJFU09MVkVEID0gMywgUkVKRUNURUQgPSA0O1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzLCBzdGF0ZSA9IDAsIHByb21pc2VWYWx1ZSA9IDAsIG5leHQgPSBbXTtcclxuXHJcblx0XHRzZWxmW1wicHJvbWlzZVwiXSA9IHt9O1xyXG5cclxuXHRcdHNlbGZbXCJyZXNvbHZlXCJdID0gZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdFx0aWYgKCFzdGF0ZSkge1xyXG5cdFx0XHRcdHByb21pc2VWYWx1ZSA9IHZhbHVlO1xyXG5cdFx0XHRcdHN0YXRlID0gUkVTT0xWSU5HO1xyXG5cclxuXHRcdFx0XHRmaXJlKClcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpc1xyXG5cdFx0fTtcclxuXHJcblx0XHRzZWxmW1wicmVqZWN0XCJdID0gZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdFx0aWYgKCFzdGF0ZSkge1xyXG5cdFx0XHRcdHByb21pc2VWYWx1ZSA9IHZhbHVlO1xyXG5cdFx0XHRcdHN0YXRlID0gUkVKRUNUSU5HO1xyXG5cclxuXHRcdFx0XHRmaXJlKClcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpc1xyXG5cdFx0fTtcclxuXHJcblx0XHRzZWxmLnByb21pc2VbXCJ0aGVuXCJdID0gZnVuY3Rpb24oc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spIHtcclxuXHRcdFx0dmFyIGRlZmVycmVkID0gbmV3IERlZmVycmVkKHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKTtcclxuXHRcdFx0aWYgKHN0YXRlID09PSBSRVNPTFZFRCkge1xyXG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocHJvbWlzZVZhbHVlKVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHN0YXRlID09PSBSRUpFQ1RFRCkge1xyXG5cdFx0XHRcdGRlZmVycmVkLnJlamVjdChwcm9taXNlVmFsdWUpXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0bmV4dC5wdXNoKGRlZmVycmVkKVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlXHJcblx0XHR9O1xyXG5cclxuXHRcdGZ1bmN0aW9uIGZpbmlzaCh0eXBlKSB7XHJcblx0XHRcdHN0YXRlID0gdHlwZSB8fCBSRUpFQ1RFRDtcclxuXHRcdFx0bmV4dC5tYXAoZnVuY3Rpb24oZGVmZXJyZWQpIHtcclxuXHRcdFx0XHRzdGF0ZSA9PT0gUkVTT0xWRUQgJiYgZGVmZXJyZWQucmVzb2x2ZShwcm9taXNlVmFsdWUpIHx8IGRlZmVycmVkLnJlamVjdChwcm9taXNlVmFsdWUpXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gdGhlbm5hYmxlKHRoZW4sIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrLCBub3RUaGVubmFibGVDYWxsYmFjaykge1xyXG5cdFx0XHRpZiAoKChwcm9taXNlVmFsdWUgIT0gbnVsbCAmJiB0eXBlLmNhbGwocHJvbWlzZVZhbHVlKSA9PT0gT0JKRUNUKSB8fCB0eXBlb2YgcHJvbWlzZVZhbHVlID09PSBGVU5DVElPTikgJiYgdHlwZW9mIHRoZW4gPT09IEZVTkNUSU9OKSB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdC8vIGNvdW50IHByb3RlY3RzIGFnYWluc3QgYWJ1c2UgY2FsbHMgZnJvbSBzcGVjIGNoZWNrZXJcclxuXHRcdFx0XHRcdHZhciBjb3VudCA9IDA7XHJcblx0XHRcdFx0XHR0aGVuLmNhbGwocHJvbWlzZVZhbHVlLCBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoY291bnQrKykgcmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRwcm9taXNlVmFsdWUgPSB2YWx1ZTtcclxuXHRcdFx0XHRcdFx0c3VjY2Vzc0NhbGxiYWNrKClcclxuXHRcdFx0XHRcdH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoY291bnQrKykgcmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRwcm9taXNlVmFsdWUgPSB2YWx1ZTtcclxuXHRcdFx0XHRcdFx0ZmFpbHVyZUNhbGxiYWNrKClcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHRtLmRlZmVycmVkLm9uZXJyb3IoZSk7XHJcblx0XHRcdFx0XHRwcm9taXNlVmFsdWUgPSBlO1xyXG5cdFx0XHRcdFx0ZmFpbHVyZUNhbGxiYWNrKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bm90VGhlbm5hYmxlQ2FsbGJhY2soKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZmlyZSgpIHtcclxuXHRcdFx0Ly8gY2hlY2sgaWYgaXQncyBhIHRoZW5hYmxlXHJcblx0XHRcdHZhciB0aGVuO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHRoZW4gPSBwcm9taXNlVmFsdWUgJiYgcHJvbWlzZVZhbHVlLnRoZW5cclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRcdG0uZGVmZXJyZWQub25lcnJvcihlKTtcclxuXHRcdFx0XHRwcm9taXNlVmFsdWUgPSBlO1xyXG5cdFx0XHRcdHN0YXRlID0gUkVKRUNUSU5HO1xyXG5cdFx0XHRcdHJldHVybiBmaXJlKClcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGVubmFibGUodGhlbiwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0c3RhdGUgPSBSRVNPTFZJTkc7XHJcblx0XHRcdFx0ZmlyZSgpXHJcblx0XHRcdH0sIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHN0YXRlID0gUkVKRUNUSU5HO1xyXG5cdFx0XHRcdGZpcmUoKVxyXG5cdFx0XHR9LCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0aWYgKHN0YXRlID09PSBSRVNPTFZJTkcgJiYgdHlwZW9mIHN1Y2Nlc3NDYWxsYmFjayA9PT0gRlVOQ1RJT04pIHtcclxuXHRcdFx0XHRcdFx0cHJvbWlzZVZhbHVlID0gc3VjY2Vzc0NhbGxiYWNrKHByb21pc2VWYWx1ZSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYgKHN0YXRlID09PSBSRUpFQ1RJTkcgJiYgdHlwZW9mIGZhaWx1cmVDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdFx0XHRcdHByb21pc2VWYWx1ZSA9IGZhaWx1cmVDYWxsYmFjayhwcm9taXNlVmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRzdGF0ZSA9IFJFU09MVklOR1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0bS5kZWZlcnJlZC5vbmVycm9yKGUpO1xyXG5cdFx0XHRcdFx0cHJvbWlzZVZhbHVlID0gZTtcclxuXHRcdFx0XHRcdHJldHVybiBmaW5pc2goKVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHByb21pc2VWYWx1ZSA9PT0gc2VsZikge1xyXG5cdFx0XHRcdFx0cHJvbWlzZVZhbHVlID0gVHlwZUVycm9yKCk7XHJcblx0XHRcdFx0XHRmaW5pc2goKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHRoZW5uYWJsZSh0aGVuLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdGZpbmlzaChSRVNPTFZFRClcclxuXHRcdFx0XHRcdH0sIGZpbmlzaCwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRmaW5pc2goc3RhdGUgPT09IFJFU09MVklORyAmJiBSRVNPTFZFRClcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH1cclxuXHRtLmRlZmVycmVkLm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7XHJcblx0XHRpZiAodHlwZS5jYWxsKGUpID09PSBcIltvYmplY3QgRXJyb3JdXCIgJiYgIWUuY29uc3RydWN0b3IudG9TdHJpbmcoKS5tYXRjaCgvIEVycm9yLykpIHRocm93IGVcclxuXHR9O1xyXG5cclxuXHRtLnN5bmMgPSBmdW5jdGlvbihhcmdzKSB7XHJcblx0XHR2YXIgbWV0aG9kID0gXCJyZXNvbHZlXCI7XHJcblx0XHRmdW5jdGlvbiBzeW5jaHJvbml6ZXIocG9zLCByZXNvbHZlZCkge1xyXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdFx0XHRyZXN1bHRzW3Bvc10gPSB2YWx1ZTtcclxuXHRcdFx0XHRpZiAoIXJlc29sdmVkKSBtZXRob2QgPSBcInJlamVjdFwiO1xyXG5cdFx0XHRcdGlmICgtLW91dHN0YW5kaW5nID09PSAwKSB7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5wcm9taXNlKHJlc3VsdHMpO1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWRbbWV0aG9kXShyZXN1bHRzKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdmFsdWVcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBkZWZlcnJlZCA9IG0uZGVmZXJyZWQoKTtcclxuXHRcdHZhciBvdXRzdGFuZGluZyA9IGFyZ3MubGVuZ3RoO1xyXG5cdFx0dmFyIHJlc3VsdHMgPSBuZXcgQXJyYXkob3V0c3RhbmRpbmcpO1xyXG5cdFx0aWYgKGFyZ3MubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRhcmdzW2ldLnRoZW4oc3luY2hyb25pemVyKGksIHRydWUpLCBzeW5jaHJvbml6ZXIoaSwgZmFsc2UpKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIGRlZmVycmVkLnJlc29sdmUoW10pO1xyXG5cclxuXHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlXHJcblx0fTtcclxuXHRmdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge3JldHVybiB2YWx1ZX1cclxuXHJcblx0ZnVuY3Rpb24gYWpheChvcHRpb25zKSB7XHJcblx0XHRpZiAob3B0aW9ucy5kYXRhVHlwZSAmJiBvcHRpb25zLmRhdGFUeXBlLnRvTG93ZXJDYXNlKCkgPT09IFwianNvbnBcIikge1xyXG5cdFx0XHR2YXIgY2FsbGJhY2tLZXkgPSBcIm1pdGhyaWxfY2FsbGJhY2tfXCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIFwiX1wiICsgKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlMTYpKS50b1N0cmluZygzNik7XHJcblx0XHRcdHZhciBzY3JpcHQgPSAkZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuXHJcblx0XHRcdHdpbmRvd1tjYWxsYmFja0tleV0gPSBmdW5jdGlvbihyZXNwKSB7XHJcblx0XHRcdFx0c2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcclxuXHRcdFx0XHRvcHRpb25zLm9ubG9hZCh7XHJcblx0XHRcdFx0XHR0eXBlOiBcImxvYWRcIixcclxuXHRcdFx0XHRcdHRhcmdldDoge1xyXG5cdFx0XHRcdFx0XHRyZXNwb25zZVRleHQ6IHJlc3BcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR3aW5kb3dbY2FsbGJhY2tLZXldID0gdW5kZWZpbmVkXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xyXG5cclxuXHRcdFx0XHRvcHRpb25zLm9uZXJyb3Ioe1xyXG5cdFx0XHRcdFx0dHlwZTogXCJlcnJvclwiLFxyXG5cdFx0XHRcdFx0dGFyZ2V0OiB7XHJcblx0XHRcdFx0XHRcdHN0YXR1czogNTAwLFxyXG5cdFx0XHRcdFx0XHRyZXNwb25zZVRleHQ6IEpTT04uc3RyaW5naWZ5KHtlcnJvcjogXCJFcnJvciBtYWtpbmcganNvbnAgcmVxdWVzdFwifSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR3aW5kb3dbY2FsbGJhY2tLZXldID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY3JpcHQuc3JjID0gb3B0aW9ucy51cmxcclxuXHRcdFx0XHQrIChvcHRpb25zLnVybC5pbmRleE9mKFwiP1wiKSA+IDAgPyBcIiZcIiA6IFwiP1wiKVxyXG5cdFx0XHRcdCsgKG9wdGlvbnMuY2FsbGJhY2tLZXkgPyBvcHRpb25zLmNhbGxiYWNrS2V5IDogXCJjYWxsYmFja1wiKVxyXG5cdFx0XHRcdCsgXCI9XCIgKyBjYWxsYmFja0tleVxyXG5cdFx0XHRcdCsgXCImXCIgKyBidWlsZFF1ZXJ5U3RyaW5nKG9wdGlvbnMuZGF0YSB8fCB7fSk7XHJcblx0XHRcdCRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR2YXIgeGhyID0gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdDtcclxuXHRcdFx0eGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMudXJsLCB0cnVlLCBvcHRpb25zLnVzZXIsIG9wdGlvbnMucGFzc3dvcmQpO1xyXG5cdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XHJcblx0XHRcdFx0XHRpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkgb3B0aW9ucy5vbmxvYWQoe3R5cGU6IFwibG9hZFwiLCB0YXJnZXQ6IHhocn0pO1xyXG5cdFx0XHRcdFx0ZWxzZSBvcHRpb25zLm9uZXJyb3Ioe3R5cGU6IFwiZXJyb3JcIiwgdGFyZ2V0OiB4aHJ9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdFx0aWYgKG9wdGlvbnMuc2VyaWFsaXplID09PSBKU09OLnN0cmluZ2lmeSAmJiBvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5tZXRob2QgIT09IFwiR0VUXCIpIHtcclxuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIilcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAob3B0aW9ucy5kZXNlcmlhbGl6ZSA9PT0gSlNPTi5wYXJzZSkge1xyXG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsIFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC8qXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlb2Ygb3B0aW9ucy5jb25maWcgPT09IEZVTkNUSU9OKSB7XHJcblx0XHRcdFx0dmFyIG1heWJlWGhyID0gb3B0aW9ucy5jb25maWcoeGhyLCBvcHRpb25zKTtcclxuXHRcdFx0XHRpZiAobWF5YmVYaHIgIT0gbnVsbCkgeGhyID0gbWF5YmVYaHJcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIGRhdGEgPSBvcHRpb25zLm1ldGhvZCA9PT0gXCJHRVRcIiB8fCAhb3B0aW9ucy5kYXRhID8gXCJcIiA6IG9wdGlvbnMuZGF0YVxyXG5cdFx0XHRpZiAoZGF0YSAmJiAodHlwZS5jYWxsKGRhdGEpICE9IFNUUklORyAmJiBkYXRhLmNvbnN0cnVjdG9yICE9IHdpbmRvdy5Gb3JtRGF0YSkpIHtcclxuXHRcdFx0XHR0aHJvdyBcIlJlcXVlc3QgZGF0YSBzaG91bGQgYmUgZWl0aGVyIGJlIGEgc3RyaW5nIG9yIEZvcm1EYXRhLiBDaGVjayB0aGUgYHNlcmlhbGl6ZWAgb3B0aW9uIGluIGBtLnJlcXVlc3RgXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0eGhyLnNlbmQoZGF0YSk7XHJcblx0XHRcdHJldHVybiB4aHJcclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gYmluZERhdGEoeGhyT3B0aW9ucywgZGF0YSwgc2VyaWFsaXplKSB7XHJcblx0XHRpZiAoeGhyT3B0aW9ucy5tZXRob2QgPT09IFwiR0VUXCIgJiYgeGhyT3B0aW9ucy5kYXRhVHlwZSAhPSBcImpzb25wXCIpIHtcclxuXHRcdFx0dmFyIHByZWZpeCA9IHhock9wdGlvbnMudXJsLmluZGV4T2YoXCI/XCIpIDwgMCA/IFwiP1wiIDogXCImXCI7XHJcblx0XHRcdHZhciBxdWVyeXN0cmluZyA9IGJ1aWxkUXVlcnlTdHJpbmcoZGF0YSk7XHJcblx0XHRcdHhock9wdGlvbnMudXJsID0geGhyT3B0aW9ucy51cmwgKyAocXVlcnlzdHJpbmcgPyBwcmVmaXggKyBxdWVyeXN0cmluZyA6IFwiXCIpXHJcblx0XHR9XHJcblx0XHRlbHNlIHhock9wdGlvbnMuZGF0YSA9IHNlcmlhbGl6ZShkYXRhKTtcclxuXHRcdHJldHVybiB4aHJPcHRpb25zXHJcblx0fVxyXG5cdGZ1bmN0aW9uIHBhcmFtZXRlcml6ZVVybCh1cmwsIGRhdGEpIHtcclxuXHRcdHZhciB0b2tlbnMgPSB1cmwubWF0Y2goLzpbYS16XVxcdysvZ2kpO1xyXG5cdFx0aWYgKHRva2VucyAmJiBkYXRhKSB7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIGtleSA9IHRva2Vuc1tpXS5zbGljZSgxKTtcclxuXHRcdFx0XHR1cmwgPSB1cmwucmVwbGFjZSh0b2tlbnNbaV0sIGRhdGFba2V5XSk7XHJcblx0XHRcdFx0ZGVsZXRlIGRhdGFba2V5XVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdXJsXHJcblx0fVxyXG5cclxuXHRtLnJlcXVlc3QgPSBmdW5jdGlvbih4aHJPcHRpb25zKSB7XHJcblx0XHRpZiAoeGhyT3B0aW9ucy5iYWNrZ3JvdW5kICE9PSB0cnVlKSBtLnN0YXJ0Q29tcHV0YXRpb24oKTtcclxuXHRcdHZhciBkZWZlcnJlZCA9IG5ldyBEZWZlcnJlZCgpO1xyXG5cdFx0dmFyIGlzSlNPTlAgPSB4aHJPcHRpb25zLmRhdGFUeXBlICYmIHhock9wdGlvbnMuZGF0YVR5cGUudG9Mb3dlckNhc2UoKSA9PT0gXCJqc29ucFwiO1xyXG5cdFx0dmFyIHNlcmlhbGl6ZSA9IHhock9wdGlvbnMuc2VyaWFsaXplID0gaXNKU09OUCA/IGlkZW50aXR5IDogeGhyT3B0aW9ucy5zZXJpYWxpemUgfHwgSlNPTi5zdHJpbmdpZnk7XHJcblx0XHR2YXIgZGVzZXJpYWxpemUgPSB4aHJPcHRpb25zLmRlc2VyaWFsaXplID0gaXNKU09OUCA/IGlkZW50aXR5IDogeGhyT3B0aW9ucy5kZXNlcmlhbGl6ZSB8fCBKU09OLnBhcnNlO1xyXG5cdFx0dmFyIGV4dHJhY3QgPSB4aHJPcHRpb25zLmV4dHJhY3QgfHwgZnVuY3Rpb24oeGhyKSB7XHJcblx0XHRcdHJldHVybiB4aHIucmVzcG9uc2VUZXh0Lmxlbmd0aCA9PT0gMCAmJiBkZXNlcmlhbGl6ZSA9PT0gSlNPTi5wYXJzZSA/IG51bGwgOiB4aHIucmVzcG9uc2VUZXh0XHJcblx0XHR9O1xyXG5cdFx0eGhyT3B0aW9ucy51cmwgPSBwYXJhbWV0ZXJpemVVcmwoeGhyT3B0aW9ucy51cmwsIHhock9wdGlvbnMuZGF0YSk7XHJcblx0XHR4aHJPcHRpb25zID0gYmluZERhdGEoeGhyT3B0aW9ucywgeGhyT3B0aW9ucy5kYXRhLCBzZXJpYWxpemUpO1xyXG5cdFx0eGhyT3B0aW9ucy5vbmxvYWQgPSB4aHJPcHRpb25zLm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0ZSA9IGUgfHwgZXZlbnQ7XHJcblx0XHRcdFx0dmFyIHVud3JhcCA9IChlLnR5cGUgPT09IFwibG9hZFwiID8geGhyT3B0aW9ucy51bndyYXBTdWNjZXNzIDogeGhyT3B0aW9ucy51bndyYXBFcnJvcikgfHwgaWRlbnRpdHk7XHJcblx0XHRcdFx0dmFyIHJlc3BvbnNlID0gdW53cmFwKGRlc2VyaWFsaXplKGV4dHJhY3QoZS50YXJnZXQsIHhock9wdGlvbnMpKSwgZS50YXJnZXQpO1xyXG5cdFx0XHRcdGlmIChlLnR5cGUgPT09IFwibG9hZFwiKSB7XHJcblx0XHRcdFx0XHRpZiAodHlwZS5jYWxsKHJlc3BvbnNlKSA9PT0gQVJSQVkgJiYgeGhyT3B0aW9ucy50eXBlKSB7XHJcblx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmVzcG9uc2UubGVuZ3RoOyBpKyspIHJlc3BvbnNlW2ldID0gbmV3IHhock9wdGlvbnMudHlwZShyZXNwb25zZVtpXSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYgKHhock9wdGlvbnMudHlwZSkgcmVzcG9uc2UgPSBuZXcgeGhyT3B0aW9ucy50eXBlKHJlc3BvbnNlKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRkZWZlcnJlZFtlLnR5cGUgPT09IFwibG9hZFwiID8gXCJyZXNvbHZlXCIgOiBcInJlamVjdFwiXShyZXNwb25zZSlcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRcdG0uZGVmZXJyZWQub25lcnJvcihlKTtcclxuXHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZSlcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoeGhyT3B0aW9ucy5iYWNrZ3JvdW5kICE9PSB0cnVlKSBtLmVuZENvbXB1dGF0aW9uKClcclxuXHRcdH07XHJcblx0XHRhamF4KHhock9wdGlvbnMpO1xyXG5cdFx0ZGVmZXJyZWQucHJvbWlzZSA9IHByb3BpZnkoZGVmZXJyZWQucHJvbWlzZSwgeGhyT3B0aW9ucy5pbml0aWFsVmFsdWUpO1xyXG5cdFx0cmV0dXJuIGRlZmVycmVkLnByb21pc2VcclxuXHR9O1xyXG5cclxuXHQvL3Rlc3RpbmcgQVBJXHJcblx0bS5kZXBzID0gZnVuY3Rpb24obW9jaykge1xyXG5cdFx0aW5pdGlhbGl6ZSh3aW5kb3cgPSBtb2NrIHx8IHdpbmRvdyk7XHJcblx0XHRyZXR1cm4gd2luZG93O1xyXG5cdH07XHJcblx0Ly9mb3IgaW50ZXJuYWwgdGVzdGluZyBvbmx5LCBkbyBub3QgdXNlIGBtLmRlcHMuZmFjdG9yeWBcclxuXHRtLmRlcHMuZmFjdG9yeSA9IGFwcDtcclxuXHJcblx0cmV0dXJuIG1cclxufSkodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pO1xyXG5cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUgIT09IG51bGwgJiYgbW9kdWxlLmV4cG9ydHMpIG1vZHVsZS5leHBvcnRzID0gbTtcclxuZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIGRlZmluZShmdW5jdGlvbigpIHtyZXR1cm4gbX0pO1xyXG4iXX0=
