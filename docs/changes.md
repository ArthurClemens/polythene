# Change log

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Releases](#releases)
  - [Next](#next)
  - [1.2.0](#120)
  - [1.1.0](#110)
  - [1.0.0](#100)
- [Pre releases](#pre-releases)

<!-- /MarkdownTOC -->


<a id="releases"></a>
## Releases

<a id="next"></a>
### Next

#### Material Design version 2 -- first small changes

Google has updated their Material Design specs ("Version 2"). A couple of the changes have been included in this release; more will follow in next releases.

#### CSS

CSS creation has been optimized, specifically when creating themed CSS. Instead of recreating the entire CSS, now only a minimal subset is created based on the passed variables (see [Style variables](theming/style-variables.md) how to use it).

In terms of internal organisation, CSS variable files have been moved to each component's CSS package. This makes the CSS packages operate more standalone.

##### Themes and media queries

With an additional argument to `addStyle` it is now possible to define a theme style restricted by a media query.

Conceptually, this is very close to writing CSS with media queries, but it has the benefit that you don't need to know the internal component structure - you still work with style variables.

Some examples:

* Make a Dialog appear full screen on small screen sizes
* Make a Menu appear full width on small screen sizes
* Create a Drawer that behaves differently on different screen sizes: [Mithril example](./components/mithril/drawer.md#responsive-drawer), [React example](./components/react/drawer.md#responsive-drawer)
* Change the image size on a Card, without changing the component options

See [CSS/Style variables](theming/style-variables.md#using-media-queries) how to use this feature.


#### Components

* New component
  * [Button Group](components/button-group.md) - container for a row of buttons; use this to create toggle buttons or split buttons
* [Button](components/button.md)
  * New options for varying the width and height: `extraWide` and `highLabel`
  * New option `dropdown` to add a dropdown triangle
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
  * `offset` is deprecated; use `offsetH`
  * `size` is deprecated; use `width`
* [Radio Group](components/radio-group.md)
  * Added option `defaultSelectedValue`
* [Shadow](components/shadow.md)
  * CSS style variables have been renamed: `z` has been changed to `depth`
* [Slider](components/slider.md)
  * Added CSS style variables `color_[tint]_tick_value`, `color_[tint]_pin_label` and `color_[tint]_pin_background`
* [Spinners](components/spinner.md) and [Tabs](components/tabs.md)
  * CSS style variables for animation durations/delays have been changed to strings that include the unit ("ms" or "s")


#### Other

* Various bug fixes

<a id="120"></a>
### 1.2.0

#### Components

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

#### Other

* Various bug fixes

<a id="110"></a>
### 1.1.0

#### Core

* Updates to transition code:
  * The API of option `transitions` has changed - see [Transitions documentation](transitions.md) and a [from 1.0 to 1.1 change list](transitions.md#converting-from-polythene-10)
  * Transitions now read existing CSS styles (so you can define some or all transition properties in CSS too)
  * It is now possible to set transition duration and delay in a component theme (using component style variables)
  * Added options `showTimingFunction` and `hideTimingFunction`

#### Components

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

#### Example code

* Updated Text Field form validation to match Powerform v3
* Tabs:
  * Added nested Tabs example
  * Added "hide all selection indicators"

#### Tooling

* Webpack 4 support

#### Other

* Various bug fixes

<a id="100"></a>
### 1.0.0

Equal to rc.11.


<a id="pre-releases"></a>
## Pre releases


#### 1.0.0-rc.11

Changes to components:

* Toolbar: Added support for action links. Use class `pe-action`.


#### 1.0.0-rc.10

Removed `polythene-fastclick` as it is no longer needed - the tap response on mobile is now sufficiently fast.

Changes to components:

* [Button](components/button.md)
  * The default side margin has been removed
  * Add parent element with class `.pe-button-row` to re-add the margins, or add margins where needed
* [List](components/list.md)
  * Removed keyboard control in favor of (more flexible) example code; see:
    * Mithril
      * [List](components/mithril/list.md#keyboard-control)
      * [Search](components/mithril/search.md#result-list)
    * React
      * [List](components/react/list.md#keyboard-control)
      * [Search](components/react/search.md#result-list)
  * Option `padding` has new possible values "top", "bottom", "none" and "both", replacing `false`
* TextField and Search: option `focus` has been removed (because setting the focus state outside of an event does not work on iOS)
  * Use the `onChange` callback that returns the function `setInputState` - see [documentation for Mithril](components/mithril/textfield.md#programmatically-setting-focus-and-value), [documentation for React](components/react/textfield.md#programmatically-setting-focus-and-value)

Bug fixes.



#### 1.0.0-rc.9

To make component packages more standalone, CSS classes are no longer exported by the component but from the common module `polythene-css-classes`:

~~~javascript
import buttonClasses from "polythene-css-classes/button"
~~~

All references to React 15 have been replaced with React 16.

Changes to components:

* Toolbar now has a default background color

Bug fixes (thanks sjungwirth and ItsLeeOwen!).



#### 1.0.0-rc.8

Updated for React 16.

Changes to components:

* Menu
  * Option `reposition` is now by default `false`
* Icon
  * Option `svg` must now use option `content` as well 

Various bug fixes (thanks sjungwirth!).



#### 1.0.0-rc.7

Fix for newly introduced bug in button onclick handling.



#### 1.0.0-rc.6

* CSS can now optionally be read from files (as opposed to CSS-in-JS only); see [CSS](css.md) for more details.
* `addLayoutStyles` and `addTypography` are now both imported from `polythene-css`; see [CSS](css.md).

Changes to components:

* All
  * As consequence of the CSS change, the component method `theme` has been replaced with `addStyle`; see [Theming Style variables](theming/style-variables.md)
* RadioGroup
  * `onChange` now returns a state object that contains a variable `value`
* List
  * Added option `all`, analogous to Tab's `all`

Various bug fixes.



#### 1.0.0-rc.5

Contains fixes for server-side rendering.

Changes to components:

* Dialog
  * Option `footer` has been renamed to `footerButtons` to allow for more diverse footers
  * Added option `header`
  * Added option `fullBleed` to remove padding from the body element 
  * Option `borders` has been changed from Boolean to String, with possible values: "always", "never", "overflow" (default)
* List
  * Added option `padding` to optionally remove the default top and bottom padding
  * Added keyboard control
* ListTile
  * Added option `compactFront` to reduce the horizontal width of `front` content
  * Added option `subContent` to show other types of content below the title (without height restriction)
  * Added option `header`
* Toolbar
  * Added sub-component ToolbarTitle to improve styling 
  * Removed default background colors to better fit in a Dialog

Various bug fixes. 



#### 1.0.0-rc.4

Changes to components:

* Dialog
  * Option `fullscreen` has been renamed to `fullScreen` for consistency
* RadioGroup
  * Added option `all`
* Ripple
  * "constrained" is now the default setting; use option `unconstrained` to unset the default
* Slider
  * Option `step` has been renamed to `stepSize` to prevent confusion with step count
* Spinner
  * Renamed `iOSSpinner` to `IOSSpinner` to work with React

Various bug fixes.



#### 1.0.0-rc.1 to 1.0.0-rc.3

Me learning to publish with Lerna.
