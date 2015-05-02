# Polythene Examples

Demonstration of [Polythene](https://github.com/ArthurClemens/Polythene) components.


## Dependencies

Although Polythene can be run from a browser, NodeJS scripts are used to install the dependencies. For this step you need to have `npm` installed - see [Installing Node.js](https://docs.npmjs.com/getting-started/installing-node).

In the root directory, run the following commands:

1. `npm install` - installs grunt, grunt plugins and bower
2. `grunt` - lets bower install the frontend dependencies into the directory `src/app/lib`
3. `http-server ./src` - to run a webserver at port `8080`


The installed frontend dependencies:

* [Mithril](http://lhorie.github.io/mithril)
* [RequireJS](http://requirejs.org)
* [require-css](https://github.com/guybedford/require-css)
* [Material Design Iconic Font](https://github.com/zavoloklom/material-design-iconic-font)
* [Material Design Icons](https://github.com/Templarian/MaterialDesign)

