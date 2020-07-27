/**
 Pagina de exemplo de modulo javascript
 @class Exemplo
*/
var Exemplo = {

  /**
   Metodo que inicia o modulo
   @method init
  */
  init: function() {

    // executa o metodo
    this.setElements();
    this.bind();
  },

  /**
   Adiciona os objetos do DOM as propriedades
   ao modulo
   @method setElements
  */
  setElements: function() {
    this.$exemploBtn = $('#exemploBtn');
    this.$exemploBtn2 = $('#exemploBtn2');
    this.$exemploBtn3 = $('#exemploBtn3');
    this.$exemploCallback = $('#exemploCallback');
  },

  /**
   Metodo atribui os eventos aos objetos
   @method bind
  */
  bind: function() {
    var _that = this;

    this.$exemploBtn.on('click', function() {
      _that.doSomething();
    });

    this.$exemploBtn2.on('click', function() {
      _that.methodWithParams('param 1');
    });

    this.$exemploBtn3.on('click', function() {
      _that.methodWithObjParams({
        a: 'property 1',
        b: 'property 2',
        c: 'property 3'
      });
    });

    this.$exemploCallback.on('click', function() {
      _that.printOutput({
        target: $('#outputExemploCallbackAfter'),
        text: 'preparando ...'
      });
      _that.methodCallback(function() {
        setTimeout(function() {
          _that.printOutput({
            target: $('#outputExemploCallbackAfter'),
            text: 'chamou callback!'
          });
        }, 1000);
      });
    });
  },

  /**
   Exemplo de metodo sem argumentos
   @method doSomething
  */
  doSomething: function() {
    this.printOutput({
      target: $('#outputExemplo1'),
      text: 'do something!'
    });
  },

  /**
   Exemplo de metodo com argumentos
   @method methodWithParams
   @param {string} arg Parametro de teste
  */
  methodWithParams: function(arg) {
    this.printOutput({
      target: $('#outputExemplo2'),
      text: 'methodWithParams : ' + arg
    });
  },

  /**
   Exemplo de metodo objeto como argumento
   @method methodWithObjParams
   @param {string} obj Objeto como argumento para exemplo
  */
  methodWithObjParams: function(obj) {
    var text = [];
    $.each(obj, function(k, v) {
      text.push("<b>" + k + ": </b>" + v);
    });
    this.printOutput({
      target: $('#outputExemplo3'),
      text: text.join(', ')
    });
  },

  /**
   Exemplo de metodo com callback apos executar alguma tarefa
   @method methodCallback
   @param {function} callback Funcao que deve ser executada
  */
  methodCallback: function(callback) {
    var callback = callback || function() {};
    console.log('teste');
    this.printOutput({
      target: $('#outputExemploCallback'),
      text: 'methodCallback'
    });
    callback();
  },

  /**
   Escreve no div de saida a acao que foi tomada
   dependendo do item que o usuario clicou
   @method printOutput
   @param {object} opts Objeto com target e text
    - opts.target - Objeto do DOM que recebera o texto
    - opts.text - String que sera aplicada no target
  */
  printOutput: function(opts) {
    opts.target.html(opts.text);
  }
};

// exemplo de exportacao do modulo
export default Exemplo;