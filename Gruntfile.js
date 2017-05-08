module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			my_target: {
				files: {
					'dist/js/main.min.js': ['src/js/*']
				}
			}
		},
		compass: {
			dist: {
				options: {
					sassDir: 'src/sass',
					cssDir: 'dist/css',
					imagesDir: 'dist/assets'
				}
			}
		},
		cssmin: {
			target: {
				files: [{
					src: ['dist/css/*.css'],
					dest: 'dist/css/min/styles.min.css'
				}]
			}
		},
		copy: {
			templates: {
				expand: true,
				cwd: 'src/templates',
				src: '**',
				dest: 'dist/templates/'
			},
			libs: {
				expand: true,
				cwd: 'src/lib',
				src: '**',
				dest: 'dist/js/'				
			},
			json: {
				expand: true,
				cwd: 'src/json',
				src: '**',
				dest: 'dist/js/'
			}
		},
		handlebars: {
			options: {
				namespace: 'QuizCore.templates',
				processName: function(filePath) {
					var tempFolder = 'src/templates/'
					return filePath.slice(tempFolder.length,filePath.indexOf('.'));
				}
			},
			compile: {
				src: 'src/templates/*.hbs',
				dest: 'dist/js/templates.js'
			}
		},
		watch: {
			src: {
				files: ['src/js/*.js'],
				tasks: ['uglify']
			},
			sass: {
				files: ['src/sass/*.scss'],
				tasks: ['compass','cssmin']
			},
			tocopy: {
				files: ['src/lib/*','src/json/*'],
				tasks: ['copy']
			},
			templates: {
				files: ['src/templates/*.hbs'],
				tasks: ['handlebars:compile']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-handlebars');

	grunt.registerTask('default', ['uglify','compass','cssmin','handlebars','copy']);
}