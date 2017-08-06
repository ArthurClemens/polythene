import { filterSupportedAttributes } from "polythene-core";
import classes from "./classes";

const imageRatios = {
  landscape: 16 / 9,
  square: 1
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
    const naturalRatio = this.naturalWidth / this.naturalHeight;
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
};

export const onMount = vnode => {
  if (!vnode.dom) {
    return;
  }
  const attrs = vnode.attrs;
  const ratio = attrs.ratio || "landscape";
  const origin = attrs.origin || "center";
  const dom = vnode.dom;
  const img = dom.querySelector("img");
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
      : h("div",
        {
          className: classes.mediaDimmer,
          key: "dimmer"
        }
      )
  ];
};

