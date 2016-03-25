
const show = (ctrl, opts) => {
    const height = ctrl.el.getBoundingClientRect().height;
    return {
        el: ctrl.containerEl,
        showDuration: opts.showDuration || .4,
        showDelay: opts.showDelay || 0,
        beforeShow: () => (ctrl.containerEl.style.transform = 'translate3d(0, ' + height + 'px, 0)'),
        show: () => (ctrl.containerEl.style.transform = 'translate3d(0, ' + 0 + 'px, 0)')
    };
};

const hide = (ctrl, opts) => {
    const height = ctrl.el.getBoundingClientRect().height;
    return {
        el: ctrl.containerEl,
        hideDuration: opts.hideDuration || .4,
        hideDelay: opts.hideDelay || 0,
        hide: () => (ctrl.containerEl.style.transform = 'translate3d(0, ' + height + 'px, 0)'),
        afterHide: () => (ctrl.containerEl.style.transform = 'translate3d(0, ' + 0 + 'px, 0)')
    };
};

export default {
    show,
    hide
};
