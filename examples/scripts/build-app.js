/*
NOTE: this build script does not work on Windows, yet
*/

var Builder = require('systemjs-builder');

var DESTINATION = 'build';
var DESTINATION_DIR = [DESTINATION, '/'].join('');
var appDir = [DESTINATION_DIR, 'app', '/'].join('');

var SUB_DIRS = [
    'button',
    'card',
    'element',
    'fab',
    'header-panel',
    'icon',
    'icon-button',
    'index',
    'item',
    'list',
    'list-tile',
    'ripple',
    'shadow',
    'svg',
    'toolbar'
];

var filesToMinify = [
    DESTINATION_DIR + 'lib/system-css/css.js',
    DESTINATION_DIR + 'lib/system-text/text.js',
    DESTINATION_DIR + 'lib/systemjs/es6-module-loader.js',
    DESTINATION_DIR + 'lib/systemjs/system.js'
];

var getSubDirPath = function(name) {
    return ['app', name, name].join('/');
};

var execute = function(command) {
    var exec = require('child_process').exec;
    var logError = function(error, stdout) {
        if (error && stdout) {
            console.log(error, stdout);
        }
    };
    exec(command, logError);
};

var cmds = [
    'rm', '-fR', DESTINATION,
    '&&',
    'mkdir', '-p', DESTINATION,
    '&&',
    'mkdir', '-p', DESTINATION_DIR + 'lib',
    '&&',
    'cp', 'src/config.js', DESTINATION_DIR,
    '&&',
    'cp', 'src/*.html', DESTINATION_DIR,
    '&&',
    'cp', '-R', 'src/lib/lodash', DESTINATION_DIR + 'lib/',
    '&&',
    'cp', '-R', 'src/lib/systemjs', DESTINATION_DIR + 'lib/',
    '&&',
    'cp', '-R', 'src/lib/mithril', DESTINATION_DIR + 'lib/',
    '&&',
    'cp', '-R', 'src/lib/mithril-infinite', DESTINATION_DIR + 'lib/',
    '&&',
    'cp', '-R', 'src/lib/verge', DESTINATION_DIR + 'lib/',
    '&&',
    'cp', '-R', 'src/lib/system-css', DESTINATION_DIR + 'lib/',
    '&&',
    'cp', '-R', 'src/lib/system-text', DESTINATION_DIR + 'lib/',
    '&&',
    // copy polythene instead of symlink
    'cp', '-R', '../lib', DESTINATION_DIR + 'lib/polythene',
    '&&',
    'cp', '-R', 'src/app', DESTINATION_DIR,
    '&&',
    'rm', appDir + '**/*.scss',
    '&&',
    'rm', appDir + '**/*.es6.js',
    '&&',
    'rm', '-R', appDir + '**/.sass-cache'
].concat(filesToMinify.map(function(file) {
    return ['&&', 'uglifyjs', '-o', file, file].join(' ');
}));

execute(cmds.join(' '));

var builder = new Builder({
    'baseURL': 'src',
    'defaultJSExtensions': true,
    'paths': {
        '*': '*.js',
        '*.css': '*.css',
        '*.svg': '*.svg'
    },
    'map': {
        'lodash': 'lib/lodash',
        'mithril': 'lib/mithril/mithril.min',
        'mithril-infinite': 'lib/mithril-infinite/mithril-infinite',
        'polythene': 'lib/polythene',
        'polythene-theme': 'lib/polythene/theme',
        'css': 'lib/system-css/css',
        'text': 'lib/system-text/text'
    }
});

var buildOpts = {
    minify: true,
    sourceMaps: true,
    lowResSourceMaps: true
};

Promise.all(SUB_DIRS.map(function(dir) {
        return builder.trace(getSubDirPath(dir));
    })).then(function(trees) {
        var commonTree = builder.intersectTrees.apply(this, trees);
        return Promise.all([
            builder.buildTree(commonTree, 'build/app/app/common.js', buildOpts)
        ].concat(trees.map(function(tree, index) {
            return builder.buildTree(builder.subtractTrees(tree, commonTree), DESTINATION_DIR + getSubDirPath(SUB_DIRS[index]) + '.js', buildOpts);
        })));
    }).then(function() {
        console.log('Build complete');
    })
    .catch(function(err) {
        console.error(err);
    });
