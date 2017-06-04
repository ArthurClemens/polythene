import common from '../../config/config';
import buttonConfig from '../../button/theme/config';
import iconButtonConfig from '../../icon-button/theme/config';

var fontSize = buttonConfig.font_size;
var tab_label_line_height = 1.1 * fontSize;

export default {
    min_width: 72,
    medium_min_width: 160,
    label_max_width: 264,
    tab_height: 48,
    menu_tab_height: 44,
    menu_tab_icon_label_height: 44,
    tab_icon_label_height: 72,
    tab_icon_label_icon_spacing: 7,
    indicator_slide_speed: 600, // px per second
    indicator_slide_min_duration: .250,
    tabs_scroll_speed: 600, // px per second
    tabs_scroll_delay: .15,
    tabs_scroll_min_duration: .5,
    scroll_button_fade_duration: .2,
    scroll_button_fade_delay: .5,
    tab_label_line_height: tab_label_line_height,
    tab_label_vertical_offset: tab_label_line_height - fontSize,
    tab_content_padding_v: 12,
    tab_menu_content_padding_v: 6,
    tab_indicator_height: 2,
    scrollbar_offset: 20,
    scroll_button_opacity: .7,
    label_opacity: .7,

    color_light_selected_text: common.rgba(common.color_primary),
    color_light_selected_background: 'transparent',
    color_light_tab_indicator: common.rgba(common.color_primary),
    color_light_icon: iconButtonConfig.color_light_flat_normal_text,

    color_dark_selected_text: common.rgba(common.color_primary),
    color_dark_selected_background: 'transparent',
    color_dark_tab_indicator: common.rgba(common.color_primary),
    color_dark_icon: iconButtonConfig.color_dark_flat_normal_text
};