var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

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

var exitHighlight = function exitHighlight(_ref2) {
  var state = _ref2.state,
      attrs = _ref2.attrs,
      newIndex = _ref2.newIndex;

  var highlightIndex = state.highlightIndex();
  // state.tiles[highlightIndex].dom.blur();
  document.activeElement.blur();
  state.highlightIndex(-1);
  if (attrs.onHighlightExit) {
    attrs.onHighlightExit({
      index: newIndex,
      dom: state.tiles[highlightIndex].dom
    });
  }
};

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

var onMount = function onMount(vnode) {
  var state = vnode.state;
  state.highlightIndex.map(function (index) {
    if (state.tiles[index]) {
      state.tiles[index].dom.focus();
    }
  });
};

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
  return _extends({}, _defineProperty({}, k.onkeydown, function (e) {
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

var createContent = function createContent(vnode, _ref5) {
  var h = _ref5.renderer,
      k = _ref5.keys,
      List = _ref5.List,
      ListTile = _ref5.ListTile;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var index = -1;
  var tiles = attrs.tiles.map(function (tileOpts) {
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
  });
  return h(List, _extends({}, attrs, {
    tiles: tiles
  }));
};

var keyboardList = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	onMount: onMount,
	onUpdate: onUpdate,
	createProps: createProps,
	createContent: createContent
});

export { keyboardList as coreKeyboardList };
