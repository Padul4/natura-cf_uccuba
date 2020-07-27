window.fbAsyncInit = function() {
    FB.init({
        appId      : __FB_ID__, // app Brave
        xfbml      : true,
        cookie 	 : true,
        version    : 'v2.3'
    });

    fbApiInit = true;
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));