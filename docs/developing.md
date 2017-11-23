# Developing Polythene

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Setting up the development repo](#setting-up-the-development-repo)
- [Testing](#testing)

<!-- /MarkdownTOC -->

<a name="setting-up-the-development-repo"></a>
## Setting up the development repo

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



<a name="testing"></a>
## Testing

Includes Jest snapshots and a viewer to verify the output.

* `cd packages/test`
* `yarn install`

Run in browser:

* `yarn run dev` - uses Webpack's dev server

Build files:

* `yarn run build` - builds files in `dist`

Update snapshots:

* `yarn run test`
* `yarn run test:watch`

