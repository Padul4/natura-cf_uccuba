var ucuubaSignin = (function() {
	var debug = false;
	var btn_confirmar = 0;
	var register_user = 0;
	var link_invite_friends = 0;
	var link_new_friends = 0;

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

	var treat = function treat(el, t){
		el.addClass('error');
		el.attr('placeholder', 'Preenchimento Obrigatório');
	};

	var validateEmail = function validateEmail(email){
		var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};

	var validation = function validation(className, context, radio, checkbox, callb, type_ev){
		var aux;

		var valid         = true;
		var validCheckbox = false;
		var validRadio    = false;
		var result        = {};
		var cName         = className == "" ? ".required" : "." + className;
		var strSlector    = context + ' input,' + context + ' textarea,' + context + ' select';
		var targets       = $(strSlector);
		var checkboxArray = [];

		$(context + ' .error').removeClass('error');

		targets.each(function(index, el) {
			var _element = $(el);
			var max      = _element.data('max') !== undefined ? parseInt(_element.data('max')) : null;
			var min      = _element.data('min') !== undefined ? parseInt(_element.data('min')) : null;

			if( _element.is(':radio') || _element.is(':checkbox') ){
				if( _element.is(':checkbox') ){

					if ( _element.is(':checked') ) {
						result[_element.attr('name')] = _element.val();
						checkboxArray.push(_element.val());
						validCheckbox = validCheckbox || true;
					}else{
						if( checkbox ){
							validCheckbox = validCheckbox || false;
						}
					}

				}else if ( _element.is(':radio') ){
					if ( _element.is(':checked') ) {
						result[_element.attr('name')] = _element.val();
						validRadio = validRadio || true;
					}else{
						if( radio ){
							validRadio = validRadio || false;
						}
					}
				}
			}else{

				//TIPOS DE REGEX
				if (_element.data('type') == "numberonly") {
					var regg = /^\d*(?:\.\d{1,2})?$/;
					var numb = _element.val();
					if(!regg.test(numb)){
						valid = callb(_element, valid);
					}
					if(typeof type_ev !== 'undefined'){
						// _element.val(numb.replace(/^\d*(?:\.\d{1,2})?$/, ''));
						_element.val(numb.replace(/[a-z\u00C0-\u00ff A-Z]/gi, ''));
						_element.removeClass('error');
					}
				}else if(_element.data('type') == "charsonly"){

					var valField = _element.val();
			        var regTest = /[a-z\u00C0-\u00ff A-Z]/gi;
			        var testChar = "";
			        var newValue = "";
			        var vv = true;
			        
			        for (var key in valField) {
			            testChar = valField[key].replace(regTest, '¶§');
			            
			            if (testChar == "¶§") {
			                newValue += valField[key]; 
			            } else {
			                newValue += '';
			                vv = false;
			            }    
			      	}    
			        if(!vv){
			        	valid = callb(_element, valid);
			        }
			        if(typeof type_ev !== 'undefined'){
			        	_element.val(newValue);
			        	_element.removeClass('error');
			        }
				}
				//FIM TIPOS DE REGEX

				result[_element.attr('name')] = _element.val();
				if(_element.hasClass(cName.replace('.',''))){
					console.log(_element);
					result[_element.attr('name')] = _element.val();
					if(_element.hasClass('email')){
						if (validateEmail(_element.val()) == false) {
							valid = callb(_element, valid);
						}
					}else if(_element.val().length == 0 ){
						valid = callb(_element, valid);
					} else if( max || min){
						if( max && min ){
							if(_element.val().length > max  || _element.val().length < min){
								valid = callb(_element, valid);
							}
						}else if(max){
							if(_element.val().length > max){
								valid = callb(_element, valid);
							}
						}else if(min){
							if(_element.val().length < min){
								valid = callb(_element, valid);
							}
						}
					}
				}
			}
		});


		if( radio && !validRadio ){
			valid = callb(context, "radio");
		}
		if( checkbox && !validCheckbox ){
			valid = callb(context, "checkbox");
		}

		if(checkbox){
			result['checkboxes'] = checkboxArray;
		}

		return{
			v    : valid,
			data : result
		}
	};

	var send_data = function send_data(u, d, t, dt, callb, er, al){
		if(__BASE_URL__ === undefined){
			l('base indefinida');
			return false;
		}
		var success = false;
		u = __BASE_URL__ + u;
		//deixando o dado no formato de json
		//d = JSON.stringify(d['data']);
		d = d['data'];
		l('Dado a ser enviado');
		l(d);
		l(typeof callb);
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

	var submitCode = function(data) {
		if (data['success'] == 1) {
			track.sendEvent('ucuuba-rede', 'confirmar', 'correto');
			$('#container-ekos-code').hide();
			$('#commentarie-block').show();
			ucuubaSignin.bindRegisterUser();
			ga('send', 'pageview', {
			  'page': '/www/nossas-marcas/ekos/rede/logado/seus-dados',
			  'title': 'Nossas Marcas - Ekos - Rede Logado - Proprio'
			});
		} else {
			$('#code').addClass('error');
			track.sendEvent('ucuuba-rede', 'confirmar', 'errado');
			bind_keypress_to_validate('#ekoscode-form input', '#ekoscode-form');
		}

		$('#guest').val(data['guest']);
		$('#guestVerify').val(data['code']);
		$('#more-nodes').val(data['moreNodes']);
	};

	var bindCodeVerification = function() {
		$('.btn-confirmar').off().on({
			'click' : function(event) {
				event.preventDefault();

				var data = validation('', "#ekoscode-form", false, false, treat);
				if(data.v){
					send_data( 'verifyCode', data, 'get', 'jsonp', submitCode );
				}else{
					track.sendEvent('ucuuba-rede', 'confirmar', 'errado');
					bind_keypress_to_validate('#ekoscode-form input', '#ekoscode-form');
				}
			}
		});
	};

	var registerEvents = function() {
		var setCount =  function (src, elem, limit) {
            var chars = src.value.length;
            if (chars > limit) {
                src.value = src.value.substr(0, limit);
                chars = limit;
            }
            elem.html(limit - chars);
		};

		var elem = $(".limit-comment");

		$(".textarea-comment").on("keyup focus", function () {
            setCount(this, elem, 200);
        });

		
		$('.register-user').off().on({
			'click' : function(event) {
				var activeTerms = $('.terms-checkbox').hasClass('terms-checkbox-active');
				var data = validation('', '#commentarie-main-form', false, false, treat);
				if (activeTerms) {				
					event.preventDefault();
					// var data = validation('', '#commentarie-main-form', false, false, treat);

					if (data.v) {
						$('.terms-checkbox').removeClass('error-chk');
						data['data']['guest'] = $('#guest').val();
						data['data']['code'] = $('#guestVerify').val();

						send_data('setRegister', data, 'get', 'jsonp', registerUser);
					}
				} else {
					$('.terms-checkbox').addClass('error-chk');
					$('.error-checkbox').css('display', 'block');
					bind_keypress_to_validate('#commentarie-main-form input, #commentarie-main-form, textarea', '#commentarie-main-form');
				}		
			}
		});

		$('.terms-checkbox').off().on({
			'click' : function() {
				if ($(this).hasClass('terms-checkbox-active')) {
					$(this).removeClass('terms-checkbox-active');
					$(this).addClass('error-chk');
				} else {
					$(this).addClass('terms-checkbox-active');
					$(this).removeClass('error-chk');
					$('.error-checkbox').css('display', 'none');
					
				}
			}
		});

		$('#terms-label').off().on({
			'click' : function() {
				$('.modal-regulamento').modal();
				$('.modal-regulamento').tinyscrollbar({
					trackSize : '462',
					thumbSize : '21'
				});
			}
		});
	};

	var feedbackNoComments = function(data) {
		$('#commentarie-main-form').hide();
		$('.text-fill-fields').hide();
		$('.feedback-comments').show();
		$('.comfirm-result-icon').show();
		$('.shadow-inactive-form').hide();
		$('.feedback-comments').hide();
		$('.container-feedback-discount').show();
		$('.link-step-to-step').off().on({
			'click' : function() {
				track.sendEvent('ucuuba-rede', 'passo-a-passo', 'botao');
				$('.modal-step-by-step').modal({closeClass: 'close-sucess-facebook spriteclose sprite'});
				ga('send', 'pageview', {
				  'page': '/www/nossas-marcas/ekos/rede/logado/passo-a-passo',
				  'title': 'Nossas Marcas - Ekos - Rede Logado - Passo a Passo'
				});
			}
		});
		$('#call-a-friend').hide();
		$('.container-invite-friends').show();
		ucuubaSignin.eventsSendEmails();
	};

	var registerUser = function(data) {
		var hasMoreNodes = $('#more-nodes').val();
		var hasMoreNodes = $('#more-nodes').val();
		if (data['success'] == 1 && hasMoreNodes) {
			$('#commentarie-main-form').hide();
			$('.text-fill-fields').hide();
			$('.feedback-comments').show();
			$('.comfirm-result-icon').show();
			$('.shadow-inactive-form').hide();
			bind_keypress('#call-a-friend');
			ga('send', 'pageview', {
			  'page': '/www/nossas-marcas/ekos/rede/logado/dados-amigas',
			  'title': 'Nossas Marcas - Ekos - Rede Logado - Amigas'
			});

			ucuubaSignin.bindInviteFriend();
		} else {
			feedbackNoComments(data);
		}
	};

	var eventsFriend = function() {

		formEstado();

		$('.link-invite-friends').off().on({
			'click' : function(event) {
				event.preventDefault();
				var data = validation('', "#call-a-friend", false, false, treat);


				if(data.v){
					data['data']['guest'] = $('#guest').val();
					data['data']['city'] = $('#estado').find(':selected').text();
					data['data']['state'] = $('#cidade').val();
					send_data('setNewFriend/', data, 'get', 'jsonp', feedbackFriends );
				}else{
					bind_keypress_to_validate('#call-a-friend input, #call-a-friend select', '#call-a-friend');
				}
			}
		});


		$('.cep-field').on({
			'mouseleave' : function() {
				if (window.cepUser != $(this).val()) {

					window.cepUser =  $(this).val();				

					$.ajax({
						type: 'GET',
						url : __BASE_URL__ + 'getAddress/' + window.cepUser + '',
						dataType : 'jsonp',
						success: function(response) {
						   	var result = response;
						   	var activeAddress = false;

						   	$('.bloco-endereco').find('.field-address').each(function(){
						   		if ($(this).val() != "") {
						   			activeAddress = true;
						   		} 
						   	});

						   	if (activeAddress) {
								$('#endereco').val(result['Rua']);
						   		$('#cidade').val(result['Cidade']);
						   		$('#estado').val(result['UF']);
						   		$('#complemento').val(result['Complemento']);
						   	}	
						},
						error: function(e) {
						   console.log(e);
						}
					});
				}	
			}
		});
	};

	var formEstado = function () {

		var $select = $('#estado');

		$select.append('<option value=""></option>');
		for (var i = 0; i < estados.length; i++) {
			var item = estados[i];
			$select.append('<option value=' + item.ID +'>'+ item.Nome +'</option>');
		};
		
		$select.on('change', function() {
			formCidade($(this).val());
		});
	};

	var formCidade = function(ID) {
		var $select = $('#cidade'),
			options = [];

		$.each(cidades, function() {
			if (this.Estado == ID) {
				options.push(this);
			}
		});

		$select.html('');
		$select.append('<option value=""></option>');
		$.each(options, function() {
			$select.append('<option value=' + this.Nome +'>'+ this.Nome +'</option>');
		});
	};

 	var feedbackFriends = function(data) {
		if (data['success'] == 1) {
			$('.feedback-comments').hide();
			$('.container-feedback-discount').show();
			ga('send', 'pageview', {
			  'page': '/www/nossas-marcas/ekos/rede/logado/comentario-sucesso',
			  'title': 'Nossas Marcas - Ekos - Rede Logado - Comentario Sucesso'
			});
			$('.link-step-to-step').off().on({
				'click' : function() {
					track.sendEvent('ucuuba-rede', 'passo-a-passo', 'botao');
					$('.modal-step-by-step').modal({closeClass: 'close-sucess-facebook spriteclose sprite'});
					ga('send', 'pageview', {
					  'page': '/www/nossas-marcas/ekos/rede/logado/passo-a-passo',
					  'title': 'Nossas Marcas - Ekos - Rede Logado - Passo a Passo'
					});
				}
			});
			$('#call-a-friend').hide();
			$('.container-invite-friends').show();
			ucuubaSignin.eventsSendEmails();	
		} else {

		}
	};

	var sendFriendEmails = function() {
		var totFriends = 1;
		$('.link-new-friends').off().on({
			'click' : function(event) {
				event.preventDefault();
				track.sendEvent( 'ucuuba-rede', 'add-amiga', 'confirmar');
				var blocks = $('.item-invite-friend.add-after');
				if(blocks.length > 0){
					blocks.each(function() {
						var _el = $(this);
						var nextIndex = parseInt($('#indexInvite').val());
						if(_el.find('.email-friend').val() == '' || _el.find('.name-friend').val() == ''){
							_el.remove();
							$('#indexInvite').val(nextIndex - 1);
						}
					});
				}
				
				var data = validation('', "#form-new-friends", false, false, treat);

				if(data.v){
					var totFriends = $('.container-invite-friends').find('.item-invite-friend').length;
                    var dataMoreFriends = {};
                    var dataUsers = [];

                    dataMoreFriends['guest'] = $('#guest').val();

					for (var tf = 0; tf < totFriends; tf++) {
                        dataUsers.push({
                           'name' : $('#nameUser_' + tf).val(),
                            'email' : $('#emailUser_' + tf).val()
                        });
                    }


                    dataMoreFriends['discount'] = dataUsers;

                    $.ajax({
                        type : 'GET',
                        url : __BASE_URL__ + 'setMoreFriends',
                        dataType :'jsonp',
                        data : dataMoreFriends,
                        success : function(response) {
                            feedbackMoreFriends(response);
                        }
                    });

                }else{
					bind_keypress_to_validate('#form-new-friends input', '#form-new-friends');
				}
			}
		});

		$('.link-step-to-step').off().on({
			'click' : function() {
				track.sendEvent('ucuuba-rede', 'passo-a-passo', 'botao');
				$('.modal-step-by-step').modal({closeClass: 'close-sucess-facebook spriteclose sprite'});
				ga('send', 'pageview', {
				  'page': '/www/nossas-marcas/ekos/rede/logado/passo-a-passo',
				  'title': 'Nossas Marcas - Ekos - Rede Logado - Passo a Passo'
				});
			}
		});

		$(".add-more-friends").off().on({
			'click' : function() {
				if (totFriends < 10) {
					var data = validation('', "#form-new-friends", false, false, treat);
					if(data.v){
						track.sendEvent('ucuuba-rede', 'add-amiga', 'botao');
						var itemInvite = $('.item-invite-friend:first-child').clone(true, true);
						var containerInvite = $('.container-invite-friend');
						var nextIndex = parseInt($('#indexInvite').val());

						itemInvite.find('.name-friend').val('');
						itemInvite.find('.email-friend').val('');
						itemInvite.addClass('add-after');

						$('#indexInvite').val(nextIndex + 1);

                        itemInvite.find('.name-friend').attr('name', '[' +  nextIndex + '][name]');
                        itemInvite.find('.email-friend').attr('name', '[' +  nextIndex + '][email]');
                        itemInvite.find('.name-friend').attr('id', 'nameUser_' + nextIndex);
                        itemInvite.find('.email-friend').attr('id', 'emailUser_' + nextIndex);
						itemInvite.find('.name-friend').removeClass('error');
						itemInvite.find('.email-friend').removeClass('error');
						containerInvite.append(itemInvite);
						totFriends++;
					}else{
						bind_keypress_to_validate('.item-invite-friend input', '.item-invite-friend');
					}

				} else {
					$('.add-more-friends').remove();
				}	

				// totFriends++;
			}
		});
	};

	var feedbackMoreFriends = function(data) {
		ga('send', 'event', 'ucuuba-rede', 'add-amiga', 'confirmar');
		if (data['success'] == 1) {
			$('.container-form-comments').css('border-bottom', '0');
			$('.container-invite-friends').hide();
			$('.container-feedback-discount').hide();
			$('.center-feed-success').show();
			$('.container-back-home').show();
			ga('send', 'pageview', {
			  'page': '/www/nossas-marcas/ekos/rede/logado/desconto-sucesso',
			  'title': 'Nossas Marcas - Ekos - Rede Logado - Desconto Sucesso'
			});
			$('#btn-back-to-home').on('click', function(){
				track.sendEvent('ucuuba-rede', 'add-amiga', 'voltar-home');
			});
		} else {

		}
	};

	var validator_type = function(el, reg){
		var str;
		//Somente números
		if(reg == 0){
			if(el.length == 0){
				return false;
			}else if(el.length == 1){
				str = el.val();
				el.val(str.replace(/^\d*(?:\.\d{1,2})?$/, ''));
			}else{
				el.each(function(index, _el) {
					str = _el.val();
					_el.val(str.replace(/^\d*(?:\.\d{1,2})?$/, ''));
				});
			}
		}else if(reg == 1){
			//Somente letras
			if(el.length == 0){
				return false;
			}else if(el.length == 1){
				str = el.val();
				el.val(str.replace(/[a-z][0-9]\s/i, ''));
			}else{
				el.each(function(index, _el) {
					str = _el.val();
					_el.val(str.replace(/[a-z][0-9]\s/i, ''))
				});
			}
		}
	};

	var bind_keypress = function(containerSelector){

		var els = $(containerSelector + ' .numberonly, ' +containerSelector + ' .charsonly');
		els.each(function(index, el) {
			var _element = $(el);
			_element.on('keyup keydown keypress', function(){
				if (_element.data('type') == "numberonly") {
					var numb = _element.val();
					// _element.val(numb.replace(/^\d*(?:\.\d{1,2})?$/, ''));
					_element.val(numb.replace(/[a-z\u00C0-\u00ff A-Z]/gi, ''));
				}else if(_element.data('type') == "charsonly"){

					var valField = _element.val();
			        var regTest = /[a-z\u00C0-\u00ff A-Z]/gi;
			        var testChar = "";
			        var newValue = "";
			        
			        for (var key in valField) {
			            testChar = valField[key].replace(regTest, '¶§');
			            
			            if (testChar == "¶§") {
			                newValue += valField[key]; 
			            } 
			      	}
			      	_element.val(newValue);
				}
			});
		});
	};

	var bind_keypress_to_validate = function(selector, containerSelector){
		$(selector).on('keyup keydown keypress', function(){
			var data = validation('', containerSelector, false, false, treat, true);
		});
	}

	// var bind_keypress_to_validate = function(selector, containerSelector){
	// 	$(selector).off().on({
	// 		'keyup keydown keypress' : function(event) {
	// 			var data = validation('', containerSelector, false, false, treat, true);
	// 		}
	// 	});
	// };

	return {
		init : function() {
			bindCodeVerification();
		},
		bindRegisterUser : function() {
			registerEvents();	
		},
		bindInviteFriend : function() {
			eventsFriend();
		},
		eventsSendEmails : function() {
			sendFriendEmails();
		}	
	}
})();

