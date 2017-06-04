import m from 'mithril';
import { Icon, Slider, styler } from 'polythene';
import style from './slider-volume-style';
styler.add('polythene-examples-slider-volume', style);

import iconVolume from 'mmsvg/google/msvg/av/volume-up';
import iconAlarm from 'mmsvg/google/msvg/action/alarm';
import iconHeadphones from 'mmsvg/templarian/msvg/headphones';


const module = {};
module.view = () => {
    return m('.volume', [
        m('.header', 'Media volume'),
        m(Slider, {
            class: 'layout horizontal',
            min: 0,
            max: 10,
            value: 4,
            step: 0,
            before: m(Icon, {
                msvg: iconVolume
            })
        }),
        m('.header', 'Alarm volume'),
        m(Slider, {
            class: 'layout horizontal',
            min: 0,
            max: 10,
            value: 2,
            step: 0,
            before: m(Icon, {
                msvg: iconAlarm
            })
        }),
        m('.header', 'Headphone volume'),
        m(Slider, {
            class: 'layout horizontal',
            min: 0,
            max: 10,
            value: 2,
            disabled: true,
            before: m(Icon, {
                msvg: iconHeadphones
            })
        })
    ]);
};

export default module;
