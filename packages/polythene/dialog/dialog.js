import multiple from '../common/multiple';
import instance from './dialog-instance';

export default multiple({
    instance: instance,
    defaultId: 'default_dialog',
    tag: '.pe-dialog__holder',
    noneTag: 'span.pe-dialog__placeholder',
    bodyShowClass: 'pe-dialog--open'
});