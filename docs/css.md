# Polythene CSS

Polythene styles can be included in 2 ways:

1. Including CSS files
2. Using css-in-js








Get component CSS files (or all components) and add them to your project
* Use css-in-js

Options for theming:

* With CSS files: generate themed CSS, add this to the project
    * Using polythene-scripts
* With css-in-js
    * Easiest when theming components (no build step required)










Polythene uses [j2c](http://j2c.py.gy) to write styles directly to the head of the page.

Component styles are added automatically to the page.


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
import { addTypography, addRoboto } from "polythene-style"

addTypography()
addRoboto()
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

