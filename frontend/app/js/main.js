/**
 Arquivo principal da aplicacao, normalmente quando 
 o projeto possui apenas uma sessão tudo é importado 
 e chamado nesse arquivo. Caso o projeto creça, é 
 importante criar outro arquivo nesse modelo e adicionar 
 na tarefa de scripts (a partir da linha 22 do arquivo 
 browserifyBundler.js). 
 Vamos supor que a outra sessão utilize componentes 
 diferentes da home. Entao é necessário adicionar
 o arquivo após a linha 22. Ex.: 

 path.join(appPath, 'js', 'main.js'),
 path.join(appPath, 'js', 'outroarquivo.js')

 o projeto irá compilar um novo arquivo chamado 
 outroarquivo.js na apsta public.
*/

// exemplo de como um modulo e importado para utilizacao
// import ContentFlow from './index/contentflow';
// import Tagueamento from './commons/tagueamento';
var Main = {
  init: function () {
    console.log('iniciou o script principal!');

    // Exemplo de utilizacao de modulo
    // Exemplo.init();
    console.log(PersistData);
  }
};

$(document).ready(function() {
	Main.init();
});