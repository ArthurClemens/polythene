import { isRTL } from "polythene-core";

const show = ({ el, showDuration, showDelay }) => {
  const rtl = isRTL({ element: el });
  const side = rtl ? "marginRight" : "marginLeft";

  return {
    el,
    showDuration,
    showDelay:    showDelay || 0,
    beforeShow:   () => {
      const rect = el.getBoundingClientRect();
      const width = rect.width;
      el.style[side] = `-${width}px`;
    },
    show:         () => {
      el.style[side] = 0;
    }
  };
};

const hide = ({ el, hideDuration, hideDelay }) => {
  const rtl = isRTL({ element: el });
  const side = rtl ? "marginRight" : "marginLeft";

  return {
    el,
    hideDuration,
    hideDelay:    hideDelay || 0,
    hide:         () => {
      const rect = el.getBoundingClientRect();
      const width = rect.width;
      el.style[side] = `-${width}px`;
    },
  };
};

export default {
  show,
  hide,
  name: "push-from-left"
};
