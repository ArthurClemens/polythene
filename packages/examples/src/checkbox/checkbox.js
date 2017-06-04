import m from 'mithril';
import { Checkbox, styler } from 'polythene';
import style from './checkbox-style';
styler.add('polythene-examples-checkbox', style);

import iconStar from 'mmsvg/google/msvg/toggle/star';
import iconStarOutline from 'mmsvg/google/msvg/toggle/star-border';

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {class: args.class || ''}, [
            m('.p-block-header', args.title),
            args.content
        ]);
    }
};

const module = {};
module.controller = () => {
    m.redraw.strategy('all');
    return {
        checkboxState: m.prop(false),
        checkboxValue: m.prop(undefined),
        checkboxListenerState: m.prop(false),
    };
};
module.view = (ctrl) => {
    return m('.module-checkbox', [

        m('.p-block.p-block-info', [
            m('p', [
                m('span', 'See also '),
                m('a', {
                    href: '/switch',
                    config: m.route
                }, 'Switch'),
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
            title: 'Default checkbox',
            content: m('.row', [
                m(Checkbox),
                m(Checkbox, {
                    checked: true
                })
            ])
        }),

        m(titleBlock, {
            title: 'Custom hover behavior',
            content: m('.row', [
                m(Checkbox, {
                    name: 'custom1',
                    checked: false,
                    iconButton: {
                        wash: true,
                        ink: false
                    }
                }),
                m(Checkbox, {
                    checked: true,
                    name: 'custom2',
                    iconButton: {
                        wash: true,
                        ink: false
                    }
                })
            ])
        }),

        m(titleBlock, {
            title: 'With label',
            content: [
                m(Checkbox, {
                    label: 'Checkbox',
                    checked: false
                }),
                m(Checkbox, {
                    label: 'Checkbox',
                    checked: true
                })
            ]
        }),

        m(titleBlock, {
            title: 'Custom color',
            class: 'custom-color',
            content: [
                m(Checkbox, {
                    label: 'Checkbox',
                    checked: false
                }),
                m(Checkbox, {
                    label: 'Checkbox',
                    checked: true
                })
            ]
        }),

        m(titleBlock, {
            title: 'Custom size',
            content: ['large', 'medium', 'regular', 'small'].map((size) => {
                const sizeStr = size.toString();
                return m('.row', [
                    m(Checkbox, {
                        label: sizeStr.charAt(0).toUpperCase() + sizeStr.slice(1),
                        checked: false,
                        size: size
                    })
                ]);
            })
        }),

        m(titleBlock, {
            title: 'Custom icon',
            content: ['large', 'medium', 'regular', 'small'].map((size) => {
                const sizeStr = size.toString();
                return m('.row', [
                    m(Checkbox, {
                        label: sizeStr.charAt(0).toUpperCase() + sizeStr.slice(1),
                        checked: false,
                        iconOn: {
                            msvg: iconStar
                        },
                        iconOff: {
                            msvg: iconStarOutline
                        },
                        size: size
                    })
                ]);
            })
        }),

        m(titleBlock, {
            title: ('Checked state: ' + ctrl.checkboxState()),
            content: [
                m(Checkbox, {
                    label: 'Checkbox',
                    checked: ctrl.checkboxState,
                    getState: (state) => (ctrl.checkboxState(state.checked))
                })
            ]
        }),

        m(titleBlock, {
            title: 'Setting the value from outside',
            content: [
                m(Checkbox, {
                    label: 'Initiator',
                    getState: (state) => (ctrl.checkboxListenerState(state.checked))
                }),
                m(Checkbox, {
                    label: 'Result',
                    disabled: true,
                    checked: ctrl.checkboxListenerState
                })
            ]
        }),

        m(titleBlock, {
            title: 'Disabled',
            content: [
                m(Checkbox, {
                    label: 'Checkbox',
                    checked: false,
                    disabled: true
                }),
                m(Checkbox, {
                    label: 'Checkbox',
                    checked: true,
                    disabled: true
                })
            ]
        }),

        m(titleBlock, {
            title: 'Dark theme',
            class: 'pe-dark-theme',
            content: [
                m(Checkbox, {
                    label: 'Checkbox',
                    checked: false
                }),
                m(Checkbox, {
                    label: 'Checkbox',
                    checked: true
                })
            ]
        }),

        m(titleBlock, {
            title: 'Dark theme: disabled',
            class: 'pe-dark-theme',
            content: [
                m(Checkbox, {
                    label: 'Checkbox',
                    checked: false,
                    disabled: true
                }),
                m(Checkbox, {
                    label: 'Checkbox',
                    checked: true,
                    disabled: true
                })
            ]
        })
    ]);
};

export default module;
