
module.exports = function (grunt) {
  require('jit-grunt')(grunt);

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-githooks');
  grunt.loadNpmTasks("grunt-jscs");

  grunt.initConfig({

    less: {
      development: {
        options: {
          compress: false,
          yuicompress: false,
          optimization: 0
        },
        files: {
          'wwwroot/styles.css': 'wwwroot/styles.less'
        }
      }
    },

    watch: {
      styles: {
        files: ['wwwroot/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        port: 9876,
        singleRun: false,
        autoWatch: true,
        browsers: ['Chrome'],
        logLevel: 'INFO'
      },
      files: [
        'node_modules/angular/angular.js',
        'node_modules/angular-animate/angular-animate.js',
        'node_modules/angular-aria/angular-aria.js',
        'node_modules/angular-material/angular-material.js',

        'node_modules/angular-mocks/angular-mocks.js',
        'node_modules/angular-material/angular-material-mocks.js',

        'wwwroot/mdxUtil.js',
        'wwwroot/guidGenerator.js',
        'wwwroot/task.js',
        'wwwroot/dairy.js',
        'wwwroot/dairyApp.module.js',
        'wwwroot/tasksStoreService.js',
        'wwwroot/dairyService.js',
        'wwwroot/dairy.component.js',
        'wwwroot/calendar.component.js',
        'wwwroot/task-list.component.js',
        'test/*.js'
      ]
    },

    jshint: {
      all:  grunt.file.readJSON('path.json'),
      // options: {
      //   "node": true,
      //   "browser": true,
      //   "bitwise": true,
      //   "camelcase": true,
      //   "curly": true,
      //   "eqeqeq": true,
      //   "immed": true,
      //   "indent": 2,
      //   "latedef": true,
      //   "newcap": true,
      //   "noarg": true,
      //   "quotmark": "single",
      //   "regexp": true,
      //   "undef": true,
      //   "unused": true,
      //   "strict": true,
      //   "trailing": false,
      //   "smarttabs": true,
      //   "white": false,
      //   "globals": {
      //     "$": false,
      //     "angular": false,
      //     "browser": false,
      //     "repeater": false,
      //     "element": false,
      //     "inject": false,
      //     "afterEach": false,
      //     "beforeEach": false,
      //     "confirm": false,
      //     "context": false,
      //     "describe": false,
      //     "expect": false,
      //     "it": false,
      //     "jasmine": false,
      //     "JSHINT": false,
      //     "mostRecentAjaxRequest": false,
      //     "qq": false,
      //     "runs": false,
      //     "spyOn": false,
      //     "spyOnEvent": false,
      //     "waitsFor": false,
      //     "xdescribe": false
      //   }
      // }
    },

    jscs: {
      src: grunt.file.readJSON('path.json'),
      options: {
        config: ".jscsrc",
        fix: true
      }
    },

    postcss: {
      options: {
        map: false,
        processors: [
          require('pixrem')(),
          require('autoprefixer')({ browsers: 'last 2 versions' }),
          require('cssnano')()
        ]
      },
      dist: {
        src: 'wwwroot/styles.css'
      }
    },

    githooks: {
      all: {
        'pre-commit': 'jscs jshint'
      }
    }

  });

  grunt.registerTask('default', ['less', 'watch']);

};

