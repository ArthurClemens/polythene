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
                clean: false
            },
            iconic_font: {
                options: {
                    destPrefix: 'lib/font-iconic'
                },
                files: {
                    'material-design-iconic-font/css': 'material-design-iconic-font/css/*',
                    'material-design-iconic-font/fonts': 'material-design-iconic-font/fonts/*',
                }
            },
            svgs: {
                options: {
                    destPrefix: 'lib/svg'
                },
                files: {
                    'svgs': 'material-design-iconic-font/svg/*'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('deps', ['bowercopy']);
    grunt.registerTask('css', ['sass']);
};