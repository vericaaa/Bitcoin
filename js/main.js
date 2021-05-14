$(document).ready(function () {


    $('.lead-slider').bxSlider({
        
        speed: 1000,
        controls: false,
        auto: true,
        pause: 5000
        
    });

    
    if($('.client-slider').length > 0){
        $('.client-slider').owlCarousel({
            items: 6,
            margin: 40,
            loop: true,
            dots: false,
            responsive:{
                0:{
                    items:1,
                    margin:0
                },
                428:{
                    items:2
                },
                576:{
                    items:3
                },
                768:{
                    items:4
                },
                992:{
                    items:6
                }
            }
        });
    }


});

