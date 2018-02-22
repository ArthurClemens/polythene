const ANIMATION_DURATION = .220;

const show = ({ contentEl, showDuration, showDelay }) => ({
  el: contentEl,
  showDuration: showDuration || ANIMATION_DURATION,
  showDelay:    showDelay || 0,
  beforeShow:   () => contentEl.style.opacity = 0,
  show:         () => contentEl.style.opacity = 1,
});

const hide = ({ contentEl, hideDuration, hideDelay }) => ({
  el: contentEl,
  hideDuration: hideDuration || ANIMATION_DURATION,
  hideDelay:    hideDelay || 0,
  hide:         () => contentEl.style.opacity = 0
});

export default {
  show,
  hide
};
