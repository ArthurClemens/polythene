
const show = ({ el, showDuration, showDelay }) => ({
  el,
  showDuration,
  showDelay:    showDelay || 0,
  beforeShow:   () => el.style.opacity = 0,
  show:         () => el.style.opacity = 1,
});

const hide = ({ el, hideDuration, hideDelay }) => ({
  el,
  hideDuration,
  hideDelay:    hideDelay || 0,
  hide:         () => el.style.opacity = 0
});

export default {
  show,
  hide
};
