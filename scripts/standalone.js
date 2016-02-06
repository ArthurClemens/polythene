var fs = require('fs');
var browserify = require('browserify');
var sh = require('shelljs');

var folders = ['base-button', 'button', 'card', 'checkbox', 'common', 'config', 'dialog', 'element', 'fab', 'font-roboto', 'header-panel', 'icon', 'icon-button', 'layout', 'list', 'list-tile', 'menu', 'notification', 'polythene', 'radio-button', 'ripple', 'search', 'selection-control', 'shadow', 'slider', 'spinner', 'svg', 'switch', 'tabs', 'textfield', 'theme', 'toolbar'];

function prepare() {
    sh.mkdir('-p', 'tmp');
    folders.map(function(folder) {
        sh.mv(folder, 'tmp/' + folder);
    });
    sh.mv('tmp', 'polythene');
}

function teardown() {
    sh.mv('polythene', 'tmp');
    folders.map(function(folder) {
        sh.mv('tmp/' + folder, '../');
    });
    // sh.rm('-rf', 'tmp');
}

function build() {
    var bundle = function(entries, outfile) {
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
        .pipe(fs.createWriteStream(outfile))
        .on('success', function() {
            teardown();
        });
    };

    bundle([
        'scripts/standalone-src.js'
    ], 'polythene-standalone.js');
}

prepare();
// build();
