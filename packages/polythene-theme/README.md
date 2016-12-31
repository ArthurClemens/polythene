# Theme

Polythene is an implementation of Google"s Material Design, but it can also be used with different styling.

This page describes a number of ways to create customizations.



## Customization options

There are multiple ways to customize, and they be be used side by side:

1. **Custom CSS** - to enhance existing styles
1. **Deriving components** - to set new defaults or styling
1. **Style variables** - to pass configuration variables for one or more components or the entire app


## Custom CSS

Use this method to quickly enhance existing styles.

### 1. Using CSS

You can load extra styles as a CSS file and attach that to the head, or use your bundler / module loader's preferred method.

Component classes are documented in each README.

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

`polythene-css` contains `styler` that takes the list of style objects to create CSS.

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

Note that using Javascript for styling makes it trivial to create your own mixins:

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



## Deriving components

A deriving component - also Higher Order Component - is a wrapper that takes a component and returns a new component. The new component contains custom settings or behaviour.

Let's say we want to create a flat, bordered secondary button:

~~~javascript
const secondaryButton = {
  view: vnode => m(button, {
    class: "secondary-button",
    borders: true,
    raised: false,
    ...vnode.attrs
  })
};
~~~

To make this reusable, export this from a new component module and add the styles.

Because the class list becomes:

~~~html
class="pe-button pe-button--text pe-button--borders secondary-button"
~~~

we need to include base class `pe-button` in the new style.

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
    raised: false,
    ...vnode.attrs
  })
};

// app.js
import { secondaryButton } from "./secondary-button";

m(secondaryButton, {
  label: "Help"
});
~~~



## Style variables

Polythene components are styled with variables - comparable to variables in Sass or Less.

Each component - at least the ones that are styled - contains a `vars` module that specifies measurements and colors. For example, Icon's `vars.js`:

~~~javascript
import { vars } from "polythene-theme";

export default {
  size_small:   vars.unit_icon_size_small,
  size_regular: vars.unit_icon_size,
  size_medium:  vars.unit_icon_size_medium,
  size_large:   vars.unit_icon_size_large    
};
~~~

The default values are specified in `polythene-core` and can be overridden in a custom theme module. That's what we will do next.


### Custom theme file

A theme module exports `vars` and `styles`:

* `vars`: overrides the default values defined in `polythene-core`
* `styles`: an object with a function for each component, that takes the component's variables and returns a list of styles

You can implement either one or both.

The skeleton module is:

~~~javascript
// custom-theme.js
import { defaultVariables } from "polythene-core";

export const vars = defaultVariables;
export const styles = {};
~~~

Let's say we wanted to:
* change the app's unit size from 8px to 20px
* set the app's primary color to orange
* create larger icons

~~~javascript
// custom-theme.js
import { defaultVariables } from "polythene-core";

const grid_unit_component = 20;

export const vars = {
  ...defaultVariables,
  grid_unit_component, // new base unit
  color_primary: "255, 152, 0" // orange 500
};

export const styles = {
  icon: vars => {
    const newVars = {
      size_small: grid_unit_component,
      size_regular: 2 * grid_unit_component,
      size_medium: 3 * grid_unit_component,
      size_large: 4 * grid_unit_component
    };
    return [
      { "": vars }, // default Polythene icon (keep this)
      { ".my-icon": newVars }
    ];
  }
};
~~~

Several notes to return values:

* `""` - this is the default (unscoped) value; leave this out to remove Polythene's style altogether
* `".my-icon"` - the styles will be applied to this class
* Add custom scoping, for example: `".home .my-icon"`



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
        resolveTo: process.cwd() + "/custom-theme.js"
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


