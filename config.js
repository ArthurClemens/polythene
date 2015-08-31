System.config({
    'defaultJSExtensions': true,
    'baseURL': '.',
    'transpiler': 'babel',
    'paths': {
        '*': '*.js',
        '*.css': '*.css',
        '*.svg': '*.svg'
    },
    'map': {
        'lodash': 'lib/lodash',
        'marked': 'lib/marked/marked.min',
        'mithril': 'lib/mithril/mithril.min',
        'polythene': 'lib/polythene',
        'polythene-theme': 'lib/polythene/theme',
        'css': 'lib/system-css/css',
        'text': 'lib/system-text/text'
    }
});
