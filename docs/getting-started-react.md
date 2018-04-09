# Getting started with Polythene for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Example setup](#example-setup)
- [Usage in JavaScript modules](#usage-in-javascript-modules)
  - [Which packages do you need?](#which-packages-do-you-need)
  - [Installation](#installation)
  - [Examples](#examples)
- [Usage in a HTML file or JSFiddle](#usage-in-a-html-file-or-jsfiddle)
  - [Setup](#setup)
  - [Example script](#example-script)

<!-- /MarkdownTOC -->

<a id="example-setup"></a>
## Example setup

* [polythene-react-setup](https://github.com/ArthurClemens/polythene-react-setup)


<a id="usage-in-javascript-modules"></a>
## Usage in JavaScript modules

Add Polythene to your project with [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com/).

<a id="which-packages-do-you-need"></a>
### Which packages do you need?

Essential:

* `react`
* `react-dom`
* `polythene-react`

Recommended:

* `polythene-css` Provides component CSS files and Material Design styles (typography and font); optionally activates CSS-in-JS [more info](css.md)

Optional:

* `polythene-utilities` Layout helper classes [more info](packages/polythene-utilities.md)
* `polythene-core-css` CSS tools [more info](packages/polythene-core-css.md)


<a id="installation"></a>
### Installation

~~~bash
npm install --save polythene-react polythene-css
~~~

<a id="examples"></a>
### Examples

#### A single component

##### With JSX

~~~jsx
import React from "react"
import { RaisedButton } from "polythene-react"
import "polythene-css"

<RaisedButton label="Click" />
~~~

##### With hyperscript

~~~javascript
import { renderer as h, RaisedButton } from "polythene-react"

h(RaisedButton, {
  label: "Click"
})
~~~


#### A simple app

##### With JSX

~~~jsx
import React from "react"
import ReactDOM from "react-dom"
import { renderer as h, RaisedButton, Dialog } from "polythene-react"
import "polythene-css"
import { addTypography } from "polythene-css"

addTypography()

const App = () => (
  <div>
    <RaisedButton
      label="Show dialog"
      events={{
        onClick: () => Dialog.show({
          /* note the Dialog component is below the other elements in the app */
          title: "Hello",
          body: "Click outside to close, or press ESCAPE",
          backdrop: true
        })
      }}
    />
    <Dialog />
  </div>
)

const mountNode = document.querySelector("#app")
ReactDOM.render(<App />, mountNode)
~~~


##### With hyperscript

~~~javascript
import ReactDOM from "react-dom"
import { renderer as h, RaisedButton, Dialog } from "polythene-react"
import { addTypography } from "polythene-css"

addTypography()

const App = () => (
  h("div", [
    h(RaisedButton, {
      label: "Show dialog",
      events: {
        onClick: () => Dialog.show({
          /* note the Dialog component is below the other elements in the app */
          title: "Hello",
          body: "Click outside to close, or press ESCAPE",
          backdrop: true
        })
      }
    }),
    h(Dialog)
  ])
)

const mountNode = document.querySelector("#app")
ReactDOM.render(h(App), mountNode)
~~~


<a id="usage-in-a-html-file-or-jsfiddle"></a>
## Usage in a HTML file or JSFiddle

A "standalone" version of Polythene - useful for demonstration purposes - is available at:

~~~
https://rawgit.com/ArthurClemens/polythene/master/packages/polythene-react/dist/polythene-react-standalone.js
~~~

Included:

* All components
* All component styles, plus Material Design styles (typography and font), from `polythene-css`
* `subscribe`, `unsubscribe` from `polythene-core`
* Layout styles from `polythene-utilities`
* Fast Click from `polythene-fastclick`

Not included:

* React
* ReactDom

<a id="setup"></a>
### Setup

Add to your HTML file:

~~~html
<div id="root"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.js"></script>
<script src="https://rawgit.com/ArthurClemens/polythene/master/packages/polythene-react/dist/polythene-react-standalone.js"></script>
~~~

To be able to write es6, add `babel-standalone` (not necessary for JSFiddle):

~~~html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.25.0/babel.min.js"></script>
~~~

<a id="example-script"></a>
### Example script

~~~jsx
/* global polythene */
const { RaisedButton } = polythene

const App = () =>
  <RaisedButton label="Button" />

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
~~~


See: [Full working JSFiddle](https://jsfiddle.net/ArthurClemens/5db99xoj/)

