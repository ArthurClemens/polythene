import { filterSupportedAttributes } from 'polythene-core';
import { rgba, styler } from 'polythene-core-css';
import { classes } from 'polythene-core-list-tile';
import { vars } from 'polythene-theme';

var classes$1 = {
  component: "pe-list",

  // elements
  header: classes.header,

  // states
  borders: "pe-list--borders",
  compact: "pe-list--compact",
  hasHeader: "pe-list--header",
  indentedBorders: "pe-list--indented-borders",
  padding: "pe-list--padding"
};

var vars$1 = {
  padding: vars.grid_unit_component, // vertical padding
  padding_compact: vars.grid_unit_component * 3 / 4,
  border_width_stacked: 1,
  border_width_bordered: 1,

  color_light_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_dark_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light)

  // background color may be set in theme; disabled by default
  // color_light_background: "inherit",
  // color_dark_background:  "inherit"
};

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var borderStyle = function borderStyle(componentVars) {
  return {
    borderStyle: "none none solid none",
    borderWidth: componentVars.border_width_bordered + "px"
  };
};

var layout = (function (selector, componentVars) {
  return [_defineProperty$1({}, selector, {

    ".pe-list--padding": {
      padding: componentVars.padding + "px 0"
    },

    ".pe-list--header": {
      paddingTop: 0
    },

    ".pe-list--compact": {
      padding: componentVars.padding_compact + "px 0"
    },

    "& + &": {
      borderStyle: "solid none none none",
      borderWidth: componentVars.border_width_stacked + "px"
    },

    ".pe-list--borders": {
      " .pe-list-tile": {
        ":not(.pe-list-tile--header):not(:last-child)": {
          "&": borderStyle(componentVars)
        }
      }
    },

    ".pe-list--indented-borders": {
      borderTop: "none",

      " .pe-list-tile": {
        ":not(.pe-list-tile--header):not(:last-child)": {
          " .pe-list-tile__content:not(.pe-list-tile__content-front)": borderStyle(componentVars)
        }
      }
    }
  })];
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  var _scopes$map$join;

  return [_defineProperty$2({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), (_scopes$map$join = {
    backgroundColor: componentVars["color_" + tint + "_background"]

  }, _defineProperty$2(_scopes$map$join, "& + .pe-list", {
    borderTopColor: componentVars["color_" + tint + "_border"]
  }), _defineProperty$2(_scopes$map$join, ".pe-list--borders", {
    " .pe-list-tile": {
      ":not(:last-child)": {
        borderColor: componentVars["color_" + tint + "_border"]
      }
    }
  }), _defineProperty$2(_scopes$map$join, ".pe-list--indented-borders", {
    " .pe-list-tile": {
      " .pe-list-tile__content:not(.pe-list-tile__content-front)": {
        borderColor: componentVars["color_" + tint + "_border"]
      }
    }
  }), _scopes$map$join))];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes$1.component;

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var theme = customTheme;

var onSelect = function onSelect(vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  if (attrs.onSelect) {
    var highlightIndex = state.highlightIndex();
    var data = {
      index: highlightIndex,
      dom: state.tiles[highlightIndex].dom,
      attrs: state.tiles[highlightIndex].attrs
    };
    attrs.onSelect(data);
  }
};

var getInitialState = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;
  var highlightIndex = createStream(attrs.highlightIndex !== undefined ? attrs.highlightIndex : -1);
  var registerTile = function registerTile(state) {
    return function (index, data) {
      return state.tiles[index] = data;
    };
  };
  return {
    tiles: [],
    highlightIndex: highlightIndex,
    registerTile: registerTile,
    redrawOnUpdate: createStream.merge([highlightIndex])
  };
};

var onMount = function onMount(vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  if (attrs.keyboardControl) {
    state.highlightIndex.map(function (index) {
      if (state.tiles[index]) {
        state.tiles[index].dom.focus();
      }
    });
  }
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  return _extends({}, filterSupportedAttributes(attrs), {
    className: [classes$1.component, attrs.borders ? classes$1.borders : null, attrs.indentedBorders ? classes$1.indentedBorders : null, attrs.header ? classes$1.hasHeader : null, attrs.compact ? classes$1.compact : null, attrs.padding !== false ? classes$1.padding : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.keyboardControl && _defineProperty({}, k.onkeydown, function (e) {
    var highlightIndex = state.highlightIndex();
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault(); // prevent scrolling the page
      var newIndex = Math.min(state.tiles.length - 1, highlightIndex + 1);
      state.tiles[newIndex].dom.focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault(); // prevent scrolling the page
      var _newIndex = Math.max(0, highlightIndex - 1);
      state.tiles[_newIndex].dom.focus();
    } else if (e.key === "Enter") {
      onSelect(vnode);
    } else if (e.key === "Escape") {
      state.tiles[highlightIndex].dom.blur();
      state.highlightIndex(-1);
    }
  }));
};

var createContent = function createContent(vnode, _ref3) {
  var h = _ref3.renderer,
      requiresKeys = _ref3.requiresKeys,
      k = _ref3.keys,
      ListTile = _ref3.ListTile;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var headerOpts = void 0;
  if (attrs.header) {
    headerOpts = _extends({}, attrs.header);
    headerOpts[k.class] = [classes$1.header, headerOpts[k.class] || null].join(" ");
  }
  var highlightIndex = state.highlightIndex();
  var tiles = attrs.tiles ? attrs.tiles : attrs.content ? attrs.content : attrs.children || vnode.children;
  var index = -1;
  return [headerOpts ? h(ListTile, _extends({}, requiresKeys ? { key: "header" } : null, headerOpts, {
    header: true
  })) : null, attrs.keyboardControl ? tiles.map(function (tileOpts) {
    if (!tileOpts.header) {
      index++;
    }
    return tileOpts.tag !== undefined ? tileOpts : h(ListTile, _extends({}, tileOpts, !tileOpts.header && {
      keyboardControl: true,
      register: state.registerTile(state),
      setHighlightIndex: state.highlightIndex,
      index: index,
      defaultHighlight: highlightIndex === index,
      events: _extends({}, tileOpts.events, _defineProperty({}, k.onclick, function () {
        return onSelect(vnode);
      }))
    }));
  }) : tiles];
};

var list = Object.freeze({
	getElement: getElement,
	theme: theme,
	getInitialState: getInitialState,
	onMount: onMount,
	createProps: createProps,
	createContent: createContent
});

export { list as coreList, classes$1 as classes, vars$1 as vars };
