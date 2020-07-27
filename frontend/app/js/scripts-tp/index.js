/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);

var SLIDENATURA = (function(){
    var updateImagemPosition = function(pos) {
        var sizeContainer = $('#top-banners').width();
        var diffContainer = parseInt(sizeContainer) - parseInt(pos);
        var imgBefore = $('.before').find('img');
        var imgAfter =  $('.after').find('img');
        var newPosBefore = 0;
        var newPosAfter = 0;

        var halfsrcreen = (window.screen.width / 2);
        console.log(halfsrcreen);

        if (diffContainer > 0 && diffContainer < 260) {
            newPosBefore = 261 - parseInt(diffContainer);
        }

        if (diffContainer > 760 && diffContainer < 981) {
            newPosAfter =  760 - parseInt(diffContainer);
        }

        $(imgBefore).css({
            left : newPosBefore
        });

        $(imgAfter).css({
            left : newPosAfter
        });


        if (diffContainer < 50 || diffContainer > 900) {
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
        } else {
            $('.text-before').fadeOut();
        }

        if (diffContainer > 850) {
            $('.text-after').fadeIn();
        } else {
            $('.text-after').fadeOut();
        }
    };

    return {
        updateImagePosition : function(position, image) {
            updateImagemPosition(position, image);
        }
    }
}());

/* Before and After image script By Dynamic Drive
 * Created: Oct 15th', 2014 by DynamicDrive.com. This notice must stay intact for usage
 * Author: Dynamic Drive at http://www.dynamicdrive.com/
 * Visit http://www.dynamicdrive.com/ for full source code
 */

