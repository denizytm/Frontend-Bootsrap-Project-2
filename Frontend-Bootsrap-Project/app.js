$(document).ready(function() {

    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:false,
        smartSpeed: 1000,
        navText : ['PREV','NEXT'],
        responsive:{
            0:{
                nav:false
            },
            768: {
                nav:true
            }
        }
    })

})

$(document).ready(function() {

    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        smartSpeed: 1000,
        margin:24,
        responsive:{
            0:{
                
            },
            768: {
                
            },
            1140: {
                items:2,
                center:true,
            }
        }
    })

})

$('#workers-carousel').owlCarousel({
    loop:true,
    nav:false,
    items:1,
    dots:true,
})
