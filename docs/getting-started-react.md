# Getting started with Polythene for React

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

~~~jsx
import React from "react"
import { Button } from "polythene-react"
import "polythene-css"

<Button raised label="Click" />
~~~


#### A simple app

~~~jsx
import React from "react"
import ReactDOM from "react-dom"
import { Button, Dialog } from "polythene-react"
import "polythene-css"
import { addTypography } from "polythene-css"

addTypography()

const App = () => (
  <div>
    <Button
      raised
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

<a id="usage-in-a-html-file-or-jsfiddle"></a>
## Usage in a HTML file, JSFiddle or flems

A "standalone" version of Polythene - useful for demonstration purposes - is available at:

~~~
https://unpkg.com/polythene-react/dist/polythene-react-standalone.js
~~~

Included:

* All components
* All component styles, plus Material Design styles (typography and font), from `polythene-css`
* `subscribe`, `unsubscribe` from `polythene-core`
* Layout styles from `polythene-utilities`

Not included:

* React
* ReactDom

<a id="setup"></a>
### Setup

Add to your HTML file:

~~~html
<div id="root"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/polythene-react/dist/polythene-react-standalone.js"></script>
~~~

To be able to write es6, add `babel-standalone` (not necessary for JSFiddle or flems):

~~~html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
~~~

<a id="example-script"></a>
### Example script

~~~jsx
/* global polythene */
const { Button } = polythene

const App = () =>
  <Button raised label="Button" />

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
~~~


See: [online flems](https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvAHjmoCcIAHYgAjgdqAXgA6IEsW5xEAelkYOxQgFchsHGjj4A5hGUqARvgi0FcODGJxZ3WlACeypjFlxiGNABMMUeq7tHZzQYAFoOGAxqYlt7J0IXcMjo0PdPHz8Q-AArOHEAPhY3Th5ifNE0NhLeASExCWIpGXlFA3UYTW09A2NTc0trWKCEkLcPb19-IfjE6gtp4LC5uFTxjP8cvJBC4q5ecsr2Pf5BEXFJaTlZai80Ta8YKAgANw58EJi0bixZCKjicK0FSMDihLy0LAAAQArPgAAz4ACMshUWC8v2SAI4QJBYIh+CwEDuuQKRSOpQOFRYXhefAgXnq2NoxFJshpz3ylBAllg0VMWjwABZEIiAMyhYUAThAAF8KOhsLhEARcly6AwmMQ8Or3HxgHwAELA4j0PgyvjCPiBGYhCoVHX8ACC3G4Fr4AAoAJQWg58PgsI2NU0cDAQSxePhQDCGR71QMmtDiPiySloABKmIAIgB5ACy+Ai3hgHHdFT9LGdrpTFDLfHB1FRmt0VgAohpNQaHABJLylkBMlkgT0VT1qiHcaDFvCGaOPLk8mB8+gIZUADhFsvlIEwODw+GWY41zGVsoAulQnmgANYr1DbxV4P7RfAPZ6PWjfJuqqhqcjKi7NCiXxXjo+4Qhi-womiEHPq+76fgwmxcsQDjcEq3LVFqcoKruypPgC4JYC+MBvn4CHEEhP4cH+DRNFcKjAaBdA-PheI-Ki6KsYRxGkR+mgUd+IAoWheDkrwZ4ykAA)

