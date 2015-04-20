module.exports = function(grunt) {
    'use strict';
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
        watch: {
            scripts: {
                files: ['lib/*/*.scss'],
                tasks: ['sass'],
                options: {
                    interrupt: true,
                }
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
                    'material-design-iconic-font': 'material-design-iconic-font/svg/*',
                    'mdi': 'mdi/icons/svg/*'
                }
            }
        },
        shell: {
            docs: {
                command: './tools/copy_docs ../gh-pages/app/docs'
            }
        }
    });
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('deps', ['bowercopy:iconic_font', 'bowercopy:svgs']);
    grunt.registerTask('author_docs', ['shell:docs']);
    grunt.registerTask('css', ['sass']);
};