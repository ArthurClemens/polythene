# Getting started with Polythene for Mithril


<!-- MarkdownTOC bracket="round" autolink="true" depth="4" -->

- [Usage in JavaScript modules](#usage-in-javascript-modules)
  - [Which packages do you need?](#which-packages-do-you-need)
  - [Installation](#installation)
  - [Examples](#examples)
    - [A single component](#a-single-component)
    - [A simple app](#a-simple-app)
- [Usage in a HTML file or JSFiddle](#usage-in-a-html-file-or-jsfiddle)

<!-- /MarkdownTOC -->


## Usage in JavaScript modules

Add Polythene to your project with yarn or npm.

### Which packages do you need?

Required:

* `polythene-mithril`

Recommended:

* `polythene-style` Material Design styles (typography and font) [more info](packages/polythene-style.md)

Optional:

* `polythene-utilities` Layout helper classes [more info](packages/polythene-utilities.md)
* `polythene-fastclick` Eliminating the 300ms delay on mobile [more info](packages/polythene-fastclick.md)
* `polythene-core-css` CSS tools [more info](packages/polythene-core-css.md)

### Installation

~~~bash
yarn add polythene-mithril polythene-style
~~~

or

~~~bash
npm install --save polythene-mithril polythene-style
~~~


### Examples

#### A single component

~~~javascript
import m from "mithril"
import { RaisedButton } from "polythene-mithril"

m(RaisedButton, {
  label: "Click"
})
~~~

#### A simple app

~~~javascript
import m from "mithril"
import { RaisedButton, Dialog } from "polythene-mithril"
import { addTypography, addRoboto } from "polythene-style"

addTypography()
addRoboto()

const App = {
  view: () => [
    m(RaisedButton, {
      label: "Show dialog",
      events: {
        onclick: () => Dialog.show({
          /* note the Dialog component is below the other elements in the app */
          title: "Hello",
          body: "Click outside to close, or press ESCAPE",
          backdrop: true
        })
      }
    }),
    m(Dialog),
  ]
}

m.mount(document.querySelector("#app"), App)
~~~


## Usage in a HTML file or JSFiddle

A "standalone" version of Polythene is available for demonstration purposes. This build includes all dependencies, except for `mithril`.

URL:

~~~
https://rawgit.com/ArthurClemens/polythene/rewrite-universal/packages/polythene-mithril/dist/polythene-mithril-standalone.js
~~~

Add to your HTML file:

~~~html
<div id="root"></div>

<script src="https://unpkg.com/mithril@1.1.3"></script>
<script src="https://rawgit.com/ArthurClemens/polythene/rewrite-universal/packages/polythene-mithril/dist/polythene-mithril-standalone.js"></script>
~~~

To be able to write es6, add `babel-standalone`:

~~~html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.25.0/babel.min.js"></script>
~~~


Example script:

~~~jsx
/* global m, polythene */
const { RaisedButton } = polythene

const App = {
  view: () =>
    m(RaisedButton, {
      label: "Button"
    })
}

m.mount(document.getElementById("root"), App)
~~~


See: [Full working JSFiddle](https://jsfiddle.net/ArthurClemens/5d5xfoxs/)

