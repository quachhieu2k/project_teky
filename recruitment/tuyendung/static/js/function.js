//var window width
var viewportGlobal = $(window).width();

//function js cal match height
var calMatchHeight = function(){
  if($('.js-match-height').length > 0){
    $('.js-match-height >ul >li').matchHeight();
  }
};

//function js scroll header landing
var scrollHeaderLanding = function(){
  var nav = $('.l-nav');
  if(nav.length > 0 && viewportGlobal > 991 && nav.hasClass('is-transparent')){
    $(window).scroll(function(){
      if($(this).scrollTop() > 0){
        nav.addClass('has-fixed');
      }
      if($(this).scrollTop() <= 0){
        nav.removeClass('has-fixed');
      }
    });
  }
};

//var function Mobile Menu Expand
var menuMobileExpand = function(){
  if($('.js-menu-expand').length > 0){
    $('.js-menu-expand').click(function(e) {
      e.preventDefault();
      var menu = $('.c-menu');
      var parent = $(this).parent();
      if (menu.hasClass('has-menu-tiny')) {
        $(parent).removeClass('is-active');
        $(this).removeClass('is-active');
        menu.removeClass('has-menu-tiny')
            .slideUp();
      } else {
        $(parent).addClass('is-active');
        $(this).addClass('is-active');
        menu.addClass('has-menu-tiny')
            .slideDown();
      }
    });
  }
};

//var function Mobile Sub Menu Expand
var submenuMobileExpand = function(){
  $('.c-menu .c-submenu-btn').click(function(e) {
    e.preventDefault();
    var grand = $(this).parent().parent();
    var root = $(this).parent().parent().parent();
    if ($(this).hasClass('fa-plus')) {
      $(this).removeClass('fa-plus');
      $(this).addClass('fa-minus');
      $('li.mobile-active > .c-dropdown-menu',$(root)).slideUp();
      $('li.mobile-active > a > .c-submenu-btn',$(root)).removeClass('fa-minus');
      $('li.mobile-active > a > .c-submenu-btn',$(root)).addClass('fa-plus');
      $('li.mobile-active',$(root)).removeClass('mobile-active').addClass('mobile-hidden');
      $(grand).addClass('mobile-active').removeClass('mobile-hidden');
      $('>.c-dropdown-menu',$(grand)).slideDown();
    } else {
      $(this).removeClass('fa-minus');
      $(this).addClass('fa-plus');
      $(grand).removeClass('mobile-active').addClass('mobile-hidden');
      $('>.c-dropdown-menu',$(grand)).slideUp();
    }
  });
};

var menuInsideClick = function(){
  if($('.js-inside-menu').length > 0){
    var body = $('body');
    var menu = $('.c-menu');
    $('.js-inside-menu').click(function(e) {
      if (viewportGlobal > 991){
        e.preventDefault();
        var parent = $(this).parent();
        var root = $(this).parent().parent().parent().parent();
        $('.c-backdrop-menu').remove();
        body.append('<div class="c-backdrop-menu"></div>');
        var backdrop = $('.c-backdrop-menu');
        backdrop.show();
        menu.addClass('hold-menu');
        root.addClass('pc-active pc-active-sub');
        parent.addClass('pc-active');
      }
    });
    $('.js-back-menu').click(function(e) {
      e.preventDefault();
      var grand = $(this).parent().parent().parent().parent();
      grand.removeClass('pc-active');
      $('>ul >li.c-menu-child.pc-active', menu).removeClass('pc-active-sub');
    });
    $('body').on('click','.c-backdrop-menu',function () {
      menu.removeClass('hold-menu');
      $('li').removeClass('pc-active pc-active-sub');
      $('.c-backdrop-menu').remove();
    });
  }
};

var footerExpand = function(){
  if($('.c-footer-label').length > 0){
    $('.c-footer-label .fas').click(function() {
      var grand = $(this).parent().parent();
      if ($(this).hasClass('fa-plus')) {
        $(this).removeClass('fa-plus');
        $(this).addClass('fa-minus');
        $('.c-footer-content',$(grand)).slideDown();
      } else {
        $(this).removeClass('fa-minus');
        $(this).addClass('fa-plus');
        $('.c-footer-content',$(grand)).slideUp();
      }
    });
  }
};

//function js main slider
var mainSlider = function(){
  if($('.c-slider').length > 0){
    $('.js-main-slider').owlCarousel({
      items:1,
      loop:true,
      margin:0,
      responsiveClass:false,
      nav:true,
      dots:true,
      autoplay:true,
      autoHeight:false,
      autoplayTimeout:7000,
      autoplaySpeed:1000,
      autoplayHoverPause:false,
      navText:false,
    });
  }
};

