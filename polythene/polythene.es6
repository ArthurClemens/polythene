import isomorphic from 'polythene/common/isomorphic';

let isTouch = false;
if(isomorphic.isClient()) {
	isTouch = (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
	document.querySelector('html').classList.add(isTouch ? 'pe-touch' : 'pe-no-touch');
}
export default {
    isTouch
};
