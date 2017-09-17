import { filterSupportedAttributes } from 'polythene-core';
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var onSelect = function onSelect(event, vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  if (attrs.onSelect) {
    var highlightIndex = state.highlightIndex();
    var data = {
      event: event,
      index: highlightIndex,
      dom: state.tiles[highlightIndex].dom,
      attrs: state.tiles[highlightIndex].attrs
    };
    attrs.onSelect(data);
  }
};

var getInitialState = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;
  var highlightIndex = createStream(attrs.defaultHighlightIndex !== undefined ? attrs.defaultHighlightIndex : -1);
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
      onSelect(e, vnode);
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
      events: _extends({}, tileOpts.events, _defineProperty({}, k.onclick, function (e) {
        return onSelect(e, vnode);
      }))
    }));
  }) : tiles];
};

var list = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	onMount: onMount,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
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

export { list as coreList, classes$1 as classes, vars$1 as vars };
