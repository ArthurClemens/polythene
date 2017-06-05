
const show = (ctrl, opts) => {
    return {
        el: ctrl.containerEl,
        showDuration: opts.showDuration || .5,
        showDelay: opts.showDelay || 0,
        beforeShow: () => (ctrl.containerEl.style.opacity = 0),
        show: () => (ctrl.containerEl.style.opacity = 1),
    };
};

const hide = (ctrl, opts) => {
    return {
        el: ctrl.containerEl,
        hideDuration: opts.hideDuration || .5,
        hideDelay: opts.hideDelay || 0,
        hide: () => (ctrl.containerEl.style.opacity = 0)
    };
};

export default {
    show,
    hide
};
