module.exports = function(grunt) {
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
                    destPrefix: '../../gh-pages-examples'                    
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
        }
    });
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-symlink');
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.registerTask('default', ['bowercopy:libs', 'symlink']);
    grunt.registerTask('build', ['requirejs', 'bowercopy:built']);
};