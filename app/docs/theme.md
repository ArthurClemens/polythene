# Polythene Theme

Adds default layout and color theming.

This component is under construction and will likely change in the future.


## Usage

	require('polythene/theme/theme');


## Good to know

Normally a theme is added last in the HTML document, so that theme styles override default styles. With async loading of styles, the order of the theme cannot be known. To not get overwritten by default styles, all theme classes need an extra level of specificity, in this case classname 'theme'. 

Besides loading the css file, this component also adds class `theme` to the `html` element.