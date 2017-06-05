import m from 'mithril';
import { Button, Checkbox, IconButton } from 'polythene';
import { styler } from 'polythene-core-css';
import style from './speed-test-style';
styler.add('polythene-examples-speed-test', style);

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {
            class: args.class
        }, [
            m('.p-block-header', args.title),
            args.content ? args.content : null
        ]);
    }
};

import iconHeart from 'mmsvg/templarian/msvg/heart';

const clickTime = (ctrl, id) => (m('.click-time', 'Click Time: ' + (ctrl.clickTimes[id] !== undefined ? ctrl.clickTimes[id] + 'ms' : '...')));

const startType = window.PointerEvent ? 'pointerdown' : (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) ? 'touchstart' : 'mousedown';
const endType = window.PointerEvent ? 'pointerup' : (('ontouchend' in window) || window.DocumentTouch && document instanceof DocumentTouch) ? 'touchend' : 'mouseup';

const config = (ctrl, id, el, inited, context) => {
    if (inited) return;
    el.style['touch-action'] = 'none';
    const setStartClick = () => (ctrl.setStartClick(id));
    const setEndClick = () => (ctrl.setEndClick(id));
    el.addEventListener(startType, setStartClick);
    el.addEventListener(endType, setEndClick);
    context.onunload = () => {
        el.removeEventListener(startType, setStartClick);
        el.removeEventListener(endType, setEndClick);
    };
};

const module = {};
module.controller = () => {
    const startTimes = {};
    const clickTimes = {};

    const setStartClick = (id) => {
        startTimes[id] = Date.now();
    };
    const setEndClick = (id) => {
        clickTimes[id] = Date.now() - startTimes[id];
        m.redraw();
    };

    return {
        clickTimes,
        setStartClick,
        setEndClick,
        checkboxChecked: m.prop(false)
    };
};
module.view = (ctrl) => {
    return m('.example-speed-test', [

        m('.p-block.p-block-info',
            m('p', [
                'Using Fastclick (installed in this app).'
            ])
        ),

        m(titleBlock, {
            title: 'Baseline div',
            content: [
                clickTime(ctrl, 'div'),
                m('.baseline', {
                    style: {
                        cursor: 'pointer',
                        'touch-action': 'none',
                        '-ms-touch-action': 'none'
                    },
                    config: (el, inited, context) => (config(ctrl, 'div', el, inited, context))
                }, 'Click')
            ]
        }),

        m(titleBlock, {
            title: 'Button',
            content: [
                clickTime(ctrl, 'button'),
                m('.button-row',
                    m(Button, {
                        config: (el, inited, context) => (config(ctrl, 'button', el, inited, context)),
                        label: 'Click',
                        raised: true
                    })
                )
            ]
        }),

        m(titleBlock, {
            title: 'Icon button',
            content: [
                clickTime(ctrl, 'icon-button'),
                m(IconButton, {
                    icon: {
                        msvg: iconHeart
                    },
                    config: (el, inited, context) => (config(ctrl, 'icon-button', el, inited, context))
                })
            ]
        }),

        m(titleBlock, {
            title: 'Checkbox (' + (ctrl.checkboxChecked() ? 'checked' : 'unchecked') + ')',
            content: [
                clickTime(ctrl, 'checkbox'),
                m('div',
                    m(Checkbox, {
                        config: (el, inited, context) => (config(ctrl, 'checkbox', el, inited, context)),
                        checked: ctrl.checkboxChecked(),
                        getState: (state) => (ctrl.checkboxChecked(state.checked)),
                        label: 'Click'
                    })
                )
            ]
        }),

    ]);
};

export default module;
