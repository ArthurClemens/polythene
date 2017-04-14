
const show = (el, opts) => {
  const height = el.getBoundingClientRect().height;
  return {
    el,
    showDuration: opts.showDuration || .4,
    showDelay:    opts.showDelay || 0,
    beforeShow:   () => el.style.transform = `translate3d(0, ${height}px, 0)`,
    show:         () => el.style.transform = `translate3d(0, ${0}px, 0)`
  };
};

const hide = (el, opts) => {
  const height = el.getBoundingClientRect().height;
  return {
    el,
    hideDuration: opts.hideDuration || .4,
    hideDelay:    opts.hideDelay || 0,
    hide:         () => el.style.transform = `translate3d(0, ${height}px, 0)`,
    afterHide:    () => el.style.transform = `translate3d(0, ${0}px, 0)`
  };
};

export default {
  show,
  hide
};
