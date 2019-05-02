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

export const _CardMedia = ({ h, a, useEffect, useState, getRef, ...props }) => {
  const [domElement, setDomElement] = useState();
  const ratio = props.ratio || "landscape";

  useEffect(
    () => {
      if (!domElement) {
        return;
      }
      const ratio = props.ratio || "landscape";
      const origin = props.origin || "center";
      const img = domElement.querySelector("img") || domElement.querySelector("iframe");
      initImage({ dom: domElement, img, ratio, origin });
    },
    [domElement]
  );

  const componentProps = Object.assign({},
    filterSupportedAttributes(props),
    getRef(dom => dom && !domElement && setDomElement(dom)),
    props.testId && { "data-test-id": props.testId },
    {
      key: "card-media",
      className: [
        classes.media,
        mediaSizeClass(props.size),
        ratio === "landscape" ? classes.mediaRatioLandscape : classes.mediaRatioSquare,
        props.className || props[a.class]
      ].join(" ")
    },
    props.events
  );

  const dispatcher = props.dispatcher;
  const content = [
    Object.assign({}, props.content, { key: "content" }),
    props.overlay
      ? dispatcher({ overlay: props.overlay, key: "overlay" })
      : props.showDimmer && h("div",
        {
          className: classes.mediaDimmer,
          key: "dimmer"
        }
      )
  ];

  return h(props.element || "div", componentProps, content);
};
