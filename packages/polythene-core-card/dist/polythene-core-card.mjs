import { filterSupportedAttributes } from 'polythene-core';

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var classes = {
  component: "pe-card",
  // elements
  actions: "pe-card__actions",
  any: "pe-card__any",
  content: "pe-card__content",
  header: "pe-card__header",
  headerTitle: "pe-card__header-title",
  media: "pe-card__media",
  mediaDimmer: "pe-card__media__dimmer",
  overlay: "pe-card__overlay",
  overlayContent: "pe-card__overlay__content",
  primary: "pe-card__primary",
  primaryMedia: "pe-card__primary-media",
  subtitle: "pe-card__subtitle",
  text: "pe-card__text",
  title: "pe-card__title",
  // states
  actionsBorder: "pe-card__actions--border",
  actionsHorizontal: "pe-card__actions--horizontal",
  actionsJustified: "pe-card__actions--justified",
  actionsTight: "pe-card__actions--tight",
  actionsVertical: "pe-card__actions--vertical",
  mediaCropX: "pe-card__media--crop-x",
  mediaCropY: "pe-card__media--crop-y",
  mediaOriginStart: "pe-card__media--origin-start",
  mediaOriginCenter: "pe-card__media--origin-center",
  mediaOriginEnd: "pe-card__media--origin-end",
  mediaLarge: "pe-card__media--large",
  mediaMedium: "pe-card__media--medium",
  mediaRatioLandscape: "pe-card__media--landscape",
  mediaRatioSquare: "pe-card__media--square",
  mediaRegular: "pe-card__media--regular",
  mediaSmall: "pe-card__media--small",
  overlaySheet: "pe-card__overlay--sheet",
  primaryHasMedia: "pe-card__primary--media",
  primaryTight: "pe-card__primary--tight",
  textTight: "pe-card__text--tight"
};

var createOverlay = function createOverlay(_ref) {
  var dispatcher = _ref.dispatcher,
      props = _ref.props,
      h = _ref.h,
      a = _ref.a;
  var element = props.element || "div";
  var content = props.content.map(dispatcher);
  return h("div", {
    key: props.key || "card-overlay",
    style: props.style,
    className: [classes.overlay, props.sheet ? classes.overlaySheet : null, props.tone === "light" ? null : "pe-dark-tone", // default dark tone
    props.tone === "light" ? "pe-light-tone" : null].join(" ")
  }, [h(element, {
    key: "content",
    className: [classes.overlayContent, props.className || props[a.class]].join(" ")
  }, content), h("div", {
    key: "dimmer",
    className: classes.mediaDimmer
  })]);
};

var createAny = function createAny(_ref2) {
  var props = _ref2.props,
      h = _ref2.h,
      a = _ref2.a;
  var element = props.element || "div";
  return h(element, _extends({}, filterSupportedAttributes(props), {
    key: props.key || "card-any",
    className: [classes.any, props.tight ? classes.textTight : null, props.className || props[a.class]].join(" ")
  }), props.content);
};

var createText = function createText(_ref3) {
  var props = _ref3.props,
      h = _ref3.h,
      a = _ref3.a;
  var element = props.element || "div";
  return h(element, _extends({}, filterSupportedAttributes(props), {
    key: props.key || "card-text",
    className: [classes.text, props.tight ? classes.textTight : null, props.className || props[a.class]].join(" ")
  }, props.events), props.content);
};

var createHeader = function createHeader(_ref4) {
  var props = _ref4.props,
      h = _ref4.h,
      a = _ref4.a,
      Icon = _ref4.Icon,
      ListTile = _ref4.ListTile;
  return h(ListTile, _extends({}, props, {
    key: props.key || "card-header",
    className: [classes.header, props.className || props[a.class]].join(" ")
  }, props.icon ? {
    front: h(Icon, props.icon)
  } : null));
};

