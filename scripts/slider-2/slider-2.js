var owl = $('.owl-two');
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
    responsive:{
        0:{
            stagePadding: 10,
            items:1
        },        
        1000:{
            items:3
        }
    }
});