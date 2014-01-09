module.exports = function(grunt) {

  grunt.initConfig({

    // Specify path to NPM config file
    pkg: grunt.file.readJSON('package.json'),

    // Watch files for changes
    watch: {
      options: {
        livereload: 1337
      },
      compass: {
        files: 'public/scss/*.scss',
        tasks: 'compass:compile'
      }
    },

    // Compile SCSS
    compass: {
      compile: {
        options: {
          config: 'config.rb'
        /*
          sassDir: '/public/scss',
          cssDir: '/css',
          outputStyle: 'compressed'
        */
        }
      }
    }
  });

  // Register default Grunt task
  grunt.registerTask('default', 'watch');

  // Load Grunt dependencies
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
