"bundle";
System.registerDynamic("app/index/index", ["lib/lodash/collection/pluck", "lib/lodash/collection/forEach", "lib/lodash/array", "lib/mithril/mithril.min", "lib/marked/marked.min", "lib/polythene/list/list", "lib/polythene/list-tile/list-tile", "lib/polythene/header-panel/header-panel", "lib/polythene/card/card", "lib/polythene/button/button", "lib/polythene/theme/theme", "app/app.css!lib/system-css/css"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {"default": obj};
  }
  var _lodashCollectionPluck = require("lib/lodash/collection/pluck");
  var _lodashCollectionPluck2 = _interopRequireDefault(_lodashCollectionPluck);
  var _lodashCollectionForEach = require("lib/lodash/collection/forEach");
  var _lodashCollectionForEach2 = _interopRequireDefault(_lodashCollectionForEach);
  var _lodashArray = require("lib/lodash/array");
  var _lodashArray2 = _interopRequireDefault(_lodashArray);
  var _mithril = require("lib/mithril/mithril.min");
  var _mithril2 = _interopRequireDefault(_mithril);
  var _marked = require("lib/marked/marked.min");
  var _marked2 = _interopRequireDefault(_marked);
  var _polytheneListList = require("lib/polythene/list/list");
  var _polytheneListList2 = _interopRequireDefault(_polytheneListList);
  var _polytheneListTileListTile = require("lib/polythene/list-tile/list-tile");
  var _polytheneListTileListTile2 = _interopRequireDefault(_polytheneListTileListTile);
  var _polytheneHeaderPanelHeaderPanel = require("lib/polythene/header-panel/header-panel");
  var _polytheneHeaderPanelHeaderPanel2 = _interopRequireDefault(_polytheneHeaderPanelHeaderPanel);
  var _polytheneCardCard = require("lib/polythene/card/card");
  var _polytheneCardCard2 = _interopRequireDefault(_polytheneCardCard);
  var _polytheneButtonButton = require("lib/polythene/button/button");
  var _polytheneButtonButton2 = _interopRequireDefault(_polytheneButtonButton);
  require("lib/polythene/theme/theme");
  require("app/app.css!lib/system-css/css");
  var app = undefined,
      navItem = undefined,
      createDrawer = undefined,
      main = undefined,
      links = undefined,
      linkMap = undefined,
      defaultTitle = undefined,
      baseUrl = undefined;
  defaultTitle = "Polythene Documentation";
  links = [{
    label: null,
    links: [{
      url: "polythene",
      name: "Introduction",
      title: defaultTitle,
      demo: "http://arthurclemens.github.io/Polythene-examples/index.html"
    }, {
      url: "theme",
      name: "Appearance / Theming",
      demo: null
    }]
  }, {
    label: "Combined components",
    links: [{
      url: "header-panel",
      name: "Header Panel",
      demo: "http://arthurclemens.github.io/Polythene-examples/header-panel.html"
    }, {
      url: "toolbar",
      name: "Toolbar",
      demo: "http://arthurclemens.github.io/Polythene-examples/index.html#/toolbar"
    }, {
      url: "list",
      name: "List",
      demo: "http://arthurclemens.github.io/Polythene-examples/index.html#/list"
    }, {
      url: "dialog",
      name: "Dialog",
      demo: "http://arthurclemens.github.io/Polythene-examples/index.html#/dialog"
    }]
  }, {
    label: "Components",
    links: [{
      url: "card",
      name: "Card",
      demo: "http://arthurclemens.github.io/Polythene-examples/index.html#/card"
    }, {
      url: "tabs",
      name: "Tabs",
      demo: "http://arthurclemens.github.io/Polythene-examples/index.html#/tabs"
    }, {
      url: "button",
      name: "Button",
      demo: "http://arthurclemens.github.io/Polythene-examples/index.html#/button"
    }, {
      url: "icon-button",
      name: "Icon Button",
      demo: "http://arthurclemens.github.io/Polythene-examples/index.html#/icon-button"
    }, {
      url: "fab",
      name: "Floating Action Button",
      demo: "http://arthurclemens.github.io/Polythene-examples/index.html#/fab"
    }, {
      url: "item",
      name: "Item",
      demo: "http://arthurclemens.github.io/Polythene-examples/index.html#/item"
    }, {
      url: "list-tile",
      name: "List Tile",
      demo: "http://arthurclemens.github.io/Polythene-examples/index.html#/list-tile"
    }]
  }, {
    label: "Elementary components",
    links: [{
      url: "svg",
      name: "SVG",
      demo: "http://arthurclemens.github.io/Polythene-examples/index.html#/svg"
    }, {
      url: "icon",
      name: "Icon",
      demo: "http://arthurclemens.github.io/Polythene-examples/index.html#/icon"
    }, {
      url: "ripple",
      name: "Ripple",
      demo: "http://arthurclemens.github.io/Polythene-examples/index.html#/ripple"
    }, {
      url: "shadow",
      name: "Shadow",
      demo: "http://arthurclemens.github.io/Polythene-examples/index.html#/shadow"
    }, {
      url: "element",
      name: "Element",
      demo: null
    }, {
      url: "font-roboto",
      name: "Roboto Font"
    }, {
      url: "layout",
      name: "Layout",
      demo: null
    }]
  }];
  linkMap = {};
  (0, _lodashCollectionForEach2["default"])(_lodashArray2["default"].flatten((0, _lodashCollectionPluck2["default"])(links, "links")), function(link) {
    linkMap[link.url] = link;
  });
  baseUrl = links[0].links[0].url;
  navItem = function(title, url, highlight) {
    return _mithril2["default"].component(_polytheneListTileListTile2["default"], {
      title: title,
      url: {
        href: url,
        config: _mithril2["default"].route
      },
      "class": highlight ? "highlight" : ""
    });
  };
  createDrawer = function() {
    var highlight;
    return (0, _mithril2["default"])(".drawer.dark-theme", _mithril2["default"].component(_polytheneHeaderPanelHeaderPanel2["default"], {
      header: {toolbar: {topBar: (0, _mithril2["default"])(".title", "Polythene")}},
      mode: "waterfall",
      fixed: true,
      content: [links.map(function(group) {
        return _mithril2["default"].component(_polytheneListList2["default"], {
          header: group.label ? {title: group.label} : null,
          tiles: group.links.map(function(link) {
            highlight = _mithril2["default"].route() === link.url;
            return navItem(link.name, link.url, highlight);
          })
        });
      }), (0, _mithril2["default"])(".footer", _mithril2["default"].trust('Polythene by Arthur Clemens 2015. Project page on <a href="https://github.com/ArthurClemens/Polythene">Github</a>.'))]
    }));
  };
  main = function(currentLinkData, content) {
    var title,
        id,
        parsed,
        url,
        demoCard,
        demoCardSubtitle = null;
    title = currentLinkData.name;
    id = currentLinkData.url;
    parsed = content ? (0, _marked2["default"])(content) : "";
    if (currentLinkData.demo !== null) {
      url = {
        href: currentLinkData.demo,
        target: "_blank"
      };
      demoCardSubtitle = id === "polythene" ? "All components" : title;
      demoCard = _mithril2["default"].component(_polytheneCardCard2["default"], {
        url: url,
        content: [{primary: {
            title: "Demo",
            subtitle: demoCardSubtitle
          }}, {actions: {
            "class": "bordered",
            content: [(0, _mithril2["default"])(".flex"), _mithril2["default"].component(_polytheneButtonButton2["default"], {
              label: "View",
              url: url
            })]
          }}]
      });
    }
    return (0, _mithril2["default"])(".main.flex", _mithril2["default"].component(_polytheneHeaderPanelHeaderPanel2["default"], {
      header: {toolbar: {topBar: (0, _mithril2["default"])(".title", title)}},
      mode: "waterfall",
      fixed: true,
      content: (0, _mithril2["default"])(".doc-content", [demoCard, _mithril2["default"].trust(parsed)])
    }));
  };
  app = {};
  app.vm = function() {
    return {init: function init() {
        app.vm.currentLink = function() {
          return linkMap[_mithril2["default"].route.param("module")];
        };
        app.vm.updateHead = function() {
          var currentLink,
              title;
          currentLink = app.vm.currentLink() || {};
          title = currentLink.title || currentLink.name + " - " + defaultTitle;
          document.title = title;
        };
      }};
  }.call();
  app.controller = function() {
    var docs;
    app.vm.init();
    docs = _mithril2["default"].request({
      method: "GET",
      url: "app/docs/" + _mithril2["default"].route.param("module") + ".md",
      background: false,
      deserialize: function deserialize(value) {
        return value;
      }
    });
    return {docs: docs};
  };
  app.view = function(ctrl) {
    var docData,
        currentLink;
    docData = ctrl.docs();
    currentLink = app.vm.currentLink();
    return [(0, _mithril2["default"])(".scaffold.layout.horizontal.reverse", {config: app.vm.updateHead}, [main(currentLink, docData), createDrawer()])];
  };
  _mithril2["default"].route.mode = "hash";
  _mithril2["default"].route(document.body, baseUrl, {":module": app});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/collection/pluck", ["lib/lodash/collection/map", "lib/lodash/utility/property"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var map = require("lib/lodash/collection/map"),
      property = require("lib/lodash/utility/property");
  function pluck(collection, path) {
    return map(collection, property(path));
  }
  module.exports = pluck;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/collection/forEach", ["lib/lodash/internal/arrayEach", "lib/lodash/internal/baseEach", "lib/lodash/internal/createForEach"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var arrayEach = require("lib/lodash/internal/arrayEach"),
      baseEach = require("lib/lodash/internal/baseEach"),
      createForEach = require("lib/lodash/internal/createForEach");
  var forEach = createForEach(arrayEach, baseEach);
  module.exports = forEach;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/list-tile/list-tile", ["lib/polythene/polythene/polythene", "lib/mithril/mithril.min", "lib/polythene/icon/icon", "lib/polythene/theme/list-tile/list-tile"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  Object.defineProperty(exports, "__esModule", {value: true});
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {"default": obj};
  }
  var _polythenePolythenePolythene = require("lib/polythene/polythene/polythene");
  var _polythenePolythenePolythene2 = _interopRequireDefault(_polythenePolythenePolythene);
  var _mithril = require("lib/mithril/mithril.min");
  var _mithril2 = _interopRequireDefault(_mithril);
  var _polytheneIconIcon = require("lib/polythene/icon/icon");
  var _polytheneIconIcon2 = _interopRequireDefault(_polytheneIconIcon);
  require("lib/polythene/theme/list-tile/list-tile");
  var parsePrimaryContent = function parsePrimaryContent(opts) {
    var tag = undefined,
        iconComp = undefined;
    if (opts.tag) {
      tag = opts.tag;
    } else {
      if (opts.url) {
        tag = "a.flex";
      } else {
        tag = "div.flex";
      }
    }
    iconComp = null;
    if (opts.icon) {
      iconComp = (0, _mithril2["default"])(".list-tile-content-icon", _mithril2["default"].component(_polytheneIconIcon2["default"], opts.icon));
    } else if (opts.indent) {
      iconComp = (0, _mithril2["default"])(".list-tile-content-icon");
    }
    return (0, _mithril2["default"])(tag, Object.assign({"class": "list-tile-primary"}, opts.url, opts.events), (0, _mithril2["default"])(".layout.horizontal.center", [iconComp, (0, _mithril2["default"])(".flex", {"class": "list-tile-content"}, [(0, _mithril2["default"])(".list-tile-title", [opts.title, opts.subtitle ? (0, _mithril2["default"])(".list-tile-info", opts.subtitle) : null, opts.highSubtitle ? (0, _mithril2["default"])(".list-tile-info.list-tile-double-info", opts.highSubtitle) : null])])]));
  };
  var parseSecondaryContent = function parseSecondaryContent(opts) {
    var secondaryOpts = opts.secondary || {};
    var defaultTag = opts.highSubtitle ? ".vertical.layout.start" : ".horizontal.layout.center";
    var tag = undefined;
    if (secondaryOpts.tag) {
      tag = secondaryOpts.tag;
    } else {
      if (secondaryOpts.url) {
        tag = "a" + defaultTag;
      } else {
        tag = "div" + defaultTag;
      }
    }
    return (0, _mithril2["default"])(".list-tile-secondary", (0, _mithril2["default"])(tag, Object.assign({"class": "list-tile-content"}, secondaryOpts.url, secondaryOpts.events), [secondaryOpts.icon ? _mithril2["default"].component(_polytheneIconIcon2["default"], secondaryOpts.icon) : null, secondaryOpts.content ? secondaryOpts.content : null]));
  };
  var createView = function createView(ctrl) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var tag = opts.tag || "div.horizontal.layout.center";
    var heightClass = undefined;
    if (opts.subtitle) {
      heightClass = "list-tile-two-line";
    } else if (opts.highSubtitle) {
      heightClass = "list-tile-three-line";
    } else {
      heightClass = "list-tile-single-line";
    }
    var iconClass = opts.icon || opts.indent ? "list-tile-has-icon" : null;
    var props = {
      "class": ["list-tile", heightClass, iconClass, opts["class"]].join(" "),
      config: opts.config
    };
    var content = [parsePrimaryContent(opts), opts.secondary ? parseSecondaryContent(opts) : null];
    return (0, _mithril2["default"])(tag, props, _polythenePolythenePolythene2["default"].insertContent(content, opts));
  };
  var component = {view: function view(ctrl) {
      var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      return createView(ctrl, opts);
    }};
  exports["default"] = component;
  module.exports = exports["default"];
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/list/list", ["lib/polythene/polythene/polythene", "lib/mithril/mithril.min", "lib/polythene/list-tile/list-tile", "lib/polythene/theme/list/list"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  Object.defineProperty(exports, "__esModule", {value: true});
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {"default": obj};
  }
  var _polythenePolythenePolythene = require("lib/polythene/polythene/polythene");
  var _polythenePolythenePolythene2 = _interopRequireDefault(_polythenePolythenePolythene);
  var _mithril = require("lib/mithril/mithril.min");
  var _mithril2 = _interopRequireDefault(_mithril);
  var _polytheneListTileListTile = require("lib/polythene/list-tile/list-tile");
  var _polytheneListTileListTile2 = _interopRequireDefault(_polytheneListTileListTile);
  require("lib/polythene/theme/list/list");
  var createView = function createView(ctrl) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var tag = opts.tag || "div";
    var listModeClass = opts.mode ? opts.mode : null;
    var props = {
      "class": ["list", listModeClass, opts.hoverable ? "hoverable" : null, opts.header ? "has-subheader" : null, opts["class"]].join(" "),
      config: opts.config
    };
    var headerOpts = undefined;
    if (opts.header) {
      headerOpts = Object.assign({}, opts.header);
      headerOpts["class"] = ["subheader", headerOpts["class"] || null].join(" ");
    }
    var content = [headerOpts ? _mithril2["default"].component(_polytheneListTileListTile2["default"], headerOpts) : null, opts.tiles ? opts.tiles : null];
    return (0, _mithril2["default"])(tag, props, _polythenePolythenePolythene2["default"].insertContent(content, opts));
  };
  var component = {view: function view(ctrl) {
      var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      return createView(ctrl, opts);
    }};
  exports["default"] = component;
  module.exports = exports["default"];
  global.define = __define;
  return module.exports;
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
(function() {
  var block = {
    newline: /^\n+/,
    code: /^( {4}[^\n]+\n*)+/,
    fences: noop,
    hr: /^( *[-*_]){3,} *(?:\n+|$)/,
    heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
    nptable: noop,
    lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
    blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
    list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
    html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
    table: noop,
    paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
    text: /^[^\n]+/
  };
  block.bullet = /(?:[*+-]|\d+\.)/;
  block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
  block.item = replace(block.item, "gm")(/bull/g, block.bullet)();
  block.list = replace(block.list)(/bull/g, block.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + block.def.source + ")")();
  block.blockquote = replace(block.blockquote)("def", block.def)();
  block._tag = "(?!(?:" + "a|em|strong|small|s|cite|q|dfn|abbr|data|time|code" + "|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo" + "|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";
  block.html = replace(block.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, block._tag)();
  block.paragraph = replace(block.paragraph)("hr", block.hr)("heading", block.heading)("lheading", block.lheading)("blockquote", block.blockquote)("tag", "<" + block._tag)("def", block.def)();
  block.normal = merge({}, block);
  block.gfm = merge({}, block.normal, {
    fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
    paragraph: /^/,
    heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
  });
  block.gfm.paragraph = replace(block.paragraph)("(?!", "(?!" + block.gfm.fences.source.replace("\\1", "\\2") + "|" + block.list.source.replace("\\1", "\\3") + "|")();
  block.tables = merge({}, block.gfm, {
    nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
    table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
  });
  function Lexer(options) {
    this.tokens = [];
    this.tokens.links = {};
    this.options = options || marked.defaults;
    this.rules = block.normal;
    if (this.options.gfm) {
      if (this.options.tables) {
        this.rules = block.tables;
      } else {
        this.rules = block.gfm;
      }
    }
  }
  Lexer.rules = block;
  Lexer.lex = function(src, options) {
    var lexer = new Lexer(options);
    return lexer.lex(src);
  };
  Lexer.prototype.lex = function(src) {
    src = src.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n");
    return this.token(src, true);
  };
  Lexer.prototype.token = function(src, top, bq) {
    var src = src.replace(/^ +$/gm, ""),
        next,
        loose,
        cap,
        bull,
        b,
        item,
        space,
        i,
        l;
    while (src) {
      if (cap = this.rules.newline.exec(src)) {
        src = src.substring(cap[0].length);
        if (cap[0].length > 1) {
          this.tokens.push({type: "space"});
        }
      }
      if (cap = this.rules.code.exec(src)) {
        src = src.substring(cap[0].length);
        cap = cap[0].replace(/^ {4}/gm, "");
        this.tokens.push({
          type: "code",
          text: !this.options.pedantic ? cap.replace(/\n+$/, "") : cap
        });
        continue;
      }
      if (cap = this.rules.fences.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: "code",
          lang: cap[2],
          text: cap[3] || ""
        });
        continue;
      }
      if (cap = this.rules.heading.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: "heading",
          depth: cap[1].length,
          text: cap[2]
        });
        continue;
      }
      if (top && (cap = this.rules.nptable.exec(src))) {
        src = src.substring(cap[0].length);
        item = {
          type: "table",
          header: cap[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
          align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
          cells: cap[3].replace(/\n$/, "").split("\n")
        };
        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = "right";
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = "center";
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = "left";
          } else {
            item.align[i] = null;
          }
        }
        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = item.cells[i].split(/ *\| */);
        }
        this.tokens.push(item);
        continue;
      }
      if (cap = this.rules.lheading.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: "heading",
          depth: cap[2] === "=" ? 1 : 2,
          text: cap[1]
        });
        continue;
      }
      if (cap = this.rules.hr.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({type: "hr"});
        continue;
      }
      if (cap = this.rules.blockquote.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({type: "blockquote_start"});
        cap = cap[0].replace(/^ *> ?/gm, "");
        this.token(cap, top, true);
        this.tokens.push({type: "blockquote_end"});
        continue;
      }
      if (cap = this.rules.list.exec(src)) {
        src = src.substring(cap[0].length);
        bull = cap[2];
        this.tokens.push({
          type: "list_start",
          ordered: bull.length > 1
        });
        cap = cap[0].match(this.rules.item);
        next = false;
        l = cap.length;
        i = 0;
        for (; i < l; i++) {
          item = cap[i];
          space = item.length;
          item = item.replace(/^ *([*+-]|\d+\.) +/, "");
          if (~item.indexOf("\n ")) {
            space -= item.length;
            item = !this.options.pedantic ? item.replace(new RegExp("^ {1," + space + "}", "gm"), "") : item.replace(/^ {1,4}/gm, "");
          }
          if (this.options.smartLists && i !== l - 1) {
            b = block.bullet.exec(cap[i + 1])[0];
            if (bull !== b && !(bull.length > 1 && b.length > 1)) {
              src = cap.slice(i + 1).join("\n") + src;
              i = l - 1;
            }
          }
          loose = next || /\n\n(?!\s*$)/.test(item);
          if (i !== l - 1) {
            next = item.charAt(item.length - 1) === "\n";
            if (!loose)
              loose = next;
          }
          this.tokens.push({type: loose ? "loose_item_start" : "list_item_start"});
          this.token(item, false, bq);
          this.tokens.push({type: "list_item_end"});
        }
        this.tokens.push({type: "list_end"});
        continue;
      }
      if (cap = this.rules.html.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: this.options.sanitize ? "paragraph" : "html",
          pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
          text: cap[0]
        });
        continue;
      }
      if (!bq && top && (cap = this.rules.def.exec(src))) {
        src = src.substring(cap[0].length);
        this.tokens.links[cap[1].toLowerCase()] = {
          href: cap[2],
          title: cap[3]
        };
        continue;
      }
      if (top && (cap = this.rules.table.exec(src))) {
        src = src.substring(cap[0].length);
        item = {
          type: "table",
          header: cap[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
          align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
          cells: cap[3].replace(/(?: *\| *)?\n$/, "").split("\n")
        };
        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = "right";
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = "center";
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = "left";
          } else {
            item.align[i] = null;
          }
        }
        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = item.cells[i].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
        }
        this.tokens.push(item);
        continue;
      }
      if (top && (cap = this.rules.paragraph.exec(src))) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: "paragraph",
          text: cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1]
        });
        continue;
      }
      if (cap = this.rules.text.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: "text",
          text: cap[0]
        });
        continue;
      }
      if (src) {
        throw new Error("Infinite loop on byte: " + src.charCodeAt(0));
      }
    }
    return this.tokens;
  };
  var inline = {
    escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
    autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
    url: noop,
    tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
    link: /^!?\[(inside)\]\(href\)/,
    reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
    nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
    strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
    em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
    code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
    br: /^ {2,}\n(?!\s*$)/,
    del: noop,
    text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
  };
  inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
  inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;
  inline.link = replace(inline.link)("inside", inline._inside)("href", inline._href)();
  inline.reflink = replace(inline.reflink)("inside", inline._inside)();
  inline.normal = merge({}, inline);
  inline.pedantic = merge({}, inline.normal, {
    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
  });
  inline.gfm = merge({}, inline.normal, {
    escape: replace(inline.escape)("])", "~|])")(),
    url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
    del: /^~~(?=\S)([\s\S]*?\S)~~/,
    text: replace(inline.text)("]|", "~]|")("|", "|https?://|")()
  });
  inline.breaks = merge({}, inline.gfm, {
    br: replace(inline.br)("{2,}", "*")(),
    text: replace(inline.gfm.text)("{2,}", "*")()
  });
  function InlineLexer(links, options) {
    this.options = options || marked.defaults;
    this.links = links;
    this.rules = inline.normal;
    this.renderer = this.options.renderer || new Renderer;
    this.renderer.options = this.options;
    if (!this.links) {
      throw new Error("Tokens array requires a `links` property.");
    }
    if (this.options.gfm) {
      if (this.options.breaks) {
        this.rules = inline.breaks;
      } else {
        this.rules = inline.gfm;
      }
    } else if (this.options.pedantic) {
      this.rules = inline.pedantic;
    }
  }
  InlineLexer.rules = inline;
  InlineLexer.output = function(src, links, options) {
    var inline = new InlineLexer(links, options);
    return inline.output(src);
  };
  InlineLexer.prototype.output = function(src) {
    var out = "",
        link,
        text,
        href,
        cap;
    while (src) {
      if (cap = this.rules.escape.exec(src)) {
        src = src.substring(cap[0].length);
        out += cap[1];
        continue;
      }
      if (cap = this.rules.autolink.exec(src)) {
        src = src.substring(cap[0].length);
        if (cap[2] === "@") {
          text = cap[1].charAt(6) === ":" ? this.mangle(cap[1].substring(7)) : this.mangle(cap[1]);
          href = this.mangle("mailto:") + text;
        } else {
          text = escape(cap[1]);
          href = text;
        }
        out += this.renderer.link(href, null, text);
        continue;
      }
      if (!this.inLink && (cap = this.rules.url.exec(src))) {
        src = src.substring(cap[0].length);
        text = escape(cap[1]);
        href = text;
        out += this.renderer.link(href, null, text);
        continue;
      }
      if (cap = this.rules.tag.exec(src)) {
        if (!this.inLink && /^<a /i.test(cap[0])) {
          this.inLink = true;
        } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
          this.inLink = false;
        }
        src = src.substring(cap[0].length);
        out += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
        continue;
      }
      if (cap = this.rules.link.exec(src)) {
        src = src.substring(cap[0].length);
        this.inLink = true;
        out += this.outputLink(cap, {
          href: cap[2],
          title: cap[3]
        });
        this.inLink = false;
        continue;
      }
      if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
        src = src.substring(cap[0].length);
        link = (cap[2] || cap[1]).replace(/\s+/g, " ");
        link = this.links[link.toLowerCase()];
        if (!link || !link.href) {
          out += cap[0].charAt(0);
          src = cap[0].substring(1) + src;
          continue;
        }
        this.inLink = true;
        out += this.outputLink(cap, link);
        this.inLink = false;
        continue;
      }
      if (cap = this.rules.strong.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.strong(this.output(cap[2] || cap[1]));
        continue;
      }
      if (cap = this.rules.em.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.em(this.output(cap[2] || cap[1]));
        continue;
      }
      if (cap = this.rules.code.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.codespan(escape(cap[2], true));
        continue;
      }
      if (cap = this.rules.br.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.br();
        continue;
      }
      if (cap = this.rules.del.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.del(this.output(cap[1]));
        continue;
      }
      if (cap = this.rules.text.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.text(escape(this.smartypants(cap[0])));
        continue;
      }
      if (src) {
        throw new Error("Infinite loop on byte: " + src.charCodeAt(0));
      }
    }
    return out;
  };
  InlineLexer.prototype.outputLink = function(cap, link) {
    var href = escape(link.href),
        title = link.title ? escape(link.title) : null;
    return cap[0].charAt(0) !== "!" ? this.renderer.link(href, title, this.output(cap[1])) : this.renderer.image(href, title, escape(cap[1]));
  };
  InlineLexer.prototype.smartypants = function(text) {
    if (!this.options.smartypants)
      return text;
    return text.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
  };
  InlineLexer.prototype.mangle = function(text) {
    if (!this.options.mangle)
      return text;
    var out = "",
        l = text.length,
        i = 0,
        ch;
    for (; i < l; i++) {
      ch = text.charCodeAt(i);
      if (Math.random() > .5) {
        ch = "x" + ch.toString(16);
      }
      out += "&#" + ch + ";";
    }
    return out;
  };
  function Renderer(options) {
    this.options = options || {};
  }
  Renderer.prototype.code = function(code, lang, escaped) {
    if (this.options.highlight) {
      var out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }
    if (!lang) {
      return "<pre><code>" + (escaped ? code : escape(code, true)) + "\n</code></pre>";
    }
    return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + "\n</code></pre>\n";
  };
  Renderer.prototype.blockquote = function(quote) {
    return "<blockquote>\n" + quote + "</blockquote>\n";
  };
  Renderer.prototype.html = function(html) {
    return html;
  };
  Renderer.prototype.heading = function(text, level, raw) {
    return "<h" + level + ' id="' + this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, "-") + '">' + text + "</h" + level + ">\n";
  };
  Renderer.prototype.hr = function() {
    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
  };
  Renderer.prototype.list = function(body, ordered) {
    var type = ordered ? "ol" : "ul";
    return "<" + type + ">\n" + body + "</" + type + ">\n";
  };
  Renderer.prototype.listitem = function(text) {
    return "<li>" + text + "</li>\n";
  };
  Renderer.prototype.paragraph = function(text) {
    return "<p>" + text + "</p>\n";
  };
  Renderer.prototype.table = function(header, body) {
    return "<table>\n" + "<thead>\n" + header + "</thead>\n" + "<tbody>\n" + body + "</tbody>\n" + "</table>\n";
  };
  Renderer.prototype.tablerow = function(content) {
    return "<tr>\n" + content + "</tr>\n";
  };
  Renderer.prototype.tablecell = function(content, flags) {
    var type = flags.header ? "th" : "td";
    var tag = flags.align ? "<" + type + ' style="text-align:' + flags.align + '">' : "<" + type + ">";
    return tag + content + "</" + type + ">\n";
  };
  Renderer.prototype.strong = function(text) {
    return "<strong>" + text + "</strong>";
  };
  Renderer.prototype.em = function(text) {
    return "<em>" + text + "</em>";
  };
  Renderer.prototype.codespan = function(text) {
    return "<code>" + text + "</code>";
  };
  Renderer.prototype.br = function() {
    return this.options.xhtml ? "<br/>" : "<br>";
  };
  Renderer.prototype.del = function(text) {
    return "<del>" + text + "</del>";
  };
  Renderer.prototype.link = function(href, title, text) {
    if (this.options.sanitize) {
      try {
        var prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, "").toLowerCase();
      } catch (e) {
        return "";
      }
      if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0) {
        return "";
      }
    }
    var out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  };
  Renderer.prototype.image = function(href, title, text) {
    var out = '<img src="' + href + '" alt="' + text + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += this.options.xhtml ? "/>" : ">";
    return out;
  };
  Renderer.prototype.text = function(text) {
    return text;
  };
  function Parser(options) {
    this.tokens = [];
    this.token = null;
    this.options = options || marked.defaults;
    this.options.renderer = this.options.renderer || new Renderer;
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
  }
  Parser.parse = function(src, options, renderer) {
    var parser = new Parser(options, renderer);
    return parser.parse(src);
  };
  Parser.prototype.parse = function(src) {
    this.inline = new InlineLexer(src.links, this.options, this.renderer);
    this.tokens = src.reverse();
    var out = "";
    while (this.next()) {
      out += this.tok();
    }
    return out;
  };
  Parser.prototype.next = function() {
    return this.token = this.tokens.pop();
  };
  Parser.prototype.peek = function() {
    return this.tokens[this.tokens.length - 1] || 0;
  };
  Parser.prototype.parseText = function() {
    var body = this.token.text;
    while (this.peek().type === "text") {
      body += "\n" + this.next().text;
    }
    return this.inline.output(body);
  };
  Parser.prototype.tok = function() {
    switch (this.token.type) {
      case "space":
        {
          return "";
        }
      case "hr":
        {
          return this.renderer.hr();
        }
      case "heading":
        {
          return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
        }
      case "code":
        {
          return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
        }
      case "table":
        {
          var header = "",
              body = "",
              i,
              row,
              cell,
              flags,
              j;
          cell = "";
          for (i = 0; i < this.token.header.length; i++) {
            flags = {
              header: true,
              align: this.token.align[i]
            };
            cell += this.renderer.tablecell(this.inline.output(this.token.header[i]), {
              header: true,
              align: this.token.align[i]
            });
          }
          header += this.renderer.tablerow(cell);
          for (i = 0; i < this.token.cells.length; i++) {
            row = this.token.cells[i];
            cell = "";
            for (j = 0; j < row.length; j++) {
              cell += this.renderer.tablecell(this.inline.output(row[j]), {
                header: false,
                align: this.token.align[j]
              });
            }
            body += this.renderer.tablerow(cell);
          }
          return this.renderer.table(header, body);
        }
      case "blockquote_start":
        {
          var body = "";
          while (this.next().type !== "blockquote_end") {
            body += this.tok();
          }
          return this.renderer.blockquote(body);
        }
      case "list_start":
        {
          var body = "",
              ordered = this.token.ordered;
          while (this.next().type !== "list_end") {
            body += this.tok();
          }
          return this.renderer.list(body, ordered);
        }
      case "list_item_start":
        {
          var body = "";
          while (this.next().type !== "list_item_end") {
            body += this.token.type === "text" ? this.parseText() : this.tok();
          }
          return this.renderer.listitem(body);
        }
      case "loose_item_start":
        {
          var body = "";
          while (this.next().type !== "list_item_end") {
            body += this.tok();
          }
          return this.renderer.listitem(body);
        }
      case "html":
        {
          var html = !this.token.pre && !this.options.pedantic ? this.inline.output(this.token.text) : this.token.text;
          return this.renderer.html(html);
        }
      case "paragraph":
        {
          return this.renderer.paragraph(this.inline.output(this.token.text));
        }
      case "text":
        {
          return this.renderer.paragraph(this.parseText());
        }
    }
  };
  function escape(html, encode) {
    return html.replace(!encode ? /&(?!#?\w+;)/g : /&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function unescape(html) {
    return html.replace(/&([#\w]+);/g, function(_, n) {
      n = n.toLowerCase();
      if (n === "colon")
        return ":";
      if (n.charAt(0) === "#") {
        return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
      }
      return "";
    });
  }
  function replace(regex, opt) {
    regex = regex.source;
    opt = opt || "";
    return function self(name, val) {
      if (!name)
        return new RegExp(regex, opt);
      val = val.source || val;
      val = val.replace(/(^|[^\[])\^/g, "$1");
      regex = regex.replace(name, val);
      return self;
    };
  }
  function noop() {}
  noop.exec = noop;
  function merge(obj) {
    var i = 1,
        target,
        key;
    for (; i < arguments.length; i++) {
      target = arguments[i];
      for (key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          obj[key] = target[key];
        }
      }
    }
    return obj;
  }
  function marked(src, opt, callback) {
    if (callback || typeof opt === "function") {
      if (!callback) {
        callback = opt;
        opt = null;
      }
      opt = merge({}, marked.defaults, opt || {});
      var highlight = opt.highlight,
          tokens,
          pending,
          i = 0;
      try {
        tokens = Lexer.lex(src, opt);
      } catch (e) {
        return callback(e);
      }
      pending = tokens.length;
      var done = function(err) {
        if (err) {
          opt.highlight = highlight;
          return callback(err);
        }
        var out;
        try {
          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }
        opt.highlight = highlight;
        return err ? callback(err) : callback(null, out);
      };
      if (!highlight || highlight.length < 3) {
        return done();
      }
      delete opt.highlight;
      if (!pending)
        return done();
      for (; i < tokens.length; i++) {
        (function(token) {
          if (token.type !== "code") {
            return --pending || done();
          }
          return highlight(token.text, token.lang, function(err, code) {
            if (err)
              return done(err);
            if (code == null || code === token.text) {
              return --pending || done();
            }
            token.text = code;
            token.escaped = true;
            --pending || done();
          });
        })(tokens[i]);
      }
      return;
    }
    try {
      if (opt)
        opt = merge({}, marked.defaults, opt);
      return Parser.parse(Lexer.lex(src, opt), opt);
    } catch (e) {
      e.message += "\nPlease report this to https://github.com/chjj/marked.";
      if ((opt || marked.defaults).silent) {
        return "<p>An error occured:</p><pre>" + escape(e.message + "", true) + "</pre>";
      }
      throw e;
    }
  }
  marked.options = marked.setOptions = function(opt) {
    merge(marked.defaults, opt);
    return marked;
  };
  marked.defaults = {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    sanitizer: null,
    mangle: true,
    smartLists: false,
    silent: false,
    highlight: null,
    langPrefix: "lang-",
    smartypants: false,
    headerPrefix: "",
    renderer: new Renderer,
    xhtml: false
  };
  marked.Parser = Parser;
  marked.parser = Parser.parse;
  marked.Renderer = Renderer;
  marked.Lexer = Lexer;
  marked.lexer = Lexer.lex;
  marked.InlineLexer = InlineLexer;
  marked.inlineLexer = InlineLexer.output;
  marked.parse = marked;
  if (typeof module !== "undefined" && typeof exports === "object") {
    module.exports = marked;
  } else if (typeof define === "function" && define.amd) {
    define("lib/marked/marked.min", [], function() {
      return marked;
    });
  } else {
    this.marked = marked;
  }
}).call(function() {
  return this || (typeof window !== "undefined" ? window : global);
}());

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
var m = function a(b, c) {
  function d(a) {
    D = a.document, E = a.location, G = a.cancelAnimationFrame || a.clearTimeout, F = a.requestAnimationFrame || a.setTimeout;
  }
  function e() {
    var a,
        b = [].slice.call(arguments),
        c = !(null == b[1] || L.call(b[1]) !== H || "tag" in b[1] || "view" in b[1] || "subtree" in b[1]),
        d = c ? b[1] : {},
        e = "class" in d ? "class" : "className",
        f = {
          tag: "div",
          attrs: {}
        },
        g = [];
    if (L.call(b[0]) != J)
      throw new Error("selector in m(selector, attrs, children) should be a string");
    for (; a = M.exec(b[0]); )
      if ("" === a[1] && a[2])
        f.tag = a[2];
      else if ("#" === a[1])
        f.attrs.id = a[2];
      else if ("." === a[1])
        g.push(a[2]);
      else if ("[" === a[3][0]) {
        var h = N.exec(a[3]);
        f.attrs[h[1]] = h[3] || (h[2] ? "" : !0);
      }
    var i = b.slice(c ? 2 : 1);
    f.children = 1 === i.length && L.call(i[0]) === I ? i[0] : i;
    for (var j in d)
      d.hasOwnProperty(j) && (j === e && null != d[j] && "" !== d[j] ? (g.push(d[j]), f.attrs[j] = "") : f.attrs[j] = d[j]);
    return g.length > 0 && (f.attrs[e] = g.join(" ")), f;
  }
  function f(a, b, d, j, l, m, n, o, p, q, r) {
    try {
      (null == l || null == l.toString()) && (l = "");
    } catch (s) {
      l = "";
    }
    if ("retain" === l.subtree)
      return m;
    var t = L.call(m),
        u = L.call(l);
    if (null == m || t !== u) {
      if (null != m)
        if (d && d.nodes) {
          var v = o - j,
              w = v + (u === I ? l : m.nodes).length;
          i(d.nodes.slice(v, w), d.slice(v, w));
        } else
          m.nodes && i(m.nodes, m);
      m = new l.constructor, m.tag && (m = {}), m.nodes = [];
    }
    if (u === I) {
      for (var x = 0,
          y = l.length; y > x; x++)
        L.call(l[x]) === I && (l = l.concat.apply([], l), x--, y = l.length);
      for (var z = [],
          A = m.length === l.length,
          B = 0,
          C = 1,
          E = 2,
          F = 3,
          G = {},
          M = !1,
          x = 0; x < m.length; x++)
        m[x] && m[x].attrs && null != m[x].attrs.key && (M = !0, G[m[x].attrs.key] = {
          action: C,
          index: x
        });
      for (var N = 0,
          x = 0,
          y = l.length; y > x; x++)
        if (l[x] && l[x].attrs && null != l[x].attrs.key) {
          for (var Q = 0,
              y = l.length; y > Q; Q++)
            l[Q] && l[Q].attrs && null == l[Q].attrs.key && (l[Q].attrs.key = "__mithril__" + N++);
          break;
        }
      if (M) {
        var R = !1;
        if (l.length != m.length)
          R = !0;
        else
          for (var S,
              T,
              x = 0; S = m[x], T = l[x]; x++)
            if (S.attrs && T.attrs && S.attrs.key != T.attrs.key) {
              R = !0;
              break;
            }
        if (R) {
          for (var x = 0,
              y = l.length; y > x; x++)
            if (l[x] && l[x].attrs && null != l[x].attrs.key) {
              var U = l[x].attrs.key;
              G[U] = G[U] ? {
                action: F,
                index: x,
                from: G[U].index,
                element: m.nodes[G[U].index] || D.createElement("div")
              } : {
                action: E,
                index: x
              };
            }
          var V = [];
          for (var W in G)
            V.push(G[W]);
          var X = V.sort(g),
              Y = new Array(m.length);
          Y.nodes = m.nodes.slice();
          for (var Z,
              x = 0; Z = X[x]; x++) {
            if (Z.action === C && (i(m[Z.index].nodes, m[Z.index]), Y.splice(Z.index, 1)), Z.action === E) {
              var $ = D.createElement("div");
              $.key = l[Z.index].attrs.key, a.insertBefore($, a.childNodes[Z.index] || null), Y.splice(Z.index, 0, {
                attrs: {key: l[Z.index].attrs.key},
                nodes: [$]
              }), Y.nodes[Z.index] = $;
            }
            Z.action === F && (a.childNodes[Z.index] !== Z.element && null !== Z.element && a.insertBefore(Z.element, a.childNodes[Z.index] || null), Y[Z.index] = m[Z.from], Y.nodes[Z.index] = Z.element);
          }
          m = Y;
        }
      }
      for (var x = 0,
          _ = 0,
          y = l.length; y > x; x++) {
        var bb = f(a, b, m, o, l[x], m[_], n, o + B || B, p, q, r);
        bb !== c && (bb.nodes.intact || (A = !1), B += bb.$trusted ? (bb.match(/<[^\/]|\>\s*[^<]/g) || [0]).length : L.call(bb) === I ? bb.length : 1, m[_++] = bb);
      }
      if (!A) {
        for (var x = 0,
            y = l.length; y > x; x++)
          null != m[x] && z.push.apply(z, m[x].nodes);
        for (var cb,
            x = 0; cb = m.nodes[x]; x++)
          null != cb.parentNode && z.indexOf(cb) < 0 && i([cb], [m[x]]);
        l.length < m.length && (m.length = l.length), m.nodes = z;
      }
    } else if (null != l && u === H) {
      for (var eb = [],
          fb = []; l.view; ) {
        var gb = l.view.$original || l.view,
            hb = "diff" == e.redraw.strategy() && m.views ? m.views.indexOf(gb) : -1,
            ib = hb > -1 ? m.controllers[hb] : new (l.controller || P),
            U = l && l.attrs && l.attrs.key;
        if (l = 0 == db || m && m.controllers && m.controllers.indexOf(ib) > -1 ? l.view(ib) : {tag: "placeholder"}, "retain" === l.subtree)
          return m;
        U && (l.attrs || (l.attrs = {}), l.attrs.key = U), ib.onunload && ab.push({
          controller: ib,
          handler: ib.onunload
        }), eb.push(gb), fb.push(ib);
      }
      if (!l.tag && fb.length)
        throw new Error("Component template must return a virtual element, not an array, string, etc.");
      l.attrs || (l.attrs = {}), m.attrs || (m.attrs = {});
      var jb = Object.keys(l.attrs),
          kb = jb.length > ("key" in l.attrs ? 1 : 0);
      if ((l.tag != m.tag || jb.sort().join() != Object.keys(m.attrs).sort().join() || l.attrs.id != m.attrs.id || l.attrs.key != m.attrs.key || "all" == e.redraw.strategy() && (!m.configContext || m.configContext.retain !== !0) || "diff" == e.redraw.strategy() && m.configContext && m.configContext.retain === !1) && (m.nodes.length && i(m.nodes), m.configContext && typeof m.configContext.onunload === K && m.configContext.onunload(), m.controllers))
        for (var ib,
            x = 0; ib = m.controllers[x]; x++)
          typeof ib.onunload === K && ib.onunload({preventDefault: P});
      if (L.call(l.tag) != J)
        return;
      var cb,
          lb = 0 === m.nodes.length;
      if (l.attrs.xmlns ? q = l.attrs.xmlns : "svg" === l.tag ? q = "http://www.w3.org/2000/svg" : "math" === l.tag && (q = "http://www.w3.org/1998/Math/MathML"), lb) {
        if (cb = l.attrs.is ? q === c ? D.createElement(l.tag, l.attrs.is) : D.createElementNS(q, l.tag, l.attrs.is) : q === c ? D.createElement(l.tag) : D.createElementNS(q, l.tag), m = {
          tag: l.tag,
          attrs: kb ? h(cb, l.tag, l.attrs, {}, q) : l.attrs,
          children: null != l.children && l.children.length > 0 ? f(cb, l.tag, c, c, l.children, m.children, !0, 0, l.attrs.contenteditable ? cb : p, q, r) : l.children,
          nodes: [cb]
        }, fb.length) {
          m.views = eb, m.controllers = fb;
          for (var ib,
              x = 0; ib = fb[x]; x++)
            if (ib.onunload && ib.onunload.$old && (ib.onunload = ib.onunload.$old), db && ib.onunload) {
              var mb = ib.onunload;
              ib.onunload = P, ib.onunload.$old = mb;
            }
        }
        m.children && !m.children.nodes && (m.children.nodes = []), "select" === l.tag && "value" in l.attrs && h(cb, l.tag, {value: l.attrs.value}, {}, q), a.insertBefore(cb, a.childNodes[o] || null);
      } else
        cb = m.nodes[0], kb && h(cb, l.tag, l.attrs, m.attrs, q), m.children = f(cb, l.tag, c, c, l.children, m.children, !1, 0, l.attrs.contenteditable ? cb : p, q, r), m.nodes.intact = !0, fb.length && (m.views = eb, m.controllers = fb), n === !0 && null != cb && a.insertBefore(cb, a.childNodes[o] || null);
      if (typeof l.attrs.config === K) {
        var nb = m.configContext = m.configContext || {},
            ob = function(a, b) {
              return function() {
                return a.attrs.config.apply(a, b);
              };
            };
        r.push(ob(l, [cb, !lb, nb, m]));
      }
    } else if (typeof l != K) {
      var z;
      0 === m.nodes.length ? (l.$trusted ? z = k(a, o, l) : (z = [D.createTextNode(l)], a.nodeName.match(O) || a.insertBefore(z[0], a.childNodes[o] || null)), m = "string number boolean".indexOf(typeof l) > -1 ? new l.constructor(l) : l, m.nodes = z) : m.valueOf() !== l.valueOf() || n === !0 ? (z = m.nodes, p && p === D.activeElement || (l.$trusted ? (i(z, m), z = k(a, o, l)) : "textarea" === b ? a.value = l : p ? p.innerHTML = l : ((1 === z[0].nodeType || z.length > 1) && (i(m.nodes, m), z = [D.createTextNode(l)]), a.insertBefore(z[0], a.childNodes[o] || null), z[0].nodeValue = l)), m = new l.constructor(l), m.nodes = z) : m.nodes.intact = !0;
    }
    return m;
  }
  function g(a, b) {
    return a.action - b.action || a.index - b.index;
  }
  function h(a, b, c, d, e) {
    for (var f in c) {
      var g = c[f],
          h = d[f];
      if (f in d && h === g)
        "value" === f && "input" === b && a.value != g && (a.value = g);
      else {
        d[f] = g;
        try {
          if ("config" === f || "key" == f)
            continue;
          if (typeof g === K && 0 === f.indexOf("on"))
            a[f] = l(g, a);
          else if ("style" === f && null != g && L.call(g) === H) {
            for (var i in g)
              (null == h || h[i] !== g[i]) && (a.style[i] = g[i]);
            for (var i in h)
              i in g || (a.style[i] = "");
          } else
            null != e ? "href" === f ? a.setAttributeNS("http://www.w3.org/1999/xlink", "href", g) : "className" === f ? a.setAttribute("class", g) : a.setAttribute(f, g) : f in a && "list" !== f && "style" !== f && "form" !== f && "type" !== f && "width" !== f && "height" !== f ? ("input" !== b || a[f] !== g) && (a[f] = g) : a.setAttribute(f, g);
        } catch (j) {
          if (j.message.indexOf("Invalid argument") < 0)
            throw j;
        }
      }
    }
    return d;
  }
  function i(a, b) {
    for (var c = a.length - 1; c > -1; c--)
      if (a[c] && a[c].parentNode) {
        try {
          a[c].parentNode.removeChild(a[c]);
        } catch (d) {}
        b = [].concat(b), b[c] && j(b[c]);
      }
    0 != a.length && (a.length = 0);
  }
  function j(a) {
    if (a.configContext && typeof a.configContext.onunload === K && (a.configContext.onunload(), a.configContext.onunload = null), a.controllers)
      for (var b,
          c = 0; b = a.controllers[c]; c++)
        typeof b.onunload === K && b.onunload({preventDefault: P});
    if (a.children)
      if (L.call(a.children) === I)
        for (var d,
            c = 0; d = a.children[c]; c++)
          j(d);
      else
        a.children.tag && j(a.children);
  }
  function k(a, b, c) {
    var d = a.childNodes[b];
    if (d) {
      var e = 1 != d.nodeType,
          f = D.createElement("span");
      e ? (a.insertBefore(f, d || null), f.insertAdjacentHTML("beforebegin", c), a.removeChild(f)) : d.insertAdjacentHTML("beforebegin", c);
    } else
      a.insertAdjacentHTML("beforeend", c);
    for (var g = []; a.childNodes[b] !== d; )
      g.push(a.childNodes[b]), b++;
    return g;
  }
  function l(a, b) {
    return function(c) {
      c = c || event, e.redraw.strategy("diff"), e.startComputation();
      try {
        return a.call(b, c);
      } finally {
        eb();
      }
    };
  }
  function m(a) {
    var b = S.indexOf(a);
    return 0 > b ? S.push(a) - 1 : b;
  }
  function n(a) {
    var b = function() {
      return arguments.length && (a = arguments[0]), a;
    };
    return b.toJSON = function() {
      return a;
    }, b;
  }
  function o(a, b) {
    var c = function() {
      return (a.controller || P).apply(this, b) || this;
    },
        d = function(c) {
          return arguments.length > 1 && (b = b.concat([].slice.call(arguments, 1))), a.view.apply(a, b ? [c].concat(b) : [c]);
        };
    d.$original = a.view;
    var e = {
      controller: c,
      view: d
    };
    return b[0] && null != b[0].key && (e.attrs = {key: b[0].key}), e;
  }
  function p() {
    $ && ($(), $ = null);
    for (var a,
        b = 0; a = V[b]; b++)
      if (X[b]) {
        var c = W[b].controller && W[b].controller.$$args ? [X[b]].concat(W[b].controller.$$args) : [X[b]];
        e.render(a, W[b].view ? W[b].view(X[b], c) : "");
      }
    _ && (_(), _ = null), Y = null, Z = new Date, e.redraw.strategy("diff");
  }
  function q(a) {
    return a.slice(hb[e.route.mode].length);
  }
  function r(a, b, c) {
    fb = {};
    var d = c.indexOf("?");
    -1 !== d && (fb = v(c.substr(d + 1, c.length)), c = c.substr(0, d));
    var f = Object.keys(b),
        g = f.indexOf(c);
    if (-1 !== g)
      return e.mount(a, b[f[g]]), !0;
    for (var h in b) {
      if (h === c)
        return e.mount(a, b[h]), !0;
      var i = new RegExp("^" + h.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "/?$");
      if (i.test(c))
        return c.replace(i, function() {
          for (var c = h.match(/:[^\/]+/g) || [],
              d = [].slice.call(arguments, 1, -2),
              f = 0,
              g = c.length; g > f; f++)
            fb[c[f].replace(/:|\./g, "")] = decodeURIComponent(d[f]);
          e.mount(a, b[h]);
        }), !0;
    }
  }
  function s(a) {
    if (a = a || event, !a.ctrlKey && !a.metaKey && 2 !== a.which) {
      a.preventDefault ? a.preventDefault() : a.returnValue = !1;
      for (var b = a.currentTarget || a.srcElement,
          c = "pathname" === e.route.mode && b.search ? v(b.search.slice(1)) : {}; b && "A" != b.nodeName.toUpperCase(); )
        b = b.parentNode;
      e.route(b[e.route.mode].slice(hb[e.route.mode].length), c);
    }
  }
  function t() {
    "hash" != e.route.mode && E.hash ? E.hash = E.hash : b.scrollTo(0, 0);
  }
  function u(a, b) {
    var d = {},
        e = [];
    for (var f in a) {
      var g = b ? b + "[" + f + "]" : f,
          h = a[f],
          i = L.call(h),
          j = null === h ? encodeURIComponent(g) : i === H ? u(h, g) : i === I ? h.reduce(function(a, b) {
            return d[g] || (d[g] = {}), d[g][b] ? a : (d[g][b] = !0, a.concat(encodeURIComponent(g) + "=" + encodeURIComponent(b)));
          }, []).join("&") : encodeURIComponent(g) + "=" + encodeURIComponent(h);
      h !== c && e.push(j);
    }
    return e.join("&");
  }
  function v(a) {
    "?" === a.charAt(0) && (a = a.substring(1));
    for (var b = a.split("&"),
        c = {},
        d = 0,
        e = b.length; e > d; d++) {
      var f = b[d].split("="),
          g = decodeURIComponent(f[0]),
          h = 2 == f.length ? decodeURIComponent(f[1]) : null;
      null != c[g] ? (L.call(c[g]) !== I && (c[g] = [c[g]]), c[g].push(h)) : c[g] = h;
    }
    return c;
  }
  function w(a) {
    var b = m(a);
    i(a.childNodes, T[b]), T[b] = c;
  }
  function x(a, b) {
    var c = e.prop(b);
    return a.then(c), c.then = function(c, d) {
      return x(a.then(c, d), b);
    }, c;
  }
  function y(a, b) {
    function c(a) {
      l = a || j, n.map(function(a) {
        l === i && a.resolve(m) || a.reject(m);
      });
    }
    function d(a, b, c, d) {
      if ((null != m && L.call(m) === H || typeof m === K) && typeof a === K)
        try {
          var f = 0;
          a.call(m, function(a) {
            f++ || (m = a, b());
          }, function(a) {
            f++ || (m = a, c());
          });
        } catch (g) {
          e.deferred.onerror(g), m = g, c();
        }
      else
        d();
    }
    function f() {
      var j;
      try {
        j = m && m.then;
      } catch (n) {
        return e.deferred.onerror(n), m = n, l = h, f();
      }
      d(j, function() {
        l = g, f();
      }, function() {
        l = h, f();
      }, function() {
        try {
          l === g && typeof a === K ? m = a(m) : l === h && "function" == typeof b && (m = b(m), l = g);
        } catch (f) {
          return e.deferred.onerror(f), m = f, c();
        }
        m === k ? (m = TypeError(), c()) : d(j, function() {
          c(i);
        }, c, function() {
          c(l === g && i);
        });
      });
    }
    var g = 1,
        h = 2,
        i = 3,
        j = 4,
        k = this,
        l = 0,
        m = 0,
        n = [];
    k.promise = {}, k.resolve = function(a) {
      return l || (m = a, l = g, f()), this;
    }, k.reject = function(a) {
      return l || (m = a, l = h, f()), this;
    }, k.promise.then = function(a, b) {
      var c = new y(a, b);
      return l === i ? c.resolve(m) : l === j ? c.reject(m) : n.push(c), c.promise;
    };
  }
  function z(a) {
    return a;
  }
  function A(a) {
    if (!a.dataType || "jsonp" !== a.dataType.toLowerCase()) {
      var d = new b.XMLHttpRequest;
      if (d.open(a.method, a.url, !0, a.user, a.password), d.onreadystatechange = function() {
        4 === d.readyState && (d.status >= 200 && d.status < 300 ? a.onload({
          type: "load",
          target: d
        }) : a.onerror({
          type: "error",
          target: d
        }));
      }, a.serialize === JSON.stringify && a.data && "GET" !== a.method && d.setRequestHeader("Content-Type", "application/json; charset=utf-8"), a.deserialize === JSON.parse && d.setRequestHeader("Accept", "application/json, text/*"), typeof a.config === K) {
        var e = a.config(d, a);
        null != e && (d = e);
      }
      var f = "GET" !== a.method && a.data ? a.data : "";
      if (f && L.call(f) != J && f.constructor != b.FormData)
        throw "Request data should be either be a string or FormData. Check the `serialize` option in `m.request`";
      return d.send(f), d;
    }
    var g = "mithril_callback_" + (new Date).getTime() + "_" + Math.round(1e16 * Math.random()).toString(36),
        h = D.createElement("script");
    b[g] = function(d) {
      h.parentNode.removeChild(h), a.onload({
        type: "load",
        target: {responseText: d}
      }), b[g] = c;
    }, h.onerror = function() {
      return h.parentNode.removeChild(h), a.onerror({
        type: "error",
        target: {
          status: 500,
          responseText: JSON.stringify({error: "Error making jsonp request"})
        }
      }), b[g] = c, !1;
    }, h.onload = function() {
      return !1;
    }, h.src = a.url + (a.url.indexOf("?") > 0 ? "&" : "?") + (a.callbackKey ? a.callbackKey : "callback") + "=" + g + "&" + u(a.data || {}), D.body.appendChild(h);
  }
  function B(a, b, c) {
    if ("GET" === a.method && "jsonp" != a.dataType) {
      var d = a.url.indexOf("?") < 0 ? "?" : "&",
          e = u(b);
      a.url = a.url + (e ? d + e : "");
    } else
      a.data = c(b);
    return a;
  }
  function C(a, b) {
    var c = a.match(/:[a-z]\w+/gi);
    if (c && b)
      for (var d = 0; d < c.length; d++) {
        var e = c[d].slice(1);
        a = a.replace(c[d], b[e]), delete b[e];
      }
    return a;
  }
  var D,
      E,
      F,
      G,
      H = "[object Object]",
      I = "[object Array]",
      J = "[object String]",
      K = "function",
      L = {}.toString,
      M = /(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g,
      N = /\[(.+?)(?:=("|'|)(.*?)\2)?\]/,
      O = /^(AREA|BASE|BR|COL|COMMAND|EMBED|HR|IMG|INPUT|KEYGEN|LINK|META|PARAM|SOURCE|TRACK|WBR)$/,
      P = function() {};
  d(b);
  var Q,
      R = {
        appendChild: function(a) {
          Q === c && (Q = D.createElement("html")), D.documentElement && D.documentElement !== a ? D.replaceChild(a, D.documentElement) : D.appendChild(a), this.childNodes = D.childNodes;
        },
        insertBefore: function(a) {
          this.appendChild(a);
        },
        childNodes: []
      },
      S = [],
      T = {};
  e.render = function(a, b, d) {
    var e = [];
    if (!a)
      throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");
    var g = m(a),
        h = a === D,
        j = h || a === D.documentElement ? R : a;
    h && "html" != b.tag && (b = {
      tag: "html",
      attrs: {},
      children: b
    }), T[g] === c && i(j.childNodes), d === !0 && w(a), T[g] = f(j, null, c, c, b, T[g], !1, 0, null, c, e);
    for (var k = 0,
        l = e.length; l > k; k++)
      e[k]();
  }, e.trust = function(a) {
    return a = new String(a), a.$trusted = !0, a;
  }, e.prop = function(a) {
    return (null != a && L.call(a) === H || typeof a === K) && typeof a.then === K ? x(a) : n(a);
  };
  var U,
      V = [],
      W = [],
      X = [],
      Y = null,
      Z = 0,
      $ = null,
      _ = null,
      ab = [],
      bb = 16;
  e.component = function(a) {
    return o(a, [].slice.call(arguments, 1));
  }, e.mount = e.module = function(a, b) {
    if (!a)
      throw new Error("Please ensure the DOM element exists before rendering a template into it.");
    var c = V.indexOf(a);
    0 > c && (c = V.length);
    for (var d,
        f = !1,
        g = {preventDefault: function() {
            f = !0, $ = _ = null;
          }},
        h = 0; d = ab[h]; h++)
      d.handler.call(d.controller, g), d.controller.onunload = null;
    if (f)
      for (var d,
          h = 0; d = ab[h]; h++)
        d.controller.onunload = d.handler;
    else
      ab = [];
    if (X[c] && typeof X[c].onunload === K && X[c].onunload(g), !f) {
      e.redraw.strategy("all"), e.startComputation(), V[c] = a, arguments.length > 2 && (b = subcomponent(b, [].slice.call(arguments, 2)));
      var i = U = b = b || {controller: function() {}},
          j = b.controller || P,
          k = new j;
      return i === U && (X[c] = k, W[c] = b), eb(), X[c];
    }
  };
  var cb = !1;
  e.redraw = function(a) {
    cb || (cb = !0, Y && a !== !0 ? (F === b.requestAnimationFrame || new Date - Z > bb) && (Y > 0 && G(Y), Y = F(p, bb)) : (p(), Y = F(function() {
      Y = null;
    }, bb)), cb = !1);
  }, e.redraw.strategy = e.prop();
  var db = 0;
  e.startComputation = function() {
    db++;
  }, e.endComputation = function() {
    db = Math.max(db - 1, 0), 0 === db && e.redraw();
  };
  var eb = function() {
    "none" == e.redraw.strategy() ? (db--, e.redraw.strategy("diff")) : e.endComputation();
  };
  e.withAttr = function(a, b) {
    return function(c) {
      c = c || event;
      var d = c.currentTarget || this;
      b(a in d ? d[a] : d.getAttribute(a));
    };
  };
  var fb,
      gb,
      hb = {
        pathname: "",
        hash: "#",
        search: "?"
      },
      ib = P,
      jb = !1;
  return e.route = function() {
    if (0 === arguments.length)
      return gb;
    if (3 === arguments.length && L.call(arguments[1]) === J) {
      var a = arguments[0],
          c = arguments[1],
          d = arguments[2];
      ib = function(b) {
        var f = gb = q(b);
        if (!r(a, d, f)) {
          if (jb)
            throw new Error("Ensure the default route matches one of the routes defined in m.route");
          jb = !0, e.route(c, !0), jb = !1;
        }
      };
      var f = "hash" === e.route.mode ? "onhashchange" : "onpopstate";
      b[f] = function() {
        var a = E[e.route.mode];
        "pathname" === e.route.mode && (a += E.search), gb != q(a) && ib(a);
      }, $ = t, b[f]();
    } else if (arguments[0].addEventListener || arguments[0].attachEvent) {
      var g = arguments[0],
          h = (arguments[1], arguments[2], arguments[3]);
      g.href = ("pathname" !== e.route.mode ? E.pathname : "") + hb[e.route.mode] + h.attrs.href, g.addEventListener ? (g.removeEventListener("click", s), g.addEventListener("click", s)) : (g.detachEvent("onclick", s), g.attachEvent("onclick", s));
    } else if (L.call(arguments[0]) === J) {
      var i = gb;
      gb = arguments[0];
      var j = arguments[1] || {},
          k = gb.indexOf("?"),
          l = k > -1 ? v(gb.slice(k + 1)) : {};
      for (var m in j)
        l[m] = j[m];
      var n = u(l),
          o = k > -1 ? gb.slice(0, k) : gb;
      n && (gb = o + (-1 === o.indexOf("?") ? "?" : "&") + n);
      var p = (3 === arguments.length ? arguments[2] : arguments[1]) === !0 || i === arguments[0];
      b.history.pushState ? ($ = t, _ = function() {
        b.history[p ? "replaceState" : "pushState"](null, D.title, hb[e.route.mode] + gb);
      }, ib(hb[e.route.mode] + gb)) : (E[e.route.mode] = gb, ib(hb[e.route.mode] + gb));
    }
  }, e.route.param = function(a) {
    if (!fb)
      throw new Error("You must call m.route(element, defaultRoute, routes) before calling m.route.param()");
    return fb[a];
  }, e.route.mode = "search", e.route.buildQueryString = u, e.route.parseQueryString = v, e.deferred = function() {
    var a = new y;
    return a.promise = x(a.promise), a;
  }, e.deferred.onerror = function(a) {
    if ("[object Error]" === L.call(a) && !a.constructor.toString().match(/ Error/))
      throw a;
  }, e.sync = function(a) {
    function b(a, b) {
      return function(e) {
        return g[a] = e, b || (c = "reject"), 0 === --f && (d.promise(g), d[c](g)), e;
      };
    }
    var c = "resolve",
        d = e.deferred(),
        f = a.length,
        g = new Array(f);
    if (a.length > 0)
      for (var h = 0; h < a.length; h++)
        a[h].then(b(h, !0), b(h, !1));
    else
      d.resolve([]);
    return d.promise;
  }, e.request = function(a) {
    a.background !== !0 && e.startComputation();
    var b = new y,
        c = a.dataType && "jsonp" === a.dataType.toLowerCase(),
        d = a.serialize = c ? z : a.serialize || JSON.stringify,
        f = a.deserialize = c ? z : a.deserialize || JSON.parse,
        g = c ? function(a) {
          return a.responseText;
        } : a.extract || function(a) {
          return 0 === a.responseText.length && f === JSON.parse ? null : a.responseText;
        };
    return a.method = (a.method || "GET").toUpperCase(), a.url = C(a.url, a.data), a = B(a, a.data, d), a.onload = a.onerror = function(c) {
      try {
        c = c || event;
        var d = ("load" === c.type ? a.unwrapSuccess : a.unwrapError) || z,
            h = d(f(g(c.target, a)), c.target);
        if ("load" === c.type)
          if (L.call(h) === I && a.type)
            for (var i = 0; i < h.length; i++)
              h[i] = new a.type(h[i]);
          else
            a.type && (h = new a.type(h));
        b["load" === c.type ? "resolve" : "reject"](h);
      } catch (c) {
        e.deferred.onerror(c), b.reject(c);
      }
      a.background !== !0 && e.endComputation();
    }, A(a), b.promise = x(b.promise, a.initialValue), b.promise;
  }, e.deps = function(a) {
    return d(b = a || b), b;
  }, e.deps.factory = a, e;
}("undefined" != typeof window ? window : {});
"undefined" != typeof module && null !== module && module.exports ? module.exports = m : "function" == typeof define && define.amd && define("lib/mithril/mithril.min", [], function() {
  return m;
});

_removeDefine();
})();
System.registerDynamic("lib/lodash/array", ["lib/lodash/array/chunk", "lib/lodash/array/compact", "lib/lodash/array/difference", "lib/lodash/array/drop", "lib/lodash/array/dropRight", "lib/lodash/array/dropRightWhile", "lib/lodash/array/dropWhile", "lib/lodash/array/fill", "lib/lodash/array/findIndex", "lib/lodash/array/findLastIndex", "lib/lodash/array/first", "lib/lodash/array/flatten", "lib/lodash/array/flattenDeep", "lib/lodash/array/head", "lib/lodash/array/indexOf", "lib/lodash/array/initial", "lib/lodash/array/intersection", "lib/lodash/array/last", "lib/lodash/array/lastIndexOf", "lib/lodash/array/object", "lib/lodash/array/pull", "lib/lodash/array/pullAt", "lib/lodash/array/remove", "lib/lodash/array/rest", "lib/lodash/array/slice", "lib/lodash/array/sortedIndex", "lib/lodash/array/sortedLastIndex", "lib/lodash/array/tail", "lib/lodash/array/take", "lib/lodash/array/takeRight", "lib/lodash/array/takeRightWhile", "lib/lodash/array/takeWhile", "lib/lodash/array/union", "lib/lodash/array/uniq", "lib/lodash/array/unique", "lib/lodash/array/unzip", "lib/lodash/array/unzipWith", "lib/lodash/array/without", "lib/lodash/array/xor", "lib/lodash/array/zip", "lib/lodash/array/zipObject", "lib/lodash/array/zipWith"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    'chunk': require("lib/lodash/array/chunk"),
    'compact': require("lib/lodash/array/compact"),
    'difference': require("lib/lodash/array/difference"),
    'drop': require("lib/lodash/array/drop"),
    'dropRight': require("lib/lodash/array/dropRight"),
    'dropRightWhile': require("lib/lodash/array/dropRightWhile"),
    'dropWhile': require("lib/lodash/array/dropWhile"),
    'fill': require("lib/lodash/array/fill"),
    'findIndex': require("lib/lodash/array/findIndex"),
    'findLastIndex': require("lib/lodash/array/findLastIndex"),
    'first': require("lib/lodash/array/first"),
    'flatten': require("lib/lodash/array/flatten"),
    'flattenDeep': require("lib/lodash/array/flattenDeep"),
    'head': require("lib/lodash/array/head"),
    'indexOf': require("lib/lodash/array/indexOf"),
    'initial': require("lib/lodash/array/initial"),
    'intersection': require("lib/lodash/array/intersection"),
    'last': require("lib/lodash/array/last"),
    'lastIndexOf': require("lib/lodash/array/lastIndexOf"),
    'object': require("lib/lodash/array/object"),
    'pull': require("lib/lodash/array/pull"),
    'pullAt': require("lib/lodash/array/pullAt"),
    'remove': require("lib/lodash/array/remove"),
    'rest': require("lib/lodash/array/rest"),
    'slice': require("lib/lodash/array/slice"),
    'sortedIndex': require("lib/lodash/array/sortedIndex"),
    'sortedLastIndex': require("lib/lodash/array/sortedLastIndex"),
    'tail': require("lib/lodash/array/tail"),
    'take': require("lib/lodash/array/take"),
    'takeRight': require("lib/lodash/array/takeRight"),
    'takeRightWhile': require("lib/lodash/array/takeRightWhile"),
    'takeWhile': require("lib/lodash/array/takeWhile"),
    'union': require("lib/lodash/array/union"),
    'uniq': require("lib/lodash/array/uniq"),
    'unique': require("lib/lodash/array/unique"),
    'unzip': require("lib/lodash/array/unzip"),
    'unzipWith': require("lib/lodash/array/unzipWith"),
    'without': require("lib/lodash/array/without"),
    'xor': require("lib/lodash/array/xor"),
    'zip': require("lib/lodash/array/zip"),
    'zipObject': require("lib/lodash/array/zipObject"),
    'zipWith': require("lib/lodash/array/zipWith")
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/theme/theme", ["lib/polythene/layout/layout", "lib/polythene/font-roboto/font-roboto", "lib/polythene/theme/theme.css!lib/system-css/css"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  require("lib/polythene/layout/layout");
  require("lib/polythene/font-roboto/font-roboto");
  require("lib/polythene/theme/theme.css!lib/system-css/css");
  var isTouchDevice = function isTouchDevice() {
    return "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  };
  document.querySelector("html").classList.add(isTouchDevice() ? "touch" : "no-touch");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/button/button", ["lib/polythene/polythene/polythene", "lib/mithril/mithril.min", "lib/polythene/ripple/ripple", "lib/polythene/shadow/shadow", "lib/polythene/theme/button/button"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  Object.defineProperty(exports, "__esModule", {value: true});
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {"default": obj};
  }
  var _polythenePolythenePolythene = require("lib/polythene/polythene/polythene");
  var _polythenePolythenePolythene2 = _interopRequireDefault(_polythenePolythenePolythene);
  var _mithril = require("lib/mithril/mithril.min");
  var _mithril2 = _interopRequireDefault(_mithril);
  var _polytheneRippleRipple = require("lib/polythene/ripple/ripple");
  var _polytheneRippleRipple2 = _interopRequireDefault(_polytheneRippleRipple);
  var _polytheneShadowShadow = require("lib/polythene/shadow/shadow");
  var _polytheneShadowShadow2 = _interopRequireDefault(_polytheneShadowShadow);
  require("lib/polythene/theme/button/button");
  var tapStart = undefined,
      tapEnd = undefined;
  var initTapEvents = function initTapEvents(el, ctrl, opts) {
    var tapHandler = function tapHandler(evt) {
      var baseZ = ctrl.baseZ();
      if (baseZ === 5) {
        return;
      }
      var MAX_Z = 5;
      var increase = opts.increase || 1;
      var z = ctrl.z();
      if (evt === "down") {
        z = z + increase;
        z = Math.min(z, MAX_Z);
      } else if (evt === "up") {
        z = z - increase;
        z = Math.max(z, baseZ);
      }
      ctrl.z(z);
      _mithril2["default"].redraw();
    };
    tapStart = function() {
      tapHandler("down");
    };
    tapEnd = function() {
      tapHandler("up");
    };
    el.addEventListener("mousedown", tapStart);
    el.addEventListener("mouseup", tapEnd);
  };
  var clearTapEvents = function clearTapEvents(el) {
    el.removeEventListener("mousedown", tapStart);
    el.removeEventListener("mouseup", tapEnd);
  };
  var createView = function createView(ctrl) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var tag = undefined,
        label = undefined;
    opts.ripple = opts.ripple || {};
    opts.shadow = opts.shadow || {};
    tag = opts.tag || "a";
    var noink = opts.ink !== undefined && !opts.ink;
    var disabled = opts.disabled === true;
    if (disabled) {
      tag += "[disabled]";
    }
    if (noink) {
      tag += ".noink";
    }
    if (opts.raised) {
      tag += ".raised";
    }
    var props0 = {"class": [opts.parentClass || "button", opts.selected ? "selected" : null, opts["class"]].join(" ")};
    var props = !disabled ? Object.assign({}, props0, {config: function config(el, isInited, context) {
        if (opts.config) {
          opts.config(el, isInited, context);
        }
        if (isInited) {
          return;
        }
        initTapEvents(el, ctrl, opts.shadow);
        context.onunload = function() {
          clearTapEvents(el);
        };
      }}, opts.url ? opts.url : null, opts.events ? opts.events : null) : props0;
    label = null;
    if (opts.content) {
      label = opts.content;
    } else if (opts.label) {
      if (typeof opts.label === "object") {
        label = opts.label;
      } else {
        label = (0, _mithril2["default"])(".label", opts.label);
      }
    }
    var content = (0, _mithril2["default"])("div", {"class": "content"}, [label, disabled || noink ? null : _mithril2["default"].component(_polytheneRippleRipple2["default"], opts.ripple), disabled || opts.wash !== undefined && !opts.wash ? null : (0, _mithril2["default"])(".wash.fit"), opts.raised && !disabled ? _mithril2["default"].component(_polytheneShadowShadow2["default"], {
      z: ctrl.z(),
      animated: true
    }) : null]);
    return (0, _mithril2["default"])(tag, props, _polythenePolythenePolythene2["default"].insertContent(content, opts));
  };
  var component = {
    controller: function controller() {
      var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var z = opts.z !== undefined ? opts.z : 1;
      return {
        baseZ: _mithril2["default"].prop(z),
        z: _mithril2["default"].prop(z)
      };
    },
    view: function view(ctrl) {
      var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      return createView(ctrl, opts);
    }
  };
  exports["default"] = component;
  module.exports = exports["default"];
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/header-panel/header-panel", ["lib/polythene/polythene/polythene", "lib/mithril/mithril.min", "lib/polythene/toolbar/toolbar", "lib/polythene/theme/header-panel/header-panel"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  Object.defineProperty(exports, "__esModule", {value: true});
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {"default": obj};
  }
  var _polythenePolythenePolythene = require("lib/polythene/polythene/polythene");
  var _polythenePolythenePolythene2 = _interopRequireDefault(_polythenePolythenePolythene);
  var _mithril = require("lib/mithril/mithril.min");
  var _mithril2 = _interopRequireDefault(_mithril);
  var _polytheneToolbarToolbar = require("lib/polythene/toolbar/toolbar");
  var _polytheneToolbarToolbar2 = _interopRequireDefault(_polytheneToolbarToolbar);
  require("lib/polythene/theme/header-panel/header-panel");
  var DEFAULT_SHADOW_HEIGTH = 6;
  var DEFAULT_HEADER_HEIGHT = 192;
  var DEFAULT_CONDENSED_HEADER_HEIGHT = DEFAULT_HEADER_HEIGHT / 3;
  var SCROLL_WATCH_TIMER = 150;
  var scroller = undefined;
  var modeConfigs = {
    shadowAfterScroll: {
      waterfall: 1,
      "waterfall-tall": 1
    },
    alwaysShadow: {
      standard: 1,
      tall: 1
    },
    noShadow: {
      seamed: 1,
      cover: 1,
      scroll: 1
    },
    tallMode: {
      tall: true,
      "waterfall-tall": true
    },
    outerScroll: {scroll: 1}
  };
  var setTransform = document.documentElement.style.transform !== undefined ? function(style, string) {
    style.transform = string;
  } : function(style, string) {
    style.webkitTransform = string;
  };
  var translateY = function translateY(s, y) {
    var t = y === null ? "" : "translate3d(0, " + y + "px, 0)";
    setTransform(s, t);
  };
  var createHeaderComponent = function createHeaderComponent() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var tall = opts.tall || false;
    var tallClass = opts.tallClass || "";
    if (opts.toolbar) {
      opts.toolbar["class"] = [opts.toolbar["class"] || null, tall ? tallClass : null].join(" ");
      return _mithril2["default"].component(_polytheneToolbarToolbar2["default"], opts.toolbar);
    } else if (opts.content) {
      return (0, _mithril2["default"])([".header", opts.animated ? " .animate" : ""].join(" "), {"class": [opts["class"] || null, tall ? tallClass : null].join(" ")}, opts.content);
    } else {
      return (0, _mithril2["default"])("div", opts);
    }
  };
  var createViewHeader = function createViewHeader(ctrl) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var initHeaderContainer = function initHeaderContainer(headerContainer, inited) {
      if (inited) {
        return;
      }
      ctrl.headerContainerElem(headerContainer);
    };
    var header = opts.header ? createHeaderComponent(Object.assign({}, opts.header, ctrl.headerConfig)) : null;
    return (0, _mithril2["default"])(".headerContainer", {config: initHeaderContainer}, [(0, _mithril2["default"])(".bg-container", [(0, _mithril2["default"])(".condensedHeaderBg"), (0, _mithril2["default"])(".headerBg"), (0, _mithril2["default"])(".image-dimmer")]), header, ctrl.mode() === "seamed" || ctrl.shadow() === false ? null : (0, _mithril2["default"])(".dropShadow")]);
  };
  var createViewContent = function createViewContent(ctrl, scrollConfig) {
    var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
    var initMainContainer = function initMainContainer(mainContainer, inited) {
      if (inited) {
        return;
      }
      if (scrollConfig.main) {
        ctrl.scrollerElem(mainContainer);
      }
    };
    return [(0, _mithril2["default"])(".mainContainer.flex", {
      config: initMainContainer,
      onscroll: scrollConfig.main
    }, opts.content ? opts.content : null)];
  };
  var createView = function createView(ctrl) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var scrollConfig = undefined;
    opts.header = opts.header || {};
    opts.configs = opts.configs || [];
    ctrl.init(ctrl);
    var updateContentOnScroll = opts.updateContentOnScroll || false;
    var ignoreContent = !updateContentOnScroll && ctrl.isScrolling();
    var scrollerType = modeConfigs.outerScroll[ctrl.mode()] ? "outer" : "main";
    var handleScroll = ctrl.handleScroll.bind(ctrl);
    var header = createViewHeader(ctrl, opts);
    var tag = opts.tag || "div";
    scrollConfig = {};
    scrollConfig[scrollerType] = handleScroll;
    var initOuterContainer = function initOuterContainer(outerContainer, inited) {
      var headerElem = outerContainer.querySelector(".header") || outerContainer.querySelector(".toolbar");
      if (!headerElem) {
        return;
      }
      if (inited && ctrl.headerElem()) {
        return;
      }
      var headerContainer = outerContainer.querySelector(".headerContainer");
      var topBarElem = headerContainer.querySelector(".topBar");
      var headerBg = headerContainer.querySelector(".headerBg");
      var condensedHeaderBg = headerContainer.querySelector(".condensedHeaderBg");
      ctrl.outerContainerElem(outerContainer);
      ctrl.headerElem(headerElem);
      ctrl.headerTopBarElem(topBarElem);
      ctrl.headerBg(headerBg);
      ctrl.condensedHeaderBg(condensedHeaderBg);
      if (!opts.animated) {
        ctrl.setHeight(headerContainer.clientHeight);
      }
      if (scrollConfig.outer) {
        ctrl.scrollerElem(outerContainer);
      }
      handleScroll();
    };
    var props = Object.assign({}, {
      mode: ctrl.mode(),
      "class": ["header-panel", opts.animated ? "animated" : null, ctrl.fixed() ? "fixed" : null, opts["class"]].join(" "),
      config: opts.config
    });
    var content = (0, _mithril2["default"])(".outerContainer.vertical.layout", {
      config: initOuterContainer,
      onscroll: scrollConfig.outer
    }, [header, ignoreContent ? {subtree: "retain"} : createViewContent(ctrl, scrollConfig, opts)]);
    return (0, _mithril2["default"])(tag, props, _polythenePolythenePolythene2["default"].insertContent(content, opts));
  };
  var component = {
    controller: function controller() {
      var _this = this;
      var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var ctrl = undefined,
          mode = undefined,
          y = undefined,
          scrolled = undefined,
          prevScrollTop = undefined,
          headerMargin = undefined,
          headerHeight = undefined;
      if (opts.mode) {
        mode = opts.mode;
      } else if (opts.header.toolbar) {
        mode = opts.header.toolbar.mode;
      } else if (opts.header.content) {
        mode = opts.header.mode;
      }
      mode = mode || "standard";
      var tall = modeConfigs.tallMode[mode] || false;
      var tallClass = opts.tallClass || "tall";
      var animated = opts.animated || false;
      var fixed = opts.fixed || false;
      var condenses = opts.condenses || false;
      var scrollAwayTopbar = opts.scrollAwayTopbar || false;
      var noReveal = opts.noReveal || false;
      var keepCondensedHeader = opts.keepCondensedHeader || false;
      var noDissolve = opts.noDissolve || false;
      var backgroundScrollSpeed = opts.backgroundScrollSpeed !== undefined ? opts.backgroundScrollSpeed : .5;
      y = 0;
      scrolled = false;
      prevScrollTop = 0;
      var shadowHeight = DEFAULT_SHADOW_HEIGTH;
      headerHeight = (opts.headerHeight || DEFAULT_HEADER_HEIGHT) + shadowHeight;
      var condensedHeaderHeight = (opts.condensedHeaderHeight || DEFAULT_CONDENSED_HEADER_HEIGHT) + shadowHeight;
      headerMargin = headerHeight - condensedHeaderHeight;
      var handleScrollFns = {
        standard: function standard() {},
        fixed: function fixed() {
          var sTop = undefined,
              isScrolled = undefined;
          sTop = ctrl.scrollerElem().scrollTop;
          isScrolled = sTop !== 0;
          ctrl.showShadow(isScrolled);
          scrolled = isScrolled;
        },
        animated: function animated() {
          var sTop = undefined,
              isScrolled = undefined,
              headerElem = undefined;
          sTop = ctrl.scrollerElem().scrollTop;
          isScrolled = sTop !== 0;
          if (isScrolled !== scrolled) {
            headerElem = ctrl.headerElem();
            if (headerElem && tall) {
              headerElem.classList[isScrolled ? "remove" : "add"](tallClass);
            }
            ctrl.showShadow(isScrolled);
            scrolled = isScrolled;
          }
        },
        dynamicHeader: function dynamicHeader() {
          var sy = undefined,
              cascaded = false;
          var sTop = ctrl.scrollerElem().scrollTop;
          if (sTop < headerMargin) {
            sy = sTop;
          } else {
            sy = Math.min(keepCondensedHeader ? headerMargin : headerHeight, Math.max(0, noReveal || keepCondensedHeader ? sTop : y + sTop - prevScrollTop));
            if (condenses && prevScrollTop >= sTop && sTop > headerMargin) {
              sy = Math.max(sy, headerMargin);
            }
          }
          if (sy !== y) {
            ctrl.transformHeader(sy);
          }
          if (!modeConfigs.noShadow[opts.mode]) {
            if (sTop > sy) {
              cascaded = true;
            }
            ctrl.showShadow(cascaded);
          }
          y = sy;
          prevScrollTop = Math.max(sTop, 0);
        }
      };
      return {
        view: _mithril2["default"].prop(),
        scrollerElem: _mithril2["default"].prop(),
        outerContainerElem: _mithril2["default"].prop(),
        headerContainerElem: _mithril2["default"].prop(),
        headerTopBarElem: _mithril2["default"].prop(),
        headerElem: _mithril2["default"].prop(),
        headerBg: _mithril2["default"].prop(),
        condensedHeaderBg: _mithril2["default"].prop(),
        mode: _mithril2["default"].prop(mode),
        fixed: _mithril2["default"].prop(fixed),
        shadow: _mithril2["default"].prop(opts.shadow !== undefined && !opts.shadow ? false : true),
        prevScrollTop: _mithril2["default"].prop(0),
        isTop: _mithril2["default"].prop(),
        scrollWatchId: 0,
        isScrolling: _mithril2["default"].prop(false),
        headerConfig: {
          tall: tall,
          tallClass: tallClass,
          animated: animated,
          fixed: fixed
        },
        init: function init(controller) {
          ctrl = controller;
        },
        setHeight: function setHeight(h) {
          var mainContainer = undefined;
          if (opts.headerHeight === undefined) {
            headerHeight = h + shadowHeight;
            headerMargin = headerHeight - condensedHeaderHeight;
          }
          if (!fixed) {
            mainContainer = ctrl.outerContainerElem().querySelector(".mainContainer");
            mainContainer.style.paddingTop = h + "px";
          }
          if (noReveal) {
            ctrl.showShadow(false);
          }
        },
        handleScroll: function handleScroll(e) {
          var fn = undefined;
          if (e) {
            ctrl.isScrolling(true);
            scroller = ctrl;
            clearTimeout(ctrl.scrollWatchId);
            ctrl.scrollWatchId = setTimeout(function() {
              ctrl.isScrolling(false);
              scroller = undefined;
            }, SCROLL_WATCH_TIMER);
          }
          if (mode === "scroll") {
            return;
          }
          if (modeConfigs.alwaysShadow[mode]) {
            ctrl.showShadow(true);
          }
          if (animated) {
            fn = handleScrollFns.animated;
            fn.bind(_this).call();
          }
          if (mode === "standard") {
            fn = handleScrollFns.standard;
          } else if (fixed) {
            fn = handleScrollFns.fixed;
          } else {
            fn = handleScrollFns.dynamicHeader;
          }
          fn.bind(_this).call();
          if (e && opts.scroll) {
            opts.scroll(e);
          }
        },
        condenseHeader: function condenseHeader(hy) {
          var hbg = undefined,
              chbg = undefined;
          var reset = hy === null;
          if (!scrollAwayTopbar) {
            if (ctrl.headerTopBarElem()) {
              translateY(ctrl.headerTopBarElem().style, Math.min(hy, headerMargin));
            }
          }
          hbg = ctrl.headerBg().style;
          if (hbg) {
            if (!noDissolve) {
              hbg.opacity = reset ? "" : (headerMargin - hy) / headerMargin;
            }
            translateY(hbg, reset ? null : hy * backgroundScrollSpeed);
            if (!noDissolve) {
              chbg = ctrl.condensedHeaderBg().style;
              chbg.opacity = reset ? "" : hy / headerMargin;
              translateY(chbg, reset ? null : hy * backgroundScrollSpeed);
            }
          }
        },
        transformHeader: function transformHeader(hy) {
          translateY(ctrl.headerContainerElem().style, -hy);
          if (condenses) {
            ctrl.condenseHeader(hy);
          }
          if (opts.transform) {
            opts.transform({
              y: hy,
              height: headerHeight,
              condensedHeight: condensedHeaderHeight
            });
          }
        },
        showShadow: function showShadow(cascaded) {
          if (modeConfigs.alwaysShadow[mode]) {
            cascaded = true;
          }
          ctrl.outerContainerElem().classList[cascaded ? "add" : "remove"]("cascaded");
        }
      };
    },
    view: function view(ctrl) {
      var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      if (scroller && scroller !== ctrl) {
        return {subtree: "retain"};
      } else {
        return createView(ctrl, opts);
      }
    }
  };
  exports["default"] = component;
  module.exports = exports["default"];
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/card/card", ["lib/polythene/polythene/polythene", "lib/mithril/mithril.min", "lib/polythene/shadow/shadow", "lib/polythene/icon/icon", "lib/polythene/theme/card/card"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  Object.defineProperty(exports, "__esModule", {value: true});
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {"default": obj};
  }
  var _polythenePolythenePolythene = require("lib/polythene/polythene/polythene");
  var _polythenePolythenePolythene2 = _interopRequireDefault(_polythenePolythenePolythene);
  var _mithril = require("lib/mithril/mithril.min");
  var _mithril2 = _interopRequireDefault(_mithril);
  var _polytheneShadowShadow = require("lib/polythene/shadow/shadow");
  var _polytheneShadowShadow2 = _interopRequireDefault(_polytheneShadowShadow);
  var _polytheneIconIcon = require("lib/polythene/icon/icon");
  var _polytheneIconIcon2 = _interopRequireDefault(_polytheneIconIcon);
  require("lib/polythene/theme/card/card");
  var imageRatios = {
    landscape: 16 / 9,
    square: 1
  };
  var contentMap = undefined;
  var createOverlay = function createOverlay() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var tag = opts.tag || "div";
    var className = ["overlay-content", opts["class"]].join(" ");
    var content = opts.content.map(function(o) {
      var key = Object.keys(o)[0];
      return contentMap[key](o);
    });
    return (0, _mithril2["default"])(".overlay", [(0, _mithril2["default"])(tag, {"class": className}, content), (0, _mithril2["default"])(".image-dimmer")]);
  };
  var createText = function createText(o) {
    var opts = o.text || {};
    var className = ["text", opts["class"]].join(" ");
    var tag = "div" || opts.tag;
    return (0, _mithril2["default"])(tag, {"class": className}, _mithril2["default"].trust(opts.content));
  };
  var createMedia = function createMedia(o) {
    var opts = o.media || {};
    var ratio = opts.ratio || "landscape";
    var origin = opts.origin || "center";
    var className = ["media", opts.type || null, ratio, opts["class"]].join(" ");
    var tag = "div" || opts.tag;
    var initImage = function initImage(el, inited) {
      if (inited) {
        return;
      }
      var img = el.querySelector("img");
      if (img) {
        img.onload = function() {
          var w = this.naturalWidth;
          var h = this.naturalHeight;
          var naturalRatio = w / h;
          var cropClass = naturalRatio < imageRatios[ratio] ? "crop-x" : "crop-y";
          img.className = cropClass;
          if (origin !== "start") {
            var clientWidth = el.clientWidth;
            var clientHeight = el.clientHeight;
            if (naturalRatio < imageRatios[ratio]) {
              var imageHeight = clientWidth / naturalRatio;
              var diff = clientHeight - imageHeight;
              var offset = origin === "center" ? diff / 2 : diff;
              this.style.marginTop = offset + "px";
            } else {
              var imageWidth = clientHeight * naturalRatio;
              var diff = clientWidth - imageWidth;
              var offset = origin === "center" ? diff / 2 : diff;
              this.style.marginLeft = offset + "px";
            }
          }
        };
      }
    };
    return (0, _mithril2["default"])(tag, {
      "class": className,
      config: initImage
    }, [opts.content, opts.overlay ? createOverlay(opts.overlay) : (0, _mithril2["default"])(".image-dimmer")]);
  };
  var createHeader = function createHeader(o) {
    var opts = o.header || {};
    var tag = opts.tag || "a.layout.horizontal.center";
    var props = Object.assign({
      "class": ["header", opts["class"]].join(" "),
      config: opts.config
    }, opts.url ? opts.url : null, opts.events ? opts.events : null);
    return (0, _mithril2["default"])(tag, props, [opts.icon ? (0, _mithril2["default"])(".content-icon", _mithril2["default"].component(_polytheneIconIcon2["default"], opts.icon)) : null, (0, _mithril2["default"])(".title.flex", [opts.title ? _mithril2["default"].trust(opts.title) : null, opts.subtitle ? (0, _mithril2["default"])(".subtitle", _mithril2["default"].trust(opts.subtitle)) : null])]);
  };
  var createActions = function createActions(o) {
    var opts = o.actions || {};
    var tag = opts.tag || ".layout.horizontal.center";
    var className = ["actions", opts["class"]].join(" ");
    return (0, _mithril2["default"])(tag, {"class": className}, opts.content);
  };
  var createPrimary = function createPrimary(o) {
    var className = undefined,
        content = undefined,
        key = undefined,
        partOpts = undefined,
        hasMedia = undefined;
    var opts = o.primary || {};
    var tag = ".layout.horizontal" || opts.tag;
    className = ["primary", opts.media ? "has-media" : null, opts["class"]].join(" ");
    hasMedia = false;
    var lookup = {
      title: function title(pops) {
        return pops.attrs ? pops : (0, _mithril2["default"])(".title.flex", [pops.title ? _mithril2["default"].trust(pops.title) : null, pops.subtitle ? (0, _mithril2["default"])(".subtitle", _mithril2["default"].trust(pops.subtitle)) : null]);
      },
      media: function media(pops) {
        hasMedia = true;
        return (0, _mithril2["default"])("div", {"class": ["primary-media", pops.type].join(" ")}, createMedia({media: pops}));
      },
      actions: function actions(pops) {
        return createActions({actions: pops});
      }
    };
    if (Array.isArray(opts.content)) {
      content = opts.content.map(function(part) {
        key = Object.keys(part)[0];
        partOpts = part[key];
        if (lookup[key]) {
          return lookup[key](partOpts);
        } else {
          return part;
        }
      });
    } else {
      content = [opts.title ? lookup.title({
        title: opts.title,
        subtitle: opts.subtitle
      }) : null, opts.media ? lookup.media(opts.media) : null, opts.actions ? lookup.actions(opts.actions) : null];
    }
    if (hasMedia) {
      className += " has-media";
    }
    return (0, _mithril2["default"])(tag, {"class": className}, content);
  };
  var createView = function createView(ctrl) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var tag = opts.tag || opts.url ? "a" : "div";
    var props = Object.assign({
      "class": ["card", opts["class"]].join(" "),
      config: opts.config
    }, opts.url ? opts.url : null, opts.events ? opts.events : null);
    var content = opts.content.map(function(o) {
      var key = Object.keys(o)[0];
      return contentMap[key](o);
    });
    content.unshift(_mithril2["default"].component(_polytheneShadowShadow2["default"], {
      z: ctrl.z(),
      animated: true
    }));
    return (0, _mithril2["default"])(tag, props, _polythenePolythenePolythene2["default"].insertContent(content, opts));
  };
  contentMap = {
    text: createText,
    media: createMedia,
    header: createHeader,
    primary: createPrimary,
    actions: createActions
  };
  var component = {
    controller: function controller() {
      var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var z = opts.z !== undefined ? opts.z : 1;
      return {z: _mithril2["default"].prop(z)};
    },
    view: function view(ctrl) {
      var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      return createView(ctrl, opts);
    }
  };
  exports["default"] = component;
  module.exports = exports["default"];
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/collection/map", ["lib/lodash/internal/arrayMap", "lib/lodash/internal/baseCallback", "lib/lodash/internal/baseMap", "lib/lodash/lang/isArray"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var arrayMap = require("lib/lodash/internal/arrayMap"),
      baseCallback = require("lib/lodash/internal/baseCallback"),
      baseMap = require("lib/lodash/internal/baseMap"),
      isArray = require("lib/lodash/lang/isArray");
  function map(collection, iteratee, thisArg) {
    var func = isArray(collection) ? arrayMap : baseMap;
    iteratee = baseCallback(iteratee, thisArg, 3);
    return func(collection, iteratee);
  }
  module.exports = map;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/arrayEach", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array.length;
    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }
  module.exports = arrayEach;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/utility/property", ["lib/lodash/internal/baseProperty", "lib/lodash/internal/basePropertyDeep", "lib/lodash/internal/isKey"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseProperty = require("lib/lodash/internal/baseProperty"),
      basePropertyDeep = require("lib/lodash/internal/basePropertyDeep"),
      isKey = require("lib/lodash/internal/isKey");
  function property(path) {
    return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
  }
  module.exports = property;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseEach", ["lib/lodash/internal/baseForOwn", "lib/lodash/internal/createBaseEach"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseForOwn = require("lib/lodash/internal/baseForOwn"),
      createBaseEach = require("lib/lodash/internal/createBaseEach");
  var baseEach = createBaseEach(baseForOwn);
  module.exports = baseEach;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/createForEach", ["lib/lodash/internal/bindCallback", "lib/lodash/lang/isArray"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var bindCallback = require("lib/lodash/internal/bindCallback"),
      isArray = require("lib/lodash/lang/isArray");
  function createForEach(arrayFunc, eachFunc) {
    return function(collection, iteratee, thisArg) {
      return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection)) ? arrayFunc(collection, iteratee) : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
    };
  }
  module.exports = createForEach;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/theme/list-tile/list-tile", ["lib/polythene/theme/list-tile/list-tile.css!lib/system-css/css", "lib/polythene/theme/list-tile/list-tile-color.css!lib/system-css/css"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  require("lib/polythene/theme/list-tile/list-tile.css!lib/system-css/css");
  require("lib/polythene/theme/list-tile/list-tile-color.css!lib/system-css/css");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/chunk", ["lib/lodash/internal/baseSlice", "lib/lodash/internal/isIterateeCall"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseSlice = require("lib/lodash/internal/baseSlice"),
      isIterateeCall = require("lib/lodash/internal/isIterateeCall");
  var nativeCeil = Math.ceil,
      nativeFloor = Math.floor,
      nativeMax = Math.max;
  function chunk(array, size, guard) {
    if (guard ? isIterateeCall(array, size, guard) : size == null) {
      size = 1;
    } else {
      size = nativeMax(nativeFloor(size) || 1, 1);
    }
    var index = 0,
        length = array ? array.length : 0,
        resIndex = -1,
        result = Array(nativeCeil(length / size));
    while (index < length) {
      result[++resIndex] = baseSlice(array, index, (index += size));
    }
    return result;
  }
  module.exports = chunk;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/compact", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function compact(array) {
    var index = -1,
        length = array ? array.length : 0,
        resIndex = -1,
        result = [];
    while (++index < length) {
      var value = array[index];
      if (value) {
        result[++resIndex] = value;
      }
    }
    return result;
  }
  module.exports = compact;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/difference", ["lib/lodash/internal/baseDifference", "lib/lodash/internal/baseFlatten", "lib/lodash/internal/isArrayLike", "lib/lodash/internal/isObjectLike", "lib/lodash/function/restParam"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseDifference = require("lib/lodash/internal/baseDifference"),
      baseFlatten = require("lib/lodash/internal/baseFlatten"),
      isArrayLike = require("lib/lodash/internal/isArrayLike"),
      isObjectLike = require("lib/lodash/internal/isObjectLike"),
      restParam = require("lib/lodash/function/restParam");
  var difference = restParam(function(array, values) {
    return (isObjectLike(array) && isArrayLike(array)) ? baseDifference(array, baseFlatten(values, false, true)) : [];
  });
  module.exports = difference;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/drop", ["lib/lodash/internal/baseSlice", "lib/lodash/internal/isIterateeCall"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseSlice = require("lib/lodash/internal/baseSlice"),
      isIterateeCall = require("lib/lodash/internal/isIterateeCall");
  function drop(array, n, guard) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    if (guard ? isIterateeCall(array, n, guard) : n == null) {
      n = 1;
    }
    return baseSlice(array, n < 0 ? 0 : n);
  }
  module.exports = drop;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/dropRight", ["lib/lodash/internal/baseSlice", "lib/lodash/internal/isIterateeCall"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseSlice = require("lib/lodash/internal/baseSlice"),
      isIterateeCall = require("lib/lodash/internal/isIterateeCall");
  function dropRight(array, n, guard) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    if (guard ? isIterateeCall(array, n, guard) : n == null) {
      n = 1;
    }
    n = length - (+n || 0);
    return baseSlice(array, 0, n < 0 ? 0 : n);
  }
  module.exports = dropRight;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/theme/list/list", ["lib/polythene/theme/list/list.css!lib/system-css/css", "lib/polythene/theme/list/list-color.css!lib/system-css/css"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  require("lib/polythene/theme/list/list.css!lib/system-css/css");
  require("lib/polythene/theme/list/list-color.css!lib/system-css/css");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/dropRightWhile", ["lib/lodash/internal/baseCallback", "lib/lodash/internal/baseWhile"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseCallback = require("lib/lodash/internal/baseCallback"),
      baseWhile = require("lib/lodash/internal/baseWhile");
  function dropRightWhile(array, predicate, thisArg) {
    return (array && array.length) ? baseWhile(array, baseCallback(predicate, thisArg, 3), true, true) : [];
  }
  module.exports = dropRightWhile;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/dropWhile", ["lib/lodash/internal/baseCallback", "lib/lodash/internal/baseWhile"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseCallback = require("lib/lodash/internal/baseCallback"),
      baseWhile = require("lib/lodash/internal/baseWhile");
  function dropWhile(array, predicate, thisArg) {
    return (array && array.length) ? baseWhile(array, baseCallback(predicate, thisArg, 3), true) : [];
  }
  module.exports = dropWhile;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/fill", ["lib/lodash/internal/baseFill", "lib/lodash/internal/isIterateeCall"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseFill = require("lib/lodash/internal/baseFill"),
      isIterateeCall = require("lib/lodash/internal/isIterateeCall");
  function fill(array, value, start, end) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
      start = 0;
      end = length;
    }
    return baseFill(array, value, start, end);
  }
  module.exports = fill;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/findIndex", ["lib/lodash/internal/createFindIndex"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var createFindIndex = require("lib/lodash/internal/createFindIndex");
  var findIndex = createFindIndex();
  module.exports = findIndex;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/icon/icon", ["lib/polythene/polythene/polythene", "lib/mithril/mithril.min", "lib/polythene/svg/svg", "lib/polythene/theme/icon/icon"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  Object.defineProperty(exports, "__esModule", {value: true});
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {"default": obj};
  }
  var _polythenePolythenePolythene = require("lib/polythene/polythene/polythene");
  var _polythenePolythenePolythene2 = _interopRequireDefault(_polythenePolythenePolythene);
  var _mithril = require("lib/mithril/mithril.min");
  var _mithril2 = _interopRequireDefault(_mithril);
  var _polytheneSvgSvg = require("lib/polythene/svg/svg");
  var _polytheneSvgSvg2 = _interopRequireDefault(_polytheneSvgSvg);
  require("lib/polythene/theme/icon/icon");
  var layoutContent = function layoutContent(opts) {
    if (opts.content) {
      return opts.content;
    } else if (opts.svg) {
      var svgOpts = Object.assign({}, opts.svg);
      svgOpts.tag = svgOpts.tag || "i.fit";
      return _mithril2["default"].component(_polytheneSvgSvg2["default"], svgOpts);
    } else {
      return (0, _mithril2["default"])("i.fit", (0, _mithril2["default"])("img", {src: opts.src}));
    }
  };
  var createView = function createView(ctrl) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var tag = opts.tag || "div";
    var props = {
      "class": ["icon", "icon-" + (opts.type || "normal"), opts["class"]].join(" "),
      config: opts.config
    };
    var content = layoutContent(opts);
    return (0, _mithril2["default"])(tag, props, _polythenePolythenePolythene2["default"].insertContent(content, opts));
  };
  var component = {view: function view(ctrl) {
      var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      return createView(ctrl, opts);
    }};
  exports["default"] = component;
  module.exports = exports["default"];
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/findLastIndex", ["lib/lodash/internal/createFindIndex"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var createFindIndex = require("lib/lodash/internal/createFindIndex");
  var findLastIndex = createFindIndex(true);
  module.exports = findLastIndex;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/first", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function first(array) {
    return array ? array[0] : undefined;
  }
  module.exports = first;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/flatten", ["lib/lodash/internal/baseFlatten", "lib/lodash/internal/isIterateeCall"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseFlatten = require("lib/lodash/internal/baseFlatten"),
      isIterateeCall = require("lib/lodash/internal/isIterateeCall");
  function flatten(array, isDeep, guard) {
    var length = array ? array.length : 0;
    if (guard && isIterateeCall(array, isDeep, guard)) {
      isDeep = false;
    }
    return length ? baseFlatten(array, isDeep) : [];
  }
  module.exports = flatten;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/polythene/polythene", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  Object.defineProperty(exports, "__esModule", {value: true});
  var DEFAULT_ICON_SET = "material-design-iconic-font";
  var RESIZE_TIMER = 200;
  var _iconSet = DEFAULT_ICON_SET;
  var transitionEvent = function() {
    var el = document.createElement("fakeelement");
    var animations = {
      animation: "animationend",
      OAnimation: "oAnimationEnd",
      MozAnimation: "animationend",
      WebkitAnimation: "webkitAnimationEnd"
    };
    for (var a in animations) {
      if (el.style[a] !== undefined) {
        return animations[a];
      }
    }
  }.call();
  var listeners = {};
  var resizeTimer = 0;
  window.onresize = function() {
    if (!listeners.resize) {
      return;
    }
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      listeners.resize.forEach(function(listener) {
        return listener.call();
      });
    }, RESIZE_TIMER);
  };
  if (!Object.assign) {
    Object.assign = function assign(target, source) {
      for (var index = 1,
          key = undefined; index in arguments; ++index) {
        source = arguments[index];
        for (key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  }
  var polythene = {
    iconSet: function iconSet() {
      return _iconSet;
    },
    setIconSet: function setIconSet(newIconSet) {
      _iconSet = newIconSet;
    },
    whichTransitionEvent: function whichTransitionEvent() {
      return transitionEvent;
    },
    insertContent: function insertContent(content) {
      var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      return [].concat(opts.before, content, opts.after);
    },
    addListener: function addListener(event, listener) {
      listeners[event] = listeners[event] || [];
      listeners[event].push(listener);
    },
    removeListener: function removeListener(event, listener) {
      if (!listeners[event]) {
        return;
      }
      var index = listeners[event].indexOf(listener);
      if (index > -1) {
        listeners[event].splice(index, 1);
      }
    }
  };
  exports["default"] = polythene;
  module.exports = exports["default"];
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/flattenDeep", ["lib/lodash/internal/baseFlatten"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseFlatten = require("lib/lodash/internal/baseFlatten");
  function flattenDeep(array) {
    var length = array ? array.length : 0;
    return length ? baseFlatten(array, true) : [];
  }
  module.exports = flattenDeep;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/head", ["lib/lodash/array/first"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("lib/lodash/array/first");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/indexOf", ["lib/lodash/internal/baseIndexOf", "lib/lodash/internal/binaryIndex"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseIndexOf = require("lib/lodash/internal/baseIndexOf"),
      binaryIndex = require("lib/lodash/internal/binaryIndex");
  var nativeMax = Math.max;
  function indexOf(array, value, fromIndex) {
    var length = array ? array.length : 0;
    if (!length) {
      return -1;
    }
    if (typeof fromIndex == 'number') {
      fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
    } else if (fromIndex) {
      var index = binaryIndex(array, value);
      if (index < length && (value === value ? (value === array[index]) : (array[index] !== array[index]))) {
        return index;
      }
      return -1;
    }
    return baseIndexOf(array, value, fromIndex || 0);
  }
  module.exports = indexOf;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/initial", ["lib/lodash/array/dropRight"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var dropRight = require("lib/lodash/array/dropRight");
  function initial(array) {
    return dropRight(array, 1);
  }
  module.exports = initial;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/intersection", ["lib/lodash/internal/baseIndexOf", "lib/lodash/internal/cacheIndexOf", "lib/lodash/internal/createCache", "lib/lodash/internal/isArrayLike", "lib/lodash/function/restParam"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseIndexOf = require("lib/lodash/internal/baseIndexOf"),
      cacheIndexOf = require("lib/lodash/internal/cacheIndexOf"),
      createCache = require("lib/lodash/internal/createCache"),
      isArrayLike = require("lib/lodash/internal/isArrayLike"),
      restParam = require("lib/lodash/function/restParam");
  var intersection = restParam(function(arrays) {
    var othLength = arrays.length,
        othIndex = othLength,
        caches = Array(length),
        indexOf = baseIndexOf,
        isCommon = true,
        result = [];
    while (othIndex--) {
      var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
      caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
    }
    var array = arrays[0],
        index = -1,
        length = array ? array.length : 0,
        seen = caches[0];
    outer: while (++index < length) {
      value = array[index];
      if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
        var othIndex = othLength;
        while (--othIndex) {
          var cache = caches[othIndex];
          if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
            continue outer;
          }
        }
        if (seen) {
          seen.push(value);
        }
        result.push(value);
      }
    }
    return result;
  });
  module.exports = intersection;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/last", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function last(array) {
    var length = array ? array.length : 0;
    return length ? array[length - 1] : undefined;
  }
  module.exports = last;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/lastIndexOf", ["lib/lodash/internal/binaryIndex", "lib/lodash/internal/indexOfNaN"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var binaryIndex = require("lib/lodash/internal/binaryIndex"),
      indexOfNaN = require("lib/lodash/internal/indexOfNaN");
  var nativeMax = Math.max,
      nativeMin = Math.min;
  function lastIndexOf(array, value, fromIndex) {
    var length = array ? array.length : 0;
    if (!length) {
      return -1;
    }
    var index = length;
    if (typeof fromIndex == 'number') {
      index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
    } else if (fromIndex) {
      index = binaryIndex(array, value, true) - 1;
      var other = array[index];
      if (value === value ? (value === other) : (other !== other)) {
        return index;
      }
      return -1;
    }
    if (value !== value) {
      return indexOfNaN(array, index, true);
    }
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }
  module.exports = lastIndexOf;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/pull", ["lib/lodash/internal/baseIndexOf"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseIndexOf = require("lib/lodash/internal/baseIndexOf");
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function pull() {
    var args = arguments,
        array = args[0];
    if (!(array && array.length)) {
      return array;
    }
    var index = 0,
        indexOf = baseIndexOf,
        length = args.length;
    while (++index < length) {
      var fromIndex = 0,
          value = args[index];
      while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
        splice.call(array, fromIndex, 1);
      }
    }
    return array;
  }
  module.exports = pull;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/object", ["lib/lodash/array/zipObject"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("lib/lodash/array/zipObject");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/pullAt", ["lib/lodash/internal/baseAt", "lib/lodash/internal/baseCompareAscending", "lib/lodash/internal/baseFlatten", "lib/lodash/internal/basePullAt", "lib/lodash/function/restParam"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseAt = require("lib/lodash/internal/baseAt"),
      baseCompareAscending = require("lib/lodash/internal/baseCompareAscending"),
      baseFlatten = require("lib/lodash/internal/baseFlatten"),
      basePullAt = require("lib/lodash/internal/basePullAt"),
      restParam = require("lib/lodash/function/restParam");
  var pullAt = restParam(function(array, indexes) {
    indexes = baseFlatten(indexes);
    var result = baseAt(array, indexes);
    basePullAt(array, indexes.sort(baseCompareAscending));
    return result;
  });
  module.exports = pullAt;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/remove", ["lib/lodash/internal/baseCallback", "lib/lodash/internal/basePullAt"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseCallback = require("lib/lodash/internal/baseCallback"),
      basePullAt = require("lib/lodash/internal/basePullAt");
  function remove(array, predicate, thisArg) {
    var result = [];
    if (!(array && array.length)) {
      return result;
    }
    var index = -1,
        indexes = [],
        length = array.length;
    predicate = baseCallback(predicate, thisArg, 3);
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result.push(value);
        indexes.push(index);
      }
    }
    basePullAt(array, indexes);
    return result;
  }
  module.exports = remove;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/rest", ["lib/lodash/array/drop"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var drop = require("lib/lodash/array/drop");
  function rest(array) {
    return drop(array, 1);
  }
  module.exports = rest;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/slice", ["lib/lodash/internal/baseSlice", "lib/lodash/internal/isIterateeCall"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseSlice = require("lib/lodash/internal/baseSlice"),
      isIterateeCall = require("lib/lodash/internal/isIterateeCall");
  function slice(array, start, end) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
      start = 0;
      end = length;
    }
    return baseSlice(array, start, end);
  }
  module.exports = slice;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/sortedIndex", ["lib/lodash/internal/createSortedIndex"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var createSortedIndex = require("lib/lodash/internal/createSortedIndex");
  var sortedIndex = createSortedIndex();
  module.exports = sortedIndex;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/sortedLastIndex", ["lib/lodash/internal/createSortedIndex"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var createSortedIndex = require("lib/lodash/internal/createSortedIndex");
  var sortedLastIndex = createSortedIndex(true);
  module.exports = sortedLastIndex;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/tail", ["lib/lodash/array/rest"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("lib/lodash/array/rest");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/take", ["lib/lodash/internal/baseSlice", "lib/lodash/internal/isIterateeCall"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseSlice = require("lib/lodash/internal/baseSlice"),
      isIterateeCall = require("lib/lodash/internal/isIterateeCall");
  function take(array, n, guard) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    if (guard ? isIterateeCall(array, n, guard) : n == null) {
      n = 1;
    }
    return baseSlice(array, 0, n < 0 ? 0 : n);
  }
  module.exports = take;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/takeRight", ["lib/lodash/internal/baseSlice", "lib/lodash/internal/isIterateeCall"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseSlice = require("lib/lodash/internal/baseSlice"),
      isIterateeCall = require("lib/lodash/internal/isIterateeCall");
  function takeRight(array, n, guard) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    if (guard ? isIterateeCall(array, n, guard) : n == null) {
      n = 1;
    }
    n = length - (+n || 0);
    return baseSlice(array, n < 0 ? 0 : n);
  }
  module.exports = takeRight;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/takeRightWhile", ["lib/lodash/internal/baseCallback", "lib/lodash/internal/baseWhile"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseCallback = require("lib/lodash/internal/baseCallback"),
      baseWhile = require("lib/lodash/internal/baseWhile");
  function takeRightWhile(array, predicate, thisArg) {
    return (array && array.length) ? baseWhile(array, baseCallback(predicate, thisArg, 3), false, true) : [];
  }
  module.exports = takeRightWhile;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/takeWhile", ["lib/lodash/internal/baseCallback", "lib/lodash/internal/baseWhile"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseCallback = require("lib/lodash/internal/baseCallback"),
      baseWhile = require("lib/lodash/internal/baseWhile");
  function takeWhile(array, predicate, thisArg) {
    return (array && array.length) ? baseWhile(array, baseCallback(predicate, thisArg, 3)) : [];
  }
  module.exports = takeWhile;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/union", ["lib/lodash/internal/baseFlatten", "lib/lodash/internal/baseUniq", "lib/lodash/function/restParam"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseFlatten = require("lib/lodash/internal/baseFlatten"),
      baseUniq = require("lib/lodash/internal/baseUniq"),
      restParam = require("lib/lodash/function/restParam");
  var union = restParam(function(arrays) {
    return baseUniq(baseFlatten(arrays, false, true));
  });
  module.exports = union;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/uniq", ["lib/lodash/internal/baseCallback", "lib/lodash/internal/baseUniq", "lib/lodash/internal/isIterateeCall", "lib/lodash/internal/sortedUniq"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseCallback = require("lib/lodash/internal/baseCallback"),
      baseUniq = require("lib/lodash/internal/baseUniq"),
      isIterateeCall = require("lib/lodash/internal/isIterateeCall"),
      sortedUniq = require("lib/lodash/internal/sortedUniq");
  function uniq(array, isSorted, iteratee, thisArg) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    if (isSorted != null && typeof isSorted != 'boolean') {
      thisArg = iteratee;
      iteratee = isIterateeCall(array, isSorted, thisArg) ? undefined : isSorted;
      isSorted = false;
    }
    iteratee = iteratee == null ? iteratee : baseCallback(iteratee, thisArg, 3);
    return (isSorted) ? sortedUniq(array, iteratee) : baseUniq(array, iteratee);
  }
  module.exports = uniq;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/unique", ["lib/lodash/array/uniq"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("lib/lodash/array/uniq");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/unzip", ["lib/lodash/internal/arrayFilter", "lib/lodash/internal/arrayMap", "lib/lodash/internal/baseProperty", "lib/lodash/internal/isArrayLike"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var arrayFilter = require("lib/lodash/internal/arrayFilter"),
      arrayMap = require("lib/lodash/internal/arrayMap"),
      baseProperty = require("lib/lodash/internal/baseProperty"),
      isArrayLike = require("lib/lodash/internal/isArrayLike");
  var nativeMax = Math.max;
  function unzip(array) {
    if (!(array && array.length)) {
      return [];
    }
    var index = -1,
        length = 0;
    array = arrayFilter(array, function(group) {
      if (isArrayLike(group)) {
        length = nativeMax(group.length, length);
        return true;
      }
    });
    var result = Array(length);
    while (++index < length) {
      result[index] = arrayMap(array, baseProperty(index));
    }
    return result;
  }
  module.exports = unzip;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/unzipWith", ["lib/lodash/internal/arrayMap", "lib/lodash/internal/arrayReduce", "lib/lodash/internal/bindCallback", "lib/lodash/array/unzip"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var arrayMap = require("lib/lodash/internal/arrayMap"),
      arrayReduce = require("lib/lodash/internal/arrayReduce"),
      bindCallback = require("lib/lodash/internal/bindCallback"),
      unzip = require("lib/lodash/array/unzip");
  function unzipWith(array, iteratee, thisArg) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    var result = unzip(array);
    if (iteratee == null) {
      return result;
    }
    iteratee = bindCallback(iteratee, thisArg, 4);
    return arrayMap(result, function(group) {
      return arrayReduce(group, iteratee, undefined, true);
    });
  }
  module.exports = unzipWith;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/without", ["lib/lodash/internal/baseDifference", "lib/lodash/internal/isArrayLike", "lib/lodash/function/restParam"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseDifference = require("lib/lodash/internal/baseDifference"),
      isArrayLike = require("lib/lodash/internal/isArrayLike"),
      restParam = require("lib/lodash/function/restParam");
  var without = restParam(function(array, values) {
    return isArrayLike(array) ? baseDifference(array, values) : [];
  });
  module.exports = without;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/xor", ["lib/lodash/internal/arrayPush", "lib/lodash/internal/baseDifference", "lib/lodash/internal/baseUniq", "lib/lodash/internal/isArrayLike"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var arrayPush = require("lib/lodash/internal/arrayPush"),
      baseDifference = require("lib/lodash/internal/baseDifference"),
      baseUniq = require("lib/lodash/internal/baseUniq"),
      isArrayLike = require("lib/lodash/internal/isArrayLike");
  function xor() {
    var index = -1,
        length = arguments.length;
    while (++index < length) {
      var array = arguments[index];
      if (isArrayLike(array)) {
        var result = result ? arrayPush(baseDifference(result, array), baseDifference(array, result)) : array;
      }
    }
    return result ? baseUniq(result) : [];
  }
  module.exports = xor;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/zip", ["lib/lodash/function/restParam", "lib/lodash/array/unzip"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var restParam = require("lib/lodash/function/restParam"),
      unzip = require("lib/lodash/array/unzip");
  var zip = restParam(unzip);
  module.exports = zip;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/zipObject", ["lib/lodash/lang/isArray"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isArray = require("lib/lodash/lang/isArray");
  function zipObject(props, values) {
    var index = -1,
        length = props ? props.length : 0,
        result = {};
    if (length && !values && !isArray(props[0])) {
      values = [];
    }
    while (++index < length) {
      var key = props[index];
      if (values) {
        result[key] = values[index];
      } else if (key) {
        result[key[0]] = key[1];
      }
    }
    return result;
  }
  module.exports = zipObject;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/array/zipWith", ["lib/lodash/function/restParam", "lib/lodash/array/unzipWith"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var restParam = require("lib/lodash/function/restParam"),
      unzipWith = require("lib/lodash/array/unzipWith");
  var zipWith = restParam(function(arrays) {
    var length = arrays.length,
        iteratee = length > 2 ? arrays[length - 2] : undefined,
        thisArg = length > 1 ? arrays[length - 1] : undefined;
    if (length > 2 && typeof iteratee == 'function') {
      length -= 2;
    } else {
      iteratee = (length > 1 && typeof thisArg == 'function') ? (--length, thisArg) : undefined;
      thisArg = undefined;
    }
    arrays.length = length;
    return unzipWith(arrays, iteratee, thisArg);
  });
  module.exports = zipWith;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/layout/layout", ["lib/polythene/theme/layout/layout"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  require("lib/polythene/theme/layout/layout");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/theme/button/button", ["lib/polythene/theme/button/button.css!lib/system-css/css", "lib/polythene/theme/button/button-color.css!lib/system-css/css"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  require("lib/polythene/theme/button/button.css!lib/system-css/css");
  require("lib/polythene/theme/button/button-color.css!lib/system-css/css");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/ripple/ripple", ["lib/polythene/polythene/polythene", "lib/mithril/mithril.min", "lib/polythene/theme/ripple/ripple"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  Object.defineProperty(exports, "__esModule", {value: true});
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {"default": obj};
  }
  var _polythenePolythenePolythene = require("lib/polythene/polythene/polythene");
  var _polythenePolythenePolythene2 = _interopRequireDefault(_polythenePolythenePolythene);
  var _mithril = require("lib/mithril/mithril.min");
  var _mithril2 = _interopRequireDefault(_mithril);
  require("lib/polythene/theme/ripple/ripple");
  var DEFAULT_START_OPACITY = .2;
  var OPACITY_DECAY_VELOCITY = .35;
  var tapStart = undefined,
      tapEnd = undefined,
      tapListeners = undefined;
  tapListeners = [];
  var initTapEvents = function initTapEvents(el, ctrl) {
    var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
    var startType = document.documentElement.classList.contains("no-touch") ? "mousedown" : "click";
    var endType = "mouseup";
    tapStart = function(e) {
      ctrl.start(e, ctrl, opts);
    };
    tapEnd = function(e) {
      ctrl.stop(e, ctrl, opts);
    };
    el.addEventListener(startType, tapStart, false);
    el.addEventListener(endType, tapEnd, false);
    tapListeners = [{
      type: startType,
      listener: tapStart
    }, {
      type: endType,
      listener: tapEnd
    }];
  };
  var clearTapEvents = function clearTapEvents(el) {
    tapListeners.map(function(o) {
      el.removeEventListener(o.type, o.listener, false);
    });
    tapListeners = [];
  };
  var createView = function createView(ctrl) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    if (opts.disabled) {
      return (0, _mithril2["default"])("");
    }
    var initRipple = function initRipple(ripple, inited, context) {
      if (inited) {
        return;
      }
      ctrl.ripple(ripple);
      initTapEvents(ripple, ctrl, opts);
      context.onunload = function() {
        clearTapEvents(ripple);
      };
    };
    var initWaves = function initWaves(waves, inited) {
      if (inited) {
        return;
      }
      ctrl.waves(waves);
    };
    var tag = opts.tag || "div.fit";
    var props = {
      "class": ["ripple", opts.constrained !== false ? "constrained" : null, opts["class"]].join(" "),
      config: initRipple
    };
    var content = (0, _mithril2["default"])(".ripple-mask", (0, _mithril2["default"])(".ripple-waves", {config: initWaves}));
    return (0, _mithril2["default"])(tag, props, content);
  };
  var component = {
    controller: function controller() {
      return {
        ripple: _mithril2["default"].prop(),
        waves: _mithril2["default"].prop(),
        delegate: _mithril2["default"].prop(),
        start: function start(e, ctrl) {
          var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
          var el = ctrl.ripple();
          var wavesEl = ctrl.waves();
          var w = el.offsetWidth;
          var h = el.offsetHeight;
          var waveRadius = Math.sqrt(w * w + h * h);
          var rect = el.getBoundingClientRect();
          var mx = opts.center ? rect.left + rect.width / 2 : e.clientX;
          var my = opts.center ? rect.top + rect.height / 2 : e.clientY;
          var rx = mx - rect.left - waveRadius / 2;
          var ry = my - rect.top - waveRadius / 2;
          var initialOpacity = opts.initialOpacity !== undefined ? opts.initialOpacity : DEFAULT_START_OPACITY;
          var opacityDecayVelocity = opts.opacityDecayVelocity !== undefined ? opts.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
          var duration = 1 / opacityDecayVelocity * initialOpacity;
          var color = window.getComputedStyle(el).color;
          var transitionEvent = _polythenePolythenePolythene2["default"].whichTransitionEvent();
          var onEnd = function onEnd(evt) {
            wavesEl.classList.remove("animated");
            wavesEl.removeEventListener(transitionEvent, onEnd, false);
            if (opts.end) {
              opts.end(evt);
            }
          };
          wavesEl.classList.remove("animated");
          wavesEl.style.width = wavesEl.style.height = waveRadius + "px";
          wavesEl.style.top = ry + "px";
          wavesEl.style.left = rx + "px";
          wavesEl.style["animation-duration"] = wavesEl.style["-webkit-animation-duration"] = wavesEl.style["-moz-animation-duration"] = wavesEl.style["-o-animation-duration"] = duration + "s";
          wavesEl.style.backgroundColor = color;
          wavesEl.style.opacity = initialOpacity;
          wavesEl.addEventListener(transitionEvent, onEnd, false);
          if (opts.start) {
            opts.start(e);
          }
          wavesEl.classList.add("animated");
        },
        stop: function stop() {}
      };
    },
    view: function view(ctrl) {
      var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      return createView(ctrl, opts);
    }
  };
  exports["default"] = component;
  module.exports = exports["default"];
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/font-roboto/font-roboto", ["lib/polythene/font-roboto/font-roboto.css!lib/system-css/css"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  require("lib/polythene/font-roboto/font-roboto.css!lib/system-css/css");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/shadow/shadow", ["lib/mithril/mithril.min", "lib/polythene/theme/shadow/shadow"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  Object.defineProperty(exports, "__esModule", {value: true});
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {"default": obj};
  }
  var _mithril = require("lib/mithril/mithril.min");
  var _mithril2 = _interopRequireDefault(_mithril);
  require("lib/polythene/theme/shadow/shadow");
  var createView = function createView(ctrl) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var z = opts.z;
    var tag = opts.tag || "div.fit";
    var props = {
      "class": ["shadow", opts["class"]].join(" "),
      config: opts.config
    };
    var helperTag = "div.fit" + (opts.animated ? ".animated" : "");
    var content = [opts.content ? opts.content : null, (0, _mithril2["default"])(helperTag, {"class": "shadow-bottom shadow-bottom-z-" + z}), (0, _mithril2["default"])(helperTag, {"class": "shadow-top shadow-top-z-" + z})];
    return (0, _mithril2["default"])(tag, props, content);
  };
  var component = {view: function view(ctrl) {
      var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      return createView(ctrl, opts);
    }};
  exports["default"] = component;
  module.exports = exports["default"];
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/toolbar/toolbar", ["lib/polythene/polythene/polythene", "lib/mithril/mithril.min", "lib/polythene/theme/toolbar/toolbar"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  Object.defineProperty(exports, "__esModule", {value: true});
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {"default": obj};
  }
  var _polythenePolythenePolythene = require("lib/polythene/polythene/polythene");
  var _polythenePolythenePolythene2 = _interopRequireDefault(_polythenePolythenePolythene);
  var _mithril = require("lib/mithril/mithril.min");
  var _mithril2 = _interopRequireDefault(_mithril);
  require("lib/polythene/theme/toolbar/toolbar");
  var barWrapper = function barWrapper(className, content) {
    return (0, _mithril2["default"])("div.center.horizontal.layout", {"class": ["toolbar-tools", className].join(" ")}, content);
  };
  var bar = function bar() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var bars = [];
    if (opts.content) {
      bars.push(barWrapper("topBar", opts.content));
    } else {
      if (opts.topBar) {
        bars.push(barWrapper("topBar", opts.topBar));
      }
      if (opts.middleBar) {
        bars.push(barWrapper("middleBar", opts.middleBar));
      }
      if (opts.bottomBar) {
        bars.push(barWrapper("bottomBar", opts.bottomBar));
      }
    }
    return bars;
  };
  var createView = function createView(ctrl) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var tag = opts.tag || "div";
    var props = {
      "class": ["toolbar animate", opts.mode || "standard", opts["class"]].join(" "),
      config: opts.config
    };
    var content = bar(opts);
    return (0, _mithril2["default"])(tag, props, _polythenePolythenePolythene2["default"].insertContent(content, opts));
  };
  var component = {view: function view(ctrl) {
      var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      return createView(ctrl, opts);
    }};
  exports["default"] = component;
  module.exports = exports["default"];
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/theme/header-panel/header-panel", ["lib/polythene/theme/header-panel/header-panel.css!lib/system-css/css"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  require("lib/polythene/theme/header-panel/header-panel.css!lib/system-css/css");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/theme/card/card", ["lib/polythene/theme/card/card.css!lib/system-css/css", "lib/polythene/theme/card/card-color.css!lib/system-css/css"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  require("lib/polythene/theme/card/card.css!lib/system-css/css");
  require("lib/polythene/theme/card/card-color.css!lib/system-css/css");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/arrayMap", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array.length,
        result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  module.exports = arrayMap;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseCallback", ["lib/lodash/internal/baseMatches", "lib/lodash/internal/baseMatchesProperty", "lib/lodash/internal/bindCallback", "lib/lodash/utility/identity", "lib/lodash/utility/property"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseMatches = require("lib/lodash/internal/baseMatches"),
      baseMatchesProperty = require("lib/lodash/internal/baseMatchesProperty"),
      bindCallback = require("lib/lodash/internal/bindCallback"),
      identity = require("lib/lodash/utility/identity"),
      property = require("lib/lodash/utility/property");
  function baseCallback(func, thisArg, argCount) {
    var type = typeof func;
    if (type == 'function') {
      return thisArg === undefined ? func : bindCallback(func, thisArg, argCount);
    }
    if (func == null) {
      return identity;
    }
    if (type == 'object') {
      return baseMatches(func);
    }
    return thisArg === undefined ? property(func) : baseMatchesProperty(func, thisArg);
  }
  module.exports = baseCallback;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseMap", ["lib/lodash/internal/baseEach", "lib/lodash/internal/isArrayLike"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseEach = require("lib/lodash/internal/baseEach"),
      isArrayLike = require("lib/lodash/internal/isArrayLike");
  function baseMap(collection, iteratee) {
    var index = -1,
        result = isArrayLike(collection) ? Array(collection.length) : [];
    baseEach(collection, function(value, key, collection) {
      result[++index] = iteratee(value, key, collection);
    });
    return result;
  }
  module.exports = baseMap;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/lang/isArray", ["lib/lodash/internal/getNative", "lib/lodash/internal/isLength", "lib/lodash/internal/isObjectLike"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var getNative = require("lib/lodash/internal/getNative"),
      isLength = require("lib/lodash/internal/isLength"),
      isObjectLike = require("lib/lodash/internal/isObjectLike");
  var arrayTag = '[object Array]';
  var objectProto = Object.prototype;
  var objToString = objectProto.toString;
  var nativeIsArray = getNative(Array, 'isArray');
  var isArray = nativeIsArray || function(value) {
    return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
  };
  module.exports = isArray;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseProperty", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }
  module.exports = baseProperty;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/basePropertyDeep", ["lib/lodash/internal/baseGet", "lib/lodash/internal/toPath"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseGet = require("lib/lodash/internal/baseGet"),
      toPath = require("lib/lodash/internal/toPath");
  function basePropertyDeep(path) {
    var pathKey = (path + '');
    path = toPath(path);
    return function(object) {
      return baseGet(object, path, pathKey);
    };
  }
  module.exports = basePropertyDeep;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/isKey", ["lib/lodash/lang/isArray", "lib/lodash/internal/toObject"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isArray = require("lib/lodash/lang/isArray"),
      toObject = require("lib/lodash/internal/toObject");
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;
  function isKey(value, object) {
    var type = typeof value;
    if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
      return true;
    }
    if (isArray(value)) {
      return false;
    }
    var result = !reIsDeepProp.test(value);
    return result || (object != null && value in toObject(object));
  }
  module.exports = isKey;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseForOwn", ["lib/lodash/internal/baseFor", "lib/lodash/object/keys"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseFor = require("lib/lodash/internal/baseFor"),
      keys = require("lib/lodash/object/keys");
  function baseForOwn(object, iteratee) {
    return baseFor(object, iteratee, keys);
  }
  module.exports = baseForOwn;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/createBaseEach", ["lib/lodash/internal/getLength", "lib/lodash/internal/isLength", "lib/lodash/internal/toObject"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var getLength = require("lib/lodash/internal/getLength"),
      isLength = require("lib/lodash/internal/isLength"),
      toObject = require("lib/lodash/internal/toObject");
  function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
      var length = collection ? getLength(collection) : 0;
      if (!isLength(length)) {
        return eachFunc(collection, iteratee);
      }
      var index = fromRight ? length : -1,
          iterable = toObject(collection);
      while ((fromRight ? index-- : ++index < length)) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }
  module.exports = createBaseEach;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/bindCallback", ["lib/lodash/utility/identity"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var identity = require("lib/lodash/utility/identity");
  function bindCallback(func, thisArg, argCount) {
    if (typeof func != 'function') {
      return identity;
    }
    if (thisArg === undefined) {
      return func;
    }
    switch (argCount) {
      case 1:
        return function(value) {
          return func.call(thisArg, value);
        };
      case 3:
        return function(value, index, collection) {
          return func.call(thisArg, value, index, collection);
        };
      case 4:
        return function(accumulator, value, index, collection) {
          return func.call(thisArg, accumulator, value, index, collection);
        };
      case 5:
        return function(value, other, key, object, source) {
          return func.call(thisArg, value, other, key, object, source);
        };
    }
    return function() {
      return func.apply(thisArg, arguments);
    };
  }
  module.exports = bindCallback;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseSlice", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function baseSlice(array, start, end) {
    var index = -1,
        length = array.length;
    start = start == null ? 0 : (+start || 0);
    if (start < 0) {
      start = -start > length ? 0 : (length + start);
    }
    end = (end === undefined || end > length) ? length : (+end || 0);
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;
    var result = Array(length);
    while (++index < length) {
      result[index] = array[index + start];
    }
    return result;
  }
  module.exports = baseSlice;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/isIterateeCall", ["lib/lodash/internal/isArrayLike", "lib/lodash/internal/isIndex", "lib/lodash/lang/isObject"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isArrayLike = require("lib/lodash/internal/isArrayLike"),
      isIndex = require("lib/lodash/internal/isIndex"),
      isObject = require("lib/lodash/lang/isObject");
  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number' ? (isArrayLike(object) && isIndex(index, object.length)) : (type == 'string' && index in object)) {
      var other = object[index];
      return value === value ? (value === other) : (other !== other);
    }
    return false;
  }
  module.exports = isIterateeCall;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseDifference", ["lib/lodash/internal/baseIndexOf", "lib/lodash/internal/cacheIndexOf", "lib/lodash/internal/createCache"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseIndexOf = require("lib/lodash/internal/baseIndexOf"),
      cacheIndexOf = require("lib/lodash/internal/cacheIndexOf"),
      createCache = require("lib/lodash/internal/createCache");
  var LARGE_ARRAY_SIZE = 200;
  function baseDifference(array, values) {
    var length = array ? array.length : 0,
        result = [];
    if (!length) {
      return result;
    }
    var index = -1,
        indexOf = baseIndexOf,
        isCommon = true,
        cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
        valuesLength = values.length;
    if (cache) {
      indexOf = cacheIndexOf;
      isCommon = false;
      values = cache;
    }
    outer: while (++index < length) {
      var value = array[index];
      if (isCommon && value === value) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values[valuesIndex] === value) {
            continue outer;
          }
        }
        result.push(value);
      } else if (indexOf(values, value, 0) < 0) {
        result.push(value);
      }
    }
    return result;
  }
  module.exports = baseDifference;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseFlatten", ["lib/lodash/internal/arrayPush", "lib/lodash/lang/isArguments", "lib/lodash/lang/isArray", "lib/lodash/internal/isArrayLike", "lib/lodash/internal/isObjectLike"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var arrayPush = require("lib/lodash/internal/arrayPush"),
      isArguments = require("lib/lodash/lang/isArguments"),
      isArray = require("lib/lodash/lang/isArray"),
      isArrayLike = require("lib/lodash/internal/isArrayLike"),
      isObjectLike = require("lib/lodash/internal/isObjectLike");
  function baseFlatten(array, isDeep, isStrict, result) {
    result || (result = []);
    var index = -1,
        length = array.length;
    while (++index < length) {
      var value = array[index];
      if (isObjectLike(value) && isArrayLike(value) && (isStrict || isArray(value) || isArguments(value))) {
        if (isDeep) {
          baseFlatten(value, isDeep, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }
  module.exports = baseFlatten;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/isArrayLike", ["lib/lodash/internal/getLength", "lib/lodash/internal/isLength"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var getLength = require("lib/lodash/internal/getLength"),
      isLength = require("lib/lodash/internal/isLength");
  function isArrayLike(value) {
    return value != null && isLength(getLength(value));
  }
  module.exports = isArrayLike;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/isObjectLike", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }
  module.exports = isObjectLike;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/function/restParam", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var FUNC_ERROR_TEXT = 'Expected a function';
  var nativeMax = Math.max;
  function restParam(func, start) {
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
    return function() {
      var args = arguments,
          index = -1,
          length = nativeMax(args.length - start, 0),
          rest = Array(length);
      while (++index < length) {
        rest[index] = args[start + index];
      }
      switch (start) {
        case 0:
          return func.call(this, rest);
        case 1:
          return func.call(this, args[0], rest);
        case 2:
          return func.call(this, args[0], args[1], rest);
      }
      var otherArgs = Array(start + 1);
      index = -1;
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = rest;
      return func.apply(this, otherArgs);
    };
  }
  module.exports = restParam;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseWhile", ["lib/lodash/internal/baseSlice"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseSlice = require("lib/lodash/internal/baseSlice");
  function baseWhile(array, predicate, isDrop, fromRight) {
    var length = array.length,
        index = fromRight ? length : -1;
    while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
    return isDrop ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length)) : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
  }
  module.exports = baseWhile;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/createFindIndex", ["lib/lodash/internal/baseCallback", "lib/lodash/internal/baseFindIndex"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseCallback = require("lib/lodash/internal/baseCallback"),
      baseFindIndex = require("lib/lodash/internal/baseFindIndex");
  function createFindIndex(fromRight) {
    return function(array, predicate, thisArg) {
      if (!(array && array.length)) {
        return -1;
      }
      predicate = baseCallback(predicate, thisArg, 3);
      return baseFindIndex(array, predicate, fromRight);
    };
  }
  module.exports = createFindIndex;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseFill", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function baseFill(array, value, start, end) {
    var length = array.length;
    start = start == null ? 0 : (+start || 0);
    if (start < 0) {
      start = -start > length ? 0 : (length + start);
    }
    end = (end === undefined || end > length) ? length : (+end || 0);
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : (end >>> 0);
    start >>>= 0;
    while (start < length) {
      array[start++] = value;
    }
    return array;
  }
  module.exports = baseFill;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/binaryIndex", ["lib/lodash/internal/binaryIndexBy", "lib/lodash/utility/identity"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var binaryIndexBy = require("lib/lodash/internal/binaryIndexBy"),
      identity = require("lib/lodash/utility/identity");
  var MAX_ARRAY_LENGTH = 4294967295,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
  function binaryIndex(array, value, retHighest) {
    var low = 0,
        high = array ? array.length : low;
    if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
      while (low < high) {
        var mid = (low + high) >>> 1,
            computed = array[mid];
        if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return high;
    }
    return binaryIndexBy(array, value, identity, retHighest);
  }
  module.exports = binaryIndex;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/cacheIndexOf", ["lib/lodash/lang/isObject"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = require("lib/lodash/lang/isObject");
  function cacheIndexOf(cache, value) {
    var data = cache.data,
        result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];
    return result ? 0 : -1;
  }
  module.exports = cacheIndexOf;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseIndexOf", ["lib/lodash/internal/indexOfNaN"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var indexOfNaN = require("lib/lodash/internal/indexOfNaN");
  function baseIndexOf(array, value, fromIndex) {
    if (value !== value) {
      return indexOfNaN(array, fromIndex);
    }
    var index = fromIndex - 1,
        length = array.length;
    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }
  module.exports = baseIndexOf;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/createCache", ["lib/lodash/internal/SetCache", "lib/lodash/internal/getNative"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var SetCache = require("lib/lodash/internal/SetCache"),
      getNative = require("lib/lodash/internal/getNative");
  var Set = getNative(global, 'Set');
  var nativeCreate = getNative(Object, 'create');
  function createCache(values) {
    return (nativeCreate && Set) ? new SetCache(values) : null;
  }
  module.exports = createCache;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/indexOfNaN", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function indexOfNaN(array, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 0 : -1);
    while ((fromRight ? index-- : ++index < length)) {
      var other = array[index];
      if (other !== other) {
        return index;
      }
    }
    return -1;
  }
  module.exports = indexOfNaN;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseAt", ["lib/lodash/internal/isArrayLike", "lib/lodash/internal/isIndex"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isArrayLike = require("lib/lodash/internal/isArrayLike"),
      isIndex = require("lib/lodash/internal/isIndex");
  function baseAt(collection, props) {
    var index = -1,
        isNil = collection == null,
        isArr = !isNil && isArrayLike(collection),
        length = isArr ? collection.length : 0,
        propsLength = props.length,
        result = Array(propsLength);
    while (++index < propsLength) {
      var key = props[index];
      if (isArr) {
        result[index] = isIndex(key, length) ? collection[key] : undefined;
      } else {
        result[index] = isNil ? undefined : collection[key];
      }
    }
    return result;
  }
  module.exports = baseAt;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseCompareAscending", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function baseCompareAscending(value, other) {
    if (value !== other) {
      var valIsNull = value === null,
          valIsUndef = value === undefined,
          valIsReflexive = value === value;
      var othIsNull = other === null,
          othIsUndef = other === undefined,
          othIsReflexive = other === other;
      if ((value > other && !othIsNull) || !valIsReflexive || (valIsNull && !othIsUndef && othIsReflexive) || (valIsUndef && othIsReflexive)) {
        return 1;
      }
      if ((value < other && !valIsNull) || !othIsReflexive || (othIsNull && !valIsUndef && valIsReflexive) || (othIsUndef && valIsReflexive)) {
        return -1;
      }
    }
    return 0;
  }
  module.exports = baseCompareAscending;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/svg/svg", ["lib/polythene/polythene/polythene", "lib/mithril/mithril.min", "lib/polythene/theme/svg/svg"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  Object.defineProperty(exports, "__esModule", {value: true});
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {"default": obj};
  }
  var _polythenePolythenePolythene = require("lib/polythene/polythene/polythene");
  var _polythenePolythenePolythene2 = _interopRequireDefault(_polythenePolythenePolythene);
  var _mithril = require("lib/mithril/mithril.min");
  var _mithril2 = _interopRequireDefault(_mithril);
  require("lib/polythene/theme/svg/svg");
  var PLUGIN_EXTENSION = "!text";
  var globalCache = {};
  var getPath = function getPath() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var components = ["polythene/deps/svg"];
    components.push(opts.iconSet || _polythenePolythenePolythene2["default"].iconSet());
    if (opts.group) {
      components.push(opts.group);
    }
    if (opts.name) {
      components.push(opts.name);
    }
    return components.join("/") + ".svg";
  };
  var createView = function createView(ctrl) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var content = undefined,
        svg = undefined;
    var tag = opts.tag || "div";
    var props = {
      "class": ["svg", opts["class"]].join(" "),
      config: opts.config
    };
    var path = opts.src ? opts.src : getPath(opts);
    if (ctrl.path() !== path) {
      svg = globalCache[path];
      if (svg) {
        content = _mithril2["default"].trust(svg);
        preloadNext(ctrl);
      } else {
        ctrl.path(path);
        loadSvg(path, ctrl);
      }
    } else {
      svg = ctrl.svg();
      svg = svg || "";
      content = _mithril2["default"].trust(svg);
      preloadNext(ctrl);
    }
    return (0, _mithril2["default"])(tag, props, _polythenePolythenePolythene2["default"].insertContent(content, opts));
  };
  var loadSvg = function loadSvg(path, ctrl) {
    var preload = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
    var requireUrl = path + PLUGIN_EXTENSION;
    var deferred = _mithril2["default"].deferred();
    System["import"](requireUrl).then(function(data) {
      deferred.resolve(data);
      if (preload) {
        globalCache[path] = data;
        ctrl.preloadingIndex++;
      } else {
        ctrl.svg(data);
        _mithril2["default"].redraw();
      }
    });
  };
  var preloadNext = function preloadNext(ctrl) {
    if (!ctrl.preloadingItems) {
      return;
    }
    if (ctrl.preloadingIndex >= ctrl.preloadingItems.length) {
      return;
    }
    var next = ctrl.preloadingItems[ctrl.preloadingIndex];
    var path = next.src ? next.src : getPath(next);
    if (globalCache[path]) {
      return;
    }
    loadSvg(path, ctrl, true);
  };
  var component = {
    controller: function controller() {
      var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      return {
        path: _mithril2["default"].prop(""),
        svg: _mithril2["default"].prop(""),
        preloadingItems: opts.preload,
        preloadingIndex: 0
      };
    },
    view: function view(ctrl) {
      var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      return createView(ctrl, opts);
    }
  };
  exports["default"] = component;
  module.exports = exports["default"];
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/theme/icon/icon", ["lib/polythene/theme/icon/icon.css!lib/system-css/css"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  require("lib/polythene/theme/icon/icon.css!lib/system-css/css");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/basePullAt", ["lib/lodash/internal/isIndex"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isIndex = require("lib/lodash/internal/isIndex");
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function basePullAt(array, indexes) {
    var length = array ? indexes.length : 0;
    while (length--) {
      var index = indexes[length];
      if (index != previous && isIndex(index)) {
        var previous = index;
        splice.call(array, index, 1);
      }
    }
    return array;
  }
  module.exports = basePullAt;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/createSortedIndex", ["lib/lodash/internal/baseCallback", "lib/lodash/internal/binaryIndex", "lib/lodash/internal/binaryIndexBy"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseCallback = require("lib/lodash/internal/baseCallback"),
      binaryIndex = require("lib/lodash/internal/binaryIndex"),
      binaryIndexBy = require("lib/lodash/internal/binaryIndexBy");
  function createSortedIndex(retHighest) {
    return function(array, value, iteratee, thisArg) {
      return iteratee == null ? binaryIndex(array, value, retHighest) : binaryIndexBy(array, value, baseCallback(iteratee, thisArg, 1), retHighest);
    };
  }
  module.exports = createSortedIndex;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseUniq", ["lib/lodash/internal/baseIndexOf", "lib/lodash/internal/cacheIndexOf", "lib/lodash/internal/createCache"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseIndexOf = require("lib/lodash/internal/baseIndexOf"),
      cacheIndexOf = require("lib/lodash/internal/cacheIndexOf"),
      createCache = require("lib/lodash/internal/createCache");
  var LARGE_ARRAY_SIZE = 200;
  function baseUniq(array, iteratee) {
    var index = -1,
        indexOf = baseIndexOf,
        length = array.length,
        isCommon = true,
        isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
        seen = isLarge ? createCache() : null,
        result = [];
    if (seen) {
      indexOf = cacheIndexOf;
      isCommon = false;
    } else {
      isLarge = false;
      seen = iteratee ? [] : result;
    }
    outer: while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value, index, array) : value;
      if (isCommon && value === value) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value);
      } else if (indexOf(seen, computed, 0) < 0) {
        if (iteratee || isLarge) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
    return result;
  }
  module.exports = baseUniq;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/sortedUniq", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function sortedUniq(array, iteratee) {
    var seen,
        index = -1,
        length = array.length,
        resIndex = -1,
        result = [];
    while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value, index, array) : value;
      if (!index || seen !== computed) {
        seen = computed;
        result[++resIndex] = value;
      }
    }
    return result;
  }
  module.exports = sortedUniq;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/arrayFilter", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array.length,
        resIndex = -1,
        result = [];
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[++resIndex] = value;
      }
    }
    return result;
  }
  module.exports = arrayFilter;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/arrayReduce", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function arrayReduce(array, iteratee, accumulator, initFromArray) {
    var index = -1,
        length = array.length;
    if (initFromArray && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }
  module.exports = arrayReduce;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/arrayPush", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  module.exports = arrayPush;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/theme/layout/layout", ["lib/polythene/theme/layout/layout.css!lib/system-css/css"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  require("lib/polythene/theme/layout/layout.css!lib/system-css/css");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/theme/ripple/ripple", ["lib/polythene/theme/ripple/ripple.css!lib/system-css/css"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  require("lib/polythene/theme/ripple/ripple.css!lib/system-css/css");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/theme/shadow/shadow", ["lib/polythene/theme/shadow/shadow.css!lib/system-css/css"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  require("lib/polythene/theme/shadow/shadow.css!lib/system-css/css");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/theme/toolbar/toolbar", ["lib/polythene/theme/toolbar/toolbar.css!lib/system-css/css"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  require("lib/polythene/theme/toolbar/toolbar.css!lib/system-css/css");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseMatches", ["lib/lodash/internal/baseIsMatch", "lib/lodash/internal/getMatchData", "lib/lodash/internal/toObject"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseIsMatch = require("lib/lodash/internal/baseIsMatch"),
      getMatchData = require("lib/lodash/internal/getMatchData"),
      toObject = require("lib/lodash/internal/toObject");
  function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
      var key = matchData[0][0],
          value = matchData[0][1];
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === value && (value !== undefined || (key in toObject(object)));
      };
    }
    return function(object) {
      return baseIsMatch(object, matchData);
    };
  }
  module.exports = baseMatches;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseMatchesProperty", ["lib/lodash/internal/baseGet", "lib/lodash/internal/baseIsEqual", "lib/lodash/internal/baseSlice", "lib/lodash/lang/isArray", "lib/lodash/internal/isKey", "lib/lodash/internal/isStrictComparable", "lib/lodash/array/last", "lib/lodash/internal/toObject", "lib/lodash/internal/toPath"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseGet = require("lib/lodash/internal/baseGet"),
      baseIsEqual = require("lib/lodash/internal/baseIsEqual"),
      baseSlice = require("lib/lodash/internal/baseSlice"),
      isArray = require("lib/lodash/lang/isArray"),
      isKey = require("lib/lodash/internal/isKey"),
      isStrictComparable = require("lib/lodash/internal/isStrictComparable"),
      last = require("lib/lodash/array/last"),
      toObject = require("lib/lodash/internal/toObject"),
      toPath = require("lib/lodash/internal/toPath");
  function baseMatchesProperty(path, srcValue) {
    var isArr = isArray(path),
        isCommon = isKey(path) && isStrictComparable(srcValue),
        pathKey = (path + '');
    path = toPath(path);
    return function(object) {
      if (object == null) {
        return false;
      }
      var key = pathKey;
      object = toObject(object);
      if ((isArr || !isCommon) && !(key in object)) {
        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
        if (object == null) {
          return false;
        }
        key = last(path);
        object = toObject(object);
      }
      return object[key] === srcValue ? (srcValue !== undefined || (key in object)) : baseIsEqual(srcValue, object[key], undefined, true);
    };
  }
  module.exports = baseMatchesProperty;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/utility/identity", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function identity(value) {
    return value;
  }
  module.exports = identity;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/getNative", ["lib/lodash/lang/isNative"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isNative = require("lib/lodash/lang/isNative");
  function getNative(object, key) {
    var value = object == null ? undefined : object[key];
    return isNative(value) ? value : undefined;
  }
  module.exports = getNative;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/isLength", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  module.exports = isLength;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseGet", ["lib/lodash/internal/toObject"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toObject = require("lib/lodash/internal/toObject");
  function baseGet(object, path, pathKey) {
    if (object == null) {
      return;
    }
    if (pathKey !== undefined && pathKey in toObject(object)) {
      path = [pathKey];
    }
    var index = 0,
        length = path.length;
    while (object != null && index < length) {
      object = object[path[index++]];
    }
    return (index && index == length) ? object : undefined;
  }
  module.exports = baseGet;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/toPath", ["lib/lodash/internal/baseToString", "lib/lodash/lang/isArray"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseToString = require("lib/lodash/internal/baseToString"),
      isArray = require("lib/lodash/lang/isArray");
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
  var reEscapeChar = /\\(\\)?/g;
  function toPath(value) {
    if (isArray(value)) {
      return value;
    }
    var result = [];
    baseToString(value).replace(rePropName, function(match, number, quote, string) {
      result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
    });
    return result;
  }
  module.exports = toPath;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/toObject", ["lib/lodash/lang/isObject"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = require("lib/lodash/lang/isObject");
  function toObject(value) {
    return isObject(value) ? value : Object(value);
  }
  module.exports = toObject;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseFor", ["lib/lodash/internal/createBaseFor"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var createBaseFor = require("lib/lodash/internal/createBaseFor");
  var baseFor = createBaseFor();
  module.exports = baseFor;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/object/keys", ["lib/lodash/internal/getNative", "lib/lodash/internal/isArrayLike", "lib/lodash/lang/isObject", "lib/lodash/internal/shimKeys"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var getNative = require("lib/lodash/internal/getNative"),
      isArrayLike = require("lib/lodash/internal/isArrayLike"),
      isObject = require("lib/lodash/lang/isObject"),
      shimKeys = require("lib/lodash/internal/shimKeys");
  var nativeKeys = getNative(Object, 'keys');
  var keys = !nativeKeys ? shimKeys : function(object) {
    var Ctor = object == null ? undefined : object.constructor;
    if ((typeof Ctor == 'function' && Ctor.prototype === object) || (typeof object != 'function' && isArrayLike(object))) {
      return shimKeys(object);
    }
    return isObject(object) ? nativeKeys(object) : [];
  };
  module.exports = keys;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/getLength", ["lib/lodash/internal/baseProperty"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseProperty = require("lib/lodash/internal/baseProperty");
  var getLength = baseProperty('length');
  module.exports = getLength;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/isIndex", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var reIsUint = /^\d+$/;
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isIndex(value, length) {
    value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return value > -1 && value % 1 == 0 && value < length;
  }
  module.exports = isIndex;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/lang/isObject", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  module.exports = isObject;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/lang/isArguments", ["lib/lodash/internal/isArrayLike", "lib/lodash/internal/isObjectLike"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isArrayLike = require("lib/lodash/internal/isArrayLike"),
      isObjectLike = require("lib/lodash/internal/isObjectLike");
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  function isArguments(value) {
    return isObjectLike(value) && isArrayLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
  }
  module.exports = isArguments;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseFindIndex", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function baseFindIndex(array, predicate, fromRight) {
    var length = array.length,
        index = fromRight ? length : -1;
    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }
  module.exports = baseFindIndex;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/binaryIndexBy", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var nativeFloor = Math.floor,
      nativeMin = Math.min;
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1;
  function binaryIndexBy(array, value, iteratee, retHighest) {
    value = iteratee(value);
    var low = 0,
        high = array ? array.length : 0,
        valIsNaN = value !== value,
        valIsNull = value === null,
        valIsUndef = value === undefined;
    while (low < high) {
      var mid = nativeFloor((low + high) / 2),
          computed = iteratee(array[mid]),
          isDef = computed !== undefined,
          isReflexive = computed === computed;
      if (valIsNaN) {
        var setLow = isReflexive || retHighest;
      } else if (valIsNull) {
        setLow = isReflexive && isDef && (retHighest || computed != null);
      } else if (valIsUndef) {
        setLow = isReflexive && (retHighest || isDef);
      } else if (computed == null) {
        setLow = false;
      } else {
        setLow = retHighest ? (computed <= value) : (computed < value);
      }
      if (setLow) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return nativeMin(high, MAX_ARRAY_INDEX);
  }
  module.exports = binaryIndexBy;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/SetCache", ["lib/lodash/internal/cachePush", "lib/lodash/internal/getNative"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cachePush = require("lib/lodash/internal/cachePush"),
      getNative = require("lib/lodash/internal/getNative");
  var Set = getNative(global, 'Set');
  var nativeCreate = getNative(Object, 'create');
  function SetCache(values) {
    var length = values ? values.length : 0;
    this.data = {
      'hash': nativeCreate(null),
      'set': new Set
    };
    while (length--) {
      this.push(values[length]);
    }
  }
  SetCache.prototype.push = cachePush;
  module.exports = SetCache;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/polythene/theme/svg/svg", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal(__module.id, null, null);
  (function() {
    "use strict";
  })();
  return _retrieveGlobal();
});

