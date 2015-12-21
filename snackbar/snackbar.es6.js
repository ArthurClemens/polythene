import multiple from 'polythene/common/multiple';
import instance from 'polythene/notification/notification-instance';
import transitions from 'polythene-theme/snackbar/snackbar-transitions';
import 'polythene-theme/snackbar/snackbar';

export default multiple({
    instance,
    class: 'snackbar',
    defaultId: 'default_snackbar',
    tag: 'div.snackbar-holder',
    noneTag: 'span.snackbar-placeholder',
    bodyShowClass: 'snackbar-open',
    queue: true,
    transitions
});
