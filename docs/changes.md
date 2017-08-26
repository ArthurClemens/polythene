# Change log

## Pre release

### 1.0.0-rc.5 (WIP)

Various bug fixes. Contains fixes for server-side rendering.

Changes to components:

* Dialog
  * Option `footer` has been renamed to `footerButtons` to allow for more diverse footers
  * Added option `header`
  * Added option `fullBleed` to remove padding from the body element 
  * Option `borders` has been changed from Boolean to String, with possible values: "always", "never", "overflow" (default)
* List
  * Added option `padding` to optionally remove the default top and bottom padding
* ListTile
  * Added option `compactFront` to reduce the horizontal width of `front` content
* Toolbar
  * Added sub-component ToolbarTitle to improve styling 
  * Removed default background colors to better fit in a Dialog


### 1.0.0-rc.4

Various bug fixes.

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


### 1.0.0-rc.1 to 1.0.0-rc.3

Me learning to publish with Lerna.
