document.write("<div class=\"theater_n\">");
document.write("	<div class=\"tn_l\">");
document.write("		<div id=\"flashBg_t\">");
document.write("			<div id=\"flashLine_t\">");
document.write("				<ul id=\"flash_t\">");
document.write("					<li><a href=\"theater.html\" target=\"_blank\" id=\"flash_t1\" ><span></span><img src=\"images/theater/tbn_1.jpg\" width=\"435\" height=\"260\"></a></li>");
document.write("					<li><a href=\"theater.html\" target=\"_blank\" id=\"flash_t2\" ><span></span><img src=\"images/theater/tbn_12.jpg\" width=\"435\" height=\"260\"></a></li>");
document.write("					<li><a href=\"theater.html\" target=\"_blank\" id=\"flash_t3\" ><span></span><img src=\"images/theater/tbn_2.jpg\" width=\"435\" height=\"260\"></a></li>");
document.write("					<li><a href=\"theater.html\" target=\"_blank\" id=\"flash_t4\" ><span></span><img src=\"images/theater/tbn_3.jpg\" width=\"435\" height=\"260\"></a></li>");
document.write("					<li><a href=\"theater.html\" target=\"_blank\" id=\"flash_t5\" ><span></span><img src=\"images/theater/tbn_4.jpg\" width=\"435\" height=\"260\"></a></li>");
document.write("					<li><a href=\"theater.html\" target=\"_blank\" id=\"flash_t6\" ><span></span><img src=\"images/theater/tbn_5.jpg\" width=\"435\" height=\"260\"></a></li>");
document.write("					<li><a href=\"theater.html\" target=\"_blank\" id=\"flash_t7\" ><span></span><img src=\"images/theater/tbn_13.jpg\" width=\"435\" height=\"260\"></a></li>");
document.write("					<li><a href=\"theater.html\" target=\"_blank\" id=\"flash_t8\" ><span></span><img src=\"images/theater/tbn_6.jpg\" width=\"435\" height=\"260\"></a></li>");
document.write("					<li><a href=\"theater.html\" target=\"_blank\" id=\"flash_t9\" ><span></span><img src=\"images/theater/tbn_7.jpg\" width=\"435\" height=\"260\"></a></li>");
document.write("					<li><a href=\"theater.html\" target=\"_blank\" id=\"flash_t10\" ><span></span><img src=\"images/theater/tbn_8.jpg\" width=\"435\" height=\"260\"></a></li>");
document.write("					<li><a href=\"theater.html\" target=\"_blank\" id=\"flash_t11\" ><span></span><img src=\"images/theater/tbn_9.jpg\" width=\"435\" height=\"260\"></a></li>");
document.write("					<li><a href=\"theater.html\" target=\"_blank\" id=\"flash_t12\" ><span></span><img src=\"images/theater/tbn_10.jpg\" width=\"435\" height=\"260\"></a></li>");
document.write("					<li><a href=\"theater.html\" target=\"_blank\" id=\"flash_t13\" ><span></span><img src=\"images/theater/tbn_15.jpg\" width=\"435\" height=\"260\"></a></li>");
document.write("					<li><a href=\"theater.html\" target=\"_blank\" id=\"flash_t14\" ><span></span><img src=\"images/theater/tbn_14.jpg\" width=\"435\" height=\"260\"></a></li>");
document.write("					<li><a href=\"theater.html\" target=\"_blank\" id=\"flash_t15\" ><span></span><img src=\"images/theater/tbn_11.jpg\" width=\"435\" height=\"260\"></a></li>");
document.write("				</ul>");
document.write("			</div>");
document.write("		</div>");

document.write("		<div class=\"tn_txt\">");
document.write("			<div id=\"apDiv_l\">");
document.write("				<div class=\"thea_n\">");
document.write("					<div class=\"w20\">SNH48星梦剧院</div>");
document.write("					<p>中国大型女子偶像团体SNH48（www.snh48.com）的专属表演基地-SNH48星梦剧院，于2013年8月30日正式开业，承载少女偶像和粉丝们无尽期盼、希冀的梦想之船将式启航！SNH48星梦剧院系国内首个为偶像团体量身打造的综合性专属剧院，并有望成为中国新生代偶像文化的新地标。该剧院位于上海市虹口区国家音乐产业基地内，由三十年代上海滩首批影戏院之一原上海嘉兴影剧院整体改造而成，总投资逾人民币二千万元，除装备全套现代化演出设备，可容纳约340位观众的剧场外，还设有粉丝咖啡店，偶像纪念品商店，露台式活动场地和附属商业店铺，其开业后的运营目标是逐步实现365天不间断公演并以极为低廉的亲民票价和粉丝握手会等丰富多彩的互动活动不间断地服务观众，巩固并拓展国内外粉丝，逐步构建巨量粉丝群体并到达影响力的爆发点以实现SNH48成为国民偶像的事业目标。</p>");
document.write("				</div>");
document.write("			</div>");
document.write("		<div id=\"apDiv_r\"> <a href=\"http://www.snh48.com/cafe/\" target=\"_blank\"><img src=\"images/temp/cafe.jpg\" width=\"435\" height=\"260\" /></a></div>");
document.write("	</div>");
document.write("	</div>");

