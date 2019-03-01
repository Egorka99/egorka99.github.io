$(function() { 
 
 /// Настройка owl-carousel
 //	 Документация: http://owlcarousel2.github.io/OwlCarousel2/demos/demos.html
	 $(".owl-carousel").owlCarousel({
	 	loop:true, 
	    nav:true,  
	    dots: true,   
	    autoplay: true, 
	   	responsive : {
	    // breakpoint from 0 up
	    0 : {
	        items : 1,  
	    },
	    // breakpoint from 768 up 
	    480 : {
	       items: 1,   
	    }
	}      
	  });     

/// Валидация формы в модальном окне
	$('#input-name, #input-tel').on('keyup', function() { 
		var $inputName = $('#input-name');
			$inputTel = $('#input-tel');     
			valName = $inputName .val();   
    		valTel = $inputTel.val();      
       
		if (valName.length > 0 && valTel.length > 0) {
			$('#btn-ready').show(100);     
		}      
		else {   
			$('#btn-ready').hide(100);      
		}  
	});   
/// Валидация главной формы  
	$('form').on('keyup','input', function(event) { 
		var $inputName = $('.mainform-input-name');
			$inputTel = $('.mainform-input-tel');   
			valName = $inputName .val();     
    		valTel = $inputTel.val();       
        
		if (valName.length > 0 && valTel.length > 0) {
			$('.btn-main').show(100);    
		}        
		else {     
			$('.btn-main').hide(100);       
		}   
		event.preventDefault();
	});    
   
 /// Pop-Up окно      
	$(document).ready(function($) {
		$('.button , .modal-feedback-open').on('click', function(){ //открытие окна (в скобках id кнопки)
			$('#modal-feedback').show();   
		});  
		$('.popup-close').on('click', function() { //закрытие окна
			$('.overlay').hide();   
    		$('input').val(''); 
		});      
		$('#btn-ready , .btn-main').on('click', function(event) {
			$('#modal-feedback').hide();    
			$('#modal-complete').show();
		});   
	});    
  
///Прокрутка до нужного блока
// #menu назначаем тегу <ul>
// Id - секциям
// Href ссылка на id - пунктам меню 
$("#main-menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
 
    //забираем идентификатор блока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top-2;  
     
    //анимируем переход на расстояние - top за 500 мс
    $('body,html').animate({scrollTop: top}, 500);
  });   
 
/// Мобильное меню
//  
$(document).ready(function() { 
            var menuBtn = $('.top-nav_btn'); //кнопка
            var menu = $('.top-nav_menu');   // само меню
            menuBtn.on('click', function(event){  
                event.preventDefault();     
                menu.toggleClass('top-nav_menu__active'); 
            });     
        }); 

}); 
    