module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        bowercopy: {
            options: {
                clean: false
            },
            libs: {
                options: {
                    destPrefix: 'src/app/lib'                    
                },
                files: {
                    'mithril/mithril.js': 'mithril/mithril.js',
                    'requirejs/require.js': 'requirejs/require.js',
                    'require-css': 'require-css/*.js',
                    'requirejs-text': 'requirejs-text/*.js'
                }
            },
            built: {
                options: {
                    destPrefix: '../../gh-pages'                    
                },
                files: {
                    './': '../build/*',
                }
            }
        },

        // symlink: only for local development of Polythene
        symlink: {
            options: {
                overwrite: false
            },
            expanded: {
                files: [
                    {
                        expand: true,
                        overwrite: false,
                        cwd: '../lib',
                        src: ['.'],
                        dest: 'src/app/lib/polythene'
                    }
                ]
            }
        },

        // build options
        // see: https://github.com/cloudchen/requirejs-bundle-examples
        requirejs: {
            options: {
                'appDir': 'src',
                'dir': 'build',
                'mainConfigFile': 'src/common.js',
                'optimize': 'uglify2',
                'normalizeDirDefines': 'skip',
                'skipDirOptimize': true,
                'removeCombined': true
            },
            shared: {
                options: {
                    'modules': [
                        {
                            'name': 'common',
                            'include': ['css', 'text']
                        }
                    ]
                }
            }
        },

        shell: {
            docs: {
                command: './tools/copy_docs src/app/docs'
            }
        }
    });
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-symlink');
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', ['bowercopy:libs', 'symlink']);
    grunt.registerTask('build', ['requirejs', 'bowercopy:built']);
    grunt.registerTask('docs', ['shell:docs', 'requirejs', 'bowercopy:built']);

};