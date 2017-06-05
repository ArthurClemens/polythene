import { appConfig } from "polythene-theme";

const styles = [{
    '.module-slider': {
        ' .icons': {
            ' .pe-header': {
                'font-size': '14px',
                color: appConfig.rgba(appConfig.color_light_foreground, appConfig.blend_light_text_secondary)
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
                color: appConfig.rgba(appConfig.color_dark_foreground, appConfig.blend_dark_text_secondary)
            }
        }
    }
}];

export default styles;
