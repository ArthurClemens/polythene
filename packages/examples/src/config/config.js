import 'polythene/common/object.assign';
import config from 'polythene/config/default';

console.log('examples config');

export default Object.assign({}, config, {
    // If we wanted to change the base color to orange:

    // color_primary: '255, 152, 0', // orange 500
    // color_primary_active: '251, 140, 0', // orange 600
    // color_primary_dark: '245, 124, 0', // orange 700
    // color_primary_faded: '255, 183, 77', // orange 300
    // color_primary_foreground: '255, 255, 255'
});
