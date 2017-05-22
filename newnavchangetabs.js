$(function(){
	
	$('#nav').click(function(){
		navChangeTabs();
	});
	
	navChangeTabs();
	
	function navChangeTabs(){
		
		var list = $('ul.tabs li');
		var tabsa = $.trim($('.tabs-selected .tabs-inner:first-child').text());
		
		var home = $('.tabs-icon.icon-home');
		var homew = $('.tabs-icon.icon-homew');
		var hometxt = home.prev('.tabs-title.tabs-with-icon').text();
		var hometxtw = homew.prev('.tabs-title.tabs-with-icon').text();
		
		var shjg = $('.tabs-icon.icon.icon-shjg');
		var shjgw = $('.tabs-icon.icon.icon-shjgw');
		var shjgtxt = shjg.prev('.tabs-title.tabs-closable.tabs-with-icon').text();
		var shjgtxtw = shjgw.prev('.tabs-title.tabs-closable.tabs-with-icon').text();
	
		var qxxx = $('.tabs-icon.icon.icon-qxxx');
		var qxxxw = $('.tabs-icon.icon.icon-qxxxw');
		var qxxxtxt = qxxx.prev('.tabs-title.tabs-closable.tabs-with-icon').text();
		var qxxxtxtw = qxxxw.prev('.tabs-title.tabs-closable.tabs-with-icon').text();
		
		var mrysq = $('.tabs-icon.icon.icon-mrysq');
		var mrysqw = $('.tabs-icon.icon.icon-mrysqw');
		var mrysqtxt = mrysq.prev('.tabs-title.tabs-closable.tabs-with-icon').text();
		var mrysqtxtw = mrysqw.prev('.tabs-title.tabs-closable.tabs-with-icon').text();
		
		var csfx = $('.tabs-icon.icon.icon-csfx');
		var csfxw = $('.tabs-icon.icon.icon-csfxw');
		var csfxtxt = csfx.prev('.tabs-title.tabs-closable.tabs-with-icon').text();
		var csfxtxtw = csfxw.prev('.tabs-title.tabs-closable.tabs-with-icon').text();
		
		var czyj = $('.tabs-icon.icon.icon-czyj');
		var czyjw = $('.tabs-icon.icon.icon-czyjw');
		var czyjtxt = czyj.prev('.tabs-title.tabs-closable.tabs-with-icon').text();
		var czyjtxtw = czyjw.prev('.tabs-title.tabs-closable.tabs-with-icon').text();
		
		var zbrz = $('.tabs-icon.icon.icon-zbrz');
		var zbrzw = $('.tabs-icon.icon.icon-zbrzw');
		var zbrztxt = zbrz.prev('.tabs-title.tabs-closable.tabs-with-icon').text();
		var zbrztxtw = zbrzw.prev('.tabs-title.tabs-closable.tabs-with-icon').text();
		
		var zlzx = $('.tabs-icon.icon.icon-zlzx');
		var zlzxw = $('.tabs-icon.icon.icon-zlzxw');
		var zlzxtxt = zlzx.prev('.tabs-title.tabs-closable.tabs-with-icon').text();
		var zlzxtxtw = zlzxw.prev('.tabs-title.tabs-closable.tabs-with-icon').text();
		
		myNavDefault();
		
		function myNavDefault(){
				
				if(tabsa==hometxt||tabsa==hometxtw){
					home.attr('class','tabs-icon icon-homew');
					
				}else if(tabsa==shjgtxt||tabsa==shjgtxtw){
					shjg.attr('class','tabs-icon icon icon-shjgw');
					
				}else if(tabsa==qxxxtxt||tabsa==qxxxtxtw){
					qxxx.attr('class','tabs-icon icon icon-qxxxw');
					
				}else if(tabsa==mrysqtxt||tabsa==mrysqtxtw){
					mrysq.attr('class','tabs-icon icon icon-mrysqw');
					
				}else if(tabsa==csfxtxt||tabsa==csfxtxtw){
					csfx.attr('class','tabs-icon icon icon-csfxw');
					
				}else if(tabsa==czyjtxt||tabsa==czyjtxtw){
					czyj.attr('class','tabs-icon icon icon-czyjw');
					
				}else if(tabsa==zbrztxt||tabsa==zbrztxtw){
					zbrz.attr('class','tabs-icon icon icon-zbrzw');
					
				}else if(tabsa==zlzxtxt||tabsa==zlzxtxtw){
					zlzx.attr('class','tabs-icon icon icon-zlzxw');
					
				}
		}
		
		for(var i=0;i<list.length;i++){
			
			list[i].onmouseover = function(){
					//var data = $(this).find('.tabs-title.tabs-closable.tabs-with-icon').text();
					var tab = $(this).find('.tabs-icon');
						if(tab.hasClass('icon-home')){
							if(tabsa==hometxt){
								home.attr('class','tabs-icon icon-home');
							}else{
								home.attr('class','tabs-icon icon-homew');
							}
							
						}else if(tab.hasClass('icon-shjg')){
							if(tabsa==shjgtxt){
								shjg.attr('class','tabs-icon icon icon-shjg');
							}else{
								shjg.attr('class','tabs-icon icon icon-shjgw');
							}
							
						}else if(tab.hasClass('icon-qxxx')){
							if(tabsa==qxxxtxt){
								qxxx.attr('class','tabs-icon icon icon-qxxx');
							}else{
								qxxx.attr('class','tabs-icon icon icon-qxxxw');
							}
							
						}else if(tab.hasClass('icon-mrysq')){
							if(tabsa==mrysqtxt){
								mrysq.attr('class','tabs-icon icon icon-mrysq');
							}else{
								mrysq.attr('class','tabs-icon icon icon-mrysqw');
							}
							
						}else if(tab.hasClass('icon-csfx')){
							if(tabsa==csfxtxt){
								csfx.attr('class','tabs-icon icon icon-csfx');
							}else{
								csfx.attr('class','tabs-icon icon icon-csfxw');
							}
							
						}else if(tab.hasClass('icon-czyj')){
							if(tabsa==czyjtxt){
								czyj.attr('class','tabs-icon icon icon-czyj');
							}else{
								czyj.attr('class','tabs-icon icon icon-czyjw');
							}
							
						}else if(tab.hasClass('icon-zbrz')){
							if(tabsa==zbrztxt){
								zbrz.attr('class','tabs-icon icon icon-zbrz');
							}else{
								zbrz.attr('class','tabs-icon icon icon-zbrzw');
							}
							
						}else if(tab.hasClass('icon-zlzx')){
							if(tabsa==zlzxtxt){
								zlzx.attr('class','tabs-icon icon icon-zlzx');
							}else{
								zlzx.attr('class','tabs-icon icon icon-zlzxw');
							}
							
						}
					
				}
				
			list[i].onmouseout = function(){
					
					//var data = $(this).find('.tabs-title.tabs-closable.tabs-with-icon').text();
					var tab = $(this).find('.tabs-icon');
						if(tab.hasClass('icon-homew')){
							if(tabsa==hometxt){
								home.attr('class','tabs-icon icon-homew');
							}else{
								home.attr('class','tabs-icon icon-home');
							}
							
						}else if(tab.hasClass('icon-shjgw')){
							if(tabsa==shjgtxt){								
								shjg.attr('class','tabs-icon icon icon-shjgw');
							}else{
								shjg.attr('class','tabs-icon icon icon-shjg');
							}
							
						}else if(tab.hasClass('icon-qxxxw')){
							if(tabsa==qxxxtxt){
								qxxx.attr('class','tabs-icon icon icon-qxxxw');
							}else{
								qxxx.attr('class','tabs-icon icon icon-qxxx');
							}
							
						}else if(tab.hasClass('icon-mrysqw')){
							if(tabsa==mrysqtxt){
								mrysq.attr('class','tabs-icon icon icon-mrysqw');
							}else{
								mrysq.attr('class','tabs-icon icon icon-mrysq');
							}
							
						}else if(tab.hasClass('icon-csfxw')){
							if(tabsa==csfxtxt){
								csfx.attr('class','tabs-icon icon icon-csfxw');
							}else{
								csfx.attr('class','tabs-icon icon icon-csfx');
							}
							
						}else if(tab.hasClass('icon-czyjw')){
							if(tabsa==czyjtxt){
								czyj.attr('class','tabs-icon icon icon-czyjw');
							}else{
								czyj.attr('class','tabs-icon icon icon-czyj');
							}
							
						}else if(tab.hasClass('icon-zbrzw')){
							if(tabsa==zbrztxt){
								zbrz.attr('class','tabs-icon icon icon-zbrzw');
							}else{
								zbrz.attr('class','tabs-icon icon icon-zbrz');
							}
							
						}else if(tab.hasClass('icon-zlzxw')){
							if(tabsa==zlzxtxt){
								zlzx.attr('class','tabs-icon icon icon-zlzxw');
							}else{
								zlzx.attr('class','tabs-icon icon icon-zlzx');
							}
							
						}
				}
				
			list[i].onclick = function(){
				
					list.removeClass();
					$(this).addClass('tabs-selected');
					
					home.attr('class','tabs-icon icon-home');
					shjg.attr('class','tabs-icon icon icon-shjg');
					qxxx.attr('class','tabs-icon icon icon-qxxx');
					mrysq.attr('class','tabs-icon icon icon-mrysq');
					csfx.attr('class','tabs-icon icon icon-csfx');
					czyj.attr('class','tabs-icon icon icon-czyj');
					zbrz.attr('class','tabs-icon icon icon-zbrz');
					zlzx.attr('class','tabs-icon icon icon-zlzx');
					navChangeTabs();						
				}
						
		}	
	}
	
})
