$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 5,
      loop: true,
      margin: 5,
      autoplay: true,
      autoplayTimeout: 2000,
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

