# Polythene v1.0

## Guides 

* [Migrating from 0.2 to 1.x](Migration.md)
* [Theming](packages/polythene-theme/README.md)



## Browser support

* Internet Explorer: 11
* Edge: 13+
* Chrome: 54+
* Firefox: 49+
* Safari: 9+
* Mobile Safari: 9+



## Development

Polythene is now a monorepo. Components are located inside the "packages" directory.

* `yarn install`

This will call `lerna init` and `lerna bootstrap`.

* `lerna run build` - builds all components (in each dist directory)
* `lerna run clean` - removes all dist directories

Packages are built with [Rollup](http://rollupjs.org), both as `es` module and as `umd`. Rollup creates smaller files compared to Webpack 2. If you like to experiment, build scripts are in the root `scripts` directory.



### Testing

Includes Jest snapshots and a viewer to verify the output.

* `cd packages/test`
* `yarn install`

* Run in browser:

* `yarn run dev` - uses Webpack's dev server

Build files:

* `yarn run build` - builds files in `dist`

Update snapshots:

* `yarn run test`
* `yarn run test:watch`

