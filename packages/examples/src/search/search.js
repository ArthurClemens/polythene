import m from 'mithril';
import { Button, IconButton, Search, Shadow, styler } from 'polythene';
import style from './search-style';
styler.add('polythene-examples-search', style);

import iconSearch from 'mmsvg/google/msvg/action/search';
import iconBack from 'mmsvg/google/msvg/navigation/arrow-back';
import iconMic from 'mmsvg/google/msvg/av/mic';
import iconClear from 'mmsvg/google/msvg/content/clear';
import iconFilter from 'mmsvg/zavoloklom/msvg/2_1/01_web_application/filter-list';

const containerSizes = [
    {
        class: 'mobile',
        title: 'Mobile'
    },
    {
        class: 'tablet',
        title: 'Tablet'
    },
    {
        class: 'desktop',
        title: 'Desktop'
    }
];

const controlButtons = (ctrl) => {
    return [
        m('.size-buttons', containerSizes.map((s, index) => {
            return m(Button, {
                label: s.title,
                selected: ctrl.sizeIndex === index,
                events: {
                    onclick: () => (ctrl.sizeIndex = index)
                }
            });
        }))
    ];
};

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {
            class: args.class || ''
        }, [
            m('.p-block-header', args.title),
            args.info ? m('p', args.info) : null,
            args.content
        ]);
    }
};

const btnSearch = m(IconButton, {
    key: 'btnSearch',
    icon: {
        msvg: iconSearch
    },
    inactive: true
});

const btnMic = m(IconButton, {
    icon: {
        msvg: iconMic
    },
    events: {
        onclick: () => {}
    }
});

const insetClearBtn = (ctrl) => (
    m(IconButton, {
        icon: {
            msvg: iconClear
        },
        events: {
            onclick: () => (
                ctrl.query().value = '',
                console.log('ctrl.query().value', ctrl.query().value),
                m.redraw(),
                ctrl.query().el.focus()
            )
        }
    })
);

const insetDismissBtn = (ctrl) => (
    m(IconButton, {
        key: 'insetDismissBtn',
        icon: {
            msvg: iconBack
        },
        events: {
            onclick: () => (
                ctrl.query().value = '',
                setTimeout(m.redraw, 0)
            )
        },
        inactive: false
    })
);

const fullwidthClearBtn = (ctrl) => (
    m(IconButton, {
        icon: {
            msvg: iconClear
        },
        events: {
            onclick: () => (
                ctrl.queryFullwidth().value = '',
                m.redraw(),
                ctrl.queryFullwidth().el.focus()
            )
        }
    })
);

const fullwidthDismissBtn = (ctrl) => (
    m(IconButton, {
        icon: {
            msvg: iconBack
        },
        events: {
            onclick: () => (
                ctrl.queryFullwidth().value = '',
                m.redraw()
            )
        }
    })
);

const btnFilter = m(IconButton, {
    icon: {
        msvg: iconFilter
    }
});

const module = {};
module.controller = () => {
    return {
        sizeIndex: 0,
        query: m.prop(),
        queryFullwidth: m.prop()
    };
};
module.view = (ctrl) => {
    const sizeClass = containerSizes[ctrl.sizeIndex].class;

    return m('.module-search', [

        m(titleBlock, {
            content: controlButtons(ctrl)
        }),

        m(titleBlock, {
            title: 'Inset search (default)',
            info: m('p', 'Icons specified as component options'),
            content: m('form', {
                class: ['demo-search', sizeClass].join(' '),
                onsubmit: (e) => (e.preventDefault(), alert('Form submitted'))
            }, m(Search, {
                textfield: {
                    key: 'input',
                    label: 'Search',
                    type: 'search',
                    value: () => (ctrl.query() ? ctrl.query().value : ''),
                    getState: ctrl.query
                },
                buttons: {
                    none: {
                        before: btnSearch,
                        after: btnMic
                    },
                    focus: {
                        before: insetDismissBtn(ctrl),
                        after: btnMic
                    },
                    focus_dirty: {
                        before: insetDismissBtn(ctrl),
                        after: insetClearBtn(ctrl)
                    },
                    dirty: {
                        before: insetDismissBtn(ctrl),
                        after: insetClearBtn(ctrl)
                    }
                },
                before: m(Shadow)
            }))
        }),

        m(titleBlock, {
            title: 'Full-width search',
            info: m('p', 'Using a different combination of icons'),
            content: m('form', {
                class: ['demo-search', 'fullwidth', sizeClass].join(' '),
                onsubmit: (e) => (e.preventDefault(), alert('Form submitted'))
            }, [
                m(Search, {
                    type: 'fullwidth',
                    textfield: {
                        label: 'Search',
                        type: 'search',
                        value: () => (ctrl.queryFullwidth() ? ctrl.queryFullwidth().value : ''),
                        getState: ctrl.queryFullwidth
                    },
                    buttons: {
                        none: {
                            before: fullwidthDismissBtn(ctrl)
                        },
                        focus: {
                            before: fullwidthDismissBtn(ctrl)
                        },
                        focus_dirty: {
                            before: fullwidthDismissBtn(ctrl),
                            after: fullwidthClearBtn(ctrl)
                        },
                        dirty: {
                            before: fullwidthDismissBtn(ctrl),
                            after: [fullwidthClearBtn(ctrl), btnFilter]
                        }
                    }
                }),
                m('.drop-shadow')
            ])
        })

    ]);
};

export default module;
