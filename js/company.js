/**/
/*bublle-animation*/
/**/
function createDot(className) {
  const dot = $('<div>');
  dot.addClass(className);
  dot.anim = () => {
    const translateX =  Math.random() * window.innerWidth;
    const translateY = Math.random() * window.innerHeight;
    const translateZ = Math.floor((Math.random() * 1040) -1000);
    const opacity = 1-Math.abs(translateZ/1000);
    const duration = Math.floor((Math.random() * 4000) + 1000);
    const delay = Math.floor((Math.random() * 4000) + 3200);
    dot.velocity(
      {
        translateZ: translateZ,
        opacity: opacity,
      },
      {
        duration: duration,
        delay: delay,
        queue: false,
        complete: dot.anim,
        easing: "easeOut"
      }
    );
    dot.velocity(
      {
        translateX: translateX,
        translateY: translateY,
        opacity: opacity,
      },
      {
        duration: duration,
        complete: dot.anim,
        easing: "easeOut"
      }
    );
  };
  return dot;
}
function createDots(amt) {
  const view = $('#view');
  const dotsAmt = amt;
  const dots = [];
  for(let i = 0; i < dotsAmt; i++) {
    let dot = createDot('dot');
    view.append(dot);
    dots.push(dot);
  }
  return dots;
}
const dots = createDots(95);
dots.forEach((dot)=>{
  dot.anim();
})
/*ここまで*/
/*******/
/*背景色で自動テキストカラー*/
/*******/
if('CSS' in window && 'supports' in window.CSS) {
   var support = window.CSS.supports('mix-blend-mode','difference');
   support = support?'mix-blend-mode':'no-mix-blend-mode';
document.documentElement.className += support;
}
/*ここまで*/

/*//////////////*/
/*line-animation on scroll*/
/*//////////////*/
$(function () {
    // aimation呼び出し
    if ($('.io').length) {
        scrollAnimation();
    }
    // aimation関数
    function scrollAnimation() {
        $(window).scroll(function () {
            $(".io").each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();
                if (scroll > position - windowHeight + 200) {
                    $(this).addClass('js-active');
                }
            });
        });
    }
    $(window).trigger('scroll');
});

$(function () {
    // aimation呼び出し
    if ($('.draw-arrow').length) {
        scrollAnimation();
    }
    // aimation関数
    function scrollAnimation() {
        $(window).scroll(function () {
            $(".draw-arrow").each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();
                if (scroll > position - windowHeight - 200) {
                    $(this).addClass('on');
                }
            });
        });
    }
    $(window).trigger('scroll');
});
/*ここまで*/

/*------------------------------*/
/*トップに戻る*/
/*------------------------------*/
$(function () {
		/*トップに戻る*/
		$(window).scroll(function(){
		    if($(window).scrollTop()<50){
		        $('#rocketmeluncur').slideUp(500);
		    }else{
		        $('#rocketmeluncur').slideDown(500);
		    }
		    var ftrocketmeluncur = jQuery("#ft")[0] ? jQuery("#ft")[0] : jQuery(document.body)[0];
		    var scrolltoprocketmeluncur = $('rocketmeluncur');
		var viewPortHeightrocketmeluncur = parseInt(document.documentElement.clientHeight);
		var scrollHeightrocketmeluncur = parseInt(document.body.getBoundingClientRect().top);
		var basewrocketmeluncur = parseInt(ftrocketmeluncur.clientWidth);
		var swrocketmeluncur = scrolltoprocketmeluncur.clientWidth;
		if (basewrocketmeluncur < 1000) {
		var leftrocketmeluncur = parseInt(fetchOffset(ftrocketmeluncur)['left']);
		leftrocketmeluncur = leftrocketmeluncur < swrocketmeluncur ? leftrocketmeluncur * 2 - swrocketmeluncur : leftrocketmeluncur;
		scrolltoprocketmeluncur.style.left = ( basewrocketmeluncur + leftrocketmeluncur ) + 'px';
		} else {
		scrolltoprocketmeluncur.style.left = 'auto';
		scrolltoprocketmeluncur.style.right = '10px';
		}
		});

		$('#rocketmeluncur').click(function(){
		    $("html, body").animate({ scrollTop: '0px',display:'none'},{
		            duration: 600,
		            easing: 'linear'
		        });

		    var self = this;
		    this.className += ' '+"launchrocket";
		    setTimeout(function(){
		      self.className = 'showrocket';
		    },800)
		});
});
/*ここまで*/
/*----------------*/
/*アコーディオン開閉*/
/*----------------*/
$(".subBtn").click(function(){
  //クリックしたjs-accordion-title以外の全てのopenを取る
  $(".subBtn").not(this).removeClass("open");
  //クリックされたjs-accordion-title以外のcontentを閉じる
  $(".subBtn").not(this).next().slideUp(400);
  //thisにopenクラスを付与
  $(this).toggleClass("open");
  //thisのcontentを展開、開いていれば閉じる
  $(this).next().slideToggle(400);
});

/*ここまで*/
/************************/
/*スクロールアニメーション*/
/************************/
$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('.menu-btn').addClass('move');
  } else {
    $('.menu-btn').removeClass('move');
  }
});
/*ここまで*/
