/*
*  Author:  Zs0u
*/
function SetCookie(name,value){
	document.cookie = name + "=" + escape(value);
}
//取cookies函数        
function getCookie(name){
	var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
	if(arr != null) return unescape(arr[2]); 
	return null;
}
//删除cookie
function delCookie(name){
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}		
;(function($){	

	$.fn.jQR2 = function(o){
			var url  = 'js/in.html?'+Math.random();
		var conf = {
			src: url,
			width: 300,
			//height: 480,
			height: 480,
			initR: 0,
			speed: 450,
			close: 'qr-close',
			tar: 'popout-QR',
			tar2: 'popout-QR-default'
		};
		o = $.extend(conf, o);
		return this.each(function(){
			var _this = this,
			QR = '<div id="' + o.tar + '"> \
							<h2 class="float_title">每日成员风采</h2> \
							<div class="qr-iframe"> \
								<iframe width="' + o.width + '" scrolling="no" height="' + o.height + '" frameborder="0" allowtransparency="true" src="' + o.src + '"></iframe> \
							</div> \
							<span class="' + o.close + '">X</span> \
						</div> \
						<span id="popout-QR-default" >每日成员风采<strong>许杨玉琢</strong></span>';
			if(!document.getElementById(o.tar)) $('body').append(QR);
			
			var tar = $('#' + o.tar), tar2 = $('#' + o.tar2);
			
			if(getCookie('qrClosed')){
				tar.animate({width: 'hide'}, 0, function(){
					tar2.animate({width: 'show'}, o.speed);	
				});	
			}else tar.animate({width: 'show', show: 'show'});
			
			$('.' + o.close, tar).bind('click', function(){
				tar.animate({width: 'hide', show: 'hide'}, o.speed, function(){
					tar2.animate({width: 'show', show: 'show'}, o.speed);	
				});
				SetCookie ('qrClosed', 'true');		
				return false;
			});	
			tar2.bind('click', function(){
				tar.animate({width: 'show', show: 'show'}, o.speed);	
				$(this).animate({width: 'hide', show: 'hide'}, o.speed);			
				return false;
			});
		});
	};	
})(jQuery);

$(function(){
	//通用导航快注点击弹出
	//$('#ldjNav-panel .button-lists li.reg a').jQR();
	
	//个别页面默认弹出快注
	var l = window.location.href;
	//本地测试用
	$('body').jQR2();
	
});
