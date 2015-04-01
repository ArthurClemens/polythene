module.exports = function(grunt) {
  grunt.initConfig({
    'sass': {
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
    'bower-install-simple': {
        options: {
            directory: 'lib/font-iconic/'
        },
        dev: {
            options: {
                production: false
            }
        }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-bower-install-simple');
  grunt.registerTask('install', ['sass', 'bower-install-simple']);
  grunt.registerTask('default', ['sass']);
};