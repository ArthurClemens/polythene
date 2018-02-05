
const show = ({ el, showDuration, showDelay }) => ({
  el,
  showDuration,
  showDelay:    showDelay || 0,
  beforeShow:   () => {
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    el.style.position = "absolute";
    el.style.top = 0;
    el.style.left = 0;
    el.style.transform = `translate(-${width}px, 0px)`;
    el.style.opacity = 1;
  },
  show:         () => {
    el.style.transform = "translate(0px, 0px)";
    // el.style.opacity = 1;
  }
});

const hide = ({ el, hideDuration, hideDelay }) => ({
  el,
  hideDuration,
  hideDelay:    hideDelay || 0,
  hide:         () => {
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    el.style.transform = `translate(-${width}px, 0px)`;
    
    // el.style.left = `-${width}px`;
    // el.style.opacity = 0;
  },
});

export default {
  show,
  hide
};
