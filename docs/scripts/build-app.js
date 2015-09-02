/*
NOTE: this build script does not work on Windows, yet
*/

var Builder = require('systemjs-builder');

var DESTINATION = 'build';
var DESTINATION_DIR = [DESTINATION, '/'].join('');
var appDir = [DESTINATION_DIR, 'app', '/'].join('');

var filesToMinify = [
    DESTINATION_DIR + 'lib/system-css/css.js',
    DESTINATION_DIR + 'lib/system-text/text.js',
    DESTINATION_DIR + 'lib/systemjs/es6-module-loader.js',
    DESTINATION_DIR + 'lib/systemjs/system.js'
];

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
    'cp', '-R', 'src/lib/marked', DESTINATION_DIR + 'lib/',
    '&&',
    'cp', '-R', 'src/lib/systemjs', DESTINATION_DIR + 'lib/',
    '&&',
    'cp', '-R', 'src/lib/mithril', DESTINATION_DIR + 'lib/',
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
];

execute(cmds.join(' '));

filesToMinify.map(function(file) {
    execute([__dirname + '/../node_modules/.bin/uglifyjs', '-o', file, file].join(' '));
});

var builder = new Builder({
    'baseURL': 'src',
    'defaultJSExtensions': true,
    'paths': {
        '*': '*.js',
        '*.css': '*.css',
        '*.svg': '*.svg'
    },
    'map': {
        'marked': 'lib/marked/marked.min',
        'lodash': 'lib/lodash',
        'mithril': 'lib/mithril/mithril.min',
        'polythene': 'lib/polythene',
        'polythene-theme': 'lib/polythene/theme',
        'css': 'lib/system-css/css',
        'text': 'lib/system-text/text'
    }
});

var buildOpts = {
    minify: false,
    sourceMaps: true,
    lowResSourceMaps: true
};

builder.build('app/index/index', DESTINATION + '/app/index/index.js', buildOpts).then(function() {
        console.log('Build complete');
    })
    .catch(function(err) {
        console.error(err);
    });
