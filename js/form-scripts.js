// Табы 
var tab;  
var tabContent;   

 $(document).ready(function($) {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);   
 });    

function hideTabsContent(a) {   
for (var i=a; i<tabContent.length; i++) {
    tabContent[i].classList.remove('show'); 
    tabContent[i].classList.add("hide");
    tab[i].classList.remove('whiteborder');
}
}
document.getElementById('tabs').onclick= function (event) {
    var target=event.target;
    if (target.className=='tab') {
       for (var i=0; i<tab.length; i++) {
           if (target == tab[i]) {
               showTabsContent(i);
               break; 
}}}} 

function showTabsContent(b){ 
if (tabContent[b].classList.contains('hide')) {
    hideTabsContent(0);
    tab[b].classList.add('whiteborder');
    tabContent[b].classList.remove('hide');   
    tabContent[b].classList.add('show'); 
} 
}      
 


$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault(); 
        submitForm();
    }
}); 
 

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var service = $("#service").val();
    var message = $("#message").val();

    $.ajax({ 
        type: "POST",
        url: "php/vkform.php", //куда отправлять форму
        data: "name=" + name + "&email=" + service + "&service=" + email + +"&message=" + message,
        success : function(text){
            if (text == true){ 
                formSuccess();   
            } else {     
                formError();  
                submitMSG(false,text);
            }
        }
    }); 
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){ 
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}