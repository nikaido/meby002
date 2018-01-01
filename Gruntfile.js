'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      test:{
        options: {
          base:'public',
          port: 8080
        }
      }
    },
    watch: {
      options: {
        reload:true
      },
      html: {
        files:['public/**/*.html'],
        tasks:[]
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['connect','watch']);
}