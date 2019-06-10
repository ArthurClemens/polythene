# Getting started with Polythene for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Example setup](#example-setup)
- [Usage in JavaScript modules](#usage-in-javascript-modules)
  - [Which packages do you need?](#which-packages-do-you-need)
  - [Installation](#installation)
  - [Examples](#examples)
    - [A single component](#a-single-component)
    - [A simple app](#a-simple-app)
- [Usage in a HTML file, JSFiddle or flems](#usage-in-a-html-file-jsfiddle-or-flems)
  - [Setup](#setup)
  - [Example script](#example-script)

<!-- /MarkdownTOC -->


<a id="example-setup"></a>
## Example setup

* [polythene-mithril-setup](https://github.com/ArthurClemens/polythene-mithril-setup)


<a id="usage-in-javascript-modules"></a>
## Usage in JavaScript modules

Add Polythene to your project with [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com/).

<a id="which-packages-do-you-need"></a>
### Which packages do you need?

Essential:

* `mithril`
* `polythene-mithril`

Recommended:

* `polythene-css` Provides component CSS files and Material Design styles (typography and font); optionally activates CSS-in-JS [more info](css.md)

Optional:

* `polythene-utilities` Layout helper classes [more info](packages/polythene-utilities.md)
* `polythene-core-css` CSS tools [more info](packages/polythene-core-css.md)

<a id="installation"></a>
### Installation

~~~bash
npm install --save polythene-mithril polythene-css
~~~


<a id="examples"></a>
### Examples

#### A single component

~~~javascript
import m from "mithril"
import { Button } from "polythene-mithril"
import "polythene-css"

m(Button, {
  raised: true,
  label: "Click"
})
~~~

#### A simple app

~~~javascript
import m from "mithril"
import { Button, Dialog } from "polythene-mithril"
import { addTypography } from "polythene-css"

addTypography()

const App = {
  view: () => [
    m(Button, {
      raised: true,
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


<a id="usage-in-a-html-file-or-jsfiddle"></a>
## Usage in a HTML file, JSFiddle or flems

A "standalone" version of Polythene - useful for demonstration purposes - is available at:

~~~
https://unpkg.com/polythene-mithril/dist/polythene-mithril-standalone.js
~~~

Included:

* All components
* All component styles, plus Material Design styles (typography and font), from `polythene-css`
* `subscribe`, `unsubscribe` from `polythene-core`
* Layout styles from `polythene-utilities`

Not included:

* Mithril

<a id="setup"></a>
### Setup

Add to your HTML file:

~~~html
<div id="root"></div>

<script src="https://unpkg.com/mithril@1.1.6/mithril.min.js"></script>
<script src="https://unpkg.com/polythene-mithril/dist/polythene-mithril-standalone.js"></script>
~~~

To be able to write es6, add `babel-standalone` (not necessary for JSFiddle or flems):

~~~html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
~~~

<a id="example-script"></a>
### Example script

~~~javascript
/* global m, polythene */
const { Button } = polythene

const App = {
  view: () =>
    m(Button, {
      raised: true,
      label: "Button"
    })
}

// Assuming a html element with id `root`
m.mount(document.getElementById("root"), App)
~~~


See: [online flems](https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgRloDYBmAXRIDMBLJGGqCiYAtsjQA6ABYAXEfGLooMxMtQgAOlAA8Zcj2wyABDHJgAvBpCyZuFAHp7mcjKkBXM0jGwJAcx6ubgBGEjwQTjB4MjD22AgAnq6qiPYwMphQ+Jjw0Clx8IlSyQC0IgFS+vCxCUlQiKXllcVpGVk5dRIAVjBWAHzaqRQGMr1aWrpDhiZmltYytjAOTi7unojeMH7lwaHhmJGI0dUFtSktmdm5x4UlYJHXp8V3MM3pF+2IXT0g-YP6hqMoON8DwAG5GHj4WaUCAyPoDEGg3ogAC+RCEonEIC+ikgylUMnUeLSRmARgAQm55tAjCijOYjPkbnUxlBicYAILYbD00laIxGUE8RAAdxQRgAFABKemAgUCkQSynUqBEPlQeXy8iYHh4fDimTkNyIIj8zVGLBBRDwcVWZUyaBWM0ClFSrQo1kiCQiCBuZQS-AQMBubwyPyHACiXgJ5PiAEl8BKrDC4SApWqudgpaj0SBhGJ1BJnrjoCo1GhUZwQPAeFAANYCFDUDEFtBlVyVAACdQAHoSSB4FGgbHZHH7sHXfEWICJ7O2KnxOwAmCS0VfFMwSZhzxp8b21nEkGTxbBYvTDSsooA)


