# Change log

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="2,3" -->
- [1.4.1](#141)
- [1.4.0](#140)
- [1.3.2](#132)
  - [Material Design version 2 -- first small changes](#material-design-version-2----first-small-changes)
  - [CSS](#css)
    - [Themes and behavior](#themes-and-behavior)
    - [Themes and media queries](#themes-and-media-queries)
  - [Components](#components)
  - [Deprecations](#deprecations)
  - [Other](#other)
- [1.2.0](#120)
  - [Components](#components-1)
  - [Other](#other-1)
- [1.1.0](#110)
  - [Core](#core)
  - [Components](#components-2)
  - [Example code](#example-code)
  - [Tooling](#tooling)
  - [Other](#other-2)
- [1.0.0](#100)
- [Pre-releases](#pre-releases)

<!-- /MarkdownTOC -->

## 1.4.1

* Various fixes for IE 11.


## 1.4.0

* Updated dependencies (Babel 7, React 16.7.0, preparation for Mithril v.2).
* Smaller transpiled files
* Bug fixes


<a id="132"></a>
## 1.3.2

<a id="material-design-version-2----first-small-changes"></a>
### Material Design version 2 -- first small changes

Google has updated their Material Design specs ("Version 2"). A couple of the changes have been included in this release; more will follow in next releases.

<a id="css"></a>
### CSS

CSS creation has been optimized, specifically when creating themed CSS. Instead of recreating the entire CSS, now only a minimal subset is created based on the passed variables (see [Style variables](theming/style-variables.md) how to use it).

In terms of internal organisation, CSS variable files have been moved to each component's CSS package, which is a more logical location.

#### Themes and behavior

Theming has become more powerful. Next to setting dimensions and colors, a number of components can now change behavior by setting a theme "switch" variable in [addStyle](theming/style-variables.md#styling-components-with-variables).

For example:

* Change a Text Button to a Contained Button using `contained: true`
* Set a Drawer to cover behavior using `cover: true`
* Make a Dialog appear full screen using `full_screen: true`
* Add a backdrop to a Menu with `backdrop: true`

The switch variable may trigger one or more variables, or changes JavaScript behavior under the hood. For example, a full screen Dialog also disables the ESCAPE key.

While this seems to duplicate component options, it makes sense when components need to appear and behave differently based on the available screen size.

#### Themes and media queries

With an additional argument to `addStyle` it is now possible to restrict a theme style by media query.

Conceptually, this is very close to writing CSS with media queries, but it has the benefit that you don't need to know the internal component structure - you still work with style variables.

Some examples:

* Have a normal Dialog but make it full screen on small screen sizes
* Have a normal local Menu but make it full width on small screen sizes
* Create a Drawer that behaves differently on different screen sizes: [Mithril example](./components/mithril/drawer.md#responsive-drawer), [React example](./components/react/drawer.md#responsive-drawer)
* Change the image size on a Card, without changing the component options

See [CSS/Style variables](theming/style-variables.md#using-media-queries) how to use this feature.


<a id="components"></a>
### Components

* New component
  * [Button Group](components/button-group.md) - container for a row of buttons; use this to create toggle buttons or split buttons
* [Button](components/button.md)
  * New options for varying the width and height: `extraWide` and `highLabel` (useful in Button Group)
  * New option `dropdown` that adds a dropdown triangle
  * New option `contained` to create a Contained Button appearance
  * New option `raised` to create a Raised Button appearance
    * A raised button is automatically a Contained Button, and adds an interactive shadow depth when tapped
  * Added default letter spacing (which can be overridden with CSS style variable `letter_spacing`)
  * MD2: the border radius is now set to `4`
  * Bordered button has a default medium gray border color
* [Dialog](components/dialog.md)
  * Style option `full_screen` can be used to make a Dialog appear full screen, without having to set the component option `fullScreen`. This is useful when the full screen appearance should be limited to specific screen dimensions.
* [Menu](components/menu.md)
  * Reworked to support dropdown menus - this includes the new Button Group and Button's `dropdown` option
  * MD2: the menu is now positioned below its target (instead of covering the target), unless explicitly overridden with `offsetV: 0`
  * Added scaling effect for menus with `origin` set (with corresponding CSS vars `animation_show_origin_effect_css` and `animation_hide_origin_effect_css`) 
  * New option `scrollTarget` (to scroll a menu element into view)
  * New option `height` (pixel or percentage value, or `"max"` to use the maximum available height within the parent element)
  * New option `backdrop` to make a menu stand out more
  * Long lists are now scrollable
* [Radio Group](components/radio-group.md)
  * Added option `defaultSelectedValue` 
* [Shadow](components/shadow.md)
  * CSS style variables have been renamed: `z` has been changed to `shadow_depth`
* [Slider](components/slider.md)
  * Added CSS style variables `color_[tint]_tick_value`, `color_[tint]_pin_label` and `color_[tint]_pin_background`
* [Spinners](components/spinner.md) and [Tabs](components/tabs.md)
  * CSS style variables for animation durations/delays have been changed to strings that include the unit ("ms" or "s")
* Added RTL support for TextField, Search, Icon, Icon Button, FAB
  * Supporting CSS class `pe-rtl--flip` can be used to flip directional icons or buttons

<a id="deprecations"></a>
### Deprecations

* Card, Dialog, Drawer, Menu, Shadow, Spinner, Toolbar:
  * `z` is deprecated; use `shadowDepth`
* [Menu](components/menu.md)
  * `offset` is deprecated; use `offsetH`
  * `size` is deprecated; use `width`
* Raised Button has been deprecated; use [Button](components/button.md) with option `raised: true`
* [Switch](components/switch.md)
  * `zOff` is deprecated; use `shadowDepthOff`
  * `zOn` is deprecated; use `shadowDepthOn`

<a id="other"></a>
### Other

* [webfontloader](packages/polythene-utilities.md#addwebfont-web-font-loader)
  * Aligned configuration to upstream library
  * Now emits loading status callbacks
* Various bug fixes

<a id="120"></a>
## 1.2.0

<a id="components-1"></a>
### Components

* [Card](components/card.md)
  * It is now possible to embed a video using the `media` item
  * The image dimmer element is now only created when option `showDimmer` is passed
* [Icon Button](components/icon-button.md)
  * Icon Button can now have an optional label; visually consistent with a Checkbox with a custom icon.
* [List Tile](components/list-tile.md)
  * Added CSS style variable `title_line_count` to make the line count of the title configurable
* [Tabs](components/tabs.md)
  * Option `selectedTab` is deprecated in favor of `selectedTabIndex`
  * CSS style variable `label_opacity` has been removed in favor of setting the transparency in the label color (using `rgba`); this creates a better color transition when selecting the tab
* Hover styles: Button, Raised Button and Icon Button have optional hover CSS variables to generate hover styles

<a id="other-1"></a>
### Other

* Various bug fixes

<a id="110"></a>
## 1.1.0

<a id="core"></a>
### Core

* Updates to transition code:
  * The API of option `transitions` has changed - see [Transitions documentation](transitions.md) and a [from 1.0 to 1.1 change list](transitions.md#converting-from-polythene-10)
  * Transitions now read existing CSS styles (so you can define some or all transition properties in CSS too)
  * It is now possible to set transition duration and delay in a component theme (using component style variables)
  * Added options `showTimingFunction` and `hideTimingFunction`

<a id="components-2"></a>
### Components

* New component
  * [Drawer](components/drawer.md) to create side navigation
* Harmonisation of border options:
  * Button, Card and List: options `borders` and `bordered` are deprecated; use `border` instead
  * List: option `indentedBorders` is deprecated; use `indentedBorder` instead
  * Dialog: option `borders` is unchanged (the option refers to top and bottom border)
* [List Tile](components/list-tile.md)
  * Added style variables for for titles and the front element: font size, weight and color 
  * Added option `navigation` to use a Material Design navigation style, as specified in [navigation drawers](https://material.io/guidelines/patterns/navigation-drawer.html)
* [Toolbar](components/toolbar.md)
  * Added option `z` to add a shadow
  * Added option `fullbleed` to remove side padding
  * Added option `border` to set a bottom border
* [Button](components/button.md)
  * Removed `onmouseover` listener
* Added RTL support for Card, Checkbox, Dialog, List Tile, List, Radio Button, Switch, Toolbar

<a id="example-code"></a>
### Example code

* Updated Text Field form validation to match Powerform v3
* Tabs:
  * Added nested Tabs example
  * Added "hide all selection indicators"

<a id="tooling"></a>
### Tooling

* Webpack 4 support

<a id="other-2"></a>
### Other

* Various bug fixes

<a id="100"></a>
## 1.0.0

Equal to rc.11.

<a id="pre-releases"></a>
## Pre-releases

See: [Change log (pre-releases)](./changes-pre-releases.md)
