function DefaultProduct(){}function LastCicleProduct(){}function OnlyCN(){}function Only(){}function NewProduct(){}function ProductCN(){}function LastCicleProductCN(){}function NewProductCN(){}function Promotion(){}function PromotionCN(){}var loaderTemplate='<div class="loader"></div>',blockTemplate='<div class="block"></div>',c_productTemplate1=_.template('		<a class="box17 bck-color2 flex-box" style="background-color: <%= color %>"			href="<%= productUrl %>" title="<%= description %>">			<div class="border brd-color2" style="border-color: <%= color %>"></div>			<div class="img-wrapper">				<img src="<%= imgUrl %>" onload="ProductLoader.imgLoaded(this);" onerror="this.onerror=ProductLoader.imgLoaded(this);this.src=\'/imagens/produtos/inexistente.png\';" onabort="this.onabort=ProductLoader.imgLoaded(this);this.src=\'/imagens/produtos/inexistente.png\';" />			</div>			<div class="info">				<div class="text"><%= description %></div>				<div class="bottom">R$ <%= value %></div>			</div>			<div class="tri-plus"></div>		</a>	'),c_productTemplate2=_.template('		<a class="box17 bck-color2 flex-box" style="background-color: <%= color %>"			href="<%= productUrl %>" title="<%= description %>">			<div class="ball behavior">novo</div>			<div class="border brd-color2" style="border-color: <%= color %>"></div>			<div class="img-wrapper">				<img src="<%= imgUrl %>" onload="ProductLoader.imgLoaded(this);" onerror="this.onerror=ProductLoader.imgLoaded(this);this.src=\'/imagens/produtos/inexistente.png\';" onabort="this.onabort=ProductLoader.imgLoaded(this);this.src=\'/imagens/produtos/inexistente.png\';" />			</div>			<div class="info">				<div class="text"><%= description %></div>				<div class="bottom">R$ <%= value %></div>			</div>			<div class="tri-plus"></div>		</a>	'),c_productTemplate3=_.template('		<a class="box17 bck-color2 flex-box" style="background-color: <%= color %>"			href="<%= productUrl %>" title="<%= description %>">			<div class="ball1 behavior">				<p class="text1">último</p>				<p class="text2">ciclo</p>				<p class="text3">de vendas</p>			</div>			<div class="border brd-color2" style="border-color: <%= color %>"></div>			<div class="img-wrapper">				<img src="<%= imgUrl %>" onload="ProductLoader.imgLoaded(this);" onerror="this.onerror=ProductLoader.imgLoaded(this);this.src=\'/imagens/produtos/inexistente.png\';" onabort="this.onabort=ProductLoader.imgLoaded(this);this.src=\'/imagens/produtos/inexistente.png\';" />			</div>			<div class="info">				<div class="text"><%= description %></div>				<div class="bottom">R$ <%= value %></div>			</div>			<div class="tri-plus"></div>		</a>	'),c_productTemplate4=_.template('		<a class="product1 flex-box brd-color1" href="<%= productUrl %>" title="<%= description %>"			style="border-color: <%= color %>">			<div class="prod-photo-wrp">				<img class="prod-photo" src="<%= imgUrl %>" 					onload="ProductLoader.imgLoaded(this);" 					onerror="this.onerror=ProductLoader.imgLoaded(this);this.src=\'/imagens/produtos/inexistente.png\';" 					onabort="this.onabort=ProductLoader.imgLoaded(this);this.src=\'/imagens/produtos/inexistente.png\';" />			</div>			<div class="info">				<div class="ball3 behavior bck-color1" style="background-color: <%= color %>"><%= points %></div>				<h2><%= description %></h2>				<p>Cód. <%= sku %></p>			</div>			<div class="prices">				<ul>					<li><strong>Você paga: </strong>R$ <%= pay %></li>					<li><strong>Você vende: </strong>R$ <%= value %></li>				</ul>			</div>			<div class="tri-plus"></div>			<div style="border-right-color: <%= color %>" class="css-tri brd-rgt-clr1"></div>		</a>	'),c_productTemplate5=_.template('		<a class="product1 flex-box brd-color1" href="<%= productUrl %>" title="<%= description %>"			style="border-color: <%= color %>">			<div class="ball behavior">novo</div>			<div class="prod-photo-wrp">				<img class="prod-photo" src="<%= imgUrl %>" 					onload="ProductLoader.imgLoaded(this);" 					onerror="this.onerror=ProductLoader.imgLoaded(this);this.src=\'/imagens/produtos/inexistente.png\';" 					onabort="this.onabort=ProductLoader.imgLoaded(this);this.src=\'/imagens/produtos/inexistente.png\';" />			</div>			<div class="info">				<div class="ball3 behavior bck-color1" style="background-color: <%= color %>"><%= points %></div>				<h2><%= description %></h2>				<p>Cód. <%= sku %></p>			</div>			<div class="prices">				<ul>					<li><strong>Você paga: </strong>R$ <%= pay %></li>					<li><strong>Você vende: </strong>R$ <%= value %></li>				</ul>			</div>			<div class="tri-plus"></div>			<div style="border-right-color: <%= color %>" class="css-tri brd-rgt-clr1"></div>		</a>	'),c_productTemplate6=_.template('		<a class="product1 flex-box brd-color1" href="<%= productUrl %>" title="<%= description %>"			style="border-color: <%= color %>">			<div class="ball1 behavior">				<p class="text1">último</p>				<p class="text2">ciclo</p>				<p class="text3">de vendas</p>			</div>			<div class="prod-photo-wrp">				<img class="prod-photo" src="<%= imgUrl %>" 					onload="ProductLoader.imgLoaded(this);" 					onerror="this.onerror=ProductLoader.imgLoaded(this);this.src=\'/imagens/produtos/inexistente.png\';" 					onabort="this.onabort=ProductLoader.imgLoaded(this);this.src=\'/imagens/produtos/inexistente.png\';" />			</div>			<div class="info">				<div class="ball3 behavior bck-color1" style="background-color: <%= color %>"><%= points %></div>				<h2><%= description %></h2>				<p>Cód. <%= sku %></p>			</div>			<div class="prices">				<ul>					<li><strong>Você paga: </strong>R$ <%= pay %></li>					<li><strong>Você vende: </strong>R$ <%= value %></li>				</ul>			</div>			<div class="tri-plus"></div>			<div style="border-right-color: <%= color %>" class="css-tri brd-rgt-clr1"></div>		</a>	'),c_productTemplate7=_.template('		<a class="box17 bck-color2 flex-box" style="background-color: <%= color %>"			href="<%= productUrl %>" title="<%= description %>">			<div class="ball behavior small">promoção</div>			<div class="border brd-color2" style="border-color: <%= color %>"></div>			<div class="img-wrapper">				<img src="<%= imgUrl %>" onload="ProductLoader.imgLoaded(this);" onerror="this.onerror=ProductLoader.imgLoaded(this);this.src=\'/imagens/produtos/inexistente.png\';" onabort="this.onabort=ProductLoader.imgLoaded(this);this.src=\'/imagens/produtos/inexistente.png\';" />			</div>			<div class="info">				<div class="text"><%= description %></div>				<div class="bottom">R$ <%= value %></div>			</div>			<div class="tri-plus"></div>		</a>	'),c_productTemplate8=_.template('		<a class="product1 flex-box brd-color1" href="<%= productUrl %>" title="<%= description %>"			style="border-color: <%= color %>">			<div class="ball behavior small">promoção</div>			<div class="prod-photo-wrp">				<img class="prod-photo" src="<%= imgUrl %>" 					onload="ProductLoader.imgLoaded(this);" 					onerror="this.onerror=ProductLoader.imgLoaded(this);this.src=\'/imagens/produtos/inexistente.png\';" 					onabort="this.onabort=ProductLoader.imgLoaded(this);this.src=\'/imagens/produtos/inexistente.png\';" />			</div>			<div class="info">				<div class="ball3 behavior bck-color1" style="background-color: <%= color %>"><%= points %></div>				<h2><%= description %></h2>				<p>Cód. <%= sku %></p>			</div>			<div class="prices">				<ul>					<li><strong>Você paga: </strong>R$ <%= pay %></li>					<li><strong>Você vende: </strong>R$ <%= value %></li>				</ul>			</div>			<div class="tri-plus"></div>			<div style="border-right-color: <%= color %>" class="css-tri brd-rgt-clr1"></div>		</a>	'),c_productTemplate9=_.template('		<a class="box17 bck-color2 flex-box" style="background-color: <%= color %>"			href="<%= productUrl %>" title="<%= description %>">			<div class="ball1 behavior">				<p class="text1">somente</p>				<p class="text3">neste</p>				<p class="text2">ciclo</p>			</div>			<div class="border brd-color2" style="border-color: <%= color %>"></div>			<div class="img-wrapper">				<img src="<%= imgUrl %>" onload="ProductLoader.imgLoaded(this);" onerror="this.onerror=ProductLoader.imgLoaded(this);this.src=\'/imagens/produtos/inexistente.png\';" onabort="this.onabort=ProductLoader.imgLoaded(this);this.src=\'/imagens/produtos/inexistente.png\';" />			</div>			<div class="info">				<div class="text"><%= description %></div>				<div class="bottom">R$ <%= value %></div>			</div>			<div class="tri-plus"></div>		</a>	'),c_productTemplate10=_.template('		<a class="product1 flex-box brd-color1" href="<%= productUrl %>" title="<%= description %>"			style="border-color: <%= color %>">			<div class="ball1 behavior">				<p class="text1">somente</p>				<p class="text3">neste</p>				<p class="text2">ciclo</p>			</div>			<div class="prod-photo-wrp">				<img class="prod-photo" src="<%= imgUrl %>" 					onload="ProductLoader.imgLoaded(this);" 					onerror="this.onerror=ProductLoader.imgLoaded(this);this.src=\'/imagens/produtos/inexistente.png\';" 					onabort="this.onabort=ProductLoader.imgLoaded(this);this.src=\'/imagens/produtos/inexistente.png\';" />			</div>			<div class="info">				<div class="ball3 behavior bck-color1" style="background-color: <%= color %>"><%= points %></div>				<h2><%= description %></h2>				<p>Cód. <%= sku %></p>			</div>			<div class="prices">				<ul>					<li><strong>Você paga: </strong>R$ <%= pay %></li>					<li><strong>Você vende: </strong>R$ <%= value %></li>				</ul>			</div>			<div class="tri-plus"></div>			<div style="border-right-color: <%= color %>" class="css-tri brd-rgt-clr1"></div>		</a>	');DefaultProduct.prototype={getTemplate:function(json){return c_productTemplate1(json)}},LastCicleProduct.prototype={setNext:function(product){this.next=product},getTemplate:function(json){return json.stamp&&"lastcycle"===json.stamp?c_productTemplate3(json):this.next.getTemplate(json)}},OnlyCN.prototype={setNext:function(product){this.next=product},getTemplate:function(json){return 2==json.tmpl&&"only"===json.stamp?c_productTemplate10(json):this.next.getTemplate(json)}},Only.prototype={setNext:function(product){this.next=product},getTemplate:function(json){return json.stamp&&"only"===json.stamp?c_productTemplate9(json):this.next.getTemplate(json)}},NewProduct.prototype={setNext:function(product){this.next=product},getTemplate:function(json){return json.stamp&&"new"===json.stamp?c_productTemplate2(json):this.next.getTemplate(json)}},ProductCN.prototype={setNext:function(product){this.next=product},getTemplate:function(json){return 2==json.tmpl?c_productTemplate4(json):this.next.getTemplate(json)}},LastCicleProductCN.prototype={setNext:function(product){this.next=product},getTemplate:function(json){return 2==json.tmpl&&"lastcycle"===json.stamp?c_productTemplate6(json):this.next.getTemplate(json)}},NewProductCN.prototype={setNext:function(product){this.next=product},getTemplate:function(json){return 2==json.tmpl&&"new"===json.stamp?c_productTemplate5(json):this.next.getTemplate(json)}},Promotion.prototype={setNext:function(product){this.next=product},getTemplate:function(json){return json.stamp&&"promotion"===json.stamp?c_productTemplate7(json):this.next.getTemplate(json)}},PromotionCN.prototype={setNext:function(product){this.next=product},getTemplate:function(json){return 2==json.tmpl&&"promotion"===json.stamp?c_productTemplate8(json):this.next.getTemplate(json)}},function($){function init(){var pagination,$container=$("#product-pagination");$container.length&&(pagination=new Pagination($container),pagination.setProducts(),$(document.body).on("click","#product-pagination .more",function(){pagination.next()}).on("product.load",function(){$container.show(),$(document.body).trigger("product.show")}))}var page=1;Pagination=function(){function start(){var obj=this;obj.products.length?(buildFirstPage.call(obj),$(document.body).on("product.start",function(){$(blockTemplate).insertAfter(obj.trigger),obj.trigger.append(loaderTemplate)}).on("masonry.done",function(){var $trigger=$(obj.trigger);$trigger.next().remove(),$trigger.find(".loader").remove()})):obj.container.hide(),obj.container.removeClass("product-pagination-load")}function buildFirstPage(){var ps=this.pageSize;each.call(this,this.products.slice(0,ps),ps),this.products.length<=ps&&$(this.trigger).parent().hide()}function each(products){for(var i=0;i<products.length;i++)this.content.append(getTemplate(products[i])),products[i].imgUrl?ProductLoader.loadImg(products[i].imgUrl):$(document.body).trigger("product.load")}function Obj($container){this.container=$container,this.content=$container.find(".clearfix"),this.pageSize=$container.data("size"),this.trigger=$container.find(".more")}return Obj.prototype={setProducts:function(){var obj=this,$cont=obj.container;$.ajax({url:Properties["url.product"],data:$cont.data(),dataType:"json",success:function(response){obj.products=response.status?response.data:[],start.call(obj)},error:function(){obj.products=[],start.call(obj)}})},next:function(){var ps=this.pageSize,next=ps*page;$(document.body).trigger("product.start"),each.call(this,this.products.slice(next,next+ps)),this.products.length>next+ps?page++:$(this.trigger).parent().hide()}},Obj}(),getTemplate=function(){var onlyCN=new OnlyCN,promotionCN=new PromotionCN,newPrdCN=new NewProductCN,lastCiclePrdCN=new LastCicleProductCN,prdCN=new ProductCN,only=new Only,promotion=new Promotion,newProduct=new NewProduct,lastCicleProduct=new LastCicleProduct,defaultProduct=new DefaultProduct;return onlyCN.setNext(promotionCN),promotionCN.setNext(newPrdCN),newPrdCN.setNext(lastCiclePrdCN),lastCiclePrdCN.setNext(prdCN),prdCN.setNext(only),only.setNext(promotion),promotion.setNext(newProduct),newProduct.setNext(lastCicleProduct),lastCicleProduct.setNext(defaultProduct),function(json){return onlyCN.getTemplate(json)}}(),$(init),window.ProductLoader={images:[],imgLoaded:function(img){var i=ProductLoader.images.indexOf(img.src);ProductLoader.images.splice(i,1),0===ProductLoader.images.length&&$(document.body).trigger("product.load")},loadImg:function(imgUrl){imgUrl&&ProductLoader.images.push(imgUrl)}}}(jQuery),function($){function init(){$(document.body).on("click",".video2",function(e){start($(e.currentTarget))})}function start($video){var player=$video.data("player");"jwplayer"==player?startJwplayer($video):"vimeo"==player&&loadvimeo($video)}function startJwplayer($video){require(["jwplayer"],function(){var $player=jwplayer($video.attr("id"));$player.setup&&($video.html(""),$player.setup({autostart:!0,base:$video.data("base"),file:$video.data("url"),height:$video.data("height"),width:$video.data("width"),primary:"flash"}))})}function loadvimeo($video){require(["vimeo"],function(){$video.html(Template.VI($.extend({index:++index},$video.data())))})}var index=0,Template={VI:_.template('<iframe				id="vimeo<%= index %>"				src="<%= url %>?api=1&player_id=vimeo<%= index %>"				width="<%= width %>"				height="<%= height %>"				frameborder="0"				onload="startvimeo(this);"				webkitAllowFullScreen mozallowfullscreen allowFullScreen>			</iframe>')};window.startvimeo=function(element){var $player=$f(element);$player.addEvent&&$player.addEvent("ready",function(){$player.api("play")})},$(init)}(jQuery),function($,Msnry){function arrange(element){new Msnry(element,options),$(document.body).trigger("masonry.done")}function organize(){_.each($container,arrange)}function init(){$container=$(CONTAINER),$(document.body).on("product.show",organize),organize()}var $container,CONTAINER=".combo10 .clearfix",ITEM=".flex-box",options={itemSelector:ITEM};$(init),window.startMasonry=organize}(jQuery,Masonry);