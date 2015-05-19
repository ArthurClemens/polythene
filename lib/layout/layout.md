# Layout

Adds Polymer's layout system built on top of CSS Flexbox. See Polymer's [Layout attributes](https://www.polymer-project.org/0.5/docs/polymer/layout-attrs.html).

Layout styles are automatically included in the [default theme](#theme). If you use the theme, you don't need to require layout.


## Usage

	require('polythene/layout/layout');


## Additional CSS

Polymer adds a number of other useful layout classes, such as 

* `[block]`
* `[hidden]`
* `[relative]`
* `[fit]`
* `body[fullbleed]`

Polythene adds to this:

	* {
	    box-sizing: border-box;
	}
