
const show = ({ containerEl, el, showDuration, showDelay }) => {
  const height = el.getBoundingClientRect().height;
  return {
    el: containerEl,
    showDuration: showDuration || .4,
    showDelay:    showDelay || 0,
    beforeShow:   () => (
      el.style.visibility = "initial",
      containerEl.style.transform = `translate3d(0, ${height}px, 0)`
    ),
    show:         () => containerEl.style.transform = "translate3d(0, 0px, 0)"
  };
};

const hide = ({ containerEl, el, hideDuration, hideDelay }) => {
  const height = el.getBoundingClientRect().height;
  return {
    el: containerEl,
    hideDuration: hideDuration || .4,
    hideDelay:    hideDelay || 0,
    hide:         () => containerEl.style.transform = `translate3d(0, ${height}px, 0)`,
    // reset to original position to counter the removal of the snackbar instance
    afterHide:    () => (
      // prevent a "bounce back"
      containerEl.style.transitionDuration = "0ms",
      // prevent flickering when snackbar instance is not yet removed (in case a next snackbars is shown)
      el.style.visibility = "hidden",
      containerEl.style.transform = "translate3d(0, 0px, 0)"
    )
  };
};

export default {
  show,
  hide
};
