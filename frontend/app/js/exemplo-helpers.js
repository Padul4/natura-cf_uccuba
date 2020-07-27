var ExemploHelpers = {
  init: function() {
    this.setElements();
    this.bind();
  },
  setElements: function() {
    this.$hiStringDia = $('#hi-string-dia');
    this.$hiStringDiaOk = $('#hi-string-dia-ok');
    this.$hiStringDiaOut = $('#hi-string-dia-out');

    this.$hiStringSlug = $('#hi-string-slug');
    this.$hiStringSlugOk = $('#hi-string-slug-ok');
    this.$hiStringSlugOut = $('#hi-string-slug-out');
  },
  bind: function() {
    var _that = this;

    this.$hiStringDiaOk.on('click', function() {
      _that.printOutput({
        target: _that.$hiStringDiaOut,
        text: Helper.strings.removeDiacritics(_that.$hiStringDia.val())
      });
    });

    this.$hiStringSlugOk.on('click', function() {
      _that.printOutput({
        target: _that.$hiStringSlugOut,
        text: Helper.strings.formatSlug(_that.$hiStringSlug.val())
      });
    });
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
export default ExemploHelpers;