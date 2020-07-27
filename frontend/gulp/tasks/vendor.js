/**
 Pega todas as bibliotecas e compila em um 
 unico arquivo (./public/js/vendor.min.js)
 @task vendor
*/
var gulp = require('gulp'),
	path = require('path'),
	appPath = path.resolve('app'),
	publicPath = path.resolve('public'),
	uglyfy = require('gulp-uglify'),
	concat = require('gulp-concat'),
	pkg = require('../../package.json'),
	dstPath = pkg['basePath']['stage'],
	bowerPath = path.resolve('bower_components'),
	profilesPath = path.resolve('../resources/profiles');

var jsDest = dstPath + '/js';

var bowerize = function(item) {
	return path.join(bowerPath, item);
};

// jquery 1.8.3 usada por causa do CMS da Natura
var sources = [
	// 'jquery/jquery.js',
	'greensock/src/uncompressed/TweenLite.js',
	'greensock/src/uncompressed/plugins/CSSPlugin.js'
].map(bowerize);

var helperFile = path.join(appPath, 'js/utils', 'helpers.js');
sources = [helperFile].concat(sources);

// libraries todo: criar um padrao melhor para o carregamento desses itens
// var YoutubeFile = path.join(appPath, 'js/Youtube.js');
// sources.push(YoutubeFile);
sources.push(path.join(appPath, 'js/utils', 'afterLibraries.js'));
sources.push(path.join(appPath, 'js/utils', 'logger.js'));
sources.push(path.join(appPath, 'js/utils', 'analytics.js'));

var getDest = function(env, folder) {
	return path.join(profilesPath, env + '/frontend/public/' + folder);
};

/**
 @todo: Aplicar tratamento para ignirar arquivos ja existem no ambiente
 de producao
*/
gulp.task('vendor', function() {

	// aplicar tratamento para ambientes
	//sources.push(path.join(appPath, 'configs', 'const-local.js'));

	gulp.src(sources)
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest(path.join(publicPath, 'js')));

});


gulp.task('vendor:salveqa', function() {
	// aplicar tratamento para ambientes
	sources.push(path.join(appPath, 'configs', 'const-salveqa.js'));

	gulp.src(sources)
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest(getDest('salveqa', 'js')));
});

gulp.task('vendor:stage', function() {
	var info = require(path.join(appPath, 'configs', 'tpl-stage.js'));
	var dest = info.assetsPath + info.version + '/';

	sources.push(path.join(appPath, 'configs', 'const-stage.js'));

	gulp.src(sources)
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest(getDest('stage', dest + 'js')));
});

gulp.task('vendor:prod', function() {
	var info = require(path.join(appPath, 'configs', 'tpl-prod.js'));
	var dest = info.assetsPath + info.version + '/';

	sources.push(path.join(appPath, 'configs', 'const-prod.js'));

	gulp.src(sources)
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest(getDest('prod', dest + 'js')));
});