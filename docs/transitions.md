# Transitions

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Introduction](#introduction)
- [Defaults](#defaults)
- [Setting transitions](#setting-transitions)
  - [Component options](#component-options)
  - [Scripted component options with `transitions`](#scripted-component-options-with-transitions)
  - [Themed \(using configuration variables\)](#themed-using-configuration-variables)
  - [Custom CSS](#custom-css)
- [Transient components](#transient-components)
- [Changes](#changes)
  - [Converting from Polythene 1.0](#converting-from-polythene-10)

<!-- /MarkdownTOC -->

<a id="introduction"></a>
## Introduction

Some components (such as Dialogs) are displayed only when needed. The way the component appears and disappears can be configured in different ways:

1. Simple component options
1. Scripted component options
1. Themed (using configuration variables) 
1. Writing custom CSS

These different methods can be combined. The order of evaluation follows the listed order above. For instance, if a component option is not set, that setting will be read from the component style (if any).

See the [list of transient components](#transient-components) below.


<a id="defaults"></a>
## Defaults

All transient components use CSS for their transitions (with the exception of Snackbar which uses JavaScript). 

CSS is created from component style variables, located in each component's `vars.js` file. For instance for Dialog:

~~~javascript
// polythene-core-dialog/src/vars.js
animation_delay:                 "0s",
animation_duration:              ".220s",
animation_timing_function:       "ease-in-out",
animation_hide_css:              "opacity: 0;",
animation_show_css:              "opacity: 1;",
~~~

Any method listed above will override these defaults.


<a id="setting-transitions"></a>
## Setting transitions

<a id="component-options"></a>
### Component options

| **Parameter**    |  **Required**  | **Type** | **Default** | **Description** |
| ---------------- | -------------- | -------- | ----------- | --------------- |
| **showDuration** | optional       | Number   | `.240`      | The show transition duration in seconds |
| **hideDuration** | optional       | Number   | `.240`      | The hide transition duration in seconds |
| **showDelay**    | optional       | Number   | `0`         | The show delay duration in seconds |
| **hideDelay**    | optional       | Number   | `0`         | The hide delay duration in seconds |
| **showTimingFunction** | optional | String   |             | The show timing function; see [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) |
| **hideTimingFunction** | optional | String   |             | The hide timing function; see [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) |
| **didShow**      | optional       | Function `(id::String) -> undefined` | | Callback function that is called when the show transition is done |
| **didHide**      | optional       | Function `(id::String) -> undefined` | | Callback function that is called when the hide transition is done |
| **transitions**  | optional       | Object   |             | Object with functions for keys `show` and `hide`; see below for an example |

<a id="example-with-simple-transition-settings"></a>
#### Example with simple transition settings

~~~javascript
Dialog({
  // ...
  showDelay:          0,
  showDuration:       .9,
  showTimingFunction: "ease-in-out",
  hideDelay:          .3,
  hideDuration:       1.2,
  hideTimingFunction: "cubic-bezier(0.09, 0.04, 0.16, 0.87)",
})
~~~

Option `transitions` offers a more flexible way to script the transition, see below.


<a id="scripted-component-options-with-transitions"></a>
### Scripted component options with `transitions`

Option `transitions` is an Object that contains the functions `show` and `hide`. Each of these 2 functions return an Object with possible keys:

* `duration`
* `delay`
* `before`
* `transition`
* `after`
* `timingFunction`

Functions `show` and `hide` receive all previously passed options, combined with references to DOM elements (usually `el` but sometimes other elements too - see list of transient components below).

[Dialog](components/dialog.md) uses a simple fade in / fade out transition. This is a good starting point to demonstrate scripted transitions. The equivalent in JavaScript using `transitions` would be:

~~~javascript
Dialog({
  // ...
  transitions: {
    show: ({ el }) => ({
      duration:   .240,
      before:     () => el.style.opacity = 0,
      transition: () => el.style.opacity = 1
    }),
    hide: ({ el }) => ({
      duration:   .240,
      transition: () => el.style.opacity = 0,
    })
  }
})
~~~

Note that other options can be combined:

~~~javascript
Dialog({
  // ...
  showDuration:   .9,
  hideDuration:   .9,
  transitions: {
    show: ({ el }) => ({
      before:     () => el.style.opacity = 0,
      transition: () => el.style.opacity = 1
    }),
    hide: ({ el }) => ({
      transition: () => el.style.opacity = 0,
    })
  }
})
~~~

Of course these functions can be made as complex as necessary. For instance for a pushing [Drawer](components/drawer.md):

~~~javascript
import { isRTL } from "polythene-core"

Drawer({
  // ...
  transitions: {
    show: ({ contentEl }) => {
      const rtl = isRTL({ element: contentEl })
      const side = rtl ? "marginRight" : "marginLeft"

      return {
        el:         contentEl,
        duration:   .240,
        before:     () => {
          const rect = contentEl.getBoundingClientRect()
          const width = rect.width
          contentEl.style[side] = `-${width}px`
        },
        transition: () => {
          contentEl.style[side] = 0
        }
      }
    },
    hide: ({ contentEl }) => {
      const rtl = isRTL({ element: contentEl })
      const side = rtl ? "marginRight" : "marginLeft"

      return {
        el:         contentEl,
        duration:   .240,
        transition: () => {
          const rect = contentEl.getBoundingClientRect()
          const width = rect.width
          contentEl.style[side] = `-${width}px`
        }
      }
    }
  }
})
~~~


<a id="themed-using-configuration-variables"></a>
### Themed (using configuration variables) 

For a general introduction to theming, see [Theming](theming.md).

The default component style variables can be overridden in a custom theme style:

~~~javascript
import { DialogCSS } from "polythene-css"

DialogCSS.addStyle(".dialog-transitions", {
  animation_duration: ".8s",
  animation_delay:    ".2s"
})

//...
Dialog({
  className: "dialog-transitions",
  // ...
})
~~~

Note that CSS variables should contain a unit: "s" or "ms".

<a id="effects"></a>
#### Effects

You can create extra effects by passing custom CSS declarations:

* `animation_hide_css` - CSS declaration at rest / when hidden
* `animation_show_css` - CSS declaration when shown

For example:

~~~javascript
DialogCSS.addStyle(".dialog-transitions", {
  // ...
  animation_hide_css: "opacity: 0; transform: translate3d(0, 20px, 0);",
  animation_show_css: "opacity: 1; transform: translate3d(0, 0, 0);"
})
~~~

or:

~~~javascript
BaseSpinnerCSS.addStyle(".spinner-transitions", {
  // ...
  animation_hide_css: "opacity: 0; transform: scale(0.1);",
  animation_show_css: "opacity: 1; transform: scale(1.0);"
})
~~~


<a id="custom-css"></a>
### Custom CSS

Finally you can write custom CSS to override any default style; see [Custom CSS](theming/custom-css.md).

For example:

~~~css
.my-app .pe-menu {
  transition-timing-function: ease-out;
  transition-property: opacity;
  opacity: 0;
}
.my-app .pe-menu--visible {
  opacity: 1;
}
~~~

<a id="transient-components"></a>
## Transient components

| **Component**                              | **CSS module**    |  **transition DOM elements**  |
| ------------------------------------------ | ----------------- | ------------------ |
| [Dialog](components/dialog.md)             | `DialogCSS`       | `el`, `contentEl`, `backdropEl` |
| [Drawer](components/drawer.md)             | `DrawerCSS`       | `el`, `contentEl`, `backdropEl` |
| [Menu](components/menu.md)                 | `MenuCSS`         | `el` |
| [Notification](components/notification.md) | `NotificationCSS` | `el`, `containerEl` |
| [Snackbar](components/snackbar.md)         | `SnackbarCSS`     | `el`, `containerEl` |
| [BaseSpinner](components/spinner.md)       | `BaseSpinnerCSS`  | `el` |


<a id="changes"></a>
## Changes

<a id="converting-from-polythene-10"></a>
### Converting from Polythene 1.0

Option `transitions` has a different API for keys returned from functions `show` and `hide`. Version 1.1 creates consistency by using uniform keys.

| **1.0**        |  **1.1**       |
| -------------- | -------------- |
| `showDelay`    | `delay` |
| `showDuration` | `duration` |
| `hideDelay`    | `delay` |
| `hideDuration` | `duration` |
| `beforeShow`   | `before` (for both show and hide) |
| `afterHide`    | `after` (for both show and hide) |
| `show`         | `transition` |
| `hide`         | `transition` |
| -              | `timingFunction` |

