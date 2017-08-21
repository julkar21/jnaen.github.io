(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".portfolio-area").masonry({
            
        });


        $(".menu-trigger").on('click', function(){
            $(".offcanvus-menu").addClass("active");
            $(".offcanvus-menu-overlay").addClass("active");
        });
        
        $(".menu-close, .offcanvus-menu-overlay").on('click', function(){
            $(".offcanvus-menu").removeClass("active");
            $(".offcanvus-menu-overlay").removeClass("active");
        });


    });



}(jQuery));	