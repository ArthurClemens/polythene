# polythene-style: Material Design style

## Usage

~~~javascript
import { addRoboto, addTypography } from "polythene-style"

addRoboto()
addTypography()
~~~


## Roboto font

The Material Design Roboto font is loaded from Google Fonts using [webfontloader](https://github.com/typekit/webfontloader). To prevent the [Flash of Unstyled Text (FOUT)](https://www.paulirish.com/2009/fighting-the-font-face-fout/), add these styles:

~~~css
body {
  opacity: 0
}
html.wf-active body {
  opacity: 1
}
~~~

Or with JavaScript using [styler](../polythene-core-css):

~~~javascript
import { styler } from "polythene-core-css"

const foutStyles = [{
  "body": {
    opacity: 0
  },
  "html.wf-active body": {
    opacity: 1
  }
}]

styler.add("fout", foutStyles)
~~~
