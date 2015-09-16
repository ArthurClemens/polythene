# Polythene Examples

Demonstration of [Polythene](https://github.com/ArthurClemens/Polythene) components.

Public site: [Polythene Examples](http://arthurclemens.github.io/Polythene-Examples/index.html).


## Setup

* `npm install` - installs dependencies and copies a subset to the app/lib folder

## Viewing

All js and css files are included in the distro, so no need to compile anything yet.

* `npm install -g http-server`
* `http-server ./src`


## Developing

If you want to play with the code, things need to get compiled. Install the following:

* `npm install sass -g`
* `npm install postcss-cli -g`
* `npm install clean-css -g`
* `npm install babel -g`


Compile (transpile) everything:

* `npm run transpile` - transpile es6 and scss files once

While developing:

* `npm run watch` - watch changes to scss and es6 files


## Building

* `npm run build` - compile everything to the build directory