var _Card = function _Card(_ref5) {
  var h = _ref5.h,
      a = _ref5.a,
      CardActions = _ref5.CardActions,
      CardMedia = _ref5.CardMedia,
      CardPrimary = _ref5.CardPrimary,
      Icon = _ref5.Icon,
      ListTile = _ref5.ListTile,
      Shadow = _ref5.Shadow,
      props = _objectWithoutProperties(_ref5, ["h", "a", "CardActions", "CardMedia", "CardPrimary", "Icon", "ListTile", "Shadow"]);

  var componentProps = _extends({}, filterSupportedAttributes(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a.class]].join(" ")
  }, props.url, props.events);

  var dispatcher = function dispatcher(block) {
    var key = Object.keys(block)[0];

    var props = _extends({}, block[key], {
      dispatcher: dispatcher,
      key: key
    });

    switch (key) {
      case "actions":
        return h(CardActions, props);

      case "header":
        return createHeader({
          props: props,
          h: h,
          a: a,
          Icon: Icon,
          ListTile: ListTile
        });

      case "media":
        return h(CardMedia, props);

      case "overlay":
        return createOverlay({
          dispatcher: dispatcher,
          props: props,
          h: h,
          a: a
        });

      case "primary":
        return h(CardPrimary, props);

      case "text":
        return createText({
          props: props,
          h: h,
          a: a
        });

      case "any":
        return createAny({
          props: props,
          h: h,
          a: a
        });

      default:
        throw "Content type \"".concat(key, "\" does not exist");
    }
  };

  var contents = [props.before, Array.isArray(props.content) ? props.content.map(dispatcher) : props.content, // deprecated
  props.after];
  var shadowDepth = props.shadowDepth !== undefined ? props.shadowDepth : props.z; // deprecated

  var content = [h(Shadow, {
    shadowDepth: shadowDepth !== undefined ? shadowDepth : 1,
    animated: true,
    key: "shadow"
  }), h("div", {
    className: classes.content,
    key: "content"
  }, contents), props.children];
  var element = props.element || props.url ? "a" : "div";
  return h(element, componentProps, content);
};

var imageRatios = {
  landscape: 16 / 9,
  square: 1
};
var mediaSizeClasses = {
  small: classes.mediaSmall,
  regular: classes.mediaRegular,
  medium: classes.mediaMedium,
  large: classes.mediaLarge
};

var mediaSizeClass = function mediaSizeClass() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return mediaSizeClasses[size];
};

var initImage = function initImage(_ref) {
  var dom = _ref.dom,
      img = _ref.img,
      ratio = _ref.ratio,
      origin = _ref.origin;

  img.onload = function () {
    // use a background image on the image container
    if (img.tagName === "IMG") {
      dom.style.backgroundImage = "url(".concat(img.src, ")");
    }

    var naturalRatio = this.naturalWidth / this.naturalHeight; // crop-x: crop over x axis
    // crop-y: crop over y axis

    var cropClass = naturalRatio < imageRatios[ratio] ? classes.mediaCropX : classes.mediaCropY;
    dom.classList.add(cropClass);
    var originClass = origin === "start" ? classes.mediaOriginStart : origin === "end" ? classes.mediaOriginEnd : classes.mediaOriginCenter;
    dom.classList.add(originClass);
  };
};

var _CardMedia = function _CardMedia(_ref2) {
  var h = _ref2.h,
      a = _ref2.a,
      useEffect = _ref2.useEffect,
      useState = _ref2.useState,
      getRef = _ref2.getRef,
      props = _objectWithoutProperties(_ref2, ["h", "a", "useEffect", "useState", "getRef"]);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var ratio = props.ratio || "landscape";
  useEffect(function () {
    if (!domElement) {
      return;
    }

    var ratio = props.ratio || "landscape";
    var origin = props.origin || "center";
    var img = domElement.querySelector("img") || domElement.querySelector("iframe");
    initImage({
      dom: domElement,
      img: img,
      ratio: ratio,
      origin: origin
    });
  }, [domElement]);

  var componentProps = _extends({}, filterSupportedAttributes(props), getRef(function (dom) {
    return dom && !domElement && setDomElement(dom);
  }), props.testId && {
    "data-test-id": props.testId
  }, {
    key: "card-media",
    className: [classes.media, mediaSizeClass(props.size), ratio === "landscape" ? classes.mediaRatioLandscape : classes.mediaRatioSquare, props.className || props[a.class]].join(" ")
  }, props.events);

  var dispatcher = props.dispatcher;
  var content = [_extends({}, props.content, {
    key: "content"
  }), props.overlay ? dispatcher({
    overlay: props.overlay,
    key: "overlay"
  }) : props.showDimmer && h("div", {
    className: classes.mediaDimmer,
    key: "dimmer"
  })];
  return h(props.element || "div", componentProps, content);
};

