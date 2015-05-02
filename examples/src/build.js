({
    appDir: '.',
    dir: '../build',
    mainConfigFile: 'common.js',
 
    optimize: 'uglify2',
 	removeCombined: true,

    include: ['css', 'text'],
    name: '../../../node_modules/almond/almond',
})
