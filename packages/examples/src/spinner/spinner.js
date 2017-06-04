import m from 'mithril';
import { Button, DeterminateSpinner, IndeterminateSpinner, IOSSpinner, Slider, styler } from 'polythene';
import style from './spinner-style';
styler.add('polythene-examples-spinner', style);

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
    const percentage = m.prop(0);
    const STEP_DURATION = 2000;

    let start = null;
    const resetStep = () => {
        start = null;
    };
    const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        percentage(1.0 / STEP_DURATION * progress);
        m.redraw();
        if (progress < STEP_DURATION) {
            window.requestAnimationFrame(step);
        }
    };

    return {
        indeterminateVisible: true,
        delayVisible: false,
        iosVisible: false,
        colorsVisible: false,
        raisedVisible: false,
        sizesVisible: false,
        iosColorsVisible: false,
        iosSizesVisible: false,
        darkIndeterminateVisible: false,
        darkRaisedVisible: false,
        darkIndeterminateColorVisible: false,
        darkIosVisible: false,
        percentage,
        animPercentage: m.prop(0),
        step,
        resetStep
    };
};
module.view = (ctrl) => {
    return m('.module-spinner', [

        m('.p-block.p-block-info',
            m('p', m.trust('For performance reasons not all spinners are shown simultaneously.'))
        ),

        m(titleBlock, {
            title: 'Indeterminate spinner',
            content: [
                m(Button, {
                    label: 'Toggle',
                    raised: true,
                    events: {
                        onclick: () => (ctrl.indeterminateVisible = !ctrl.indeterminateVisible)
                    }
                }),
                m(IndeterminateSpinner, {
                    show: ctrl.indeterminateVisible
                })
            ]
        }),

        m(titleBlock, {
            title: 'Delayed spinner',
            content: [
                m(Button, {
                    label: 'Toggle',
                    raised: true,
                    events: {
                        onclick: () => (ctrl.delayVisible = !ctrl.delayVisible)
                    }
                }),
                m(IndeterminateSpinner, {
                    show: ctrl.delayVisible ? 1 : false
                })
            ]
        }),

        m(titleBlock, {
            title: 'Determinate spinner',
            content: m('.slider-control', [
                m(Slider, {
                    class: 'layout horizontal',
                    min: 0,
                    max: 1,
                    step: 0,
                    value: ctrl.percentage,
                    getValue: ctrl.percentage,
                    after: m(DeterminateSpinner, {
                        class: 'self-center',
                        singleColor: true,
                        percentage: ctrl.percentage,
                        show: true
                    })
                }),
                m(Button, {
                    label: 'Run',
                    raised: true,
                    events: {
                        onclick: () => (ctrl.resetStep(), window.requestAnimationFrame(ctrl.step))
                    }
                }),
            ])
        }),

        m(titleBlock, {
            title: 'Determinate spinner, animated steps',
            content: m('.slider-control', [
                m(Slider, {
                    class: 'layout horizontal',
                    min: 0,
                    max: 1,
                    step: 0,
                    value: ctrl.animPercentage,
                    getValue: ctrl.animPercentage,
                    after: m(DeterminateSpinner, {
                        class: 'self-center',
                        singleColor: true,
                        percentage: ctrl.animPercentage,
                        show: true,
                        animated: true,
                        updateDuration: 1.0
                    })
                }),
            ])
        }),

        m(titleBlock, {
            title: 'iOS spinner',
            content: [
                m(Button, {
                    label: 'Toggle',
                    raised: true,
                    events: {
                        onclick: () => (ctrl.iosVisible = !ctrl.iosVisible)
                    }
                }),
                m(IOSSpinner, {
                    show: ctrl.iosVisible
                })
            ]
        }),

        m(titleBlock, {
            title: 'Indeterminate spinner: single color and custom color',
            class: 'colors',
            content: [
                m(Button, {
                    label: 'Toggle',
                    raised: true,
                    events: {
                        onclick: () => (ctrl.colorsVisible = !ctrl.colorsVisible)
                    }
                }),
                m('.row.layout.horizontal', [
                    m(IndeterminateSpinner, {
                        show: ctrl.colorsVisible,
                        singleColor: true
                    }),
                    m(IndeterminateSpinner, {
                        show: ctrl.colorsVisible,
                        class: 'custom-color',
                        singleColor: true
                    })
                ])
            ]
        }),

        m(titleBlock, {
            title: 'Sizes',
            class: 'sizes',
            content: [
                m(Button, {
                    label: 'Toggle',
                    raised: true,
                    events: {
                        onclick: () => (ctrl.sizesVisible = !ctrl.sizesVisible)
                    }
                }),
                m(IndeterminateSpinner, {
                    show: ctrl.sizesVisible,
                    type: 'small'
                }),
                m(IndeterminateSpinner, {
                    show: ctrl.sizesVisible,
                    type: 'regular'
                }),
                m(IndeterminateSpinner, {
                    show: ctrl.sizesVisible,
                    type: 'medium'
                }),
                m(IndeterminateSpinner, {
                    show: ctrl.sizesVisible,
                    type: 'large'
                }),
                m(IndeterminateSpinner, {
                    show: ctrl.sizesVisible,
                    type: 'fab'
                })
            ]
        }),

        m(titleBlock, {
            title: 'Raised',
            class: 'raised sizes',
            content: [
                m(Button, {
                    label: 'Toggle',
                    raised: true,
                    events: {
                        onclick: () => (ctrl.raisedVisible = !ctrl.raisedVisible)
                    }
                }),
                m(IndeterminateSpinner, {
                    raised: true,
                    type: 'small',
                    singleColor: true,
                    show: ctrl.raisedVisible
                }),
                m(IndeterminateSpinner, {
                    raised: true,
                    type: 'regular',
                    singleColor: true,
                    show: ctrl.raisedVisible
                }),
                m(IndeterminateSpinner, {
                    raised: true,
                    type: 'medium',
                    singleColor: true,
                    show: ctrl.raisedVisible
                }),
                m(IndeterminateSpinner, {
                    raised: true,
                    type: 'large',
                    singleColor: true,
                    show: ctrl.raisedVisible
                }),
                m(IndeterminateSpinner, {
                    raised: true,
                    type: 'fab',
                    singleColor: true,
                    show: ctrl.raisedVisible
                })
            ]
        }),

        m(titleBlock, {
            title: 'iOS spinner: custom color',
            class: 'colors',
            content: [
                m(Button, {
                    label: 'Toggle',
                    raised: true,
                    events: {
                        onclick: () => (ctrl.iosColorsVisible = !ctrl.iosColorsVisible)
                    }
                }),
                m('.row.layout.horizontal', [
                    m(IOSSpinner, {
                        class: 'custom-color-1',
                        show: ctrl.iosColorsVisible
                    }),
                    m(IOSSpinner, {
                        class: 'custom-color-2',
                        show: ctrl.iosColorsVisible
                    })
                ])
            ]
        }),

        m(titleBlock, {
            title: 'iOS spinner: sizes',
            class: 'sizes',
            content: [
                m(Button, {
                    label: 'Toggle',
                    raised: true,
                    events: {
                        onclick: () => (ctrl.iosSizesVisible = !ctrl.iosSizesVisible)
                    }
                }),
                m(IOSSpinner, {
                    show: ctrl.iosSizesVisible,
                    type: 'small'
                }),
                m(IOSSpinner, {
                    show: ctrl.iosSizesVisible,
                    type: 'regular'
                }),
                m(IOSSpinner, {
                    show: ctrl.iosSizesVisible,
                    type: 'medium'
                }),
                m(IOSSpinner, {
                    show: ctrl.iosSizesVisible,
                    type: 'large'
                }),
                m(IOSSpinner, {
                    show: ctrl.iosSizesVisible,
                    type: 'fab'
                })
            ]
        }),

        m(titleBlock, {
            title: 'Dark theme: indeterminate spinner',
            class: 'pe-dark-theme',
            content: [
                m(Button, {
                    label: 'Toggle',
                    raised: true,
                    events: {
                        onclick: () => (ctrl.darkIndeterminateVisible = !ctrl.darkIndeterminateVisible)
                    }
                }),
                m(IndeterminateSpinner, {
                    show: ctrl.darkIndeterminateVisible
                })
            ]
        }),

        m(titleBlock, {
            title: 'Dark theme: raised indeterminate spinner',
            class: 'pe-dark-theme floating',
            content: [
                m(Button, {
                    label: 'Toggle',
                    raised: true,
                    events: {
                        onclick: () => (ctrl.darkRaisedVisible = !ctrl.darkRaisedVisible)
                    }
                }),
                m(IndeterminateSpinner, {
                    raised: true,
                    show: ctrl.darkRaisedVisible
                })
            ]
        }),

        m(titleBlock, {
            title: 'Dark theme: indeterminate spinner, normal and colored',
            class: 'pe-dark-theme colors',
            content: [
                m(Button, {
                    label: 'Toggle',
                    raised: true,
                    events: {
                        onclick: () => (ctrl.darkIndeterminateColorVisible = !ctrl.darkIndeterminateColorVisible)
                    }
                }),
                m('.row.layout.horizontal', [
                    m(IndeterminateSpinner, {
                        show: ctrl.darkIndeterminateColorVisible
                    }),
                    m(IndeterminateSpinner, {
                        singleColor: true,
                        show: ctrl.darkIndeterminateColorVisible
                    }),
                    m(IndeterminateSpinner, {
                        class: 'custom-color',
                        singleColor: true,
                        show: ctrl.darkIndeterminateColorVisible
                    })
                ])
            ]
        }),

        m(titleBlock, {
            title: 'Dark theme: iOS spinner, normal and colored',
            class: 'pe-dark-theme colors',
            content: [
                m(Button, {
                    label: 'Toggle',
                    raised: true,
                    events: {
                        onclick: () => (ctrl.darkIosVisible = !ctrl.darkIosVisible)
                    }
                }),
                m('.row.layout.horizontal', [
                    m(IOSSpinner, {
                        show: ctrl.darkIosVisible
                    }),
                    m(IOSSpinner, {
                        class: 'custom-color-3',
                        show: ctrl.darkIosVisible
                    }),
                    m(IOSSpinner, {
                        class: 'custom-color-4',
                        show: ctrl.darkIosVisible
                    })
                ])
            ]
        })

    ]);
};

module.updateContentOnScroll = false;

export default module;
