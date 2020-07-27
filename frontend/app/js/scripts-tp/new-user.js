
// $(document).ready(function(){
    ucuubaSignin.init();
    $('.phone-mask').inputmask('(99) 9999-9999');
    $('.cel-mask').inputmask('(99) 9999[9]-9999');
    $('.cep-field').inputmask('99999-999');

    $('.btn-facebook-connect').off().on({
        'click' : function() {
            function fbEnsureInit(callback) {
                var verifyFB = "";
                if(!window.fbApiInit) {
                    track.sendEvent('ucuuba-rede', 'facebook', 'conecte-se-erro');
                    varifyFB = setInterval(function() {fbEnsureInit(callback);}, 50);
                } else {
                    window.clearInterval(verifyFB);
                    track.sendEvent('ucuuba-rede', 'facebook', 'conecte-se-sucesso');

                    if(callback) {
                        callback();
                    }
                }
            }

            var getStatusFacebook = function() {
                if(window.fbApiInit){
                    FB.getLoginStatus(function(response) {
                        if (response.status === 'connected') {
                            FB.api('/me', function(response) {
                                $('.no-image-facebook').removeClass('no-image-facebook').addClass('image-face-connect');
                                var imgUser = "<img src='https://graph.facebook.com/" + response['id'] + "/picture?type=large'>";
                                $('.image-facebook').append(imgUser);
                                $('#face-image-user').val("https://graph.facebook.com/" + response['id'] + "/picture?type=large");
                                $('#nome-main').val(response['first_name'] + ' ' + response['last_name']);
                                $('#email-main').val(response['email']);
                                track.sendEvent('ucuuba-rede', 'facebook', 'conecte-se-sucesso');
                            });
                        } else {
                            FB.login(function(response) {

                                if (response.authResponse) {
                                    FB.api('/me', function(response) {
                                        $('.no-image-facebook').removeClass('no-image-facebook').addClass('image-face-connect');
                                        var imgUser = "<img src='https://graph.facebook.com/" + response['id'] + "/picture?type=large'>";
                                        $('.image-facebook').append(imgUser);
                                        $('#face-image-user').val("https://graph.facebook.com/" + response['id'] + "/picture?type=large");
                                        $('#nome-main').val(response['first_name'] + ' ' +  response['last_name']);
                                        $('#email-main').val(response['email']);
                                        track.sendEvent('ucuuba-rede', 'facebook', 'conecte-se-sucesso');
                                    });
                                } else {
                                    //
                                    track.sendEvent('ucuuba-rede', 'facebook', 'conecte-se-erro');
                                }
                            }, {scope: 'email, public_profile'});
                        }
                    });
                }
            };
            getStatusFacebook();
            // fbEnsureInit(function() {
            //     getStatusFacebook();
            // });
        }
    });

// });