require.config({
    baseUrl: 'app/lib',
    paths: {
        'mithril': 'mithril/mithril',

        'css': 'require-css/css',
        'text': 'requirejs-text/text',

        'app': '..',
        'app-css': '../app',
        'common': '../../common',
        'marked': 'marked/marked',
        'lodash': 'lodash/lodash'
    },
    map: {
      '*': {
          'css': 'require-css/css',
          'text': 'requirejs-text/text'
      }
    },
    shim: {},
    deps: ['require'],
    callback: function(require) {
        'use strict';

        var path = (location.pathname === '/') ? '/index.html' : location.pathname,
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