# Change log

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Releases](#releases)
  - [Next](#next)
  - [1.0.0](#100)
- [Pre releases](#pre-releases)

<!-- /MarkdownTOC -->


<a id="releases"></a>
## Releases



<a id="next"></a>
### Next

(in development)

* Refactoring of transition code
  * The API of option `transitions` has changed - see [Transitions documentation](transitions.md) and a [from 1.0 to 1.1 change list](transitions.md#converting-from-polythene-10)
  * Transitions now read existing CSS styles
  * It is now possible to set duration and delay in a component theme
  * Added options `showTimingFunction` and `hideTimingFunction`

Changes to components:

* New [Drawer](components/drawer.md) component
* Harmonisation of border options:
  * Button, Card and List: options `borders` and `bordered` are deprecated; use `border` instead
  * List: option `indentedBorders` is deprecated; use `indentedBorder` instead
  * Dialog: option `borders` is unchanged
* List Tile:
  * Added configuration vars for for titles and front: font size, weight and color 
  * Added option `navigation` to use a Material Design navigation style, as specified in [navigation drawers](https://material.io/guidelines/patterns/navigation-drawer.html)
* Toolbar:
  * Added option `z` to add a shadow
  * Added option `fullbleed` to remove side padding
  * Added option `border` to set a bottom border
* RTL support for Card, Checkbox, Dialog, List Tile, List, Radio Button, Switch, Toolbar


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

* Button: the default side margin has been removed
  * Add parent element with class `.pe-button-row` to re-add the margins, or add margins where needed
* List:
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
  * As consequence of the CSS change, the component method `theme` has been replaced with `addStyle`; see [Theming Configuration variables](theming/configuration-variables.md)
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
