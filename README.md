# Polythene

Polymer inspired modular implementation of Material Design for [Mithril](http://lhorie.github.io/mithril). 

Alpha status.


* [Examples](https://github.com/ArthurClemens/Polythene-Examples)
* [Documentation](http://polythene.js.org)


## Browser support

Th default theme uses flexbox, so this works in IE10 and other browsers. For IE9 you will need to adapt the theme.



## Installation

NodeJS scripts are used for installing the development dependencies. For this step you need to have `npm` installed.

In the root directory, run the following commands:

1. `npm install` - installs grunt, grunt plugins and bower
2. `grunt deps` - lets bower install the frontend dependencies

If you want to change/extend Polythene and compile Sass files to Css, run:

* `grunt css`


Dependencies are:

* [Mithril](http://lhorie.github.io/mithril)
* [RequireJS](http://requirejs.org)
* [require-css](https://github.com/guybedford/require-css)
* [Material Design Iconic Font](https://github.com/zavoloklom/material-design-iconic-font) (optional)
* [Material Design Icons](https://github.com/Templarian/MaterialDesign) (optional)



## License

* Polythene: MIT
* Polymer: [Copyright (c) 2014 The Polymer Authors. All rights reserved.](http://polymer.github.io/LICENSE.txt)

