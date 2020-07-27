
var already_reander_row = false;
var NATURA = (function(){
	var debug = false;
	//Numeros de nodos da arvore
	var nNodes = 0;
	//Númerod e nodos mostrados
	var showedNodes = 0;
	//Variável responsável para controle de não 'empilhamento' de animação no bloco de comentarios da home
	var testimony_animation = false;

	var already_down = false;
	var already_up   = false;
	//Tratamento do console.log para browsers antigos e tratamento de debug
	var l = function l(msg){
		if(!debug) return false;
		if (typeof console === "undefined" || typeof console.log === "undefined") {
			console = {};
			console.log = function(msg) {
				alert(msg);
			};
		}else{
			console.log(msg);
		}
	};

	//Função responsavel pela inicialização dos plugins
	var initialize_plugins = function initialize_plugins(){
		uniquevariable = new ddbeforeandafter({
			wrapperid: 'top-banners',
			dragUI : '<div class="drag"><div class="sprite draghandle"></div></div>',
			hidedragbardelay : false
		});
		
		$('.bxslider').bxSlider({
			slideSelector: '.slide-item', 
			responsive   : false,
			auto         : true,
			autoHover    : true,
			preloadImages : 'all'
		});

		if(Helper.isMobile.any()){
			$('.combo-1').bxSlider({
				slideSelector: '.product-box', 
				responsive   : false,
				auto         : false,
				autoHover    : true,
				preloadImages : 'all'
			});

			$('.combo-2').bxSlider({
				slideSelector: '.product-box', 
				responsive   : false,
				auto         : false,
				autoHover    : true,
				preloadImages : 'all'
			});
		}


		$.modal.defaults = {
			overlay: "#000",        	                              // Overlay color
			opacity: 0.7,          	                                  // Overlay opacity
			zIndex: 15,              	                              // Overlay z-index.
			escapeClose: true,      	                              // Allows the user to close the modal by pressing `ESC`
			clickClose: true,      	                                  // Allows the user to close the modal by clicking the overlay
			closeText: 'Close',                                       // Text content for the close <a> tag.
			closeClass: 'close-sucess-facebook spriteclose sprite',   // Add additional class(es) to the close <a> tag.
			showClose: true,                                          // Shows a (X) icon/link in the top-right corner
			modalClass: "modal",                                      // CSS class added to the element being displayed in the modal.
			spinnerHtml: null,                                        // HTML appended to the default spinner during AJAX requests.
			showSpinner: true,                                        // Enable/disable the default spinner during AJAX requests.
			fadeDuration: null,                                       // Number of milliseconds the fade transition takes (null means no transition)
			fadeDelay: 1.0                                            // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
		};
	};

	//Tratamento de possivel erro  de valor do offset no ipad
	//https://gist.github.com/mataspetrikas/431639
	var treat_offset_mobile = function treat_offset_mobile(){
		// as of 1.4.2 the mobile safari reports wrong values on offset()
		// http://dev.jquery.com/ticket/6446
		// remove once it's fixed
		if ( /webkit.*mobile/i.test(navigator.userAgent)) {
			(function($) {
				$.fn.offsetOld = $.fn.offset;
				$.fn.offset = function() {
				var result = this.offsetOld();
				result.top -= window.scrollY;
				result.left -= window.scrollX;
				return result;
				};
			})(jQuery);
		}
	};

	//Funcao genérica responsável por enviar dados via ajax
	//Retorna 0 em caso de falha, 1 em caso de sucesso
	//Seus argumentos sao u (url para qual será enviado), d(os dados), t (o tipo de dado), dt(tipo de dado a ser enviado) e callb(funcao a ser executada em caso de sucesso)
	var send_data = function send_data(u, d, t, dt, callb, er, al){
		if( typeof PersistData.backEndUrl === 'undefined'){
			l('Url base não está definida');
			return false;
		}
		var success = false;
		u = PersistData.backEndUrl + u;
		l('Url da API: ');
		l(u);
		l('Dado a ser enviado: ');
		l(d);
		$.ajax({
			url: u,
			type: t,
			dataType: dt,
			data: d
		})
		.done(function(data) {
			if( typeof callb !== 'undefined' ){
				callb(data);
			}
		})
		.fail(function(jqXHR, textStatus, errorThrown) {
			typeof er !== 'undefined' ? er() : l('Fail.');
			l(textStatus);
			// l(jqXHR.status);
		})
		.always(function() {
			typeof er !== 'undefined' ? er() : l('Complete.');
		});
  };

	//Função responsável por englobar todas os binds do tipo click
	var click_binds = function click_binds(){

		//prototipo da função que faz scroll até o Bloco Manteiga da Amazônia na home
		$('#btn-saibamais-manteiga-ucuuba').on('click', function(event) {
			event.preventDefault();
			var scroll_target = $('#amazon-butter').offset().top;
			$('html, body').animate({
				scrollTop: scroll_target},
				500, 'linear' , function() {
			});
		});
	};

	// Habilita mostrar mais comentarios e desabilita automaticamente quando ja mostrou todos
	var bind_btn_more = function bind_btn_more(){
		$('.testimony-btn.last').off().on('click', function(){
			if(nNodes == showedNodes){
				unbind_btn_more();
				
			}
			if(testimony_animation){
				l('Animation already running');
				return false
			}
			testimony_animation = true
			showedNodes += 1;
			bind_btn_less();
			$('.testimony-btn.first').removeClass('disable');
			if(showedNodes == nNodes){
				unbind_btn_more();
				
			}
			
			track.sendEvent('ekos', 'rede', 'desce');
			$('html, body').animate({
				scrollTop: "+=369"
			},700, function(){
				testimony_animation = false;
			});
			var line = showedNodes;
			$('.row-' + line ).fadeIn(700);
			l('more =' + line);
		});
	};

	var unbind_btn_more = function unbind_btn_more(){
		$('.testimony-btn.last').off('click');
		$('.testimony-btn.last').addClass('disable');
	};

	// Habilita mostrar esconder comentarios e desabilita automaticamente quando ja escondeu todos
	var bind_btn_less = function bind_btn_less(){

		$('.testimony-btn.first').off().on('click', function(){
			if(showedNodes <= 2){
				unbind_btn_less();
			}
			if(testimony_animation){
				l('Animation already running');
				return false
			}
			testimony_animation = true;
			showedNodes -= 1;
			bind_btn_more();
			$('.testimony-btn.last').removeClass('disable');

			if(showedNodes == 2){
				unbind_btn_less();
			}
			
			track.sendEvent('ekos', 'rede', 'sobe');
			$('html, body').animate({
				scrollTop: "-=369"
			},700, function(){
				testimony_animation = false;
			});
			var line = showedNodes+1;
			$('.row-' + line ).fadeOut(700);
			l('less ' + line);
		});
	};

	var unbind_btn_less = function unbind_btn_less(){
		$('.testimony-btn.first').off('click');
		$('.testimony-btn.first').addClass('disable');
	};

	// Função que recebe um array (modelo da arvore de comentarios), e renderiza ele. Se o numero de filhos da arvore for maior que 1, ativa os binds de mostrar e esconder mais elementos
	var treat_nodes = function treat_nodes(data){
		if(already_reander_row){
			return false;
		}
		already_reander_row = true;
		l('treat_nodes');
		l(data);
		nNodes = data.length;
		showedNodes = 1;
		$('#load-testimony').fadeOut(800, function() {
			$('.testimony-container-btn').removeClass('none');
			render_friends_tree(data);
			if(nNodes >= 2){
				$('.row-1').show();
				if(nNodes > 2){
					$('.testimony-btn.last').removeClass('disable');
					bind_btn_more();
					// $('.testimony-btn.last').removeClass('it-is-disabled');
				}else if(nNodes == 2){
					$('.testimony-btn.last').removeClass('it-is-disabled');
					// $('.testimony-container-btn').css("visibility", "hidden");
				};
				if(Helper.isMobile.any()){
					$('.testimony-holder').bxSlider({
						slideSelector: '.testimony', 
						responsive   : false,
						auto         : false,
						autoHover    : true,
						preloadImages : 'all',
						pager 			 : false,
					});
				}
			}

		});
	};

	var get_testimony_block_nodes = function get_testimony_block_nodes(){
		return $('.testimony').length;
	};

	//Retorna o maior comprimento da arvore de comentarios (contando pai e filho)
	var getMax = function getMax(data){
		var i;
		var max = -1;
		for ( i = 0; i < 5; i++ ) {
			if(data[i].length > max){
				max = data[i].length;
			}
		}
		nNodes = max;
		return max;
	};

	var create_testimony_image = function create_testimony_image(data, row, line){
		var classe = '';
		if(line == 5){
			classe = 'no-margin-block';
		}
		var name        = "<div class='testimony-text-header'><h3>" + data['name'] + "</h3></div>";
		var image       = "<div class='testimony-image'>"+
							"<span class='sprite spritenoimage'></span>"+
							"<div class='image-small-one'>" + "<img src='" + data['url_image'] + "' width='71' height='72' />" + "</div>"+
						"</div>";
		var text        = "<div class='testimony-text-p'><p>" + data['comment'] + "</p></div>";
		var block = "<div class='testimony testimony-without-image row-" + row + " " + classe + "'>"+
						image +
						"<div class='testimony-text'>" + 
							name + text +
						"</div>"+
					"</div>";

		$('.testimony-holder').append(block);
	};


	var create_testimony_noimage = function create_testimony_noimage(data, row, line){
		var classe = '';
		if(line == 5){
			classe = 'no-margin-block';
		}
		var name        = "<div class='testimony-text-header'><h3>" + data['name'] + "</h3></div>";
		var text        = "<div class='testimony-text-p'><p>" + data['comment'] + "</p></div>";
		var block = "<div class='testimony testimony-without-image row-" + row + " " + classe + "'>"+
									"<div class='testimony-image'>"+
										"<span class='sprite spritenoimage'></span>"+
									"</div>"+
									"<div class='testimony-text'>" + 
										name + text +
									"</div>"+
								"</div>";

		$('.testimony-holder').append(block);
	};

	var create_testimony_nocomentary = function create_testimony_nocomentary(data, row, line){
		var classe = '';
		if(line == 5){
			classe = 'no-margin-block';
		}
		var block = "<div class='testimony testimony-without-image row-" + row + " " + classe + "'>"+
						"<div class='testimony-image'>"+
							"<span class='sprite spritenocomentarie'></span>"+
						"</div>"+
						"<div class='testimony-text'>"+
							"<div class='testimony-text-header'><h3></h3></div>"+
							"<div class='testimony-text-p'>"+
								"<p class='soon'>EM BREVE</p>"+
							"</div>"+
						"</div>"+
					"</div>";

		$('.testimony-holder').append(block);
	};

	var create_testimony_static_image = function create_testimony_static_image(data, row, line){
		var src_img;
		var classe;
		l('row = ' + row);
		l('line' + line);

		switch(line) {
		    case 1:
		        src_img = 'mulher-'+row+'-'+line+'.jpg';
		        classe = '';
		        break;
		    case 2:
		        src_img = 'mulher-'+row+'-'+line+'.jpg';
		        classe = '';
		        break;
		    case 3:
		        src_img = 'mulher-'+row+'-'+line+'.jpg';
		        classe = '';
		        break;
		    case 4:
		        src_img = 'mulher-'+row+'-'+line+'.jpg';
		        classe = '';
		        break;
		    case 5:
		        src_img = 'mulher-'+row+'-'+line+'.jpg';
		        classe = 'no-margin-block';
		        break;
		    default:
		        src_img = 'mulher-'+row+'-'+line+'.jpg';
		        classe = '';
		}

		var image_block = "<div class='image'><img src='" + PersistData.assetsUrl + "/img/" + src_img + "' title='"+data['name']+"' width='110' height='110'></div>";
		var name        = "<div class='testimony-text-header'><h3>" + data['name'] + "</h3></div>";
		var text        = "<div class='testimony-text-p'><p>" + data['comment'] + "</p></div>";
		var block       = "<div class='testimony row-" + row + " " + classe + "'>" +
												"<div class='testimony-image'>" +
													"<div class='mask-image'></div>" +
														image_block +
												"</div>" +
												"<div class='testimony-text'>" +
													name + text +
												"</div>"+
											"</div>";


		$('.testimony-holder').append(block);
	};


	var create_testimony_static_image_child = function create_testimony_static_image_child(data, row, line){
		var classe = '';
		var src_img;
		if(line == 5){
			classe = 'no-margin-block';
		}

		src_img = PersistData.assetsUrl + '/img/mulher-'+row+'-'+line+'.jpg';
	
		var name        = "<div class='testimony-text-header'><h3>" + data['name'] + "</h3></div>";
		var image       = "<div class='testimony-image'>"+
							"<span class='sprite spritenoimage'></span>"+
							"<div class='image-small-one'>" + "<img src='" + src_img + "' width='71' height='72' />" + "</div>"+
						"</div>";
		var text        = "<div class='testimony-text-p'><p>" + data['comment'] + "</p></div>";
		var block = "<div class='testimony testimony-without-image row-" + row + " " + classe + "'>"+
						image +
						"<div class='testimony-text'>" + 
							name + text +
						"</div>"+
					"</div>";

		$('.testimony-holder').append(block);
	};

	//Função que decide que tipo de bloco de comentario vai ser criado
	var decide_block = function decide_block(data, row, line){
		l('decide_block');
		l(data);
		if(row <= 2){
			if( row == 1 ){
				create_testimony_static_image(data, row, line);
			}else if(row == 2 && (line != 3 && line != 5)){
				create_testimony_static_image_child(data, row, line);
			}else{
				create_testimony_noimage(data, row, line);
			}
		}else if( typeof data === 'undefined' ){
			create_testimony_nocomentary(data, row, line);
		}else if( data['url_image'] == '' ){
			create_testimony_noimage(data, row, line);
		}else{
			create_testimony_image(data, row, line);
		}
	};

	//Função que cria o conjunto de blocos de comentarios
	var render_friends_tree = function render_friends_tree(data){
		var i;
		var j;
		var max = getMax(data);
		l('max');
		l(max);
		l('render_friends_tree');

		if(!Helper.isMobile.any()){
			for(j = 0; j < max; j++){
				for(i = 0; i < 5; i++){
					decide_block(data[i][j], j+1, i+1);
					if((get_testimony_block_nodes() % 5) == 0){
						$('.testimony-holder').append("<br clear='all' />");
					}
				}
			}
		} else{
			for(j = 0; j < max; j++){
				console.log("Passou no primeiro for");
				for(i = 0; i < 5; i++){
					console.log("Passou no segundo for");
					decide_block(data[i][j], j+1, i+1);
					if((get_testimony_block_nodes() % 5) == 0){
						$('.testimony-holder').append("<br clear='all' />");
					}
				}
			}
		}
	}

	// Função de callback para quando houver erro validação de um elemento de um formulário.
	var treat = function treat(el, t){
		el.addClass('error');
	};

	// Função responsável por englobar todos os binds de todos os tipos
	var binds = function binds(){
		click_binds();
	};

	// Função que coleta um conjunto de comentarios da arvore de comentarios na inicialização do site
	var getNodes = function getNodes(){

		send_data('getNodes/', {}, 'GET', 'jsonp', treat_nodes);
	};

	var animation_btn_saiba_mais = function animation_btn_saiba_mais(){
		$( window ).scroll(function() {
			l($('body').scrollTop());
			if( ($('html').scrollTop() >= 10)  || ($('body').scrollTop() >= 10) ){
				$('#container-saibamais-ucuuba').animate({
					opacity: 1,
					top: -20
				}
				, 1200, function(){
				});
				$( window ).unbind('scroll');
			}
		});
	};

	var get_one = function get_one(){
		l('get sendo executado');
		$.get(PersistData.backEndUrl + 'getNodes/', function(data) {
			l('hjhjhj');
			l(data);
		});
	};

	var bind_header = function bind_header(){
		$('.draghandle, #top-banners .before, #top-banners .after').on('touchstart click mousedown', function(){
			$('.draghandle').addClass('hide-text');
		});
	};

	return{
		init : function(){
			treat_offset_mobile();
			initialize_plugins();
			binds();
			animation_btn_saiba_mais();
			getNodes();
			bind_header();
		},
		setDebug : function(b){
			if (typeof b === 'boolean') {
				debug = b;
			}
		},
		getDegug : function(){
			return debug;
		},
		getAnimationStatus : function(){
			return testimony_animation;
		},
		nodes : function(){
			getNodes();
		},
		getNodesNum : function(){
			return nNodes;
		},
		getShowed : function(){
			return showedNodes;
		},
		ui : function(){
			get_one();
		}
	}
})();