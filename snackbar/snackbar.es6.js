import Multiple from 'polythene/common/multiple';
import instance from 'polythene/snackbar/snackbar-instance';

export default Multiple({
    instance,
    defaultId: 'default_snackbar',
    tag: 'div.snackbar-holder',
    noneTag: 'span.snackbar-placeholder',
    bodyShowClass: 'snackbar-open',
    queue: true
});
