import events from 'polythene/common/events';

const isTouch = (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));

window.addEventListener('resize', e => (events.emit('resize', e)));
window.addEventListener('scroll', e => (events.emit('scroll', e)));
window.addEventListener('keydown', e => (events.emit('keydown', e)));

document.querySelector('html').classList.add(isTouch ? 'pe-touch' : 'pe-no-touch');

export default {
    isTouch
};
