
const show = ({ containerEl, el, showDuration, showDelay }) => {
  return {
    el: containerEl,
    showDuration: showDuration || .4,
    showDelay:    showDelay || 0,
    beforeShow:   () => {
      el.style.display = "block";
      const height = el.getBoundingClientRect().height;
      containerEl.style.transform = `translate3d(0, ${height}px, 0)`;
    },
    show:         () => containerEl.style.transform = "translate3d(0, 0px, 0)"
  };
};

const hide = ({ containerEl, el, hideDuration, hideDelay }) => {
  return {
    el: containerEl,
    hideDuration: hideDuration || .4,
    hideDelay:    hideDelay || 0,
    hide:         () => {
      const height = el.getBoundingClientRect().height;
      containerEl.style.transform = `translate3d(0, ${height}px, 0)`;
    },
    // reset to original position to counter the removal of the snackbar instance
    afterHide:    () => {
      // prevent a "bounce back"
      el.style.display = "none";
      containerEl.style.transitionDuration = "0ms";
      containerEl.style.transform = "translate3d(0, 0px, 0)";
    }
  };
};

export default {
  show,
  hide
};
