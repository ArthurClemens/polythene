[Back to Theme main page](../theming.md)

# Styling with variables

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Introduction](#introduction)
- [Styling components with variables](#styling-components-with-variables)
  - [Using addStyle](#using-addstyle)
  - [Performance](#performance)
  - [Only the minimum of CSS](#only-the-minimum-of-css)
  - [Themed behaviors](#themed-behaviors)
  - [Using scope](#using-scope)
  - [Using media queries](#using-media-queries)
  - [Function `addStyle`](#function-addstyle)
  - [Under the hood](#under-the-hood)
- [Choosing CSS-in-JS or CSS files](#choosing-css-in-js-or-css-files)
- [Examples](#examples)
  - [Mithril example](#mithril-example)
  - [React JSX example](#react-jsx-example)
- [Global styling by overriding Polythene defaults](#global-styling-by-overriding-polythene-defaults)
- [List of all variables](#list-of-all-variables)
  - [Global variables](#global-variables)
  - [Component variables](#component-variables)

<!-- /MarkdownTOC -->


<a id="introduction"></a>
## Introduction

Polythene components are styled with variables that specify the sizes and colors for that component. The variables are used to create a component style, to be written by JavaScript or to a CSS file.

Component style variables are located in each component's CSS `vars.js` file (see the complete [list of all variables](#list-of-all-variables) below).

For example, the variables file for Icon contains:

~~~javascript
// polythene-css-icon/src/vars.js
import { vars } from "polythene-theme"

export default {
  size_small:   vars.unit_icon_size_small,  // 16
  size_regular: vars.unit_icon_size,        // 24
  size_medium:  vars.unit_icon_size_medium, // 32
  size_large:   vars.unit_icon_size_large,  // 40
  color_light:  "currentcolor",
  color_dark:   "currentcolor"
}
~~~

"Global" variables such as `unit_icon_size_small` are imported from `polythene-theme` (which gets them from package `polythene-style`). To override these base variables, see [Global theme file](global-theme-file.md).



<a id="styling-components-with-variables"></a>
## Styling components with variables 

### Using addStyle

Each component's CSS functions can be accessed with the naming pattern `{ComponentName}CSS`:

~~~javascript
import { IconCSS } from "polythene-css"
~~~

Call `addStyle` to create a style:

~~~javascript
IconCSS.addStyle(selector, {
  // CSS style key value pairs
})
~~~

The `selector` is usually a class name.

For example, to set the size and color of an icon:

~~~javascript
IconCSS.addStyle(
  ".purple-icon",
  {
    // Note that we only need to list the variables that differ
    size_regular: 44,
    color_light:  "purple"
  }
)
~~~


Then use that style for a specific component instance by using the same selector.

With Mithril:

~~~javascript
m(Icon, { className: "purple-icon" })
~~~

With React JSX:

~~~jsx
<Icon className="purple-icon" />
~~~


### Performance

The above method is the easiest way to create a new style, but any import from `polythene-css` will trigger each component to add its styles to the page head.

This is not a problem if you are using CSS-in-JS anyway, but when you are using CSS files instead, this is unnecessary overhead.

Two options to keep the impact small:

1. Keep all CSS in files: [write custom CSS to a file](../css.md#theming-options)
2. Import from the component's CSS package:

~~~javascript
import { addStyle } from "polythene-css-icon"

addStyle(
  ".purple-icon",
  {
    color_light:  "purple"
  }
)
~~~



### Only the minimum of CSS

When using `addStyle` (or `getStyle` when [writing CSS to a file](../css.md#theming-options)) only a minimal subset of CSS is created based on the passed variables.

Tip 1: When using a custom style for a component that will be displayed on a dark tone, be sure to also add dark tone color variables:

~~~javascript
ButtonCSS.addStyle(".my-button", {
  color_light_text: "#333",
  color_dark_text:  "#fff",
});
~~~

Tip 2: To use all default variables, pass `general_styles: true`. This will read the default variables, plus the ones added with addStyle/getStyle. The resulting CSS will be bigger of course.


<a id="themed-behaviors"></a>
### Themed behaviors

A number of components allows to change its behavior using style variables. Some examples:

Create a Contained Button with a drop shadow:

~~~javascript
import { ButtonCSS } from "polythene-css"

ButtonCSS.addStyle(
  ".contained-button",
  {
    contained:              true,
    color_light_background: "#673ab7",
    color_light_text:       "#fff",
    shadow_depth:           1,
  }
)
~~~

Create a cover Drawer:

~~~javascript
import { DrawerCSS } from "polythene-css"

DrawerCSS.addStyle(
  ".cover-drawer",
  {
    cover: true
  }
)
~~~

Create a modal Dialog (disabling clicking the background) with a backdrop: 

~~~javascript
import { DialogCSS } from "polythene-css"

DialogCSS.addStyle(
  ".modal-dialog",
  {
    modal:    true,
    backdrop: true
  }
)
~~~

Create a Menu with a backdrop:

~~~javascript
import { MenuCSS } from "polythene-css"

MenuCSS.addStyle(
  ".menu-backdrop",
  {
    backdrop: true
  }
)
~~~

### Using scope

To restrict a theme style to a CSS scope, add parameter `scope` as attribute of the "additional options":

~~~javascript
import { ListTileCSS } from "polythene-css"

ListTileCSS.addStyle(
  ".navigation-list-tile",
  {
    // Style variables:
    font_size_title: 21
  },
  {
    // Additional options:
    scope: ".main-navigation"
  }
)
~~~

<a id="using-media-queries"></a>
### Using media queries

To restrict a theme style to certain screen conditions, you can pass an additional [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) parameter.


Conceptually, this is very close to writing CSS with media queries, but it has the benefit that you don't need to know the internal component structure - you still work with style variables.

Pass the media query string as attribute of the "additional options":

~~~javascript
import { IconCSS } from "polythene-css"

IconCSS.addStyle(
  ".small-screen-icon",
  {
    // Style variables:
    size_regular: 16
  },
  {
    // Additional options:
    mediaQuery: "@media all and (max-width: 420px)"
  }
)
~~~

It is possible to combine styles. This card has a colored background, and at small screen sizes the image is displayed smaller:

~~~javascript
CardCSS.addStyle(
  ".themed-card",
  {
    color_dark_main_background: "#B89E58",
    color_dark_title_text:      "#fff",
    color_dark_subtitle_text:   "#fff"
  }
),
CardCSS.addStyle(
  ".small-image-card",
  {
    image_size_medium: 90
  },
  {
    mediaQuery: "@media all and (max-width: 420px)"
  }
)
~~~

Then apply the styles by setting the class name:

~~~javascript
m(Card, { className: "themed-card small-image-card" })
~~~




<a id="function-addstyle"></a>
### Function `addStyle`

~~~javascript
addStyle(selector, vars, options)
~~~

| **Option**   | **Required** | **Type** | **Description** |
| ------------ | ------------ | -------- | --------------- |
| **selector** | required     | String   | CSS selector; using a class selector is the most convenient because of the reuse in component option `className` |
| **vars**     | required     | Object   | The component's theme variables, or a subset thereof |
| **options.mediaQuery** | optional | String | Media query that wraps the selector |


<a id="under-the-hood"></a>
### Under the hood

Component variables are passed on to CSS creation modules (usually "layout" and "colors") that take variables and return a style object. The style object is converted to a style sheet by [j2c](http://j2c.py.gy).

Only a minimal stylesheet is created, based on the set of passed variables. To recreate all styles, pass `general_styles: true`.


<a id="choosing-css-in-js-or-css-files"></a>
## Choosing CSS-in-JS or CSS files

See [Polythene CSS](../css.md) for guidelines and instructions.



<a id="examples"></a>
## Examples


<a id="mithril-example"></a>
### Mithril example

If we want to create large icons:

~~~javascript
import { Icon } from "polythene-mithril"
import { IconCSS } from "polythene-css"

const unitSize = 20

IconCSS.addStyle(
  ".app-icon",
  {
    size_large: 4 * unitSize
  }
)

// Show the large icon
m(Icon, {
  className: "app-icon",
  size: "large" // results in 4 * unitSize
})
~~~

To create a blue button on a dark background:

~~~javascript
import { Button } from "polythene-mithril"
import { ButtonCSS } from "polythene-css"

ButtonCSS.addStyle(
  ".blue-on-dark-button",
  {
    color_dark_text: "#1976D2"
  }
)

// Show the blue button on a dark background
m(".pe-dark-tone", 
  m(Button, {
    className: "blue-on-dark-button",
    label: "Blue Button"
  })
)
~~~

To make a Menu appear full width on a small screen:

~~~javascript
import { Menu } from "polythene-mithril"
import { MenuCSS } from "polythene-css"

MenuCSS.addStyle(
  ".small-screen-menu",
  {
    top_menu: true,
    backdrop: true,                                           // add a backdrop
    animation_hide_origin_effect_css: "transform: scale(1);", // prevent the menu fron scaling
    height: "50vh !important",                                // use !important to override the component height option (if set)
  },
  {
    mediaQuery: "@media all and (max-width: 480px)"
  }
)

// Show the menu
m(Menu, {
  className: "small-screen-menu",
  height: 150,
  // ...
})
~~~


<a id="react-jsx-example"></a>
### React JSX example

If we want to create large icons:

~~~jsx
import { Icon } from "polythene-react"
import { IconCSS } from "polythene-css"

const unitSize = 20

IconCSS.addStyle(
  ".app-icon",
  {
    size_large: 4 * unitSize
  }
)

// Show the large icon
<Icon className="app-icon" size="large" />
~~~

To create a blue button on a dark background:

~~~jsx
import { Button } from "polythene-react"
import { ButtonCSS } from "polythene-css"

ButtonCSS.addStyle(
  ".blue-on-dark-button",
  {
    color_dark_text: "#1976D2"
  }
)

// Show the blue button on a dark background
<div className="pe-dark-tone">
  <Button
    className="blue-on-dark-button"
    label="Blue Button"
  />
</div>
~~~

To make a Menu appear full width on a small screen:

~~~jsx
import { Menu } from "polythene-react"
import { MenuCSS } from "polythene-css"

MenuCSS.addStyle(
  ".small-screen-menu",
  {
    top_menu: true,
    backdrop: true,                                           // add a backdrop
    animation_hide_origin_effect_css: "transform: scale(1);", // prevent the menu fron scaling
    height: "50vh !important",                                // use !important to override the component height option
  },
  {
    mediaQuery: "@media all and (max-width: 480px)"
  }
)

// Show the menu
<Menu
  className="small-screen-menu"
  height={150}
  {/* ... */}
/>
~~~

<a id="global-styling-by-overriding-polythene-defaults"></a>
## Global styling by overriding Polythene defaults

Using the same method it is possible to override the default styling, just by using Polythene classnames:

~~~javascript
IconCSS.addStyle(".pe-icon", {
  color_light:  "purple"
})
~~~

To override global variables such as the app's primary action color, see [Global theme file](global-theme-file.md).



<a id="list-of-all-variables"></a>
## List of all variables

<a id="global-variables"></a>
### Global variables

* [polythene-style](../../packages/polythene-style/src/variables.js)

<a id="component-variables"></a>
### Component variables

Variables are defined in each module's `vars.js` file.

* [polythene-css-base-spinner](../../packages/polythene-css-base-spinner/src/vars.js)
* [polythene-css-button-group](../../packages/polythene-css-button-group/src/vars.js)
* [polythene-css-button (Contained)](../../packages/polythene-css-button/src/contained-button/vars.js)
* [polythene-css-button (Text)](../../packages/polythene-css-button/src/text-button/vars.js)
* [polythene-css-card](../../packages/polythene-css-card/src/vars.js)
* [polythene-css-checkbox](../../packages/polythene-css-checkbox/src/vars.js)
* [polythene-css-dialog-pane](../../packages/polythene-css-dialog-pane/src/vars.js)
* [polythene-css-dialog](../../packages/polythene-css-dialog/src/vars.js)
* [polythene-css-drawer](../../packages/polythene-css-drawer/src/vars.js)
* [polythene-css-fab](../../packages/polythene-css-fab/src/vars.js)
* [polythene-css-icon-button](../../packages/polythene-css-icon-button/src/vars.js)
* [polythene-css-icon](../../packages/polythene-css-icon/src/vars.js)
* [polythene-css-ios-spinner](../../packages/polythene-css-ios-spinner/src/vars.js)
* [polythene-css-list-tile](../../packages/polythene-css-list-tile/src/vars.js)
* [polythene-css-list](../../packages/polythene-css-list/src/vars.js)
* [polythene-css-material-design-progress-spinner](../../packages/polythene-css-material-design-progress-spinner/src/vars.js)
* [polythene-css-material-design-spinner](../../packages/polythene-css-material-design-spinner/src/vars.js)
* [polythene-css-menu](../../packages/polythene-css-menu/src/vars.js)
* [polythene-css-notification](../../packages/polythene-css-notification/src/vars.js)
* [polythene-css-ripple](../../packages/polythene-css-ripple/src/vars.js)
* [polythene-css-search](../../packages/polythene-css-search/src/vars.js)
* [polythene-css-selection-control](../../packages/polythene-css-selection-control/src/vars.js)
* [polythene-css-shadow](../../packages/polythene-css-shadow/src/vars.js)
* [polythene-css-slider](../../packages/polythene-css-slider/src/vars.js)
* [polythene-css-snackbar](../../packages/polythene-css-snackbar/src/vars.js)
* [polythene-css-svg](../../packages/polythene-css-svg/src/vars.js)
* [polythene-css-switch](../../packages/polythene-css-switch/src/vars.js)
* [polythene-css-tabs](../../packages/polythene-css-tabs/src/vars.js)
* [polythene-css-textfield](../../packages/polythene-css-textfield/src/vars.js)
* [polythene-css-toolbar](../../packages/polythene-css-toolbar/src/vars.js)

