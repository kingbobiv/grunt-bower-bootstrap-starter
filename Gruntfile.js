module.exports = function(grunt) {

	//Initialize the config object
	grunt.initConfig({

		// Task configs
		less: {
			development: {
				files: {
					"./public/assets/css/main.css": "./app/assets/less/main.less"
				}
			}
		},

		concat: {
			options: {
				separator: ';'
			},
			js_compile: {
				src: [
					'./bower_components/jquery/jquery.js',
					'./bower_components/bootstrap/dist/js/bootstrap.js',
					'./app/assets/js/main.js'
				],
				dest: './public/assets/js/main.js'
			}
		},

		watch: {
			js: {
				files: [
		            './bower_components/jquery/jquery.js',
		            './bower_components/bootstrap/dist/js/bootstrap.js',
		            './app/assets/js/main.js'
				],
				tasks: ['concat:js_compile'],
				options: {
					livereload: true
				}
			},
			less: {
				files: ['./app/assets/less/*.less'],
				tasks: ['less'],
				options: {
					livereload: true
				}
			}
		}

	});

    // // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');


    // Task definitions
    grunt.registerTask('init', ['concat', 'less']);
    grunt.registerTask('default', ['init']);

};