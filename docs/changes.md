# Change log

## Pre release

### 1.0.0-rc.7

Fix for newly introduced bug in button onclick handling.


### 1.0.0-rc.6

* CSS can now optionally be read from files (as opposed to CSS-in-JS only); see [CSS](css.md) for more details.
* `addLayoutStyles` and `addTypography` are now both imported from `polythene-css`; see [CSS](css.md).

Changes to components:

* All
  * As consequence of the CSS change, the component method `theme` has been replaced with `addStyle`; see [Theming Configuration variables](theming/configuration-variables.md)
* RadioGroup
  * `onChange` now returns a state object that contains a variable `value`
* List
  * Added option `all`, analogous to Tab's `all`

Various bug fixes. 


### 1.0.0-rc.5

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


### 1.0.0-rc.4

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


### 1.0.0-rc.1 to 1.0.0-rc.3

Me learning to publish with Lerna.
