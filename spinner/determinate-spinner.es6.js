import m from 'mithril';
import spinner from 'polythene/spinner/spinner';
import 'polythene/spinner/theme/determinate/theme';
import spinnerConfig from 'polythene/spinner/theme/determinate/config';
import easing from 'polythene/common/easing';

const CSS_CLASSES = {
    block: 'pe-spinner--determinate',
    animation: 'pe-spinner__animation',
};

const handlePercentage = (percentage, ctrl) => {
    if (!ctrl.el) {
        return;
    }
    const p1 = easing.easeOutQuad(percentage);
    const animationEl = ctrl.el.querySelector('.' + CSS_CLASSES.animation);
    const animationElStyle = animationEl.style;

    const rotateMin = 0;
    const rotateMax = 360 - 85;
    animationElStyle['transform'] =
        animationElStyle['-webkit-transform'] =
        animationElStyle['-moz-transform'] =
        animationElStyle['-ms-transform'] =
        animationElStyle['-o-transform'] = 'rotate(' + (rotateMin + ((rotateMax - rotateMin) * p1)) + 'deg)';

    const circleEl = ctrl.el.querySelector('circle');
    const circleElStyle = circleEl.style;

    const p2 = easing.easeInQuad(percentage);
    const dashMin = 0;
    const dashMax = 3.14;
    circleElStyle['stroke-dashoffset'] = spinnerConfig.size * (dashMax - ((dashMax - dashMin) * p2));
};

const component = {
    view: (ctrl, opts = {}) => {
        opts.content = m('svg', {
            class: CSS_CLASSES.animation,
            viewBox: '0 0 40 40'
        }, m('circle', {
            class: 'path',
            cx: 20,
            cy: 20,
            r: 18,
            fill: 'none'
        }));
        opts.class = [CSS_CLASSES.block, opts.class].join(' ');
        opts.getPercentage = handlePercentage;
        return m.component(spinner, opts);
    }
};

export default component;
