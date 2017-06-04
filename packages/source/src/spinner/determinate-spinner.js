/*
Derived from https://github.com/PolymerElements/paper-spinner

@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import m from 'mithril';
import spinner from './spinner';
import './theme/determinate/theme';
import themeConfig from './theme/determinate/config';
import easing from '../common/easing';

const CSS_CLASSES = {
    block: 'pe-spinner-determinate',
    animation: 'pe-spinner-determinate__animation',
    circle: 'pe-spinner-determinate__circle',
    circleRight: 'pe-spinner-determinate__circle--right',
    circleLeft: 'pe-spinner-determinate__circle--left'
};

const sizeFromType = (type = 'regular') => (themeConfig['size_' + type]);

const percentageValue = (min, max, percentage) => (min + ((max - min) * percentage));

const rotateCircle = (el, min, max, percentage) => {
    const style = el.style;
    style['transform'] =
        style['-webkit-transform'] =
        style['-moz-transform'] =
        style['-ms-transform'] =
        style['-o-transform'] = 'rotate(' + percentageValue(min, max, percentage) + 'deg)';
};

const animate = (ctrlEl, size, percentage) => {
    const animationEl = ctrlEl.querySelector('.' + CSS_CLASSES.animation);
    const animationElStyle = animationEl.style;

    if (percentage < 0.5) {
        animationElStyle.clip = 'rect(0px, ' + size + 'px, ' + size + 'px, ' + size / 2 + 'px)';
    } else {
        animationElStyle.clip = 'rect(auto, auto, auto, auto)';
    }

    const leftCircle = ctrlEl.querySelector('.' + CSS_CLASSES.circleLeft);
    const rightCircle = ctrlEl.querySelector('.' + CSS_CLASSES.circleRight);
    leftCircle.style.clip = rightCircle.style.clip = 'rect(0px, ' + size / 2 + 'px, ' + size + 'px, ' + '0px)';
    rotateCircle(rightCircle, 0, 180, Math.min(1, percentage * 2));
    rotateCircle(leftCircle, 0, 360, percentage);
};

const handlePercentage = (percentage, ctrl, size, opts = {}) => {
    if (!ctrl.el) {
        return;
    }

    ctrl._previousPercentage = ctrl._previousPercentage || 0;

    if (opts.animated && ctrl._previousPercentage !== percentage) {
        const STEP_DURATION = opts.updateDuration * 1000;
        let start = null;
        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const stepPercentage = 1.0 / STEP_DURATION * progress;
            const newPercentage = ctrl._previousPercentage + stepPercentage * (percentage - ctrl._previousPercentage);
            animate(ctrl.el, size, easing.easeInOutQuad(newPercentage));
            ctrl._previousPercentage = newPercentage;
            if (start && progress < STEP_DURATION) {
                window.requestAnimationFrame(step);
            } else {
                start = null;
            }
        };
        window.requestAnimationFrame(step);
    } else {
        animate(ctrl.el, size, percentage);
        ctrl._previousPercentage = percentage;
    }
};

const component = {
    view: (ctrl, opts = {}) => {
        const size = sizeFromType(opts.type);
        opts.content = m('div',
            {
                class: CSS_CLASSES.animation
            }, [
                m('div', {
                    class: [CSS_CLASSES.circle, CSS_CLASSES.circleLeft].join(' ')
                }),
                m('div', {
                    class: [CSS_CLASSES.circle, CSS_CLASSES.circleRight].join(' ')
                })
            ]
        );
        opts.class = [
            CSS_CLASSES.block,
            opts.class
        ].join(' ');
        opts.getPercentage = (percentage, ctrl) => (handlePercentage(percentage, ctrl, size, opts));
        return m(spinner, opts);
    }
};

export default component;
