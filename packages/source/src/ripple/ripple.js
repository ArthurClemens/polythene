import m from 'mithril';
import p from '../polythene/polythene';
import whichTransitionEvent from '../common/transition-event';
import './theme';

const transitionEvent = whichTransitionEvent();
const DEFAULT_START_OPACITY = 0.2;
const OPACITY_DECAY_VELOCITY = 0.35;

const CSS_CLASSES = {
    ripple: 'pe-ripple',
    waves: 'pe-ripple__waves',
    mask: 'pe-ripple__mask',
    constrained: 'pe-ripple--constrained',
    animated: 'pe-ripple__waves--animated'
};

const makeRipple = (e, ctrl, opts = {}) => {
    const el = ctrl.ripple();
    const wavesEl = ctrl.waves();
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const waveRadius = Math.sqrt(w * w + h * h);
    const rect = el.getBoundingClientRect();
    const x = (p.isTouch && e.touches) ? e.touches[0].pageX : e.clientX;
    const y = (p.isTouch && e.touches) ? e.touches[0].pageY : e.clientY;
    const mx = (opts.center) ? (rect.left + rect.width / 2) : x;
    const my = (opts.center) ? (rect.top + rect.height / 2) : y;
    const rx = mx - rect.left - waveRadius / 2;
    const ry = my - rect.top - waveRadius / 2;
    const initialOpacity = (opts.initialOpacity !== undefined) ? opts.initialOpacity : DEFAULT_START_OPACITY;
    const opacityDecayVelocity = (opts.opacityDecayVelocity !== undefined) ? opts.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
    const duration = 1 / opacityDecayVelocity * initialOpacity;
    const color = window.getComputedStyle(el).color;
    const onEnd = function(evt) {
        wavesEl.classList.remove(CSS_CLASSES.animated);
        wavesEl.removeEventListener(transitionEvent, onEnd, false);
        if (opts.end) {
            opts.end(evt);
        }
    };

    wavesEl.classList.remove(CSS_CLASSES.animated);
    const style = wavesEl.style;
    style.width = style.height = waveRadius + 'px';
    style.top = ry + 'px';
    style.left = rx + 'px';
    style['animation-duration'] =
        style['-webkit-animation-duration'] =
        style['-moz-animation-duration'] =
        style['-o-animation-duration'] = duration + 's';
    style.backgroundColor = color;
    style.opacity = initialOpacity;
    wavesEl.addEventListener(transitionEvent, onEnd, false);

    if (opts.start) {
        opts.start(e);
    }
    wavesEl.classList.add(CSS_CLASSES.animated);
};

const createView = (ctrl, opts = {}) => {
    if (opts.disabled) {
        return m('');
    }
    const initRipple = (el, inited, context) => {
        if (inited) {
            return;
        }
        ctrl.ripple(el);
        const parent = el.parentElement;
        if (!opts.inactive) {
            const onClick = (e) => {
                makeRipple(e, ctrl, opts);
            };
            const endType = p.isTouch ? 'click' : 'mouseup';
            parent.addEventListener(endType, onClick, false);
            context.onunload = () => {
                parent.removeEventListener(endType, onClick, false);
            };
        }
    };
    const initWaves = (waves, inited) => {
        if (inited) {
            return;
        }
        ctrl.waves(waves);

    };
    const tag = opts.tag || 'div';
    const props = {
        class: [
            CSS_CLASSES.ripple,
            (opts.constrained !== false ? CSS_CLASSES.constrained : null),
            opts.class
        ].join(' '),
        id: opts.id || '',
        config: initRipple
    };
    const content = m('div', {
        class: CSS_CLASSES.mask
    }, m('div',
        {
            class: CSS_CLASSES.waves,
            config: initWaves
        })
    );
    return m(tag, props, content);
};

const component = {
    controller: () => {
        return {
            ripple: m.prop(),
            waves: m.prop(),
            delegate: m.prop()
        };
    },
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
