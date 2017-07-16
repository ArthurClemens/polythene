# Polythene

[![Join the chat at https://gitter.im/ArthurClemens/Polythene](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ArthurClemens/Polythene?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![CDNJS](https://img.shields.io/cdnjs/v/polythene.svg)](https://cdnjs.com/libraries/polythene)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=9ZXKVTQSW3AFA&lc=NL&item_name=Arthur%20Clemens&item_number=polythene&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

Modular implementation of Material Design for [Mithril](http://mithril.js.org/).

Compatible with Mithril 0.2.5. Polythene version 0.3.0. Rewrite for Mithril 1.x is in development.


* [Online documentation](http://polythene.js.org)


## Background

* [Polythene background](https://github.com/ArthurClemens/polythene/blob/master/packages/docs/polythene.md)
* [Theming](https://github.com/ArthurClemens/polythene/blob/master/packages/docs/theme.md)



## Documentation

* [Online documentation](http://polythene.js.org)
* [Docs](https://github.com/ArthurClemens/polythene/blob/master/packages/docs/)
* [Changes from 0.2 to 0.3](https://github.com/ArthurClemens/polythene/blob/master/packages/docs/changes.md)



## Setup

Polythene uses Node tools to build. It runs in the browser.

Source files are written in es2015 and transpiled to es5. Polythene works both in es2015 and es5 applications.

* [Project setup example](https://github.com/ArthurClemens/Polythene-setup)



### Basic example

A simple component that shows a button:

~~~javascript
import m from 'mithril';
import { Theme, Button } from 'polythene';

const app = {
    view: () => {
        return m('div', [
            m(Button, {
                label: 'Button',
                raised: true
            })
        ]);
    }
};

m.mount(document.body, app);
~~~

By importing `Theme`, the default material design styles, including Roboto font, are loaded.


### Standalone version

For use on JSBin / JSFiddle, load this script:

~~~html
https://rawgit.com/ArthurClemens/polythene/master/packages/polythene/polythene-standalone.js
~~~



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
