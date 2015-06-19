'use strict';

import m from 'mithril';
import icon from 'polythene/icon/icon';
import iconBtn from 'polythene/icon-button/icon-button';
import nav from 'app/app/nav';
import github from 'app/app/github';

require('polythene-theme/theme');
require('app/app/app.css!');
require('./icon-button.css!');

const NAME = 'Icon Button';

let app,
    iconBlock,
    content,
    myIcon,
    myCustomIconComponent;

iconBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {
            class: args.class || ''
        }, [
            m('.p-block-header', args.label),
            m.component(iconBtn, args.btn)
        ]);
    }
};

myIcon = {
    svg: {
        iconSet: 'mdi',
        name: 'heart'
    },
    class: 'mdi'
};

myCustomIconComponent = m.component(icon, {
    src: 'app/icon/img/ic_chat_black_48dp.png'
});

content = m('.demo-content', [

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

app = {};
app.view = function() {
    return [
        nav(NAME, [content, github])
    ];
};

m.mount(document.body, app);
