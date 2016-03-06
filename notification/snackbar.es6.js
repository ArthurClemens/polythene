import multiple from 'polythene/common/multiple';
import instance from 'polythene/notification/notification-instance';
import transitions from 'polythene/notification/theme/snackbar/transitions';
import 'polythene/notification/theme/notification/theme';
import 'polythene/notification/theme/snackbar/theme';

export default multiple({
    instance,
    class: 'pe-notification pe-notification--snackbar',
    defaultId: 'default_snackbar',
    tag: 'div.pe-snackbar__holder',
    noneTag: 'span.pe-snackbar__placeholder',
    bodyShowClass: 'pe-snackbar--open',
    queue: true,
    transitions
});