var ddbeforeandafter = (function($){

    var gallerydefaults = {
        dragUI: '<div class="drag"><div class="draghandle"></div></div>',
        revealduration: 0.1,
        initialreveal: ['50%', 1],
        initialrevealeasing: 'ease-in-out',
        hidedragbardelay: 1
    }

    var detecttouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0))

    function ddbeforeandafter(options){
        var s = $.extend({}, gallerydefaults, options)
        s._imagesloaded = false
        s._draghidetimer = null
        var thisobj = this
        var $container = $('#'+s.wrapperid)
        var $before = $container.find('div.before:eq(0)')
        var $after = $container.find('div.after:eq(0)')
        $container.append(s.dragUI)
        var $dragbar = $container.find('div.drag')
        var $draghandle = $dragbar.find('div.draghandle')
        var dimensions = {containerw: $container.width(), dragbarw: $dragbar.width(), draghandlew: $draghandle.outerWidth()}
        s.defaultTimingFunction = $dragbar.css('transitionTimingFunction')
        var isdirectclick = false
        var mousemoveevtstr = 'mousemove.dragstart' + s.wrapperid + ' touchmove.dragstart' + s.wrapperid

        this.s = s
        this.$container = $container
        this.$before = $before
        this.$after = $after
        this.$dragbar = $dragbar
        this.$draghandle = $draghandle
        this.dimensions = dimensions

        this._init()

        $container.on('mousedown touchstart', function(e){
            isdirectclick = true
            if (e.target.tagName != 'A')
                e.preventDefault()
        })
        $container.on(detecttouch? 'touchstart' : 'click', function(e){
            if (s._imagesloaded && (isdirectclick || detecttouch)){
                var e = (e.type.indexOf('touch') != '-1')? e.originalEvent.changedTouches[0] : e
                var newx = e.pageX - $container.offset().left
                $dragbar.add($before).css({transitionTimingFunction: s.defaultTimingFunction, transitionDuration: s.revealduration+'s'})
                $dragbar.css({left: newx})
                $before.css({width: newx})


                SLIDENATURA.updateImagePosition(newx);

                if (e.target.tagName != 'A')
                    e.preventDefault()
            }
            isdirectclick = false
        })
        $container.hover(
            function(){
                clearTimeout(s._draghidetimer)
                $dragbar.stop().animate({opacity:1})
            },
            function(){
                s._draghidetimer = setTimeout(function(){$dragbar.stop().animate({opacity:1})}, s.hidedragbardelay*1000)
            }
        )
        $dragbar.bind('click', function(e){
            e.stopPropagation()
        })
        $dragbar.bind('mousedown touchstart', function(e){
            if (!s._imagesloaded)
                return
            var e = (e.type.indexOf('touch') != -1)? e.originalEvent.changedTouches[0] : e
            dimensions = thisobj.dimensions // refresh dimensions var
            var initialx = parseInt($dragbar.css('left'))
            var containerleft = $container.offset().left
            $dragbar.add($before).css({transitionDuration: '0s'})
            $(document).bind(mousemoveevtstr, function(e){
                var e = (e.type.indexOf('touch') != '-1')? e.originalEvent.changedTouches[0] : e
                var dx=e.pageX-containerleft-initialx //distance to move horizontally
                var newx=(dx<0)? Math.max(0, initialx+dx) : Math.min(dimensions.containerw-dimensions.dragbarw, initialx+dx) //Set horizonal bonds. dx>0 indicates drag right versus
                $dragbar.css({left: newx})
                $before.css({width: newx})

                SLIDENATURA.updateImagePosition(newx);

                return false //cancel default drag action
            })
            return false //cancel default drag action
        })
        $(document).bind('mouseup touchend', function(e){
            var e = (e.type.indexOf('touch') != -1)? e.originalEvent.changedTouches[0] : e
            $(document).unbind(mousemoveevtstr)
        })

        //     	$(window).bind('resize', function(e){
        // dimensions.containerw = $container.width()
        // thisobj._centerelement($dragbar, $draghandle)
        // $before.find('img:eq(0)').css({width: dimensions.containerw, height: 'auto'})
        // $after.find('img:eq(0)').css({width: dimensions.containerw, height: 'auto'})
        // thisobj.unveil(s.initialreveal[0], s.initialreveal[1], s.initialrevealeasing)
        //     	})

    } // end main function

    ddbeforeandafter.prototype = {

        _centerelement: function($parent, $target, offsetx, offsety){
            var dimensions = {parentw: $parent.width(), parenth: $parent.height(), targetw: $target.outerWidth(), targeth: $target.outerHeight()}
            $target.css({left: dimensions.parentw/2 - dimensions.targetw/2 + (offsetx || 0), top: dimensions.parenth/2 - dimensions.targeth/2 + (offsety || 0)})
        },

        _init: function(initoptions){
            var thisobj = this,
                s = this.s,
                $container = this.$container,
                $before = this.$before,
                $after = this.$after,
                $dragbar = this.$dragbar,
                $draghandle = this.$draghandle
            s._imagesloaded = false
            if (initoptions && initoptions.beforeafterhtml){
                $before.html(initoptions.beforeafterhtml[0])
                $after.html(initoptions.beforeafterhtml[1])
            }
            if (initoptions && initoptions.dimensions){
                $container.css({width: initoptions.dimensions[0], height: initoptions.dimensions[1]})
                this.dimensions = {containerw: $container.width(), dragbarw: $dragbar.width(), draghandlew: $draghandle.outerWidth()}
            }
            this._centerelement($dragbar, $draghandle)
            this.unveil(0, 0)
            clearTimeout(s._draghidetimer)
            $dragbar.css({opacity:0.3})
            var $beforeimage = this.$before.css({opacity:0.5}).find('img:eq(0)').css({width: this.dimensions.containerw, height: 'auto'})
            var $afterimage = this.$after.css({opacity:0}).find('img:eq(0)').css({width: this.dimensions.containerw, height: 'auto'})
            var imagesloadeddfd = [$.Deferred(), $.Deferred()]
            if ($beforeimage.prop('complete') === true)
                imagesloadeddfd[0].resolve()
            if ($afterimage.prop('complete') === true)
                imagesloadeddfd[1].resolve()
            $beforeimage.on('load error', function(){imagesloadeddfd[0].resolve()})
            $afterimage.on('load error', function(){imagesloadeddfd[1].resolve()})
            $.when(imagesloadeddfd[0], imagesloadeddfd[1]).done(function(){
                s._imagesloaded = true
                $after.css({opacity:1})
                $before.animate({opacity:1}, function(){
                    $dragbar.animate({opacity:1}, function(){
                        thisobj.unveil(s.initialreveal[0], s.initialreveal[1], s.initialrevealeasing)
                    })
                })
            })

        },

        reload: function(beforeafterhtml, dimensions){
            var options = {beforeafterhtml: beforeafterhtml, dimensions: dimensions}
            this._init(options)
        },

        unveil: function(amt, dur, timingfunc){
            var s = this.s,
                $container = this.$container,
                $before = this.$before,
                $dragbar = this.$dragbar,
                dimensions = this.dimensions,
                amt = parseInt(amt)
            amt = (amt < 0)? 0 : (amt > 100)? 100 : amt
            var dur = ((typeof dur != 'undefined')? dur : s.revealduration) + 's'
            var timingfunction = timingfunc || s.defaultTimingFunction
            amt = 100 - amt
            var newx = (dimensions.containerw - dimensions.dragbarw) * amt/100
            $dragbar.add($before).css({transitionTimingFunction: timingfunction, transitionDuration: dur})
            $dragbar.css({left: newx})
            $before.css({width: newx})

        }

    }

    return ddbeforeandafter
}) (jQuery);

