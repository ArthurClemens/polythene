_This is documentation for Polythene 0.3. A newer version of Polythene - compatible with Mithril 1.x - is available at https://github.com/ArthurClemens/polythene_


# Theming

Polythene is an implementation of Google's Material Design, but it can also be used with different styling.

This page describes a number of ways to create customizations.


## Setup of themes

Each component folder contains a sub-folder "theme". This usually contains:

* `theme.js`
* `config.js`
* `layout.js`
* `color.js`

The theme js file is imported by the component. The file will create a CSS object and attach it to the head.

CSS is created by reading the config file, and calling the layout and color functions with the config.


## Customization scenarios

There are multiple ways to customize, and they be be used side by side:

1. Create custom CSS that overrides some of the provided styles.
1. Create a "sub-class" of a component, thereby setting new defaults and/or a different config.
1. Create a different theme file for a component
1. Change global theme variables


## Custom CSS

Use this method to quickly enhance existing styles.

`polythene/common/styler` is a utility module to create CSS from a style object, using [j2c](http://j2c.py.gy).

For example:

~~~javascript
import styler from 'polythene/common/styler';

import style from 'app/card/card-style';
styler.add('app-card', style);
~~~

The styler utility expects an Array of style declarations, formatted for j2c. For example:

~~~javascript
export default [{
    '.pe-icon-button': {
        color: '#FF1744'
    }
}];
~~~

Of course you can also load extra styles as a CSS file and attach that to the head, or use your bundler / module loader's preferred way.


## Sub-classing components

Sub-classing is actually creating a wrapper around a component. For example to create a primary button based on Polythene's button, you would create a new module file `primary-button.js`:

~~~javascript
import m from 'mithril';
import { Button } from 'polythene';

export default {
    view: (ctrl, opts = {}) => {
        opts.class = (opts.class || '') + ' my-button--primary';
        opts.borders = true;
        return m(Button, opts);
    }
};
~~~

In this example the `class` and `borders` options are pre-set. Now we can use this app specific component where we normally would use Polythene's button.

### Adding styles

We can use the config setup and provide new values for layout and color styles.

For ease of use we can place the theme code in the same file:

~~~javascript
import m from 'mithril';
import { Button } from 'polythene';

import 'polythene/common/object.assign';
import defaultConfig from 'polythene/button/theme/config';
import layout from 'polythene/button/theme/layout';
import color from 'polythene/button/theme/color';
import styler from 'polythene/common/styler';

const reconfig = (cfg) => {
    return [{
        '.my-button--primary': Object.assign({}, cfg,
            {
                border_radius: 0,
                text_transform: 'none',
                color_light_flat_normal_background: '#673ab7',
                color_light_flat_normal_text: '#fff'
            }
        )
    }];
};

const newConfig = reconfig(defaultConfig);
styler.add('my-button-primary', layout(newConfig), color(newConfig));

export default {
    view: (ctrl, opts = {}) => {
        opts.class = (opts.class || '') + ' my-button--primary';
        opts.borders = true;
        return m(Button, opts);
    }
};
~~~

### Custom styles as configuration

Instead of creating this theme code for all custom components, we can write the style configurations in one file. The default path of this file is `polythene/config/custom`, but that is a placeholder for your actual custom configuration file (more on that further down).

The file may look like this:

~~~javascript
import 'polythene/common/object.assign';

export default {
    button: (config) => {
        const primaryButtonCfg = Object.assign({}, config, {
            border_radius: 0,
            text_transform: 'none',
            color_light_flat_normal_background: '#673ab7',
            color_light_flat_normal_text: '#fff'
        });
        return [
            {'': config}, // default Polythene button
            {'.my-button--primary': primaryButtonCfg}
        ];
    }
};
~~~

It is a POJO with component names as keys ('button', 'list-tile', and so on), where each value is a function that takes the default configuration and returns a list of newly scoped configurations.

Several notes to returned scope strings:

* `''` - this is the default (unscoped) value; leave this out to remove Polythene's button style altogether.
* `'.my-button--primary'` - the styles will be applied to this class
* `'.home '` - (note the space suffix) the styles will be applied below this class, so: `.home .my-button--primary` and so on.


Your custom configuration file may be located in `app/config/custom`. Now you need to point the bundler / module loader to this file.

#### Use with Browserify

Use the [pathmodify](https://www.npmjs.com/package/pathmodify) plugin to change the default config path to your custom file:

~~~javascript
browserify().plugin(pathmodify, {
    mods: [
        pathmodify.mod.id('polythene/config/custom', 'app/config/custom')
    ]
})
~~~

Embedded in a build script:

~~~javascript
// build script
// ...
var pathmodify = require('pathmodify');

function bundle(entries, outfile) {
    browserify({
        entries: entries,
        extensions: ['.es6.js'],
        paths: ['.', 'node_modules']
    })
    .plugin(pathmodify, {
        mods: [
            pathmodify.mod.id('polythene/config/custom', 'app/config/custom')
        ]
    })
    .transform(babelify)
    ...
};
~~~

#### Use with SystemJS / jspm

In `config.js`, change the path in the map variables:

~~~javascript
...
map: {
    'polythene/config/custom': 'app/config/custom'
    ...
}
~~~




## Change global theme variables

Global theme variables are stored in `polythene/config/config` (which reads `polythene/config/default`). This file defines common sizes, breakpoints, primary color, and so on.

To use different variables in your app, use the following approach:

* Create a new file, for instance at `app/config/config`. This file might look like this:

~~~javascript
import 'polythene/common/object.assign';
import config from 'polythene/config/default';

export default Object.assign({}, config, {
    // this site's base colors
    color_primary: '255, 152, 0', // orange 500
    color_primary_active: '251, 140, 0', // orange 600
    color_primary_dark: '245, 124, 0', // orange 700
    color_primary_faded: '255, 183, 77', // orange 300
    color_primary_foreground: '255, 255, 255'
});
~~~

* Point the path from `polythene/config/config` (which is a conduit for the default config) to your custom config file. Setting the path uses the same mechanism as "Custom styles: Configuration".

#### Use with Browserify

Use the [pathmodify](https://www.npmjs.com/package/pathmodify) plugin to change the default config path to your custom file:

~~~javascript
browserify().plugin(pathmodify, {
    mods: [
        pathmodify.mod.id('polythene/config/config', 'app/config/config')
    ]
})
~~~

Embedded in a build script:

~~~javascript
// build script
// ...
var pathmodify = require('pathmodify');

function bundle(entries, outfile) {
    browserify({
        entries: entries,
        extensions: ['.es6.js'],
        paths: ['.', 'node_modules']
    })
    .plugin(pathmodify, {
        mods: [
            pathmodify.mod.id('polythene/config/config', 'app/config/config')
        ]
    })
    .transform(babelify)
    ...
};
~~~

#### Use with SystemJS / jspm

In `config.js`, change the path in the map variables:

~~~javascript
...
map: {
    'polythene/config/config': 'app/config/config'
    ...
}
~~~
