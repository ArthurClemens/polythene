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

  const createOverlay = ({
    dispatcher,
    attrs,
    h,
    k
  }) => {
    const element = attrs.element || "div";
    const content = attrs.content.map(dispatcher);
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

  const createAny = ({
    attrs,
    h,
    k
  }) => {
    const element = attrs.element || "div";
    return h(element, Object.assign({}, polytheneCore.filterSupportedAttributes(attrs), {
      key: attrs.key || "card-any",
      className: [classes.any, attrs.tight ? classes.textTight : null, attrs.className || attrs[k.class]].join(" ")
    }), attrs.content);
  };

  const createText = ({
    attrs,
    h,
    k
  }) => {
    const element = attrs.element || "div";
    return h(element, Object.assign({}, polytheneCore.filterSupportedAttributes(attrs), {
      key: attrs.key || "card-text",
      className: [classes.text, attrs.tight ? classes.textTight : null, attrs.className || attrs[k.class]].join(" ")
    }, attrs.events), attrs.content);
  };

  const createHeader = ({
    attrs,
    h,
    k,
    Icon,
    ListTile
  }) => {
    return h(ListTile, Object.assign({}, attrs, {
      key: attrs.key || "card-header",
      className: [classes.header, attrs.className || attrs[k.class]].join(" ")
    }, attrs.icon ? {
      front: h(Icon, attrs.icon)
    } : null));
  };

  const getElement = vnode => vnode.attrs.element || vnode.attrs.url ? "a" : "div";
  const onMount = ({
    attrs
  }) => {
    if (attrs.z !== undefined) {
      polytheneCore.deprecation("Card", {
        option: "z",
        newOption: "shadowDepth"
      });
    }
  };
  const createProps = (vnode, {
    keys: k
  }) => {
    const attrs = vnode.attrs;
    return Object.assign({}, polytheneCore.filterSupportedAttributes(attrs), {
      className: [classes.component, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
    }, attrs.url, attrs.events);
  };
  const createContent = (vnode, {
    renderer: h,
    keys: k,
    CardActions,
    CardMedia,
    CardPrimary,
    Icon,
    Shadow,
    ListTile
  }) => {
    const dispatcher = block => {
      const key = Object.keys(block)[0];
      const attrs = Object.assign({}, block[key], {
        dispatcher,
        key
      });

      switch (key) {
        case "actions":
          return h(CardActions, attrs);

        case "header":
          return createHeader({
            attrs,
            h,
            k,
            Icon,
            ListTile
          });

        case "media":
          return h(CardMedia, attrs);

        case "overlay":
          return createOverlay({
            dispatcher,
            attrs,
            h,
            k
          });

        case "primary":
          return h(CardPrimary, attrs);

        case "text":
          return createText({
            attrs,
            h,
            k
          });

        case "any":
          return createAny({
            attrs,
            h,
            k
          });

        default:
          throw `Content type "${key}" does not exist`;
      }
    };

    const attrs = vnode.attrs;
    const contents = Array.isArray(attrs.content) ? attrs.content.map(dispatcher) : attrs.content;
    const shadowDepth = attrs.shadowDepth !== undefined ? attrs.shadowDepth : attrs.z; // deprecated

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
    highLabel: "pe-button--high-label",
    inactive: "pe-button--inactive",
    raised: "pe-button--raised",
    selected: "pe-button--selected",
    separatorAtStart: "pe-button--separator-start"
  };

  const actionLayoutClasses = {
    horizontal: classes.actionsHorizontal,
    vertical: classes.actionsVertical,
    justified: classes.actionsJustified
  };
  const onMount$1 = ({
    attrs
  }) => {
    if (attrs.bordered !== undefined) {
      polytheneCore.deprecation("Card", {
        option: "bordered",
        newOption: "border"
      });
    }
  };

  const actionClassForLayout = (layout = "horizontal") => actionLayoutClasses[layout];

  const createProps$1 = (vnode, {
    keys: k
  }) => {
    const attrs = vnode.attrs;
    return Object.assign({}, polytheneCore.filterSupportedAttributes(attrs), {
      key: "card-actions",
      className: [classes.actions, attrs.layout !== "vertical" ? buttonClasses.row : null, actionClassForLayout(attrs.layout), attrs.border || attrs.bordered ? classes.actionsBorder : null, attrs.tight ? classes.actionsTight : null, attrs.className || attrs[k.class]].join(" ")
    }, attrs.events);
  };
  const createContent$1 = vnode => vnode.attrs.content || vnode.children;

  var cardActions = /*#__PURE__*/Object.freeze({
    onMount: onMount$1,
    createProps: createProps$1,
    createContent: createContent$1
  });

  const imageRatios = {
    landscape: 16 / 9,
    square: 1
  };
  const mediaSizeClasses = {
    small: classes.mediaSmall,
    regular: classes.mediaRegular,
    medium: classes.mediaMedium,
    large: classes.mediaLarge
  };

  const mediaSizeClass = (size = "regular") => mediaSizeClasses[size];

  const initImage = ({
    dom,
    img,
    ratio,
    origin
  }) => {
    img.onload = function () {
      // use a background image on the image container
      if (img.tagName === "IMG") {
        dom.style.backgroundImage = `url(${img.src})`;
      }

      const naturalRatio = this.naturalWidth / this.naturalHeight; // crop-x: crop over x axis
      // crop-y: crop over y axis

      const cropClass = naturalRatio < imageRatios[ratio] ? classes.mediaCropX : classes.mediaCropY;
      dom.classList.add(cropClass);
      const originClass = origin === "start" ? classes.mediaOriginStart : origin === "end" ? classes.mediaOriginEnd : classes.mediaOriginCenter;
      dom.classList.add(originClass);
    };
  };

  const onMount$2 = vnode => {
    if (!vnode.dom) {
      return;
    }

    const attrs = vnode.attrs;
    const ratio = attrs.ratio || "landscape";
    const origin = attrs.origin || "center";
    const dom = vnode.dom;
    const img = dom.querySelector("img") || dom.querySelector("iframe");
    initImage({
      dom,
      img,
      ratio,
      origin
    });
  };
  const createProps$2 = (vnode, {
    keys: k
  }) => {
    const attrs = vnode.attrs;
    const ratio = attrs.ratio || "landscape";
    return Object.assign({}, polytheneCore.filterSupportedAttributes(attrs), {
      key: "card-media",
      className: [classes.media, mediaSizeClass(attrs.size), ratio === "landscape" ? classes.mediaRatioLandscape : classes.mediaRatioSquare, attrs.className || attrs[k.class]].join(" ")
    }, attrs.events);
  };
  const createContent$2 = (vnode, {
    renderer: h
  }) => {
    const attrs = vnode.attrs;
    const dispatcher = attrs.dispatcher;
    return [Object.assign({}, attrs.content, {
      key: "content"
    }), attrs.overlay ? dispatcher({
      overlay: attrs.overlay,
      key: "overlay"
    }) : attrs.showDimmer && h("div", {
      className: classes.mediaDimmer,
      key: "dimmer"
    })];
  };

  var cardMedia = /*#__PURE__*/Object.freeze({
    onMount: onMount$2,
    createProps: createProps$2,
    createContent: createContent$2
  });

  const createProps$3 = (vnode, {
    keys: k
  }) => {
    const attrs = vnode.attrs;
    const primaryHasMedia = Array.isArray(attrs.content) ? attrs.content.reduce((total, current) => Object.keys(current)[0] === "media" ? true : total, false) : attrs.media || false;
    return Object.assign({}, polytheneCore.filterSupportedAttributes(attrs), {
      key: "card-primary",
      className: [classes.primary, attrs.tight ? classes.primaryTight : null, primaryHasMedia ? classes.primaryHasMedia : null, attrs.className || attrs[k.class]].join(" ")
    }, attrs.events);
  };
  const createContent$3 = (vnode, {
    renderer: h
  }) => {
    const attrs = vnode.attrs;
    const dispatcher = attrs.dispatcher;
    const primaryDispatch = {
      title: pAttrs => pAttrs.attrs || pAttrs.props ? pAttrs || pAttrs.props : h("div", {
        className: classes.title,
        key: "title",
        style: pAttrs.style
      }, [pAttrs.title, pAttrs.subtitle ? h("div", {
        className: classes.subtitle,
        key: "subtitle"
      }, pAttrs.subtitle) : null]),
      media: pAttrs => {
        return h("div", {
          className: classes.primaryMedia,
          key: "media",
          style: pAttrs.style
        }, dispatcher({
          media: pAttrs
        }));
      },
      actions: pAttrs => dispatcher({
        actions: pAttrs
      })
    };
    return Array.isArray(attrs.content) ? attrs.content.map(block => {
      const key = Object.keys(block)[0];
      const pAttrs = block[key];
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
