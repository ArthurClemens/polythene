# Polythene v1.0 (UNDER DEVELOPMENT)


## Guides 

* [Migrating from 0.2 to 1.x](packages/docs/Migration.md)
* [Theming](theme.md)


## Using the rewrite-universal branch

Version 1.0 is not yet in the npm registry. You will need to use some workarounds, f.i. with Webpack's resolve/alias configuration settings.

An example project setup is available at [polythene-mithril-rewrite-branch-starter](https://github.com/ArthurClemens/polythene-mithril-rewrite-branch-starter)



## Developing

Polythene is now a monorepo. Components are located inside the "packages" directory.


Install Lerna:

```
npm install -g lerna
```

Get the rewrite branch:

```
git clone https://github.com/ArthurClemens/polythene.git
cd polythene
git checkout git checkout origin/rewrite-universal
yarn
```

This will run `lerna init` and `lerna bootstrap`.

Commands:

* `lerna run build` - builds all components (in each dist directory)
* `lerna run build:component button` - builds the button component; the same goes for the other components
* `lerna run build:tests` - builds the tests
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



## Browser support

* Internet Explorer: 11
* Edge: 13+
* Chrome: 54+
* Firefox: 49+
* Safari: 9+
* Mobile Safari: 9+


