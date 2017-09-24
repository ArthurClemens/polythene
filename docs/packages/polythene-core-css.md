# polythene-core-css: CSS tools


* **styler**: Wrapper around [j2c](https://github.com/j2css/j2c) to add styles to the head
* **mixin**: CSS mixins
* **flex**: CSS flex mixins
* **Layout classes**: Provides common and flexbox classes


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


## Layout classes

Provides common and flexbox classes. Note that these are extra and not required for Polythene apps.

### Usage

#### Classes

~~~javascript
import { addLayoutStyles } from "polythene-core-css"

addLayoutStyles()
~~~

#### Mithril example

~~~javascript
m(".layout.vertical", ...)
~~~

#### React JSX example

~~~javascript
<div className="layout vertical" />
~~~


### List of layout classes 

#### Common

~~~css
.pe-block
.pe-inline-block
.pe-hidden
.pe-relative
.pe-absolute
.pe-fit
.pe-fullbleed
~~~

#### Flex

~~~css
/* flex */
.flex
.flex.auto
.flex.auto-vertical
.flex.none
.flex.one
.flex.two
.flex.three
.flex.four
.flex.five
.flex.six
.flex.seven
.flex.eight
.flex.nine
.flex.ten
.flex.eleven
.flex.twelve

/* layout */
.layout
.layout.horizontal
.layout.horizontal.inline
.layout.vertical.inline
.layout.horizontal
.layout.horizontal.reverse
.layout.vertical
.layout.vertical.reverse
.layout.wrap
.layout.wrap.reverse

/* alignment in cross axis */
.layout.start
.layout.center,
.layout.center-center
.layout.end

/* alignment in main axis */
.layout.start-justified
.layout.center-justified
.layout.center-center
.layout.end-justified
.layout.around-justified
.layout.justified

/* self alignment */
.self-start
.self-center
.self-end
.self-stretch
~~~


