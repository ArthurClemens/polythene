import Multiple from 'polythene/common/multiple';
import instance from 'polythene/dialog/dialog-instance';

export default Multiple({
    instance,
    defaultId: 'default_dialog',
    tag: 'div.dialog-holder',
    noneTag: 'span.dialog-placeholder',
    bodyShowClass: 'dialog-open'
});
