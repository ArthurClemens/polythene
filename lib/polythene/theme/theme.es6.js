'use strict';

require('polythene/layout/layout');
require('polythene/font-roboto/font-roboto');
require('polythene/theme/theme.css!');

const isTouchDevice = () => {
    return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
};
document.querySelector('html').classList.add(isTouchDevice() ? 'touch' : 'no-touch');
