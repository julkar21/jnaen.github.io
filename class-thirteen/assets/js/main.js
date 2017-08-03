(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    $('.welcome-area').YTPlayer({
    fitToBackground: true,
    videoId: 'LSmgKRx5pBo'
});

        


    });


    jQuery(document).ready(function($){
        
        
        var homepageslides = $(".welcome-slide");

         homepageslides.owlCarousel({
            
            items: 1,
            margin: 30,
            loop: true,
            nav: true,
            dots: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
           
        });    

        homepageslides.on('translate.owl.carousel', function(event) {
		    $('.welcome-area-text p').removeClass('animated slideInLeft');
		    $('.welcome-area-text h1').removeClass('animated fadeInUp');
		    $('.welcome-area-text p').removeClass('animated fadeInRightBig');
		})
        
        homepageslides.on('translated.owl.carousel', function(event) {
		    $('.welcome-area-text p').addClass('animated slideInLeft');
		    $('.welcome-area-text h1').addClass('animated fadeInUp');
		    $('.welcome-area-text p').addClass('animated fadeInRightBig');
		})
        
    });


}(jQuery));	