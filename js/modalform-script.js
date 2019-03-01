$("#modalForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Все поля формы заполнены правильно?");
    } else {
        // everything looks good!
        event.preventDefault();  
        submitForm();
    }  
});
  
  
function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name-modalform").val();
    var email = $("#email-modalform").val();
    var message = $("#message-modalform").val();
  
    $.ajax({   
        type: "POST",    
        url: "php/modalform-process.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){ 
            if (text == "success"){
                formSuccess();  
            } else {  
                formError();
                submitMSG(false,text); 
            } 
        }
    }); 
}  
 
function formSuccess(){
    $("#modalForm")[0].reset();
    submitMSG(true, "Заявка отправлена. Ждите ответа!")
}

function formError(){
    $("#modalForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });  
} 

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit-modalform").removeClass().addClass(msgClasses).text(msg);
}  