var track = {};

track.sendEvent = function sendEvent(category, action, label) {
     ga('send','event', category, action, label);
};

track.init = function(){
	// HOME

	$('#btn-saibamais-manteiga-ucuuba').on('click', function() {
		track.sendEvent('ekos', 'saiba-mais', 'ancora');
	});

	// $('.testimony-btn.first').on('click', function() {
	// 	if(!already_down){
	// 		track.sendEvent('ekos', 'rede', 'sobe');
	// 	}
	// });

	// $('.testimony-btn.last').on('click', function() {
	// 	if(!already_up){
	// 		track.sendEvent('ekos', 'rede', 'desce');
	// 	}
	// });

	$('#manteiga-para-maos').on('click', function() {
		track.sendEvent('ekos', 'compre-aqui', 'manteiga-maos');
	});

	$('#consultor-maos').on('click', function(){
		track.sendEvent('ekos', 'encontre-uma-consultora', 'manteiga-maos');
	});
	
	$('#hidratante-corp').on('click',  function() {
		track.sendEvent('ekos', 'compre-aqui', 'hidratante-corp');
	});

	$('#consultor-hidratante-corp').on('click',  function() {
		track.sendEvent('ekos', 'encontre-uma-consultora', 'hidratante-corp');
	});

	$('#manteiga-corpo').on('click', function() {
		track.sendEvent('ekos', 'compre-aqui', 'manteiga-corpo');
	});

	$('#consultor-manteiga-corpo').on('click', function() {
		track.sendEvent('ekos', 'encontre-uma-consultora', 'manteiga-corpo');
	});

	$('#tw-site').on('click', function(){
		track.sendEvent('ekos', 'twitter-pagina', 'compartilhe');
	});

	$('#tw-video').on('click', function(){
		track.sendEvent('ekos', 'twitter-video', 'compartilhe');
	});


	// 

	$('.btn-compre-agora.sabonete-liquido-maos').on('click', function(){
		track.sendEvent('ekos', 'novos-produtos_sabonete-liquido-maos', 'compre-agora');
	});

	$('.btn-consultor.sabonete-liquido-maos').on('click', function(){
		track.sendEvent('ekos', 'novos-produtos_sabonete-liquido-maos', 'consultora');
	});

	// 

	$('.btn-compre-agora.sabonete-liquido-corpo').on('click', function(){
		track.sendEvent('ekos', 'novos-produtos_sabonete-liquido-corpo', 'compre-agora');
	});

	$('.btn-consultor.sabonete-liquido-corpo').on('click', function(){
		track.sendEvent('ekos', 'novos-produtos_sabonete-liquido-corpo', 'consultora');
	});

	// 

	$('.btn-compre-agora.sabonete-barra-vegetal').on('click', function(){
		track.sendEvent('ekos', 'novos-produtos_sabonete-barra', 'compre-agora');
	});

	$('.btn-consultor.sabonete-barra-vegetal').on('click', function(){
		track.sendEvent('ekos', 'novos-produtos_sabonete-barra', 'consultora');
	});

	// 

	$('.btn-compre-agora.manteiga-reparadora').on('click', function(){
		track.sendEvent('ekos', 'antigos-produtos_manteiga-reparadora', 'compre-agora');
	});

	$('.btn-consultor.manteiga-reparadora').on('click', function(){
		track.sendEvent('ekos', 'antigos-produtos_manteiga-reparadora', 'consultora');
	});

	// 

	$('.btn-compre-agora.manteiga-hidratante').on('click', function(){
		track.sendEvent('ekos', 'antigos-produtos_manteiga-hidratante', 'compre-agora');
	});

	$('.btn-consultor.manteiga-hidratante').on('click', function(){
		track.sendEvent('ekos', 'antigos-produtos_manteiga-hidratante', 'consultora');
	});

	// 

	$('.btn-compre-agora.hidratante-corporal').on('click', function(){
		track.sendEvent('ekos', 'antigos-produtos_hidratante-corporal', 'compre-agora');
	});

	$('.btn-consultor.hidratante-corporal').on('click', function(){
		track.sendEvent('ekos', 'antigos-produtos_hidratante-corporal', 'consultora');
	});

	// 
	$('.bx-pager-item .bullet-ga').on('click', function(){
		track.sendEvent('ekos', 'banner-footer', 'seletor');
	});

	//

	$('.item .tag-acai').on('click', function(){
		track.sendEvent('ekos', 'ativos', 'acai');
	});

	$('.item .tag-andiroba').on('click', function(){
		track.sendEvent('ekos', 'ativos', 'andiroba');
	});

	$('.item .tag-buriti').on('click', function(){
		track.sendEvent('ekos', 'ativos', 'buriti');
	});

	$('.item .tag-cacau').on('click', function(){
		track.sendEvent('ekos', 'ativos', 'cacau');
	});

	$('.item .tag-castanha').on('click', function(){
		track.sendEvent('ekos', 'ativos', 'castanha');
	});

	$('.item .tag-mate-verde').on('click', function(){
		track.sendEvent('ekos', 'ativos', 'mate-verde');
	});

	$('.item .tag-pitanga').on('click', function(){
		track.sendEvent('ekos', 'ativos', 'pitanga');
	});

	$('.item .tag-maracuja').on('click', function(){
		track.sendEvent('ekos', 'ativos', 'maracuja');
	});

	// CADASTRO
};

track.init();