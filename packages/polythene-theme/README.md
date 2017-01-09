# Theme

Polythene is an implementation of Google"s Material Design, but it can also be used with different styling.

This page describes a number of ways to create customizations.

TL;DR: The simplest way to create a custom blue button:

~~~javascript
import { button } from "polythene-button";

button.theme("blue-button", {
  color_light_background: "blue",
  color_light_text: "white"
});

m(button, {
  label: "Blue Button",
  class: "blue-button"
});
~~~ 


## Customization options

There are multiple ways to customize, and they be be used side by side:

1. **Style variables** - create styles by passing configuration variables
1. **Deriving components** - build on top of existing components: to set new defaults or styling
1. **Custom CSS** - to enhance existing styles
1. **Theme file** - define styles for multiple components at once, or for the entire app




## Style variables

Polythene components are styled with variables - comparable to variables in Sass or Less.

Each component - at least the ones that are styled - contains a `vars` module that specifies measurements and colors. For example, for Icon:

~~~javascript
// polythene-icon/src/theme/vars.js
import { vars } from "polythene-theme";

export default {
  size_small:   vars.unit_icon_size_small,
  size_regular: vars.unit_icon_size,
  size_medium:  vars.unit_icon_size_medium,
  size_large:   vars.unit_icon_size_large,
  color_light:  "currentcolor",
  color_dark:   "currentcolor"
};
~~~

The variables like `unit_icon_size_small` that are imported from `polythene-theme` are (one import further) specified in `polythene-core/src/variables.js`.


### Styling components with variables 

A component can be given an extra style using this pattern:

~~~javascript
component.theme(className, vars)
~~~

Use a sufficiently unique class name to not clash with other components. `vars` is a subset of the component's theme variables. 

For example, to create large icons for the component with class "app-icon", we write:

~~~javascript
// app.js
import { icon } from "polythene-icon";

const unitSize = 20;
icon.theme("app-icon", {
  size_small:   1 * unitSize,
  size_regular: 2 * unitSize,
  size_medium:  3 * unitSize,
  size_large:   4 * unitSize
});

// Show the large icon
m(icon, {
  class: "app-icon",
  type: "large"
});
~~~

Likewise, to create a blue button, write:

~~~javascript
// app.js
import { button } from "polythene-button";

button.theme("blue-button", {
  color_light_background: "#2196F3",
  color_light_text: "#fff"
  // note that we only need to list the properties that differ
});

// Show the blue button
m(button, {
  label: "Blue Button",
  class: "blue-button"
});
~~~ 




## Deriving components

A deriving component - also Higher Order Component - is a wrapper that takes a component and returns a new component. The new component contains custom settings or behaviour.

Let's say we want to create a flat, bordered secondary button:

~~~javascript
// secondary-button.js
import m from "mithril";
import { button } from "polythene-button";

export const secondaryButton = {
  view: vnode => m(button, {
    class: "secondary-button",
    borders: true,
    ...vnode.attrs // pass on other options
  })
};
~~~

To set the style using variables, use the original component's `theme` function:

~~~javascript
button.theme("secondary-button", {
  color_light_border: "#ddd",
  color_light_background: "#fff"
});
~~~

Or make the new component's `theme` function point to the original:

~~~javascript
export const secondaryButton = {
  view: vnode => m(button, {
    class: "secondary-button",
    borders: true,
    ...vnode.attrs
  }),
  theme: button.theme
};

secondaryButton.theme("secondary-button", {
  color_light_border: "#ddd",
  color_light_background: "#fff"
});
~~~

Then use the new component:

~~~javascript
// app.js
import { secondaryButton } from "./secondary-button";

m(secondaryButton, {
  label: "Help"
});
~~~



## Custom CSS

Writing CSS gives you more options for styling, but requires some knowledge about the component's generated HTML structure. Component class names are documented in each README.


### 1. Using CSS styles

You can load extra styles as a CSS file and attach that to the head, or use your bundler / module loader's preferred method.

All components have a `class` attribute. For example:

~~~javascript
m(button, {
  label: "Send",
  class: "send-button"
})
~~~

To set this button's background color: 

~~~css
.send-button .pe-button__content {
  background-color: #FF1744;
  color: white;
}
~~~

Note: to change a style of the component's base class, you must add the base class:

~~~css
.pe-button.submit-button {
  color: #444;
}
~~~


### 2. Using Javascript to CSS

