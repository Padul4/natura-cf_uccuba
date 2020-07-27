/**
 Tarefa de geracao de templates pre-compiados.
 Para dar manutencao no conteudo pre-compilado, acessar o diretorio /app/templates/pre-compile-info
 O arquivo default.js contem as informacoes de caminho, titulo, descricao, etc. Caso se caso o projeto
 possuir mais sessoes, e necessario adaptar o codigo abaixo.

 @todo: Criar logica para alterar os dados pre-compilados em multiplas sessoes
 @task templates
*/
var gulp = require('gulp'),
	path = require('path'),
	appPath = path.resolve('app'),
	resourcesPath = path.resolve('../resources'),
	handlebars = require('gulp-compile-handlebars'),
	rename = require('gulp-rename'),
	pkg = require('../../package.json'),
	srcPath = pkg['basePath']['application'],
	dstPath = pkg['basePath']['stage'],
	options = {
		ignorePartials: true,
		batch: [srcPath + '/templates/partials'],
		helpers: {
			eachProperty: function(context, options) {
		    var ret = "";
		    for(var prop in context)
		    {
		        ret = ret + options.fn({property:prop,value:context[prop]});
		    }
		    return ret;
			},
			compare: function(lvalue, rvalue, options) {
		    if (arguments.length < 3)
		      throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
				
		    var operator = options.hash.operator || "==";

		    var operators = {
	        '==':       function(l,r) { return l == r; },
	        '===':      function(l,r) { return l === r; },
	        '!=':       function(l,r) { return l != r; },
	        '<':        function(l,r) { return l < r; },
	        '>':        function(l,r) { return l > r; },
	        '<=':       function(l,r) { return l <= r; },
	        '>=':       function(l,r) { return l >= r; },
	        'typeof':   function(l,r) { return typeof l == r; }
		    }

	    	if (!operators[operator])
	        throw new Error("Handlerbars Helper 'compare' doesn't know the operator "+operator);
    		
    		var result = operators[operator](lvalue,rvalue);
		
		    if( result ) {
		      return options.fn(this);
		    } else {
		      return options.inverse(this);
		    }
			}
		}
	};

gulp.task('templates', function() {
	var preCompData = require(path.join(appPath, 'configs', 'tpl-local.js'));

	gulp.src([
			path.join(appPath, 'templates', '**/*.hbs'),
			'!' + path.join(appPath, 'templates', 'partials/**/*.hbs')
		])
		.pipe(handlebars(preCompData, options))
		.pipe(rename(function(path) {
			path.extname = '.html';
		}))
		.pipe(gulp.dest(dstPath));
});

/**
 Compila arquivos para ambiente de QA
*/
gulp.task('templates:salveqa', function salveqa() {
	var envPath = path.join(resourcesPath, 'profiles/salveqa/frontend');
	var preCompData = require(path.join(appPath, 'configs', 'tpl-salveqa.js'));

	 gulp.src([
			path.join(appPath, 'templates', '**/*.hbs'),
			'!' + path.join(appPath, 'templates', 'partials/**/*.hbs')
		])
		.pipe(handlebars(preCompData, options))
		.pipe(rename(function(path) {
			path.extname = '.html';
		}))
		.pipe(gulp.dest(path.join(envPath, 'public')));
});

/**
 Compila arquivos para ambiente de Stage
 @todo: Aplicar tratamento para fechamento de pacote
*/
gulp.task('templates:stage', function stage() {
	var envPath = path.join(resourcesPath, 'profiles/stage/frontend');
	var preCompData = require(path.join(appPath, 'configs', 'tpl-stage.js'));

	 gulp.src([
			path.join(appPath, 'templates', '**/*.hbs'),
			'!' + path.join(appPath, 'templates', 'partials/**/*.hbs')
		])
		.pipe(handlebars(preCompData, options))
		.pipe(rename(function(path) {
			path.extname = '.html';
		}))
		.pipe(gulp.dest(path.join(envPath, 'public')));
});

/**
 Compila arquivos para ambiente de Producao
 @todo: Aplicar tratamento para fechamento de pacote
*/
gulp.task('templates:prod', function prod() {
	var envPath = path.join(resourcesPath, 'profiles/prod/frontend');
	var preCompData = require(path.join(appPath, 'configs', 'tpl-prod.js'));

	 gulp.src([
			path.join(appPath, 'templates', '**/*.hbs'),
			'!' + path.join(appPath, 'templates', 'partials/**/*.hbs')
		])
		.pipe(handlebars(preCompData, options))
		.pipe(rename(function(path) {
			path.extname = '.html';
		}))
		.pipe(gulp.dest(path.join(envPath, 'public')));
});