document.write("<div class=\"container pages main-banner wrap\">"+
"  <div id=\"myCarousel\" class=\"carousel slide\">"+
/*"	<div style=\"opacity: 1;\" class=\"item active\">"+
"	  <a href=\"http://club.snh48.com/forum.php?mod=viewthread&tid=48425&page=1&extra=#pid2676016\" target=\"_blank\">"+
"		<img data-src=\"images/ad/7.jpg\" alt=\"\" class=\"ue-recrew\">"+
"	  </a>"+
"	</div>"+*/
"	<div style=\"opacity: 1;\" class=\"item active\">"+
"	  <a href=\"http://www.snh48.com/event/s158/\" target=\"_blank\">"+
"		<img data-src=\"images/ad/kv160830.jpg\" alt=\"\" class=\"ue-recrew\">"+
"	  </a>"+
"	</div>"+

"	<div style=\"opacity: 1;\" class=\"item\">"+
"	  <a href=\"http://shop.48.cn//goods/item/1625/\" target=\"_blank\">"+
"		<img src=\"images/ad/kv160906.jpg\" alt=\"\">"+
"	  </a>"+
"	</div>"+

"	<div style=\"opacity: 1;\" class=\"item\">"+
"	  <a href=\"http://www.snh48.com/html/allnews/zixun/2016/0731/1876.html\" target=\"_blank\">"+
"		<img src=\"images/ad/kv160730_b.jpg\" alt=\"\">"+
"	  </a>"+
"	</div>"+

"	<div style=\"opacity: 1;\" class=\"item\">"+
"	  <a href=\"http://www.snh48.com/event/s157\" target=\"_blank\">"+
"		<img src=\"images/ad/kv160826_a.jpg\" alt=\"\">"+
"	  </a>"+
"	</div>"+

/*"	<div style=\"opacity: 1;\" class=\"item\">"+
"	  <a href=\"http://www.snh48.com/event/s155\" target=\"_blank\">"+
"		<img src=\"images/ad/kv160808.jpg\" alt=\"\">"+
"	  </a>"+
"	</div>"+*/

"	<div style=\"opacity: 1;\" class=\"item\">"+
"	  <a href=\"http://www.snh48.com/event/s152\" target=\"_blank\">"+
"		<img src=\"images/ad/kv160730_a.jpg\" alt=\"\">"+
"	  </a>"+
"	</div>"+

"	<div style=\"opacity: 1;\" class=\"item\">"+
"	  <a href=\"http://www.snh48.com/event/s151/\" target=\"_blank\">"+
"		<img src=\"images/ad/kv160715.jpg\" alt=\"\">"+
"	  </a>"+
"	</div>"+

"	<div style=\"opacity: 1;\" class=\"item\">"+
"	  <a href=\"http://shang-web.com/SUZUKI_SNH48/\" target=\"_blank\">"+
"		<img src=\"images/ad/kv160731_a.jpg\" alt=\"\">"+
"	  </a>"+
"	</div>"+

/*"	<div style=\"opacity: 1;\" class=\"item\">"+
"	  <a href=\"http://vote.weibo.com/poll/137374362/\" target=\"_blank\">"+
"		<img src=\"images/ad/kv160731_b.jpg\" alt=\"\">"+
"	  </a>"+
"	</div>"+*/

"	<div style=\"opacity: 1;\" class=\"item\">"+
"	  <a href=\"http://www.snh48.com/html/allnews/zixun/2015/1103/1474.html\" target=\"_blank\">"+
"		<img src=\"images/ad/kv151101a.jpg\" alt=\"\">"+
"	  </a>"+
"	</div>"+

" </div>");

