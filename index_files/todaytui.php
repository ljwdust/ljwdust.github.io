$(function(){
		
		function create(){
			
			var days_member = $("<div></div>").addClass("days_member");				

			var days_tlt = $("<h3 class='days_tlt'>每日成员风采<i>教练教练甜过初恋，初恋初恋不如教练</i></h3>");
			var days_time = $('<span class="days_time">今天是2016年9月12日 农历 八月十二 星期一</span>');
			var days_title = $('<div class="days_title"></div>').append(days_tlt).append(days_time);
			days_member.append(days_title);

			var days_con = $('<div class="days_con"></div>');
			var d_pics = $('<div class="d_pics"><a href="http://www.snh48.com/member_detail.php?sid=10002" target="_blank"></a><img src="http://www.snh48.com/images/member/zp_10002.jpg"></div>');
			days_con.append(d_pics);

			var days_list = $('<table class="days_list">' +
                '<tr><td><span>昵称：</span>教练</td><td><span>个人特长：</span>双节棍、散打、配音</td></tr>' +
                '<tr><td><span>身高：</span>163</td><td><span>血型：</span>O</td></tr>' +
                '<tr><td><span>生日：</span>09.14</td><td><span>星座：</span>处女座</td></tr>' +
                '<tr><td colspan="2"><span>兴趣爱好：</span>看动漫、做美食</td></tr>' +
                '<tr><td colspan="2"><span>出生地：</span>中国 湖南</td></tr>' +
                '<tr><td colspan="2"><span>最终所属：</span>SNH48 S队（TEAM SII）</td></tr>' +
                '<tr><td colspan="2"><span>经历备注：</span></td></tr>' +
                '<tr><td colspan="2">2012.10.14&nbsp;加入SNH48一期生<br/>2013.04.17&nbsp;一期生审查通过认可为SNH48正式一期生<br/>2013.11.11&nbsp;加入SNH48TeamS队（TeamSII）<br/>2014.07.26&nbsp;SNH48第一届总决选第九名<br/>2015.07.25&nbsp;SNH48第二届总决选第二十四名<br/>2016.07.30&nbsp;SNH48第三届总决选第三十八名</td></tr>' +
            '</table>');
			var days_intro = $('<div class="days_intro days_S"></div>').append($('<h4 class="days_name">陈 思<i> Chen Si - TEAM SII</i></h4>')).append(days_list);
			days_con.append(days_intro);

			var days_piclist = $('<div class="days_piclist"><img src="http://wap.snh48.com/cmseditor/upload/thumb/c519e8c6fe0c496377f8c6fcb762117b.jpg"><img src="http://wap.snh48.com/cmseditor/upload/thumb/f4aef13243b725032d08fd9844d2c83d.jpg"></div>');
			days_con.append(days_piclist);

			var days_weibo = $('<div class="days_weibo">' +
            '<iframe width="100%" height="275" class="share_self" frameborder="0" scrolling="no" src="http://widget.weibo.com/weiboshow/index.php?language=&width=510&height=472&fansRow=0&ptype=1&speed=0&skin=1&isTitle=1&noborder=1&isWeibo=1&isFans=1&uid=3050742117&verifier=655ac839&dpc=1"></iframe>' +
        '</div>');
			days_con.append(days_weibo);
			days_con.append($('<div style="height:1px; overflow:hidden; clear:both;"></div>'));

			days_member.append(days_con);

			$("body").append(days_member);
		}			
create();

	});
	
