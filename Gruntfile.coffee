module.exports = (grunt) ->

	[
		'grunt-contrib-copy'
	]
	.forEach grunt.loadNpmTasks

	getDateStr = ->
		now = new Date()
		year = now.getFullYear()
		month = now.getMonth()
		day = now.getDate()
		"#{year}-#{month}-#{day}"


	grunt.initConfig

		copy:
			posts:
				files:[{
					expand: true
					cwd: './posts'
					src: '*.markdown'
					dest: './_posts/'
					rename: (dest, src) ->
						"#{dest}#{getDateStr()}-#{src}"
					}]
