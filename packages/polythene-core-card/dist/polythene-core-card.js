(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core'], factory) :
  (factory((global.polythene = {}),global['polythene-core']));
}(this, (function (exports,polytheneCore) { 'use strict';

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

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var createOverlay = function createOverlay(_ref) {
    var dispatcher = _ref.dispatcher,
        attrs = _ref.attrs,
        h = _ref.h,
        k = _ref.k;

    var element = attrs.element || "div";
    var content = attrs.content.map(dispatcher);
    return h("div", {
      key: attrs.key || "card-overlay",
      style: attrs.style,
      className: [classes.overlay, attrs.sheet ? classes.overlaySheet : null, attrs.tone === "light" ? null : "pe-dark-tone", // default dark tone
      attrs.tone === "light" ? "pe-light-tone" : null].join(" ")
    }, [h(element, {
      key: "content",
      className: [classes.overlayContent, attrs.className || attrs[k.class]].join(" ")
    }, content), h("div", {
      key: "dimmer",
      className: classes.mediaDimmer
    })]);
  };

  var createAny = function createAny(_ref2) {
    var attrs = _ref2.attrs,
        h = _ref2.h,
        k = _ref2.k;

    var element = attrs.element || "div";
    return h(element, _extends({}, polytheneCore.filterSupportedAttributes(attrs), {
      key: attrs.key || "card-any",
      className: [classes.any, attrs.tight ? classes.textTight : null, attrs.className || attrs[k.class]].join(" ")
    }), attrs.content);
  };

  var createText = function createText(_ref3) {
    var attrs = _ref3.attrs,
        h = _ref3.h,
        k = _ref3.k;

    var element = attrs.element || "div";
    return h(element, _extends({}, polytheneCore.filterSupportedAttributes(attrs), {
      key: attrs.key || "card-text",
      className: [classes.text, attrs.tight ? classes.textTight : null, attrs.className || attrs[k.class]].join(" ")
    }, attrs.events), attrs.content);
  };

  var createHeader = function createHeader(_ref4) {
    var attrs = _ref4.attrs,
        h = _ref4.h,
        k = _ref4.k,
        Icon = _ref4.Icon,
        ListTile = _ref4.ListTile;

    return h(ListTile, _extends({}, attrs, {
      key: attrs.key || "card-header",
      className: [classes.header, attrs.className || attrs[k.class]].join(" ")
    }, attrs.icon ? { front: h(Icon, attrs.icon) } : null));
  };

  var getElement = function getElement(vnode) {
    return vnode.attrs.element || vnode.attrs.url ? "a" : "div";
  };

  var onMount = function onMount(_ref5) {
    var attrs = _ref5.attrs;

    if (attrs.z !== undefined) {
      polytheneCore.deprecation("Card", "z", "shadowDepth");
    }
  };

  var createProps = function createProps(vnode, _ref6) {
    var k = _ref6.keys;

    var attrs = vnode.attrs;
    return _extends({}, polytheneCore.filterSupportedAttributes(attrs), {
      className: [classes.component, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
    }, attrs.url, attrs.events);
  };

  var createContent = function createContent(vnode, _ref7) {
    var h = _ref7.renderer,
        k = _ref7.keys,
        CardActions = _ref7.CardActions,
        CardMedia = _ref7.CardMedia,
        CardPrimary = _ref7.CardPrimary,
        Icon = _ref7.Icon,
        Shadow = _ref7.Shadow,
        ListTile = _ref7.ListTile;


    var dispatcher = function dispatcher(block) {
      var key = Object.keys(block)[0];
      var attrs = _extends({}, block[key], {
        dispatcher: dispatcher,
        key: key
      });
      switch (key) {
        case "actions":
          return h(CardActions, attrs);
        case "header":
          return createHeader({ attrs: attrs, h: h, k: k, Icon: Icon, ListTile: ListTile });
        case "media":
          return h(CardMedia, attrs);
        case "overlay":
          return createOverlay({ dispatcher: dispatcher, attrs: attrs, h: h, k: k });
        case "primary":
          return h(CardPrimary, attrs);
        case "text":
          return createText({ attrs: attrs, h: h, k: k });
        case "any":
          return createAny({ attrs: attrs, h: h, k: k });
        default:
          throw "Content type \"" + key + "\" does not exist";
      }
    };

    var attrs = vnode.attrs;
    var contents = Array.isArray(attrs.content) ? attrs.content.map(dispatcher) : attrs.content;
    var shadowDepth = attrs.shadowDepth !== undefined ? attrs.shadowDepth : attrs.z; // deprecated

    return [h(Shadow, {
      shadowDepth: shadowDepth !== undefined ? shadowDepth : 1,
      animated: true,
      key: "shadow"
    }), h("div", {
      className: classes.content,
      key: "content"
    }, contents)];
  };

  var card = /*#__PURE__*/Object.freeze({
    getElement: getElement,
    onMount: onMount,
    createProps: createProps,
    createContent: createContent
  });

  var buttonClasses = {
      component: "pe-text-button",
      super: "pe-button",
      row: "pe-button-row",

      // elements      
      content: "pe-button__content",
      focus: "pe-button__focus",
      label: "pe-button__label",
      wash: "pe-button__wash",
      dropdown: "pe-button__dropdown",

      // states      
      border: "pe-button--border",
      disabled: "pe-button--disabled",
      focused: "pe-button--focus",
      inactive: "pe-button--inactive",
      selected: "pe-button--selected",
      hasDropdown: "pe-button--dropdown",
      highLabel: "pe-button--high-label",
      extraWide: "pe-button--extra-wide",
      separatorAtStart: "pe-button--separator-start",
      dropdownOpen: "pe-button--dropdown-open",
      dropdownClosed: "pe-button--dropdown-closed"
  };

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var actionLayoutClasses = {
    horizontal: classes.actionsHorizontal,
    vertical: classes.actionsVertical,
    justified: classes.actionsJustified
  };

  var onMount$1 = function onMount(_ref) {
    var attrs = _ref.attrs;

    if (attrs.bordered !== undefined) {
      polytheneCore.deprecation("Card", "bordered", "border");
    }
  };

  var actionClassForLayout = function actionClassForLayout() {
    var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "horizontal";
    return actionLayoutClasses[layout];
  };

  var createProps$1 = function createProps(vnode, _ref2) {
    var k = _ref2.keys;

    var attrs = vnode.attrs;
    return _extends$1({}, polytheneCore.filterSupportedAttributes(attrs), {
      key: "card-actions",
      className: [classes.actions, attrs.layout !== "vertical" ? buttonClasses.row : null, actionClassForLayout(attrs.layout), attrs.border || attrs.bordered ? classes.actionsBorder : null, attrs.tight ? classes.actionsTight : null, attrs.className || attrs[k.class]].join(" ")
    }, attrs.events);
  };

  var createContent$1 = function createContent(vnode) {
    return vnode.attrs.content || vnode.children;
  };

  var cardActions = /*#__PURE__*/Object.freeze({
    onMount: onMount$1,
    createProps: createProps$1,
    createContent: createContent$1
  });

  var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        dom.style.backgroundImage = "url(" + img.src + ")";
      }
      var naturalRatio = this.naturalWidth / this.naturalHeight;
      // crop-x: crop over x axis
      // crop-y: crop over y axis
      var cropClass = naturalRatio < imageRatios[ratio] ? classes.mediaCropX : classes.mediaCropY;
      dom.classList.add(cropClass);
      var originClass = origin === "start" ? classes.mediaOriginStart : origin === "end" ? classes.mediaOriginEnd : classes.mediaOriginCenter;
      dom.classList.add(originClass);
    };
  };

  var onMount$2 = function onMount(vnode) {
    if (!vnode.dom) {
      return;
    }
    var attrs = vnode.attrs;
    var ratio = attrs.ratio || "landscape";
    var origin = attrs.origin || "center";
    var dom = vnode.dom;
    var img = dom.querySelector("img") || dom.querySelector("iframe");
    initImage({ dom: dom, img: img, ratio: ratio, origin: origin });
  };

  var createProps$2 = function createProps(vnode, _ref2) {
    var k = _ref2.keys;

    var attrs = vnode.attrs;
    var ratio = attrs.ratio || "landscape";
    return _extends$2({}, polytheneCore.filterSupportedAttributes(attrs), {
      key: "card-media",
      className: [classes.media, mediaSizeClass(attrs.size), ratio === "landscape" ? classes.mediaRatioLandscape : classes.mediaRatioSquare, attrs.className || attrs[k.class]].join(" ")
    }, attrs.events);
  };

  var createContent$2 = function createContent(vnode, _ref3) {
    var h = _ref3.renderer;

    var attrs = vnode.attrs;
    var dispatcher = attrs.dispatcher;
    return [_extends$2({}, attrs.content, { key: "content" }), attrs.overlay ? dispatcher({ overlay: attrs.overlay, key: "overlay" }) : attrs.showDimmer && h("div", {
      className: classes.mediaDimmer,
      key: "dimmer"
    })];
  };

  var cardMedia = /*#__PURE__*/Object.freeze({
    onMount: onMount$2,
    createProps: createProps$2,
    createContent: createContent$2
  });

  var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var createProps$3 = function createProps(vnode, _ref) {
    var k = _ref.keys;

    var attrs = vnode.attrs;
    var primaryHasMedia = Array.isArray(attrs.content) ? attrs.content.reduce(function (total, current) {
      return Object.keys(current)[0] === "media" ? true : total;
    }, false) : attrs.media || false;
    return _extends$3({}, polytheneCore.filterSupportedAttributes(attrs), {
      key: "card-primary",
      className: [classes.primary, attrs.tight ? classes.primaryTight : null, primaryHasMedia ? classes.primaryHasMedia : null, attrs.className || attrs[k.class]].join(" ")
    }, attrs.events);
  };

  var createContent$3 = function createContent(vnode, _ref2) {
    var h = _ref2.renderer;

    var attrs = vnode.attrs;
    var dispatcher = attrs.dispatcher;
    var primaryDispatch = {
      title: function title(pAttrs) {
        return pAttrs.attrs || pAttrs.props ? pAttrs || pAttrs.props : h("div", {
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
        }, dispatcher({ media: pAttrs }));
      },
      actions: function actions(pAttrs) {
        return dispatcher({ actions: pAttrs });
      }
    };

    return Array.isArray(attrs.content) ? attrs.content.map(function (block) {
      var key = Object.keys(block)[0];
      var pAttrs = block[key];
      return primaryDispatch[key] ? primaryDispatch[key](pAttrs) : block;
    }) : [attrs.title ? primaryDispatch.title({
      title: attrs.title,
      subtitle: attrs.subtitle,
      key: "title"
    }) : null, attrs.media ? primaryDispatch.media(attrs.media) : null, attrs.actions ? primaryDispatch.actions(attrs.actions) : null, attrs.content];
  };

  var cardPrimary = /*#__PURE__*/Object.freeze({
    createProps: createProps$3,
    createContent: createContent$3
  });

  exports.coreCard = card;
  exports.coreCardActions = cardActions;
  exports.coreCardMedia = cardMedia;
  exports.coreCardPrimary = cardPrimary;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-card.js.map
