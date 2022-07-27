//var function init call
var initReady = function(){
  //function run
	calMatchHeight();
  scrollHeaderLanding();
  menuMobileExpand();
  submenuMobileExpand();
  menuInsideClick();
  footerExpand();
  mainSlider();
  fancyboxPopupView();
  sliderManual3();
  sliderManualTiny3();
  sliderManualBig3();
  sliderManualZezo3();
  sliderPrize();
  courseMoreLearn();
  courseContentExpand();
  ltGallerySlider();
  ltTestimonialsSlider();
  lwtPrizeSlider();
  lwtPlaceSlider();
  lwtParentSlider();
  videoIframeClick();
};
var initLoad = function(){
  //function run
};
var initResize = function(){
  //function run
};

//document ready before js
$(document).ready(function(){

  //js autoload when document ready
  initReady();

});

//window load all before js
$(window).on("load", function (e) {

  //js autoload when window load
  initLoad();

});

//window resize before js
$(window).resize(function() {

  //js autoload when window resize
  initResize();

});