import common from 'polythene/config/config';

const styles = [{
    '.module-slider': {
        ' .icons': {
            ' .pe-header': {
                'font-size': '14px',
                color: common.rgba(common.color_light_foreground, common.blend_light_text_secondary)
            },
            ' .pe-slider': {
                color: '#009688',
                margin: '13px 0 11px 0',

                ' .pe-slider__track': {
                    width: '204px'
                }
            }
        },
        ' .pe-dark-theme.icons': {
            ' .pe-header': {
                color: common.rgba(common.color_dark_foreground, common.blend_dark_text_secondary)
            }
        }
    }
}];

export default styles;
