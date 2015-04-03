# Polythene

Polymer inspired modular implementation of Material Design. Use standalone or with Mithril.

Alpha status. Things will break.


## Installing

Although Polythene can be run from a browser, NodeJS scripts are used to install the dependencies. For this step you need to have `npm` installed - see [Installing Node.js](https://docs.npmjs.com/getting-started/installing-node).

In the root directory, run the following commands:

1. `npm install` - installs grunt, grunt plugins and bower
2. `grunt deps` - lets bower install the frontend dependencies

If you want to change/extend Polythene and compile Sass files to Css, run:

* `grunt css`

The installed frontend dependencies:

* [Mithril](http://lhorie.github.io/mithril)
* [RequireJS](http://requirejs.org)
* [require-css](https://github.com/guybedford/require-css)
* [Material Design Iconic Font](https://github.com/zavoloklom/material-design-iconic-font)




## Examples

Example files can be run in a browser. Each example has 2 versions: one with and one without Mitril.

### Firefox

Firefox comes with a  strict "file uri origin" policy by default, so it won't load webfonts when accessing a HTML file in the browser. Set up a local webserver in the root:

1. `python -m SimpleHTTPServer`
2. Point the browser to [localhost:8000/example](http://localhost:8000/example)


## License

MIT

