TO UPDATE

# Theme

Polythene is an implementation of Google's Material Design, but it can also be used with different styling.

This page describes a number of ways to create customizations.

TL;DR: The preferred way to create a custom blue button:

~~~javascript
import { Button } from "polythene-mithril";

Button.theme(".blue-button", {
  color_light_background: "blue",
  color_light_text:       "white"
});

m(Button, {
  className: "blue-button",
  label: "Blue Button"
});
~~~ 



## Customization options

There are multiple ways to customize, and they be be used side by side:

1. **Dark / light**
1. **Style variables** - create styles by passing configuration variables
1. **Deriving components** - build on top of existing components: to set new defaults or styling
1. **Custom CSS** - to enhance existing styles
1. **Theme file** - set global app variables



## 1. Dark / light

Many examples on this page have variables such as `color_light` and `color_dark`. A component is rendered light or dark with option `tone`.

* when not set, the component is rendered normally, assuming a light background
* `dark`: the component is displayed inverse, with light details on a dark background; this sets CSS class `pe-dark-tone`
* `light`: use this to locally override a dark tone so that the component is rendered normally; this sets CSS class `pe-light-tone`

To render a button on a dark background:

~~~javascript
m(".pe-dark-tone",
  m(button, {
    label: "Button"
  })
);
~~~

or:

~~~javascript
m(".some-dark-background",
  m(button, {
    label: "Button",
    tone: "dark"
  })
);
~~~

To render a normal button on a dark background:

~~~javascript
m(".pe-dark-tone",
  m(button, {
    label: "Button",
    tone: "light"
  })
);
~~~

When you are never using a dark tone, you can omit the `color_dark` variables in your customizations.



## 2. Variables

Polythene components - at least the ones that are styled - are styled with variables. Each component contains a `vars` module that specifies measurements and colors.

For example, for Icon:

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

"Global" variables such as `unit_icon_size_small` are imported from `polythene-theme`, which imports the base values from `polythene-core-essentials/src/variables.js`. To override these base variables, see "Theme file" on this page.


### Styling components with variables 

Component variables are passed on to "layout" and "colors", modules that take variables and return a style object. The style object is converted to a style sheet by [j2c](http://j2c.py.gy).

To create additional styles for a component, use this pattern:

~~~javascript
component.theme(selector, vars)
~~~

* `selector`: CSS selector, but using a class selector is the most convenient because you can use the components `className` option
* `vars`: the component's theme variables, or a subset thereof

For example, to create large icons for the component with class "app-icon", we write:

~~~javascript
// app.js
import icon from "polythene-icon";

const unitSize = 20;
icon.theme(".app-icon", {
  size_small:   1 * unitSize,
  size_regular: 2 * unitSize,
  size_medium:  3 * unitSize,
  size_large:   4 * unitSize
  // note that we only need to list the properties that differ
});

// Show the large icon
m(icon, {
  className: "app-icon",
  type: "large" // results in 4 * unitSize
});
~~~

To create a blue button on a dark background:

~~~javascript
// app.js
import button from "polythene-mithril-button";

button.theme(".blue-on-dark-button", {
  color_dark_text: "#1976D2"
});

// Show the blue button on a dark background
m(".pe-dark-tone", 
  m(button, {
    className: "blue-on-dark-button",
    label: "Blue Button"
  })
);
~~~ 



## 3. Deriving components

A deriving component - also Higher Order Component - is a wrapper that takes a component and returns a new component. The new component contains custom settings or behaviour.

Let's say we want to create a flat, bordered secondary button:

~~~javascript
// secondary-button.js
import m from "mithril";
import button from "polythene-mithril-button";

export const secondaryButton = {
  view: vnode => m(button, {
    className: "secondary-button",
    borders: true,
    ...vnode.attrs // pass on other options
  })
};
~~~

To set the style using variables, use the original component's `theme` function:

~~~javascript
button.theme(".secondary-button", {
  color_light_border: "#ddd",
  color_light_background: "#fff"
});
~~~

Or make the new component's `theme` function point to the original:

~~~javascript
export const secondaryButton = {
  view: vnode => m(button, {
    className: "secondary-button",
    borders: true,
    ...vnode.attrs
  }),
  theme: button.theme
};

secondaryButton.theme(".secondary-button", {
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
  // class is already set by secondaryButton component
});
~~~



## 4. Custom CSS

Writing CSS gives you more options for styling, but requires some knowledge about the component's generated HTML structure.

Component class names are documented in each README. The structure of the generated HTML can be viewed in the test package, found in `polythene/packages/test`.


### 1. Using CSS styles

You can load extra styles as a CSS file and attach that to the head, or use your bundler / module loader's preferred method.

All components have a `class` attribute. For example:

~~~javascript
m(button, {
  className: "send-button",
  label: "Send"
})
~~~

To set this button's background color: 

~~~css
.send-button .pe-button__content {
  background-color: #FF1744;
  color: white;
}
~~~

Note: to change a style of the component's base class, you must add the base className:

~~~css
.pe-button.submit-button {
  color: #444;
}
~~~


### 2. Using Javascript-to-CSS

Polythene uses [j2c](http://j2c.py.gy) to write styles directly to the head of the page. A Polythene j2c style object looks like this:

~~~javascript
[{
  ".send-button .pe-button__content": {
    "background-color": "#FF1744",
    color: "white"
  }
}]
~~~

Package `polythene-core-css` contains `styler` that takes the list of style objects to create the CSS.

For example:

~~~javascript
import { styler } from "polythene-core-css";

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
class="pe-button pe-text-button pe-button--borders secondary-button"
~~~

So simply writing `.secondary-button {...}` won't work - we need to include base class `pe-button` in the new style to get the proper specificity level.

~~~javascript
// secondary-button.js
import m from "mithril";
import button from "polythene-mithril-button";
import { styler } from "polythene-core-css";

const styles = [{
  ".pe-button.secondary-button .pe-button__content": {
    "background-color": "#fff",
    "border-color": "#ddd"
  }
}];
styler.add("secondary-button", styles);

export const secondaryButton = {
  view: vnode => m(button, {
    className: "secondary-button",
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



## 5. Custom theme file

Use this method to set global theme variables, such as the primary action color. 

### Setting the global primary color

The variables module `polythene-core-essentials/src/variables.js` contains `color_primary`. We change it with:

~~~javascript
// custom-theme.js
import { defaultVariables } from "polythene-core-essentials";

export const vars = {
  ...defaultVariables
  , color_primary: "255, 152, 0" // new base color: orange 500
};
~~~


### Pointing the app to the theme file

The final step is to let the application read our custom theme file. For this, the path to `polythene-theme` needs to be set to a new file location.

Each bundler has a different method to to this - it is generally called map or alias.

#### Use with Webpack

~~~javascript
// webpack.config.js
// ...
{
  resolve: {
    alias: {
      "polythene-theme": path.resolve(__dirname, "app/custom-theme.js") // when config is in the project root
    }
  }
}
~~~

#### Use with Rollup

Use the [rollup-plugin-pathmodify](https://www.npmjs.com/package/rollup-plugin-pathmodify) plugin:

~~~javascript
// rollup.config.js
// ...
{
  plugins: [
    pathmodify({
      aliases: [{
        id: "polythene-theme",
        resolveTo: process.cwd() + "/app/custom-theme.js"
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

