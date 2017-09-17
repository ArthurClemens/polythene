# Polythene CSS

Polythene styles can be included in 2 ways:

1. Importing/linking CSS files
2. Using CSS-in-JS

Which option you choose may depend on how (and if) you want to use theming - more on that below.


## Getting started

With either option, `polythene-css` should be installed - see [Getting started with Mithril](getting-started-mithril.md) or [Getting started with React](getting-started-react.md).


## Using CSS files

Choose this:
* If you are using a bundler that already grabs and bundles all CSS files.
* or if you don't want to be reliant on the client rendering, for example when doing server-side rendering or when using a static site generator.

### Theming

Theming options are more limited than using CSS-in-JS as styles will not be added on the fly. But it is still possible to use the same tools as CSS-in-JS, only with an extra build step that results in a CSS file. This step can be automated of course.

[polythene-scripts](packages/polythene-scripts.md) provides the tooling for writing CSS based on component variables.

The alternative way is to add handwritten CSS. This does not involve a build step, but this may not be future proof; when a component structure would change later on, your custom CSS may no longer work.

### Usage

Package `polythene-css` contains all combined CSS files. Its existence in `node_modules` makes it possible to import CSS files **without** having to use `import` in JavaScript (which would enable CSS-in-JS, not what we want here).


#### Importing 

Most bundlers have options for importing CSS files. Frequently used with Webpack is [Extract Text Plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin).

Importing all CSS:

~~~javascript
import "polythene-css/dist/polythene.css"   // Component CSS
import "polythene-css/dist/typography.css"  // Default Material Design styles including Roboto font
~~~

Importing only one component's CSS:

~~~javascript
import "polythene-css/dist/polythene-button.css"
~~~


#### Linking

Copy the Polythene CSS file (or files) to your project and link to there.

Note that it is far too easy to forget to update these files, so this can only be recommended if you automate the copying.




## Using CSS-in-JS

Using CSS-in-JS has minimal setup costs and gives the possibility to add themed component styles on the fly.

Component styles are automatically added to `<head>` using [j2c](http://j2c.py.gy).


### Theming options

This requires no build step and is as simple as: `addStyle(".themed-component", { vars })`. More details at: [Theming](theming.md)

### Usage

Importing `polythene-css` activates CSS-in-JS:

~~~javascript
import "polythene-css"
~~~




## Supporting styles

Supporting styles (typography and Roboto web font styles) are optional and are added with function calls:

### Installation

~~~bash
yarn add polythene-style
~~~

or

~~~bash
npm install --save polythene-style
~~~

### Usage

~~~javascript
import { addTypography } from "polythene-style"

addTypography()
~~~

See also:

* [Loading web fonts](packages/polythene-utilities.md#web-font-loader)
* [Writing custom CSS](theming/custom-css.md)


## Layout classes

Package `polythene-utilities` includes helper classes that are useful to quickly add layout styles to hyperscript / jsx.

See: [Complete list of layout classes](packages/polythene-utilities.md#list-of-layout-classes)

### Installation

~~~bash
yarn add polythene-utilities
~~~

or

~~~bash
npm install --save polythene-utilities
~~~


### Usage

#### Classes

~~~javascript
import { addLayoutStyles } from "polythene-utilities"

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

