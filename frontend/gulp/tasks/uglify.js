var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	path = require('path'),
	publicPath = path.resolve('public'),
	profilesPath = path.resolve('../resources/profiles');

var getDest = function(env, folder) {
	return path.join(profilesPath, env + '/frontend/public/' + folder);
};

// uglify local
gulp.task('uglify', function() {
	gulp.src([
			path.join(publicPath, 'js', '*.js'),
			'!' + path.join(publicPath, 'js', '*.min.js')
		])
		.pipe(uglify())
		.pipe(rename({
			extname: '.min.js'
		}))
		.pipe(gulp.dest(path.join(publicPath, 'js')));
});

// todo: aplicar uglify para outros ambientes
gulp.task('uglify:salveqa', function() {
	gulp.src([
			getDest('salveqa', 'js/*.js'),
			'!' + getDest('salveqa', 'js/*.min.js')
		])
		.pipe(uglify())
		.pipe(rename({
			extname: '.min.js'
		}))
		.pipe(gulp.dest(getDest('salveqa', 'js')));
});

gulp.task('uglify:stage', function() {
	var infoPath = path.join(profilesPath, 'stage/frontend/app/templates/pre-compile-info');
	var info = require(path.join(infoPath, '', 'default.js'));
	var dest = info.assetsPath + info.version + '/';

	gulp.src([
			getDest('stage', dest + 'js/*.js'),
			'!' + getDest('stage', dest + 'js/*.min.js')
		])
		.pipe(uglify())
		.pipe(rename({
			extname: '.min.js'
		}))
		.pipe(gulp.dest(getDest('stage', dest + 'js')));
});

gulp.task('uglify:prod', function() {
	var infoPath = path.join(profilesPath, 'prod/frontend/app/templates/pre-compile-info');
	var info = require(path.join(infoPath, '', 'default.js'));
	var dest = info.assetsPath + info.version + '/';

	gulp.src([
			getDest('prod', dest + 'js/*.js'),
			'!' + getDest('prod', dest + 'js/*.min.js')
		])
		.pipe(uglify())
		.pipe(rename({
			extname: '.min.js'
		}))
		.pipe(gulp.dest(getDest('prod', dest + 'js')));
});