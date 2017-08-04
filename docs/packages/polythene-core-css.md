# polythene-core-css: CSS tools


* **styler**: Wrapper around [j2c](https://github.com/j2css/j2c) to add styles to the head
* **mixin**: CSS mixins
* **flex**: CSS flex mixins


## Styler

~~~javascript
import { styler } from "polythene-core-css"

const styles = [
  {
    ".info": {
      "background-color": "#FF1744"
    }
  }
]

styler.add("app", styles)
~~~

### Styler functions

* add
* addToDocument
* remove
* styleComponent


## Mixins

~~~javascript
import { mixin } from "polythene-core-css"

const styles = [{
  ".title": [
    mixin.ellipsis(1)
  ]
}]
~~~

### Mixin functions

* clearfix
* createStyles
* defaultTransition
* ellipsis
* fit
* fontSmoothing
* sticky
* vendorize


## Flexbox mixins

~~~javascript
import { flex } from "polythene-core-css"

const styles = [{
  ".horizontal-blocks": [
    flex.layoutHorizontal
  ]
}]
~~~

### Flexbox mixin functions

* flex
* flexAuto
* flexAutoVertical
* flexIndex
* flexGrow
* layout
* layoutAroundJustified
* layoutCenter
* layoutCenterCenter
* layoutCenterJustified
* layoutEnd
* layoutEndJustified
* layoutHorizontal
* layoutHorizontalReverse
* layoutInline
* layoutJustified
* layoutStart
* layoutStartJustified
* layoutVertical
* layoutVerticalReverse
* layoutWrap
* layoutWrapReverse
* selfCenter
* selfEnd
* selfStart
* selfStretch
