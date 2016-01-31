import common from 'polythene/config/config';

export default {
    sizes: [1, 1.5, 2, 3, 4, 5, 6, 7],
    min_size: 1.5,
    max_size_small_screen: 5,
    size_factor: common.grid_unit_menu,
    border_radius: common.unit_block_border_radius,

    color_light_background: common.rgba(common.color_light_background),
    color_dark_background: common.rgba(common.color_dark_background)
};
