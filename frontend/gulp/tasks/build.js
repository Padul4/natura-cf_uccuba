var gulp = require('gulp');

gulp.task('build:salveqa', [
  'templates:salveqa',
  'copy:salveqa',
  //'uglify:salveqa'
]);

gulp.task('build:stage', [
	'templates:stage',
	'copy:stage',
  // 'uglify:stage'
]);

gulp.task('build:prod', [
  'templates:prod',
  'copy:prod',
  // 'uglify:prod'
]);