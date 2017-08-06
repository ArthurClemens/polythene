# Getting started with Polythene for Mithril


## Which packages do you need?

Required:

* `polythene-mithril`

Recommended:

* `polythene-style` Material Design styles (typography and font) [more info](packages/polythene-style.md)

Optional:

* `polythene-utilities` Layout helper classes [more info](packages/polythene-utilities.md)
* `polythene-fastclick` Eliminating the 300ms delay on mobile [more info](packages/polythene-fastclick.md)
* `polythene-core-css` CSS tools [more info](packages/polythene-core-css.md)


## Installation

~~~bash
yarn add polythene-mithril polythene-style
~~~

or

~~~bash
npm install --save polythene-mithril polythene-style
~~~


## A single component

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
          body: "Click outside to close, or press ESCAPE",
          backdrop: true
        })
      }
    }),
    m(Dialog),
  ]
}

m.mount(document.querySelector("#app"), app)
~~~


## Next

* [Documentation](README.md)
