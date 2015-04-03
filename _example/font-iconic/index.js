'use strict';

require('style/useable!css!../example-assets/example.css').use();
require('style/useable!css!./index.css').use();

require('polythene/lib/font-iconic');

document.title = 'Font Iconic';
document.body.innerHTML = require('html!./content');
