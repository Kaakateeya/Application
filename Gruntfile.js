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
            build: ['Grunfile.js', 'app/**/*.js']
        },
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
                report: 'min',
                mangle: false
            },
            build: {
                files: {

                    'dist/js/main.min.js': ['dist/src/mainnew.js']
                }
            }
        },
        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: [{
                        'dist/css/homepage.min.css': ['src/css/bootstrap.min.css', 'src/css/styleshome.css', 'src/css/styleshomerespinsive.css',
                            'node_modules/font-awesome/css/font-awesome.min.css', 'src/css/bootstrap-responsive.min.css', 'src/css/stylekaakateeya.css',
                            'style_responsive.css', 'src/css/uniform.default.css', 'src/css/chosen.css', 'src/css/jquery-css.css', 'src/css/bootstrap-fileupload.css',
                            'src/css/custom_styles.css', 'src/css/custom_responsive.css', 'src/css/GITheWall.css', 'src/css/CustomerSearchResult_New.css',
                            'src/css/dashBoard.css', 'src/css/allimagesClasses.css', 'node_modules/bootstrap-multiselect/dist/css/bootstrap-multiselect.css'
                        ]
                    },
                    {
                        'dist/css/inner.min.css': ['src/css/bootsrsapinner.min.css', 'node_modules/font-awesome/css/font-awesome.min.css', 'src/css/bootstrap-responsive.min.css', 'src/css/stylekaakateeya.css',
                            'style_responsive.css', 'src/css/uniform.default.css', 'src/css/chosen.css', 'src/css/jquery-css.css', 'src/css/bootstrap-fileupload.css',
                            'src/css/custom_styles.css', 'src/css/custom_responsive.css', 'src/css/GITheWall.css', 'src/css/CustomerSearchResult_New.css',
                            'src/css/dashBoard.css', 'src/css/allimagesClasses.css', 'node_modules/bootstrap-multiselect/dist/css/bootstrap-multiselect.css'
                        ]
                    }
                ]

            }
        },
        dev_prod_switch: {
            options: {
                // Can be ran as `grunt --env=dev` or `grunt --env=prod`
                environment: grunt.option('env') || 'dev',
                env_char: '#',
                env_block_dev: 'env:dev',
                env_block_dev: 'SCRIPTS DATA',
                env_block_prod: 'SCRIPTSP DATA',
                env_block_test: 'env:test'
            },
            all: {
                files: {
                    'index.html': 'index.html',
                    'index.js': 'index.js'
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
                files: [{
                    // Target-specific file lists and/or options go here. 
                    'index.html': [
                        ['src/js/jquery-1.8.3.min.js', 'src/js/jquery.alert.js', 'src/js/scriptsKaakateeya.js', 'src/js/GI.TheWall.min.js', 'src/js/bootstrap-multiselect.js',
                            'src/js/jquery-ui.js', 'src/js/lhnchatbutton-current.min.cache', 'src/js/scrollgress.js', 'src/js/jquery.blockui.js', 'bower_components/bootstrap/dist/js/bootstrap.min.js', 'bower_components/angular/angular.min.js',
                            'node_modules/angular-ui-router/release/angular-ui-router.min.js', 'node_modules/underscore/underscore-min.js',
                            'bower_components/angular-re-captcha/angular-re-captcha.js', 'bower_components/angular-ui-router-styles/ui-router-styles.js',
                            'http://commondatastorage.googleapis.com/lhn/chat/scripts/lhnchatbutton-current.min.js',
                            'node_modules/bootstrap-multiselect/dist/js/bootstrap-multiselect.js',
                            'bower_components/angular-ui-router-styles/ui-router-styles.js', 'index.js'
                        ], 'app/**/*.js',
                    ]
                }],
            },
            prod: {
                options: {
                    startTag: '<!-- SCRIPTSP DATA -->',
                    endTag: '<!--SCRIPTSP END-->',
                    fileTmpl: '<script src="%s"></script>',
                    appRoot: ''
                },
                files: {
                    // Target-specific file lists and/or options go here. 
                    'index.html': [
                        ['src/js/jquery-1.8.3.min.js', 'src/js/jquery.alert.js', 'src/js/scriptsKaakateeya.js', 'src/js/GI.TheWall.min.js', 'src/js/bootstrap-multiselect.js',
                            'src/js/jquery-ui.js', 'src/js/lhnchatbutton-current.min.cache', 'src/js/scrollgress.js', 'src/js/jquery.blockui.js', 'bower_components/bootstrap/dist/js/bootstrap.min.js', 'bower_components/angular/angular.min.js',
                            'node_modules/angular-ui-router/release/angular-ui-router.min.js', 'node_modules/underscore/underscore-min.js',
                            'bower_components/angular-re-captcha/angular-re-captcha.js', 'bower_components/angular-ui-router-styles/ui-router-styles.js',
                            'http://commondatastorage.googleapis.com/lhn/chat/scripts/lhnchatbutton-current.min.js',
                            'node_modules/bootstrap-multiselect/dist/js/bootstrap-multiselect.js',
                            'bower_components/angular-ui-router-styles/ui-router-styles.js', 'index.js'
                        ], 'dist/js/*.js'
                    ]
                },
            },
        },
        concat: {
            js: { //target
                src: ['app/**/*.js'],
                dest: 'dist/src/mainnew.js'
            }
        }



    });
    grunt.registerTask('default', ['jshint', 'cssmin', 'scriptlinker:dev']);

    // this task will only run the dev configuration 
    grunt.registerTask('dev', ['cssmin', 'scriptlinker:dev']);

    // only run production configuration 
    grunt.registerTask('prod', ['concat', 'uglify', 'cssmin', 'scriptlinker:prod']);

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
    grunt.loadNpmTasks('grunt-contrib-concat');

};