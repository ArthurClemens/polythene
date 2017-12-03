import { filterSupportedAttributes } from 'polythene-core';
import { vars } from 'polythene-theme';

var listTileClasses = {
  component: "pe-list-tile",

  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",

  // states
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky"
};

var classes = {
  component: "pe-list",

  // states
  borders: "pe-list--borders",
  compact: "pe-list--compact",
  hasHeader: "pe-list--header",
  indentedBorders: "pe-list--indented-borders",
  padding: "pe-list--padding",

  // lookup
  header: listTileClasses.header
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

/* MARK */
var onSelect = function onSelect(event, vnode, index) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  if (attrs.onSelect) {
    var selectedIndex = index !== undefined ? index : state.highlightIndex();
    if (selectedIndex > -1) {
      var data = {
        event: event,
        index: selectedIndex,
        dom: state.tiles[selectedIndex].dom,
        attrs: state.tiles[selectedIndex].attrs
      };
      attrs.onSelect(data);
    }
  }
  if (index !== undefined) {
    setHighlightIndex({ state: state, index: index });
  }
};

/* MARK */
var setHighlightIndex = function setHighlightIndex(_ref) {
  var state = _ref.state,
      index = _ref.index;

  var normalizedHighlightIndex = index === undefined || index === null ? -1 : index;
  var currentHighlightIndex = state.highlightIndex();
  if (normalizedHighlightIndex !== currentHighlightIndex) {
    // Explicitly reset to -1, or else only change when currently -1
    if (normalizedHighlightIndex === -1) {
      state.highlightIndex(-1);
    } else if (currentHighlightIndex === -1) {
      state.highlightIndex(normalizedHighlightIndex);
    }
  }
};

/* MARK */
var exitHighlight = function exitHighlight(_ref2) {
  var state = _ref2.state,
      attrs = _ref2.attrs,
      newIndex = _ref2.newIndex;

  var highlightIndex = state.highlightIndex();
  state.tiles[highlightIndex].dom.blur();
  state.highlightIndex(-1);
  if (attrs.onHighlightExit) {
    attrs.onHighlightExit({
      index: newIndex,
      dom: state.tiles[highlightIndex].dom
    });
  }
};

/* MARK */
var getInitialState = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;
  var highlightIndex = createStream(attrs.defaultHighlightIndex !== undefined && attrs.defaultHighlightIndex !== null ? attrs.defaultHighlightIndex : -1);
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

/* MARK */
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

/* MARK */
var onUpdate = function onUpdate(_ref3) {
  var state = _ref3.state,
      attrs = _ref3.attrs;

  if (!isNaN(attrs.highlightIndex)) {
    setHighlightIndex({ state: state, index: attrs.highlightIndex });
  }
};

var createProps = function createProps(vnode, _ref4) {
  var k = _ref4.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  return _extends({}, filterSupportedAttributes(attrs), {
    className: [classes.component, attrs.borders ? classes.borders : null, attrs.indentedBorders ? classes.indentedBorders : null, attrs.header ? classes.hasHeader : null, attrs.compact ? classes.compact : null, attrs.padding !== false ? classes.padding : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  },
  /* MARK */
  attrs.keyboardControl && _defineProperty({}, k.onkeydown, function (e) {
    var highlightIndex = state.highlightIndex();
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault(); // prevent scrolling the page
      var newIndex = highlightIndex + 1;
      if (newIndex >= state.tiles.length) {
        exitHighlight({ state: state, attrs: attrs, newIndex: newIndex });
      } else {
        // Setting the focus on the List Tile will invoke a callback using attr `setHighlightIndex`
        state.tiles[newIndex].dom.focus();
      }
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault(); // prevent scrolling the page
      var _newIndex = highlightIndex - 1;
      if (_newIndex < 0) {
        exitHighlight({ state: state, attrs: attrs, newIndex: _newIndex });
      } else {
        state.tiles[_newIndex].dom.focus();
      }
    } else if (e.key === "Enter") {
      onSelect(e, vnode);
    } else if (e.key === "Escape") {
      exitHighlight({ state: state, attrs: attrs, newIndex: highlightIndex });
    }
  }));
};

var createContent = function createContent(vnode, _ref6) {
  var h = _ref6.renderer,
      requiresKeys = _ref6.requiresKeys,
      k = _ref6.keys,
      ListTile = _ref6.ListTile;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var headerOpts = void 0;
  if (attrs.header) {
    headerOpts = _extends({}, attrs.header);
    headerOpts[k.class] = [classes.header, headerOpts[k.class] || null].join(" ");
  }
  var tiles = attrs.tiles ? attrs.tiles : attrs.content ? attrs.content : attrs.children || vnode.children;
  var index = -1;
  return [headerOpts ? h(ListTile, _extends({}, requiresKeys ? { key: "header" } : null, attrs.all, headerOpts, {
    header: true
  })) : null,
  /* MARK */
  attrs.keyboardControl ? tiles.map(function (tileOpts) {
    if (!tileOpts.header) {
      index++;
    }
    var tileIndex = index;
    return tileOpts.tag !== undefined ? tileOpts : h(ListTile, _extends({}, attrs.all, tileOpts, !tileOpts.header && {
      keyboardControl: true,
      register: state.registerTile(state),
      setHighlightIndex: state.highlightIndex,
      index: index,
      defaultHighlight: state.highlightIndex() === tileIndex,
      events: _extends({}, tileOpts.events, _defineProperty({}, k.onclick, function (e) {
        return onSelect(e, vnode, tileIndex);
      }))
    }));
  }) : attrs.all ? tiles.map(function (tileOpts) {
    return h(ListTile, _extends({}, attrs.all, tileOpts));
  }) : tiles];
};

var list = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	onMount: onMount,
	onUpdate: onUpdate,
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

export { list as coreList, vars$1 as vars };
