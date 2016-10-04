// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here
	jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Grunfile.js', 'src/**/*.js']
    },
	uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/js/magic.min.js': 'src/js/*.js'
        }
      }
    },
	 cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/css/style.min.css': 'src/css/*.css'
        }
      }
    },
    dev_prod_switch: {
        options: {
            // Can be ran as `grunt --env=dev` or `grunt --env=prod`
            environment: grunt.option('env') || 'dev',
                env_char: '#',
                //env_block_dev: 'env:dev',
                env_block_dev: 'SCRIPTS DATA',
                env_block_prod: 'env:prod',
                env_block_test: 'env:test'
        },
        all: {
            files: {
                'index.html': 'index.html',
                'index.js' :'index.js'
            }
        }
    },
    scriptlinker: {
    dev: {
      options: {
        startTag: '<!-- SCRIPTS DATA -->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="%s"></script>',
        appRoot: ''
      },
      files: {
        // Target-specific file lists and/or options go here. 
        'index.html': ['app/**/*.js']
      },
    },
    prod: {
      options: {
        startTag: '<!-- SCRIPTS DATA -->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="%s"></script>',
        appRoot: ''
      },
      files: {
        // Target-specific file lists and/or options go here. 
        'index.html': ['app/modules/**/*.js']
      },
    },
  }

	
	
  });
  grunt.registerTask('default', [
    'dev_prod_switch'
  ]);
  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-dev-prod-switch');
  grunt.loadNpmTasks('grunt-scriptlinker');

};
