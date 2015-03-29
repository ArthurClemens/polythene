# Demos

## Running the demos

Although the components and demos use the node toolchain, the generated demo files run standalone in a browser.


* Install the icon font with bower: `bower install`
* Open the demo/xxx/index.html in your browser


## Modifying the demos

NodeJS dependencies:

* `browserify`
* `uglify-js`
* `cssnext`
* `jss`
* `mithril`

Install these in the root directory (installation will create dir `node_modules`).




In the demo directory:

* To create a compressed file: `npm run build`

or

* To update the file while working: `npm run watch`
