# Getting started with Mithril

## Installation

~~~bash
yarn add polythene-mithril polythene-style
~~~

or

~~~bash
npm install --save polythene-mithril polythene-style
~~~


## A simple component

~~~javascript
import m from "mithril"
import { RaisedButton } from "polythene-mithril"

m(RaisedButton, {
  label: "Click"
})
~~~


## A simple app

~~~javascript
import m from "mithril"
import { RaisedButton, Dialog } from "polythene-mithril"
import { addTypography, addRoboto } from "polythene-style"

addTypography()
addRoboto()

const app = {
  view: () => [
    m(RaisedButton, {
      label: "Show dialog",
      events: {
        onclick: () => Dialog.show({
          /* note the Dialog component is below the other elements in the app */
          title: "Hello",
          body: "Click outside to close",
          backdrop: true
        })
      }
    }),
    m(Dialog),
  ]
}

m.mount(document.querySelector("#app"), app)
~~~
