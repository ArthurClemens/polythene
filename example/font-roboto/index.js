'use strict';

require('style/useable!css!../example-assets/example.css').use();
require('style/useable!css!./index.css').use();

require('polythene/lib/font-roboto');

document.title = 'Font Roboto';
document.body.innerHTML = require('html!./content');