var buttonClasses = {
  component: "pe-text-button",
  super: "pe-button",
  row: "pe-button-row",
  // elements      
  content: "pe-button__content",
  label: "pe-button__label",
  textLabel: "pe-button__text-label",
  wash: "pe-button__wash",
  dropdown: "pe-button__dropdown",
  // states      
  border: "pe-button--border",
  contained: "pe-button--contained",
  disabled: "pe-button--disabled",
  dropdownClosed: "pe-button--dropdown-closed",
  dropdownOpen: "pe-button--dropdown-open",
  extraWide: "pe-button--extra-wide",
  hasDropdown: "pe-button--dropdown",
  focus: "pe-button--focus",
  highLabel: "pe-button--high-label",
  inactive: "pe-button--inactive",
  raised: "pe-button--raised",
  selected: "pe-button--selected",
  separatorAtStart: "pe-button--separator-start"
};

var actionLayoutClasses = {
  horizontal: classes.actionsHorizontal,
  vertical: classes.actionsVertical,
  justified: classes.actionsJustified
};

var actionClassForLayout = function actionClassForLayout() {
  var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "horizontal";
  return actionLayoutClasses[layout];
};

var _CardActions = function _CardActions(_ref) {
  var h = _ref.h,
      a = _ref.a,
      props = _objectWithoutProperties(_ref, ["h", "a"]);

  var componentProps = _extends({}, filterSupportedAttributes(props), props.testId && {
    "data-test-id": props.testId
  }, {
    key: "card-actions",
    className: [classes.actions, props.layout !== "vertical" ? buttonClasses.row : null, actionClassForLayout(props.layout), props.border || props.bordered ? classes.actionsBorder : null, props.tight ? classes.actionsTight : null, props.className || props[a.class]].join(" ")
  }, props.events);

  var content = props.content || props.children;
  return h(props.element || "div", componentProps, content);
};

var _CardPrimary = function _CardPrimary(_ref) {
  var h = _ref.h,
      a = _ref.a,
      props = _objectWithoutProperties(_ref, ["h", "a"]);

  var primaryHasMedia = Array.isArray(props.content) ? props.content.reduce(function (total, current) {
    return Object.keys(current)[0] === "media" ? true : total;
  }, false) : props.media || false;

  var componentProps = _extends({}, filterSupportedAttributes(props), props.testId && {
    "data-test-id": props.testId
  }, {
    key: "card-primary",
    className: [classes.primary, props.tight ? classes.primaryTight : null, primaryHasMedia ? classes.primaryHasMedia : null, props.className || props[a.class]].join(" ")
  }, props.events);

  var dispatcher = props.dispatcher;
  var primaryDispatch = {
    title: function title(pAttrs) {
      return pAttrs.attrs // Mithril
      || pAttrs.props // React
      ? pAttrs || pAttrs.props : h("div", {
        className: classes.title,
        key: "title",
        style: pAttrs.style
      }, [pAttrs.title, pAttrs.subtitle ? h("div", {
        className: classes.subtitle,
        key: "subtitle"
      }, pAttrs.subtitle) : null]);
    },
    media: function media(pAttrs) {
      return h("div", {
        className: classes.primaryMedia,
        key: "media",
        style: pAttrs.style
      }, dispatcher({
        media: pAttrs
      }));
    },
    actions: function actions(pAttrs) {
      return dispatcher({
        actions: pAttrs
      });
    }
  };
  var content = Array.isArray(props.content) ? props.content.map(function (block) {
    var key = Object.keys(block)[0];
    var pAttrs = block[key];
    return primaryDispatch[key] ? primaryDispatch[key](pAttrs) : block;
  }) : [props.title ? primaryDispatch.title({
    title: props.title,
    subtitle: props.subtitle,
    key: "title"
  }) : null, props.media ? primaryDispatch.media(props.media) : null, props.actions ? primaryDispatch.actions(props.actions) : null, props.content];
  return h(props.element || "div", componentProps, content);
};

export { _Card, _CardMedia, _CardActions, _CardPrimary };
