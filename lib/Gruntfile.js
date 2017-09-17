module.exports = function(grunt) {
  
    grunt.initConfig({
      browserify: {
        js: {
            src: ['../javascripts/data.js'],
            dest: '../dist/app.js'
        }
      },
      jshint: {
        options: {
          predef: [ "document", "console" ],
          esnext: true,
          globalstrict: true,
          globals: {
            "$": false 
          },
          browserify: true
        },
        files: ['../javascripts/**/*.js']
      },
      watch: {
        options: {
          livereload: true,
        },
        javascripts: {
          files: ['../javascripts/**/*.js'],
          tasks: ['jshint', 'browserify']
        }
      }
    });
  
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  
    grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
  };