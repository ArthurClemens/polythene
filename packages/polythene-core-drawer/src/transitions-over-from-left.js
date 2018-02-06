
const SHADOW_WIDTH = 10;

const show = ({ el, showDuration, showDelay }) => ({
  el,
  showDuration,
  showDelay:    showDelay || 0,
  beforeShow:   () => {
    const rect = el.getBoundingClientRect();
    const width = rect.width + SHADOW_WIDTH;
    el.style.top = 0;
    el.style.left = `-${width}px`;
  },
  show:         () => {
    el.style.left = 0;
  }
});

const hide = ({ el, hideDuration, hideDelay }) => ({
  el,
  hideDuration,
  hideDelay:    hideDelay || 0,
  hide:         () => {
    const rect = el.getBoundingClientRect();
    const width = rect.width + SHADOW_WIDTH;
    el.style.left = `-${width}px`;
  },
});

export default {
  show,
  hide
};
