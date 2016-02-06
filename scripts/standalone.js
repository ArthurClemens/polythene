var fs = require('fs');
var browserify = require('browserify');

function bundle(entries, outfile) {
    browserify({
        entries: entries,
        paths: ['.', 'node_modules'],
        require: ['mithril', 'polythene/base-button/base-button', 'polythene/button/button', 'polythene/card/card', 'polythene/checkbox/checkbox', 'polythene/dialog/dialog', 'polythene/element/element', 'polythene/fab/fab', 'polythene/header-panel/header-panel', 'polythene/icon/icon', 'polythene/icon-button/icon-button', 'polythene/list/list', 'polythene/list-tile/list-tile', 'polythene/menu/menu', 'polythene/notification/notification', 'polythene/polythene/polythene', 'polythene/radio-button/radio-button', 'polythene/ripple/ripple', 'polythene/search/search', 'polythene/selection-control/selection-control', 'polythene/shadow/shadow', 'polythene/slider/slider', 'polythene/spinner/spinner', 'polythene/svg/svg', 'polythene/switch/switch', 'polythene/tabs/tabs', 'polythene/textfield/textfield', 'polythene/theme/theme', 'polythene/toolbar/toolbar']
    })
    .transform({
        global: true
    }, 'uglifyify')
    .bundle()
    .on('error', function(err) {
        console.log('Error : ' + err.message);
    })
    .pipe(fs.createWriteStream(outfile));
};

bundle([
    'scripts/standalone-src.js'
], 'polythene/polythene-standalone.js');
