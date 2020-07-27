/**
 Script carregado no final das linhas do 
 vendor.js para tratar bibliotecas com conflito 
 com require definido
*/
if (typeof define !== "undefined" && !define) {
	define = window.r;
}