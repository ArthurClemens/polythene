
const show = ({ el, showDuration, showDelay }) => ({
  el,
  showDuration,
  showDelay:    showDelay || 0,
  beforeShow:   () => {
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    el.style.marginLeft = `-${width}px`;
    el.style.opacity = 0;
  },
  show:         () => {
    el.style.marginLeft = 0;
    el.style.opacity = 1;
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
    el.style.opacity = 0;
  }
});

export default {
  show,
  hide
};
