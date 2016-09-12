  seajs.use('./js/jquery.js', function($) {

   window.jQuery = window.$ = $;

   /*
    Color animation jQuery-plugin
    http://www.bitstorm.org/jquery/color-animation/
    Copyright 2011 Edwin Martin <edwin@bitstorm.org>
    Released under the MIT and GPL licenses.
   */
   (function(d){function i(){var b=d("script:first"),a=b.css("color"),c=false;if(/^rgba/.test(a))c=true;else try{c=a!=b.css("color","rgba(0, 0, 0, 0.5)").css("color");b.css("color",a)}catch(e){}return c}function g(b,a,c){b = b ? b : [0,0,0,0];var e="rgb"+(d.support.rgba?"a":"")+"("+parseInt(b[0]+c*(a[0]-b[0]),10)+","+parseInt(b[1]+c*(a[1]-b[1]),10)+","+parseInt(b[2]+c*(a[2]-b[2]),10);if(d.support.rgba)e+=","+(b&&a?parseFloat(b[3]+c*(a[3]-b[3])):1);e+=")";return e}function f(b){var a,c;if(a=/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(b))c=[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16),1];else if(a=/#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(b))c=[parseInt(a[1],16)*17,parseInt(a[2],16)*17,parseInt(a[3],16)*17,1];else if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b))c=[parseInt(a[1]),parseInt(a[2]),parseInt(a[3]),1];else if(a=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(b))c=[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10),parseFloat(a[4])];return c}d.extend(true,d,{support:{rgba:i()}});var h=["color","backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","outlineColor"];d.each(h,function(b,a){d.fx.step[a]=function(c){if(!c.init){c.a=f(d(c.elem).css(a));c.end=f(c.end);c.init=true}c.elem.style[a]=g(c.a,c.end,c.pos)}});d.fx.step.borderColor=function(b){if(!b.init)b.end=f(b.end);var a=h.slice(2,6);d.each(a,function(c,e){b.init||(b[e]={a:f(d(b.elem).css(e))});b.elem.style[e]=g(b[e].a,b.end,b.pos)});b.init=true}})(jQuery);

   

   /*rolling the banner*/
   (function(){
      !function($){

  "use strict"

    $.support.transition = (function () {
      var thisBody = document.body || document.documentElement
        , thisStyle = thisBody.style
        , support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined

      return support && {
        end: (function () {
          var transitionEnd = "TransitionEnd"
          if ( $.browser.webkit ) {
          	transitionEnd = "webkitTransitionEnd"
          } else if ( $.browser.mozilla ) {
          	transitionEnd = "transitionend"
          } else if ( $.browser.opera ) {
          	transitionEnd = "oTransitionEnd"
          }
          return transitionEnd
        }())
      }
    })()


 /* CAROUSEL CLASS DEFINITION
  * ========================= */
  var Carousel = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.carousel.defaults, options)
    this.options.slide && this.slide(this.options.slide);



    <!--添加/修改 颜色值，#rgb-->
    //change header bg "ClassName#Color"
    this.colorArr = ['#371cdb','#040000','#000000','#bbdfff','#af99fd','#687A8E','#fcfcfc','#cf0070'];



    //add background color animation
    if(this.colorArr){
      var arr = this.colorArr;
      var color;
      if(/^#\w*/.test(arr[0])){
        color = arr[0];
      }else{
        var opt = arr[0].split('#');
        color = opt[1] ? ('#'+opt[1]) : '#4fa6e7';
      }
      var patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;
      var matches = patt.exec(color);
      var rgb = "rgb("+parseInt(matches[1], 16)+","+parseInt(matches[2], 16)+","+parseInt(matches[3], 16)+")";
      $('header').css({"backgroundColor": rgb});
	  $('#top_gg1').css({"backgroundColor": rgb});
    }

    var that = this;
    this.$element.on('to',function(e,id){
      that.to(id);
    });
  }

  Carousel.prototype = {

    cycle: function () {
      this.interval = setInterval($.proxy(this.next, this), 7000)
      return this
    }

  , to: function (pos) {
      var $active = this.$element.find('.active')
        , children = $active.parent().children()
        , activePos = children.index($active)
        , that = this

      if (pos > (children.length - 1) || pos < 0) return

      if (this.sliding) {
        return this.$element.one('slid', function () {
          that.to(pos)
        })
      }

      if (activePos == pos) {
        return this.pause().cycle()
      }

      return this.slide(pos > activePos ? 'next' : 'prev', $(children[pos]))
    }

  , pause: function () {
      clearInterval(this.interval)
      return this
    }

  , next: function () {
      if (this.sliding) return
      return this.slide('next')
    }

  , prev: function () {
      if (this.sliding) return
      return this.slide('prev')
    }
  , changebg: function(nextPos, arr){
      var color,classname;
      if(/^#\w*/.test(arr[nextPos])){
        color = arr[nextPos];
      }else{
        var opt = arr[nextPos].split('#');
        classname = opt[0] ? opt[0] : 'origin';
        color = opt[1] ? ('#'+opt[1]) : '#4fa6e7';
      }
      $('header').removeAttr('class').css({
         "backgroundImage":''
      }).stop().animate({
         "backgroundColor": color
      }, 700, function(){
          if(classname){
            $(this).css({"backgroundImage": ""}).addClass(classname);
          }
      });
	  
	  $('#top_gg1').removeAttr('class').css({
         "backgroundImage":''
      }).stop().animate({
         "backgroundColor": color
      }, 700, function(){
          if(classname){
            $(this).css({"backgroundImage": ""}).addClass(classname);
          }
      });
  }

  , slide: function (type, next) {
      var $active = this.$element.find('.active')
        , $next = next || $active[type]()
        , isCycling = this.interval
        , direction = type == 'next' ? 'left' : 'right'
        , fallback  = type == 'next' ? 'first' : 'last'
        , children = $active.parent().children()
        , nextPos = children.index($next) < 0 ? 0: children.index($next)
        , that = this;

        //change header bg
        if(this.colorArr) this.changebg(nextPos, this.colorArr);

      this.sliding = true

      isCycling && this.pause()

      $next = $next.length ? $next : this.$element.find('.item')[fallback]()

      if (!$.support.transition && this.$element.hasClass('slide')) {
        this.$element.trigger('slide')
        $active.removeClass('active')
        this.$element.trigger('slide',nextPos)
        $next.addClass('active')
        this.sliding = false
        this.$element.trigger('slid')
      } else {
         $active.fadeTo(600,0.1,function(){
            $active.css('opacity',1);
         });
        $next.addClass(type)
        $next[0].offsetWidth // force reflow
        $active.addClass(direction)
        $next.addClass(direction)
        this.$element.trigger('slide',nextPos)
        this.$element.one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
      }

      isCycling && this.cycle()

      return this
    }
  }


 /* CAROUSEL PLUGIN DEFINITION
  * ========================== */

  $.fn.carousel = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('carousel')
        , options = typeof option == 'object' && option
      if (!data) $this.data('carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (typeof option == 'string' || (option = options.slide)) data[option]()
      else data.cycle()

    })
  }

  $.fn.carousel.defaults = {
    interval: 5000
  }

  $.fn.carousel.Constructor = Carousel

//start
      $(function(){

         var ua = $.browser;
         //if not ie6
         if ( !(ua.msie && ua.version.slice(0,1) == "6") ) {


            // wrap our new image in jQuery, then:
            $('.ue-recrew')
               // once the image has loaded, execute this code
               .load(function () {

                  var a = $('#myCarousel'),b = $('.banner-nav');

                  a.carousel();

                  b.show();

                  a.find('.item').each(function(){
                     b.find('ul').append('<li ><a data-id="' + b.find('li').length + '" class="" href="#"></a></li>');
                  });

                  $(b.find('li')[0]).find('a').addClass('active');

                  a.on('slide',function(e,pos){
                     b.find('a').removeClass('active');
                     $(b.find('li')[pos]).find('a').addClass('active');
                  });

                  b.find('li a').on('click',function(e){
                        e.preventDefault();
                        a.trigger('to',$(e.target).data('id'));
                  })

               })
                  // if there was an error loading the image, react accordingly
               .error(function () {
                     // notify the user that the image could not be loaded
               })
               // *finally*, set the src attribute of the new image to our image
               .attr('src',$('.ue-recrew').data('src'));
         }
      });
}($);

})();/*------rolling the banner-------------*/

});/*end of seajs*/