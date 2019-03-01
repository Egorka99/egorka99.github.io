$(function() {

	//carousel
  
 $(".owl-carousel").owlCarousel({
 	loop:true, 
    nav:true, 
    dots: false, 
    autoplay: true, 
   	responsive : {
    // breakpoint from 0 up
    0 : {
        items : 1,    
    },
    // breakpoint from 768 up
    480 : {
       items: 2,   
    }
}  
  });     

$( ".heart1, .heart2" ).click(function() { 
  $( this ).toggleClass( "fas far" );
});

$("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top -50;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 500);
  }); 
    
$(document).ready(function() {   
            var menuBtn = $('.header-btn'); //кнопка
            var menu = $('.header-menu');   // само меню
            menuBtn.on('click', function(event){   
                event.preventDefault();     
                menu.toggleClass('header-menu__active'); 
            });     
        });  
          
});    
