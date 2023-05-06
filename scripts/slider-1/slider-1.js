var owl = $('.owl-carousel');
owl.owlCarousel({
    lazyLoad: true,
    center: true,
    autoplay: true,
    autoplaySpeed: 200,
    loop:true,
    nav:true,
    margin:10,
    mouseDrag: true,
    dots: true,
    navText:["<div style='font-size: 32px; padding: 10px; border-radius: 25px; border: 2px solid #59bcb3; background: none;'><</div>","<div style='font-size: 32px; padding: 10px; border-radius: 25px; border: 2px solid #59bcb3; background: none;'>></div>"],
    responsive:{
        0:{
            items:1,
            stagePadding: 10,
        },        
        1000:{
            items:3
        }
    }
});

/// owl.on('mousewheel', '.owl-stage', function (e) {
///    if (e.deltaY>0) {
///        owl.trigger('next.owl');
///   } else {
///       owl.trigger('prev.owl');
///   }
///    e.preventDefault();
///});
