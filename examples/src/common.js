require.config({
    baseUrl: 'app',
    paths: {
        'mithril': 'lib/mithril/mithril.min',
        'polythene': 'lib/polythene',

        'css': 'lib/require-css/css.min',
        'text': 'lib/requirejs-text/text',

        'nav': 'app-nav',
        'github': 'app-github',

        'app': '.',
        'app-css': 'app',
        'common': '../common',
        
        'lodash': 'lib/lodash/lodash.min'
    },
    map: {
      '*': {
          'css': 'lib/require-css/css.min',
          'text': 'lib/requirejs-text/text'
      }
    },
    shim: {},
    deps: ['require'],
    callback: function(require) {
        'use strict';

        var path = (location.pathname === '/' || location.pathname === '/Polythene-Examples/') ? '/index.html' : location.pathname,
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