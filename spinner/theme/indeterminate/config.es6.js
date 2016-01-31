import 'polythene/common/object.assign';
import common from 'polythene/config/config';

const animation_duration = 1.5;
const stroke_animation_duration = 0.85 * animation_duration;

export default {
    circle_stroke_width: 4,
    animation_duration,
    stroke_animation_duration,
    color_animation_duration: 4 * stroke_animation_duration,

    color_light_single: common.rgba(common.color_primary),
    color_light_1: '#42a5f5', // blue 400
    color_light_2: '#f44336', // red 500
    color_light_3: '#fdd835', // yellow 600,
    color_light_4: '#4caf50', // green 500

    color_dark_single: common.rgba(common.color_primary),
    color_dark_1: '#42a5f5', // blue 400
    color_dark_2: '#f44336', // red 500
    color_dark_3: '#fdd835', // yellow 600,
    color_dark_4: '#4caf50' // green 500
};
