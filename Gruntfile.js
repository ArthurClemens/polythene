module.exports = function(grunt) {
    grunt.initConfig({
        bowercopy: {
            options: {
                clean: false
            },
            example_lib: {
                options: {
                    destPrefix: 'src/app/lib'                    
                },
                files: {
                    'polythene': 'Polythene/lib/*',
                    'mithril/mithril.js': 'mithril/mithril.js',
                    'requirejs/require.js': 'requirejs/require.js',
                    'require-css': 'require-css/*.js',
                    'requirejs-text': 'requirejs-text/*.js',
                    'polythene/font-iconic/material-design-iconic-font/css': 'material-design-iconic-font/css/*',
                    'polythene/font-iconic/material-design-iconic-font/fonts': 'material-design-iconic-font/fonts/*',
                    'polythene/svg/material-design-iconic-font': 'material-design-iconic-font/svg/*',
                    'polythene/svg/mdi': 'mdi/icons/svg/*',
                    'marked/marked.js': 'marked/lib/marked.js',
                    'lodash/lodash.js': 'lodash/lodash.min.js'
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
                        cwd: '../polythene/lib',
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
        }
    });
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-symlink');
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.registerTask('default', ['bowercopy']);
    grunt.registerTask('build', ['requirejs']);
};