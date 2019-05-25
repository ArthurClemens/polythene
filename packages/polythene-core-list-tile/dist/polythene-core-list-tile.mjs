import { filterSupportedAttributes } from 'polythene-core';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var classes = {
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
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var _ListTile = function _ListTile(_ref) {
  var h = _ref.h,
      a = _ref.a,
      Ripple = _ref.Ripple,
      Icon = _ref.Icon,
      props = _objectWithoutProperties(_ref, ["h", "a", "Ripple", "Icon"]);

  var hasTabIndex = !props.header && !props.url && !(props.secondary && props.secondary.url);
  var heightClass = props.subtitle ? classes.hasSubtitle : props.highSubtitle ? classes.hasHighSubtitle : props.front || props.indent ? classes.hasFront : null;

  var componentProps = _extends({}, filterSupportedAttributes(props, {
    remove: ["tabindex", "tabIndex"]
  }), // tabindex is set elsewhere
  props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.selected ? classes.selected : null, props.disabled ? classes.disabled : null, props.sticky ? classes.sticky : null, props.compact ? classes.compact : null, props.hoverable ? classes.hoverable : null, props.selectable ? classes.selectable : null, props.highlight ? classes.highlight : null, props.rounded ? classes.rounded : null, props.header ? classes.header : null, props.inset || props.insetH ? classes.insetH : null, props.inset || props.insetV ? classes.insetV : null, props.navigation ? classes.navigation : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, heightClass, props.className || props[a["class"]]].join(" ")
  }, hasTabIndex && _defineProperty({}, a.tabindex, props[a.tabindex] || 0) // events and url are attached to primary content to not interfere with controls
  );

  var primaryProps = _extends({}, {
    key: "primary"
  }, props);

  delete primaryProps.id;
  delete primaryProps[a["class"]];
  var contents = [props.ink && !props.disabled ? h(Ripple, _extends({}, props.ripple, {
    key: "ripple"
  })) : null, primaryContent({
    h: h,
    a: a,
    props: primaryProps
  }), props.secondary ? secondaryContent({
    h: h,
    a: a,
    Icon: Icon,
    props: props.secondary
  }) : null];
  var content = [props.before, contents, props.after];
  return h("div", // because primary or secondary content can be an "a", the container is always defined as "div", and option `element` is passed to primary content
  componentProps, content);
};

var primaryContent = function primaryContent(_ref3) {
  var h = _ref3.h,
      a = _ref3.a,
      props = _ref3.props;
  var url = props.keyboardControl ? null : props.url;
  var element = props.element ? props.element : url ? "a" : "div";
  var contentFrontClass = [classes.content, classes.contentFront, props.compactFront ? classes.compactFront : null].join(" ");
  var frontComp = props.front || props.indent ? h("div", _extends({}, {
    key: "front"
  }, {
    className: contentFrontClass
  }), props.front) : null;
  var hasTabIndex = !props.header && props.url;

  var elementProps = _extends({}, filterSupportedAttributes(props), props.events, {
    key: "primary"
  }, {
    className: classes.primary,
    style: null
  }, hasTabIndex && _defineProperty({}, a.tabindex, props[a.tabindex] || 0), url);

  var content = props.content ? props.content : [frontComp, h("div", {
    className: classes.content,
    style: props.style
  }, [props.title && !props.content ? h("div", _extends({}, {
    key: "title"
  }, {
    className: classes.title
  }), props.title) : null, props.subtitle ? h("div", _extends({}, {
    key: "subtitle"
  }, {
    className: classes.subtitle
  }), props.subtitle) : null, props.highSubtitle ? h("div", _extends({}, {
    key: "highSubtitle"
  }, {
    className: classes.subtitle + " " + classes.highSubtitle
  }), props.highSubtitle) : null, props.subContent ? h("div", _extends({}, {
    key: "subContent"
  }, {
    className: classes.subContent
  }), props.subContent) : null, props.children])];
  return h(element, elementProps, content);
};

var secondaryContent = function secondaryContent(_ref5) {
  var h = _ref5.h,
      a = _ref5.a,
      Icon = _ref5.Icon,
      _ref5$props = _ref5.props,
      props = _ref5$props === void 0 ? {} : _ref5$props;
  var url = props.keyboardControl ? null : props.url;
  var element = props.element ? props.element : url ? "a" : "div";
  var hasTabIndex = props.url;
  return h(element, _extends({}, url, {
    className: classes.secondary
  }, props.events, filterSupportedAttributes(props), hasTabIndex && _defineProperty({}, a.tabindex, props[a.tabindex] || 0), {
    key: "secondary"
  }), h("div", {
    className: classes.content
  }, [props.icon ? h(Icon, props.icon) : null, props.content ? props.content : null]));
};

export { _ListTile };
