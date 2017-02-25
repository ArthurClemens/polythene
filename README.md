# Polythene v1.0

## Guides 

* [Migrating from 0.2 to 1.x](Migration.md)
* [Theming](packages/polythene-theme/README.md)


## Development

Polythene is now a monorepo. Components are located inside the "packages" directory.

* `npm install`
* `lerna bootstrap` - symlinks all component packages
* `lerna run build` - builds all components (in each dist directory)
* `lerna run clean` - removes all dist directories

Packages are built with [Rollup](http://rollupjs.org), both as `es` module and as `umd`. Rollup creates smaller files compared to Webpack 2. If you like to experiment, build scripts are in the root `scripts` directory.



### Testing

Includes Jest snapshots and a viewer to verify the output.

* `cd packages/test`
* `npm install`

* Run in browser:

* `npm run dev` - uses Webpack's dev server

Build files:

* `npm run build` - builds files in `dist`

Update snapshots:

* `npm run test`
* `npm run test:watch`

