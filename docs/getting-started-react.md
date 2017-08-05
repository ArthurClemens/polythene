# Getting started with React

## Installation

~~~bash
yard add polythene-react polythene-style
~~~

or

~~~bash
npm install --save polythene-react polythene-style
~~~


## App code (JSX)

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


## App code (hyperscript)

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