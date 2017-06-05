import multiple from '../common/multiple';
import instance from './notification-instance';
import transitions from './theme/snackbar/transitions';
import './theme/snackbar';

export default multiple({
    instance: instance,
    class: 'pe-notification pe-notification--snackbar',
    defaultId: 'default_snackbar',
    tag: 'div.pe-snackbar__holder',
    noneTag: 'span.pe-snackbar__placeholder',
    bodyShowClass: 'pe-snackbar--open',
    queue: true,
    transitions: transitions
});