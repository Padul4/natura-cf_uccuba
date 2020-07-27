var gulp = require('gulp'),
	path = require('path'),
	appPath = path.resolve('app'),
	publicPath = path.resolve('public'),
	profilesPath = path.resolve('../resources/profiles'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

var getDest = function(env, folder) {
	return path.join(profilesPath, env + '/frontend/public/' + folder);
};

/**
 Tratamento para deixar o scrit funcionar
 @todo: refatorar modulos para padrao salvecore e remover essa tarefa apos conclusao
*/
gulp.task('copy:scripts', function() {
	var bowerize = function(item) {
		return path.join(appPath, 'js', item);
	};

	var sources = [
		// 'scripts-tp/contentflow.js',
		'scripts-tp/facebook.js',
		'scripts-tp/estados.js',
		'scripts-tp/cidades.js',
		'scripts-tp/scrollbar.js',
		'scripts-tp/jquery.bxslider.min.js',
		'scripts-tp/jquery.mask.min.js',						
		'scripts-tp/slider.js',
		'scripts-tp/ddbeforeandafter.js',
		'scripts-tp/jquery.modal.js',
		'scripts-tp/main.js',
		'scripts-tp/tagueamento.js',
		'scripts-tp/signin.js',
		'scripts-tp/new-user.js',
		'scripts-tp/plugins-home.js',
		'scripts-tp/carrossel-ativos.js'
	].map(bowerize);
	gulp.src(sources)
		.pipe(concat('main-teste.js'))
		// .pipe(uglify())
		.pipe(gulp.dest(path.join(publicPath, 'js')));
});

gulp.task('copy:salveqa', ['less:static', 'vendor', 'preprocessors'], function() {
	// css
	gulp.src(path.join(publicPath, 'css', '*.css'))
		.pipe(gulp.dest(getDest('salveqa', 'css')));

	// js vendor
	gulp.src(path.join(publicPath, 'js', 'vendor.js'))
		.pipe(gulp.dest(getDest('salveqa', 'js')));

	// js header
	gulp.src(path.join(publicPath, 'js_static', '**/*.js'))
		.pipe(gulp.dest(getDest('salveqa', 'js_static')));

	// images
	gulp.src(path.join(publicPath, 'img', '**/*.*'))
		.pipe(gulp.dest(getDest('salveqa', 'img')));

	// images header
	gulp.src(path.join(publicPath, 'img_static', '**/*.*'))
		.pipe(gulp.dest(getDest('salveqa', 'img_static')));

	// jsons
	gulp.src(path.join(publicPath, 'json', '**/*.*'))
		.pipe(gulp.dest(getDest('salveqa', 'json')));

	gulp.src(path.join(publicPath, 'js', 'main-teste.js'))
		.pipe(gulp.dest(getDest('salveqa', 'js')));

	gulp.src(path.join(publicPath, 'js', 'contentflow.js'))
		.pipe(gulp.dest(getDest('salveqa', 'js')));

	// fontes
	// @todo: tratar para receber novas fontes. Dessa forma esta 
	// comtemplando apenas as fontes padroes do cms. Caso
	// seja necessario adicionar novas fontes, e necessario
	// criar um novo padrao, separando as fontes padroes em um 
	// outro diretorio
	gulp.src(path.join(publicPath, 'fonts', '**/*.*'))
		.pipe(gulp.dest(getDest('salveqa', 'fonts')));
});

gulp.task('copy:stage', ['vendor', 'preprocessors'], function() {
	var info = require(path.join(appPath, 'configs', 'tpl-stage.js'));
	var dest = info.assetsPath + info.version + '/';

	// css
	gulp.src([
			path.join(publicPath, 'css', '*.css'),
			'!' + path.join(publicPath, 'css', 'header.css')
			//'!' + path.join(publicPath, 'css', 'font.css')
		])
		.pipe(gulp.dest(getDest('stage', dest + 'css')));

	gulp.src(path.join(publicPath, 'js', 'main-teste.js'))
		.pipe(gulp.dest(getDest('stage', dest + 'js')));

	// jsons
	gulp.src(path.join(publicPath, 'json', '**/*.*'))
		.pipe(gulp.dest(getDest('stage', dest + 'json')));

	// images
	gulp.src(path.join(publicPath, 'img', '**/*.*'))
		.pipe(gulp.dest(getDest('stage', dest + 'img')));

	// js vendor
	gulp.src(path.join(publicPath, 'js', 'vendor.js'))
		.pipe(gulp.dest(getDest('stage', dest + 'js')));

	gulp.src(path.join(publicPath, 'js', 'main-teste.js'))
		.pipe(gulp.dest(getDest('stage', dest + 'js')));

	gulp.src(path.join(publicPath, 'js', 'contentflow.js'))
		.pipe(gulp.dest(getDest('stage', dest + 'js')));

});

gulp.task('copy:prod', ['vendor', 'preprocessors'], function() {
	var info = require(path.join(appPath, 'configs', 'tpl-prod.js'));
	var dest = info.assetsPath + info.version + '/';

	// css
	gulp.src([
			path.join(publicPath, 'css', '*.css'),
			'!' + path.join(publicPath, 'css', 'header.css')
			//'!' + path.join(publicPath, 'css', 'font.css')
		])
		.pipe(gulp.dest(getDest('prod', dest + 'css')));

	gulp.src(path.join(publicPath, 'js', 'main-teste.js'))
		.pipe(gulp.dest(getDest('prod', dest + 'js')));

	// jsons
	gulp.src(path.join(publicPath, 'json', '**/*.*'))
		.pipe(gulp.dest(getDest('prod', dest + 'json')));

	// images
	gulp.src(path.join(publicPath, 'img', '**/*.*'))
		.pipe(gulp.dest(getDest('prod', dest + 'img')));

	// js vendor
	gulp.src(path.join(publicPath, 'js', 'vendor.js'))
		.pipe(gulp.dest(getDest('prod', dest + 'js')));

	gulp.src(path.join(publicPath, 'js', 'main-teste.js'))
		.pipe(gulp.dest(getDest('prod', dest + 'js')));

	gulp.src(path.join(publicPath, 'js', 'contentflow.js'))
		.pipe(gulp.dest(getDest('prod', dest + 'js')));

});