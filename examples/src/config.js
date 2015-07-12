System.config({
    'defaultJSExtensions': true,
    'baseURL': '.',
    'paths': {
        '*': '*.js',
        '*.css': '*.css',
        '*.svg': '*.svg'
    },
    'map': {
        'lodash': 'lib/lodash/lodash.min',
        'mithril': 'lib/mithril/mithril.min',
        'mithril-infinite': 'lib/mithril-infinite/mithril-infinite',
        'verge': 'lib/verge/verge.min',
        'polythene': 'lib/polythene',
        'polythene-theme': 'lib/polythene/theme',
        'css': 'lib/system-css/css',
        'text': 'lib/system-text/text'
    }
});
