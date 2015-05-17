require.config({
    baseUrl: 'app',
    paths: {
        'polythene': 'lib/polythene',

        'app': '.',
        'app-css': 'app',
        'common': '../common',

        'mithril': 'lib/polythene/deps/mithril/mithril.min',
        'css': 'lib/polythene/deps/require-css/css.min',
        'text': 'lib/polythene/deps/requirejs-text/text',
        'lodash': 'lib/lodash/lodash.min',
        'marked': 'lib/marked/marked.min'
    },
    map: {
      '*': {
          'css': 'lib/polythene/deps/require-css/css.min',
          'text': 'lib/polythene/deps/requirejs-text/text'
      }
    },
    shim: {},
    deps: ['require'],
    callback: function(require) {
        'use strict';

        var path = (location.pathname === '/' || location.pathname === '/Polythene/') ? '/index.html' : location.pathname,
            filename = path.match(/\/([^\/]*)$/),
            modulename;

        if (filename && filename[1] !== '') {
            modulename = ['app', filename[1].split('.')[0], 'main']
                         .join('/');

            require([modulename]);
        } else {
            if (window.console) {
                console.log('no modulename found via location.pathname');
            }
        }
    }
});