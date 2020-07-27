/**
 Tratamento para console.log nos navegadores 
 que nao possuem suporte (IE9-)
*/

if(!window.console) window.console = {};
if(!window.console.log) window.console.log = function () { }; 