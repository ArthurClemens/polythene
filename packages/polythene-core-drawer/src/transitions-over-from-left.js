
const SHADOW_WIDTH = 10;

const show = ({ contentEl, showDuration, showDelay }) => ({
  el: contentEl,
  showDuration,
  showDelay:    showDelay || 0,
  beforeShow:   () => {
    const rect = contentEl.getBoundingClientRect();
    const width = rect.width + SHADOW_WIDTH;
    contentEl.style.top = 0;
    contentEl.style.left = `-${width}px`;
  },
  show:         () => {
    contentEl.style.left = 0;
  }
});

const hide = ({ contentEl, hideDuration, hideDelay }) => ({
  el: contentEl,
  hideDuration,
  hideDelay:    hideDelay || 0,
  hide:         () => {
    const rect = contentEl.getBoundingClientRect();
    const width = rect.width + SHADOW_WIDTH;
    contentEl.style.left = `-${width}px`;
  },
});

export default {
  show,
  hide,
  name: "over-from-left"
};
