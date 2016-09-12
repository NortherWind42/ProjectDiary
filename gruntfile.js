module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.initConfig({
    less: {
      development: {
        files: {
          'wwwroot/styles.css': 'wwwroot/styles.less'
        }
      }
    }
  });

  grunt.registerTask('default', ['less']);

};



