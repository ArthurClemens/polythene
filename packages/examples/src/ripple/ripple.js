import m from 'mithril';
import { List, ListTile, IconButton, Ripple, styler } from 'polythene';
import style from './ripple-style';
styler.add('polythene-examples-ripple', style);

const titleLineText = 'Two-line item';
const infoLineText = 'Secondary text';
import iconMenu from 'mmsvg/google/msvg/navigation/menu';

const iconButtons = function(rippleOpts = {}, iconOpts = {}) {
    const makeIconButton = (type) => {
        return m(IconButton, {
            icon: {
                msvg: iconMenu,
                type: type,
                class: 'md'
            },
            ripple: rippleOpts,
            wash: false,
            center: iconOpts.center || false,
            disabled: iconOpts.disabled,
            class: 'demo-button'
        });
    };
    return [
        makeIconButton('large')
    ];
};

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {class: args.class}, [
            m('.p-block-header', args.title),
            args.content
        ]);
    }
};

const module = {};
module.view = () => {
    return m('.module-ripple', [

        m(titleBlock, {
            title: 'Constrained ripple',
            content: iconButtons()
        }),

        m(titleBlock, {
            title: 'Centered ripple',
            content: iconButtons({center: true})
        }),

        m(titleBlock, {
            title: 'Unconstrained ripple',
            content: iconButtons({constrained: false})
        }),

        m(titleBlock, {
            title: 'Disabled ripple',
            content: iconButtons({constrained: false, disabled: true}, {disabled: true})
        }),

        m(titleBlock, {
            title: 'Colored ripple',
            content: iconButtons({class: 'colored-ripple'})
        }),

        m(titleBlock, {
            title: 'Dark ripple',
            class: 'pe-dark-theme',
            content: iconButtons()
        }),

        m(titleBlock, {
            title: 'Large ripple',
            content: m(List, {
                class: 'demo-list demo-bordered',
                tiles: [
                    m(ListTile, {
                        title: titleLineText,
                        subtitle: infoLineText,
                        after: m(Ripple)
                    })
                ]
            })
        }),

        m(titleBlock, {
            title: 'Custom opacity and speed',
            content: m(List, {
                class: 'demo-list demo-bordered',
                tiles: [
                    m(ListTile, {
                        title: titleLineText,
                        subtitle: infoLineText,
                        after: m(Ripple, {
                            class: 'colored-ripple',
                            initialOpacity: 0.6,
                            opacityDecayVelocity: 0.24
                        })
                    })
                ]
            })
        }),

        m(titleBlock, {
            title: 'Callbacks',
            content: m(List, {
                class: 'demo-list demo-bordered',
                tiles: [
                    m(ListTile, {
                        title: titleLineText,
                        subtitle: infoLineText,
                        after: m(Ripple, {
                            start: function(e) {
                                console.log('ripple start', e);
                            },
                            end: function(e) {
                                console.log('ripple end', e);
                            }
                        })
                    })
                ]
            })
        })

    ]);
};

export default module;
