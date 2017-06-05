import m from 'mithril';
import { Icon, Slider } from 'polythene';
import { styler } from 'polythene-core-css';
import volumeSlider from './slider-volume';
import rgbSlider from './slider-rgb';
import style from './slider-style';
styler.add('polythene-examples-slider', style);

import bullseyeIcon from '../assets/bullseye';
import iconVolume from 'mmsvg/google/msvg/av/volume-up';

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
    return {
        sliderRead: 0,
        sliderSmallRange: 0,
        sliderNegative: -1,
        sliderUnspecified: -1
    };
};
module.view = (ctrl) => {
    return m('.module-slider', [

        m('.p-block.p-block-info',
            m('p', [
                'On desktop, TAB can be used to give focus, arrow buttons RIGHT and LEFT to increase/decrease the value.',
            ])
        ),

        m(titleBlock, {
            title: 'Default slider',
            content: [
                m('p', 'Range 0-100, steps are rounded to 1'),
                m(Slider)
            ]
        }),

        m(titleBlock, {
            title: 'Smooth slider',
            content: [
                m('p', 'Range 0-100, step=0'),
                m(Slider, {
                    step: 0,
                    value: 50
                })
            ]
        }),

        m(titleBlock, {
            title: 'Ticks',
            content: [
                m(Slider, {
                    min: 0,
                    max: 100,
                    step: 10,
                    ticks: true
                })
            ]
        }),

        m(titleBlock, {
            title: 'Ticks with pin',
            class: 'has-pins',
            content: [
                m(Slider, {
                    min: 0,
                    max: 100,
                    step: 10,
                    value: 2,
                    pin: true,
                    ticks: true
                })
            ]
        }),

        m(titleBlock, {
            title: 'No interactive track',
            content: [
                m('p', 'Only use the thumb to update the slider'),
                m(Slider, {
                    interactiveTrack: false
                })
            ]
        }),

        m(titleBlock, {
            title: 'Custom color',
            class: 'custom-color',
            content: [
                m(Slider, {
                    min: 0,
                    max: 100,
                    value: 50
                })
            ]
        }),

        m(titleBlock, {
            title: 'Custom thumb',
            class: 'custom-thumb',
            content: [
                m(Slider, {
                    min: 0,
                    max: 100,
                    value: 50,
                    icon: m(Icon, {
                        msvg: bullseyeIcon
                    })
                })
            ]
        }),

        m(titleBlock, {
            title: 'With icons',
            class: 'icons',
            content: m(volumeSlider)
        }),

        m(titleBlock, {
            title: 'With an editable numeric value',
            class: 'rgb',
            content: m(rgbSlider)
        }),

        m(titleBlock, {
            title: 'With icon, pin and ticks',
            class: 'has-pins',
            content: m(Slider, {
                class: 'layout horizontal',
                min: 0,
                max: 100,
                step: 10,
                value: 2,
                pin: true,
                ticks: true,
                before: m(Icon, {
                    msvg: iconVolume
                })
            })
        }),

        m(titleBlock, {
            title: 'Read value',
            content: [
                m('p', (ctrl.sliderRead !== undefined) ? 'Value is: ' + ctrl.sliderRead : 'Get value...'),
                m(Slider, {
                    min: 0,
                    max: 100,
                    value: ctrl.sliderRead,
                    getValue: (value) => {
                        ctrl.sliderRead = value;
                    }
                })
            ]
        }),

        m(titleBlock, {
            title: 'Small range, no step',
            content: [
                m('p', (ctrl.sliderSmallRange !== undefined) ? 'Value is: ' + ctrl.sliderSmallRange : 'Get value...'),
                m(Slider, {
                    min: 0,
                    max: 1,
                    step: 0,
                    value: ctrl.sliderSmallRange,
                    getValue: (value) => {
                        ctrl.sliderSmallRange = value;
                    }
                })
            ]
        }),

        m(titleBlock, {
            title: 'Negative range, step=0.1',
            content: [
                m('p', (ctrl.sliderNegative !== undefined) ? 'Value is: ' + ctrl.sliderNegative : 'Get value...'),
                m(Slider, {
                    min: -1,
                    max: 1,
                    step: 0.1,
                    value: ctrl.sliderNegative,
                    getValue: (value) => {
                        ctrl.sliderNegative = value;
                    }
                })
            ]
        }),

        m(titleBlock, {
            title: 'Use left value for extra "unspecified value" step',
            content: [
                m('p', (ctrl.sliderUnspecified !== undefined && ctrl.sliderUnspecified !== -1) ? 'Age: ' + ctrl.sliderUnspecified : 'Age (not set)'),
                m(Slider, {
                    min: -1,
                    max: 100,
                    value: -1,
                    getValue: (value) => (ctrl.sliderUnspecified = value)
                })
            ]
        }),

        m(titleBlock, {
            title: 'Dark theme: default slider',
            class: 'pe-dark-theme',
            content: [
                m(Slider)
            ]
        }),

        m(titleBlock, {
            title: 'Dark theme: ticks',
            class: 'pe-dark-theme',
            content: [
                m(Slider, {
                    min: 0,
                    max: 100,
                    step: 10,
                    ticks: true
                })
            ]
        }),

        m(titleBlock, {
            title: 'Dark theme: ticks with pin',
            class: 'pe-dark-theme has-pins',
            content: [
                m(Slider, {
                    min: 0,
                    max: 100,
                    step: 10,
                    ticks: true,
                    pin: true
                })
            ]
        }),

        m(titleBlock, {
            title: 'Dark theme: with icons',
            class: 'icons pe-dark-theme',
            content: m(volumeSlider)
        }),

        m(titleBlock, {
            title: 'Disabled (value)',
            content: [
                m(Slider, {
                    min: 0,
                    max: 100,
                    value: 50,
                    disabled: true
                })
            ]
        }),

        m(titleBlock, {
            title: 'Disabled (zero)',
            content: [
                m(Slider, {
                    min: 0,
                    max: 100,
                    value: 0,
                    disabled: true
                })
            ]
        }),

        m(titleBlock, {
            title: 'Disabled ticks',
            content: [
                m(Slider, {
                    min: 0,
                    max: 100,
                    step: 10,
                    value: 50,
                    ticks: true,
                    disabled: true
                })
            ]
        }),

        m(titleBlock, {
            title: 'Dark theme: disabled',
            class: 'pe-dark-theme',
            content: [
                m(Slider, {
                    min: 0,
                    max: 100,
                    value: 50,
                    disabled: true
                })
            ]
        })

    ]);
};

export default module;
