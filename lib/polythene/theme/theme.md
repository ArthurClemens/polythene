# Appearance / Theming

Polythene is an implemenation of Google's Material Design (MD). But foremost it is a component library, and not necessarily tied to MD. Functionality of the components is quite generic, and styles can be swapped out or enhanced.


## Theme as component

The Theme component defines the styles for the site as well as for all individual components: it is mainly a directory where each component has its subdirectory with style definitions.

By having all styles of all components together, overriding/substituting the default style is relatively efficient. Because unused styles are simply never loaded, it is not necessary to override default styles (hey Bootstrap).



## Usage

This section describes the default setup.

To give components an appearance, at least one theme should be loaded. Load the default theme:

	// app.js
	require('polythene-theme/theme');

`polythene-theme` is a mapping variable that should point to the theme directory. This is default "path-to-your-polythene/theme". This can be set in your site's config file, for instance:

	// config.js
	System.config({
		"map": {
			"polythene": "app/lib/polythene",
			"polythene-theme": "app/lib/polythene/theme"
		}
	})

Switching to a different theme is done by pointing `polythene-theme` to a different directory.


### Under the hood

The component script file `theme.js` loads site wide styles; by default `layout`, `font-roboto` and some other useful CSS.

The theme directory further contains component subdirectories, each containing a script file and a CSS file. For example: 

	polythene
	└── theme
	    └── icon
	        ├── icon.js // loads icon.css
	        └── icon.css

The Icon component loads the component style script located at `polythene-theme/icon/icon`. The default theme's `theme/icon/icon.js` contains:

	require('polythene/theme/icon/icon.css!');

which points to the CSS file in the same directory. Note that the suffix exclamation mark is needed for SystemJS' text plugin.


## Custom theme / overriding default styles

The convenience directory `theme-copy-me` contains all component style scripts from the `theme` directory. Follow these steps to create your own theme:

1) Copy the `theme-copy-me` directory to your app, for example `app/theme`.

2) Point the config map variable `polythene-theme` to the new directory, for example:

	// config.js
	"polythene-theme": "app/theme"

3) Change the CSS lookup for the component that you want to change. Open the script file in the component directory in `app/theme` and change the require from `polythene/theme` to `polythene-theme`. For the Icon component this would be:

	// app/theme/icon/icon.js
	require('polythene-theme/icon/icon.css!');

4) Change or add CSS.


### Programmatic CSS

Instead of using a CSS file it is also possible to programmatically create CSS in the script file, for example using [jss](https://github.com/jsstyles/jss). This approach would save one server request per component.


### Adding to styles

Instead of rewriting styles from scratch, it is possible to enhance existing styles. In that case you should leave the existing 'require' intact and add a second line:

	// app/theme/icon/icon.js
	// use existing style from theme component
	require('polythene/theme/icon/icon.css!');
	// add new style from current directory
	require('polythene-theme/icon/icon-colors.css!');