//function js fancybox popup view
var fancyboxPopupView = function(){
  $('[data-fancybox]').fancybox({
    youtube : {
      controls : 1,
      showinfo : 0
    },
    vimeo : {
      color : 'f00'
    }
  });
};

//function js slider manual 3
var sliderManual3 = function(){
  if($('.js-slider-manual-3').length > 0){
    $('.js-slider-manual-3').owlCarousel({
      loop:true,
      responsiveClass:true,
      nav:true,
      dots:false,
      autoplay:false,
      autoHeight:false,
      autoplayTimeout:6000,
      autoplayHoverPause:false,
      navText:false,
      responsive:{
        0:{
          items:1,
          margin:0
        },
        554:{
          items:2,
          margin:10
        },
        768:{
          items:3,
          margin:20
        },
        992:{
          items:3,
          margin:30
        }
      }
    });
  }
};


//function js slider manual 3
var sliderManual3 = function(){
  if($('.js-slider-manual-1').length > 0){
    $('.js-slider-manual-1').owlCarousel({
      loop:true,
      responsiveClass:true,
      nav:true,
      dots:false,
      autoplay:false,
      autoHeight:false,
      autoplayTimeout:6000,
      autoplayHoverPause:false,
      navText:false,
      responsive:{
        0:{
          items:1,
          margin:0
        },
        554:{
          items:1,
          margin:10
        },
        768:{
          items:1,
          margin:20
        },
        992:{
          items:1,
          margin:30
        }
      }
    });
  }
};

//function js slider manual tiny 3
var sliderManualTiny3 = function(){
  if($('.js-slider-manual-tiny-3').length > 0){
    $('.js-slider-manual-tiny-3').owlCarousel({
      loop:true,
      responsiveClass:true,
      nav:true,
      dots:false,
      autoplay:false,
      autoHeight:false,
      autoplayTimeout:6000,
      autoplayHoverPause:false,
      navText:false,
      responsive:{
        0:{
          items:1,
          margin:0
        },
        554:{
          items:2,
          margin:10
        },
        768:{
          items:3,
          margin:20
        },
      }
    });
  }
};

//function js slider manual tiny 3
var sliderManualTiny3 = function(){
  if($('.js-slider-manual-tiny-2').length > 0){
    $('.js-slider-manual-tiny-2').owlCarousel({
      loop:true,
      responsiveClass:true,
      nav:true,
      dots:false,
      autoplay:false,
      autoHeight:false,
      autoplayTimeout:6000,
      autoplayHoverPause:false,
      navText:false,
      responsive:{
        0:{
          items:1,
          margin:0
        },
        554:{
          items:2,
          margin:10
        },
        768:{
          items:2,
          margin:20
        },
      }
    });
  }
};

//function js slider manual big 3
var sliderManualBig3 = function(){
  if($('.js-slider-manual-big-3').length > 0){
    $('.js-slider-manual-big-3').owlCarousel({
      loop:true,
      responsiveClass:true,
      nav:true,
      dots:false,
      autoplay:false,
      autoHeight:false,
      autoplayTimeout:6000,
      autoplayHoverPause:false,
      navText:false,
      responsive:{
        0:{
          items:1,
          margin:0
        },
        554:{
          items:2,
          margin:10
        },
        768:{
          items:3,
          margin:20
        },
        992:{
          items:3,
          margin:30
        },
        1200:{
          items:3,
          margin:40
        }
      }
    });
  }
};

//function js slider manual zezo 3
var sliderManualZezo3 = function(){
  if($('.js-slider-manual-zezo-3').length > 0){
    $('.js-slider-manual-zezo-3').owlCarousel({
      loop:true,
      margin:0,
      responsiveClass:true,
      nav:true,
      dots:false,
      autoplay:false,
      autoHeight:false,
      autoplayTimeout:6000,
      autoplayHoverPause:false,
      navText:false,
      responsive:{
        0:{
          items:1
        },
        768:{
          items:3
        },
      }
    });
  }
};

//function js slider prize
var sliderPrize = function(){
  if($('.js-prize-slider').length > 0){
    $('.js-prize-slider').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      nav:true,
      dots:false,
      autoplay:false,
      autoHeight:false,
      autoplayTimeout:6000,
      autoplayHoverPause:false,
      navText:false,
      responsive:{
        0:{
          items:2
        },
        768:{
          items:3
        },
        992:{
          items:4
        }
      }
    });
  }
};

