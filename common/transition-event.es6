
export default () => {
	if(typeof window === "undefined"){
		return;
	}
    const el = document.createElement('fakeelement');
    const animations = {
        'animation': 'animationend',
        'OAnimation': 'oAnimationEnd',
        'MozAnimation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd'
    };
    for (let a in animations) {
        if (el.style[a] !== undefined) {
            return animations[a];
        }
    }
};
