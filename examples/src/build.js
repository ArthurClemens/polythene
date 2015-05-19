({
    appDir: '.',
    dir: '../build',
    mainConfigFile: 'common.js',
 
    optimize: 'uglify2',
    optimizeCss: 'standard.keepLines',
 	  removeCombined: true,

    include: ['css', 'text'],
    name: '../../node_modules/almond/almond'
})
