window.already_left_header = false;
window.already_right_header = false;

var SLIDENATURA = (function(){
    var dragUpTimer = null;
    var fullScrenn = $('#top-banners').width();
    var halfsrcreen = (fullScrenn / 2);
    var halfOfHalf = (halfsrcreen / 2);
    console.log("Full Screen :: " + fullScrenn);
    console.log("Half Screen :: " + halfsrcreen);
    console.log("Half Of Half Screen :: " + halfOfHalf);


    var updateImagemPosition = function(pos) {
        var sizeContainer = $('#top-banners').width();
        var diffContainer = parseInt(sizeContainer) - parseInt(pos);
        var imgBefore = $('.before').find('img');
        var imgAfter =  $('.after').find('img');
        var newPosBefore = 0;
        var newPosAfter = 0;

        console.log(diffContainer);


        if (diffContainer > 0 && diffContainer < halfOfHalf) {
            newPosBefore = 181 - parseInt(diffContainer);
            $(imgBefore).css({
                left : newPosBefore
            });

            $(imgAfter).css({
                left : newPosBefore
            });
            if(!already_right_header){
                already_right_header = true;
                already_left_header = false;
                ga('send', 'event', 'ekos', 'banner-footer', 'fruto');
            }
        }

        if (diffContainer > halfsrcreen && diffContainer < fullScrenn) {
            newPosAfter =  halfsrcreen - parseInt(diffContainer);
            $(imgBefore).css({
                left : newPosAfter
            });

            $(imgAfter).css({
                left : newPosAfter
            });
            if(!already_left_header){
                already_left_header = true;
                already_right_header = false;
                ga('send', 'event', 'ekos', 'banner-header', 'pote');
            }
        }

        if (diffContainer < 50 || diffContainer > (halfOfHalf * 3)) {
            $('.container-intro-slide').hide();
        } else {
            $('.container-intro-slide').show();

            $('#top-banners-container').css({
                backgroundRepeat : 'no-repeat',
                backgroundPosition : 'center 0px'
            });
        }

        if (diffContainer < 100) {
            $('.text-before').fadeIn();
            $('.container-intro-slide').hide();
        } else {
            $('.text-before').fadeOut();
        }

        if (diffContainer > (halfOfHalf * 3)) {
            $('.text-after').fadeIn();
            $('.container-intro-slide').hide();
        } else {
            $('.text-after').fadeOut();
        }
    };

    var dragUp = function(pos) {
        if (dragUpTimer) {
            clearTimeout(dragUpTimer);
        }

        dragUpTimer = setTimeout(function() {
            if (pos <= halfsrcreen) {
                console.log('SLIDENATURA :: pos :: left :: ' + pos);
                uniquevariable.unveil('100%', 0.2);
                setTimeout(function() {
                    updateImagemPosition(0);
                }, 20);
            } else if (pos > halfsrcreen) {
                console.log('SLIDENATURA :: pos :: right :: ' + pos);
                uniquevariable.unveil('0%', 0.2);
                setTimeout(function() {
                    updateImagemPosition(fullScrenn);
                }, 20);
            }
        }, 200);
    };

    return {
        updateImagePosition : function(position, image) {
            updateImagemPosition(position, image);
        },
        dragUp : function(position, dragbar, before) {
            dragUp(position);
        }
    }
}());