import m from "mithril";
import icon from "polythene-icon";
import shadow from "polythene-shadow";
import listTile from "polythene-list-tile";
import { filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";

export const classes = {
  component:           "pe-card",
  content:             "pe-card__content",
  overlay:             "pe-card__overlay",
  overlaySheet:        "pe-card__overlay--sheet",
  overlayContent:      "pe-card__overlay__content",
  mediaDimmer:         "pe-card__media__dimmer",
  mediaCropX:          "pe-card__media--crop-x",
  mediaCropY:          "pe-card__media--crop-y",
  media:               "pe-card__media",
  header:              "pe-card__header",
  headerTitle:         "pe-card__header-title",
  title:               "pe-card__title",
  subtitle:            "pe-card__subtitle",
  text:                "pe-card__text",
  textTight:           "pe-card__text--tight",
  primary:             "pe-card__primary",
  primaryMedia:        "pe-card__primary-media",
  primaryTight:        "pe-card__primary--tight",
  actions:             "pe-card__actions",
  actionsHorizontal:   "pe-card__actions--horizontal",
  actionsVertical:     "pe-card__actions--vertical",
  actionsJustified:    "pe-card__actions--justified",
  actionsBordered:     "pe-card__actions--borders",
  actionsTight:        "pe-card__actions--tight",
  mediaRatioSquare:    "pe-card__media--square",
  mediaRatioLandscape: "pe-card__media--landscape",
  primaryHasMedia:     "pe-card__primary--media",
  mediaSmall:          "pe-card__media--small",
  mediaRegular:        "pe-card__media--regular",
  mediaMedium:         "pe-card__media--medium",
  mediaLarge:          "pe-card__media--large"
};

const imageRatios = {
  landscape: 16 / 9,
  square: 1
};

const createOverlay = (attrs = {}) => {
  const element = attrs.element || "div";
  const content = attrs.content.map(o => {
    const key = Object.keys(o)[0];
    return contentMap[key](o);
  });
  return m("div", {
    class: [
      classes.overlay,
      attrs.sheet ? classes.overlaySheet : null,
    ].join(" ")
  }, [
    m(element, {
      class: [classes.overlayContent, attrs.class].join(" ")
    }, content),
    m("div", {
      class: classes.mediaDimmer
    })
  ]);
};

const createText = o => {
  const attrs = o.text || {};
  const element = attrs.element || "div";
  return m(element, {
    class: [
      classes.text,
      attrs.tight ? classes.textTight : null,
      attrs.class
    ].join(" ")
  }, attrs.content);
};

// media type to class

const mediaTypeClasses = {
  small:   classes.mediaSmall,
  regular: classes.mediaRegular,
  medium:  classes.mediaMedium,
  large:   classes.mediaLarge
};

const mediaClassForType = (mode = "regular") =>
  mediaTypeClasses[mode];

const createMedia = o => {
  const attrs = o.media || {};
  const ratio = attrs.ratio || "landscape";
  const origin = attrs.origin || "center";
  const element = attrs.element || "div";
  const initImage = ({dom}) => {
    let img = dom.querySelector("img");
    if (img) {
      img.onload = function() {
        const w = this.naturalWidth;
        const h = this.naturalHeight;
        const naturalRatio = w / h;
        // crop-x: crop over x axis
        // crop-y: crop over y axis
        const cropClass = (naturalRatio < imageRatios[ratio]) ? classes.mediaCropX : classes.mediaCropY;
        img.className = cropClass;

        const containerWidth = dom.clientWidth;
        const containerHeight = dom.clientHeight;

        if (naturalRatio < imageRatios[ratio]) {
          // orient on y axis
          if (origin === "center") {
            const imageHeight = containerWidth / naturalRatio;
            const diff = containerHeight - imageHeight;
            const offset = diff / 2;
            this.style.marginTop = offset + "px";
          } else if (origin === "start") {
            this.style.top = 0;
            this.style.bottom = "auto";
          } else {
            // end
            this.style.top = "auto";
            this.style.bottom = 0;
          }
        } else {
          // orient on x axis
          if (origin === "center") {
            const imageWidth = containerHeight * naturalRatio;
            const diff = containerWidth - imageWidth;
            const offset = diff / 2;
            this.style.marginLeft = offset + "px";
          } else if (origin === "start") {
            this.style.left = 0;
            this.style.right = "auto";
          } else {
            // end
            this.style.left = "auto";
            this.style.right = 0;
          }
        }
      };
    }
  };

  return m(element, {
    class: [
      classes.media,
      mediaClassForType(attrs.type),
      ratio === "landscape" ? classes.mediaRatioLandscape : classes.mediaRatioSquare,
      attrs.class
    ].join(" "),
    oncreate: initImage
  }, [
    attrs.content,
    attrs.overlay ? createOverlay(attrs.overlay) : m("div", {class: classes.mediaDimmer})
  ]);
};

const createHeader = o => {
  const attrs = o.header || {};
  return m(listTile, Object.assign(
    {},
    attrs,
    {
      class: [classes.header, attrs.class].join(" ")
    },
    attrs.icon
      ? { front: m(icon, attrs.icon) }
      : null
  ));
};

const actionLayoutClasses = {
  horizontal: classes.actionsHorizontal,
  vertical:   classes.actionsVertical,
  justified:  classes.actionsJustified
};

const actionClassForLayout = (layout = "horizontal") => (actionLayoutClasses[layout]);

const createActions = o => {
  const attrs = o.actions || {};
  const element = attrs.element || "div";
  return m(element, {
    class: [
      classes.actions,
      actionClassForLayout(attrs.layout),
      attrs.bordered ? classes.actionsBordered : null,
      attrs.tight ? classes.actionsTight : null,
      attrs.class
    ].join(" ")
  }, attrs.content);
};

const createPrimary = o => {
  let content, key, partOpts;
  const attrs = o.primary || {};
  const element = attrs.element || "div";
  let primaryHasMedia = false;

  const lookup = {
    title: pops =>
      pops.attrs
        ? pops
        : m("div", { class: classes.title },
          [
            pops.title ? pops.title : null,
            pops.subtitle
              ? m("div", { class: classes.subtitle }, pops.subtitle)
              : null
          ]
        ),
    media: pops => {
      primaryHasMedia = true;
      return m("div", {
        class: classes.primaryMedia
      }, createMedia({
        media: pops
      }));
    },
    actions: pops =>
      createActions({
        actions: pops
      })
  };

  if (Array.isArray(attrs.content)) {
    content = attrs.content.map(part => {
      key = Object.keys(part)[0];
      partOpts = part[key];
      if (lookup[key]) {
        return lookup[key](partOpts);
      } else {
        return part;
      }
    });
  } else {
    // shorthand for simple primary titles
    content = [
      attrs.title
        ? lookup.title({
          title: attrs.title,
          subtitle: attrs.subtitle
        })
        : null,
      attrs.media ? lookup.media(attrs.media) : null,
      attrs.actions ? lookup.actions(attrs.actions) : null,
      attrs.content
    ];
  }
  return m(element, {
    class: [
      classes.primary,
      attrs.tight ? classes.primaryTight : null,
      primaryHasMedia ? classes.primaryHasMedia : null
    ].join(" ")
  }, content);
};

const contentMap = {
  text:    createText,
  media:   createMedia,
  header:  createHeader,
  primary: createPrimary,
  actions: createActions
};

const view = ({attrs}) => {
  const element = attrs.element || attrs.url ? "a" : "div";
  const props = Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      class: [
        classes.component,
        attrs.class
      ].join(" ")
    },
    attrs.url ? attrs.url : null,
    attrs.events ? attrs.events : null
  );

  const contents = Array.isArray(attrs.content)
    ? attrs.content.map(attr => {
      const key = Object.keys(attr)[0];
      if (!contentMap[key]) {
        throw(`Content type "${key}" does not exist`);
      }
      return contentMap[key](attr);
    })
    : attrs.content;

  const content = [
    m(shadow, {
      z: attrs.z !== undefined ? attrs.z : 1,
      animated: true
    }),
    m("div", {
      class: classes.content
    }, contents)
  ];
  return m(element, props, [attrs.before, content, attrs.after]);
};

export default {
  theme: customTheme, // accepts (selector, vars)
  view
};