//function js course More Learn
var courseMoreLearn = function(){
  if($('.c-course-more').length > 0){
    $('.c-course-more__expand').click(function(e) {
      e.preventDefault();
      var parent = $(this).parent();
      var contentLearn = $('.c-course-learn');
      parent.addClass('active');
      contentLearn.addClass('active');
      $('.c-course-more__close').show();
      $(this).hide();
    });
    $('.c-course-more__close').click(function(e) {
      e.preventDefault();
      var parent = $(this).parent();
      var contentLearn = $('.c-course-learn');
      parent.removeClass('active');
      contentLearn.removeClass('active');
      $('.c-course-more__expand').show();
      $(this).hide();
    });
  }
};

//function js course content expand
var courseContentExpand = function(){
  if($('.c-course-part').length > 0){
    $('.c-course-part__title').click(function(e) {
      e.preventDefault();
      var parent = $(this).parent().parent();
      if (parent.hasClass('active')){
        parent.removeClass('active');
        $('.c-course-part__content',parent).slideUp();
      }else {
        parent.addClass('active');
        $('.c-course-part__content',parent).slideDown();
      }
    });
  }
};

//function js landing teacher gallery slider
var ltGallerySlider = function(){
  if($('.js-gallery-slider').length > 0){
    $('.js-gallery-slider').owlCarousel({
      loop:true,
      responsiveClass:true,
      nav:true,
      dots:false,
      autoplay:false,
      autoHeight:false,
      autoplayTimeout:6000,
      autoplayHoverPause:false,
      navText:false,
      responsive:{
        0:{
          items:2,
          margin:10
        },
        768:{
          items:3,
          margin:20
        },
        992:{
          items:4,
          margin:30
        },
        1200:{
          items:4,
          margin:40
        }
      }
    });
  }
};

//function js landing lt testimonials slider
var ltTestimonialsSlider = function(){
  if($('.js-lt-testimonials').length > 0){
    $('.js-lt-testimonials').owlCarousel({
      loop:true,
      responsiveClass:true,
      nav:false,
      dots:false,
      autoplay:true,
      autoHeight:false,
      autoplayTimeout:8000,
      autoplayHoverPause:false,
      navText:false,
      responsive:{
        0:{
          items:1,
          margin:0
        },
        768:{
          items:3,
          margin:20
        },
        992:{
          items:3,
          margin:30
        },
        1200:{
          items:3,
          margin:40
        }
      }
    });
  }
};

//function js landing lwt prize slider
var lwtPrizeSlider = function(){
  if($('.js-lwt-prize').length > 0){
    $('.js-lwt-prize').owlCarousel({
      loop:true,
      responsiveClass:true,
      nav:false,
      dots:false,
      autoplay:true,
      autoHeight:false,
      autoplayTimeout:8000,
      autoplayHoverPause:false,
      navText:false,
      responsive:{
        0:{
          items:2,
          margin:10
        },
        768:{
          items:4,
          margin:20
        },
        992:{
          items:5,
          margin:30
        }
      }
    });
  }
};

//function js landing lwt place slider
var lwtPlaceSlider = function(){
  if($('.js-lwt-place').length > 0){
    $('.js-lwt-place').owlCarousel({
      loop:true,
      items:1,
      responsiveClass:true,
      nav:true,
      dots:false,
      autoplay:false,
      autoHeight:false,
      autoplayTimeout:6000,
      autoplayHoverPause:false,
      navText:false,
    });
  }
};

//function js landing lwt parent slider
var lwtParentSlider = function(){
  if($('.js-lwt-parent').length > 0){
    $('.js-lwt-parent').owlCarousel({
      loop:true,
      responsiveClass:true,
      nav:true,
      dots:false,
      autoplay:true,
      autoHeight:false,
      autoplayTimeout:8000,
      autoplayHoverPause:false,
      navText:false,
      responsive:{
        0:{
          items:1,
          margin:0
        },
        768:{
          items:2,
          margin:10
        },
        992:{
          items:3,
          margin:20
        },
        1200:{
          items:4,
          margin:20
        }
      }
    });
  }
};

//function js video iframe click
var videoIframeClick = function(){
  if($('.js-video-iframe').length > 0){
    $('.js-video-iframe').click(function(e) {
      e.preventDefault();
      var parent = $(this).parent();
      parent.addClass('active');
      $("iframe",parent)[0].src += "&autoplay=1";
    });
  }
};