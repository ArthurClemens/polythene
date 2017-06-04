import m from 'mithril';
import { Icon, IconButton, styler } from 'polythene';
import style from './icon-button-style';
styler.add('polythene-examples-icon-button', style);
import iconHeart from 'mmsvg/templarian/msvg/heart';

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {
            class: args.class || ''
        }, [
            m('.p-block-header', args.label),
            args.content
        ]);
    }
};

const myIcon = {
    msvg: iconHeart
};

const module = {};
module.view = () => {
    return m('.module-icon-button', [

        m(titleBlock, {
            label: 'Default settings',
            content: m(IconButton, {
                icon: myIcon
            })
        }),
        m(titleBlock, {
            label: 'With wash',
            content: m(IconButton, {
                icon: myIcon,
                wash: true
            })
        }),
        m(titleBlock, {
            label: 'No wash, no ink',
            content: m(IconButton, {
                icon: myIcon,
                wash: false,
                ink: false
            })
        }),
        m(titleBlock, {
            label: 'Sizes',
            content: ['small', 'regular', 'medium', 'large'].map((type) => (
                m(IconButton, {
                    icon: {
                        msvg: iconHeart,
                        type: type
                    }
                })
            ))
        }),
        m(titleBlock, {
            label: 'Compact',
            content: ['small', 'regular', 'medium', 'large'].map((type) => (
                m(IconButton, {
                    compact: true,
                    icon: {
                        msvg: iconHeart,
                        type: type
                    }
                })
            ))
        }),

        m(titleBlock, {
            label: 'Raised',
            content: m(IconButton, {
                icon: myIcon,
                raised: true,
                class: 'raised'
            })
        }),
        m(titleBlock, {
            label: 'Colored, Colored with wash',
            content: [
                m(IconButton, {
                    class: 'colored',
                    icon: myIcon
                }),
                m(IconButton, {
                    class: 'colored',
                    icon: myIcon,
                    wash: true
                })
            ]
        }),
        m(titleBlock, {
            label: 'Inactive',
            content: m(IconButton, {
                inactive: true,
                icon: myIcon
            })
        }),
        m(titleBlock, {
            label: 'Disabled',
            content: m(IconButton, {
                disabled: true,
                icon: myIcon
            })
        }),
        m(titleBlock, {
            label: 'Dark theme',
            class: 'pe-dark-theme',
            content: m(IconButton, {
                icon: myIcon
            })
        }),
        m(titleBlock, {
            label: 'Dark theme: colored',
            class: 'pe-dark-theme',
            content: [
                m(IconButton, {
                    class: 'colored',
                    icon: myIcon
                }),
                m(IconButton, {
                    class: 'colored',
                    icon: myIcon,
                    wash: true
                })
            ]
        }),
        m(titleBlock, {
            label: 'Dark theme: disabled',
            class: 'pe-dark-theme',
            content: m(IconButton, {
                disabled: true,
                icon: myIcon
            })
        }),
        m(titleBlock, {
            label: 'Button events',
            content: m(IconButton, {
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
            })
        }),
        /*
        m(titleBlock, {
            label: 'Custom component with PNG',
            content: m(IconButton, {
                content: myCustomIconComponent
            })
        })
        */
    ]);
};

export default module;
