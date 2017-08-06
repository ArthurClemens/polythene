# Getting started with React


## Which packages do you need?

Required:

* `polythene-react`

Recommended:

* `polythene-style` Material Design styles (typography and font) [more info](packages/polythene-style.md)

Optional:

* `polythene-utilities` Layout helper classes [more info](packages/polythene-utilities.md)
* `polythene-fastclick` Eliminating the 300ms delay on mobile [more info](packages/polythene-fastclick.md)
* `polythene-core-css` CSS tools [more info](packages/polythene-core-css.md)


## Installation

~~~bash
yarn add polythene-react polythene-style
~~~

or

~~~bash
npm install --save polythene-react polythene-style
~~~


## A simple component

### With JSX

~~~jsx
import React from "react"
import { RaisedButton } from "polythene-react"

<RaisedButton label="Click" />
~~~

### With hyperscript

~~~javascript
import { renderer as h, RaisedButton } from "polythene-react"

h(RaisedButton, {
  label: "Click"
})
~~~


## A simple app

### With JSX

~~~jsx
import React from "react"
import ReactDOM from "react-dom"
import { renderer as h, RaisedButton, Dialog } from "polythene-react"
import { addTypography, addRoboto } from "polythene-style"

addTypography()
addRoboto()

const App = () => (
  <div>
    <RaisedButton
      label="Show dialog"
      events={{
        onClick: () => Dialog.show({
          /* note the Dialog component is below the other elements in the app */
          title: "Hello",
          body: "Click outside to close",
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


### With hyperscript

~~~javascript
import ReactDOM from "react-dom"
import { renderer as h, RaisedButton, Dialog } from "polythene-react"
import { addTypography, addRoboto } from "polythene-style"

addTypography()
addRoboto()

const App = () => (
  h("div", [
    h(RaisedButton, {
      label: "Show dialog",
      events: {
        onClick: () => Dialog.show({
          /* note the Dialog component is below the other elements in the app */
          title: "Hello",
          body: "Click outside to close",
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


## Next

* [Documentation](README.md)
