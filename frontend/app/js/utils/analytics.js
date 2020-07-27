/**
 Lib de tagueamento padrao da Salve
 @note Carregada na arquitetura por padrao
 @task vendor
*/
$(function () {

    /**
     Tratamento para taguear diretamente no elemento 
     da pagina atraves do atributo data-ga.
     O valor do atributo deve receber os dados de evento
     no padrao: cat|action|label, Ex.: 
     ...
     <p data-ga="natura|compre-aqui|botao">click aqui!</p>
     ...

     Caso o atributo seja aplicado em um um link que carregara
     novamente ou saia da página, e necessario adicionar mais um
     item a string com "pipe". Entao o padrao deve seguir o
     modelo: cat|action|label|waitredirect. Veja exemplo abaixo:
     ...
     <a href="http://algumaurl.com" data-ga="natura|compre-aqui|botao|waitredirect">
        click aqui!
     </a>
     ...
    */
    var timeclick = null;
    $('body').on('click', '[data-ga]', function(event) {
        var $this = $(this),
            data = $this.data('ga').split('|');

        if ($(this).attr('href')) {
          if ($(this).attr('href').indexOf('#') !== -1) {
            event.preventDefault();
          }
        }

        if (isExternalLink($this, data)) {
          event.preventDefault();
        }

        // if (isExternalLink($this, data)) {
        //   event.preventDefault();
          if (timeclick) {
            clearTimeout(timeclick);
            //return false;
          }
          timeclick = setTimeout(function() {
            if (isExternalLink($this, data)) {
              if ($this.attr('target') !== '_blank') {
                event.preventDefault();
                trackGARedirect($this, data[0], data[1], data[2]);
              } else {
                trackAnalytics(data[0], data[1], data[2]);    
              }
            } else {
              trackAnalytics(data[0], data[1], data[2]);
            }
          }, 100);
        // } else {
          // trackAnalytics(data[0], data[1], data[2]);
        // }
    })
    .on('dblclick', function(e) {
        e.preventDefault();
        console.log('double click disabled!');
    });


    /**
     Funcao principal de eventos para o padrao antigo 
     e novo do GA
     @method trackAnalytics
     @param {string} cat 
     @param {string} action 
     @param {string} label 
    */
    window.trackAnalytics = function(cat, action, label) {
      if (typeof (_gaq) !== 'undefined') {
        _gaq.push(['_trackEvent', cat, action, label]);
      } else {
        if (typeof (ga) !== 'undefined') {
          ga('send', 'event', cat, action, label);
        }
      }
      console.log(cat, action, label);
    };

    /**
     Tagueia page view
     @method trackPageviewGA
     @param {string} page
     @param {string} title
    */
    var pagesViews = [];
    window.trackPageviewGA = function (page, title) {
        var pageTitle = page + title;
        
        if($.inArray(pageTitle, pagesViews) == '-1'){
          if(typeof(ga) !== 'undefined') {
            ga('send', 'pageview', {
              'page': page,
              'title': title
            });
          }
          pagesViews.push(pageTitle);
        }
       console.log(page, title);
    }
    
    /**
     Faz o redirect do link caso o link seja externo
     @method trackGARedirect
     @param {object} button O objeto deve ser um elemento do DOM
     @param {string} event
     @param {string} action
     @param {string} label
    */
    window.trackGARedirect = function(button, event, action, label) {

      // track
      trackAnalytics(event, action, label);

      // redirect
      if (button.attr('target') !== '_blank') {
        setTimeout(function() {
          // console.log('redirect :: ' + button.attr('href'));
          window.self.location = button.attr('href');
        }, 500);
      } else {
        trackAnalytics(event, action, label);
      }
      console.log(button, event, action, label);
    };

    /**
     Verifica se link e externo
    */
    function isExternalLink(el, data) {
      if (el.attr('href')) {
        if (el.attr('href').indexOf('#') !== -1) {
          return false;
        }
      }
      if (el.attr('target') === "_blank") {
        return false;
      }
      return (data[3] && data[3] === "waitredirect" || el.attr('href')) ? true : false;
    };


    /**
     Tratamento para tagueamento via Scroll.
     A variavel flagScroll cria um array de valores boleanos
     com a quantidade de itens setados com o atributo 
     'data-trackscroll'. Todos os valores sao setados como falso
     e apenas o proximo item a ser tagueado fica como true.
     Esse controle foi criado para disparar o tagueamento apenas uma
     vez enquanto o usuario faz o scroll enquanto navega em determinada area. 
     O evento so vai disparar novamente quando o usuario sair e estiver
     navegando de baixo para cima em direcao a area, ou de cima para baixo.

     Para usar o tagueamento basta setar em um elemento da página o atributo
     'data-trackscroll' com o valor padrao com pipe (cat|action|label). Ex.:
     ...
     <section data-trackscroll="natura|compre-aqui|botao">
        ..;
     </section>
     ...

     Caso seja necessario disparar a tag antes, é possivel adicionar
     a porcentagem que o scroll deve pegar em relacao ao elemento a 
     ser tagueado. por padrao ele pega 100% da altura. Para diminuir 
     esse valor, basta usar a tag 'data-trackscrollend' com o valor 
     da porcentagem. Ex.:
     <section data-trackscroll="natura|compre-aqui|botao" data-trackscrollend="50">
        ..;
     </section>
    */
    var flagScroll = [];
    var lastScrollTop = 0, delta = 5;
    var direction = 'down';
    $(window).scroll(function() {
      var st = $(this).scrollTop();
      if(Math.abs(lastScrollTop - st) <= delta)
        return;
       if (st > lastScrollTop){
           // downscroll code
           direction = 'down';
       } else {
          // upscroll code
          direction = 'up';
       }
       lastScrollTop = st;

      trackScroll();
    });


    /**
     Faz o controle do scroll para garantir que o usuario esta
     "parado" no coteudo. So nesse momento a busca pela tag
     e o registro sera ativado
    */
    var scrollControl;
    window.trackScroll = function() {
      if (scrollControl) {
        clearTimeout(scrollControl);
      }

      scrollControl = setTimeout(function() {
        trackScrollBytag();
      }, 300);
    };

    /**
     Mapeia os elementos pela tag 'data-trackscroll' e
     faz o disparo quando necessario
    */
    window.trackScrollBytag = function() {
      var scrollTop = $(window).scrollTop(),
          $els = $('[data-trackscroll]');

      if ($els.length) {
        $.each($els, function(i) {
          var y = $(this).offset().top;
          if ($(this).is(':visible')) {
            if (scrollTop >= y && scrollTop <= (y + $(this).height())) {
              var data = $(this).data('trackscroll').split('|');
              var formatData = data[0] + "|" + data[1] + "|" + data[2];

              var track = function() {
                if (flagScroll[i]) {
                  clearFlagScroll();
                  setNextFlagScroll(direction, i);
                  trackAnalytics(data[0], data[1], data[2]);
                }
              };

              if ($(this).data('trackscrollend')) {
                var full = ($(this).data('trackscrollend') / 100) * $(this).height();
                if (scrollTop >= (y + full)) {
                  track();
                }
              } else {
                track();
              }
            }
          }
        });
      }
    }

    /*
     Seta o array de flags de acordo com o total de elementos
     encontrados com a tag 'data-trackscroll'
    */
    window.setFlagScroll = function() {
      var $els = $('[data-trackscroll]');

      if ($els.length) {
        $.each($els, function() {
          flagScroll.push(false);
        });
      }
      flagScroll[0] = true;
    }
    setFlagScroll();

    /**
     Seta todos os valores do array flagScroll como false
    */
    window.clearFlagScroll = function() {
      if (flagScroll.length) {
        $.each(flagScroll, function(i) {
          flagScroll[i] = false;
        });
      }
    };

    /**
     Seta o proximo elemento a ser tagueado como true
    */
    window.setNextFlagScroll = function(direction, index) {
      var targetIndex,
          total = flagScroll.length - 1;
      
      if (direction == "down") {
        targetIndex = index + 1;
        if (targetIndex > total) {
          clearFlagScroll();
          flagScroll[total] = true;
          return false;
        }
      }

      if (direction == "up") {
        targetIndex = index - 1;
        if (targetIndex < 0) {
          clearFlagScroll();
          flagScroll[0] = true;
          return false;
        }
      }

      if (typeof flagScroll[targetIndex] !== "undefined") {
        flagScroll[targetIndex] = true;
      }
    };
});