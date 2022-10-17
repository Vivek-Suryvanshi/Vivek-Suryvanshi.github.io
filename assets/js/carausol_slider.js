/*scrolling banner*/
(function ($) {
  "use strict";

  $(document).ready(function () {
    $(".work-one").owlCarousel({
      items:4,
      nav: true,
      loop: true,
      dots: false,
      autoPlay: false,
      mouseDrag: true,
      autoplayTimeout:5000,
      navText : ["<i class='bi bi-arrow-left'></i>","<i class='bi bi-arrow-right'></i>"],
      responsive: {
        0: {
          items:1,
        },
        480: {
          items: 1,
        },
        767: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items:4,
        },
      },
    });
    
    $("#work-two").owlCarousel({
      items: 3,
      nav: true,
      loop: true,
      dots: false,
      autoPlay: false,
      mouseDrag: true,
      autoplayTimeout:5000,
      navText : ["<i class='bi bi-arrow-left'></i>","<i class='bi bi-arrow-right'></i>"],
      responsive: {
        0: {
      
          items: 1,
        },
        480: {
       
          items: 1,
        },
        767: {
     
          items:2,
        },
        992: {
      
          items: 3,
        },
        1200: {
          
          items:3,
        },
      },
    });
    
    $(".work-three").owlCarousel({
      items: 3,
      nav: true,
      loop: true,
      dots: false,
      autoPlay: false,
      mouseDrag: true,
      autoplayTimeout:5000,
      navText : ["<i class='bi bi-arrow-left'></i>","<i class='bi bi-arrow-right'></i>"],
      responsive: {
        0: {
          
          items: 1,
        },
        480: {
         
          items: 1,
        },
        767: {
       
          items:2,
        },
        992: {
         
          items: 3,
        },
        1200: {
     
          items:3,
        },
      },
    });    
    
    $('.work-four').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots:false,
      autoplay:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
    
    // $(".work-four").owlCarousel({
    //   items:1,
    //   nav: false,
    //   loop: true,
    //   dots: false,
    //   mouseDrag: true,
    //   autoplay:true,
    //   navText : ["<i class='bi bi-arrow-left'></i>","<i class='bi bi-arrow-right'></i>"]
    // });
    
  });
})(jQuery);
