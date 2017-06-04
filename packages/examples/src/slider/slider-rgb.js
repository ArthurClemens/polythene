import m from 'mithril';
import { Slider, TextField, styler } from 'polythene';
import style from './slider-rgb-style';
styler.add('polythene-examples-slider-rgb', style);

const createSlider = (ctrl, attr, label) => {
    return m(Slider, {
        class: 'layout horizontal',
        min: 0,
        max: 255,
        value: () => (ctrl[attr]),
        getValue: (value) => (ctrl[attr] = value),
        before: m('.pe-slider__label', label),
        after: m(TextField, {
            type: 'number',
            hideSpinner: true,
            value: () => (ctrl[attr].toString()),
            events: {
                oninput: () => {},
                onchange: (e) => (ctrl[attr] = e.target.value),
            },
            maxlength: 3,
            min: 0,
            max: 255,
            hideValidation: true
        })
    });
};

const module = {};
module.controller = () => {
    const rnd = () => (Math.round(255 * Math.random()));

    return {
        red: rnd(),
        green: rnd(),
        blue: rnd()
    };
};
module.view = (ctrl) => {
    return m('.rgb-slider', [
        m('.field', {
            style: {
                background: 'rgb(' + ctrl.red + ',' + ctrl.green + ',' + ctrl.blue + ')'
            }
        }),
        createSlider(ctrl, 'red', 'R'),
        createSlider(ctrl, 'green', 'G'),
        createSlider(ctrl, 'blue', 'B')
    ]);
};

export default module;
