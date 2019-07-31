# Change log (pre-releases)

[Back to Changes](changes.md)

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [1.0.0-rc.11](#100-rc11)
- [1.0.0-rc.10](#100-rc10)
- [1.0.0-rc.9](#100-rc9)
- [1.0.0-rc.8](#100-rc8)
- [1.0.0-rc.7](#100-rc7)
- [1.0.0-rc.6](#100-rc6)
- [1.0.0-rc.5](#100-rc5)
- [1.0.0-rc.4](#100-rc4)

<!-- /MarkdownTOC -->

<a id="100-rc11"></a>
### 1.0.0-rc.11

Changes to components:

* Toolbar: Added support for action links. Use class `pe-action`.


<a id="100-rc10"></a>
### 1.0.0-rc.10

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



<a id="100-rc9"></a>
### 1.0.0-rc.9

To make component packages more standalone, CSS classes are no longer exported by the component but from the common module `polythene-css-classes`:

```javascript
import buttonClasses from "polythene-css-classes/button"
```

All references to React 15 have been replaced with React 16.

Changes to components:

* Toolbar now has a default background color

Bug fixes (thanks sjungwirth and ItsLeeOwen!).



<a id="100-rc8"></a>
### 1.0.0-rc.8

Updated for React 16.

Changes to components:

* Menu
  * Option `reposition` is now by default `false`
* Icon
  * Option `svg` must now use option `content` as well 

Various bug fixes (thanks sjungwirth!).



<a id="100-rc7"></a>
### 1.0.0-rc.7

Fix for newly introduced bug in button onclick handling.



<a id="100-rc6"></a>
### 1.0.0-rc.6

* CSS can now optionally be read from files (as opposed to CSS-in-JS only); see [CSS](css.md) for more details.
* `addLayoutStyles` and `addTypography` are now both imported from `polythene-css`; see [CSS](css.md).

Changes to components:

* All
  * As consequence of the CSS change, the component method `theme` has been replaced with `addStyle`; see [Styling with variables](theming/style-variables.md)
* RadioGroup
  * `onChange` now returns a state object that contains a variable `value`
* List
  * Added option `all`, analogous to Tab's `all`

Various bug fixes.



<a id="100-rc5"></a>
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



<a id="100-rc4"></a>
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

