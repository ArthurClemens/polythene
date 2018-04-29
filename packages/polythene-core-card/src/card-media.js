import { filterSupportedAttributes } from "polythene-core";
import classes from "polythene-css-classes/card";

const imageRatios = {
  landscape: 16 / 9,
  square:    1
};

const mediaSizeClasses = {
  small:   classes.mediaSmall,
  regular: classes.mediaRegular,
  medium:  classes.mediaMedium,
  large:   classes.mediaLarge
};

const mediaSizeClass = (size = "regular") => mediaSizeClasses[size];

const initImage = ({ dom, img, ratio, origin }) => {
  img.onload = function() {
    // use a background image on the image container
    if (img.tagName === "IMG") {
      dom.style.backgroundImage = `url(${img.src})`;
    }
    const naturalRatio = this.naturalWidth / this.naturalHeight;
    // crop-x: crop over x axis
    // crop-y: crop over y axis
    const cropClass = naturalRatio < imageRatios[ratio]
      ? classes.mediaCropX
      : classes.mediaCropY;
    dom.classList.add(cropClass);
    const originClass = origin === "start"
      ? classes.mediaOriginStart
      : origin === "end"
        ? classes.mediaOriginEnd
        : classes.mediaOriginCenter;
    dom.classList.add(originClass);
  };
};

export const onMount = vnode => {
  if (!vnode.dom) {
    return;
  }
  const attrs = vnode.attrs;
  const ratio = attrs.ratio || "landscape";
  const origin = attrs.origin || "center";
  const dom = vnode.dom;
  const img = dom.querySelector("img") || dom.querySelector("iframe");
  initImage({ dom, img, ratio, origin });
};

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  const ratio = attrs.ratio || "landscape";
  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      key: "card-media",
      className: [
        classes.media,
        mediaSizeClass(attrs.size),
        ratio === "landscape" ? classes.mediaRatioLandscape : classes.mediaRatioSquare,
        attrs.className || attrs[k.class]
      ].join(" ")
    }
  );
};

export const createContent = (vnode, { renderer: h }) => {
  const attrs = vnode.attrs;
  const dispatcher = attrs.dispatcher;
  return [
    Object.assign({}, attrs.content, { key: "content" }),
    attrs.overlay
      ? dispatcher({ overlay: attrs.overlay, key: "overlay" })
      : attrs.showDimmer && h("div",
        {
          className: classes.mediaDimmer,
          key: "dimmer"
        }
      )
  ];
};