Polythene uses [j2c](http://j2c.py.gy) to write styles directly to the head of the page. A Polythene j2c style object looks like this:

~~~javascript
[{
  ".send-button .pe-button__content": {
    "background-color": "#FF1744",
    color: "white"
  }
}]
~~~

`polythene-css` contains `styler` that takes the list of style objects to create the CSS.

For example:

~~~javascript
import { styler } from "polythene-css";

const buttonStyles = [
  {
    ".send-button .pe-button__content": {
      "background-color": "#FF1744",
      color: "white"
    },
    ".info-button .pe-button__content": {
      "background-color": "#2196f3",
      color: "white"
    }
  }
];

styler.add("app-buttons", buttonStyles);
~~~

The first property passed to styler is the style element id.

Note that using Javascript for styling makes it very simple to create your own mixins:

~~~javascript
const colors = {
  send: "#FF1744",
  info: "#2196f3"
};
const makeButton = name => ({
// v note the extra space to indicate a child element
  " .pe-button__content": {
    "background-color": colors[name],
    color: "white"
  }
});
const buttonStyles = [
  {
    ".send-button": makeButton("send"),
    ".info-button": makeButton("info")
  }
];

styler.add("app-buttons", buttonStyles);
~~~


### Writing CSS for deriving components

Also deriving components can be styled with CSS.

We only need to take care of the CSS specificity level; using the same "secondary-button" example, the generated component class list becomes:

~~~html
class="pe-button pe-button--text pe-button--borders secondary-button"
~~~

So simply writing `.secondary-button {...}` won't work - we need to include base class `pe-button` in the new style to get the proper specificity level.

~~~javascript
// secondary-button.js
import m from "mithril";
import { button } from "polythene-button";
import { styler } from "polythene-css";

const styles = [{
  ".pe-button.secondary-button .pe-button__content": {
    "background-color": "#fff",
    "border-color": "#ddd"
  }
}];
styler.add("secondary-button", styles);

export const secondaryButton = {
  view: vnode => m(button, {
    class: "secondary-button",
    borders: true,
    ...vnode.attrs
  })
};

// app.js
import { secondaryButton } from "./secondary-button";

m(secondaryButton, {
  label: "Help"
});
~~~







## Custom theme file

Use this method to set global theme variables, such as the primary action color. Or to use the mechanism described at "Style variables" for multiple components at once.


A theme file manages:

1. Overrides of the global app variables
1. Overrides of (multiple) component styles, in a similar way as described at "Style variables" above

A theme module can implement either one or both.

The skeleton module is:

~~~javascript
// custom-theme.js
import { defaultVariables } from "polythene-core";

export const vars = defaultVariables;
export const styles = {};
~~~


### Setting the global primary color

The variables module `polythene-core/src/variables.js` contains `color_primary`. We change it with:

~~~javascript
// custom-theme.js
import { defaultVariables } from "polythene-core";

export const vars = {
  ...defaultVariables
  , color_primary: "255, 152, 0" // new base color: orange 500
};
export const styles = {}; // Keep component styles unchanged other than the primary color
~~~


### Setting the component style

~~~javascript
// custom-theme.js
import { defaultVariables } from "polythene-core";

export const vars = defaultVariables; // Keep global variables as-is

const icon_unit_component = 20;

export const styles = {
  icon: vars => {
    const newVars = {
      ...vars, // keep other variables
      size_small:   1 * icon_unit_component,
      size_regular: 2 * icon_unit_component,
      size_medium:  3 * icon_unit_component,
      size_large:   4 * icon_unit_component
    };
    return [
      { "": vars }, // default Polythene icon (keep this)
      { ".my-icon": newVars }
    ];
  }
};
~~~

Each component function takes a variable object and returns a list of style objects, where the key is the class name.

* "" is the default (unscoped) value; leave this out to remove Polythene's style altogether.
* You can also add custom scoping, for example: `".home .my-icon"`



### Pointing the app to the theme file

The final step is to let the application read our custom theme file. For this, the path to `polythene-theme` needs to be set to a new file location.

Each bundler has a different method - it is generally called map or alias.



#### Use with Rollup

Use the [rollup-plugin-pathmodify](https://www.npmjs.com/package/rollup-plugin-pathmodify) plugin

~~~javascript
// rollup.config.js
// ...
{
  plugins: [
    pathmodify({
      aliases: [{
        id: "polythene-theme",
        resolveTo: __dirname + "/custom-theme.js"
      }]
    }),
  ]
}
~~~

#### Use with Browserify

Use the [pathmodify](https://www.npmjs.com/package/pathmodify) plugin to change the default config path to your custom file:

~~~javascript
browserify().plugin(pathmodify, {
  mods: [
    pathmodify.mod.id("polythene-config", "app/custom-theme")
  ]
})
~~~


#### Use with SystemJS / jspm

In `config.js`, change the path in the map variables:

~~~javascript
...
map: {
  "polythene-theme": "app/custom-theme"
  ...
}
~~~



