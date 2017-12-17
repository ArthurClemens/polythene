# FastClick

Eliminates the 300ms delay on mobile.

Wrapper around FT Lab's [FastClick](https://github.com/ftlabs/fastclick).

> FastClick is a simple, easy-to-use library for eliminating the 300ms delay between a physical tap and the firing of a click event on mobile browsers. The aim is to make your application feel less laggy and more responsive while avoiding any interference with your current logic.

## Installation

~~~bash
yarn add polythene-fastclick
~~~

or

~~~bash
npm install --save polythene-fastclick
~~~

## Usage

~~~javascript
import { addFastClick } from "polythene-fastclick"

addFastClick()
~~~
