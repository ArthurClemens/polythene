// Conduit for global theme variables
// In your app paths setup, change the current path to your custom config file; see the theme README.

import config from './default';
export default config;

// Example customization in custom config file:
//
// import 'polythene/common/object.assign';
// import config from 'polythene/config/default';
//
// export default Object.assign({}, config, {
//     // this site's base colors
//     color_primary: '255, 152, 0', // orange 500
//     color_primary_active: '251, 140, 0', // orange 600
//     color_primary_dark: '245, 124, 0', // orange 700
//     color_primary_faded: '255, 183, 77', // orange 300
//     color_primary_foreground: '255, 255, 255'
// });
