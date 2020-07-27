var CarrosselAtivos = {
	init: function(){
    this.setEls();
    this.bind();
	},
	setEls: function(){
		this.$arrowPrev = $('.nav-arrow.previous');
		this.$arrowNext = $('.nav-arrow.next');
	},
	bind: function(){
		var _that = this;

    var myNewFlow = new ContentFlow('nego', {
    	reflectionHeight: 0,
    	maxItemHeight: 246,
    	maxItemWidth: 370,
    	relativeItemPosition: "center",
    	scaleFactorLandscape: 2.2,
    	flowSpeedFactor: 0.6
    });

		this.$arrowPrev.on('click touchstart', function(){
			track.sendEvent('ekos', 'ativos', 'esquerda');
		});
		this.$arrowNext.on('click touchstart', function(){
			track.sendEvent('ekos', 'ativos', 'direita');
		});
	}
}
CarrosselAtivos.init();