System.registerDynamic("lib/lodash/internal/baseIsMatch", ["lib/lodash/internal/baseIsEqual", "lib/lodash/internal/toObject"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseIsEqual = require("lib/lodash/internal/baseIsEqual"),
      toObject = require("lib/lodash/internal/toObject");
  function baseIsMatch(object, matchData, customizer) {
    var index = matchData.length,
        length = index,
        noCustomizer = !customizer;
    if (object == null) {
      return !length;
    }
    object = toObject(object);
    while (index--) {
      var data = matchData[index];
      if ((noCustomizer && data[2]) ? data[1] !== object[data[0]] : !(data[0] in object)) {
        return false;
      }
    }
    while (++index < length) {
      data = matchData[index];
      var key = data[0],
          objValue = object[key],
          srcValue = data[1];
      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false;
        }
      } else {
        var result = customizer ? customizer(objValue, srcValue, key) : undefined;
        if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
          return false;
        }
      }
    }
    return true;
  }
  module.exports = baseIsMatch;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/getMatchData", ["lib/lodash/internal/isStrictComparable", "lib/lodash/object/pairs"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isStrictComparable = require("lib/lodash/internal/isStrictComparable"),
      pairs = require("lib/lodash/object/pairs");
  function getMatchData(object) {
    var result = pairs(object),
        length = result.length;
    while (length--) {
      result[length][2] = isStrictComparable(result[length][1]);
    }
    return result;
  }
  module.exports = getMatchData;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseIsEqual", ["lib/lodash/internal/baseIsEqualDeep", "lib/lodash/lang/isObject", "lib/lodash/internal/isObjectLike"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var baseIsEqualDeep = require("lib/lodash/internal/baseIsEqualDeep"),
      isObject = require("lib/lodash/lang/isObject"),
      isObjectLike = require("lib/lodash/internal/isObjectLike");
  function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
  }
  module.exports = baseIsEqual;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/isStrictComparable", ["lib/lodash/lang/isObject"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = require("lib/lodash/lang/isObject");
  function isStrictComparable(value) {
    return value === value && !isObject(value);
  }
  module.exports = isStrictComparable;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/lang/isNative", ["lib/lodash/lang/isFunction", "lib/lodash/internal/isObjectLike"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isFunction = require("lib/lodash/lang/isFunction"),
      isObjectLike = require("lib/lodash/internal/isObjectLike");
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var objectProto = Object.prototype;
  var fnToString = Function.prototype.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var reIsNative = RegExp('^' + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  function isNative(value) {
    if (value == null) {
      return false;
    }
    if (isFunction(value)) {
      return reIsNative.test(fnToString.call(value));
    }
    return isObjectLike(value) && reIsHostCtor.test(value);
  }
  module.exports = isNative;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseToString", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function baseToString(value) {
    return value == null ? '' : (value + '');
  }
  module.exports = baseToString;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/createBaseFor", ["lib/lodash/internal/toObject"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toObject = require("lib/lodash/internal/toObject");
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var iterable = toObject(object),
          props = keysFunc(object),
          length = props.length,
          index = fromRight ? length : -1;
      while ((fromRight ? index-- : ++index < length)) {
        var key = props[index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  module.exports = createBaseFor;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/shimKeys", ["lib/lodash/lang/isArguments", "lib/lodash/lang/isArray", "lib/lodash/internal/isIndex", "lib/lodash/internal/isLength", "lib/lodash/object/keysIn"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isArguments = require("lib/lodash/lang/isArguments"),
      isArray = require("lib/lodash/lang/isArray"),
      isIndex = require("lib/lodash/internal/isIndex"),
      isLength = require("lib/lodash/internal/isLength"),
      keysIn = require("lib/lodash/object/keysIn");
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function shimKeys(object) {
    var props = keysIn(object),
        propsLength = props.length,
        length = propsLength && object.length;
    var allowIndexes = !!length && isLength(length) && (isArray(object) || isArguments(object));
    var index = -1,
        result = [];
    while (++index < propsLength) {
      var key = props[index];
      if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
        result.push(key);
      }
    }
    return result;
  }
  module.exports = shimKeys;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/cachePush", ["lib/lodash/lang/isObject"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = require("lib/lodash/lang/isObject");
  function cachePush(value) {
    var data = this.data;
    if (typeof value == 'string' || isObject(value)) {
      data.set.add(value);
    } else {
      data.hash[value] = true;
    }
  }
  module.exports = cachePush;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/object/pairs", ["lib/lodash/object/keys", "lib/lodash/internal/toObject"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var keys = require("lib/lodash/object/keys"),
      toObject = require("lib/lodash/internal/toObject");
  function pairs(object) {
    object = toObject(object);
    var index = -1,
        props = keys(object),
        length = props.length,
        result = Array(length);
    while (++index < length) {
      var key = props[index];
      result[index] = [key, object[key]];
    }
    return result;
  }
  module.exports = pairs;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/baseIsEqualDeep", ["lib/lodash/internal/equalArrays", "lib/lodash/internal/equalByTag", "lib/lodash/internal/equalObjects", "lib/lodash/lang/isArray", "lib/lodash/lang/isTypedArray"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var equalArrays = require("lib/lodash/internal/equalArrays"),
      equalByTag = require("lib/lodash/internal/equalByTag"),
      equalObjects = require("lib/lodash/internal/equalObjects"),
      isArray = require("lib/lodash/lang/isArray"),
      isTypedArray = require("lib/lodash/lang/isTypedArray");
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      objectTag = '[object Object]';
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objToString = objectProto.toString;
  function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
    var objIsArr = isArray(object),
        othIsArr = isArray(other),
        objTag = arrayTag,
        othTag = arrayTag;
    if (!objIsArr) {
      objTag = objToString.call(object);
      if (objTag == argsTag) {
        objTag = objectTag;
      } else if (objTag != objectTag) {
        objIsArr = isTypedArray(object);
      }
    }
    if (!othIsArr) {
      othTag = objToString.call(other);
      if (othTag == argsTag) {
        othTag = objectTag;
      } else if (othTag != objectTag) {
        othIsArr = isTypedArray(other);
      }
    }
    var objIsObj = objTag == objectTag,
        othIsObj = othTag == objectTag,
        isSameTag = objTag == othTag;
    if (isSameTag && !(objIsArr || objIsObj)) {
      return equalByTag(object, other, objTag);
    }
    if (!isLoose) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
      if (objIsWrapped || othIsWrapped) {
        return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stackA || (stackA = []);
    stackB || (stackB = []);
    var length = stackA.length;
    while (length--) {
      if (stackA[length] == object) {
        return stackB[length] == other;
      }
    }
    stackA.push(object);
    stackB.push(other);
    var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
    stackA.pop();
    stackB.pop();
    return result;
  }
  module.exports = baseIsEqualDeep;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/lang/isFunction", ["lib/lodash/lang/isObject"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = require("lib/lodash/lang/isObject");
  var funcTag = '[object Function]';
  var objectProto = Object.prototype;
  var objToString = objectProto.toString;
  function isFunction(value) {
    return isObject(value) && objToString.call(value) == funcTag;
  }
  module.exports = isFunction;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/object/keysIn", ["lib/lodash/lang/isArguments", "lib/lodash/lang/isArray", "lib/lodash/internal/isIndex", "lib/lodash/internal/isLength", "lib/lodash/lang/isObject"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isArguments = require("lib/lodash/lang/isArguments"),
      isArray = require("lib/lodash/lang/isArray"),
      isIndex = require("lib/lodash/internal/isIndex"),
      isLength = require("lib/lodash/internal/isLength"),
      isObject = require("lib/lodash/lang/isObject");
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function keysIn(object) {
    if (object == null) {
      return [];
    }
    if (!isObject(object)) {
      object = Object(object);
    }
    var length = object.length;
    length = (length && isLength(length) && (isArray(object) || isArguments(object)) && length) || 0;
    var Ctor = object.constructor,
        index = -1,
        isProto = typeof Ctor == 'function' && Ctor.prototype === object,
        result = Array(length),
        skipIndexes = length > 0;
    while (++index < length) {
      result[index] = (index + '');
    }
    for (var key in object) {
      if (!(skipIndexes && isIndex(key, length)) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  module.exports = keysIn;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/equalArrays", ["lib/lodash/internal/arraySome"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var arraySome = require("lib/lodash/internal/arraySome");
  function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
    var index = -1,
        arrLength = array.length,
        othLength = other.length;
    if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
      return false;
    }
    while (++index < arrLength) {
      var arrValue = array[index],
          othValue = other[index],
          result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
      if (result !== undefined) {
        if (result) {
          continue;
        }
        return false;
      }
      if (isLoose) {
        if (!arraySome(other, function(othValue) {
          return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
        })) {
          return false;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
        return false;
      }
    }
    return true;
  }
  module.exports = equalArrays;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/equalByTag", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      numberTag = '[object Number]',
      regexpTag = '[object RegExp]',
      stringTag = '[object String]';
  function equalByTag(object, other, tag) {
    switch (tag) {
      case boolTag:
      case dateTag:
        return +object == +other;
      case errorTag:
        return object.name == other.name && object.message == other.message;
      case numberTag:
        return (object != +object) ? other != +other : object == +other;
      case regexpTag:
      case stringTag:
        return object == (other + '');
    }
    return false;
  }
  module.exports = equalByTag;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/equalObjects", ["lib/lodash/object/keys"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var keys = require("lib/lodash/object/keys");
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
    var objProps = keys(object),
        objLength = objProps.length,
        othProps = keys(other),
        othLength = othProps.length;
    if (objLength != othLength && !isLoose) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
        return false;
      }
    }
    var skipCtor = isLoose;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
          othValue = other[key],
          result = customizer ? customizer(isLoose ? othValue : objValue, isLoose ? objValue : othValue, key) : undefined;
      if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
        return false;
      }
      skipCtor || (skipCtor = key == 'constructor');
    }
    if (!skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor;
      if (objCtor != othCtor && ('constructor' in object && 'constructor' in other) && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        return false;
      }
    }
    return true;
  }
  module.exports = equalObjects;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/lang/isTypedArray", ["lib/lodash/internal/isLength", "lib/lodash/internal/isObjectLike"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isLength = require("lib/lodash/internal/isLength"),
      isObjectLike = require("lib/lodash/internal/isObjectLike");
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      weakMapTag = '[object WeakMap]';
  var arrayBufferTag = '[object ArrayBuffer]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  var objectProto = Object.prototype;
  var objToString = objectProto.toString;
  function isTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
  }
  module.exports = isTypedArray;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("lib/lodash/internal/arraySome", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function arraySome(array, predicate) {
    var index = -1,
        length = array.length;
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  module.exports = arraySome;
  global.define = __define;
  return module.exports;
});

//# sourceMappingURL=index.js.map