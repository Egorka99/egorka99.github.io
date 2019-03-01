   
//popup
$(document).ready(function() {
	$('#header-button').on('click', function(){
		$('#main-form').show();    
	});
	$('.modalOpen-button').on('click', function(){
		$('#main-form').show()   
	});   
	$('.popup-close').on('click', function() {
		$('.overlay').hide() 
	});  
    $('.products-block__button').on('click', function() {
        $('.popup-more').show();
    });  
    $('.popup-more-close').on('click', function() {
        $('.popup-more').hide(); 
    }); 
    $('.modal-complete-open').on('click', function() {
        $('#main-form').hide();   
        $('#modal-complete').show();  
    });
});  
   
//carousel 

$(function() { 

 $(".owl-carousel").owlCarousel({
 	loop:true, 
    nav:true, 
     navText: ["<img src='./img/arrow_left.png'>", "<img src='./img/arrow_right.png'>"],
    dots: false, 
    autoHeight:true,
    responsiveClass:true,
    responsive : {
    0 : { 
    	items: 1 
    },

    768 : {
        items: 2  
    },
 
    992 : { 
        items: 3    
    }
} 
  }); 
}); 

  