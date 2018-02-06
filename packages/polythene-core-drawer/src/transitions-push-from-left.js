
const show = ({ el, showDuration, showDelay }) => ({
  el,
  showDuration,
  showDelay:    showDelay || 0,
  beforeShow:   () => {
    const rect = el.getBoundingClientRect();
    const width = rect.width;
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
    const width = rect.width;
    el.style.marginLeft = `-${width}px`;
  },
});

export default {
  show,
  hide
};