/*
 A simple jQuery modal (http://github.com/kylefox/jquery-modal)
 Version 0.5.5
 */
(function($) {

    var current = null;

    $.modal = function(el, options) {
        $.modal.close(); // Close any open modals.
        var remove, target;
        this.$body = $('body');
        this.options = $.extend({}, $.modal.defaults, options);
        this.options.doFade = !isNaN(parseInt(this.options.fadeDuration, 10));
        if (el.is('a')) {
            target = el.attr('href');
            //Select element by id from href
            if (/^#/.test(target)) {
                this.$elm = $(target);
                if (this.$elm.length !== 1) return null;
                this.open();
                //AJAX
            } else {
                this.$elm = $('<div>');
                this.$body.append(this.$elm);
                remove = function(event, modal) { modal.elm.remove(); };
                this.showSpinner();
                el.trigger($.modal.AJAX_SEND);
                $.get(target).done(function(html) {
                    if (!current) return;
                    el.trigger($.modal.AJAX_SUCCESS);
                    current.$elm.empty().append(html).on($.modal.CLOSE, remove);
                    current.hideSpinner();
                    current.open();
                    el.trigger($.modal.AJAX_COMPLETE);
                }).fail(function() {
                    el.trigger($.modal.AJAX_FAIL);
                    current.hideSpinner();
                    el.trigger($.modal.AJAX_COMPLETE);
                });
            }
        } else {
            this.$elm = el;
            this.$body.append(this.$elm);
            this.open();
        }
    };

    $.modal.prototype = {
        constructor: $.modal,

        open: function() {
            var m = this;
            if(this.options.doFade) {
                this.block();
                setTimeout(function() {
                    m.show();
                }, this.options.fadeDuration * this.options.fadeDelay);
            } else {
                this.block();
                this.show();
            }
            if (this.options.escapeClose) {
                $(document).on('keydown.modal', function(event) {
                    if (event.which == 27) $.modal.close();
                });
            }
            if (this.options.clickClose) this.blocker.click($.modal.close);
        },

        close: function() {
            this.unblock();
            this.hide();
            $(document).off('keydown.modal');
        },

        block: function() {
            var initialOpacity = this.options.doFade ? 0 : this.options.opacity;
            this.$elm.trigger($.modal.BEFORE_BLOCK, [this._ctx()]);
            this.blocker = $('<div class="jquery-modal blocker"></div>').css({
                top: 0, right: 0, bottom: 0, left: 0,
                width: "100%", height: "100%",
                position: "fixed",
                zIndex: this.options.zIndex,
                background: this.options.overlay,
                opacity: initialOpacity
            });
            this.$body.append(this.blocker);
            if(this.options.doFade) {
                this.blocker.animate({opacity: this.options.opacity}, this.options.fadeDuration);
            }
            this.$elm.trigger($.modal.BLOCK, [this._ctx()]);
        },

        unblock: function() {
            if(this.options.doFade) {
                this.blocker.fadeOut(this.options.fadeDuration, function() {
                    $(this).remove();
                });
            } else {
                this.blocker.remove();
            }
        },

        show: function() {
            this.$elm.trigger($.modal.BEFORE_OPEN, [this._ctx()]);
            if (this.options.showClose) {
                this.closeButton = $('<a href="#close-modal" rel="modal:close" class="close-modal ' + this.options.closeClass + '">' + this.options.closeText + '</a>');
                this.$elm.append(this.closeButton);
            }
            this.$elm.addClass(this.options.modalClass + ' current');
            this.center();
            if(this.options.doFade) {
                this.$elm.fadeIn(this.options.fadeDuration);
            } else {
                this.$elm.show();
            }
            this.$elm.trigger($.modal.OPEN, [this._ctx()]);
        },

        hide: function() {
            this.$elm.trigger($.modal.BEFORE_CLOSE, [this._ctx()]);
            if (this.closeButton) this.closeButton.remove();
            this.$elm.removeClass('current');

            if(this.options.doFade) {
                this.$elm.fadeOut(this.options.fadeDuration);
            } else {
                this.$elm.hide();
            }
            this.$elm.trigger($.modal.CLOSE, [this._ctx()]);
        },

        showSpinner: function() {
            if (!this.options.showSpinner) return;
            this.spinner = this.spinner || $('<div class="' + this.options.modalClass + '-spinner"></div>')
                .append(this.options.spinnerHtml);
            this.$body.append(this.spinner);
            this.spinner.show();
        },

        hideSpinner: function() {
            if (this.spinner) this.spinner.remove();
        },

        center: function() {
            this.$elm.css({
                position: 'fixed',
                top: "50%",
                left: "50%",
                marginTop: - (this.$elm.outerHeight() / 2),
                marginLeft: - (this.$elm.outerWidth() / 2),
                zIndex: this.options.zIndex + 1
            });
        },

        //Return context for custom events
        _ctx: function() {
            return { elm: this.$elm, blocker: this.blocker, options: this.options };
        }
    };

    //resize is alias for center for now
    $.modal.prototype.resize = $.modal.prototype.center;

    $.modal.close = function(event) {
        if (!current) return;
        if (event) event.preventDefault();
        current.close();
        var that = current.$elm;
        current = null;
        return that;
    };

    $.modal.resize = function() {
        if (!current) return;
        current.resize();
    };

    // Returns if there currently is an active modal
    $.modal.isActive = function () {
        return current ? true : false;
    }

    $.modal.defaults = {
        overlay: "#000",
        opacity: 0.75,
        zIndex: 10,
        escapeClose: true,
        clickClose: true,
        closeText: 'Close',
        closeClass: '',
        modalClass: "modal",
        spinnerHtml: null,
        showSpinner: true,
        showClose: true,
        fadeDuration: null,   // Number of milliseconds the fade animation takes.
        fadeDelay: 1.0        // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
    };

    // Event constants
    $.modal.BEFORE_BLOCK = 'modal:before-block';
    $.modal.BLOCK = 'modal:block';
    $.modal.BEFORE_OPEN = 'modal:before-open';
    $.modal.OPEN = 'modal:open';
    $.modal.BEFORE_CLOSE = 'modal:before-close';
    $.modal.CLOSE = 'modal:close';
    $.modal.AJAX_SEND = 'modal:ajax:send';
    $.modal.AJAX_SUCCESS = 'modal:ajax:success';
    $.modal.AJAX_FAIL = 'modal:ajax:fail';
    $.modal.AJAX_COMPLETE = 'modal:ajax:complete';

    $.fn.modal = function(options){
        if (this.length === 1) {
            current = new $.modal(this, options);
        }
        return this;
    };

    // Automatically bind links with rel="modal:close" to, well, close the modal.
    $(document).on('click.modal', 'a[rel="modal:close"]', $.modal.close);
    $(document).on('click.modal', 'a[rel="modal:open"]', function(event) {
        event.preventDefault();
        $(this).modal();
    });
})(jQuery);


