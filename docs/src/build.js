({
    appDir: '.',
    dir: '../build',
    mainConfigFile: 'common.js',
 
    optimize: 'uglify2',
 	removeCombined: true,

    include: ['css', 'text', 'lodash', 'marked'],
    name: '../../../node_modules/almond/almond',
})
