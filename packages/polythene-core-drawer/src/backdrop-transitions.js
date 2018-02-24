const SHOW_DELAY = .110; // add a little time so to start after the sliding
const ANIMATION_DURATION = .320; // longer than slide transition

const show = ({ el, showDuration, showDelay }) => ({
  el,
  showDuration: showDuration || ANIMATION_DURATION,
  showDelay:    showDelay || SHOW_DELAY,
  beforeShow:   () => el.style.opacity = 0,
  show:         () => el.style.opacity = 1,
});

const hide = ({ el, hideDuration, hideDelay }) => ({
  el,
  hideDuration: hideDuration || ANIMATION_DURATION,
  hideDelay:    hideDelay || 0,
  hide:         () => el.style.opacity = 0
});

export default {
  show,
  hide
};
