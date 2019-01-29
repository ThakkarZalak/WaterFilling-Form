$(function () {

            $(".field-wrapper .field-placeholder").on("click", function () {
                $(this).closest(".field-wrapper").find("input").focus();
            });
            $(".field-wrapper input").on("keyup", function () {
                var value = $.trim($(this).val());
                if (value) {
                    $(this).closest(".field-wrapper").addClass("hasValue");
                } else {
                    $(this).closest(".field-wrapper").removeClass("hasValue");
                }
            });

        });
 
var val = 0;

function validateFunc(result, ele, span, circle, water){
    var cnt=document.getElementById(circle);
    var percent=cnt.innerText;
    var water=document.getElementById(water);
    
    var interval;
  if(result==true){
        $(ele).css("border", "1px solid green")
        $("#"+span).css("color", "green")
        if (val<100) {
        val = val + 50;
        interval=setInterval(function(){ 
            percent++; 
            cnt.innerHTML = percent; 
            water.style.transform='translate(0'+','+(100-percent)+'%)';
            if(percent==val){
                clearInterval(interval);
            }
        },20);
        }
    }
    else{
        $(ele).css("border", "1px solid red")
        $("#"+span).css("color", "red")
        if (val>=50 && val<=100) {
        val = val - 50;
        interval=setInterval(function(){ 
            percent--; 
            cnt.innerHTML = percent; 
            water.style.transform='translate(0'+','+(100-percent)+'%)';
            if(percent==val){
                clearInterval(interval);
            }
        },20);
        }
        
    }  
}
$( "#email" ).focusout(function() {
    var email = $(this).val();
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var result= re.test(String(email).toLowerCase());
    validateFunc(result, $(this), "semail" , "count", "water")
});
$( "#number" ).focusout(function() {
    var number = $(this).val();
    if(!isNaN (number) && number.length>=10){
        validateFunc(true, $(this), "num" , "count","water")
    }
    else{
        validateFunc(false, $(this), "num" , "count","water")   
    }
    
});

$(document).ready(function(){
    $(".second").hide()
    $("#btn").click(function(){
    $(".first").toggle();
    });
    $("#btn").click(function(){
    $(".second").toggle();
    });
});