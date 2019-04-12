console.log("hello world");

$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $(".video-clip").fitVids();
  });



    $('.carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });

    