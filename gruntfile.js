module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.initConfig({
    less: {
      development: {
        files: {
          'wwwroot/Styles.css': 'wwwroot/Styles.less'
        }
      }
    }
  });

  grunt.registerTask('default', ['less']);

};



