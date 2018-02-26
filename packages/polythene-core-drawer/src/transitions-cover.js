import { isRTL } from "polythene-core";

const SHADOW_WIDTH = 10;

const show = ({ contentEl, showDuration, showDelay }) => {
  const rtl = isRTL({ element: contentEl });
  const side = rtl ? "right" : "left";

  return {
    el: contentEl,
    showDuration,
    showDelay:          showDelay || 0,
    showTimingFunction: "ease-out",
    beforeShow:         () => {
      const rect = contentEl.getBoundingClientRect();
      const width = rect.width + SHADOW_WIDTH;
      contentEl.style.top = 0;
      contentEl.style[side] = `-${width}px`;
    },
    show:                () => {
      contentEl.style[side] = 0;
    }
  };
};

const hide = ({ contentEl, hideDuration, hideDelay }) => {
  const rtl = isRTL({ element: contentEl });
  const side = rtl ? "right" : "left";

  return {
    el: contentEl,
    hideDuration,
    hideDelay:          hideDelay || 0,
    hideTimingFunction: "ease-out",
    hide:               () => {
      const rect = contentEl.getBoundingClientRect();
      const width = rect.width + SHADOW_WIDTH;
      contentEl.style[side] = `-${width}px`;
    },
  };
};

export default {
  show,
  hide,
  name: "over-from-left"
};
