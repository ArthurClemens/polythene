# Polythene v1.0 (UNDER DEVELOPMENT)

[![Join the chat at https://gitter.im/ArthurClemens/Polythene](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ArthurClemens/Polythene?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![CDNJS](https://img.shields.io/cdnjs/v/polythene.svg)](https://cdnjs.com/libraries/polythene)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=9ZXKVTQSW3AFA&lc=NL&item_name=Arthur%20Clemens&item_number=polythene&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

## Guides

Compatible with Mithril 0.2.5. Polythene version 0.3.0. Rewrite for Mithril 1.x is in development.


* [Online documentation](http://polythene.js.org)

## Using the rewrite-universal branch

Version 1.0 is not yet in the npm registry. You will need to use some workarounds, f.i. with Webpack's resolve/alias configuration settings.

An example project setup is available at [polythene-mithril-rewrite-branch-starter](https://github.com/ArthurClemens/polythene-mithril-rewrite-branch-starter)



## Documentation

* [Online documentation](http://polythene.js.org)
* [Docs](https://github.com/ArthurClemens/polythene/blob/master/packages/docs/)
* [Changes from 0.2 to 0.3](https://github.com/ArthurClemens/polythene/blob/master/packages/docs/changes.md)



## Setup

Polythene is now a monorepo. Components are located inside the "packages" directory.


* [Project setup example](https://github.com/ArthurClemens/Polythene-setup)


```
npm install -g lerna
```

Get the rewrite branch:

```
git clone https://github.com/ArthurClemens/polythene.git
cd polythene
git checkout git checkout origin/rewrite-universal
yarn
```

This will run `lerna init` and `lerna bootstrap`.

Commands:

* `lerna run build` - builds all components (in each dist directory)
* `lerna run build:component button` - builds the button component; the same goes for the other components
* `lerna run build:tests` - builds the tests
* `lerna run clean` - removes all dist directories

Packages are built with [Rollup](http://rollupjs.org), both as `es` module and as `umd`. Rollup creates smaller files compared to Webpack 2. If you like to experiment, build scripts are in the root `scripts` directory.



### Testing

Includes Jest snapshots and a viewer to verify the output.

* `cd packages/test`
* `yarn install`

* Run in browser:

## Installation

* `yarn add polythene`



## Development

* `yarn`
* `lerna bootstrap`

### Polythene

* `yarn run build`

### Examples

* `yarn run dev` - runs webpack dev server on port 3000



## Browser support

* Internet Explorer: 11
* Edge: 13+
* Chrome: 54+
* Firefox: 49+
* Safari: 9+
* Mobile Safari: 9+


The default theme uses flexbox, so this works in IE10 and other browsers. For IE9 you will need to adapt the theme.



## Project progress

### Done

* Button
* Card
* Checkbox
* Dialog
* Divider (part of List)
* Floating Action Button
* Header panel
* Icon
* Icon button (toggle button)
* List
* List tile
* Menu, Simple menu
* Notification and Snackbar
* Radio button
* Ripple
* Search
* Shadow
* Slider
* Spinner
* Subheader (part of List)
* SVG
* Switch
* Tabs
* Text field
* Theming
* Toolbar
* Validation

### To do

1. Collapse
1. Dropdown button
1. Progress bar
1. Bottom sheet
1. Grid list
1. Data table
1. Stepper
1. Tooltip
1. Side menu
1. Picker
1. Chip
1. Reorder list


## Donations

Polythene is a volunteer run project. Support its development by donating:

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=9ZXKVTQSW3AFA&lc=NL&item_name=Arthur%20Clemens&item_number=polythene&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)


## License

MIT
