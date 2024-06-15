$(document).ready(function() {
 	$('#bh-hn').click(function(){
    	$('#popup-bao-hanh-ha-noi, .pop-up-close').addClass('active');
 	});
  
  	$('#bh-hp').click(function(){
    	$('#popup-bao-hanh-hai-phong, .pop-up-close').addClass('active');
 	});
  
  	$('#bh-hcm').click(function(){
    	$('#popup-bao-hanh-ho-chi-minh, .pop-up-close').addClass('active');
 	});
  
 	$('.pop-up-close').click(function(){
      	if ($('.pop-up-close').hasClass('active')) {
    		$('#popup-bao-hanh-ha-noi, #popup-bao-hanh-hai-phong, #popup-bao-hanh-ho-chi-minh, .pop-up-close').removeClass('active');
    	}
 	});
  
 	$('body').click(function(){
      	if ($('.pop-up-close').hasClass('active')) {
        	$('.fixed-right-menu').css({'z-index':'1'});
    	}
 	});
  
 	$('.xem-them-tskt-button').click(function(){
      	if( $("#popup-tskt").css('display') == 'block') {
        	$('body').css({'overflow-y':'hidden'});
    	}
 	});
  
 	$('#bg-opacity').click(function(){
      	if( $("#popup-tskt").css('display') == 'block') {
        	$('body').css({'overflow-y':'auto'});
    	}
 	});
  
 	$('.close').click(function(){
      	if( $("#popup-tskt").css('display') == 'block') {
        	$('body').css({'overflow-y':'auto'});
    	}
 	});
 $('#collection-banner-slider').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                dots : false ,
                items: 2 ,
                autoplaySpeed:400,
                autoplay:3000,
              });
});

$(document).ready(function(){
   	if ($('.bang-tskt').height() < 624) {
		$('.xem-them-tskt').css({'display':'none'});
	}
});

$(document).ready(function(){
   	if ($('#tab1').height() < 724) {
		$('.viewmore-area').css({'display':'none'});
	}
});

$(document).ready(function(){
   	if ($('.product-summary-item-ul').height() < 134) {
		$('.viewmoretskt').css({'display':'none'});
	}
});

/*$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});*/
$(document).ready(function () {
  doiTab(".js-tab");
});
function doiTab(holder) {
    $(holder).click(function () {
        var tab_id = $(this).attr("data-id");
        $(holder).removeClass('active');
        $('.tab-content').removeClass('current');
        $(this).addClass('active');
        $(tab_id).addClass('current');
    });
}

$(document).ready(function() {
	$('#close-corner-banner').click(function(){
      	$('#corner-banner').addClass('inactive');
 	});
});

$(document).ready(function() {
	if ( ( $(window).height() < 1100 ) && ( $(window).width() >2500 ) ) {
    	$('html').addClass('resize');
      	$('#tooltip').css({'zoom':'1'});
    }
});

$(document).ready(function() {
	if ( ( $(window).height() < 1100 ) && ( $(window).width() >2500 ) ) {
    	$('html').addClass('resize');
      	$('#tooltip').css({'zoom':'1'});
    }
});

$(document).ready(function(){ 
    $('.tab-a').click(function(){  
      $(".tab").removeClass('tab-active');
      $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
      $(".tab-a").removeClass('active-a');
      $(this).parent().find(".tab-a").addClass('active-a');
     });
});
$(document).ready(function(){ 
$('select#js-province1').on('change', function() {
  var tinh = this.value;
  $('select#store-district1').val('0');
  $('select#store-district1').children('.tonkho2023-quan').addClass('tonkho2023-hide');
  $('select#store-district1').children('.tonkho2023-tinh'+tinh).removeClass('tonkho2023-hide');
  $('div#store-list').children('div.tonkho2023-cuahang').addClass('tonkho2023-hide');
  $('div#store-list').children('div.tonkho2023-tinh'+tinh).removeClass('tonkho2023-hide');
  
  $('select#store-district1').on('change', function() {
    var quan = this.value;
    $('div#store-list').children('div.tonkho2023-cuahang').addClass('tonkho2023-hide');
    $('div#store-list').children('div.tonkho2023-quan'+quan).removeClass('tonkho2023-hide');
  });
});
});

/**** Session ****/
    !function(e){e.session={_id:null,_cookieCache:void 0,_init:function(){window.name||(window.name=Math.random()),this._id=window.name,this._initCache();var e=new RegExp(this._generatePrefix()+"=([^;]+);").exec(document.cookie);if(e&&document.location.protocol!==e[1])for(var t in this._clearSession(),this._cookieCache)try{window.sessionStorage.setItem(t,this._cookieCache[t])}catch(e){}document.cookie=this._generatePrefix()+"="+document.location.protocol+";path=/;expires="+new Date((new Date).getTime()+12e4).toUTCString()},_generatePrefix:function(){return"__session:"+this._id+":"},_initCache:function(){var e=document.cookie.split(";");for(var t in this._cookieCache={},e){var i=e[t].split("=");new RegExp(this._generatePrefix()+".+").test(i[0])&&i[1]&&(this._cookieCache[i[0].split(":",3)[2]]=i[1])}},_setFallback:function(e,t,i){var o=this._generatePrefix()+e+"="+t+"; path=/";return i&&(o+="; expires="+new Date(Date.now()+12e4).toUTCString()),document.cookie=o,this._cookieCache[e]=t,this},_getFallback:function(e){return this._cookieCache||this._initCache(),this._cookieCache[e]},_clearFallback:function(){for(var e in this._cookieCache)document.cookie=this._generatePrefix()+e+"=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";this._cookieCache={}},_deleteFallback:function(e){document.cookie=this._generatePrefix()+e+"=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;",delete this._cookieCache[e]},get:function(e){return window.sessionStorage.getItem(e)||this._getFallback(e)},set:function(e,t,i){try{window.sessionStorage.setItem(e,t)}catch(e){}return this._setFallback(e,t,i||!1),this},delete:function(e){return this.remove(e)},remove:function(e){try{window.sessionStorage.removeItem(e)}catch(e){}return this._deleteFallback(e),this},_clearSession:function(){try{window.sessionStorage.clear()}catch(e){for(var t in window.sessionStorage)window.sessionStorage.removeItem(t)}},clear:function(){return this._clearSession(),this._clearFallback(),this}},e.session._init()}(jQuery);