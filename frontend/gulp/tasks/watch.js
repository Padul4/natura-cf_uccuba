var gulp = require('gulp'),
	pkg = require('../../package.json'),
	srcPath = pkg['basePath']['application'],
	dstPath = pkg['basePath']['stage'],
	browserifyBundler = require('../utils/browserifyBundler');

gulp.task('watch', ['preprocessors'],function() {
	gulp.watch(srcPath + '/less/**/*.less', ['less']);
	gulp.watch([
		srcPath + '/less/template_fixed/*.less',
		srcPath + '/less/assets/vars.less'
	], ['less:static']);
	gulp.watch(srcPath + '/less/assets/bootstrap-**.less', ['bootstrap:less']);
	gulp.watch(srcPath + '/js/**/*.js', ['scripts', 'copy:scripts']);
	gulp.watch([
		srcPath + '/templates/**/*.hbs',
		srcPath + '/configs/*.js'
	], ['templates']);
	gulp.watch(srcPath + '/less/bootstrap-vars.less', ['bootstrap:compileLess']);
	browserifyBundler(true)();
});