/*用于倒计时
"	<div style=\"opacity: 1;\" class=\"item\">"+
"	  <a href=\"http://www.snh48.com/event/s142/\" target=\"_blank\">"+
"		<img src=\"images/ad/kv160613.jpg\" alt=\"\">"+
'		<div id="top_tt1" style="position:absolute; width:500px; height:40px; left: 50px; bottom: 64px; font-size:23px; color:#fff;font-weight:bold; text-shadow:0 0 3px #1b8db1">距离2016年6月20日报名截止时间还有</div>'+
'		  <div id="top_tt2" style="position:absolute; width:550px; height:50px; left: 40px; bottom: 24px; font-size:38px; font-weight:bold; color:#ffe972;text-shadow:0 0 3px #1b8db1 ">'+
'			<form name="formnow">'+
'			  <input name="dd" type="text" style=" font-size:38px; text-align:right; border:0; width:45px; color:#ffe972;text-shadow:0 0 3px #1b8db1; background-color:transparent; font-weight:bold;" size="2">'+
'			  <strong style="font-weight:bold;margin-left:-5px;">天</strong>'+
'			  <input name="hh" type="text" style=" font-size:38px; text-align:right; border:0; width:45px; color:#ffe972;text-shadow:0 0 3px #1b8db1;margin-left:-3px; background-color:transparent; font-weight:bold;" size="2">'+
'			  <strong style="font-weight:bold;margin-left:-3px;">时</strong>'+
'			  <input name="mm" type="text" style=" font-size:38px; text-align:right; border:0; width:45px; color:#ffe972;text-shadow:0 0 3px #1b8db1;margin-left:-3px; background-color:transparent; font-weight:bold;" size="2">'+
'			  <strong style="font-weight:bold;margin-left:-3px;">分</strong>'+
'			  <input name="ss" type="text" style=" font-size:38px; text-align:right; border:0; width:45px; color:#ffe972;text-shadow:0 0 3px #1b8db1;margin-left:-3px; background-color:transparent; font-weight:bold;" size="2">'+
'			  <strong style="font-weight:bold;margin-left:-3px;">秒</strong>'+
'			</form>'+
'		  </div>'+
"	  </a>"+
"	</div>"+*/
<!-- hide script from old browser

var DifferenceHour = -1

var DifferenceMinute = -1

var DifferenceSecond = -1

var Tday = new Date("Jul 30, 2016 12:00:00")   //**倒计时时间点-注意格式

var daysms = 24 * 60 * 60 * 1000

var hoursms = 60 * 60 * 1000

var Secondms = 60 * 1000

var microsecond = 1000 

function clock()

{

var time = new Date()

var hour = time.getHours()

var minute = time.getMinutes()

var second = time.getSeconds()

var timevalue = ""+((hour > 12) ? hour-12:hour)

timevalue +=((minute < 10) ? ":0":":")+minute

timevalue +=((second < 10) ? ":0":":")+second

timevalue +=((hour >12 ) ? " PM":" AM")

// document.formnow.now.value = timevalue

var convertHour = DifferenceHour

var convertMinute = DifferenceMinute

var convertSecond = DifferenceSecond

var Diffms = Tday.getTime() - time.getTime()
if(Diffms<=0){
	//document.getElementById("top_tt1").innerHTML = "梦想接力 联合招募";
	//document.getElementById("top_tt1").style.left="150px";
	document.formnow.style.fontSize="45px";
	document.formnow.style.fontWeight="bold";
	document.formnow.style.letterSpacing="20px";
	document.getElementById("top_tt2").style.top="215px";
	document.formnow.innerHTML="投票现已截止";
}

DifferenceHour = Math.floor(Diffms / daysms)

Diffms -= DifferenceHour * daysms

DifferenceMinute = Math.floor(Diffms / hoursms)

Diffms -= DifferenceMinute * hoursms

DifferenceSecond = Math.floor(Diffms / Secondms)

Diffms -= DifferenceSecond * Secondms

var dSecs = Math.floor(Diffms / microsecond)

if(convertHour != DifferenceHour) document.formnow.dd.value=DifferenceHour

if(convertMinute != DifferenceMinute) document.formnow.hh.value=DifferenceMinute<10?("0"+DifferenceMinute):DifferenceMinute;

if(convertSecond != DifferenceSecond) document.formnow.mm.value=DifferenceSecond<10?("0"+DifferenceSecond):DifferenceSecond;

document.formnow.ss.value=dSecs<10?("0"+dSecs):dSecs;

// document.formnow.Tnow.value= DifferenceHour DifferenceMinute + DifferenceSecond + dSecs
if(Diffms>0){
	setTimeout("clock()",1000)
}
} 

clock();

// end hiding --> 

