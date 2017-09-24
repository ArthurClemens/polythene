# Polythene CSS

Polythene styles can be included in 2 ways:

1. Using CSS-in-JS
1. Importing/linking CSS files


Which option you choose may depend on how (and if) you want to use theming - more on that below.


## Getting started

With either option, `polythene-css` should be installed - see [Getting started with Mithril](getting-started-mithril.md) or [Getting started with React](getting-started-react.md).


## Using CSS-in-JS

Using CSS-in-JS has minimal setup costs and gives the possibility to add themed component styles on the fly.

Component styles are automatically added to `<head>` using [j2c](http://j2c.py.gy).


### Theming options

This requires no build step and is as simple as: `addStyle(".themed-component", { vars })`; more details at: [Theming Configuration variables](theming/configuration-variables.md).

### Usage

Importing `polythene-css` activates CSS-in-JS:

~~~javascript
import "polythene-css"
~~~


## Using CSS files

Choose this:
* If you are using a bundler that already grabs and bundles all CSS files.
* or if you don't want to be reliant on the client rendering, for example when doing server-side rendering or when using a static site generator.

### Theming

Theming options are more limited than using CSS-in-JS as styles will not be added on the fly. But it is still possible to use the same tools as CSS-in-JS, only with an extra build step that results in a CSS file. This step can be automated of course.

[polythene-scripts](packages/polythene-scripts.md) provides the tooling for writing CSS based on component variables.

The alternative way is to add handwritten CSS. This does not involve a build step, but this may not be future proof; when a component structure would change later on, your custom CSS may no longer work.

### Usage

Package `polythene-css` contains all combined component CSS files. Its existence in `node_modules` makes it possible to import CSS files **without** having to use `import` in JavaScript (which would enable CSS-in-JS, not what we want here).


#### Importing 

Most bundlers have options for importing CSS files. Frequently used with Webpack is [Extract Text Plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin).

Importing all CSS:

~~~javascript
import "polythene-css/dist/polythene.css"   // Component CSS
import "polythene-css/dist/polythene-typography.css"  // Default Material Design styles including Roboto font
~~~

Importing only one component's CSS:

~~~javascript
import "polythene-css/dist/polythene-button.css"
~~~


#### Linking

Copy the Polythene CSS file (or files) to your project and link to there.

Note that it is far too easy to forget to update these files, so this can only be recommended if you automate the copying.



## Supporting styles

Supporting styles (typography and Roboto web font styles) are optional and are added with function calls.


### Usage

~~~javascript
import { addTypography } from "polythene-css"

addTypography()
~~~

See also:

* [Loading web fonts](packages/polythene-utilities.md#web-font-loader)
* [Writing custom CSS](theming/custom-css.md)



## Roboto font

The Material Design Roboto font is automatically loaded when `addTypography` is used.

It can also be loaded independent of typography styles:

~~~javascript
import { addRoboto } from "polythene-css"

addRoboto()
~~~

The Material Design Roboto font is loaded from Google Fonts using [webfontloader](https://github.com/typekit/webfontloader).
The benefit of using this approach is that when the font is loaded, styles are added to the `html` tag.

To prevent the [Flash of Unstyled Text (FOUT)](https://www.paulirish.com/2009/fighting-the-font-face-fout/), add these styles:

~~~css
body {
  opacity: 0
}
html.wf-active body {
  opacity: 1
}
~~~

Or with JavaScript using `styler`:

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



## Layout classes

Package `polythene-css` also includes helper classes that are useful to quickly add layout styles to hyperscript / JSX (see the complete list of layout classes below). As these are optional too, they can be added with a function call.


### Usage

~~~javascript
import { addLayoutStyles } from "polythene-css"

addLayoutStyles()
~~~

#### Mithril example

~~~javascript
m(".layout.vertical", "Vertical content")
~~~

#### React JSX example

~~~javascript
<div className="layout vertical">Vertical content</div>
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



## Eliminating the 300ms delay on mobile

See: [Package polythene-fastclick](packages/polythene-fastclick.md)

### Installation

~~~bash
yarn add polythene-fastclick
~~~

or

~~~bash
npm install --save polythene-fastclick
~~~

### Usage

~~~javascript
import { addFastClick } from "polythene-fastclick"

addFastClick()
~~~
