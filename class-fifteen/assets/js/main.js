(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    $(".portfolio-item-list").masonry({
        
        horizontalOrder: true,
        
    });  
        
        
  $(".portfolio-filter li").on('click', function(){
      
      var filterData = $(this).attr("data-filter");
    
        $(".portfolio-item-list").isotope({
            filter: filterData,
            
        }); 
      
      $(".portfolio-filter li").removeClass('active');
      $(this).addClass('active');
        
    });
        
        
    
        $(".portfolio-item-list").isotope({
           
            itemSelector: '.singel-portfolio',
            percentPosition: true,
            
            masonry: {
            
                columnWidth: '.singel-portfolio',
                horizontalOrder: true
            }
            
        });
            
           

    });


   


}(jQuery));	