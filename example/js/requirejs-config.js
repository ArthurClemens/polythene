require.config({
    baseUrl: '../',
    paths: {
        mithril: 'example/js/lib/mithril/mithril'
    },
    map: {
      '*': {
        'css': 'example/js/lib/require-css/css'
      }
    },
    waitSeconds: 10
});