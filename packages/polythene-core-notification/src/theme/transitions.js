const ANIMATION_DURATION = .5;

const show = (el, attrs) => ({
  el,
  showDuration: attrs.showDuration || ANIMATION_DURATION,
  showDelay:    attrs.showDelay || 0,
  beforeShow:   () => el.style.opacity = 0,
  show:         () => el.style.opacity = 1,
});

const hide = (el, attrs) => ({
  el,
  hideDuration: attrs.hideDuration || ANIMATION_DURATION,
  hideDelay:    attrs.hideDelay || 0,
  hide:         () => el.style.opacity = 0,
});

export default {
  show,
  hide
};