var NATURA = (function(){
    var debug = false;
    //Numeros de nodos da arvore
    var nNodes = 0;
    //Númerod e nodos mostrados
    var showedNodes = 0;
    //Variável responsável para controle de não 'empilhamento' de animação no bloco de comentarios da home
    var testimony_animation = false;

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
        if( typeof __BASE_URL__ === 'undefined'){
            l('Url base não está definida');
            return false;
        }
        var success = false;
        u = __BASE_URL__ + u;
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
            if(showedNodes <= 1){
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

            if(showedNodes == 1){
                unbind_btn_less();
            }
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
        l('treat_nodes');
        l(data);
        nNodes = data.length;
        showedNodes = 1;
        $('#load-testimony').fadeOut(800, function() {
            $('.testimony-container-btn').removeClass('none');
            render_friends_tree(data);
            if(nNodes >= 1){
                $('.row-1').show();
                if(nNodes > 1){
                    $('.testimony-btn.last').removeClass('disable');
                    bind_btn_more();
                }else if(nNodes == 1){
                    $('.row-1').show();
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
                src_img = 'mulher-1.jpg';
                classe = '';
                break;
            case 2:
                src_img = 'mulher-2.jpg';
                classe = '';
                break;
            case 3:
                src_img = 'mulher-3.jpg';
                classe = '';
                break;
            case 4:
                src_img = 'mulher-4.jpg';
                classe = '';
                break;
            case 5:
                src_img = 'mulher-5.jpg';
                classe = 'no-margin-block';
                break;
            default:
                src_img = 'mulher-1.jpg';
                classe = '';
        }

        var image_block = "<div class='image'><img src='" + __ASSETS_URL__ + "/img/" + src_img + "' title='"+data['name']+"' width='110' height='110'></div>";
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

    //Função que decide que tipo de bloco de comentario vai ser criado
    var decide_block = function decide_block(data, row, line){
        l('decide_block');
        l(data);
        if(row == 1){
            create_testimony_static_image(data, row, line);
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

        for(j = 0; j < max; j++){
            for(i = 0; i < 5; i++){
                decide_block(data[i][j], j+1, i+1);
                if((get_testimony_block_nodes() % 5) == 0){
                    $('.testimony-holder').append("<br clear='all' />");
                }
            }
        }
    };

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

        send_data('getNodes/', {}, 'GET', 'json', treat_nodes);
    };

    var animation_btn_saiba_mais = function animation_btn_saiba_mais(){
        $( window ).scroll(function() {
            l($('body').scrollTop());
            if( ($('html').scrollTop() >= 10)  || ($('body').scrollTop() >= 10) ){
                $('#container-saibamais-ucuuba').animate({
                        opacity: 1,
                        top: -10
                    }
                    , 1200, function(){
                    });
                $( window ).unbind('scroll');
            }
        });
    };

    var get_one = function get_one(){
        l('get sendo executado');
        $.get(__BASE_URL__ + 'getNodes/', function(data) {
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

var track = {};

track.sendEvent = function sendEvent(category, action, label) {
    ga('send', 'event', category, action, label);
};

track.init = function(){

    // HOME

    $('#btn-saibamais-manteiga-ucuuba').on('click', function() {
        track.sendEvent('ekos', 'saiba-mais', 'ancora');
    });

    $('.testimony-btn.first').on('click', function() {
        track.sendEvent('ekos', 'rede', 'sobe');
    });

    $('.testimony-btn.first').on('click', function() {
        track.sendEvent('ekos', 'rede', 'desce');
    });

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

    $('.bx-prev').on('click', function() {
        track.sendEvent('ekos', 'banner-footer', 'esquerda');
    });

    $('.bx-next').on('click', function() {
        track.sendEvent('ekos', 'banner-footer', 'direita');
    });

    // CADASTRO
};

track.init();


NATURA.init();

window.fbAsyncInit = function() {
    FB.init({
        appId      : '452610344890666', // app Brave
        //appId      : '111111111111111', // app Salve
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
        link: 'https://www.facebook.com/video.php?v=10155405841045422&set=vb.382381445421&type=2&theater',
        name: 'EKOS Ucuuba',
        caption: 'Difícil encontrar hidratação intensa sem aquela sensação pesada na pele? Chame o poder que vem da natureza.',
        picture : __ASSETS_URL__ + '/v2/img/share_video_fb.jpg'
    }, function(response){
        if( response && response['post_id'] ){
            $('#modal-facebook-success').modal();
            track.sendEvent('ekos', 'facebook-video', 'compartilhe-sucesso');
        }else{
            track.sendEvent('ekos', 'facebook-video', 'compartilhe-erro');
        }
    });
}

function shareSiteFb(){
    FB.ui({
        method: 'feed',
        link: 'http://www.natura.com.br/',
        name: 'Natura EKOS Ucuuba',
        caption: 'www.natura.com.br/ucuuba',
        description : 'Difícil encontrar hidratação intensa sem aquela sensação pesada na pele? Chame Ucuuba, a joia rara da Amazônia',
        picture : __ASSETS_URL__ + '/v2/img/share_site_fb.jpg'
    }, function(response){
        if( response && response['post_id'] ){
            $('#modal-facebook-success').modal();
            track.sendEvent('ekos', 'facebook-pagina', 'compartilhe-sucesso');
        }else{
            track.sendEvent('ekos', 'facebook-pagina', 'compartilhe-erro');
        }
    });
}

window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,"script","twitter-wjs"));
twttr.ready(function (twttr) {
    var txt = encodeURI("https://twitter.com/intent/tweet?status=Difícil encontrar hidratação intensa sem aquela sensação pesada na pele? Chame o poder que vem da natureza. https://youtu.be/B9QOpOg-QtQ");
    document.getElementById('tw-video').href = txt;
    txt = encodeURI("https://twitter.com/intent/tweet?status=Difícil encontrar hidratação intensa sem aquela sensação pesada na pele? Chame Ucuuba, a joia rara da Amazônia: http://natura.it/1wGRRyD");
    document.getElementById('tw-site').href = txt;
    twttr.events.bind('tweet', function (event) {
        $('#modal-facebook-success').modal();
        track.sendEvent('ekos', 'twitter-pagina', 'compartilhe-sucesso');
    });
});
