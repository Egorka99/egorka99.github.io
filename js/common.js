$(function() { 
 
$('#main-button').hover(function() {
    $('#main-button>span').addClass('arrow');
    $('#main-button>span').removeClass('button-text');
}, function() { 
    $('#main-button>span').addClass('button-text');
    $('#main-button>span').removeClass('arrow'); 
});
     
    
$(".close-open-form").on('click', function(event) {
	jQuery.noConflict(); 
	$('.project-modal').modal('hide')   
	$('#form-modal').modal('show')   
	event.preventDefault();  
	/* Act on the event */ 
});	 
  
 
///Прокрутка до нужного блока
// #menu назначаем тегу <ul>
// Id - секциям
// Href ссылка на id - пунктам меню  
$("#menu, #menu2").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор блока с атрибута href
    var id  = $(this).attr('href'),
 
    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top; 
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1000);
  });   
 
});  
     