document.write("	<div class=\"tn_r\">");
document.write("		<div class=\"tv\">");
document.write("			<embed src=\"http://static.video.qq.com/TPout.swf?vid=u01255e43qv\" allowFullScreen=\"true\" quality=\"high\" width=\"100%\" height=\"260\" align=\"middle\" allowScriptAccess=\"always\" type=\"application/x-shockwave-flash\"></embed>");
document.write("		</div>");
document.write("		<div class=\"tm\" id=\"dituContent\"></div>");
document.write("	</div>");
document.write("</div>");



        var iWidth = $("#flashBg_t li").width(); //获取焦点图的宽度（显示面积）
        var lilen = $("#flashBg_t ul li").length; //获取焦点图个数
        var index = 0;
        var picTimes;

        //以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
        var btn = "<a class='munList flash_pre' href='javascript:;'></a><a class='munList flash_next' href='javascript:;'></a>";
        $("#flashBg_t").append(btn);

        //上一页按钮
        $("#flashBg_t .flash_pre").click(function() {
          index -= 1;
          if(index == -1) {index = lilen - 2;}
          trunPics(index);
        });

        //下一页按钮
        $("#flashBg_t .flash_next").click(function() {
          index += 1;
          if(index == lilen - 1) {index = 0;}
          trunPics(index);
        });

        //本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
        $("#flashBg_t ul").css("width",iWidth * (lilen));

        //鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
        $("#flashBg_t").hover(function() {
          clearInterval(picTimes);
        },function() {
          picTimes = setInterval(function() {
            trunPics(index);
            index++;
            if(index == lilen -1 ) {index = 0;}
            },4000); //此4000代表自动播放的间隔，单位：毫秒
        }).trigger("mouseleave");

        //显示图片函数，根据接收的index值显示相应的内容
        function trunPics(index) { //普通切换
          var nowLeft = -index*iWidth; //根据index值计算ul元素的left值
          $("#flashBg_t ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
          //$("#flashBg_t .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
          $("#flashBg_t .btn span").stop(true,false).animate({"opacity":"1"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果
        }

//创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
        addMarker();//向地图中添加marker
    }
    
    //创建地图函数：
    function createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(121.496764,31.262547);//定义一个中心点坐标
        map.centerAndZoom(point,17);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }
    
    //地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
    
    //地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
	map.addControl(ctrl_nav);
                //向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	map.addControl(ctrl_sca);
    }
    
    //标注点数组
    var markerArr = [{title:"SNH48星梦剧院",content:"SNH48星梦剧院",point:"121.496764|31.262578",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
		 ];
    //创建marker
    function addMarker(){
        for(var i=0;i<markerArr.length;i++){
            var json = markerArr[i];
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new BMap.Point(p0,p1);
			var iconImg = createIcon(json.icon);
            var marker = new BMap.Marker(point,{icon:iconImg});
			var iw = createInfoWindow(i);
			var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
			marker.setLabel(label);
            map.addOverlay(marker);
            label.setStyle({
                        borderColor:"#808080",
                        color:"#333",
                        cursor:"pointer"
            });
			
			(function(){
				var index = i;
				var _iw = createInfoWindow(i);
				var _marker = marker;
				_marker.addEventListener("click",function(){
				    this.openInfoWindow(_iw);
			    });
			    _iw.addEventListener("open",function(){
				    _marker.getLabel().hide();
			    })
			    _iw.addEventListener("close",function(){
				    _marker.getLabel().show();
			    })
				label.addEventListener("click",function(){
				    _marker.openInfoWindow(_iw);
			    })
				if(!!json.isOpen){
					label.hide();
					_marker.openInfoWindow(_iw);
				}
			})()
        }
    }
    //创建InfoWindow
    function createInfoWindow(i){
        var json = markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
        return iw;
    }
    //创建一个Icon
    function createIcon(json){
        var icon = new BMap.Icon("http://map.baidu.com/image/us_cursor.gif", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
        return icon;
    }
    
    initMap();//创建和初始化地图