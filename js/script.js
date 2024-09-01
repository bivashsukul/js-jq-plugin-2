



$(document).ready(function(){
// *----------------------  load more  --------------------------------
/*$('.box').slice(0, 4).fadeIn();
$('.load_more').click(function(){
$('.box').slice(0,30).fadeIn();
 $(this).fadeout();
});*/

$('.box').slice(0, 4).show();
$('.load_more').click(function(){
$('.box:hidden').slice(0,4).slideDown(300);
if($('.box:hidden').length==0){
  $(this).fadeout(300);
}
});




//  slick------------------- slick slider -----------------------------------
$('.wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed:300,
    //dots: true,


responsive: [

{
  breakpoint: 991,
  settings: {

  }
   },

{
  breakpoint: 767,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
    //arrows: false,
}
  },

  {
   breakpoint: 575,
   settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    }
  }

]
});
// center mode
//  slick
$('.c_mode').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,

    //dots: true,


responsive: [

{
  breakpoint: 991,
  settings: {

  }
   },

{
  breakpoint: 767,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px',
    autoplay: true,
    autoplaySpeed: 2000,
    //arrows: false,
}
  },

  {
   breakpoint: 575,
   settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px',
    autoplay: true,
    autoplaySpeed: 2000,
    }
  }

]
});

// --------------------  parallax  -----------------

$('.parallax-window').parallax({imageSrc: '/images/paralla.png'});













})











