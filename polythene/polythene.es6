let isTouch = false;
if(typeof window !== "undefined") {
	isTouch = (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
	document.querySelector('html').classList.add(isTouch ? 'pe-touch' : 'pe-no-touch');
}
export default {
    isTouch
};
