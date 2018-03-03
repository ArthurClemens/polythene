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

Get the Polythene repo and prepare:

```
git clone https://github.com/ArthurClemens/polythene.git
cd polythene
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

Test files for each component are located in `packages/test-COMPONENT`. These include Jest snapshots to verify the output.

Start by installing all dependencies in the root:

* `yarn install`
* `lerna bootstrap`

### Editing tests

* Modify and build files:
  * `yarn run build` - builds files in `dist`
* Update snapshots:
  * `yarn run test`
  * `yarn run test:watch`

### Viewing tests

Test files can be viewed by the "test renderers":

* With Mithril: `cd packages/tests-render-mithril`
* With React: `cd packages/tests-render-react`

Run in the browser:

* `yarn run dev` - uses Webpack's dev server

* With Mithril: http://localhost:3000
* With React: http://localhost:3100
  
