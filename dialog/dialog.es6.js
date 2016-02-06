import Multiple from 'polythene/common/multiple';
import instance from 'polythene/dialog/dialog-instance';

export default Multiple({
    instance,
    defaultId: 'default_dialog',
    tag: '.pe-dialog__holder',
    noneTag: 'span.pe-dialog__placeholder',
    bodyShowClass: 'pe-dialog--open'
});
