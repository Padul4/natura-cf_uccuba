/**
 Cria um servidor local para testes. 
 Para alterar as configuracoes do servidor local voce
 deve acessar o arquivo utils/browserSync-props
*/
var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	browserSyncProps = require('../utils/browserSync-props');

gulp.task('browser-sync', ['preprocessors'], function() {
	browserSync(browserSyncProps);
});