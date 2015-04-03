module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: './lib/',
                    src: ['*/*.scss'],
                    dest: 'lib/',
                    ext: '.css'
                }]
            }
        },
        bowercopy: {
            options: {
                clean: true
            },
            example_lib: {
                options: {
                    destPrefix: 'example'                    
                },
                files: {
                    'js/lib/mithril/mithril.js': 'mithril/mithril.js',
                    'js/lib/requirejs/require.js': 'requirejs/require.js',
                    'js/lib/require-css': 'require-css/*.js',
                    'css/lib/material-design-iconic-font/css': 'material-design-iconic-font/css/*',
                    'css/lib/material-design-iconic-font/fonts': 'material-design-iconic-font/fonts/*'
                }
            },
            iconic_font: {
                options: {
                    destPrefix: 'lib/font-iconic'
                },
                files: {
                    'material-design-iconic-font/css': 'material-design-iconic-font/css/*',
                    'material-design-iconic-font/fonts': 'material-design-iconic-font/fonts/*'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('deps', ['bowercopy']);
    grunt.registerTask('css', ['sass']);
};