import common from 'polythene/config/config';
import sliderConfig from 'polythene/slider/theme/config';

const labelWidth = 24;
const trackWidth = 164;
const inputWidth = 32;

const styles = [{
    ' .rgb-slider': {
        ' .field': {
            width: labelWidth + trackWidth + (2 * sliderConfig.horizontal_layout_side_spacing) + inputWidth + 'px',
            height: '100px',
            'margin-bottom': '10px'
        },
        ' .pe-header': {
            'font-size': '14px',
            color: common.rgba(common.color_light_foreground, common.blend_light_text_secondary)
        },
        ' .pe-slider': {
            color: '#009688',
            'margin-top': '0 !important',
            'margin-bottom': '0 !important',

            ' .pe-slider__label': {
                width: labelWidth + 'px'
            },
            ' .pe-slider__track': {
                width: trackWidth + 'px'
            }
        },
        ' .pe-textfield': {
            color: '#009688',
            width: inputWidth + 'px',

            ' .pe-textfield__input': {
                'text-align': 'center'
            }
        }
    }
}];

export default styles;
