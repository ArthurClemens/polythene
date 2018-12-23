# Developing Polythene

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Setting up the development repo](#setting-up-the-development-repo)
- [Testing](#testing)
  - [Editing tests](#editing-tests)
  - [Viewing tests](#viewing-tests)

<!-- /MarkdownTOC -->


<a id="setting-up-the-development-repo"></a>
## Setting up the development repo

Install Lerna:

```
npm install -g lerna
```

Get the Polythene repo and prepare:

```
git clone https://github.com/ArthurClemens/polythene.git
cd polythene
npm
```

This will install all dependencies and run `lerna bootstrap`.

Commands:

* `lerna run build` - builds all components (in each dist directory)
* `lerna run build:component button` - builds the button component; the same goes for the other components
* `lerna run build:tests` - builds the tests
* `lerna run clean` - removes all dist directories

Packages are built with [Rollup](http://rollupjs.org), both as `es` module and as `umd`. Rollup creates cleaner files compared to Webpack. If you like to experiment, build scripts are in the root `scripts` directory.




<a id="testing"></a>
## Testing

Test files for each component are located in `packages/test-COMPONENT`. These include Jest snapshots to verify the output.

If you haven't done so, start by installing all dependencies in the root:

* `npm install` - this will install all dependencies and run `lerna bootstrap`

<a id="editing-tests"></a>
### Editing tests

* Modify and build files:
  * `npm run build` - builds files in `dist`
* Update snapshots:
  * `npm run test`
  * `npm run test:watch`

<a id="viewing-tests"></a>
### Viewing tests

Test files can be viewed by the "test renderers":

* With Mithril: `cd packages/tests-render-mithril`
* With React: `cd packages/tests-render-react`

Run in the browser:

* `npm run dev` - uses Webpack's dev server

* With Mithril: http://localhost:3000
* With React: http://localhost:3100
  
