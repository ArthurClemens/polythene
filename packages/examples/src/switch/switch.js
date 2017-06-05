import m from 'mithril';
import { Switch } from 'polythene';
import { styler } from 'polythene-core-css';
import style from './switch-style';
styler.add('polythene-examples-switch', style);

import { Icon } from 'polythene';
import bullseyeIcon from '../assets/bullseye';

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {class: args.class || ''}, [
            m('.p-block-header', args.title),
            args.info ? args.info : null,
            args.content
        ]);
    }
};

const module = {};
module.controller = () => {
    return {
        switchState: m.prop(false),
        switchListenerState: m.prop(false)
    };
};
module.view = (ctrl) => {
    return m('.module-switch', [

        m('.p-block.p-block-info', [
            m('p', [
                m('span', 'See also '),
                m('a', {
                    href: '/checkbox',
                    config: m.route
                }, 'Checkbox'),
                m('span', ' and '),
                m('a', {
                    href: '/radio-button',
                    config: m.route
                }, 'Radio button'),
                m('span', '.')
            ]),
            m('p', [
                'On desktop, TAB can be used to give focus, ENTER to select.',
            ])
        ]),

        m(titleBlock, {
            title: 'Default switch',
            content: m('.row', [
                m(Switch)
            ])
        }),

        m(titleBlock, {
            title: 'With label',
            content: [
                m(Switch, {
                    label: 'Switch'
                })
            ]
        }),

        m(titleBlock, {
            title: 'Custom color',
            class: 'custom-color',
            content: [
                m(Switch)
            ]
        }),

        m(titleBlock, {
            title: 'Custom icon',
            class: 'custom-icon',
            content: [
                m(Switch, {
                    icon: m(Icon, {
                        msvg: bullseyeIcon
                    })
                })
            ]
        }),

        m(titleBlock, {
            title: 'No shadow, custom color',
            class: 'custom-color',
            content: m('.row', [
                m(Switch, {
                    raised: false,
                    wash: false
                })
            ])
        }),

        m(titleBlock, {
            title: 'Custom shadow depth',
            info: m('p', 'Starting at depth 0.'),
            class: 'custom-color',
            content: m('.row', [
                m(Switch, {
                    zOff: 0,
                    zOn: 1
                })
            ])
        }),

        m(titleBlock, {
            title: 'Custom size',
            content: ['large', 'medium', 'regular', 'small'].map((size) => {
                const sizeStr = size.toString();
                return m('.row', [
                    m(Switch, {
                        label: sizeStr.charAt(0).toUpperCase() + sizeStr.slice(1),
                        size: size
                    })
                ]);
            })
        }),

        m(titleBlock, {
            title: ('Checked state: ' + ctrl.switchState()),
            content: [
                m(Switch, {
                    checked: ctrl.switchState,
                    getState: (state) => (ctrl.switchState(state.checked))
                })
            ]
        }),

        m(titleBlock, {
            title: 'Setting the value from outside',
            content: [
                m(Switch, {
                    label: 'Initiator',
                    getState: (state) => (ctrl.switchListenerState(state.checked))
                }),
                m(Switch, {
                    label: 'Result',
                    disabled: true,
                    checked: ctrl.switchListenerState
                })
            ]
        }),

        m(titleBlock, {
            title: 'Disabled',
            content: [
                m(Switch, {
                    label: 'Off',
                    disabled: true
                }),
                m(Switch, {
                    label: 'On',
                    disabled: true,
                    checked: true
                })
            ]
        }),

        m(titleBlock, {
            title: 'Dark theme',
            class: 'pe-dark-theme',
            content: [
                m(Switch, {
                    label: 'Switch'
                }),
                m(Switch, {
                    label: 'Switch',
                    checked: true
                })
            ]
        }),

        m(titleBlock, {
            title: 'Dark theme: disabled',
            class: 'pe-dark-theme',
            content: [
                m(Switch, {
                    label: 'Off',
                    disabled: true
                }),
                m(Switch, {
                    label: 'On',
                    disabled: true,
                    checked: true
                })
            ]
        })
    ]);
};

export default module;
