$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 5,
      loop: true,
      margin: 6,
      autoplay: true,
      autoplayTimeout: 1000,
      dots: false,
      autoplayHoverPause: true,
      slideTransitions: 'ease',
      responsive: {
        0: {
          items: 3
        },
        360: {
          items: 4
        },
        450:{
          items: 5
        },
        768:{
          items: 5
        },
        1024: {
          items: 6
        }  
      }

    });
  })
