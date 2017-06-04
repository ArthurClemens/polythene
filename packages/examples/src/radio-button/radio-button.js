import 'polythene/common/object.assign';
import m from 'mithril';
import { RadioButton, styler } from 'polythene';
import style from './radio-button-style';
styler.add('polythene-examples-radio-button', style);

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
        radioState: m.prop(false),
        radioValue: m.prop(undefined),
        radioListenerState: m.prop(false),
        radioListenerValue: m.prop(undefined)
    };
};
module.view = (ctrl) => {
    return m('.module-radio-button', [

        m('.p-block.p-block-info', [
            m('p', [
                m('span', 'See also '),
                m('a', {
                    href: '/checkbox',
                    config: m.route
                }, 'Checkbox'),
                m('span', ' and '),
                m('a', {
                    href: '/switch',
                    config: m.route
                }, 'Switch'),
                m('span', '.')
            ]),
            m('p', [
                'On desktop, TAB can be used to give focus, ENTER to select.',
            ])
        ]),

        m(titleBlock, {
            title: 'Default radio button',
            content: m('form.row', [
                m(RadioButton, {
                    name: 'default'
                }), m(RadioButton, {
                    name: 'default',
                    checked: true
                })
            ])
        }),

        m(titleBlock, {
            title: 'Custom hover behavior',
            content: m('form.row', [
                m(RadioButton, {
                    name: 'default',
                    iconButton: {
                        wash: true,
                        ink: false
                    }
                }), m(RadioButton, {
                    name: 'default',
                    checked: true,
                    iconButton: {
                        wash: true,
                        ink: false
                    }
                })
            ])
        }),

        m(titleBlock, {
            title: 'With label',
            content: m('form.row', [
                m(RadioButton, {
                    name: 'label',
                    label: 'First'
                }), m(RadioButton, {
                    name: 'label',
                    label: 'Second',
                    checked: true
                })
            ])
        }),

        m(titleBlock, {
            title: 'Custom color',
            class: 'custom-color',
            content: m('form.row', [
                m(RadioButton, {
                    name: 'color',
                    label: 'First'
                }), m(RadioButton, {
                    name: 'color',
                    label: 'Second',
                    checked: true
                })
            ])
        }),

        m(titleBlock, {
            title: 'Custom size',
            content: ['large', 'medium', 'regular', 'small'].map((size) => {
                const sizeStr = size.toString();
                return m('form.row', [
                    m(RadioButton, {
                        name: size,
                        label: sizeStr.charAt(0).toUpperCase() + sizeStr.slice(1),
                        checked: false,
                        size: size
                    }),
                    m(RadioButton, {
                        name: size,
                        label: sizeStr.charAt(0).toUpperCase() + sizeStr.slice(1),
                        checked: true,
                        size: size
                    })
                ]);
            })
        }),

        m(titleBlock, {
            title: 'Custom icon',
            content: ['large', 'medium', 'regular', 'small'].map((size) => {
                const sizeStr = size.toString();
                return m('form.row', [
                    m(RadioButton, {
                        name: 'icons_' + size,
                        label: sizeStr.charAt(0).toUpperCase() + sizeStr.slice(1),
                        iconOn: {
                            msvg: iconStar
                        },
                        iconOff: {
                            msvg: iconStarOutline
                        },
                        size: size
                    }),
                    m(RadioButton, {
                        name: 'icons_' + size,
                        label: sizeStr.charAt(0).toUpperCase() + sizeStr.slice(1),
                        iconOn: {
                            msvg: iconStar
                        },
                        iconOff: {
                            msvg: iconStarOutline
                        },
                        size: size,
                        checked: true
                    })
                ]);
            })
        }),

        m(titleBlock, {
            title: ('Checked state: ' + ctrl.radioState()) + ((ctrl.radioState() !== false) ? (', value: ' + ctrl.radioValue()) : ''),
            content: m('form.row', [
                m(RadioButton, {
                    name: 'read',
                    label: 'First',
                    value: 'first',
                    getState: (state) => (ctrl.radioState(state.checked), ctrl.radioValue(state.value))
                }), m(RadioButton, {
                    name: 'read',
                    label: 'Second',
                    value: 'second',
                    getState: (state) => (ctrl.radioState(state.checked), ctrl.radioValue(state.value))
                })
            ])
        }),

        m(titleBlock, {
            title: 'Setting the value from outside',
            content: [
                m('form.row', [
                    m(RadioButton, {
                        name: 'initiate',
                        label: 'Initiator 1',
                        value: 'first',
                        getState: (state) => (ctrl.radioListenerState(state.checked), ctrl.radioListenerValue(state.value))
                    }), m(RadioButton, {
                        name: 'initiate',
                        label: 'Initiator 2',
                        value: 'second',
                        getState: (state) => (ctrl.radioListenerState(state.checked), ctrl.radioListenerValue(state.value))
                    })
                ]),
                m('form.row', [
                    m(RadioButton, {
                        name: 'listener',
                        label: 'Listener 1',
                        disabled: true,
                        value: ctrl.radioListenerValue,
                        checked: () => (ctrl.radioListenerState() && ctrl.radioListenerValue() === 'first')
                    }), m(RadioButton, {
                        name: 'listener',
                        label: 'Listener 2',
                        disabled: true,
                        value: ctrl.radioListenerValue,
                        checked: () => (ctrl.radioListenerState() && ctrl.radioListenerValue() === 'second')
                    })
                ])
            ]
        }),

        m(titleBlock, {
            title: 'Disabled',
            content: m('form.row', [
                m(RadioButton, {
                    name: 'disabled',
                    label: 'First',
                    disabled: true
                }), m(RadioButton, {
                    name: 'disabled',
                    label: 'Second',
                    checked: true,
                    disabled: true
                })
            ])
        }),

        m(titleBlock, {
            title: 'Dark theme',
            class: 'pe-dark-theme',
            content: m('form.row', [
                m(RadioButton, {
                    name: 'dark',
                    label: 'First'
                }), m(RadioButton, {
                    name: 'dark',
                    label: 'Second',
                    checked: true
                })
            ])
        }),

        m(titleBlock, {
            title: 'Dark theme: disabled',
            class: 'pe-dark-theme',
            content: m('form.row', [
                m(RadioButton, {
                    name: 'dark',
                    label: 'First',
                    disabled: true
                }), m(RadioButton, {
                    name: 'dark',
                    label: 'Second',
                    checked: true,
                    disabled: true
                })
            ])
        })
    ]);
};

export default module;
