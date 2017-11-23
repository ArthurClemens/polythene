# polythene-core-css: CSS tools

* **styler**: Wrapper around [j2c](https://github.com/j2css/j2c) to add styles to the head
* **mixin**: CSS mixins
* **flex**: CSS flex mixins
* **Layout classes**: Provides common and flexbox classes

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Styler](#styler)
  - [Styler functions](#styler-functions)
- [Mixins](#mixins)
  - [Mixin functions](#mixin-functions)
- [Flexbox mixins](#flexbox-mixins)
  - [Using CSS-in-JS](#using-css-in-js)
  - [CSS files](#css-files)
  - [Flexbox mixin functions](#flexbox-mixin-functions)

<!-- /MarkdownTOC -->

<a name="styler"></a>
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

<a name="styler-functions"></a>
### Styler functions

* add
* addToDocument
* remove
* styleComponent


<a name="mixins"></a>
## Mixins

~~~javascript
import { mixin } from "polythene-core-css"

const styles = [{
  ".title": [
    mixin.ellipsis(1)
  ]
}]
~~~

<a name="mixin-functions"></a>
### Mixin functions

* clearfix
* createStyles
* defaultTransition
* ellipsis
* fit
* fontSmoothing
* sticky
* vendorize


<a name="flexbox-mixins"></a>
## Flexbox mixins

<a name="using-css-in-js"></a>
### Using CSS-in-JS

~~~javascript
import { flex } from "polythene-core-css"

const styles = [{
  ".horizontal-blocks": [
    flex.layoutHorizontal
  ]
}]
~~~

<a name="css-files"></a>
### CSS files

~~~javascript
import { flex } from "polythene-core-css"
~~~


<a name="flexbox-mixin-functions"></a>
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
