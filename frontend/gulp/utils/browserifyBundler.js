var browserify = require('browserify'),
	watchify = require('watchify'),
	es6ify = require('es6ify'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	uglify = require('gulp-uglify'),
	gulp = require('gulp'),
	gutil = require('gulp-util'),
	handleErrors = require('./handleErrors'),
	rename = require('gulp-rename'),
	path = require('path'),
	appPath = path.resolve('app'),
	publicPath = path.resolve('public'),
	pkg = require('../../package.json'),
	srcPath = pkg['basePath']['application'],
	dstPath = pkg['basePath']['stage'];

function bundleScripts(isWatching) {
	return function() {
		var props = {
			entries: [
				path.join(appPath, 'js', 'main.js')
			],
			cache: {},
			packageCache: {},
			fullPahts: true,
			withCredentials: false
		};

		var bundler;
		if (isWatching) {
			bundler = watchify(browserify(props)
								.add(es6ify.runtime)
								.transform(es6ify));
		} else {
			bundler = browserify(props)
						.add(es6ify.runtime)
						.transform(es6ify);
		}

		var rebundle = function() {
			return bundler.bundle()
						 .on('error', handleErrors)
						 .pipe(source('main.js'))
						 .pipe(buffer())
						 // .pipe(uglify())
						 // .pipe(rename({
						 // 	extname: '.min.js'
						 // }))
						 .pipe(gulp.dest(path.join(publicPath, 'js')))
						 .on('end', function() {
						 	gutil.log('browserify bundled.');
						 });
		};

		bundler.on('update', function() {
			rebundle();
			gutil.log('Rebundling');
		});

		return rebundle();
	};
};

module.exports = bundleScripts;