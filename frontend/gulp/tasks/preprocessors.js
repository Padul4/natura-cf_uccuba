var gulp = require('gulp');

gulp.task('preprocessors', [
	'less',
	'copy:scripts',
	'scripts',
	'templates'
]);