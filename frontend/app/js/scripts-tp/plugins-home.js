
    NATURA.init();

    if ($('body').find('#top-banners-container').length > 0) {
       
        t_type = '';

        $('#tw-site').click(function(){
             t_type = 'tw-site';
        });

        $('#tw-video').click(function(){
            t_type = 'tw-video';
        });

        window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,"script","twitter-wjs"));
        twttr.ready(function (twttr) {
            var txt = encodeURI("https://twitter.com/intent/tweet?status=Difícil encontrar hidratação intensa sem aquela sensação pesada na pele? Chame o poder que vem da natureza. http://natura.com.br/ekos");
            document.getElementById('tw-video').href = txt;
            txt = encodeURI("https://twitter.com/intent/tweet?status=Natura EKOS apresenta Ucuuba. A semente de uma árvore rara que garante uma rara hidratação. Chame Natura. http://natura.com.br/ekos");
            document.getElementById('tw-site').href = txt;
            twttr.events.bind('tweet', function (event) {
                $('#modal-facebook-success').modal();
                switch (t_type) {
                    case "tw-site":
                        track.sendEvent('ekos', 'twitter-pagina', 'compartilhe-sucesso');
                    break;
                    case "tw-video":
                        track.sendEvent('ekos', 'filme_natura-ekos-ucuuba', 'TW-compartilhe');
                    break;
                }
                // track.sendEvent('ekos', 'twitter-pagina', 'compartilhe-sucesso');
            });
        });
    }


    var options = {
        ratio            : 16/9, // usually either 4/3 or 16/9 -- tweak as needed
        videoId          : 'lsxSmi9E4DM', // toy robot in space is a good default, no?
        mute             : true,
        repeat           : false,
        width            : 710,
        height           : 510,
        wrapperZIndex    : 99,
        increaseVolumeBy : 10,
        start            : 0
    };

    window.already_half = false;
    window.already_play = false;
    window.already_stop = false;

    var tag = document.createElement('script');
    tag.src = "http://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    window.player;
    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('video-block-target', {
            width: options.width,
            height: options.height,
            videoId: options.videoId,
            playerVars: {
                controls: 2,
                showinfo: 1,
                modestbranding: 1,
                rel: 0, 
                controls: 2, 
                autohide: 1,
                wmode: 'transparent'
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': function(e) {
                  onPlayerStateChange(e);
                }
            }
        });
    }

    window.onPlayerReady = function(e) {
        if (options.mute) e.target.mute();
        // e.target.seekTo(options.start);
        // e.target.playVideo();
    }

    window.onPlayerStateChange = function(event) {
        switch (event.data) {
        case YT.PlayerState.ENDED:
          // clearTagsVideos();
          ga('send', 'event', 'ekos', 'filme_natura-ekos-ucuuba', 'fim');          
          // console.log("teste xpto:" + _that.percent);
          console.log("ENDED");
          // _that.tagPlayVideo();
          // dispatchEvent('ended');
          break;
        case YT.PlayerState.PLAYING:
          tagStartVideoProgress();        
          ga('send', 'event', 'ekos', 'filme_natura-ekos-ucuuba', 'play');       
          console.log("PLAYING");
          // _that.startVideoProgress();
          // dispatchEvent('playing');
          break;
        case YT.PlayerState.PAUSED:
          // _that.tagStopVideoProgress();
          console.log("PAUSED");
          // _that.stopVideoProgress();
          // dispatchEvent('paused');
          break;
        case YT.PlayerState.BUFFERING:
          console.log("BUFFERING");
          // dispatchEvent('buffering');
          break;
        case YT.PlayerState.CUED:
          console.log("CUED");
          // dispatchEvent('cued');
          break;
      };
    }

    window.tagStartVideoProgress = function(event) {
        var _that = this,
            duration = this.player.getDuration(),
            percent;
        
        // if(testGA || testProgress) {
          this.progress = setInterval(function () {
            
            // calculate percent
            _that.percent = _that.player.getCurrentTime() / duration;
            
            // dispatch analytics
            // if(testGA) {
              if(!_that.bool25 && _that.percent > 0.25) {
                _that.bool25 = true;
                _that.progressGA = 25;
                // trackAnalytics(_TRACK_CAT_, _that.currentVideoName ,'25%')
                // dispatchEvent('progressGA', 25);
              } else if(!_that.bool50 && _that.percent > 0.50) {
                _that.bool50 = true;
                ga('send', 'event', 'ekos', 'filme_natura-ekos-ucuuba', 'meio');
                // dispatchEvent('progressGA', 50);
              } else if(!_that.bool75 && _that.percent > 0.75) {
                _that.bool75 = true;
                // trackAnalytics(_TRACK_CAT_, _that.currentVideoName ,'75%')
                // dispatchEvent('progressGA', 75);
              }
            // };

            // dispatch progress
            // if(testProgress) dispatchEvent('progress', percent);

          }, 200);
        // }
    }