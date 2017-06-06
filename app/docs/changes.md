# Change log

## Version 0.3

This is a maintenance release with some changes to ease migration to version 1.0.


### Repository setup

Polythene is now a monorepo using Lerna.


### Importing components 

The ideomatic way to import components is now by importing from module `polythene`. 

0.2:

```javascript
import styler from 'polythene/button/button';
import button from 'polythene/button/button';
```

0.3:

```javascript
import { Button } from 'polythene';

// you can also still use
import button from 'polythene/button/button';
```

Version 0.2 are deprecated and won't be supported in Polythene 1.0.


### Material Design styles

```javascript
import { addRoboto, addTypography } from 'polythene-motif';

addRoboto();
addTypography();
```

### Layout classes

Common and flexbox classes, for instance to use

```javascript
m(".layout.vertical", ...)
```

Import using:

```javascript
import { addLayoutStyles } from 'polythene-utilities';

addLayoutStyles();
```


### SVG dynamic loading removed

Dynamic loading and preloading have been removed, as these are infrequent use cases.


### Custom theme

The way custom styles are configured ("Theme: Custom styles as configuration") has changed.

In 0.2 the configurable path was `polythene/config/custom`. In 0.3 the configuration has moved to package `polythene-theme`, so Polythene needs to get pointed to the override path of `polythene-theme`.

Example webpack `alias` configuration (when the custom theme is located in `src/theme/index.js`):

```javascript
resolve: {
  alias: {
    "polythene-theme": path.resolve(__dirname, "../src/theme")
  }
},
```

Example theme file that defines a global primary color, and a different button for selector `.custom-theme`:

```javascript
// theme override

import { defaultVariables } from "polythene-core";

export const defaults = {
  ...defaultVariables
  , color_primary: "255, 152, 0" // new base color: orange 500
};

export const config = {
  button: vars => {
    const mainColor = '#e4521b';
    const textColor = '#fff';
    const newVars = Object.assign(
      {},
      vars,
      {
        border_radius:                        0,
        color_light_raised_normal_background: mainColor,
        color_light_raised_normal_text:       textColor,
        color_dark_raised_normal_background:  mainColor,
        color_dark_raised_normal_text:        textColor
      }
    );
    return [
        { '': vars }, // default vars for all pages
        { '.custom-theme ': newVars } // custom vars for this selector
    ];
  }
};
```




### Module versions

* The `umd` transpiled module is `polythene/index.js`
* The `es` transpiled module is `polythene/index.mjs`
