window.fbAsyncInit = function() {
  FB.init({
    appId      : PersistData.facebookId,
    xfbml      : true,
    version    : 'v2.3'
  });
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function shareVideoFb(){
  FB.ui({
    method: 'feed',
    link: 'https://www.youtube.com/watch?v=lsxSmi9E4DM',
    name: 'EKOS UCUUBA',
    description : 'Difícil encontrar hidratação intensa sem aquela sensação pesada na pele? Chame o poder que vem da natureza.',
    picture : PersistData.backEnd + 'app/webroot/img/share_video_ucuuba.jpg'
  }, function(response){
    if( response && response['post_id'] ){
      $('#modal-facebook-success').modal();
      track.sendEvent('ekos', 'filme_natura-ekos-ucuuba', 'FB-compartilhe-sucesso');
    }else{
      track.sendEvent('ekos', 'filme_natura-ekos-ucuuba', 'FB-compartilhe-erro');
    }
  });
}

function shareSiteFb(){
  FB.ui({
    method: 'feed',
    link: 'http://www.natura.com.br/www/nossas-marcas/ekos/',
    name: 'Natura EKOS UCUUBA',
    caption: 'www.natura.com.br/ucuuba',
    description : 'Natura EKOS apresenta a linha Ucuuba. A semente de uma árvore rara que proporciona uma rara hidratação. Chame Natura e compartilhe.',
    picture : PersistData.backEnd + 'app/webroot/img/share_site.jpg'
  }, function(response){
    if( response && response['post_id'] ){
      $('#modal-facebook-success').modal();
      track.sendEvent('ekos', 'facebook-pagina', 'compartilhe-sucesso');
    }else{
      track.sendEvent('ekos', 'facebook-pagina', 'compartilhe-erro');
    }
  });
}

$('.social-network-video .sprite.spritefacebook.special').on("click touchstart", function(){
  shareVideoFb();   
});

$('#banner-content .social-icon.sprite.spritefacered').on("click touchstart", function(){
  shareSiteFb();
});