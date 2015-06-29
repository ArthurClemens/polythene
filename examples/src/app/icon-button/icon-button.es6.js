'use strict';

import m from 'mithril';
import icon from 'polythene/icon/icon';
import iconBtn from 'polythene/icon-button/icon-button';
require('./icon-button.css!');

const iconBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {
            class: args.class || ''
        }, [
            m('.p-block-header', args.label),
            m.component(iconBtn, args.btn)
        ]);
    }
};

const myIcon = {
    svg: {
        iconSet: 'mdi',
        name: 'heart'
    },
    class: 'mdi'
};

const myCustomIconComponent = m.component(icon, {
    src: 'app/icon/img/ic_chat_black_48dp.png'
});

let module = {};
module.view = () => {
    return m('.module-icon-button', [

        m.component(iconBlock, {
            label: 'Default settings',
            btn: {
                icon: myIcon
            }
        }),
        m.component(iconBlock, {
            label: 'With wash',
            btn: {
                icon: myIcon,
                wash: true
            }
        }),
        m.component(iconBlock, {
            label: 'No wash, no ink',
            btn: {
                icon: myIcon,
                wash: false,
                ink: false
            }
        }),
        m.component(iconBlock, {
            label: 'Colored',
            btn: {
                class: 'colored',
                icon: myIcon
            }
        }),
        m.component(iconBlock, {
            label: 'Disabled',
            btn: {
                disabled: true,
                icon: myIcon
            }
        }),
        m.component(iconBlock, {
            label: 'Dark theme',
            class: 'dark-theme',
            btn: {
                icon: myIcon
            }
        }),
        m.component(iconBlock, {
            label: 'Dark theme disabled',
            class: 'dark-theme',
            btn: {
                disabled: true,
                icon: myIcon
            }
        }),
        m.component(iconBlock, {
            label: 'Custom component with PNG',
            btn: {
                content: myCustomIconComponent
            }
        }),
        m.component(iconBlock, {
            label: 'Button events',
            btn: {
                icon: myIcon,
                events: {
                    onmouseover: function() {
                        console.log('mouse over');
                    },
                    onmouseout: function() {
                        console.log('mouse out');
                    },
                    onclick: function() {
                        console.log('click');
                    }
                }
            }
        })
    ]);
};

export default module;
