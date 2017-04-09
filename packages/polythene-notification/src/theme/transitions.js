
const show = (el, opts) => ({
  el,
  showDuration: opts.showDuration || .5,
  showDelay:    opts.showDelay || 0,
  beforeShow:   () => el.style.opacity = 0,
  show:         () => el.style.opacity = 1,
});

const hide = (el, opts) => ({
  el,
  hideDuration: opts.hideDuration || .5,
  hideDelay:    opts.hideDelay || 0,
  hide:         () => el.style.opacity = 0,
});

export default {
  show,
  hide
};
