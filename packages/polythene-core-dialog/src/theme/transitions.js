const ANIMATION_DURATION = .220;

const show = (el, opts) => ({
  el,
  showDuration: opts.showDuration || ANIMATION_DURATION,
  showDelay:    opts.showDelay || 0,
  beforeShow:   () => el.style.opacity = 0,
  show:         () => el.style.opacity = 1,
});

const hide = (el, opts) => ({
  el,
  hideDuration: opts.hideDuration || ANIMATION_DURATION,
  hideDelay:    opts.hideDelay || 0,
  hide:         () => el.style.opacity = 0
});

export default {
  show,
  hide
};
