var assert = require('assert'),
    m = require('mithril'),
    render = require('mithril-node-render'),
    // snackbar = require('polythene/notification/snackbar'),
    {
        Button
    } = require('polythene');

var button1 = render([
    m(Button, {
        label: 'Show',
        raised: true,
        // events: {
        //     onclick: function() {
        //         snackbar.show({
        //             containerSelector: '#snackbar',
        //             title: 'This message tells some things using quite a few words.'
        //         });
        //     }
        // }
    }),
    // m('#snackbar', m(snackbar))
]);

var expectedButton1 = '<a class="pe-button pe-button--text     pe-button--raised  " id="" tabindex="0"><div class="pe-button__content"><div class="pe-shadow pe-shadow--animated " id=""><div class="pe-shadow__bottom pe-shadow--z-1"></div><div class="pe-shadow__top pe-shadow--z-1"></div></div><div class="pe-ripple pe-ripple--constrained " id=""><div class="pe-ripple__mask"><div class="pe-ripple__waves"></div></div></div><div class="pe-button__wash"></div><div class="pe-button__focus"></div><div class="pe-button__label">Show</div></div></a><div id="snackbar"><span class="pe-snackbar__placeholder"></span></div>';

assert(button1 === expectedButton1, 'We have HTML for a button');
